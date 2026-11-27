"""Collect finished episodes into youtube/release/ and write UPLOAD_PLAN.md for the browser agent.

Usage: python3 youtube/make_release.py
An episode is included when all four language MP4s exist in youtube/out/<id>/ and <id>.meta.json exists.
"""
import json, shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent
LANGS = ["en", "es", "fr", "ja"]
LANG_NAMES = {"en": "English", "es": "Spanish", "fr": "French", "ja": "Japanese"}
REL = ROOT / "release"
REL.mkdir(exist_ok=True)

ready, pending = [], []
for ep_file in sorted((ROOT / "episodes").glob("ep*.json")):
    if ep_file.name.endswith(".meta.json"):
        continue
    ep = json.loads(ep_file.read_text())
    meta_file = ep_file.with_name(ep["id"] + ".meta.json")
    out = ROOT / "out" / ep["id"]
    mp4s = {l: out / f"{ep['id']}-{l}.mp4" for l in LANGS}
    if meta_file.exists() and all(p.exists() for p in mp4s.values()):
        dst = REL / ep["id"]
        dst.mkdir(exist_ok=True)
        for l in LANGS:
            shutil.copy2(mp4s[l], dst / mp4s[l].name)
            cover = out / f"{ep['id']}-{l}-cover.png"
            if cover.exists():
                shutil.copy2(cover, dst / cover.name)
        shutil.copy2(meta_file, dst / meta_file.name)
        ready.append((ep["id"], json.loads(meta_file.read_text())))
    else:
        pending.append(ep["id"])

shutil.copy2(ROOT / "brand" / "logo-800.png", REL / "logo-800.png")
shutil.copy2(ROOT / "brand" / "banner-2560x1440.png", REL / "banner-2560x1440.png")

L = []
w = L.append
w("# Sketch Clinic — YouTube channel setup & upload plan")
w("")
w("> **For the user (한국어 요약):** 이 문서를 Aside에게 그대로 넘기면 됩니다. 채널에 아직 없는 영상만 골라 **바로 공개(Public)**로 올립니다.")
w("")
w("## Instructions for the browser agent")
w("You are working in the user's own browser, already signed in to their Google account. Do the steps in order. "
  "Do not change any other Google/YouTube settings. The user has asked for videos to be published **Public** right away. Stop and ask the user if Google asks for a password, phone verification, "
  "payment, or anything not described here. When done, report the channel URL and the list of uploaded video URLs.")
w("")
w("All files are in this folder (`youtube/release/` of the repository branch `claude/vibrant-mayer-8ogz3v`, "
  "download/clone it to the computer first).")
w("")
w("## Step 1 — Channel (skip if https://www.youtube.com/@SketchClinic already exists)")
w("1. Go to https://www.youtube.com → profile icon → **Create a channel** (if the account already has a personal channel, "
  "create a new channel via Settings → **Add or manage your channel(s)** → **Create a channel**, so it becomes a separate brand channel).")
w("2. Name: **Sketch Clinic**")
w("3. Handle: **@SketchClinic** (if taken, try @SketchClinicMD, then @SketchClinicHealth)")
w("4. Profile picture: `logo-800.png`")
w("5. In YouTube Studio → Customization → Branding: Banner image `banner-2560x1440.png`.")
w("6. Customization → Basic info → Description:")
w("")
w("```")
w("Your body, explained in 60 seconds. Short hand-drawn explainers about the everyday medical questions people wonder about — in English, Español, Français and 日本語.")
w("Educational only — not medical advice. If you have symptoms, see a healthcare professional.")
w("```")
w("")
w("7. Settings → Channel → Basic info: Country = (user's choice), keywords: `health, medical explained, body, shorts, first aid, sketch clinic`.")
w("8. Settings → Upload defaults: Visibility **Public**, Category **Education**, Audience **No, it's not made for kids**.")
w("")
w("## Step 2 — Upload new videos (Public)")
w("First open YouTube Studio → Content and note every title already on the channel. **Skip any video below whose title (or a near-identical title) is already there** — never upload a duplicate. "
  "For each remaining video, upload from **Create → Upload videos**, fill in exactly the title, description and tags, then:")
w("- Audience: **No, it's not made for kids**")
w("- Show more → Language: the video's language (below); Category: Education")
w("- Altered or synthetic content: **No** (hand-drawn animation, no realistic people)")
w("- Visibility: **Public** → Publish")
w("")
w("Phase 1 uploads the **English** versions only. The Spanish, French and Japanese versions are ready in the same folders; "
  "upload them only if the user says so (they may become separate channels later).")
w("")
for ep_id, meta in ready:
    for l in LANGS:
        m = meta[l]
        tag = "" if l == "en" else "  *(Phase 2 — only if the user asks)*"
        w(f"### {ep_id} — {LANG_NAMES[l]}{tag}")
        w(f"- File: `{ep_id}/{ep_id}-{l}.mp4`")
        w(f"- Video language: {LANG_NAMES[l]}")
        w(f"- Title: `{m['title']}`")
        w("- Description:")
        w("```")
        w(m["description"])
        w("```")
        w(f"- Tags: `{', '.join(m['tags'])}`")
        w("")
if pending:
    w("## Not ready yet")
    w("These episodes are still being produced and will be added to this plan later: " + ", ".join(pending))
    w("")
w("## Step 3 — Report back")
w("Send the user: a table of episode → video URL for what you uploaded this time, and which ones you skipped as already present.")
(REL / "UPLOAD_PLAN.md").write_text("\n".join(L))
print("ready:", [r[0] for r in ready])
print("pending:", pending)
