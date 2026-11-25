// Usage: node render.js <episode.json> [langs=en,es,fr,ja] [--fps 30] [--preview]
// Writes <outdir>/<id>-<lang>.mp4 and <id>-<lang>-cover.png next to the episode file (in ../out/<id>/).
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

(async () => {
  const args = process.argv.slice(2);
  const epPath = path.resolve(args[0]);
  const langs = (args[1] && !args[1].startsWith('--') ? args[1] : 'en,es,fr,ja').split(',');
  const fps = args.includes('--fps') ? +args[args.indexOf('--fps') + 1] : 30;
  const preview = args.includes('--preview');
  const ep = JSON.parse(fs.readFileSync(epPath, 'utf8'));
  const outDir = path.resolve(path.dirname(epPath), '..', 'out', ep.id);
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'player.html'));

  for (const lang of langs) {
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
    const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error',
      '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
      '-f', 'lavfi', '-i', 'anullsrc=channel_layout=stereo:sample_rate=48000',
      '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p',
      '-c:a', 'aac', '-shortest', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
    const frames = Math.ceil(total * fps);
    for (let f = 0; f < frames; f++) {
      await page.evaluate(t => window.render(t), f / fps);
      const buf = await page.screenshot({ type: 'jpeg', quality: 92 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    }
    ff.stdin.end();
    await new Promise((res, rej) => ff.on('close', c => c === 0 ? res() : rej(new Error('ffmpeg ' + c))));
    console.log(`${out}  (${total.toFixed(1)}s, ${frames} frames)`);
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
