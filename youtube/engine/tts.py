"""Offline neural TTS for Sketch Clinic (Kokoro-82M via kokoro-onnx).

Usage (called by render.js):  python3 tts.py <jobs.json>
jobs.json: [{"lang": "en", "text": "...", "out": "/abs/path.wav"}, ...]
Prints a JSON list of clip durations (seconds) in the same order.
Clips are cached: an existing <out> whose sidecar <out>.txt matches voice+text is reused.

Model files (kokoro-v1.0.onnx, voices-v1.0.bin; Apache-2.0) are read from $KOKORO_DIR
(default ~/.cache/kokoro) and downloaded from the kokoro-onnx GitHub release if missing.
"""
import json, os, re, sys, urllib.request
from pathlib import Path

VOICES = {  # one consistent voice per language
    "en": ("af_heart", "en-us"),
    "es": ("ef_dora", "es"),
    "fr": ("ff_siwis", "fr-fr"),
    "ja": ("jf_alpha", "ja"),
}
SPEED = {"en": 1.05, "es": 1.08, "fr": 1.08, "ja": 1.05}
REL = "https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/"
KDIR = Path(os.environ.get("KOKORO_DIR", Path.home() / ".cache" / "kokoro"))


def model_files():
    KDIR.mkdir(parents=True, exist_ok=True)
    out = []
    for name in ("kokoro-v1.0.onnx", "voices-v1.0.bin"):
        p = KDIR / name
        if not p.exists():
            print(f"downloading {name} ...", file=sys.stderr)
            urllib.request.urlretrieve(REL + name, str(p) + ".part")
            os.replace(str(p) + ".part", p)
        out.append(str(p))
    return out


def clean(text):
    t = text.replace("*", "")
    t = re.sub(r"\s+", " ", t).strip()
    return t


def main():
    jobs = json.loads(Path(sys.argv[1]).read_text())
    kokoro = g2p_ja = None
    import soundfile as sf
    durs = []
    for j in jobs:
        voice, lang = VOICES[j["lang"]]
        speed = SPEED[j["lang"]]
        text = clean(j["text"])
        out = Path(j["out"])
        key = f"{voice}|{speed}|{text}"
        side = out.with_suffix(out.suffix + ".txt")
        if out.exists() and side.exists() and side.read_text() == key:
            durs.append(sf.info(str(out)).duration)
            continue
        if kokoro is None:
            from kokoro_onnx import Kokoro
            kokoro = Kokoro(*model_files())
        if j["lang"] == "ja":
            if g2p_ja is None:
                from misaki import ja
                g2p_ja = ja.JAG2P()
            samples, sr = kokoro.create(g2p_ja(text), voice=voice, speed=speed, lang=lang, is_phonemes=True)
        else:
            samples, sr = kokoro.create(text, voice=voice, speed=speed, lang=lang)
        out.parent.mkdir(parents=True, exist_ok=True)
        sf.write(str(out), samples, sr)
        side.write_text(key)
        durs.append(len(samples) / sr)
    print(json.dumps(durs))


if __name__ == "__main__":
    main()
