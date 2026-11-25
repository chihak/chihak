# Sketch Clinic — YouTube channel setup & upload plan

> **For the user (한국어 요약):** 이 문서를 Aside에게 그대로 넘기면 됩니다. 채널 만들기 → 로고/배너 → 영상 업로드 순서로 진행하고, 영상은 처음엔 **비공개(Private)**로 올립니다. 공개 전환은 직접 확인 후에 하세요.

## Instructions for the browser agent
You are working in the user's own browser, already signed in to their Google account. Do the steps in order. Do not change any other Google/YouTube settings. Do not make anything Public — leave every video **Private** (the user will review and publish). Stop and ask the user if Google asks for a password, phone verification, payment, or anything not described here. When done, report the channel URL and the list of uploaded video URLs.

All files are in this folder (`youtube/release/` of the repository branch `claude/vibrant-mayer-8ogz3v`, download/clone it to the computer first).

## Step 1 — Create the channel
1. Go to https://www.youtube.com → profile icon → **Create a channel** (if the account already has a personal channel, create a new channel via Settings → **Add or manage your channel(s)** → **Create a channel**, so it becomes a separate brand channel).
2. Name: **Sketch Clinic**
3. Handle: **@SketchClinic** (if taken, try @SketchClinicMD, then @SketchClinicHealth)
4. Profile picture: `logo-800.png`
5. In YouTube Studio → Customization → Branding: Banner image `banner-2560x1440.png`.
6. Customization → Basic info → Description:

```
Your body, explained in 60 seconds. Short hand-drawn explainers about the everyday medical questions people wonder about — in English, Español, Français and 日本語.
Educational only — not medical advice. If you have symptoms, see a healthcare professional.
```

7. Settings → Channel → Basic info: Country = (user's choice), keywords: `health, medical explained, body, shorts, first aid, sketch clinic`.
8. Settings → Upload defaults: Visibility **Private**, Category **Education**, Audience **No, it's not made for kids**.

## Step 2 — Upload videos (Private)
Upload from YouTube Studio → **Create → Upload videos**. For each video below fill in exactly the title, description and tags, then:
- Audience: **No, it's not made for kids**
- Show more → Language: the video's language (below); Category: Education
- Altered or synthetic content: **No** (hand-drawn animation, no realistic people)
- Visibility: **Private** → Save

Phase 1 uploads the **English** versions only. The Spanish, French and Japanese versions are ready in the same folders; upload them only if the user says so (they may become separate channels later).

### ep01-stroke — English
- File: `ep01-stroke/ep01-stroke-en.mp4`
- Video language: English
- Title: `5 Signs of a Stroke You Must Know (BE FAST) #Shorts`
- Description:
```
Every minute counts in a stroke. Learn the BE FAST signs: Balance, Eyes, Face, Arms, Speech, Time.
If you notice them, call emergency services right away, even if the symptoms go away.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#stroke #befast #health #firstaid #shorts
```
- Tags: `stroke, stroke signs, BE FAST, stroke symptoms, brain health, first aid, health tips, medical explained, emergency, sketch clinic`

### ep01-stroke — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep01-stroke/ep01-stroke-es.mp4`
- Video language: Spanish
- Title: `5 señales de un derrame cerebral que debes conocer #Shorts`
- Description:
```
En un derrame cerebral, cada minuto cuenta. Aprende las 5 señales: equilibrio, ojos, cara, brazos y habla.
Si las notas, llama a emergencias de inmediato, aunque los síntomas desaparezcan.

Solo con fines educativos — no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#derramecerebral #ACV #ictus #salud #shorts
```
- Tags: `derrame cerebral, ACV, ictus, señales de derrame, síntomas de ACV, salud, primeros auxilios, emergencia, salud cerebral, sketch clinic`

### ep01-stroke — French  *(Phase 2 — only if the user asks)*
- File: `ep01-stroke/ep01-stroke-fr.mp4`
- Video language: French
- Title: `5 signes d'un AVC à connaître absolument #Shorts`
- Description:
```
Lors d'un AVC, chaque minute compte. Retiens les 5 signes : équilibre, yeux, visage, bras et parole.
Si tu les remarques, appelle les secours immédiatement (15 ou 112), même si les symptômes disparaissent.

À but éducatif uniquement — ce n'est pas un avis médical. En cas de symptômes, consulte un professionnel de santé.

#AVC #santé #premierssecours #cerveau #shorts
```
- Tags: `AVC, accident vasculaire cérébral, signes AVC, symptômes AVC, santé, premiers secours, urgence, cerveau, santé explication, sketch clinic`

### ep01-stroke — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep01-stroke/ep01-stroke-ja.mp4`
- Video language: Japanese
- Title: `知っておきたい脳卒中の5つのサイン #Shorts`
- Description:
```
脳卒中は1分1秒が大切です。バランス・目・顔・腕・言葉の5つのサインを覚えておきましょう。
気づいたら、症状が治まってもすぐに119番へ。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#脳卒中 #健康 #応急処置 #医療 #shorts
```
- Tags: `脳卒中, 脳梗塞, 脳出血, 脳卒中 サイン, 脳卒中 症状, 健康, 応急処置, 119, 医療解説, sketch clinic`

## Not ready yet
These episodes are still being produced and will be added to this plan later: ep02-heart-attack, ep05-hiccups, ep08-head-rush, ep09-nosebleed

## Step 3 — Report back
Send the user: channel URL, and a table of episode → video URL (all Private).