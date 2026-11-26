# Sketch Clinic — YouTube channel setup & upload plan

> **For the user (한국어 요약):** 이 문서를 Aside에게 그대로 넘기면 됩니다. 채널 만들기 → 로고/배너 → 영상 업로드 순서로 진행하고, 영상은 **공개(Public)**로 올립니다.

## Instructions for the browser agent
You are working in the user's own browser, already signed in to their Google account. Do the steps in order. Do not change any other Google/YouTube settings. Publish every video as **Public** (the user decided this on 2026-11-26). Stop and ask the user if Google asks for a password, phone verification, payment, or anything not described here. When done, report the channel URL and the list of uploaded video URLs.

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
8. Settings → Upload defaults: Visibility **Public**, Category **Education**, Audience **No, it's not made for kids**.

## Step 2 — Upload videos (Public)
Upload from YouTube Studio → **Create → Upload videos**. For each video below fill in exactly the title, description and tags, then:
- Audience: **No, it's not made for kids**
- Show more → Language: the video's language (below); Category: Education
- Altered or synthetic content: **No** (hand-drawn animation, no realistic people)
- Visibility: **Public** → Publish

Phase 1 uploads the **English** versions only. The Spanish, French and Japanese versions are ready in the same folders; upload them only if the user says so (they may become separate channels later).

### ep01-stroke — English
- File: `ep01-stroke/ep01-stroke-en.mp4`
- Video language: English
- Subtitles file: `ep01-stroke/ep01-stroke-en.srt` (Subtitles → Add language: English → Upload file → With timing)
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
- Subtitles file: `ep01-stroke/ep01-stroke-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
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
- Subtitles file: `ep01-stroke/ep01-stroke-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
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
- Subtitles file: `ep01-stroke/ep01-stroke-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `知っておきたい脳卒中の5つのサイン #Shorts`
- Description:
```
脳卒中は1分1秒が大切です。バランス・目・顔・腕・言葉の5つのサインを覚えておきましょう。
気づいたら、症状が治まってもすぐに119番へ。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#脳卒中 #健康 #応急処置 #医療 #shorts
```
- Tags: `脳卒中, 脳梗塞, 脳出血, 脳卒中 サイン, 脳卒中 症状, 健康, 応急処置, 119, 医療解説, sketch clinic`

### ep02-heart-attack — English
- File: `ep02-heart-attack/ep02-heart-attack-en.mp4`
- Video language: English
- Subtitles file: `ep02-heart-attack/ep02-heart-attack-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `5 Heart Attack Warning Signs You Shouldn't Ignore #Shorts`
- Description:
```
Not every heart attack looks like the movies — many start slowly.
Chest pressure, pain spreading to the arm or jaw, shortness of breath, cold sweat, nausea.
Call emergency services right away. Don't drive yourself.
Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#heartattack #hearthealth #firstaid #health #shorts
```
- Tags: `heart attack, heart attack symptoms, heart attack warning signs, chest pain, heart health, heart attack in women, first aid, emergency, cardiology, health education, whiteboard animation`

### ep02-heart-attack — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep02-heart-attack/ep02-heart-attack-es.mp4`
- Video language: Spanish
- Subtitles file: `ep02-heart-attack/ep02-heart-attack-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `5 señales de un infarto que no debes ignorar #Shorts`
- Description:
```
No todos los infartos son como en las películas: muchos empiezan poco a poco.
Presión en el pecho, dolor que se extiende al brazo o la mandíbula, falta de aire, sudor frío, náuseas.
Llama a emergencias de inmediato. No conduzcas tú mismo.
Solo con fines educativos, no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#infarto #saludcardiovascular #primerosauxilios #salud #shorts
```
- Tags: `infarto, síntomas de infarto, señales de infarto, ataque al corazón, dolor de pecho, infarto en mujeres, salud del corazón, primeros auxilios, emergencias, educación en salud`

### ep02-heart-attack — French  *(Phase 2 — only if the user asks)*
- File: `ep02-heart-attack/ep02-heart-attack-fr.mp4`
- Video language: French
- Subtitles file: `ep02-heart-attack/ep02-heart-attack-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `5 signes d'une crise cardiaque à ne pas ignorer #Shorts`
- Description:
```
Une crise cardiaque n'est pas toujours brutale : beaucoup commencent doucement.
Poitrine serrée, douleur qui s'étend au bras ou à la mâchoire, essoufflement, sueurs froides, nausées.
Appelle immédiatement les secours. Ne conduis pas toi-même.
À but éducatif uniquement, ce n'est pas un avis médical. En cas de symptômes, consulte un professionnel de santé.

#crisecardiaque #infarctus #santé #premierssecours #shorts
```
- Tags: `crise cardiaque, infarctus, symptômes infarctus, signes crise cardiaque, douleur thoracique, infarctus femme, santé du cœur, premiers secours, urgence, éducation santé`

### ep02-heart-attack — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep02-heart-attack/ep02-heart-attack-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep02-heart-attack/ep02-heart-attack-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `見逃さないで！心筋梗塞の5つのサイン #Shorts`
- Description:
```
心筋梗塞はドラマのように突然とは限りません。
胸の圧迫感、腕やあごへ広がる痛み、息切れ、冷や汗、吐き気。
迷ったらすぐ119番。自分で運転して病院へ行かないで。
教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#心筋梗塞 #心臓 #健康 #応急処置 #shorts
```
- Tags: `心筋梗塞, 心臓発作, 心筋梗塞 症状, 心筋梗塞 前兆, 胸の痛み, 女性 心筋梗塞, 救急車, 応急処置, 健康, 医療 解説`

### ep03-leg-cramps — English
- File: `ep03-leg-cramps/ep03-leg-cramps-en.mp4`
- Video language: English
- Subtitles file: `ep03-leg-cramps/ep03-leg-cramps-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Why Do Your Legs Cramp at Night? (+ Quick Fix) #Shorts`
- Description:
```
That rock-hard calf at 3 a.m. is a muscle that tightens and won't relax.
Common triggers: tired muscles, long sitting, dehydration, some medicines, pregnancy, age.
Quick relief: straighten your leg and pull your toes toward you.
Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#legcramps #nightcramps #musclecramp #health #shorts
```
- Tags: `leg cramps, night leg cramps, calf cramp, charley horse, muscle cramp, leg cramp relief, why do legs cramp, cramp stretch, health, whiteboard animation`

### ep03-leg-cramps — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep03-leg-cramps/ep03-leg-cramps-es.mp4`
- Video language: Spanish
- Subtitles file: `ep03-leg-cramps/ep03-leg-cramps-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Por qué dan calambres en las piernas de noche? #Shorts`
- Description:
```
Esa pantorrilla dura como piedra es un músculo que se contrae y no se relaja.
Causas comunes: músculos cansados, estar mucho sentado, deshidratación, algunos medicamentos, embarazo y edad.
Alivio rápido: estira la pierna y tira de los dedos del pie hacia ti.
Solo con fines educativos, no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#calambres #salud #pantorrilla #musculos #shorts
```
- Tags: `calambres, calambres nocturnos, calambre en la pantorrilla, calambres en las piernas, calambre muscular, cómo quitar un calambre, estiramiento, salud, educación en salud`

### ep03-leg-cramps — French  *(Phase 2 — only if the user asks)*
- File: `ep03-leg-cramps/ep03-leg-cramps-fr.mp4`
- Video language: French
- Subtitles file: `ep03-leg-cramps/ep03-leg-cramps-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Pourquoi a-t-on des crampes aux jambes la nuit ? #Shorts`
- Description:
```
Ce mollet dur comme de la pierre, c'est un muscle qui se contracte et ne se relâche plus.
Causes fréquentes : muscles fatigués, position assise prolongée, déshydratation, certains médicaments, grossesse, âge.
Pour soulager : tends la jambe et tire tes orteils vers toi.
À but éducatif uniquement, ce n'est pas un avis médical. En cas de symptômes, consulte un professionnel de santé.

#crampes #santé #mollet #muscles #shorts
```
- Tags: `crampes, crampes nocturnes, crampe au mollet, crampes jambes, crampe musculaire, soulager une crampe, étirement, santé, éducation santé`

### ep03-leg-cramps — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep03-leg-cramps/ep03-leg-cramps-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep03-leg-cramps/ep03-leg-cramps-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `夜中に足がつるのはなぜ？すぐできる対処法 #Shorts`
- Description:
```
夜中のこむら返りは、筋肉が急に縮んでゆるまない状態。
よくある原因：筋肉の疲れ、長時間の同じ姿勢、水分不足、一部の薬、妊娠、加齢。
対処法：脚を伸ばし、つま先を手前に引いてストレッチ。
教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#こむら返り #足がつる #健康 #ストレッチ #shorts
```
- Tags: `こむら返り, 足がつる, 夜中 足がつる, ふくらはぎ つる, 筋肉のけいれん, 足がつる 原因, 足がつる 治し方, ストレッチ, 健康, 医療 解説`

### ep04-knuckle-cracking — English
- File: `ep04-knuckle-cracking/ep04-knuckle-cracking-en.mp4`
- Video language: English
- Subtitles file: `ep04-knuckle-cracking/ep04-knuckle-cracking-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `What Really Happens When You Crack Your Knuckles? #Shorts`
- Description:
```
That pop isn't bones grinding — it's a gas bubble forming in the joint fluid.
It takes about 20–30 minutes before the same knuckle can crack again.
Arthritis? Studies haven't found a link.
Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#knucklecracking #joints #science #health #shorts
```
- Tags: `knuckle cracking, cracking knuckles, why do knuckles crack, does cracking knuckles cause arthritis, joint popping, synovial fluid, gas bubble, joints, health myths, whiteboard animation`

### ep04-knuckle-cracking — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep04-knuckle-cracking/ep04-knuckle-cracking-es.mp4`
- Video language: Spanish
- Subtitles file: `ep04-knuckle-cracking/ep04-knuckle-cracking-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Qué pasa realmente al crujirte los nudillos? #Shorts`
- Description:
```
Ese crac no son huesos rozando: es una burbuja de gas que se forma en el líquido articular.
Hay que esperar unos 20–30 minutos para que el mismo nudillo vuelva a sonar.
¿Artritis? Los estudios no han encontrado relación.
Solo con fines educativos, no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#nudillos #articulaciones #ciencia #salud #shorts
```
- Tags: `crujir los nudillos, tronar los dedos, por qué suenan los nudillos, artritis, articulaciones, líquido sinovial, burbuja de gas, mitos de salud, salud, ciencia`

### ep04-knuckle-cracking — French  *(Phase 2 — only if the user asks)*
- File: `ep04-knuckle-cracking/ep04-knuckle-cracking-fr.mp4`
- Video language: French
- Subtitles file: `ep04-knuckle-cracking/ep04-knuckle-cracking-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Que se passe-t-il quand on fait craquer ses doigts ? #Shorts`
- Description:
```
Ce crac, ce ne sont pas les os : c'est une bulle de gaz qui se forme dans le liquide articulaire.
Il faut environ 20 à 30 minutes avant de pouvoir refaire craquer la même articulation.
L'arthrose ? Les études n'ont pas trouvé de lien.
À but éducatif uniquement, ce n'est pas un avis médical. En cas de symptômes, consulte un professionnel de santé.

#craquerlesdoigts #articulations #science #santé #shorts
```
- Tags: `craquer ses doigts, faire craquer ses doigts, pourquoi les doigts craquent, arthrose, articulations, liquide synovial, bulle de gaz, idées reçues santé, santé, science`

### ep04-knuckle-cracking — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep04-knuckle-cracking/ep04-knuckle-cracking-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep04-knuckle-cracking/ep04-knuckle-cracking-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `指をポキッと鳴らすと何が起きている？ #Shorts`
- Description:
```
あの音は骨がこすれる音ではなく、関節液の中で気泡ができる音。
同じ関節がまた鳴るまで約20〜30分かかります。
関節炎の原因？これまでの研究では関連は見つかっていません。
教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#指鳴らし #関節 #雑学 #健康 #shorts
```
- Tags: `指 鳴らす, 指をポキポキ, 指 鳴らす 理由, 関節 音, 関節炎, 関節液, 気泡, 健康 雑学, 医療 解説, 健康`

### ep05-hiccups — English
- File: `ep05-hiccups/ep05-hiccups-en.mp4`
- Video language: English
- Subtitles file: `ep05-hiccups/ep05-hiccups-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Why Do We Get Hiccups? The “Hic” Explained #Shorts`
- Description:
```
That “hic” is your vocal cords snapping shut after your diaphragm spasms.
Common triggers: eating fast, big meals, fizzy drinks, excitement.
See a doctor if hiccups last more than 48 hours.
Educational only — not medical advice. If you have symptoms, see a healthcare professional.
#hiccups #health #body #Shorts
```
- Tags: `hiccups, why do we hiccup, diaphragm, vocal cords, how to stop hiccups, hiccup causes, health facts, human body, sketch clinic, medical explainer`

### ep05-hiccups — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep05-hiccups/ep05-hiccups-es.mp4`
- Video language: Spanish
- Subtitles file: `ep05-hiccups/ep05-hiccups-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Por qué nos da hipo? El “hip”, explicado #Shorts`
- Description:
```
El “hip” es el sonido de tus cuerdas vocales cerrándose tras un espasmo del diafragma.
Causas comunes: comer rápido, comidas abundantes, bebidas con gas, emociones fuertes.
Consulta al médico si dura más de 48 horas.
Solo con fines educativos: no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.
#hipo #salud #cuerpohumano #Shorts
```
- Tags: `hipo, por qué nos da hipo, diafragma, cuerdas vocales, cómo quitar el hipo, causas del hipo, salud, cuerpo humano, datos curiosos, sketch clinic`

### ep05-hiccups — French  *(Phase 2 — only if the user asks)*
- File: `ep05-hiccups/ep05-hiccups-fr.mp4`
- Video language: French
- Subtitles file: `ep05-hiccups/ep05-hiccups-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Pourquoi a-t-on le hoquet ? Le « hic » expliqué #Shorts`
- Description:
```
Le « hic », ce sont tes cordes vocales qui se ferment après un spasme du diaphragme.
Déclencheurs fréquents : manger vite, gros repas, boissons gazeuses, émotions.
Consulte un médecin si le hoquet dure plus de 48 heures.
À but éducatif uniquement — pas un avis médical. En cas de symptômes, consulte un professionnel de santé.
#hoquet #santé #corpshumain #Shorts
```
- Tags: `hoquet, pourquoi a-t-on le hoquet, diaphragme, cordes vocales, arrêter le hoquet, causes du hoquet, santé, corps humain, le savais-tu, sketch clinic`

### ep05-hiccups — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep05-hiccups/ep05-hiccups-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep05-hiccups/ep05-hiccups-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `しゃっくりはなぜ起こる？「ヒック」の正体 #Shorts`
- Description:
```
「ヒック」は、横隔膜のけいれん直後に声帯が閉じる音。
早食い・食べすぎ・炭酸飲料・興奮などがきっかけに。
48時間以上続くときは受診を。
教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関にご相談ください。
#しゃっくり #健康 #雑学 #Shorts
```
- Tags: `しゃっくり, しゃっくり 原因, しゃっくり 止め方, 横隔膜, 声帯, 健康, 雑学, 体の仕組み, 医学解説, スケッチクリニック`

### ep06-eye-twitch — English
- File: `ep06-eye-twitch/ep06-eye-twitch-en.mp4`
- Video language: English
- Subtitles file: `ep06-eye-twitch/ep06-eye-twitch-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Why Does Your Eyelid Twitch? (It Has a Name) #Shorts`
- Description:
```
That eyelid flicker is called myokymia: tiny involuntary contractions of the eyelid muscle.
Common triggers: stress, lack of sleep, caffeine, screens and dry eyes. Usually harmless.
See a doctor if it lasts weeks, the eyelid fully closes, or other parts of the face twitch.
Educational only — not medical advice. If you have symptoms, see a healthcare professional.
#eyetwitch #health #eyes #Shorts
```
- Tags: `eye twitch, eyelid twitching, myokymia, why does my eye twitch, stress, caffeine, eye strain, dry eyes, health facts, sketch clinic`

### ep06-eye-twitch — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep06-eye-twitch/ep06-eye-twitch-es.mp4`
- Video language: Spanish
- Subtitles file: `ep06-eye-twitch/ep06-eye-twitch-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Por qué te tiembla el párpado? Esto es lo que pasa #Shorts`
- Description:
```
Ese temblor se llama mioquimia: pequeñas contracciones involuntarias del músculo del párpado.
Causas comunes: estrés, dormir poco, cafeína, pantallas y ojos secos. Suele ser inofensivo.
Consulta si dura semanas, el párpado se cierra del todo o tiembla otra parte de la cara.
Solo con fines educativos: no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.
#párpado #salud #ojos #Shorts
```
- Tags: `tic en el ojo, párpado que tiembla, mioquimia, por qué tiembla el ojo, estrés, cafeína, fatiga visual, ojo seco, salud, sketch clinic`

### ep06-eye-twitch — French  *(Phase 2 — only if the user asks)*
- File: `ep06-eye-twitch/ep06-eye-twitch-fr.mp4`
- Video language: French
- Subtitles file: `ep06-eye-twitch/ep06-eye-twitch-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Pourquoi ta paupière saute toute seule ? #Shorts`
- Description:
```
Ça s’appelle la myokymie : de petites contractions involontaires du muscle de la paupière.
Déclencheurs fréquents : stress, manque de sommeil, caféine, écrans, yeux secs. Généralement bénin.
Consulte si ça dure des semaines, si la paupière se ferme ou si le visage tressaute.
À but éducatif uniquement — pas un avis médical. En cas de symptômes, consulte un professionnel de santé.
#paupière #santé #yeux #Shorts
```
- Tags: `paupière qui saute, tic de la paupière, myokymie, oeil qui tremble, stress, caféine, fatigue visuelle, yeux secs, santé, sketch clinic`

### ep06-eye-twitch — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep06-eye-twitch/ep06-eye-twitch-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep06-eye-twitch/ep06-eye-twitch-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `まぶたがピクピクするのはなぜ？原因4つ #Shorts`
- Description:
```
まぶたのピクピクは「眼瞼ミオキミア」。まぶたの筋肉の小さなけいれんです。
主なきっかけ：ストレス、睡眠不足、カフェイン、画面による目の疲れ・ドライアイ。
何週間も続く、まぶたが閉じきる、顔の他の部分も動くときは受診を。
教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関にご相談ください。
#まぶた #健康 #目の疲れ #Shorts
```
- Tags: `まぶた ピクピク, まぶたの痙攣, 眼瞼ミオキミア, 目の疲れ, ストレス, 睡眠不足, カフェイン, ドライアイ, 健康, スケッチクリニック`

### ep07-brain-freeze — English
- File: `ep07-brain-freeze/ep07-brain-freeze-en.mp4`
- Video language: English
- Subtitles file: `ep07-brain-freeze/ep07-brain-freeze-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Brain Freeze Has a Real Medical Name #Shorts`
- Description:
```
Brain freeze = sphenopalatine ganglioneuralgia.
Cold on the roof of your mouth makes vessels narrow then widen, and your brain feels the pain in your forehead.
Fix: press your tongue to your palate or sip lukewarm water. Prevent it: eat cold things slowly.
Educational only — not medical advice. If you have symptoms, see a healthcare professional.
#brainfreeze #icecream #health #Shorts
```
- Tags: `brain freeze, ice cream headache, sphenopalatine ganglioneuralgia, why does brain freeze happen, referred pain, cold headache, how to stop brain freeze, health facts, human body, sketch clinic`

### ep07-brain-freeze — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep07-brain-freeze/ep07-brain-freeze-es.mp4`
- Video language: Spanish
- Subtitles file: `ep07-brain-freeze/ep07-brain-freeze-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Por qué duele la cabeza con el helado? #Shorts`
- Description:
```
El “cerebro congelado” se llama ganglioneuralgia esfenopalatina.
El frío en el paladar estrecha y luego dilata los vasos, y el cerebro siente el dolor en la frente.
Alivio: lengua contra el paladar o agua tibia. Prevención: come lo frío despacio.
Solo con fines educativos: no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.
#cerebrocongelado #helado #salud #Shorts
```
- Tags: `cerebro congelado, dolor de cabeza por helado, ganglioneuralgia esfenopalatina, dolor referido, dolor de cabeza por frío, helado, salud, cuerpo humano, datos curiosos, sketch clinic`

### ep07-brain-freeze — French  *(Phase 2 — only if the user asks)*
- File: `ep07-brain-freeze/ep07-brain-freeze-fr.mp4`
- Video language: French
- Subtitles file: `ep07-brain-freeze/ep07-brain-freeze-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Pourquoi la glace fait mal à la tête ? #Shorts`
- Description:
```
Ce mal de tête a un nom : la ganglioneuralgie sphénopalatine.
Le froid sur le palais resserre puis dilate les vaisseaux, et le cerveau ressent la douleur au front.
Astuce : langue contre le palais ou eau tiède. Pour l’éviter : mange le froid lentement.
À but éducatif uniquement — pas un avis médical. En cas de symptômes, consulte un professionnel de santé.
#glace #santé #corpshumain #Shorts
```
- Tags: `mal de tête glace, brain freeze, ganglioneuralgie sphénopalatine, douleur projetée, céphalée du froid, glace, santé, corps humain, le savais-tu, sketch clinic`

### ep07-brain-freeze — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep07-brain-freeze/ep07-brain-freeze-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep07-brain-freeze/ep07-brain-freeze-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `アイスクリーム頭痛の正体とは？キーンの仕組み #Shorts`
- Description:
```
アイスクリーム頭痛の医学名は「蝶口蓋神経節神経痛」。
冷たさで上あごの血管が縮んで広がり、脳がおでこの痛みと勘違いする「関連痛」です。
対処：舌を上あごに当てる・ぬるま湯。予防：冷たいものはゆっくりと。
教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関にご相談ください。
#アイスクリーム頭痛 #健康 #雑学 #Shorts
```
- Tags: `アイスクリーム頭痛, キーン, かき氷 頭痛, 蝶口蓋神経節神経痛, 関連痛, 頭痛, 健康, 雑学, 体の仕組み, スケッチクリニック`

### ep08-head-rush — English
- File: `ep08-head-rush/ep08-head-rush-en.mp4`
- Video language: English
- Subtitles file: `ep08-head-rush/ep08-head-rush-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Why Do You Get Dizzy When You Stand Up Fast? #Shorts`
- Description:
```
Ever stood up and the room spun or your vision went dark?
That “head rush” is a brief drop in blood pressure as gravity pulls blood to your legs.
Usually harmless — here’s why it happens and how to avoid it.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #HeadRush #Dizziness #HealthTips #SketchClinic
```
- Tags: `head rush, dizzy when standing up, orthostatic hypotension, lightheaded, blood pressure, dizziness, vision goes black, health explained, body facts, sketch clinic`

### ep08-head-rush — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep08-head-rush/ep08-head-rush-es.mp4`
- Video language: Spanish
- Subtitles file: `ep08-head-rush/ep08-head-rush-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Por qué te mareas al levantarte rápido? #Shorts`
- Description:
```
¿Te levantas y todo da vueltas o se pone negro?
Es una bajada breve de la presión: la gravedad lleva sangre a las piernas.
Casi siempre es inofensivo. Aquí te explicamos por qué pasa y cómo evitarlo.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #Mareo #Salud #PresiónArterial #SketchClinic
```
- Tags: `mareo al levantarse, hipotensión ortostática, presión arterial baja, vista nublada, mareos, salud, cuerpo humano, consejos de salud, sketch clinic`

### ep08-head-rush — French  *(Phase 2 — only if the user asks)*
- File: `ep08-head-rush/ep08-head-rush-fr.mp4`
- Video language: French
- Subtitles file: `ep08-head-rush/ep08-head-rush-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Pourquoi la tête tourne quand on se lève vite ? #Shorts`
- Description:
```
Tu te lèves et tout tourne, ou ta vue devient noire ?
C'est une baisse brève de la tension : la gravité attire le sang vers les jambes.
Le plus souvent sans danger — voici pourquoi et comment l'éviter.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #Vertige #Santé #TensionArtérielle #SketchClinic
```
- Tags: `tête qui tourne, vertige en se levant, hypotension orthostatique, tension artérielle, voile noir, étourdissement, santé, corps humain, sketch clinic`

### ep08-head-rush — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep08-head-rush/ep08-head-rush-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep08-head-rush/ep08-head-rush-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `急に立つとクラッとするのはなぜ？立ちくらみの正体 #Shorts`
- Description:
```
立ち上がった瞬間、目の前が暗くなったことはありませんか？
重力で血液が脚に下がり、血圧が一瞬下がるのが原因です。
しくみと、防ぐコツをイラストで解説。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #立ちくらみ #めまい #健康 #SketchClinic
```
- Tags: `立ちくらみ, めまい, 起立性低血圧, 血圧, 目の前が暗くなる, 脱水, 健康, 体のしくみ, 医学解説, sketch clinic`

### ep09-nosebleed — English
- File: `ep09-nosebleed/ep09-nosebleed-en.mp4`
- Video language: English
- Subtitles file: `ep09-nosebleed/ep09-nosebleed-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Nosebleed? Do THIS, Not That (Don’t Tilt Back!) #Shorts`
- Description:
```
Head back or head forward? Many people get this wrong.
Lean forward, pinch the soft part of your nose for 10–15 minutes, and breathe through your mouth.
Know when a nosebleed needs urgent care.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #Nosebleed #FirstAid #HealthTips #SketchClinic
```
- Tags: `nosebleed, how to stop a nosebleed, first aid, epistaxis, nose bleeding, lean forward, pinch nose, health tips, first aid tips, sketch clinic`

### ep09-nosebleed — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep09-nosebleed/ep09-nosebleed-es.mp4`
- Video language: Spanish
- Subtitles file: `ep09-nosebleed/ep09-nosebleed-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Sangrado de nariz? Haz ESTO, no aquello #Shorts`
- Description:
```
¿Cabeza atrás o adelante? Muchos se equivocan.
Inclínate hacia adelante, aprieta la parte blanda de la nariz 10–15 minutos y respira por la boca.
Y cuándo hay que buscar atención urgente.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #PrimerosAuxilios #SangradoNasal #Salud #SketchClinic
```
- Tags: `sangrado nasal, sangrado de nariz, cómo parar un sangrado de nariz, epistaxis, primeros auxilios, salud, consejos de salud, sketch clinic`

### ep09-nosebleed — French  *(Phase 2 — only if the user asks)*
- File: `ep09-nosebleed/ep09-nosebleed-fr.mp4`
- Video language: French
- Subtitles file: `ep09-nosebleed/ep09-nosebleed-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Saignement de nez : fais ÇA, pas ça ! #Shorts`
- Description:
```
Tête en arrière ou en avant ? Beaucoup se trompent.
Penche-toi en avant, pince la partie molle du nez 10 à 15 minutes et respire par la bouche.
Et quand il faut aller aux urgences.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #PremiersSecours #SaignementDeNez #Santé #SketchClinic
```
- Tags: `saignement de nez, arrêter un saignement de nez, épistaxis, premiers secours, nez qui saigne, santé, conseils santé, sketch clinic`

### ep09-nosebleed — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep09-nosebleed/ep09-nosebleed-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep09-nosebleed/ep09-nosebleed-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `鼻血は上を向かないで！正しい止め方 #Shorts`
- Description:
```
鼻血のとき、上を向いていませんか？
座って前かがみ、小鼻を10〜15分しっかりつまむ、息は口で。
すぐ受診すべきサインも紹介します。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #鼻血 #応急処置 #健康 #SketchClinic
```
- Tags: `鼻血, 鼻血 止め方, 応急処置, 鼻出血, 上を向かない, 小鼻, 健康, 家庭の医学, sketch clinic`

### ep10-foot-asleep — English
- File: `ep10-foot-asleep/ep10-foot-asleep-en.mp4`
- Video language: English
- Subtitles file: `ep10-foot-asleep/ep10-foot-asleep-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Why Does Your Foot “Fall Asleep”? #Shorts`
- Description:
```
That numb, then pins-and-needles feeling has a simple cause.
Pressure on a nerve disrupts its signals — then it “wakes up” when you move.
Usually harmless, but here’s when to see a doctor.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #PinsAndNeedles #BodyFacts #HealthTips #SketchClinic
```
- Tags: `foot falls asleep, pins and needles, numb foot, paresthesia, nerve pressure, crossed legs, tingling, body facts, health explained, sketch clinic`

### ep10-foot-asleep — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep10-foot-asleep/ep10-foot-asleep-es.mp4`
- Video language: Spanish
- Subtitles file: `ep10-foot-asleep/ep10-foot-asleep-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Por qué se te “duerme” el pie? #Shorts`
- Description:
```
Esa sensación de adormecimiento y hormigueo tiene una causa sencilla.
La presión sobre un nervio altera sus señales, y al moverte “despierta”.
Suele ser inofensivo, pero te contamos cuándo consultar.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #Hormigueo #CuerpoHumano #Salud #SketchClinic
```
- Tags: `pie dormido, hormigueo, adormecimiento, parestesia, nervio, piernas cruzadas, cuerpo humano, salud, sketch clinic`

### ep10-foot-asleep — French  *(Phase 2 — only if the user asks)*
- File: `ep10-foot-asleep/ep10-foot-asleep-fr.mp4`
- Video language: French
- Subtitles file: `ep10-foot-asleep/ep10-foot-asleep-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Pourquoi le pied « s'endort » ? #Shorts`
- Description:
```
Engourdi, puis des fourmis : la cause est simple.
La pression sur un nerf perturbe ses signaux, puis il « se réveille » quand tu bouges.
En général sans danger, mais voici quand consulter.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #Fourmillements #CorpsHumain #Santé #SketchClinic
```
- Tags: `pied engourdi, fourmis dans les pieds, fourmillements, paresthésie, nerf comprimé, jambes croisées, corps humain, santé, sketch clinic`

### ep10-foot-asleep — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep10-foot-asleep/ep10-foot-asleep-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep10-foot-asleep/ep10-foot-asleep-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `足がしびれるのはなぜ？ジンジンの正体 #Shorts`
- Description:
```
正座や足を組んだあとの、あのジンジン。
神経が圧迫されて信号が乱れ、圧迫がとれると「目を覚ます」ために起こります。
ふつうは心配なし。受診の目安も紹介。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #足のしびれ #体のしくみ #健康 #SketchClinic
```
- Tags: `足のしびれ, しびれ, ジンジン, 正座, 足を組む, 神経, 感覚異常, 体のしくみ, 健康, sketch clinic`

### ep11-stomach-growl — English
- File: `ep11-stomach-growl/ep11-stomach-growl-en.mp4`
- Video language: English
- Subtitles file: `ep11-stomach-growl/ep11-stomach-growl-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Why Does Your Stomach Growl? (It’s Not Just Hunger) #Shorts`
- Description:
```
That rumble has a name: borborygmi.
Your gut squeezes food, gas and liquid along in waves (peristalsis) — and when it's empty, the sound echoes louder.
When growling comes with pain or other symptoms, see a doctor.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #StomachGrowl #Digestion #HealthTips #SketchClinic
```
- Tags: `stomach growling, why does my stomach growl, borborygmi, stomach noises, digestion, peristalsis, hunger, gut health, health tips, sketch clinic`

### ep11-stomach-growl — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep11-stomach-growl/ep11-stomach-growl-es.mp4`
- Video language: Spanish
- Subtitles file: `ep11-stomach-growl/ep11-stomach-growl-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Por qué ruge tu estómago? No es solo hambre #Shorts`
- Description:
```
Ese rugido tiene nombre: borborigmos.
El intestino empuja comida, gas y líquido con ondas (peristalsis), y cuando está vacío, suena más fuerte.
Si el ruido viene con dolor u otros síntomas, consulta al médico.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #Estómago #Digestión #Salud #SketchClinic
```
- Tags: `estómago que ruge, ruidos de estómago, borborigmos, digestión, peristalsis, hambre, salud intestinal, salud, sketch clinic`

### ep11-stomach-growl — French  *(Phase 2 — only if the user asks)*
- File: `ep11-stomach-growl/ep11-stomach-growl-fr.mp4`
- Video language: French
- Subtitles file: `ep11-stomach-growl/ep11-stomach-growl-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Pourquoi ton ventre gargouille ? Pas seulement la faim #Shorts`
- Description:
```
Ce grondement a un nom : les borborygmes.
L'intestin fait avancer aliments, gaz et liquide par vagues (péristaltisme) — et vide, il résonne plus fort.
Si les bruits s'accompagnent de douleur ou d'autres symptômes, consulte un médecin.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #Ventre #Digestion #Santé #SketchClinic
```
- Tags: `ventre qui gargouille, gargouillements, borborygmes, digestion, péristaltisme, faim, santé intestinale, santé, sketch clinic`

### ep11-stomach-growl — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep11-stomach-growl/ep11-stomach-growl-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep11-stomach-growl/ep11-stomach-growl-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `お腹がグーっと鳴るのはなぜ？空腹だけじゃない #Shorts`
- Description:
```
お腹の「グー」は腹鳴（ふくめい）と呼ばれます。
腸はぜん動運動で食べ物・ガス・水分を送り出していて、空っぽのときほど音が響きます。
痛みなどの症状をともなう場合は受診しましょう。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #お腹が鳴る #腸 #健康 #SketchClinic
```
- Tags: `お腹が鳴る, 腹鳴, お腹の音, 腸, ぜん動運動, 空腹, 消化, 健康, sketch clinic`

### ep12-sneeze — English
- File: `ep12-sneeze/ep12-sneeze-en.mp4`
- Video language: English
- Subtitles file: `ep12-sneeze/ep12-sneeze-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Why Do We Sneeze? (And the Right Way to Do It) #Shorts`
- Description:
```
A sneeze is your nose's alarm and cleaning system: an irritant triggers nerves, your brainstem fires, and air bursts out.
Those droplets carry germs — so sneeze into a tissue or your elbow, bin the tissue and wash your hands.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #Sneeze #CoughEtiquette #HealthTips #SketchClinic
```
- Tags: `sneeze, why do we sneeze, sneezing, sneeze into elbow, cough etiquette, germs, allergy, hand washing, health tips, sketch clinic`

### ep12-sneeze — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep12-sneeze/ep12-sneeze-es.mp4`
- Video language: Spanish
- Subtitles file: `ep12-sneeze/ep12-sneeze-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Por qué estornudamos? Y cómo hacerlo bien #Shorts`
- Description:
```
El estornudo es la alarma y limpieza de tu nariz: algo irrita los nervios, el tronco cerebral reacciona y el aire sale disparado.
Las gotitas llevan gérmenes: estornuda en un pañuelo o en el codo, tira el pañuelo y lávate las manos.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #Estornudo #Higiene #Salud #SketchClinic
```
- Tags: `estornudo, por qué estornudamos, estornudar en el codo, gérmenes, alergia, lavado de manos, salud, sketch clinic`

### ep12-sneeze — French  *(Phase 2 — only if the user asks)*
- File: `ep12-sneeze/ep12-sneeze-fr.mp4`
- Video language: French
- Subtitles file: `ep12-sneeze/ep12-sneeze-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Pourquoi on éternue ? Et comment bien le faire #Shorts`
- Description:
```
L'éternuement, c'est l'alarme et le nettoyage du nez : un irritant stimule les nerfs, le tronc cérébral réagit et l'air jaillit.
Les gouttelettes portent des microbes : éternue dans un mouchoir ou ton coude, jette le mouchoir et lave-toi les mains.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #Éternuement #GestesBarrières #Santé #SketchClinic
```
- Tags: `éternuement, pourquoi on éternue, éternuer dans son coude, microbes, allergie, lavage des mains, santé, sketch clinic`

### ep12-sneeze — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep12-sneeze/ep12-sneeze-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep12-sneeze/ep12-sneeze-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `くしゃみはなぜ出る？正しいくしゃみのしかた #Shorts`
- Description:
```
くしゃみは鼻の警報＆おそうじ。異物が神経を刺激し、脳幹のくしゃみ中枢が反応して空気を一気に吹き出します。
しぶきはウイルスを運ぶので、ティッシュかひじの内側でおおい、ティッシュは捨てて手を洗いましょう。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #くしゃみ #咳エチケット #健康 #SketchClinic
```
- Tags: `くしゃみ, くしゃみ なぜ, 咳エチケット, ひじでくしゃみ, 花粉, 手洗い, かぜ予防, 健康, sketch clinic`

### ep13-frostbite — English
- File: `ep13-frostbite/ep13-frostbite-en.mp4`
- Video language: English
- Subtitles file: `ep13-frostbite/ep13-frostbite-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Frostbite vs Frostnip: How to Rewarm Safely (Don’t Rub!) #Shorts`
- Description:
```
Frostnip vs frostbite, and how to rewarm safely.
Get warm, remove wet clothes and rings, and rewarm in warm (not hot) water or with body heat. Don't rub, and no direct heat like fires or heaters. Don't rewarm if it could freeze again.
Frostbite needs medical care.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #Frostbite #FirstAid #WinterSafety #SketchClinic
```
- Tags: `frostbite, frostnip, frostbite first aid, how to treat frostbite, cold injury, winter safety, rewarming, first aid, health tips, sketch clinic`

### ep13-frostbite — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep13-frostbite/ep13-frostbite-es.mp4`
- Video language: Spanish
- Subtitles file: `ep13-frostbite/ep13-frostbite-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `Congelación: cómo recalentar sin peligro (¡no frotes!) #Shorts`
- Description:
```
Congelación leve vs congelación, y cómo recalentar sin peligro.
Busca calor, quítate ropa mojada y anillos, y recalienta en agua tibia (no caliente) o con calor corporal. No frotes ni uses calor directo. No recalientes si se puede volver a congelar.
La congelación necesita atención médica.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #Congelación #PrimerosAuxilios #Invierno #SketchClinic
```
- Tags: `congelación, congelación leve, primeros auxilios, lesiones por frío, invierno, recalentar, salud, sketch clinic`

### ep13-frostbite — French  *(Phase 2 — only if the user asks)*
- File: `ep13-frostbite/ep13-frostbite-fr.mp4`
- Video language: French
- Subtitles file: `ep13-frostbite/ep13-frostbite-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Gelure : comment réchauffer sans danger (ne frotte pas !) #Shorts`
- Description:
```
Engelure légère ou gelure, et comment réchauffer sans danger.
Va au chaud, retire vêtements mouillés et bagues, réchauffe dans l'eau tiède (pas chaude) ou avec la chaleur du corps. Ne frotte pas, pas de chaleur directe. Ne réchauffe pas s'il y a risque de regel.
Une gelure nécessite des soins médicaux.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #Gelure #PremiersSecours #Hiver #SketchClinic
```
- Tags: `gelure, engelure, premiers secours gelure, froid, hiver, réchauffer, santé, sketch clinic`

### ep13-frostbite — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep13-frostbite/ep13-frostbite-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep13-frostbite/ep13-frostbite-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `凍傷の正しい温め方｜こすらない・直接温めない #Shorts`
- Description:
```
軽い凍傷と凍傷のちがい、そして安全な温め方。
暖かい場所へ移り、ぬれた服や指輪を外し、ぬるま湯（熱すぎない）か体温で温めます。こすらない・たき火やヒーターで直接温めない。再び凍るおそれがあるなら温めないでください。
凍傷は医療機関での治療が必要です。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #凍傷 #応急処置 #冬 #SketchClinic
```
- Tags: `凍傷, 凍傷 応急処置, しもやけ, 寒さ, 冬, 応急処置, 健康, sketch clinic`

### ep14-mouth-ulcer — English
- File: `ep14-mouth-ulcer/ep14-mouth-ulcer-en.mp4`
- Video language: English
- Subtitles file: `ep14-mouth-ulcer/ep14-mouth-ulcer-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Mouth Ulcer (Canker Sore)? What Helps + When to See a Doctor #Shorts`
- Description:
```
Canker sores are small, painful, non-contagious mouth ulcers. Triggers include biting your cheek, sharp teeth or braces, stress, tiredness and some foods.
Most heal on their own in 1–2 weeks. A soft toothbrush, avoiding spicy/acidic foods and a pharmacy gel or mouthwash can help.
See a doctor or dentist if one lasts over 2 weeks, keeps coming back, is very large, or you feel unwell.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #MouthUlcer #CankerSore #HealthTips #SketchClinic
```
- Tags: `mouth ulcer, canker sore, aphthous ulcer, mouth sore, mouth ulcer treatment, oral health, when to see a doctor, health tips, sketch clinic`

### ep14-mouth-ulcer — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep14-mouth-ulcer/ep14-mouth-ulcer-es.mp4`
- Video language: Spanish
- Subtitles file: `ep14-mouth-ulcer/ep14-mouth-ulcer-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Aftas en la boca? Qué ayuda y cuándo ir al médico #Shorts`
- Description:
```
Las aftas son llagas pequeñas, dolorosas y no contagiosas. Pueden aparecer por morderte la mejilla, dientes afilados o brackets, estrés, cansancio o algunos alimentos.
La mayoría se curan solas en 1–2 semanas. Ayuda un cepillo suave, evitar comidas picantes/ácidas y un gel o enjuague de farmacia.
Consulta si dura más de 2 semanas, vuelve a menudo, es muy grande o te sientes mal.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #Aftas #SaludBucal #Salud #SketchClinic
```
- Tags: `afta, aftas bucales, llaga en la boca, úlcera bucal, salud bucal, salud, sketch clinic`

### ep14-mouth-ulcer — French  *(Phase 2 — only if the user asks)*
- File: `ep14-mouth-ulcer/ep14-mouth-ulcer-fr.mp4`
- Video language: French
- Subtitles file: `ep14-mouth-ulcer/ep14-mouth-ulcer-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Aphte : ce qui soulage et quand consulter #Shorts`
- Description:
```
L'aphte est une petite plaie douloureuse et non contagieuse. En cause : morsure de la joue, dent coupante ou appareil, stress, fatigue, certains aliments.
La plupart guérissent seuls en 1 à 2 semaines. Brosse souple, éviter épicé/acide, et un gel ou bain de bouche en pharmacie peuvent aider.
Consulte s'il dure plus de 2 semaines, revient souvent, est très gros ou si tu te sens mal.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #Aphte #SantéBuccale #Santé #SketchClinic
```
- Tags: `aphte, aphtes, plaie dans la bouche, ulcère buccal, santé buccale, santé, sketch clinic`

### ep14-mouth-ulcer — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep14-mouth-ulcer/ep14-mouth-ulcer-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep14-mouth-ulcer/ep14-mouth-ulcer-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `口内炎の原因とケア｜受診の目安は2週間 #Shorts`
- Description:
```
口内炎（アフタ）は小さく痛む、うつらない口の中の潰瘍です。頬をかむ、とがった歯や矯正器具、ストレス、疲れ、食べ物などが引き金に。
多くは1〜2週間で自然に治ります。やわらかい歯ブラシ、刺激物を控える、薬局の塗り薬やうがい薬が役立ちます。
2週間以上治らない・くり返す・とても大きい・体調が悪いときは受診を。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #口内炎 #口腔ケア #健康 #SketchClinic
```
- Tags: `口内炎, アフタ, 口内炎 治し方, 口の中 痛い, 口腔ケア, 健康, sketch clinic`

### ep15-bee-sting — English
- File: `ep15-bee-sting/ep15-bee-sting-en.mp4`
- Video language: English
- Subtitles file: `ep15-bee-sting/ep15-bee-sting-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Bee Sting First Aid: What to Do + Allergy Warning Signs #Shorts`
- Description:
```
Scrape the stinger out quickly, wash with soap and water, and use a cold compress. Don't scratch.
Call emergency services right away for trouble breathing, swelling of the face, lips or throat, dizziness or fainting — signs of anaphylaxis. Use an adrenaline auto-injector if the person has one.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #BeeSting #FirstAid #Anaphylaxis #SketchClinic
```
- Tags: `bee sting, bee sting first aid, remove stinger, anaphylaxis, allergic reaction, epipen, insect sting, first aid, health tips, sketch clinic`

### ep15-bee-sting — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep15-bee-sting/ep15-bee-sting-es.mp4`
- Video language: Spanish
- Subtitles file: `ep15-bee-sting/ep15-bee-sting-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `Picadura de abeja: qué hacer y señales de alergia grave #Shorts`
- Description:
```
Saca el aguijón rápido raspándolo, lava con agua y jabón y aplica frío. No te rasques.
Llama a emergencias de inmediato si hay dificultad para respirar, hinchazón de cara, labios o garganta, mareo o desmayo (anafilaxia). Usa el autoinyector de adrenalina si la persona tiene uno.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #PicaduraDeAbeja #PrimerosAuxilios #Anafilaxia #SketchClinic
```
- Tags: `picadura de abeja, primeros auxilios, aguijón, anafilaxia, reacción alérgica, autoinyector, salud, sketch clinic`

### ep15-bee-sting — French  *(Phase 2 — only if the user asks)*
- File: `ep15-bee-sting/ep15-bee-sting-fr.mp4`
- Video language: French
- Subtitles file: `ep15-bee-sting/ep15-bee-sting-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Piqûre d’abeille : les bons gestes et les signes d’allergie grave #Shorts`
- Description:
```
Retire vite le dard en grattant, lave à l'eau et au savon, applique du froid. Ne gratte pas.
Appelle immédiatement les secours en cas de difficulté à respirer, gonflement du visage, des lèvres ou de la gorge, malaise ou évanouissement (anaphylaxie). Utilise le stylo d'adrénaline si la personne en a un.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #PiqûreAbeille #PremiersSecours #Anaphylaxie #SketchClinic
```
- Tags: `piqûre d'abeille, premiers secours, dard, anaphylaxie, réaction allergique, stylo d'adrénaline, santé, sketch clinic`

### ep15-bee-sting — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep15-bee-sting/ep15-bee-sting-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep15-bee-sting/ep15-bee-sting-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `ハチに刺されたときの応急処置とアナフィラキシーのサイン #Shorts`
- Description:
```
針はすぐにこすり出し、石けんと水で洗って冷やします。かかないこと。
息苦しさ、顔・くちびる・のどの腫れ、めまいや意識が遠のく場合はアナフィラキシーの可能性。すぐに119番を。アドレナリン自己注射薬があれば使います。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #ハチ刺され #応急処置 #アナフィラキシー #SketchClinic
```
- Tags: `ハチ刺され, 蜂に刺された, 応急処置, アナフィラキシー, エピペン, アレルギー, 健康, sketch clinic`

### ep16-choking — English
- File: `ep16-choking/ep16-choking-en.mp4`
- Video language: English
- Subtitles file: `ep16-choking/ep16-choking-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Choking Adult? 5 Back Blows + 5 Abdominal Thrusts (Heimlich) #Shorts`
- Description:
```
If an adult is choking but can cough, encourage coughing. If they can't cough, speak or breathe: call emergency services, give up to 5 back blows, then up to 5 abdominal thrusts, and keep alternating.
If they become unresponsive, start CPR. Anyone who received abdominal thrusts should see a doctor afterwards.
For babies, children and pregnant people the technique is different — take a certified first-aid course.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #Choking #Heimlich #FirstAid #SketchClinic
```
- Tags: `choking, choking first aid, heimlich maneuver, abdominal thrusts, back blows, what to do if someone is choking, CPR, first aid, emergency, sketch clinic`

### ep16-choking — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep16-choking/ep16-choking-es.mp4`
- Video language: Spanish
- Subtitles file: `ep16-choking/ep16-choking-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Un adulto se atraganta? 5 golpes + 5 compresiones (Heimlich) #Shorts`
- Description:
```
Si un adulto se atraganta pero puede toser, anímale a toser. Si no puede toser, hablar ni respirar: llama a emergencias, da hasta 5 golpes en la espalda y luego hasta 5 compresiones abdominales, y alterna.
Si deja de responder, empieza la RCP. Quien recibió compresiones abdominales debe ver a un médico después.
En bebés, niños y embarazadas la técnica es distinta: haz un curso de primeros auxilios.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #Atragantamiento #Heimlich #PrimerosAuxilios #SketchClinic
```
- Tags: `atragantamiento, maniobra de Heimlich, compresiones abdominales, golpes en la espalda, primeros auxilios, RCP, emergencia, sketch clinic`

### ep16-choking — French  *(Phase 2 — only if the user asks)*
- File: `ep16-choking/ep16-choking-fr.mp4`
- Video language: French
- Subtitles file: `ep16-choking/ep16-choking-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Adulte qui s’étouffe : 5 tapes + 5 compressions (Heimlich) #Shorts`
- Description:
```
Si un adulte s'étouffe mais peut tousser, encourage-le à tousser. S'il ne peut ni tousser, ni parler, ni respirer : appelle les secours, donne jusqu'à 5 tapes dans le dos puis jusqu'à 5 compressions abdominales, et alterne.
S'il ne réagit plus, commence la RCP. Toute personne ayant reçu des compressions abdominales doit voir un médecin ensuite.
Pour les bébés, les enfants et les femmes enceintes, la technique est différente : suis une formation aux premiers secours.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #Étouffement #Heimlich #PremiersSecours #SketchClinic
```
- Tags: `étouffement, manœuvre de Heimlich, compressions abdominales, tapes dans le dos, premiers secours, RCP, urgence, sketch clinic`

### ep16-choking — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep16-choking/ep16-choking-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep16-choking/ep16-choking-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `大人の窒息：背部叩打と腹部突き上げ（ハイムリック法）#Shorts`
- Description:
```
大人がのどを詰まらせても、せきができるならせきを続けてもらいます。せき・声・呼吸ができなければ119番し、背部叩打を最大5回、続けて腹部突き上げを最大5回、交互にくり返します。
反応がなくなったら心肺蘇生を。腹部突き上げを受けた人は必ず受診してください。
乳児・子ども・妊婦では方法が異なります。救命講習の受講をおすすめします。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #窒息 #ハイムリック法 #応急処置 #SketchClinic
```
- Tags: `窒息, ハイムリック法, 腹部突き上げ法, 背部叩打法, のどに詰まった, 応急処置, 心肺蘇生, 救急, sketch clinic`

### ep17-heat-illness — English
- File: `ep17-heat-illness/ep17-heat-illness-en.mp4`
- Video language: English
- Subtitles file: `ep17-heat-illness/ep17-heat-illness-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Heat Exhaustion vs Heatstroke: Know the Difference #Shorts`
- Description:
```
Heat exhaustion: heavy sweating, headache, dizziness, nausea, cramps, weakness and thirst. Move to a cool place, lie down with feet raised, drink water and cool the skin. They should feel better within 30 minutes.
Heatstroke is an emergency: call emergency services for confusion, fainting, seizures, no sweating, a temperature of 40 °C or more, or no improvement after 30 minutes. Keep cooling them while you wait.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #Heatstroke #HeatExhaustion #FirstAid #SketchClinic
```
- Tags: `heatstroke, heat exhaustion, heat stroke symptoms, heat illness, first aid, summer safety, dehydration, emergency, health tips, sketch clinic`

### ep17-heat-illness — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep17-heat-illness/ep17-heat-illness-es.mp4`
- Video language: Spanish
- Subtitles file: `ep17-heat-illness/ep17-heat-illness-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `Agotamiento por calor vs golpe de calor: la diferencia #Shorts`
- Description:
```
Agotamiento por calor: mucho sudor, dolor de cabeza, mareo, náuseas, calambres, debilidad y sed. Lugar fresco, acostado con los pies elevados, agua y enfriar la piel. Debería mejorar en 30 minutos.
El golpe de calor es una emergencia: llama si hay confusión, desmayo, convulsiones, no suda, temperatura de 40 °C o más o no mejora en 30 minutos. Sigue enfriándole mientras esperas.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #GolpeDeCalor #Verano #PrimerosAuxilios #SketchClinic
```
- Tags: `golpe de calor, agotamiento por calor, insolación, ola de calor, primeros auxilios, deshidratación, emergencia, sketch clinic`

### ep17-heat-illness — French  *(Phase 2 — only if the user asks)*
- File: `ep17-heat-illness/ep17-heat-illness-fr.mp4`
- Video language: French
- Subtitles file: `ep17-heat-illness/ep17-heat-illness-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Épuisement dû à la chaleur ou coup de chaleur ? La différence #Shorts`
- Description:
```
Épuisement dû à la chaleur : forte sueur, mal de tête, vertiges, nausées, crampes, faiblesse, soif. Au frais, allongé pieds surélevés, faire boire et refroidir la peau. Ça doit aller mieux en 30 minutes.
Le coup de chaleur est une urgence : appelle en cas de confusion, malaise, convulsions, absence de sueur, température de 40 °C ou plus, ou pas d'amélioration en 30 minutes. Continue de refroidir en attendant.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #CoupDeChaleur #Canicule #PremiersSecours #SketchClinic
```
- Tags: `coup de chaleur, épuisement dû à la chaleur, insolation, canicule, premiers secours, déshydratation, urgence, sketch clinic`

### ep17-heat-illness — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep17-heat-illness/ep17-heat-illness-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep17-heat-illness/ep17-heat-illness-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `熱疲労と熱射病のちがい｜熱中症の応急処置 #Shorts`
- Description:
```
熱疲労：大量の汗、頭痛、めまい、吐き気、けいれん、だるさ、のどの渇き。涼しい場所で足を高くして寝かせ、水分補給と体の冷却を。30分ほどで回復するはずです。
熱射病は緊急事態。意識の異常、失神、けいれん、汗が出ない、40℃以上の体温、30分たっても回復しない場合はすぐ119番。待つ間も冷やし続けてください。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #熱中症 #熱射病 #応急処置 #SketchClinic
```
- Tags: `熱中症, 熱射病, 熱疲労, 熱中症 応急処置, 脱水, 夏, 救急, sketch clinic`

### ep18-button-battery — English
- File: `ep18-button-battery/ep18-button-battery-en.mp4`
- Video language: English
- Subtitles file: `ep18-button-battery/ep18-button-battery-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Child Swallowed a Button Battery? Go to the ER NOW #Shorts`
- Description:
```
A swallowed button battery is an emergency: stuck in the food pipe it can cause serious burns within about 2 hours.
Go to the emergency room immediately or call emergency services — even if there are no symptoms. Don't make the child vomit and don't give food or drink unless a medical professional tells you to. Bring the packaging if you can.
Keep batteries and devices out of reach and tape battery covers shut.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #ButtonBattery #ChildSafety #FirstAid #SketchClinic
```
- Tags: `button battery, swallowed battery, child swallowed battery, coin battery, child safety, poisoning, first aid, emergency, parenting, sketch clinic`

### ep18-button-battery — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep18-button-battery/ep18-button-battery-es.mp4`
- Video language: Spanish
- Subtitles file: `ep18-button-battery/ep18-button-battery-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Un niño tragó una pila de botón? A urgencias YA #Shorts`
- Description:
```
Tragarse una pila de botón es una emergencia: atascada en el esófago puede causar quemaduras graves en unas 2 horas.
Ve a urgencias de inmediato o llama a emergencias, aunque no haya síntomas. No provoques el vómito ni des comida o bebida salvo indicación de un profesional sanitario. Lleva el envase si puedes.
Guarda pilas y aparatos fuera de su alcance y asegura las tapas con cinta.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #PilaDeBotón #SeguridadInfantil #PrimerosAuxilios #SketchClinic
```
- Tags: `pila de botón, tragó una pila, seguridad infantil, ingesta de cuerpo extraño, primeros auxilios, emergencia, sketch clinic`

### ep18-button-battery — French  *(Phase 2 — only if the user asks)*
- File: `ep18-button-battery/ep18-button-battery-fr.mp4`
- Video language: French
- Subtitles file: `ep18-button-battery/ep18-button-battery-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Pile bouton avalée par un enfant : urgences tout de suite #Shorts`
- Description:
```
Une pile bouton avalée est une urgence : coincée dans l'œsophage, elle peut provoquer de graves brûlures en 2 heures environ.
Va aux urgences tout de suite ou appelle les secours, même sans symptômes. Ne fais pas vomir, ne donne ni à manger ni à boire sauf avis d'un soignant. Apporte l'emballage si possible.
Range piles et appareils hors de portée et ferme les compartiments avec du ruban adhésif.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #PileBouton #SécuritéEnfant #PremiersSecours #SketchClinic
```
- Tags: `pile bouton, pile avalée, sécurité enfant, ingestion, premiers secours, urgence, sketch clinic`

### ep18-button-battery — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep18-button-battery/ep18-button-battery-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep18-button-battery/ep18-button-battery-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `子どもがボタン電池を誤飲したら今すぐ救急へ #Shorts`
- Description:
```
ボタン電池の誤飲は緊急事態。食道にはさまると、約2時間で重い損傷を起こすことがあります。
症状がなくても、すぐ救急外来へ、または119番を。医療者の指示がない限り、吐かせたり飲食させたりしないでください。可能ならパッケージを持参。
電池や機器は子どもの手の届かない所に置き、電池のふたはテープで固定しましょう。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #ボタン電池 #誤飲 #子どもの安全 #SketchClinic
```
- Tags: `ボタン電池, 誤飲, 子ども 誤飲, コイン電池, 子どもの安全, 応急処置, 救急, sketch clinic`

### ep19-ear-popping — English
- File: `ep19-ear-popping/ep19-ear-popping-en.mp4`
- Video language: English
- Subtitles file: `ep19-ear-popping/ep19-ear-popping-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Why Your Ears Pop on Planes (and How to Unblock Them) #Shorts`
- Description:
```
A tiny tube (the Eustachian tube) balances air pressure behind your eardrum. When cabin pressure changes fast on take-off and landing, it can't keep up and your ears feel blocked.
Swallow, yawn, chew gum, or gently pinch your nose and blow with your mouth closed — never force it. Babies can feed or use a pacifier.
See a doctor if pain, muffled hearing or ringing lasts several days, or there's fluid or blood from the ear. If you have a bad cold or ear infection, ask a doctor before flying.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #EarPopping #AirplaneEar #TravelTips #SketchClinic
```
- Tags: `ear popping, airplane ear, ears blocked on plane, eustachian tube, how to pop your ears, valsalva, travel tips, ear pain, health tips, sketch clinic`

### ep19-ear-popping — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep19-ear-popping/ep19-ear-popping-es.mp4`
- Video language: Spanish
- Subtitles file: `ep19-ear-popping/ep19-ear-popping-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `Oídos tapados en el avión: por qué y cómo destaparlos #Shorts`
- Description:
```
Un tubito (la trompa de Eustaquio) equilibra la presión detrás del tímpano. Al despegar y aterrizar la presión cambia rápido y los oídos se tapan.
Traga, bosteza, mastica chicle o tápate la nariz y sopla suavemente con la boca cerrada, sin forzar. Los bebés pueden comer o usar chupete.
Ve al médico si el dolor, la sordera o el zumbido duran varios días, o sale líquido o sangre del oído. Con un resfriado fuerte u otitis, consulta antes de volar.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #OídosTapados #Viajes #Salud #SketchClinic
```
- Tags: `oídos tapados, oídos en el avión, trompa de Eustaquio, destapar oídos, viajes, dolor de oído, salud, sketch clinic`

### ep19-ear-popping — French  *(Phase 2 — only if the user asks)*
- File: `ep19-ear-popping/ep19-ear-popping-fr.mp4`
- Video language: French
- Subtitles file: `ep19-ear-popping/ep19-ear-popping-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Oreilles bouchées en avion : pourquoi et comment les déboucher #Shorts`
- Description:
```
Un petit tube (la trompe d'Eustache) équilibre la pression derrière le tympan. Au décollage et à l'atterrissage, la pression change vite et l'oreille se bouche.
Avale, bâille, mâche un chewing-gum, ou pince le nez et souffle doucement bouche fermée, sans forcer. Les bébés peuvent boire ou prendre une tétine.
Consulte si la douleur, l'audition étouffée ou les sifflements durent plusieurs jours, ou en cas d'écoulement ou de sang. En cas de gros rhume ou d'otite, demande un avis avant de voler.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #OreillesBouchées #Avion #Santé #SketchClinic
```
- Tags: `oreilles bouchées, oreilles avion, trompe d'Eustache, déboucher les oreilles, voyage, douleur oreille, santé, sketch clinic`

### ep19-ear-popping — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep19-ear-popping/ep19-ear-popping-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep19-ear-popping/ep19-ear-popping-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `飛行機で耳が詰まる理由と治し方 #Shorts`
- Description:
```
鼓膜の奥の気圧は、耳管という細い管で調整されています。離着陸で気圧が急に変わると調整が追いつかず、耳が詰まった感じになります。
つばを飲む、あくび、ガム、または鼻をつまんで口を閉じ、やさしく息を送る（強くいきまない）。赤ちゃんは授乳やおしゃぶりで。
痛み・聞こえにくさ・耳鳴りが数日続く、耳から液や血が出る場合は受診を。ひどい鼻かぜや中耳炎のときは、搭乗前に医師に相談しましょう。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #耳抜き #飛行機 #耳 #SketchClinic
```
- Tags: `耳抜き, 飛行機 耳, 耳が詰まる, 耳管, 航空性中耳炎, 旅行, 健康, sketch clinic`

### ep20-contagious-yawn — English
- File: `ep20-contagious-yawn/ep20-contagious-yawn-en.mp4`
- Video language: English
- Subtitles file: `ep20-contagious-yawn/ep20-contagious-yawn-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Why Are Yawns Contagious? (Are You Yawning Yet?) #Shorts`
- Description:
```
Seeing, hearing or even reading about a yawn can make you yawn. Scientists think contagious yawning is linked to brain networks for mirroring and connecting with others — it's still being studied.
It spreads more easily between people who are close, usually develops around age 4–5, and some animals catch yawns too. Not catching yawns is normal.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #Yawning #Brain #FunFacts #SketchClinic
```
- Tags: `contagious yawning, why do we yawn, yawning, yawn, empathy, brain facts, body facts, fun facts, health tips, sketch clinic`

### ep20-contagious-yawn — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep20-contagious-yawn/ep20-contagious-yawn-es.mp4`
- Video language: Spanish
- Subtitles file: `ep20-contagious-yawn/ep20-contagious-yawn-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Por qué se contagian los bostezos? #Shorts`
- Description:
```
Ver, oír o incluso leer sobre un bostezo puede hacerte bostezar. Se cree que el bostezo contagioso se relaciona con redes cerebrales para imitar y conectar con otros; aún se investiga.
Se contagia más entre personas cercanas, suele aparecer hacia los 4–5 años y algunos animales también se contagian. No contagiarse es normal.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #Bostezo #Cerebro #Curiosidades #SketchClinic
```
- Tags: `bostezo contagioso, por qué bostezamos, bostezo, empatía, cerebro, curiosidades, salud, sketch clinic`

### ep20-contagious-yawn — French  *(Phase 2 — only if the user asks)*
- File: `ep20-contagious-yawn/ep20-contagious-yawn-fr.mp4`
- Video language: French
- Subtitles file: `ep20-contagious-yawn/ep20-contagious-yawn-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Pourquoi le bâillement est contagieux ? #Shorts`
- Description:
```
Voir, entendre ou même lire le mot « bâiller » peut te faire bâiller. On pense que le bâillement contagieux est lié aux réseaux cérébraux de l'imitation et du lien aux autres ; c'est encore étudié.
Il se transmet plus entre proches, apparaît vers 4–5 ans, et certains animaux l'attrapent aussi. Ne pas l'attraper est normal.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #Bâillement #Cerveau #LeSaviezVous #SketchClinic
```
- Tags: `bâillement contagieux, pourquoi on bâille, bâillement, empathie, cerveau, le saviez-vous, santé, sketch clinic`

### ep20-contagious-yawn — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep20-contagious-yawn/ep20-contagious-yawn-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep20-contagious-yawn/ep20-contagious-yawn-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `あくびがうつるのはなぜ？ #Shorts`
- Description:
```
あくびを見る・聞く・読むだけでも、あくびが出ることがあります。他人をまねたり共感したりする脳のしくみが関係すると考えられていますが、まだ研究中です。
親しい人どうしでうつりやすく、4〜5歳ごろから見られ、動物にもうつります。うつらなくても正常です。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #あくび #脳 #雑学 #SketchClinic
```
- Tags: `あくび, あくび うつる, あくび なぜ, 共感, 脳, 雑学, 健康, sketch clinic`

### ep21-minor-burn — English
- File: `ep21-minor-burn/ep21-minor-burn-en.mp4`
- Video language: English
- Subtitles file: `ep21-minor-burn/ep21-minor-burn-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Burned Your Skin? Minor Burn First Aid (Do THIS, Not Ice) #Shorts`
- Description:
```
Cool the burn under cool running water for 10 to 20 minutes, take off rings and watches before swelling, then cover loosely with cling film or a clean non-stick dressing.
Don't use ice, butter, oil or toothpaste, and don't pop blisters.
Get medical help for burns bigger than the person's hand, deep or white/charred, on the face, hands, feet, genitals or over a joint, chemical or electrical burns, or any burn in a baby or young child. Call emergency services if there is trouble breathing or a large burn.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #Burn #FirstAid #SketchClinic
```
- Tags: `burn first aid, minor burn, how to treat a burn, cool running water, first aid, kitchen burn, scald, blister, what not to put on a burn, sketch clinic`

### ep21-minor-burn — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep21-minor-burn/ep21-minor-burn-es.mp4`
- Video language: Spanish
- Subtitles file: `ep21-minor-burn/ep21-minor-burn-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Te quemaste? Primeros auxilios para una quemadura leve #Shorts`
- Description:
```
Enfría la quemadura con agua corriente fresca durante 10 a 20 minutos, quita anillos y relojes antes de que se hinche y cubre sin apretar con film transparente o un apósito limpio no adherente.
No uses hielo, mantequilla, aceite ni pasta de dientes, y no revientes las ampollas.
Busca atención médica si la quemadura es mayor que la mano, profunda o blanca/carbonizada, en cara, manos, pies, genitales o articulaciones, si es química o eléctrica, o si es de un bebé o niño pequeño. Llama a emergencias si hay dificultad para respirar o la quemadura es extensa.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #Quemadura #PrimerosAuxilios #SketchClinic
```
- Tags: `quemadura, primeros auxilios, quemadura leve, agua fría, qué hacer si te quemas, ampollas, cocina, salud, sketch clinic`

### ep21-minor-burn — French  *(Phase 2 — only if the user asks)*
- File: `ep21-minor-burn/ep21-minor-burn-fr.mp4`
- Video language: French
- Subtitles file: `ep21-minor-burn/ep21-minor-burn-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Brûlure légère : les bons gestes (sans glace !) #Shorts`
- Description:
```
Refroidis la brûlure sous l'eau fraîche du robinet pendant 10 à 20 minutes, retire bagues et montre avant le gonflement, puis couvre sans serrer avec du film alimentaire ou un pansement propre non adhérent.
Pas de glace, de beurre, d'huile ni de dentifrice, et ne perce pas les cloques.
Consulte pour une brûlure plus grande que la main, profonde ou blanche/noircie, au visage, aux mains, aux pieds, aux parties génitales ou sur une articulation, chimique ou électrique, ou chez un bébé ou un jeune enfant. Appelle les urgences en cas de difficulté à respirer ou de brûlure étendue.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #Brûlure #PremiersSecours #SketchClinic
```
- Tags: `brûlure, premiers secours, brûlure légère, eau fraîche, que faire en cas de brûlure, cloques, cuisine, santé, sketch clinic`

### ep21-minor-burn — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep21-minor-burn/ep21-minor-burn-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep21-minor-burn/ep21-minor-burn-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `やけどしたら？軽いやけどの応急手当（氷はNG） #Shorts`
- Description:
```
やけどは流れる冷たい水で10〜20分冷やします。腫れる前に指輪や時計を外し、ラップか清潔な非固着性ガーゼでゆるく覆いましょう。
氷・バター・油・歯みがき粉は使わず、水ぶくれはつぶさないでください。
手のひらより大きい、深い・白っぽい、顔・手足・陰部・関節、薬品や電気によるやけど、赤ちゃんや小さな子のやけどは受診を。息苦しさがある、または範囲が広い場合は救急車を呼んでください。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #やけど #応急手当 #SketchClinic
```
- Tags: `やけど, 応急手当, 軽いやけど, 冷やす, 水ぶくれ, 台所, 健康, sketch clinic`

### ep22-fainting — English
- File: `ep22-fainting/ep22-fainting-en.mp4`
- Video language: English
- Subtitles file: `ep22-fainting/ep22-fainting-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Someone Fainted? What to Do (First Aid Steps) #Shorts`
- Description:
```
If someone faints, check they respond and are breathing, lay them flat on their back and raise their legs about 30 cm (1 foot), loosen tight clothing and give fresh air. Most people wake within a minute. Let them sit up slowly, and give water or food only when fully alert.
Don't sit them up quickly, slap them, leave them alone, or give anything by mouth to someone unconscious.
Call emergency services if they don't wake within a minute, aren't breathing, are injured or have chest pain. See a doctor after a first faint, repeated faints, or if pregnant or with heart problems.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #Fainting #FirstAid #SketchClinic
```
- Tags: `fainting, what to do if someone faints, first aid, syncope, passed out, legs up, unconscious, dizzy, health, sketch clinic`

### ep22-fainting — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep22-fainting/ep22-fainting-es.mp4`
- Video language: Spanish
- Subtitles file: `ep22-fainting/ep22-fainting-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Alguien se desmayó? Qué hacer (primeros auxilios) #Shorts`
- Description:
```
Si alguien se desmaya, comprueba que responde y respira, acuéstalo boca arriba, levanta sus piernas unos 30 cm, afloja la ropa ajustada y dale aire fresco. La mayoría despierta en un minuto. Que se incorpore despacio y dale agua o comida solo cuando esté del todo alerta.
No lo incorpores rápido, no le des bofetadas, no lo dejes solo ni le des nada por la boca si está inconsciente.
Llama a emergencias si no despierta en un minuto, no respira, está herido o tiene dolor de pecho. Consulta al médico tras un primer desmayo, si se repiten, o si hay embarazo o problemas del corazón.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #Desmayo #PrimerosAuxilios #SketchClinic
```
- Tags: `desmayo, qué hacer si alguien se desmaya, primeros auxilios, síncope, pérdida de conocimiento, piernas elevadas, mareo, salud, sketch clinic`

### ep22-fainting — French  *(Phase 2 — only if the user asks)*
- File: `ep22-fainting/ep22-fainting-fr.mp4`
- Video language: French
- Subtitles file: `ep22-fainting/ep22-fainting-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Quelqu'un s'est évanoui ? Les bons gestes #Shorts`
- Description:
```
Si quelqu'un s'évanouit, vérifie qu'il réagit et respire, allonge-le sur le dos, surélève ses jambes d'environ 30 cm, desserre les vêtements et fais circuler l'air frais. La plupart se réveillent en une minute. Laisse-le se redresser lentement et ne donne à boire ou à manger qu'une fois bien réveillé.
Ne le redresse pas vite, ne le gifle pas, ne le laisse pas seul et ne donne rien par la bouche à une personne inconsciente.
Appelle les urgences s'il ne se réveille pas en une minute, ne respire pas, est blessé ou a une douleur à la poitrine. Consulte après un premier malaise, s'ils se répètent, ou en cas de grossesse ou de problème cardiaque.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #Malaise #PremiersSecours #SketchClinic
```
- Tags: `évanouissement, malaise, premiers secours, que faire si quelqu'un s'évanouit, perte de connaissance, jambes surélevées, vertiges, santé, sketch clinic`

### ep22-fainting — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep22-fainting/ep22-fainting-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep22-fainting/ep22-fainting-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `人が失神したら？応急手当の手順 #Shorts`
- Description:
```
人が失神したら、反応と呼吸を確認し、あお向けに寝かせて足を30cmほど高くし、きつい服をゆるめて新鮮な空気を送ります。多くは1分以内に意識が戻ります。ゆっくり起き上がらせ、飲食はしっかり目覚めてから。
急に起こす、たたく、一人にする、意識のない人に飲食物を与えることは避けてください。
1分たっても目覚めない、呼吸がない、けが、胸の痛みがある場合は救急車を。初めての失神、くり返す場合、妊娠中や心臓の病気がある場合は受診してください。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #失神 #応急手当 #SketchClinic
```
- Tags: `失神, 応急手当, 意識を失う, 足を上げる, めまい, 健康, sketch clinic`

### ep23-severe-bleeding — English
- File: `ep23-severe-bleeding/ep23-severe-bleeding-en.mp4`
- Video language: English
- Subtitles file: `ep23-severe-bleeding/ep23-severe-bleeding-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Severe Bleeding? What to Do (First Aid Steps) #Shorts`
- Description:
```
For heavy bleeding, call emergency services, press hard and firmly on the wound with a clean cloth or gauze, and keep pressing. If blood soaks through, add more cloth on top instead of removing it. Lay the person down and raise the injured limb if you can.
Don't pull out objects stuck in the wound, peek, or stop pressing.
Get medical help for any wound that bleeds heavily, spurts, or won't stop after 10 minutes of pressure.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #FirstAid #Bleeding #SketchClinic
```
- Tags: `severe bleeding, first aid, how to stop bleeding, direct pressure, bleeding wound, emergency, wound care, cut, health, sketch clinic`

### ep23-severe-bleeding — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep23-severe-bleeding/ep23-severe-bleeding-es.mp4`
- Video language: Spanish
- Subtitles file: `ep23-severe-bleeding/ep23-severe-bleeding-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Sangrado grave? Qué hacer (primeros auxilios) #Shorts`
- Description:
```
Ante un sangrado abundante, llama a emergencias, presiona fuerte y sin soltar la herida con un paño limpio o gasa y sigue presionando. Si la sangre empapa el paño, añade más encima en lugar de quitarlo. Acuesta a la persona y eleva la extremidad herida si puedes.
No saques objetos clavados en la herida, no mires ni dejes de presionar.
Busca atención médica si una herida sangra mucho, sale a chorros o no para tras 10 minutos de presión.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #PrimerosAuxilios #Sangrado #SketchClinic
```
- Tags: `sangrado grave, primeros auxilios, cómo detener una hemorragia, presión directa, herida, emergencia, corte, salud, sketch clinic`

### ep23-severe-bleeding — French  *(Phase 2 — only if the user asks)*
- File: `ep23-severe-bleeding/ep23-severe-bleeding-fr.mp4`
- Video language: French
- Subtitles file: `ep23-severe-bleeding/ep23-severe-bleeding-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Saignement grave ? Les bons gestes (premiers secours) #Shorts`
- Description:
```
En cas de saignement important, appelle les urgences, appuie fort et sans relâcher sur la plaie avec un linge propre ou une compresse, et continue. Si le sang traverse, ajoute un linge par-dessus au lieu de l'enlever. Allonge la personne et surélève le membre blessé si possible.
Ne retire pas un objet planté dans la plaie, ne regarde pas sous le linge et n'arrête pas d'appuyer.
Cherche une aide médicale si une plaie saigne beaucoup, gicle ou ne s'arrête pas après 10 minutes de pression.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #PremiersSecours #Saignement #SketchClinic
```
- Tags: `saignement grave, premiers secours, arrêter une hémorragie, compression directe, plaie, urgence, coupure, santé, sketch clinic`

### ep23-severe-bleeding — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep23-severe-bleeding/ep23-severe-bleeding-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep23-severe-bleeding/ep23-severe-bleeding-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `ひどい出血のときは？応急手当の手順 #Shorts`
- Description:
```
大量に出血しているときは、救急車を呼び、清潔な布やガーゼで傷を強く押さえ続けます。血がしみても布ははがさず、上から重ねます。できれば横にして、けがをした手足を高くします。
傷に刺さった物は抜かず、のぞいたり押さえるのをやめたりしないでください。
大量に出る、噴き出す、10分押さえても止まらない出血は医療機関を受診してください。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #応急手当 #出血 #SketchClinic
```
- Tags: `出血, 応急手当, 止血, 圧迫, けが, 健康, sketch clinic`

### ep24-goosebumps — English
- File: `ep24-goosebumps/ep24-goosebumps-en.mp4`
- Video language: English
- Subtitles file: `ep24-goosebumps/ep24-goosebumps-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Why Do We Get Goosebumps? #Shorts`
- Description:
```
Goosebumps happen when a tiny muscle at the base of each hair (the arrector pili) contracts, pulling the hair upright and bunching the skin into a bump. Cold, fear or strong emotions like music or awe can trigger it. In furry animals it traps warm air or makes them look bigger; in humans it's a leftover reflex.
Goosebumps are harmless and fade on their own. See a doctor if you often get chills with fever or feel unwell.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #Goosebumps #HowTheBodyWorks #SketchClinic
```
- Tags: `goosebumps, why do we get goosebumps, arrector pili, skin, cold, fear, reflex, how the body works, health, sketch clinic`

### ep24-goosebumps — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep24-goosebumps/ep24-goosebumps-es.mp4`
- Video language: Spanish
- Subtitles file: `ep24-goosebumps/ep24-goosebumps-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Por qué nos sale piel de gallina? #Shorts`
- Description:
```
La piel de gallina aparece cuando un diminuto músculo en la base de cada vello (el músculo erector del pelo) se contrae, levanta el vello y arruga la piel formando un bulto. El frío, el miedo o emociones intensas como la música o el asombro pueden provocarla. En animales con pelaje atrapa aire caliente o los hace parecer más grandes; en las personas es un reflejo heredado.
Es inofensiva y se quita sola. Consulta al médico si tienes escalofríos con fiebre o te sientes mal.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #PielDeGallina #CuerpoHumano #SketchClinic
```
- Tags: `piel de gallina, por qué nos sale piel de gallina, músculo erector del pelo, piel, frío, miedo, reflejo, cuerpo humano, salud, sketch clinic`

### ep24-goosebumps — French  *(Phase 2 — only if the user asks)*
- File: `ep24-goosebumps/ep24-goosebumps-fr.mp4`
- Video language: French
- Subtitles file: `ep24-goosebumps/ep24-goosebumps-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Pourquoi a-t-on la chair de poule ? #Shorts`
- Description:
```
La chair de poule apparaît quand un minuscule muscle à la base de chaque poil (le muscle horripilateur) se contracte, redresse le poil et plisse la peau en petite bosse. Le froid, la peur ou de fortes émotions comme la musique ou l'émerveillement peuvent la déclencher. Chez les animaux à fourrure, elle retient l'air chaud ou fait paraître plus gros ; chez l'humain, c'est un vieux réflexe.
Elle est sans danger et passe seule. Consulte un médecin si tu as souvent des frissons avec de la fièvre ou te sens mal.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #ChairDePoule #CorpsHumain #SketchClinic
```
- Tags: `chair de poule, pourquoi la chair de poule, muscle horripilateur, peau, froid, peur, réflexe, corps humain, santé, sketch clinic`

### ep24-goosebumps — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep24-goosebumps/ep24-goosebumps-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep24-goosebumps/ep24-goosebumps-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `鳥肌はなぜ立つ？ #Shorts`
- Description:
```
鳥肌は、毛の根元にある小さな筋肉（立毛筋）が縮んで毛を立たせ、まわりの皮膚が盛り上がることで起こります。寒さや恐怖、音楽や感動などの強い感情がきっかけになります。毛の多い動物では暖かい空気をためたり体を大きく見せたりしますが、人間では名残の反射です。
鳥肌は心配なく、自然におさまります。熱を伴う悪寒がよくある、体調が悪いときは受診してください。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #鳥肌 #体のしくみ #SketchClinic
```
- Tags: `鳥肌, 鳥肌 なぜ, 立毛筋, 皮膚, 寒さ, 恐怖, 反射, 体のしくみ, 健康, sketch clinic`

### ep25-something-in-eye — English
- File: `ep25-something-in-eye/ep25-something-in-eye-en.mp4`
- Video language: English
- Subtitles file: `ep25-something-in-eye/ep25-something-in-eye-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Something in Your Eye? What to Do (First Aid) #Shorts`
- Description:
```
Don't rub your eye. Wash your hands, blink a few times, then rinse with clean lukewarm water or sterile saline, tilting your head so it runs off. For a speck under the upper lid, gently pull the upper lid over the lower one.
Don't try to remove anything stuck in the eye, and don't use tweezers or cotton swabs.
Get urgent medical care for a chemical splash (rinse for 15 minutes first), a stuck object, vision changes, or pain or redness that doesn't go away.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #FirstAid #EyeHealth #SketchClinic
```
- Tags: `something in my eye, eye first aid, foreign body in eye, how to flush eye, eye irritation, eye safety, eye emergency, first aid, health, sketch clinic`

### ep25-something-in-eye — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep25-something-in-eye/ep25-something-in-eye-es.mp4`
- Video language: Spanish
- Subtitles file: `ep25-something-in-eye/ep25-something-in-eye-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Algo en el ojo? Qué hacer (primeros auxilios) #Shorts`
- Description:
```
No te frotes el ojo. Lávate las manos, parpadea varias veces y luego enjuaga con agua limpia tibia o suero salino estéril, inclinando la cabeza. Si la partícula está bajo el párpado superior, tira suavemente de él sobre el inferior.
No intentes sacar nada clavado en el ojo ni uses pinzas o bastoncillos.
Busca atención médica urgente si es un químico (enjuaga 15 minutos antes), un objeto clavado, cambios en la vista o dolor o enrojecimiento que no desaparece.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #PrimerosAuxilios #SaludOcular #SketchClinic
```
- Tags: `algo en el ojo, primeros auxilios ojo, cuerpo extraño en el ojo, lavar el ojo, irritación ocular, salud, sketch clinic`

### ep25-something-in-eye — French  *(Phase 2 — only if the user asks)*
- File: `ep25-something-in-eye/ep25-something-in-eye-fr.mp4`
- Video language: French
- Subtitles file: `ep25-something-in-eye/ep25-something-in-eye-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Quelque chose dans l'œil ? Que faire (premiers secours) #Shorts`
- Description:
```
Ne te frotte pas l'œil. Lave-toi les mains, cligne des yeux plusieurs fois, puis rince à l'eau propre tiède ou au sérum physiologique stérile, tête penchée. Pour un grain sous la paupière supérieure, tire-la doucement par-dessus l'inférieure.
N'essaie pas de retirer un objet planté dans l'œil, et n'utilise ni pince ni coton-tige.
Consulte en urgence en cas de projection chimique (rince 15 minutes d'abord), d'objet planté, de changement de vision ou de douleur ou rougeur persistante.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #PremiersSecours #SantéOculaire #SketchClinic
```
- Tags: `quelque chose dans l'œil, premiers secours œil, corps étranger œil, rincer l'œil, irritation de l'œil, santé, sketch clinic`

### ep25-something-in-eye — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep25-something-in-eye/ep25-something-in-eye-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep25-something-in-eye/ep25-something-in-eye-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `目に何か入ったら？応急手当の手順 #Shorts`
- Description:
```
目をこすらないでください。手を洗い、何度かまばたきをして、それでも残っていればきれいなぬるま湯か滅菌した生理食塩水で、頭を傾けて洗い流します。上まぶたの裏にあるときは、上まぶたをそっと下まぶたにかぶせます。
目に刺さった物は取ろうとせず、ピンセットや綿棒も使わないでください。
薬品が入った場合（先に15分洗う）、物が刺さった、見えにくい、痛みや赤みが続くときはすぐに受診してください。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #応急手当 #目の健康 #SketchClinic
```
- Tags: `目に異物, 応急手当, 目を洗う, 目の異物, 目の痛み, 健康, sketch clinic`

### ep26-sprained-ankle — English
- File: `ep26-sprained-ankle/ep26-sprained-ankle-en.mp4`
- Video language: English
- Subtitles file: `ep26-sprained-ankle/ep26-sprained-ankle-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Sprained Ankle? First Aid Steps (Rest, Ice, Compress, Elevate) #Shorts`
- Description:
```
Rolled your ankle? Rest it and take weight off. Ice for 15–20 minutes every 2–3 hours, wrapped in a cloth. Compress with a firm but not-too-tight elastic bandage. Elevate the foot above hip level.
Get medical care if you can't put weight on it, have severe pain, a misshapen joint or numbness, or if it isn't improving after a few days.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #FirstAid #SprainedAnkle #SketchClinic
```
- Tags: `sprained ankle, ankle sprain first aid, rolled ankle, RICE, ice and compression, swollen ankle, injury first aid, first aid, health, sketch clinic`

### ep26-sprained-ankle — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep26-sprained-ankle/ep26-sprained-ankle-es.mp4`
- Video language: Spanish
- Subtitles file: `ep26-sprained-ankle/ep26-sprained-ankle-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Esguince de tobillo? Primeros auxilios #Shorts`
- Description:
```
¿Te torciste el tobillo? Reposo y sin apoyar peso. Hielo 15–20 minutos cada 2–3 horas, envuelto en un paño. Compresión con una venda elástica firme pero sin apretar demasiado. Eleva el pie por encima de la cadera.
Busca atención médica si no puedes apoyar el pie, hay dolor intenso, deformidad o entumecimiento, o si no mejora en unos días.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #PrimerosAuxilios #Esguince #SketchClinic
```
- Tags: `esguince de tobillo, tobillo torcido, primeros auxilios, hielo y compresión, tobillo hinchado, salud, sketch clinic`

### ep26-sprained-ankle — French  *(Phase 2 — only if the user asks)*
- File: `ep26-sprained-ankle/ep26-sprained-ankle-fr.mp4`
- Video language: French
- Subtitles file: `ep26-sprained-ankle/ep26-sprained-ankle-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Entorse de cheville ? Premiers secours #Shorts`
- Description:
```
Cheville foulée ? Repos, sans appui. Glace 15 à 20 minutes toutes les 2–3 heures, dans un linge. Compression avec une bande élastique ferme mais pas trop serrée. Élève le pied au-dessus de la hanche.
Consulte si tu ne peux pas appuyer, en cas de douleur intense, de déformation ou d'engourdissement, ou si ça ne s'améliore pas en quelques jours.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #PremiersSecours #Entorse #SketchClinic
```
- Tags: `entorse de cheville, cheville foulée, premiers secours, glace et compression, cheville gonflée, santé, sketch clinic`

### ep26-sprained-ankle — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep26-sprained-ankle/ep26-sprained-ankle-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep26-sprained-ankle/ep26-sprained-ankle-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `足首の捻挫の応急手当（安静・冷却・圧迫・挙上）#Shorts`
- Description:
```
足首をひねったら、まず安静にして体重をかけないようにします。2〜3時間おきに15〜20分、布で包んだ氷で冷やし、弾性包帯をきつすぎない程度に巻き、足を腰より高く上げます。
体重をかけられない、強い痛み、関節の変形やしびれがある、数日たっても良くならない場合は受診してください。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #応急手当 #捻挫 #SketchClinic
```
- Tags: `足首 捻挫, 捻挫 応急手当, 足首をひねった, 冷やす 圧迫, 腫れ, 健康, sketch clinic`

### ep27-sunburn — English
- File: `ep27-sunburn/ep27-sunburn-en.mp4`
- Video language: English
- Subtitles file: `ep27-sunburn/ep27-sunburn-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Sunburn? What to Do (Cool, Soothe, Hydrate) #Shorts`
- Description:
```
Too much sun? Cool the skin with cool water (no ice directly), soothe with moisturiser or aloe vera, drink extra water, and cover up until it heals. Don't pop blisters.
Get medical care for blisters over a large area, fever or chills, dizziness, a sunburned baby, or if it's severe or not improving.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #FirstAid #Sunburn #SketchClinic
```
- Tags: `sunburn, sunburn treatment, sunburn first aid, aloe vera, after sun, skin care, first aid, health, sketch clinic, sun safety`

### ep27-sunburn — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep27-sunburn/ep27-sunburn-es.mp4`
- Video language: Spanish
- Subtitles file: `ep27-sunburn/ep27-sunburn-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Quemadura solar? Qué hacer #Shorts`
- Description:
```
¿Demasiado sol? Enfría la piel con agua fresca (sin hielo directo), calma con crema hidratante o aloe vera, bebe más agua y cúbrete hasta que sane. No revientes las ampollas.
Busca atención médica si hay ampollas extensas, fiebre o escalofríos, mareo, si es un bebé, o si es grave o no mejora.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #PrimerosAuxilios #QuemaduraSolar #SketchClinic
```
- Tags: `quemadura solar, tratamiento quemadura solar, primeros auxilios, aloe vera, after sun, cuidado de la piel, salud, sketch clinic`

### ep27-sunburn — French  *(Phase 2 — only if the user asks)*
- File: `ep27-sunburn/ep27-sunburn-fr.mp4`
- Video language: French
- Subtitles file: `ep27-sunburn/ep27-sunburn-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Coup de soleil ? Que faire #Shorts`
- Description:
```
Trop de soleil ? Rafraîchis la peau à l'eau fraîche (sans glace directe), apaise avec une crème hydratante ou de l'aloe vera, bois plus d'eau et couvre-toi jusqu'à la guérison. Ne perce pas les cloques.
Consulte en cas de cloques étendues, fièvre ou frissons, vertiges, bébé brûlé, ou si c'est sévère ou ne s'améliore pas.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #PremiersSecours #CoupDeSoleil #SketchClinic
```
- Tags: `coup de soleil, soigner un coup de soleil, premiers secours, aloe vera, après-soleil, soin de la peau, santé, sketch clinic`

### ep27-sunburn — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep27-sunburn/ep27-sunburn-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep27-sunburn/ep27-sunburn-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `日焼けのケア（冷やす・保湿・水分補給）#Shorts`
- Description:
```
日差しを浴びすぎたら、冷たい水で冷やし（氷は直接当てない）、保湿剤やアロエで整え、水分をしっかりとり、治るまで日差しを避けます。水ぶくれはつぶさないでください。
広範囲の水ぶくれ、発熱や悪寒、めまい、赤ちゃんの日焼け、ひどい場合や治らない場合は受診してください。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #応急手当 #日焼け #SketchClinic
```
- Tags: `日焼け, 日焼け ケア, 日焼け 応急手当, アロエ, アフターサン, スキンケア, 健康, sketch clinic`

### ep28-blisters — English
- File: `ep28-blisters/ep28-blisters-en.mp4`
- Video language: English
- Subtitles file: `ep28-blisters/ep28-blisters-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Blisters: Pop or Not? What to Do #Shorts`
- Description:
```
Got a blister? Usually leave it alone, cover it with a loose dressing or padded plaster, and cut the rubbing. If it bursts, wash with clean water, leave the skin flap and cover it.
See a doctor for pus, spreading redness, increasing pain or swelling, fever, diabetes, or a large blister or one from a burn.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #FirstAid #Blisters #SketchClinic
```
- Tags: `blister, should you pop a blister, blister treatment, friction blister, first aid, foot care, skin care, health, sketch clinic, shorts`

### ep28-blisters — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep28-blisters/ep28-blisters-es.mp4`
- Video language: Spanish
- Subtitles file: `ep28-blisters/ep28-blisters-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `Ampollas: ¿reventar o no? #Shorts`
- Description:
```
¿Tienes una ampolla? Normalmente déjala, cúbrela con un apósito suelto o tirita acolchada y evita el roce. Si se revienta, lávala con agua limpia, deja la piel y cúbrela.
Ve al médico si hay pus, enrojecimiento que se extiende, más dolor o hinchazón, fiebre, diabetes, o una ampolla grande o por quemadura.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #PrimerosAuxilios #Ampollas #SketchClinic
```
- Tags: `ampolla, reventar una ampolla, tratamiento ampolla, ampolla por fricción, primeros auxilios, cuidado de los pies, salud, sketch clinic`

### ep28-blisters — French  *(Phase 2 — only if the user asks)*
- File: `ep28-blisters/ep28-blisters-fr.mp4`
- Video language: French
- Subtitles file: `ep28-blisters/ep28-blisters-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Cloques : percer ou non ? #Shorts`
- Description:
```
Une cloque ? En général, laisse-la, couvre-la d'un pansement lâche ou coussiné et évite les frottements. Si elle éclate, lave à l'eau propre, garde la peau et couvre.
Consulte en cas de pus, rougeur qui s'étend, douleur ou gonflement croissants, fièvre, diabète, ou cloque grande ou due à une brûlure.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #PremiersSecours #Cloque #SketchClinic
```
- Tags: `cloque, percer une cloque, soigner une cloque, cloque au pied, premiers secours, soin des pieds, santé, sketch clinic`

### ep28-blisters — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep28-blisters/ep28-blisters-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep28-blisters/ep28-blisters-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `水ぶくれ、つぶす？ 正しい対処 #Shorts`
- Description:
```
水ぶくれは基本的にそのままにし、ゆるめのガーゼやクッション付き絆創膏で覆い、摩擦を減らします。破れたら清潔な水で洗い、皮は残して覆います。
膿、広がる赤み、痛みや腫れの悪化、発熱、糖尿病がある場合、大きい水ぶくれややけどによる場合は受診してください。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #応急手当 #水ぶくれ #SketchClinic
```
- Tags: `水ぶくれ, 水ぶくれ つぶす, 水ぶくれ 応急手当, 靴擦れ, スキンケア, 足のケア, 健康, sketch clinic`

### ep29-splinter — English
- File: `ep29-splinter/ep29-splinter-en.mp4`
- Video language: English
- Subtitles file: `ep29-splinter/ep29-splinter-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `How to Remove a Splinter Safely #Shorts`
- Description:
```
Got a splinter? Wash your hands and the skin, pull it out with clean tweezers at the same angle it went in, wash again and cover. Don't dig deep with a needle.
See a doctor if it's deep, glass, in the eye, won't come out, or there's pus, spreading redness, or fever. Check your tetanus shots.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #FirstAid #Splinter #SketchClinic
```
- Tags: `splinter, how to remove a splinter, splinter removal, first aid, tweezers, skin care, tetanus, health, sketch clinic, shorts`

### ep29-splinter — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep29-splinter/ep29-splinter-es.mp4`
- Video language: Spanish
- Subtitles file: `ep29-splinter/ep29-splinter-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `Cómo sacar una astilla con seguridad #Shorts`
- Description:
```
¿Tienes una astilla? Lávate las manos y la piel, sácala con pinzas limpias en el mismo ángulo en que entró, lava de nuevo y cubre. No escarbes hondo con una aguja.
Ve al médico si es profunda, de vidrio, está en el ojo, no sale, o hay pus, enrojecimiento que se extiende o fiebre. Revisa tu vacuna del tétanos.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #PrimerosAuxilios #Astilla #SketchClinic
```
- Tags: `astilla, cómo sacar una astilla, sacar astilla, primeros auxilios, pinzas, cuidado de la piel, tétanos, salud, sketch clinic, shorts`

### ep29-splinter — French  *(Phase 2 — only if the user asks)*
- File: `ep29-splinter/ep29-splinter-fr.mp4`
- Video language: French
- Subtitles file: `ep29-splinter/ep29-splinter-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Retirer une écharde sans risque #Shorts`
- Description:
```
Une écharde ? Lave tes mains et la peau, retire-la avec une pince propre dans le même angle qu'à l'entrée, relave et couvre. Ne fouille pas profondément avec une aiguille.
Consulte si elle est profonde, en verre, dans l'œil, ne sort pas, ou en cas de pus, de rougeur qui s'étend ou de fièvre. Vérifie ton vaccin contre le tétanos.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #PremiersSecours #Écharde #SketchClinic
```
- Tags: `écharde, retirer une écharde, enlever une écharde, premiers secours, pince à épiler, soin de la peau, tétanos, santé, sketch clinic, shorts`

### ep29-splinter — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep29-splinter/ep29-splinter-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep29-splinter/ep29-splinter-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `とげの安全な抜き方 #Shorts`
- Description:
```
とげが刺さったら、手と周りの皮膚を洗い、清潔なピンセットで刺さった角度のまま抜き、もう一度洗って覆います。針で深くほじらないでください。
深い、ガラス、目の中、取れない、膿・広がる赤み・発熱がある場合は受診を。破傷風の予防接種も確認しましょう。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #応急手当 #とげ #SketchClinic
```
- Tags: `とげ, とげ 抜き方, とげ 応急手当, ピンセット, 破傷風, スキンケア, 健康, sketch clinic, shorts`

### ep30-tick-bite — English
- File: `ep30-tick-bite/ep30-tick-bite-en.mp4`
- Video language: English
- Subtitles file: `ep30-tick-bite/ep30-tick-bite-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Tick Bite: How to Remove a Tick Safely #Shorts`
- Description:
```
Found a tick? Grip it close to the skin with fine-tipped tweezers, pull straight up slowly and steadily, then clean the bite and your hands. Don't twist, squeeze, burn it, or use petroleum jelly.
Watch for weeks: a spreading rash, fever or aches means see a doctor and mention the tick bite.

Educational only — not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #FirstAid #TickBite #SketchClinic
```
- Tags: `tick bite, how to remove a tick, tick removal, first aid, tweezers, lyme disease, outdoor safety, health, sketch clinic, shorts`

### ep30-tick-bite — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep30-tick-bite/ep30-tick-bite-es.mp4`
- Video language: Spanish
- Subtitles file: `ep30-tick-bite/ep30-tick-bite-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `Picadura de garrapata: cómo quitarla con seguridad #Shorts`
- Description:
```
¿Encontraste una garrapata? Agárrala cerca de la piel con pinzas de punta fina, tira hacia arriba despacio y con firmeza, y limpia la picadura y tus manos. No la gires, aprietes ni quemes, ni uses vaselina.
Vigila durante semanas: si aparece un sarpullido que se extiende, fiebre o dolores, ve al médico y menciona la picadura.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #PrimerosAuxilios #Garrapata #SketchClinic
```
- Tags: `garrapata, picadura de garrapata, cómo quitar una garrapata, primeros auxilios, pinzas, enfermedad de Lyme, seguridad al aire libre, salud, sketch clinic, shorts`

### ep30-tick-bite — French  *(Phase 2 — only if the user asks)*
- File: `ep30-tick-bite/ep30-tick-bite-fr.mp4`
- Video language: French
- Subtitles file: `ep30-tick-bite/ep30-tick-bite-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Piqûre de tique : la retirer sans risque #Shorts`
- Description:
```
Une tique ? Saisis-la près de la peau avec une pince à pointes fines, tire droit vers le haut lentement et fermement, puis nettoie la piqûre et tes mains. Ne la tords pas, ne l'écrase pas, ne la brûle pas, pas de vaseline.
Surveille pendant des semaines : éruption qui s'étend, fièvre ou douleurs = consulte et mentionne la piqûre de tique.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #PremiersSecours #Tique #SketchClinic
```
- Tags: `tique, piqûre de tique, retirer une tique, premiers secours, pince à épiler, maladie de Lyme, sécurité en plein air, santé, sketch clinic, shorts`

### ep30-tick-bite — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep30-tick-bite/ep30-tick-bite-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep30-tick-bite/ep30-tick-bite-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `マダニの安全な取り方 #Shorts`
- Description:
```
マダニを見つけたら、先の細いピンセットで皮膚に近いところをつかみ、まっすぐ上にゆっくり引き抜き、刺された所と手を洗います。ひねる、つぶす、焼く、ワセリンを塗るのは避けましょう。
数週間は様子を見て、広がる発疹・発熱・体の痛みが出たら、マダニに刺されたことを伝えて受診を。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #応急手当 #マダニ #SketchClinic
```
- Tags: `マダニ, マダニ 取り方, ダニ 刺された, 応急手当, ピンセット, ライム病, アウトドア, 健康, sketch clinic, shorts`

### ep31-wrinkly-fingers — English
- File: `ep31-wrinkly-fingers/ep31-wrinkly-fingers-en.mp4`
- Video language: English
- Subtitles file: `ep31-wrinkly-fingers/ep31-wrinkly-fingers-en.srt` (Subtitles → Add language: English → Upload file → With timing)
- Title: `Why Do Fingers Wrinkle in Water? #Shorts`
- Description:
```
Why do your fingers get wrinkly in water? It's not skin swelling - your nerves narrow tiny blood vessels in your fingertips, pulling the skin into wrinkles. It may even improve grip on wet objects (scientists still debate this).
It's harmless and fades within minutes of drying. See a doctor if skin stays wrinkled, hurts, itches, or you notice numbness.

Educational only - not medical advice. If you have symptoms, see a healthcare professional.

#Shorts #Health #WrinklyFingers #SketchClinic
```
- Tags: `wrinkly fingers, why do fingers wrinkle in water, prune fingers, nervous system, blood vessels, body facts, skin, health, sketch clinic, shorts`

### ep31-wrinkly-fingers — Spanish  *(Phase 2 — only if the user asks)*
- File: `ep31-wrinkly-fingers/ep31-wrinkly-fingers-es.mp4`
- Video language: Spanish
- Subtitles file: `ep31-wrinkly-fingers/ep31-wrinkly-fingers-es.srt` (Subtitles → Add language: Spanish → Upload file → With timing)
- Title: `¿Por qué se arrugan los dedos en el agua? #Shorts`
- Description:
```
¿Por qué se arrugan los dedos en el agua? No es que la piel se hinche: tus nervios estrechan vasos sanguíneos diminutos de las yemas y la piel se pliega. Quizá mejore el agarre de objetos mojados (los científicos aún lo debaten).
Es inofensivo y se quita a los pocos minutos de secarte. Ve al médico si la piel sigue arrugada, duele, pica o notas entumecimiento.

Solo con fines educativos; no es consejo médico. Si tienes síntomas, consulta a un profesional de la salud.

#Shorts #Salud #DedosArrugados #SketchClinic
```
- Tags: `dedos arrugados, por qué se arrugan los dedos, dedos en el agua, sistema nervioso, vasos sanguíneos, curiosidades del cuerpo, piel, salud, sketch clinic, shorts`

### ep31-wrinkly-fingers — French  *(Phase 2 — only if the user asks)*
- File: `ep31-wrinkly-fingers/ep31-wrinkly-fingers-fr.mp4`
- Video language: French
- Subtitles file: `ep31-wrinkly-fingers/ep31-wrinkly-fingers-fr.srt` (Subtitles → Add language: French → Upload file → With timing)
- Title: `Pourquoi les doigts se plissent dans l'eau ? #Shorts`
- Description:
```
Pourquoi les doigts se plissent-ils dans l'eau ? Ce n'est pas la peau qui gonfle : tes nerfs resserrent de minuscules vaisseaux du bout des doigts et la peau se replie. Cela pourrait améliorer la prise sur les objets mouillés (les scientifiques en débattent).
C'est inoffensif et ça disparaît en quelques minutes une fois sec. Consulte si la peau reste plissée, fait mal, démange ou s'engourdit.

À but éducatif uniquement — pas un avis médical. Si tu as des symptômes, consulte un professionnel de santé.

#Shorts #Santé #DoigtsPlissés #SketchClinic
```
- Tags: `doigts plissés, pourquoi les doigts se plissent, doigts dans l'eau, système nerveux, vaisseaux sanguins, corps humain, peau, santé, sketch clinic, shorts`

### ep31-wrinkly-fingers — Japanese  *(Phase 2 — only if the user asks)*
- File: `ep31-wrinkly-fingers/ep31-wrinkly-fingers-ja.mp4`
- Video language: Japanese
- Subtitles file: `ep31-wrinkly-fingers/ep31-wrinkly-fingers-ja.srt` (Subtitles → Add language: Japanese → Upload file → With timing)
- Title: `水で指がふやけるのはなぜ？ #Shorts`
- Description:
```
水につかると指がしわしわになるのはなぜ？ 皮ふが水を吸って膨らむのではなく、神経の働きで指先の細い血管が縮み、皮ふが引っ張られてしわになります。濡れた物をつかみやすくする効果があるかもしれません（科学者の間では議論中）。
無害で、乾けば数分で元に戻ります。しわが続く、痛い、かゆい、しびれがある場合は受診を。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #健康 #指のしわ #SketchClinic
```
- Tags: `指 ふやける, 指 しわしわ 水, 神経, 血管, 体の豆知識, 皮ふ, 健康, sketch clinic, shorts`

## Step 3 — Report back
Send the user: channel URL, and a table of episode → video URL (all Public).