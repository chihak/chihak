"""Trend scan for Sketch Clinic.

Collects public Shorts titles + view counts from our own channel, reference channels and
curiosity-style YouTube searches, then writes youtube/trends/<date>.md.

Usage: python3 youtube/trends/analyze.py
"""
import datetime, json, re, sys, time, urllib.parse, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OWN = "SketchClinic"
CHANNELS = ["drwealz", "HealthSketch", "fitlifejourney", "IndiraZangana", "med-animationmedical6533"]
QUERIES = [
    "why does your body #shorts", "why do we #shorts body", "what happens when you body #shorts",
    "body explained animation #shorts", "weird body facts #shorts", "medical name for #shorts",
    "why does it hurt when #shorts", "doctor explains why #shorts",
]
UA = {"Accept-Language": "en-US,en;q=0.9", "User-Agent": "Mozilla/5.0"}
ITEM = re.compile(r'"accessibilityText":"((?:[^"\\]|\\.){3,220}?), ([\d.,]+(?: thousand| million| billion)?|No) views? - play Short"')


def fetch(url):
    req = urllib.request.Request(url, headers=UA)
    for i in range(3):
        try:
            return urllib.request.urlopen(req, timeout=25).read().decode("utf-8", "ignore")
        except Exception as e:  # network hiccup
            err = e; time.sleep(2 * (i + 1))
    print(f"warn: {url}: {err}", file=sys.stderr)
    return ""


def views(s):
    if s == "No":
        return 0
    m = re.match(r"([\d.,]+)(?: (thousand|million|billion))?", s)
    n = float(m.group(1).replace(",", ""))
    return int(n * {None: 1, "thousand": 1e3, "million": 1e6, "billion": 1e9}[m.group(2)])


def items(html):
    out, seen = [], set()
    for t, v in ITEM.findall(html):
        t = json.loads('"' + t + '"')
        if t not in seen:
            seen.add(t); out.append((t, views(v)))
    return out


def done_titles():
    titles = []
    for f in (ROOT / "episodes").glob("*.meta.json"):
        try:
            titles.append(json.loads(f.read_text())["en"]["title"])
        except Exception:
            pass
    return titles


def main():
    today = datetime.date.today().isoformat()
    L = [f"# Trend scan — {today}", ""]
    own = items(fetch(f"https://www.youtube.com/@{OWN}/shorts"))
    L += ["## Our channel (@SketchClinic) — recent Shorts by views", ""]
    for t, v in sorted(own, key=lambda x: -x[1]):
        L.append(f"- {v:>8,}  {t}")
    if own:
        avg = sum(v for _, v in own) / len(own)
        L += ["", f"Average views: {avg:,.0f} over {len(own)} Shorts."]
    L.append("")
    pool = []
    for ch in CHANNELS:
        its = items(fetch(f"https://www.youtube.com/@{ch}/shorts"))
        pool += [(t, v, "@" + ch) for t, v in its]
        L += [f"## @{ch} — top recent Shorts", ""]
        L += [f"- {v:>10,}  {t}" for t, v in sorted(its, key=lambda x: -x[1])[:8]] or ["- (no data)"]
        L.append("")
    L += ["## Search results (curiosity queries) — top by views", ""]
    seen = set()
    for q in QUERIES:
        for t, v in items(fetch("https://www.youtube.com/results?search_query=" + urllib.parse.quote(q))):
            if t not in seen:
                seen.add(t); pool.append((t, v, "search: " + q))
    for t, v, src in sorted([p for p in pool if p[2].startswith("search")], key=lambda x: -x[1])[:40]:
        L.append(f"- {v:>10,}  {t}")
    L += ["", "## Already made by Sketch Clinic (do not repeat)", ""]
    L += [f"- {t}" for t in sorted(done_titles())]
    L += [f"- {t}  (on channel)" for t, _ in own if t not in done_titles()]
    out = ROOT / "trends" / f"{today}.md"
    out.write_text("\n".join(L) + "\n")
    print(out)


if __name__ == "__main__":
    main()
