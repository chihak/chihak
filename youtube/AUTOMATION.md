# Sketch Clinic — recurring production runbook

> The live automation is the cloud scheduled task "Sketch Clinic episode every 3h (8/day)", whose prompt is authoritative (one episode per run, TOPICS.md claims, narrated render, Aside hand-off, Public). This file is background on the trend step only.

Each run: analyse trends → make 3 new curiosity Shorts (EN/ES/FR/JA) → refresh the release package
and upload plan → commit and push. The user's browser agent (Aside, on the user's home PC) pulls the
branch and uploads new videos **Public** using `youtube/release/UPLOAD_PLAN.md`.

Branch: `claude/vibrant-mayer-8ogz3v` (fetch and merge it first; never force-push).

## 1. Trends
```bash
python3 youtube/trends/analyze.py
```
Read the new `youtube/trends/<date>.md`:
- Our own channel: which topics/title styles get the most views (so far: "What Really Happens When…",
  "(It Has a Name)", strange-but-relatable body phenomena beat emergency-sign lists).
- Reference channels and searches: recurring high-view themes (body quirks, "what happens inside your
  body when…", medical names for everyday things).
- Never repeat a topic in "Already made".

Pick **3** new topics: curiosity-first, everyday body phenomena, medically well-established, drawable
with simple 2D line art. Skip anything sensational, gross-out-only, cosmetic/procedure promotion,
or where the science is unsettled unless you say so plainly.

## 2. Produce
Next free episode numbers (`ls youtube/episodes`). For each topic, write
`youtube/episodes/epNN-<slug>.json` and `epNN-<slug>.meta.json` following the format of
`ep04-knuckle-cracking.json` / `ep06-eye-twitch.json` and the rules in the engine
(`youtube/engine/player.html`):
- 35–45 s incl. 2.8 s outro; scenes 4–6.5 s; captions ≤ ~16 English words; all words in `texts`
  (localized en/es/fr/ja), never inside the svg; French non-breaking space before `: ? ! ;`;
  Japanese line 1 ≈ 16 chars.
- Medical accuracy first; "scientists think" where unsettled; a "see a doctor if…" scene only for
  genuine red flags; translated disclaimer in every description.
- Metadata titles ≤ 70 chars ending in `#Shorts`.

Preview, look at the frames, fix, then render (one render per episode at a time):
```bash
cd youtube/engine && node render.js ../episodes/epNN-<slug>.json en,es,fr,ja --preview
cd youtube/engine && node render.js ../episodes/epNN-<slug>.json en,es,fr,ja
```
Verify every MP4 with `ffprobe -v error -show_entries format=duration -of csv=p=0 <file>`.
If Japanese text renders as boxes, install fonts first: `apt-get install -y fonts-noto-cjk`.

## 3. Release
```bash
python3 youtube/make_release.py
```
This copies finished episodes into `youtube/release/` and rewrites `UPLOAD_PLAN.md` (Public; the
browser agent skips titles already on the channel).

## 4. Commit and push
Commit episodes, trends report, and release folder (not `youtube/out/`), push to the branch.

## 5. Report
Short summary for the user in Korean: trend findings (2–3 bullets), the 3 new episodes (EN titles),
anything medically borderline, and the reminder that Aside picks up `youtube/release/UPLOAD_PLAN.md`.
