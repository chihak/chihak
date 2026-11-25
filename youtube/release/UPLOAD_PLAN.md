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
- Title: `ハチに刺されたときの応急処置とアナフィラキシーのサイン #Shorts`
- Description:
```
針はすぐにこすり出し、石けんと水で洗って冷やします。かかないこと。
息苦しさ、顔・くちびる・のどの腫れ、めまいや意識が遠のく場合はアナフィラキシーの可能性。すぐに119番を。アドレナリン自己注射薬があれば使います。

教育目的の情報であり、医療アドバイスではありません。症状がある場合は医療機関を受診してください。

#Shorts #ハチ刺され #応急処置 #アナフィラキシー #SketchClinic
```
- Tags: `ハチ刺され, 蜂に刺された, 応急処置, アナフィラキシー, エピペン, アレルギー, 健康, sketch clinic`

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

## Not ready yet
These episodes are still being produced and will be added to this plan later: ep14-mouth-ulcer, ep16-choking, ep17-heat-illness, ep19-ear-popping, ep20-contagious-yawn

## Step 3 — Report back
Send the user: channel URL, and a table of episode → video URL (all Private).