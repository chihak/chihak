// Usage: node render.js <episode.json> [langs=en,es,fr,ja] [--fps 30] [--preview] [--no-voice]
// Writes <id>-<lang>.mp4, <id>-<lang>.srt and <id>-<lang>-cover.png to ../out/<id>/.
//
// Dependencies:
//   - Node: playwright (Chromium) ; system: ffmpeg
//   - Narration (default on): python3 with `pip install kokoro-onnx soundfile misaki fugashi jaconv mojimoji
//     pyopenjtalk-plus` plus the unidic-lite dictionary (see README.md). TTS is done offline by tts.py
//     (Kokoro-82M, Apache-2.0); model files are fetched once into $KOKORO_DIR (default ~/.cache/kokoro).
//
// Narration: each scene is voiced from scene.narration[lang] if present, else from its caption with
// *emphasis* markers stripped. When `narration` is given it also replaces the on-screen caption, so the
// burned-in text always matches the speech. A scene is lengthened if its clip (+ lead/tail) is longer
// than scene.dur. Loudness is normalized to -14 LUFS (two-pass loudnorm).
const { chromium } = require('playwright');
const { spawn, spawnSync, execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LEAD = 0.25;  // speech starts this long after the scene cut (after the caption fade-in)
const TAIL = 0.45;  // minimum silence after a line before the next scene
const OUTRO_DUR = 2.8; // must match player.html

const L = (o, lang) => o == null ? '' : typeof o === 'string' ? o : (o[lang] ?? o.en ?? '');
const strip = s => s.replace(/\*/g, '').replace(/\s+/g, ' ').trim();

function run(cmd, args) {
  return execFileSync(cmd, args, { encoding: 'utf8', maxBuffer: 1 << 26, stdio: ['ignore', 'pipe', 'pipe'] });
}

// Returns { ep (timeline adjusted, captions = narration), clips: [{file,start,dur,text}], total }
function narrate(ep, lang, outDir) {
  const ttsDir = path.join(outDir, 'tts');
  const jobs = ep.scenes.map((sc, i) => ({
    lang, text: strip(L(sc.narration, lang) || L(sc.caption, lang)),
    out: path.join(ttsDir, `${lang}-${String(i).padStart(2, '0')}.wav`)
  }));
  const voiced = jobs.filter(j => j.text);
  const jf = path.join(ttsDir, `jobs-${lang}.json`);
  fs.mkdirSync(ttsDir, { recursive: true });
  fs.writeFileSync(jf, JSON.stringify(voiced));
  const durs = JSON.parse(run('python3', [path.join(__dirname, 'tts.py'), jf]).trim().split('\n').pop());
  voiced.forEach((j, k) => { j.dur = durs[k]; });
  const e = JSON.parse(JSON.stringify(ep));
  const clips = [];
  let t = 0;
  e.scenes.forEach((sc, i) => {
    const j = jobs[i];
    if (sc.narration && L(sc.narration, lang)) sc.caption = { ...(typeof sc.caption === 'object' ? sc.caption : {}), [lang]: L(sc.narration, lang) };
    if (j.text) {
      sc.dur = Math.max(sc.dur, +(LEAD + j.dur + TAIL).toFixed(2));
      clips.push({ file: j.out, start: t + LEAD, dur: j.dur, text: j.text });
    }
    t += sc.dur;
  });
  return { ep: e, clips, total: t + (ep.noOutro ? 0 : OUTRO_DUR) };
}

function mixAudio(clips, total, out) {
  const args = ['-y', '-hide_banner'];
  clips.forEach(c => args.push('-i', c.file));
  const parts = clips.map((c, i) => `[${i}:a]aresample=48000,adelay=${Math.round(c.start * 1000)}:all=1[a${i}]`);
  const mix = `${clips.map((_, i) => `[a${i}]`).join('')}amix=inputs=${clips.length}:normalize=0,apad,atrim=0:${total.toFixed(3)}`;
  const base = parts.join(';') + ';' + mix;
  // pass 1: measure
  const p1 = spawnSync('ffmpeg', [...args, '-filter_complex', base + ',loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json', '-f', 'null', '-'],
    { encoding: 'utf8', maxBuffer: 1 << 26 }).stderr || '';
  const mm = /\{[^{}]*"input_i"[^{}]*\}/s.exec(p1);
  const m = mm ? JSON.parse(mm[0]) : {};
  const ln = m.input_i
    ? `loudnorm=I=-14:TP=-1.5:LRA=11:measured_I=${m.input_i}:measured_TP=${m.input_tp}:measured_LRA=${m.input_lra}:measured_thresh=${m.input_thresh}:offset=${m.target_offset}:linear=true`
    : 'loudnorm=I=-14:TP=-1.5:LRA=11';
  run('ffmpeg', [...args, '-loglevel', 'error', '-filter_complex', base + `,${ln},aresample=48000,aformat=channel_layouts=stereo`, '-c:a', 'pcm_s16le', out]);
}

function srtTime(s) {
  const ms = Math.max(0, Math.round(s * 1000));
  const p = (n, w = 2) => String(n).padStart(w, '0');
  return `${p(Math.floor(ms / 3600000))}:${p(Math.floor(ms / 60000) % 60)}:${p(Math.floor(ms / 1000) % 60)},${p(ms % 1000, 3)}`;
}

// One cue per sentence, timed proportionally to character count within each clip.
function writeSrt(clips, out) {
  const cues = [];
  for (const c of clips) {
    const sents = c.text.match(/[^.!?。！？]+[.!?。！？…]*["”」』)]*\s*/g)?.map(s => s.trim()).filter(Boolean) || [c.text];
    const n = sents.reduce((a, s) => a + s.length, 0);
    let t = c.start;
    for (const s of sents) {
      const d = c.dur * s.length / n;
      cues.push([t, t + d, s]); t += d;
    }
  }
  fs.writeFileSync(out, cues.map(([a, b, s], i) => `${i + 1}\n${srtTime(a)} --> ${srtTime(b)}\n${s}\n`).join('\n'));
}

(async () => {
  const args = process.argv.slice(2);
  const epPath = path.resolve(args[0]);
  const langs = (args[1] && !args[1].startsWith('--') ? args[1] : 'en,es,fr,ja').split(',');
  const fps = args.includes('--fps') ? +args[args.indexOf('--fps') + 1] : 30;
  const preview = args.includes('--preview');
  const voice = !args.includes('--no-voice');
  const ep0 = JSON.parse(fs.readFileSync(epPath, 'utf8'));
  const outDir = path.resolve(path.dirname(epPath), '..', 'out', ep0.id);
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'player.html'));

  for (const lang of langs) {
    let ep = ep0, clips = [];
    if (voice) ({ ep, clips } = narrate(ep0, lang, outDir));
    const total = await page.evaluate(([e, l]) => window.setup(e, l), [ep, lang]);
    await page.evaluate(() => document.fonts.ready);
    // cover frame
    const coverT = ep.coverTime ?? total / 2;
    await page.evaluate(t => window.render(t), coverT);
    await page.screenshot({ path: path.join(outDir, `${ep.id}-${lang}-cover.png`) });
    if (preview) {
      // contact frames at the end of each scene
      let t = 0; let i = 0;
      for (const sc of ep.scenes) { t += sc.dur; await page.evaluate(x => window.render(x), t - 0.35);
        await page.screenshot({ path: path.join(outDir, `preview-${lang}-${String(i++).padStart(2, '0')}.png`) }); }
      continue;
    }
    const out = path.join(outDir, `${ep.id}-${lang}.mp4`);
    const audioIn = ['-f', 'lavfi', '-i', 'anullsrc=channel_layout=stereo:sample_rate=48000'];
    if (voice && clips.length) {
      const wav = path.join(outDir, 'tts', `mix-${lang}.wav`);
      mixAudio(clips, total, wav);
      audioIn.splice(0, audioIn.length, '-i', wav);
      writeSrt(clips, path.join(outDir, `${ep.id}-${lang}.srt`));
    }
    const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error',
      '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-', ...audioIn,
      '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p',
      '-c:a', 'aac', '-b:a', '192k', '-t', total.toFixed(3), '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
    const frames = Math.ceil(total * fps);
    for (let f = 0; f < frames; f++) {
      await page.evaluate(t => window.render(t), f / fps);
      const buf = await page.screenshot({ type: 'jpeg', quality: 92 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    }
    ff.stdin.end();
    await new Promise((res, rej) => ff.on('close', c => c === 0 ? res() : rej(new Error('ffmpeg ' + c))));
    console.log(`${out}  (${total.toFixed(1)}s, ${frames} frames, ${clips.length} voiced scenes)${total > 60 ? '  WARNING: over 60 s' : ''}`);
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
