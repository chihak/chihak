# Sketch Clinic render engine

`node render.js <episode.json> [en,es,fr,ja] [--fps 30] [--preview] [--no-voice]`
→ `youtube/out/<id>/<id>-<lang>.mp4`, `<id>-<lang>.srt`, `<id>-<lang>-cover.png`

- `player.html` draws the hand-drawn scenes (Chromium via Playwright); frames are piped to ffmpeg.
- **Narration** (on by default): `tts.py` voices every scene offline with [Kokoro-82M](https://github.com/thewh1teagle/kokoro-onnx) (Apache-2.0).
  - Text: `scene.narration[lang]` if present, otherwise the scene's `caption[lang]` with `*emphasis*` stripped.
    If `narration` is set it also replaces the burned-in caption, so on-screen text always matches the speech.
  - Voices (one per language): en `af_heart`, es `ef_dora`, fr `ff_siwis`, ja `jf_alpha` (Japanese G2P via misaki + unidic).
  - Each clip starts 0.25 s into its scene; if clip + 0.7 s is longer than `scene.dur`, the scene is lengthened
    (the adjusted timeline is passed to `window.setup`). Speech is never cut.
  - Mixed and normalized to −14 LUFS (two-pass `loudnorm`), AAC 192 kb/s. No music bed.
  - The sidecar `.srt` has one cue per sentence, timed to the TTS clips; `make_release.py` copies it into `release/`.
  - Clips are cached in `out/<id>/tts/` (keyed by voice + text), so re-renders only synthesize changed lines.
- Keep Shorts ≤ 60 s: the render prints a warning when the total goes over. Shorten via `narration`.

## Setup

```bash
pip install kokoro-onnx soundfile misaki fugashi jaconv mojimoji pyopenjtalk-plus
# unidic-lite's setup.py fails on new setuptools; install the dictionary by hand:
pip download unidic-lite --no-deps --no-binary :all: -d /tmp/ud && tar xzf /tmp/ud/unidic-lite-*.tar.gz -C /tmp/ud \
  && cp -r /tmp/ud/unidic-lite-*/unidic_lite "$(python3 -c 'import site;print(site.getsitepackages()[0])')/"
```

Model files (`kokoro-v1.0.onnx`, `voices-v1.0.bin`, ~350 MB) are downloaded from GitHub on first use into
`$KOKORO_DIR` (default `~/.cache/kokoro`). Also needed: Node + `playwright`, `ffmpeg`.
