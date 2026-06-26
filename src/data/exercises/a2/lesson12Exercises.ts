import { Exercise } from '@/types/exercise'

/**
 * A2.1 — Lektion 12: Wenn es warm ist, essen wir meist Salat (Lebensmittel,
 * Essgewohnheiten, Statistik, Überraschung ausdrücken, Konjunktion wenn)
 * Independent exercises written for this site — not copied from any
 * coursebook/workbook layout or wording.
 */
export const lesson12Exercises: Exercise[] = [

  // ── Exercise 1: Lebensmittel und Getränke — multiple-choice ──────
  {
    id: 'a2-12-1-lebensmittel-getraenke',
    title: 'Lebensmittel und Getränke',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'با توجه به معنی فارسی، کلمه‌ی آلمانی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie das richtige Wort.',
    explanationFa: 'این کلمات از مهم‌ترین واژگان مواد غذایی هستند.',
    items: [
      { id: '1', question: 'میوه', options: ['das Obst', 'das Fleisch', 'das Getreide'], correctIndex: 0, explanationFa: 'das Obst یعنی میوه.' },
      { id: '2', question: 'سبزیجات', options: ['das Gemüse', 'die Wurst', 'die Limonade'], correctIndex: 0, explanationFa: 'das Gemüse یعنی سبزیجات.' },
      { id: '3', question: 'گوشت', options: ['das Fleisch', 'der Tee', 'das Mineralwasser'], correctIndex: 0, explanationFa: 'das Fleisch یعنی گوشت.' },
      { id: '4', question: 'ماهی', options: ['der Fisch', 'das Schwein', 'die Hälfte'], correctIndex: 0, explanationFa: 'der Fisch یعنی ماهی.' },
      { id: '5', question: 'غلات', options: ['das Getreide', 'der Alkohol', 'die Zeitschrift'], correctIndex: 0, explanationFa: 'das Getreide یعنی غلات.' },
      { id: '6', question: 'آب معدنی', options: ['das Mineralwasser', 'das Hühnerfleisch', 'das Gericht'], correctIndex: 0, explanationFa: 'das Mineralwasser یعنی آب معدنی.' },
      { id: '7', question: 'نوشابه / لیموناد', options: ['die Limonade', 'das Rind', 'die Heimat'], correctIndex: 0, explanationFa: 'die Limonade یعنی نوشابه.' },
      { id: '8', question: 'سوسیس / کالباس', options: ['die Wurst', 'der Preis', 'die Meinung'], correctIndex: 0, explanationFa: 'die Wurst یعنی سوسیس.' },
    ],
  },

  // ── Exercise 2: Was passt nicht? Lebensmittel — multiple-choice ──
  {
    id: 'a2-12-2-was-passt-nicht',
    title: 'Was passt nicht? Lebensmittel',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'کلمه‌ای را که به گروه نمی‌خورد انتخاب کنید.',
    instructionDe: 'Welches Wort passt nicht in die Gruppe?',
    explanationFa: 'در هر ردیف، سه کلمه به یک گروه تعلق دارند و یکی متفاوت است.',
    items: [
      { id: '1', question: 'Banane – Birne – Zitrone – Zwiebel', options: ['Zwiebel', 'Banane', 'Birne'], correctIndex: 0, explanationFa: 'Zwiebel (پیاز) سبزی است؛ بقیه میوه‌اند.' },
      { id: '2', question: 'Fleisch – Quark – Braten – Wurst', options: ['Quark', 'Fleisch', 'Wurst'], correctIndex: 0, explanationFa: 'Quark (پنیر لبنی) محصول لبنی است؛ بقیه گوشتی‌اند.' },
      { id: '3', question: 'Obst – Mehl – Zucker – Salz', options: ['Obst', 'Mehl', 'Zucker'], correctIndex: 0, explanationFa: 'Obst میوه است؛ بقیه مواد پخت‌وپز هستند.' },
      { id: '4', question: 'Cola – Bohne – Saft – Kaffee', options: ['Bohne', 'Cola', 'Saft'], correctIndex: 0, explanationFa: 'Bohne (لوبیا) غذاست؛ بقیه نوشیدنی‌اند.' },
      { id: '5', question: 'Fisch – Hähnchen – Rindfleisch – Brot', options: ['Brot', 'Fisch', 'Hähnchen'], correctIndex: 0, explanationFa: 'Brot نان است؛ بقیه گوشتی‌اند.' },
      { id: '6', question: 'Mineralwasser – Tee – Limonade – Kartoffel', options: ['Kartoffel', 'Tee', 'Limonade'], correctIndex: 0, explanationFa: 'Kartoffel (سیب‌زمینی) غذاست؛ بقیه نوشیدنی‌اند.' },
    ],
  },

  // ── Exercise 3: Statistik-Wörter verstehen — fill-blank ──────────
  {
    id: 'a2-12-3-statistik-woerter',
    title: 'Statistik-Wörter verstehen',
    type: 'fill-blank',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'جمله‌ها را با کلمه‌ی آماری مناسب کامل کنید — کلمه را بکشید یا روی آن لمس کنید.',
    instructionDe: 'Ergänzen Sie die Sätze mit dem passenden Wort.',
    wordBank: ['Hälfte', 'doppelt', 'Rund', 'durchschnittlich', 'genug', 'kaum'],
    explanationFa: 'این کلمات برای بیان آمار و مقدار درباره‌ی تغذیه به‌کار می‌روند.',
    items: [
      { id: '1', prompt: 'Frauen essen nur die ___ von der Fleischmenge der Männer.', answer: 'Hälfte', translationFa: 'زن‌ها فقط نصف مقدار گوشت مردها می‌خورند.' },
      { id: '2', prompt: 'Männer essen ___ so viel Fleisch wie Frauen.', answer: 'doppelt', translationFa: 'مردها دو برابر زن‌ها گوشت می‌خورند.' },
      { id: '3', prompt: '___ 70 Prozent essen nicht genug Obst und Gemüse.', answer: 'Rund', translationFa: 'حدوداً ۷۰ درصد میوه و سبزی کافی نمی‌خورند.' },
      { id: '4', prompt: 'Die Deutschen essen ___ 26 Gramm Fisch pro Tag.', answer: 'durchschnittlich', translationFa: 'آلمانی‌ها به‌طور متوسط ۲۶ گرم ماهی در روز می‌خورند.' },
      { id: '5', prompt: 'Viele Menschen trinken nicht ___ Wasser.', answer: 'genug', translationFa: 'خیلی‌ها آب کافی نمی‌خورند.' },
      { id: '6', prompt: 'Ich esse ___ Fisch, vielleicht einmal im Monat.', answer: 'kaum', translationFa: 'من تقریباً هیچ ماهی نمی‌خورم، شاید یک بار در ماه.' },
    ],
  },

  // ── Exercise 4: Ernährung in Deutschland — multiple-choice ───────
  {
    id: 'a2-12-4-ernaehrung-deutschland',
    title: 'Ernährung in Deutschland',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'متن را بخوانید و درست یا غلط بودن جمله‌ها را تشخیص دهید.',
    instructionDe: 'Lesen Sie den Text und entscheiden Sie: richtig oder falsch.',
    explanationFa:
      'متن: «Viele Menschen in Deutschland essen gern Brot, Nudeln und andere Getreideprodukte. Obst und Gemüse sind gesund, aber viele essen davon zu wenig. Männer essen durchschnittlich mehr Fleisch als Frauen. Fisch essen viele Menschen nur selten. Wasser, Tee und Kaffee trinken die meisten Menschen oft. Limonade und Alkohol trinken viele Menschen weniger regelmäßig.»',
    items: [
      { id: '1', question: 'Viele Menschen essen gern Getreideprodukte.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'در متن آمده: essen gern Brot, Nudeln und andere Getreideprodukte — درست است.' },
      { id: '2', question: 'Alle essen genug Obst und Gemüse.', options: ['richtig', 'falsch'], correctIndex: 1, explanationFa: 'در متن آمده: viele essen davon zu wenig — پس غلط است.' },
      { id: '3', question: 'Männer essen durchschnittlich mehr Fleisch als Frauen.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'این مستقیماً در متن آمده — درست است.' },
      { id: '4', question: 'Fisch essen viele Menschen sehr oft.', options: ['richtig', 'falsch'], correctIndex: 1, explanationFa: 'در متن آمده: nur selten — پس غلط است.' },
      { id: '5', question: 'Wasser und Tee trinken viele Menschen oft.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'در متن آمده: trinken die meisten Menschen oft — درست است.' },
      { id: '6', question: 'Alle trinken jeden Tag Alkohol.', options: ['richtig', 'falsch'], correctIndex: 1, explanationFa: 'در متن آمده: weniger regelmäßig — پس غلط است.' },
    ],
  },

  // ── Exercise 5: wenn-Sätze: Verb am Ende — multiple-choice ───────
  {
    id: 'a2-12-5-wenn-saetze-verb-ende',
    title: 'wenn-Sätze: Verb am Ende',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'فعل درست را برای آخر جمله‌ی wenn انتخاب کنید.',
    instructionDe: 'Wählen Sie das richtige Verb am Ende des wenn-Satzes.',
    explanationFa: 'در جمله‌ی فرعی بعد از wenn فعل صرف‌شده همیشه آخر جمله می‌آید.',
    items: [
      { id: '1', question: 'Wenn es warm ___, essen wir Salat.', options: ['ist', 'es ist', 'sein'], correctIndex: 0, explanationFa: 'فعل ist باید تنها در آخر جمله بیاید.' },
      { id: '2', question: 'Wenn ich Zeit ___, backe ich einen Kuchen.', options: ['habe', 'ich habe', 'haben'], correctIndex: 0, explanationFa: 'فعل habe باید تنها در آخر جمله بیاید.' },
      { id: '3', question: 'Wenn Gäste ___, brate ich Fleisch.', options: ['kommen', 'Gäste kommen', 'kommt'], correctIndex: 0, explanationFa: 'فعل kommen با Gäste (جمع) مطابقت دارد و آخر جمله می‌آید.' },
      { id: '4', question: 'Wenn meine Tochter Geburtstag ___, darf sie das Essen aussuchen.', options: ['hat', 'sie hat', 'haben'], correctIndex: 0, explanationFa: 'فعل hat باید تنها در آخر جمله بیاید.' },
      { id: '5', question: 'Wenn es schnell gehen ___, holen wir Pizza.', options: ['muss', 'es muss', 'müssen'], correctIndex: 0, explanationFa: 'فعل muss باید تنها در آخر جمله بیاید.' },
    ],
  },

  // ── Exercise 6: wenn-Satz vorn oder hinten — fill-blank ──────────
  {
    id: 'a2-12-6-wenn-satz-vorn-hinten',
    title: 'wenn-Satz vorn oder hinten',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'جمله را با wenn در انتهای جمله بازنویسی کنید.',
    instructionDe: 'Formulieren Sie den Satz mit wenn am Ende.',
    explanationFa: 'مثال: Wenn es warm ist, essen wir Salat. → Wir essen Salat, wenn es warm ist.',
    items: [
      { id: '1', prompt: 'Wenn ich Zeit habe, backe ich einen Kuchen. →', answer: 'Ich backe einen Kuchen, wenn ich Zeit habe.', translationFa: 'وقتی وقت دارم، کیک می‌پزم.' },
      { id: '2', prompt: 'Wenn Gäste kommen, braten wir Fleisch oder Fisch. →', answer: 'Wir braten Fleisch oder Fisch, wenn Gäste kommen.', translationFa: 'وقتی مهمان می‌آید، گوشت یا ماهی سرخ می‌کنیم.' },
      { id: '3', prompt: 'Wenn es regnet, sehe ich mir einen Film an. →', answer: 'Ich sehe mir einen Film an, wenn es regnet.', translationFa: 'وقتی باران می‌آید، فیلم می‌بینم.' },
      { id: '4', prompt: 'Wenn der Kühlschrank leer ist, holen wir Pizza. →', answer: 'Wir holen Pizza, wenn der Kühlschrank leer ist.', translationFa: 'وقتی یخچال خالی است، پیتزا می‌گیریم.' },
      { id: '5', prompt: 'Wenn die Sonne scheint, machen wir eine Radtour. →', answer: 'Wir machen eine Radtour, wenn die Sonne scheint.', translationFa: 'وقتی آفتاب می‌تابد، دوچرخه‌سواری می‌کنیم.' },
    ],
  },

  // ── Exercise 7: wenn oder dass? — fill-blank ─────────────────────
  {
    id: 'a2-12-7-wenn-oder-dass',
    title: 'wenn oder dass?',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'جمله‌ها را با wenn یا dass کامل کنید.',
    instructionDe: 'Ergänzen Sie die Sätze mit wenn oder dass.',
    explanationFa: 'wenn = وقتی/اگر (شرط یا زمان)؛ dass = که (نظر یا احساس).',
    items: [
      { id: '1', prompt: 'Ich finde es komisch, ___ viele Menschen wenig Fisch essen.', answer: 'dass', translationFa: 'به نظرم عجیب است که خیلی‌ها کم ماهی می‌خورند.' },
      { id: '2', prompt: '___ es warm ist, essen wir meistens Salat.', answer: 'Wenn', translationFa: 'وقتی هوا گرم است، معمولاً سالاد می‌خوریم.' },
      { id: '3', prompt: 'Ich habe gedacht, ___ die Deutschen mehr Obst essen.', answer: 'dass', translationFa: 'فکر می‌کردم آلمانی‌ها میوه‌ی بیشتری می‌خورند.' },
      { id: '4', prompt: '___ Gäste kommen, kochen wir etwas Besonderes.', answer: 'Wenn', translationFa: 'وقتی مهمان می‌آید، یک چیز خاص می‌پزیم.' },
      { id: '5', prompt: 'Es überrascht mich, ___ viele Menschen zu wenig Wasser trinken.', answer: 'dass', translationFa: 'برایم تعجب‌آور است که خیلی‌ها آب کافی نمی‌خورند.' },
      { id: '6', prompt: 'Wir holen Pizza, ___ es schnell gehen muss.', answer: 'wenn', translationFa: 'پیتزا می‌گیریم، وقتی باید سریع باشد.' },
    ],
  },

  // ── Exercise 8: Überraschung ausdrücken — multiple-choice ───────
  {
    id: 'a2-12-8-ueberraschung-ausdruecken',
    title: 'Überraschung ausdrücken',
    type: 'multiple-choice',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'برای هر موقعیت، عبارت مناسب را انتخاب کنید.',
    instructionDe: 'Wählen Sie den passenden Ausdruck.',
    explanationFa: 'این عبارت‌ها برای بیان تعجب و واکنش احساسی به‌کار می‌روند.',
    items: [
      { id: '1', question: 'چیزی برخلاف انتظار توست.', options: ['Es überrascht mich, dass …', 'Ich schlafe gern.', 'Ich backe Kuchen.'], correctIndex: 0, explanationFa: 'Es überrascht mich, dass … یعنی برایم تعجب‌آور است که …' },
      { id: '2', question: 'چیزی از قبل برایت واضح بوده.', options: ['Es war mir klar, dass …', 'Ich habe Hunger.', 'Ich kaufe Fleisch.'], correctIndex: 0, explanationFa: 'Es war mir klar, dass … یعنی برایم روشن بود که …' },
      { id: '3', question: 'چیزی عجیب به نظر می‌رسد.', options: ['Ich finde es komisch, dass …', 'Ich trinke Wasser.', 'Das ist ein Messer.'], correctIndex: 0, explanationFa: 'Ich finde es komisch, dass … یعنی به نظرم عجیب است که …' },
      { id: '4', question: 'قبلاً فکر دیگری داشتی.', options: ['Ich habe gedacht, dass …', 'Ich gehe schwimmen.', 'Ich esse Salat.'], correctIndex: 0, explanationFa: 'Ich habe gedacht, dass … یعنی فکر می‌کردم که …' },
    ],
  },

  // ── Exercise 9: Überraschung mit dass-Sätzen — fill-blank ───────
  {
    id: 'a2-12-9-ueberraschung-mit-dass',
    title: 'Überraschung mit dass-Sätzen',
    type: 'fill-blank',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'با عبارت شروع‌شده، جمله‌ی کامل تعجب با dass بسازید.',
    instructionDe: 'Bilden Sie einen vollständigen Satz mit dass.',
    explanationFa: 'فعل صرف‌شده بعد از dass باید آخر جمله بیاید.',
    items: [
      { id: '1', prompt: 'Viele Menschen essen zu wenig Gemüse. → Es überrascht mich, dass ___', answer: 'viele Menschen zu wenig Gemüse essen', translationFa: 'برایم تعجب‌آور است که خیلی‌ها سبزی کمی می‌خورند.' },
      { id: '2', prompt: 'Die Deutschen essen oft Brot zum Frühstück. → Ich finde es komisch, dass ___', answer: 'die Deutschen oft Brot zum Frühstück essen', translationFa: 'به نظرم عجیب است که آلمانی‌ها اغلب صبحانه نان می‌خورند.' },
      { id: '3', prompt: 'Viele Menschen trinken zu wenig Wasser. → Ich habe nicht gedacht, dass ___', answer: 'viele Menschen zu wenig Wasser trinken', translationFa: 'فکر نمی‌کردم خیلی‌ها آب کمی بنوشند.' },
      { id: '4', prompt: 'Männer essen mehr Fleisch als Frauen. → Es war mir nicht klar, dass ___', answer: 'Männer mehr Fleisch als Frauen essen', translationFa: 'برایم روشن نبود که مردها گوشت بیشتری از زن‌ها می‌خورند.' },
      { id: '5', prompt: 'Fisch ist nicht sehr beliebt. → Es wundert mich, dass ___', answer: 'Fisch nicht sehr beliebt ist', translationFa: 'برایم عجیب است که ماهی خیلی محبوب نیست.' },
    ],
  },

  // ── Exercise 10: Essgewohnheiten vergleichen — fill-blank ───────
  {
    id: 'a2-12-10-essgewohnheiten-vergleichen',
    title: 'Essgewohnheiten vergleichen',
    type: 'fill-blank',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'جمله‌های مقایسه‌ای را با کلمات بانک کامل کنید — دسکتاپ: درگ‌ودراپ، موبایل: لمس کنید.',
    instructionDe: 'Ergänzen Sie die Vergleichssätze.',
    wordBank: ['Deutschland', 'Bei uns', 'anders', 'meiner Heimat', 'auch so'],
    explanationFa: 'این جمله‌ها برای مقایسه‌ی عادت‌های غذایی با کشور خود به‌کار می‌روند.',
    items: [
      { id: '1', prompt: 'In ___ essen viele Menschen Brot zum Frühstück.', answer: 'Deutschland', translationFa: 'در آلمان خیلی‌ها صبحانه نان می‌خورند.' },
      { id: '2', prompt: '___ essen wir oft warmes Essen am Abend.', answer: 'Bei uns', translationFa: 'پیش ما اغلب شب غذای گرم می‌خوریم.' },
      { id: '3', prompt: 'Bei uns ist das ___. Wir essen morgens oft Käse und Eier.', answer: 'anders', translationFa: 'پیش ما این فرق دارد. صبح‌ها اغلب پنیر و تخم‌مرغ می‌خوریم.' },
      { id: '4', prompt: 'In ___ trinken viele Menschen Tee.', answer: 'meiner Heimat', translationFa: 'در کشور من خیلی‌ها چای می‌خورند.' },
      { id: '5', prompt: 'Ja, das ist bei uns ___.', answer: 'auch so', translationFa: 'بله، پیش ما هم همین‌طور است.' },
    ],
  },

  // ── Exercise 11: Sätze mit wenn bilden — sentence-order ──────────
  {
    id: 'a2-12-11-saetze-mit-wenn-bilden',
    title: 'Sätze mit wenn bilden',
    type: 'sentence-order',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'کلمات را به ترتیب درست بکشید یا روی آن‌ها لمس کنید تا جمله‌ی wenn کامل بسازید.',
    instructionDe: 'Bilden Sie mit den Wörtern einen vollständigen wenn-Satz.',
    explanationFa: 'فعل صرف‌شده در جمله‌ی فرعی بعد از wenn آخر جمله می‌آید؛ فعل جمله‌ی اصلی بعد از کاما بلافاصله می‌آید.',
    items: [
      {
        id: '1',
        words: ['Gäste', 'kommen', 'wir', 'braten', 'Fleisch oder Fisch', 'wenn', ','],
        correctOrder: ['wenn', 'Gäste', 'kommen', ',', 'braten', 'wir', 'Fleisch oder Fisch'],
        translationFa: 'وقتی مهمان می‌آید، گوشت یا ماهی سرخ می‌کنیم.',
      },
      {
        id: '2',
        words: ['es', 'regnet', 'wir', 'bleiben', 'zu Hause', 'wenn', ','],
        correctOrder: ['wenn', 'es', 'regnet', ',', 'bleiben', 'wir', 'zu Hause'],
        translationFa: 'وقتی باران می‌آید، خانه می‌مانیم.',
      },
      {
        id: '3',
        words: ['ich', 'Geburtstag', 'habe', 'ich', 'backe', 'einen Kuchen', 'wenn', ','],
        correctOrder: ['wenn', 'ich', 'Geburtstag', 'habe', ',', 'backe', 'ich', 'einen Kuchen'],
        translationFa: 'وقتی تولدم است، کیک می‌پزم.',
      },
      {
        id: '4',
        words: ['es', 'schnell', 'gehen', 'muss', 'wir', 'holen', 'Pizza', 'wenn', ','],
        correctOrder: ['wenn', 'es', 'schnell', 'gehen', 'muss', ',', 'wir', 'holen', 'Pizza'],
        translationFa: 'وقتی باید سریع باشد، پیتزا می‌گیریم.',
      },
      {
        id: '5',
        words: ['der Kühlschrank', 'leer', 'ist', 'wir', 'gehen', 'einkaufen', 'wenn', ','],
        correctOrder: ['wenn', 'der Kühlschrank', 'leer', 'ist', ',', 'wir', 'gehen', 'einkaufen'],
        translationFa: 'وقتی یخچال خالی است، می‌رویم خرید می‌کنیم.',
      },
      {
        id: '6',
        words: ['die Sonne', 'scheint', 'wir', 'machen', 'eine Radtour', 'wenn', ','],
        correctOrder: ['wenn', 'die Sonne', 'scheint', ',', 'wir', 'machen', 'eine Radtour'],
        translationFa: 'وقتی آفتاب می‌تابد، دوچرخه‌سواری می‌کنیم.',
      },
    ],
  },

  // ── Exercise 12: Mein Lebensmittelkonsum — dialogue/writing ──────
  {
    id: 'a2-12-12-mein-lebensmittelkonsum',
    title: 'Mein Lebensmittelkonsum',
    type: 'dialogue',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'با استفاده از کلمات کمکی، درباره‌ی عادت‌های غذایی خودتان بنویسید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Beschreiben Sie Ihren Lebensmittelkonsum.',
    pattern: [
      'Brot und Getreideprodukte',
      'Obst',
      'Gemüse',
      'Milchprodukte',
      'Fleisch',
      'Fisch',
      'Wasser',
      'Tee',
      'Alkohol',
    ],
    explanationFa: 'برای این متن از کلمات oft, selten, genug, zu viel, zu wenig, nie استفاده کنید.',
    items: [
      {
        id: '1',
        promptFa: 'متن نمونه درباره‌ی عادت‌های غذایی شخصی',
        sampleAnswer:
          'Ich esse oft Brot und Getreideprodukte. Ich esse genug Obst, aber zu wenig Gemüse. Fleisch esse ich selten. Fisch esse ich fast nie. Ich trinke viel Wasser und Tee. Alkohol trinke ich nie.',
      },
    ],
  },

  // ── Exercise 13: Forum: Essgewohnheiten kommentieren — dialogue ─
  {
    id: 'a2-12-13-forum-essgewohnheiten',
    title: 'Forum: Essgewohnheiten kommentieren',
    type: 'dialogue',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'به این پست فروم درباره‌ی عادت‌های غذایی پاسخ دهید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Antworten Sie auf den Forumsbeitrag.',
    pattern: [
      'پست: Hallo Leute, ich habe eine Umfrage über Essgewohnheiten gelesen. Viele Menschen essen zu viel Fast Food und zu wenig Obst und Gemüse. Das überrascht mich. Wie ist das in eurem Land? Was esst ihr oft?',
      'Was hat Sie überrascht?',
      'Was ist in Ihrem Land ähnlich?',
      'Was ist anders?',
      'Was essen/trinken Sie oft oder selten?',
    ],
    explanationFa: 'در پاسخ خود حداقل یک جمله‌ی dass به‌کار ببرید.',
    items: [
      {
        id: '1',
        promptFa: 'پاسخ نمونه برای پست فروم',
        sampleAnswer:
          'Hallo, mich überrascht, dass viele Menschen zu wenig Obst und Gemüse essen. In meiner Heimat ist das ein bisschen anders. Viele Familien kochen oft zu Hause und essen viel Reis, Fleisch und Gemüse. Fast Food essen junge Leute aber auch gern. Ich persönlich esse oft Brot und Käse, aber ich trinke zu wenig Wasser. Ich denke, dass man mehr frisches Gemüse essen sollte.',
      },
    ],
  },

  // ── Exercise 14: Meinung zu Kochsendungen — multiple-choice ─────
  {
    id: 'a2-12-14-meinung-kochsendungen',
    title: 'Meinung zu Kochsendungen',
    type: 'multiple-choice',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'برای هر موقعیت، جمله‌ی مناسب را انتخاب کنید.',
    instructionDe: 'Wählen Sie den passenden Satz.',
    explanationFa: 'این جمله‌ها برای بیان نظر درباره‌ی برنامه‌های آشپزی به‌کار می‌روند.',
    items: [
      { id: '1', question: 'تو برنامه‌ی آشپزی دوست داری.', options: ['Mir gefallen Kochsendungen sehr gut.', 'Ich interessiere mich nicht für Kochen.', 'Das schmeckt zu salzig.'], correctIndex: 0, explanationFa: 'Mir gefallen Kochsendungen sehr gut یعنی برنامه‌های آشپزی را خیلی دوست دارم.' },
      { id: '2', question: 'تو آشپزی دوست نداری.', options: ['Ich interessiere mich nicht für Kochen.', 'Ich koche die Gerichte oft nach.', 'Das ist mein Lieblingsessen.'], correctIndex: 0, explanationFa: 'Ich interessiere mich nicht für Kochen یعنی به آشپزی علاقه ندارم.' },
      { id: '3', question: 'فکر می‌کنی برنامه‌های آشپزی زیاد شده.', options: ['Ich finde, dass es schon genug Kochsendungen gibt.', 'Wenn es regnet, bleibe ich zu Hause.', 'Ich esse Fisch.'], correctIndex: 0, explanationFa: 'این جمله یعنی فکر می‌کنم برنامه‌های آشپزی به‌اندازه‌ی کافی وجود دارد.' },
      { id: '4', question: 'تو دستور غذاها را امتحان می‌کنی.', options: ['Ich koche die Gerichte oft nach.', 'Ich sehe selten fern.', 'Das überrascht mich nicht.'], correctIndex: 0, explanationFa: 'Ich koche die Gerichte oft nach یعنی این غذاها را اغلب امتحان می‌کنم.' },
    ],
  },

  // ── Exercise 15: Perfekt: Essen und Alltag — fill-blank ──────────
  {
    id: 'a2-12-15-perfekt-essen-alltag',
    title: 'Perfekt: Essen und Alltag',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'Partizip II فعل را بنویسید.',
    instructionDe: 'Ergänzen Sie das Partizip II.',
    explanationFa: 'ansehen و aussuchen فعل‌های جداشدنی هستند و ge- بین پیشوند و ریشه‌ی فعل می‌آید.',
    items: [
      { id: '1', prompt: 'essen → hat ___', answer: 'gegessen', translationFa: 'خورده است' },
      { id: '2', prompt: 'trinken → hat ___', answer: 'getrunken', translationFa: 'نوشیده است' },
      { id: '3', prompt: 'braten → hat ___', answer: 'gebraten', translationFa: 'سرخ کرده است' },
      { id: '4', prompt: 'backen → hat ___', answer: 'gebacken', translationFa: 'پخته است (شیرینی/کیک)' },
      { id: '5', prompt: 'ansehen → hat ___', answer: 'angesehen', translationFa: 'تماشا کرده است' },
      { id: '6', prompt: 'aussuchen → hat ___', answer: 'ausgesucht', translationFa: 'انتخاب کرده است' },
      { id: '7', prompt: 'holen → hat ___', answer: 'geholt', translationFa: 'آورده است' },
      { id: '8', prompt: 'verbrauchen → hat ___', answer: 'verbraucht', translationFa: 'مصرف کرده است' },
      { id: '9', prompt: 'überraschen → hat ___', answer: 'überrascht', translationFa: 'متعجب کرده است' },
      { id: '10', prompt: 'sich vorbereiten → hat sich ___', answer: 'vorbereitet', translationFa: 'آماده کرده است' },
    ],
  },

  // ── Exercise 16: wenn-Sätze ordnen — sentence-order ──────────────
  {
    id: 'a2-12-16-wenn-saetze-ordnen',
    title: 'wenn-Sätze ordnen',
    type: 'sentence-order',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'کلمات را به ترتیب درست بکشید یا روی آن‌ها لمس کنید تا جمله‌ی کامل بسازید.',
    instructionDe: 'Bringen Sie die Wörter in die richtige Reihenfolge.',
    explanationFa: 'به جایگاه فعل در جمله‌ی wenn و جمله‌ی اصلی دقت کنید.',
    items: [
      {
        id: '1',
        words: ['warm', 'es', 'ist', 'wenn', 'essen', 'wir', 'Salat', ','],
        correctOrder: ['wenn', 'es', 'warm', 'ist', ',', 'essen', 'wir', 'Salat'],
        translationFa: 'وقتی هوا گرم است، سالاد می‌خوریم.',
      },
      {
        id: '2',
        words: ['Gäste', 'kommen', 'wenn', 'brate', 'ich', 'Fisch', ','],
        correctOrder: ['wenn', 'Gäste', 'kommen', ',', 'brate', 'ich', 'Fisch'],
        translationFa: 'وقتی مهمان می‌آید، ماهی سرخ می‌کنم.',
      },
      {
        id: '3',
        words: ['schnell', 'gehen', 'muss', 'wenn', 'gibt', 'es', 'Pizza', ','],
        correctOrder: ['wenn', 'es', 'schnell', 'gehen', 'muss', ',', 'gibt', 'es', 'Pizza'],
        translationFa: 'وقتی باید سریع باشد، پیتزا داریم.',
      },
      {
        id: '4',
        words: ['Geburtstag', 'ich', 'habe', 'wenn', 'suche', 'ich', 'das Essen', 'aus', ','],
        correctOrder: ['wenn', 'ich', 'Geburtstag', 'habe', ',', 'suche', 'ich', 'das Essen', 'aus'],
        translationFa: 'وقتی تولدم است، غذا را خودم انتخاب می‌کنم.',
      },
      {
        id: '5',
        words: ['der Kühlschrank', 'leer', 'ist', 'wenn', 'gehen', 'wir', 'einkaufen', ','],
        correctOrder: ['wenn', 'der Kühlschrank', 'leer', 'ist', ',', 'gehen', 'wir', 'einkaufen'],
        translationFa: 'وقتی یخچال خالی است، می‌رویم خرید می‌کنیم.',
      },
      {
        id: '6',
        words: ['regnet', 'es', 'wenn', 'sehe', 'ich', 'einen Film', 'an', ','],
        correctOrder: ['wenn', 'es', 'regnet', ',', 'sehe', 'ich', 'einen Film', 'an'],
        translationFa: 'وقتی باران می‌آید، فیلم می‌بینم.',
      },
    ],
  },

  // ── Exercise 17: wenn-Sätze korrigieren — multiple-choice ───────
  {
    id: 'a2-12-17-wenn-saetze-korrigieren',
    title: 'wenn-Sätze korrigieren',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'جمله‌ی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie den richtigen Satz.',
    explanationFa: 'فعل صرف‌شده در جمله‌ی فرعی بعد از wenn باید آخر جمله بیاید؛ در جمله‌ی اصلی بعد از کاما، فعل بلافاصله می‌آید.',
    items: [
      { id: '1', question: 'کدام جمله درست است؟', options: ['Wenn es ist warm, essen wir Salat.', 'Wenn es warm ist, essen wir Salat.'], correctIndex: 1, explanationFa: 'فعل ist باید آخر جمله‌ی فرعی بیاید.' },
      { id: '2', question: 'کدام جمله درست است؟', options: ['Wenn ich habe Zeit, backe ich Kuchen.', 'Wenn ich Zeit habe, backe ich Kuchen.'], correctIndex: 1, explanationFa: 'فعل habe باید آخر جمله‌ی فرعی بیاید.' },
      { id: '3', question: 'کدام جمله درست است؟', options: ['Wenn Gäste kommen, wir braten Fleisch.', 'Wenn Gäste kommen, braten wir Fleisch.'], correctIndex: 1, explanationFa: 'بعد از کاما فعل braten باید بلافاصله بیاید، قبل از فاعل wir.' },
      { id: '4', question: 'کدام جمله درست است؟', options: ['Wir holen Pizza, wenn muss es schnell gehen.', 'Wir holen Pizza, wenn es schnell gehen muss.'], correctIndex: 1, explanationFa: 'فعل muss باید آخر جمله‌ی فرعی بیاید.' },
      { id: '5', question: 'کدام جمله درست است؟', options: ['Wenn der Kühlschrank leer ist, wir gehen einkaufen.', 'Wenn der Kühlschrank leer ist, gehen wir einkaufen.'], correctIndex: 1, explanationFa: 'بعد از کاما فعل gehen باید بلافاصله بیاید.' },
      { id: '6', question: 'کدام جمله درست است؟', options: ['Ich esse Fisch, wenn ich habe Gäste.', 'Ich esse Fisch, wenn ich Gäste habe.'], correctIndex: 1, explanationFa: 'فعل habe باید آخر جمله‌ی فرعی بیاید.' },
    ],
  },

  // ── Exercise 18: unbetontes ge-/Ge- — multiple-choice ────────────
  {
    id: 'a2-12-18-unbetontes-ge',
    title: 'unbetontes ge-/Ge-',
    type: 'multiple-choice',
    skill: 'pronunciation',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'مشخص کنید این کلمه با ge-/Ge- شروع می‌شود یا نه.',
    instructionDe: 'Beginnt das Wort mit ge-/Ge-؟',
    explanationFa: 'پیشوند ge-/Ge- معمولاً بدون تأکید قوی تلفظ می‌شود.',
    items: [
      { id: '1', question: 'Gemüse', options: ['دارد', 'ندارد'], correctIndex: 0, explanationFa: 'Gemüse با Ge- شروع می‌شود.' },
      { id: '2', question: 'Mineralwasser', options: ['دارد', 'ندارد'], correctIndex: 1, explanationFa: 'Mineralwasser با Ge- شروع نمی‌شود.' },
      { id: '3', question: 'Getreide', options: ['دارد', 'ندارد'], correctIndex: 0, explanationFa: 'Getreide با Ge- شروع می‌شود.' },
      { id: '4', question: 'Fisch', options: ['دارد', 'ندارد'], correctIndex: 1, explanationFa: 'Fisch با Ge- شروع نمی‌شود.' },
      { id: '5', question: 'Gericht', options: ['دارد', 'ندارد'], correctIndex: 0, explanationFa: 'Gericht با Ge- شروع می‌شود.' },
      { id: '6', question: 'gesund', options: ['دارد', 'ندارد'], correctIndex: 0, explanationFa: 'gesund با ge- شروع می‌شود.' },
      { id: '7', question: 'Fleisch', options: ['دارد', 'ندارد'], correctIndex: 1, explanationFa: 'Fleisch با Ge- شروع نمی‌شود.' },
      { id: '8', question: 'genug', options: ['دارد', 'ندارد'], correctIndex: 0, explanationFa: 'genug با ge- شروع می‌شود.' },
      { id: '9', question: 'gekocht', options: ['دارد', 'ندارد'], correctIndex: 0, explanationFa: 'gekocht با ge- شروع می‌شود.' },
      { id: '10', question: 'Limonade', options: ['دارد', 'ندارد'], correctIndex: 1, explanationFa: 'Limonade با Ge- شروع نمی‌شود.' },
    ],
  },

  // ── Exercise 19: Mini-Test: Lektion 12 A2.1 — multiple-choice ───
  {
    id: 'a2-12-19-mini-test',
    title: 'Mini-Test: Lektion 12 A2.1',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'گزینه‌ی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie die richtige Antwort.',
    explanationFa: 'این تمرین جمع‌بندی واژگان، گرامر و Kommunikation درس ۱۲ است.',
    items: [
      { id: '1', question: '«غلات» به آلمانی:', options: ['das Getreide', 'die Wurst', 'das Mineralwasser'], correctIndex: 0, explanationFa: 'das Getreide یعنی غلات.' },
      { id: '2', question: '«به‌طور متوسط» به آلمانی:', options: ['durchschnittlich', 'scharf', 'vegetarisch'], correctIndex: 0, explanationFa: 'durchschnittlich یعنی به‌طور متوسط.' },
      { id: '3', question: 'Wenn es warm ___, essen wir Salat.', options: ['ist', 'es ist', 'sein'], correctIndex: 0, explanationFa: 'فعل ist باید آخر جمله‌ی فرعی بیاید.' },
      { id: '4', question: 'Wir holen Pizza, wenn es schnell gehen ___.', options: ['muss', 'es muss', 'müssen'], correctIndex: 0, explanationFa: 'فعل muss باید آخر جمله‌ی فرعی بیاید.' },
      { id: '5', question: '«برایم تعجب‌آور است که …»', options: ['Es überrascht mich, dass …', 'Ich esse Salat.', 'Wenn es regnet …'], correctIndex: 0, explanationFa: 'این جمله برای بیان تعجب به‌کار می‌رود.' },
      { id: '6', question: '«در کشور من این فرق دارد»', options: ['In meiner Heimat ist das anders.', 'Ich habe Hunger.', 'Ich trinke Kaffee.'], correctIndex: 0, explanationFa: 'این جمله برای مقایسه با کشور خود به‌کار می‌رود.' },
      { id: '7', question: '«دو برابر» به آلمانی:', options: ['doppelt', 'kaum', 'rund'], correctIndex: 0, explanationFa: 'doppelt یعنی دو برابر.' },
      { id: '8', question: 'Ich habe gedacht, dass die Deutschen mehr Fisch ___.', options: ['essen', 'isst', 'esse'], correctIndex: 0, explanationFa: 'فعل essen با die Deutschen (جمع) مطابقت دارد و آخر جمله می‌آید.' },
    ],
  },

  // ── Exercise 20: Essgewohnheiten vergleichen — final project ────
  {
    id: 'a2-12-20-essgewohnheiten-projekt',
    title: 'Essgewohnheiten vergleichen',
    type: 'dialogue',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 12,
    instructionFa: 'با استفاده از سؤال‌های راهنما، عادت‌های غذایی خود و کشورتان را با آلمان مقایسه کنید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Vergleichen Sie Ihre Essgewohnheiten mit Deutschland.',
    pattern: [
      'Was essen Sie oft?',
      'Was essen Sie selten?',
      'Trinken Sie genug Wasser?',
      'Was hat Sie an den Essgewohnheiten der Deutschen überrascht?',
      'Was ist in Ihrer Heimat ähnlich?',
      'Was ist anders?',
      'Was kochen oder essen Sie, wenn Gäste kommen?',
    ],
    explanationFa: 'برای این متن از حداقل یک جمله‌ی wenn و حداقل یک جمله‌ی dass استفاده کنید.',
    items: [
      {
        id: '1',
        promptFa: 'متن نمونه درباره‌ی مقایسه‌ی عادت‌های غذایی',
        sampleAnswer:
          'Ich esse oft Brot, Reis, Gemüse und Käse. Fleisch esse ich manchmal, aber Fisch esse ich selten. Ich trinke viel Tee, aber wahrscheinlich zu wenig Wasser. Es überrascht mich, dass viele Menschen in Deutschland oft Brot zum Frühstück essen. In meiner Heimat ist das anders. Wir essen morgens oft Käse, Eier, Brot und manchmal warmes Essen. Wenn Gäste kommen, kochen wir meistens Reis mit Fleisch oder Gemüse. Ich finde, dass Essgewohnheiten viel über eine Kultur zeigen.',
      },
    ],
  },
]
