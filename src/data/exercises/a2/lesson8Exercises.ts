import { Exercise } from '@/types/exercise'

/**
 * A2.1 — Lektion 8: Hoffentlich ist es nicht das Herz! (Krankheit, Unfall,
 * Notfall, Gefühle ausdrücken, Kausalsätze mit weil/deshalb/denn)
 * Independent exercises written for this site — not copied from any
 * coursebook/workbook layout or wording.
 */
export const lesson8Exercises: Exercise[] = [

  // ── Exercise 1: Körper und Schmerzen — multiple-choice ────────────
  {
    id: 'a2-8-1-koerper-schmerzen',
    title: 'Körper und Schmerzen',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'با توجه به معنی فارسی، کلمه‌ی آلمانی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie das richtige Wort.',
    explanationFa: 'این کلمات از مهم‌ترین واژگان بدن و درد هستند.',
    items: [
      { id: '1', question: 'قلب', options: ['das Herz', 'der Magen', 'das Blut'], correctIndex: 0, explanationFa: 'das Herz یعنی قلب.' },
      { id: '2', question: 'معده', options: ['der Magen', 'das Knie', 'die Operation'], correctIndex: 0, explanationFa: 'der Magen یعنی معده.' },
      { id: '3', question: 'خون', options: ['das Blut', 'die Sorge', 'die Wahrheit'], correctIndex: 0, explanationFa: 'das Blut یعنی خون.' },
      { id: '4', question: 'زانو', options: ['das Knie', 'der Notarzt', 'die Sprechstunde'], correctIndex: 0, explanationFa: 'das Knie یعنی زانو.' },
      { id: '5', question: 'سرماخوردگی داشتن', options: ['erkältet sein', 'bluten', 'vertrauen'], correctIndex: 0, explanationFa: 'erkältet sein یعنی سرماخورده بودن.' },
      { id: '6', question: 'درد داشتن', options: ['Schmerzen haben', 'eine Diät machen', 'Geld wechseln'], correctIndex: 0, explanationFa: 'Schmerzen haben یعنی درد داشتن.' },
    ],
  },

  // ── Exercise 2: Unfall und Notfall — multiple-choice ──────────────
  {
    id: 'a2-8-2-unfall-notfall',
    title: 'Unfall und Notfall',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'با توجه به معنی فارسی، کلمه‌ی آلمانی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie das richtige Wort.',
    explanationFa: 'این کلمات مربوط به حادثه و فوریت پزشکی هستند.',
    items: [
      { id: '1', question: 'آمبولانس', options: ['der Krankenwagen', 'die Untersuchung', 'der Verband'], correctIndex: 0, explanationFa: 'der Krankenwagen یعنی آمبولانس.' },
      { id: '2', question: 'پزشک اورژانس', options: ['der Notarzt', 'der Reiseführer', 'der Künstler'], correctIndex: 0, explanationFa: 'der Notarzt یعنی پزشک اورژانس.' },
      { id: '3', question: 'بخش اورژانس بیمارستان', options: ['die Notaufnahme', 'die Unterkunft', 'die Bühne'], correctIndex: 0, explanationFa: 'die Notaufnahme یعنی بخش اورژانس.' },
      { id: '4', question: 'حادثه', options: ['der Unfall', 'der Eintritt', 'der Vorschlag'], correctIndex: 0, explanationFa: 'der Unfall یعنی حادثه.' },
      { id: '5', question: 'آسیب / جراحت', options: ['die Verletzung', 'die Ermäßigung', 'die Veranstaltung'], correctIndex: 0, explanationFa: 'die Verletzung یعنی آسیب.' },
      { id: '6', question: 'پانسمان / باند', options: ['der Verband', 'die Diät', 'der Rundgang'], correctIndex: 0, explanationFa: 'der Verband یعنی پانسمان.' },
    ],
  },

  // ── Exercise 3: Nomen + Verb: Gesundheit und Unfall — fill-blank ──
  {
    id: 'a2-8-3-nomen-verb',
    title: 'Nomen + Verb: Gesundheit und Unfall',
    type: 'fill-blank',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'فعل مناسب را بنویسید یا از بانک کلمات بکشید — دسکتاپ: درگ‌ودراپ، موبایل: لمس کنید.',
    instructionDe: 'Ergänzen Sie das passende Verb.',
    wordBank: ['machen', 'bekommen', 'rufen', 'liegen', 'vertrauen', 'sagen', 'bluten'],
    explanationFa: 'این ترکیب‌های اسم و فعل خیلی پرکاربردند، آن‌ها را با هم حفظ کنید.',
    items: [
      { id: '1', prompt: 'eine Untersuchung ___', answer: 'machen', translationFa: 'معاینه شدن / انجام معاینه' },
      { id: '2', prompt: 'einen Verband ___', answer: 'bekommen', translationFa: 'پانسمان گرفتن' },
      { id: '3', prompt: 'den Notarzt ___', answer: 'rufen', translationFa: 'پزشک اورژانس را خبر کردن' },
      { id: '4', prompt: 'im Krankenhaus ___', answer: 'liegen', translationFa: 'در بیمارستان بستری بودن' },
      { id: '5', prompt: 'sich Sorgen ___', answer: 'machen', translationFa: 'نگران بودن' },
      { id: '6', prompt: 'dem Arzt ___', answer: 'vertrauen', translationFa: 'به پزشک اعتماد کردن' },
      { id: '7', prompt: 'die Wahrheit ___', answer: 'sagen', translationFa: 'حقیقت را گفتن' },
      { id: '8', prompt: 'stark ___', answer: 'bluten', translationFa: 'به‌شدت خون‌ریزی کردن' },
    ],
  },

  // ── Exercise 4: weil: فعل آخر جمله — multiple-choice ──────────────
  {
    id: 'a2-8-4-weil-fa',
    title: 'weil: فعل آخر جمله',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'جمله‌ی درست بعد از weil را انتخاب کنید.',
    instructionDe: 'Wählen Sie den richtigen Nebensatz mit weil.',
    explanationFa: 'در جمله‌ی فرعی بعد از weil فعل صرف‌شده همیشه به آخر جمله می‌رود.',
    items: [
      { id: '1', question: 'Ich gehe zum Arzt, weil ...', options: ['ich habe Fieber', 'ich Fieber habe'], correctIndex: 1, explanationFa: 'فعل haben باید آخر جمله بیاید: ich Fieber habe.' },
      { id: '2', question: 'Julia kann nicht trainieren, weil ...', options: ['ihr Knie weh tut', 'tut ihr Knie weh'], correctIndex: 0, explanationFa: 'فعل tut باید آخر جمله بیاید.' },
      { id: '3', question: 'Meine Mutter macht sich Sorgen, weil ...', options: ['ich krank bin', 'bin ich krank'], correctIndex: 0, explanationFa: 'فعل bin باید آخر جمله بیاید.' },
      { id: '4', question: 'Herr Klein liegt im Krankenhaus, weil ...', options: ['er hatte einen Unfall', 'er einen Unfall hatte'], correctIndex: 1, explanationFa: 'فعل hatte باید آخر جمله بیاید.' },
      { id: '5', question: 'Ich vertraue meinem Arzt, weil ...', options: ['er mir die Wahrheit sagt', 'er sagt mir die Wahrheit'], correctIndex: 0, explanationFa: 'فعل sagt باید آخر جمله بیاید.' },
    ],
  },

  // ── Exercise 5: deshalb: فعل در جایگاه دوم — multiple-choice ──────
  {
    id: 'a2-8-5-deshalb-fa',
    title: 'deshalb: فعل در جایگاه دوم',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'جمله‌ی درست بعد از deshalb را انتخاب کنید.',
    instructionDe: 'Wählen Sie den richtigen Hauptsatz mit deshalb.',
    explanationFa: 'بعد از deshalb فعل صرف‌شده در جایگاه دوم می‌آید، قبل از فاعل.',
    items: [
      { id: '1', question: 'Ich bin krank. Deshalb ...', options: ['ich bleibe zu Hause', 'bleibe ich zu Hause'], correctIndex: 1, explanationFa: 'فعل bleibe باید بلافاصله بعد از deshalb بیاید.' },
      { id: '2', question: 'Mein Knie tut weh. Deshalb ...', options: ['gehe ich zum Arzt', 'ich gehe zum Arzt'], correctIndex: 0, explanationFa: 'فعل gehe باید بلافاصله بعد از deshalb بیاید.' },
      { id: '3', question: 'Frau Wagner hat Fieber. Deshalb ...', options: ['kann sie nicht arbeiten', 'sie kann nicht arbeiten'], correctIndex: 0, explanationFa: 'فعل kann باید بلافاصله بعد از deshalb بیاید.' },
      { id: '4', question: 'Anna hatte einen Unfall. Deshalb ...', options: ['sie liegt im Krankenhaus', 'liegt sie im Krankenhaus'], correctIndex: 1, explanationFa: 'فعل liegt باید بلافاصله بعد از deshalb بیاید.' },
      { id: '5', question: 'Ich habe Angst vor Operationen. Deshalb ...', options: ['bin ich nervös', 'ich bin nervös'], correctIndex: 0, explanationFa: 'فعل bin باید بلافاصله بعد از deshalb بیاید.' },
    ],
  },

  // ── Exercise 6: weil oder deshalb? — fill-blank ───────────────────
  {
    id: 'a2-8-6-weil-oder-deshalb',
    title: 'weil oder deshalb?',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'جمله‌ها را با weil یا Deshalb کامل کنید — کلمه را بکشید یا روی آن لمس کنید.',
    instructionDe: 'Ergänzen Sie die Sätze mit weil oder Deshalb.',
    wordBank: ['weil', 'Deshalb'],
    explanationFa: 'weil دلیل را در جمله‌ی فرعی می‌آورد (فعل آخر)؛ deshalb نتیجه را در جمله‌ی اصلی می‌آورد (فعل جایگاه دوم).',
    items: [
      { id: '1', prompt: 'Ich kann heute nicht kommen, ___ ich Fieber habe.', answer: 'weil', translationFa: 'چون تب دارم نمی‌توانم بیایم.' },
      { id: '2', prompt: 'Ich habe Fieber. ___ kann ich heute nicht kommen.', answer: 'Deshalb', translationFa: 'تب دارم. به همین دلیل نمی‌توانم بیایم.' },
      { id: '3', prompt: 'Mein Vater macht sich Sorgen, ___ ich im Krankenhaus bin.', answer: 'weil', translationFa: 'پدرم نگران است، چون من در بیمارستانم.' },
      { id: '4', prompt: 'Ich bin im Krankenhaus. ___ macht mein Vater sich Sorgen.', answer: 'Deshalb', translationFa: 'من در بیمارستانم. به همین دلیل پدرم نگران است.' },
      { id: '5', prompt: 'Julia ist hingefallen, ___ ihr Knie blutet.', answer: 'weil', translationFa: 'جولیا افتاد، چون زانویش خون‌ریزی می‌کند.' },
      { id: '6', prompt: 'Julias Knie blutet. ___ fährt sie in die Notaufnahme.', answer: 'Deshalb', translationFa: 'زانوی جولیا خون‌ریزی می‌کند. به همین دلیل به بخش اورژانس می‌رود.' },
    ],
  },

  // ── Exercise 7: denn, weil und deshalb — sentence-order ───────────
  {
    id: 'a2-8-7-denn-weil-deshalb',
    title: 'denn, weil und deshalb',
    type: 'sentence-order',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'کلمات را به ترتیب درست بکشید یا روی آن‌ها لمس کنید تا جمله‌ی کامل بسازید.',
    instructionDe: 'Bilden Sie mit den Wörtern einen vollständigen Satz.',
    explanationFa: 'denn و deshalb فعل را جایگاه دوم نگه می‌دارند؛ weil فعل را آخر جمله می‌برد.',
    items: [
      {
        id: '1',
        words: ['bleibt', 'Anna', 'zu Hause', ',', 'denn', 'sie ist erkältet', '.'],
        correctOrder: ['Anna', 'bleibt', 'zu Hause', ',', 'denn', 'sie ist erkältet', '.'],
        translationFa: 'آنا در خانه می‌ماند، چون سرماخورده است.',
      },
      {
        id: '2',
        words: ['bleibt', 'Anna', 'zu Hause', ',', 'weil', 'sie erkältet ist', '.'],
        correctOrder: ['Anna', 'bleibt', 'zu Hause', ',', 'weil', 'sie erkältet ist', '.'],
        translationFa: 'آنا در خانه می‌ماند، چون سرماخورده است.',
      },
      {
        id: '3',
        words: ['ist', 'Sie', 'erkältet', '.', 'Deshalb', 'bleibt', 'Anna', 'zu Hause', '.'],
        correctOrder: ['Sie', 'ist', 'erkältet', '.', 'Deshalb', 'bleibt', 'Anna', 'zu Hause', '.'],
        translationFa: 'او سرماخورده است. به همین دلیل آنا در خانه می‌ماند.',
      },
      {
        id: '4',
        words: ['ruft', 'Tim', 'den Notarzt', ',', 'denn', 'sein Vater hat starke Schmerzen', '.'],
        correctOrder: ['Tim', 'ruft', 'den Notarzt', ',', 'denn', 'sein Vater hat starke Schmerzen', '.'],
        translationFa: 'تیم پزشک اورژانس را خبر می‌کند، چون پدرش درد شدید دارد.',
      },
    ],
  },

  // ── Exercise 8: Sorge, Mitleid und Hoffnung — multiple-choice ─────
  {
    id: 'a2-8-8-sorge-mitleid-hoffnung',
    title: 'Sorge, Mitleid und Hoffnung ausdrücken',
    type: 'multiple-choice',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'برای هر موقعیت جمله‌ی مناسب را انتخاب کنید.',
    instructionDe: 'Wählen Sie den passenden Satz.',
    explanationFa: 'این عبارت‌ها برای بیان نگرانی، همدردی و امیدواری به‌کار می‌روند.',
    items: [
      { id: '1', question: 'دوستت ناراحت به نظر می‌رسد. چه می‌گویی؟', options: ['Was ist los?', 'Ich habe Hunger.', 'Ich kaufe Brot.'], correctIndex: 0, explanationFa: 'Was ist los؟ یعنی چی شده؟' },
      { id: '2', question: 'کسی می‌گوید فردا باید عمل شود. چه می‌گویی؟', options: ['Oh, das tut mir wirklich leid.', 'Ich gehe einkaufen.', 'Das ist ein Theaterstück.'], correctIndex: 0, explanationFa: 'Das tut mir wirklich leid یعنی واقعاً متأسفم.' },
      { id: '3', question: 'کسی می‌گوید از بیمارستان می‌ترسد. چه می‌گویی؟', options: ['Ich hoffe, es ist alles in Ordnung.', 'Ich brauche einen Reiseführer.', 'Das kostet fünf Euro.'], correctIndex: 0, explanationFa: 'Ich hoffe, es ist alles in Ordnung یعنی امیدوارم همه چیز خوب باشد.' },
      { id: '4', question: 'کسی می‌گوید زانویش خیلی درد می‌کند. چه می‌گویی؟', options: ['Warst du schon beim Arzt?', 'Welche Reise buchst du?', 'Wo ist die Postkarte?'], correctIndex: 0, explanationFa: 'Warst du schon beim Arzt؟ یعنی پیش پزشک رفتی؟' },
    ],
  },

  // ── Exercise 9: Was ist los? — dialogue fill-blank ────────────────
  {
    id: 'a2-8-9-was-ist-los',
    title: 'Was ist los?',
    type: 'fill-blank',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'دیالوگ را با کلمات بانک کامل کنید — دسکتاپ: درگ‌ودراپ، موبایل: لمس کنید.',
    instructionDe: 'Ergänzen Sie den Dialog.',
    wordBank: ['Was ist los', 'tut mir leid', 'Hoffentlich', 'Angst', 'in Ordnung', 'Arzt'],
    explanationFa: 'این دیالوگ نگرانی و همدردی درباره‌ی بیماری را نشان می‌دهد.',
    items: [
      { id: '1', prompt: 'A: Du siehst so traurig aus. ___?', answer: 'Was ist los', translationFa: 'خیلی ناراحت به نظر می‌رسی. چی شده؟' },
      { id: '2', prompt: 'A: Oh, das ___.', answer: 'tut mir leid', translationFa: 'اوه، متأسفم.' },
      { id: '3', prompt: 'A: Warst du schon beim ___?', answer: 'Arzt', translationFa: 'پیش پزشک رفتی؟' },
      { id: '4', prompt: 'B: Ich habe ___ vor Untersuchungen.', answer: 'Angst', translationFa: 'من از معاینه می‌ترسم.' },
      { id: '5', prompt: 'A: ___ ist es nichts Schlimmes.', answer: 'Hoffentlich', translationFa: 'امیدوارم چیز بدی نباشد.' },
      { id: '6', prompt: 'A: Ich hoffe, bald ist alles wieder ___.', answer: 'in Ordnung', translationFa: 'امیدوارم زودی همه چیز خوب شود.' },
    ],
  },

  // ── Exercise 10: Eine Unfallgeschichte ordnen — sentence-order ───
  {
    id: 'a2-8-10-unfallgeschichte-ordnen',
    title: 'Eine Unfallgeschichte ordnen',
    type: 'sentence-order',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'جمله‌ها را به ترتیب درست داستان حادثه بکشید یا لمس کنید.',
    instructionDe: 'Bringen Sie die Sätze in die richtige Reihenfolge.',
    explanationFa: 'این داستان حادثه با فعل‌های Perfekt به ترتیب زمانی روایت می‌شود.',
    items: [
      {
        id: '1',
        words: ['In der Notaufnahme haben die Ärzte mein Knie untersucht.', 'Gestern Abend hatte ich einen Unfall.', 'Ein Mann hat den Notarzt gerufen.', 'Der Notarzt hat gesagt, dass ich ins Krankenhaus fahren muss.', 'Ich bin mit dem Fahrrad hingefallen.', 'Jetzt habe ich einen dicken Verband und kann kaum laufen.'],
        correctOrder: ['Gestern Abend hatte ich einen Unfall.', 'Ich bin mit dem Fahrrad hingefallen.', 'Ein Mann hat den Notarzt gerufen.', 'Der Notarzt hat gesagt, dass ich ins Krankenhaus fahren muss.', 'In der Notaufnahme haben die Ärzte mein Knie untersucht.', 'Jetzt habe ich einen dicken Verband und kann kaum laufen.'],
        translationFa: 'دیشب من حادثه‌ای داشتم. با دوچرخه افتادم. یک مرد پزشک اورژانس را خبر کرد. پزشک اورژانس گفت باید به بیمارستان بروم. در بخش اورژانس پزشکان زانوی من را معاینه کردند. الان یک پانسمان بزرگ دارم و به‌سختی می‌توانم راه بروم.',
      },
    ],
  },

  // ── Exercise 11: Eine Unfallgeschichte schreiben — writing project
  {
    id: 'a2-8-11-unfallgeschichte-schreiben',
    title: 'Eine Unfallgeschichte schreiben',
    type: 'dialogue',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'با کلمات داده‌شده یک داستان کوتاه درباره‌ی یک حادثه بنویسید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Schreiben Sie eine kurze Unfallgeschichte mit den gegebenen Wörtern.',
    pattern: ['Unfall', 'hinfallen', 'bluten', 'Notarzt', 'Krankenwagen', 'Notaufnahme', 'untersuchen', 'Verband'],
    explanationFa: 'برای این متن از Perfekt و حداقل پنج جمله استفاده کنید.',
    items: [
      {
        id: '1',
        promptFa: 'داستان حادثه‌ای هنگام دویدن',
        sampleAnswer:
          'Gestern hatte ich einen Unfall. Ich bin beim Joggen hingefallen und mein Knie hat stark geblutet. Eine Frau hat den Notarzt gerufen. Der Notarzt ist mit dem Krankenwagen gekommen. In der Notaufnahme haben die Ärzte mein Knie untersucht und verbunden. Jetzt habe ich einen Verband und muss mich ausruhen.',
      },
    ],
  },

  // ── Exercise 12: Forumtext: Ich mache mir Sorgen — reading ───────
  {
    id: 'a2-8-12-forumtext',
    title: 'Forumtext: Ich mache mir Sorgen',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'متن فروم را بخوانید و درست یا غلط بودن جمله‌ها را تشخیص دهید.',
    instructionDe: 'Lesen Sie den Forumtext und entscheiden Sie: richtig oder falsch.',
    explanationFa:
      'متن: «Hallo zusammen, seit einer Woche habe ich immer wieder ein komisches Druckgefühl im Bauch. Ich war schon beim Arzt. Die Untersuchung hat nur zehn Minuten gedauert. Der Arzt sagt, dass alles in Ordnung ist. Aber ich glaube ihm nicht, weil ich immer noch Schmerzen habe. Ich habe Angst, dass es etwas Schlimmes ist. Was soll ich machen؟ — Antwort: Ich kann dich gut verstehen. Aber vielleicht hörst du zu viel auf deinen Körper. Wenn der Arzt dich untersucht hat, solltest du ihm vertrauen. Wenn die Schmerzen schlimmer werden, kannst du natürlich noch einmal zum Arzt gehen.»',
    items: [
      { id: '1', question: 'Die Person hat seit einer Woche Beschwerden.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'در متن آمده: seit einer Woche habe ich … — درست است.' },
      { id: '2', question: 'Die Person war noch nicht beim Arzt.', options: ['richtig', 'falsch'], correctIndex: 1, explanationFa: 'در متن آمده: Ich war schon beim Arzt — پس غلط است.' },
      { id: '3', question: 'Der Arzt sagt, alles ist in Ordnung.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'در متن آمده: Der Arzt sagt, dass alles in Ordnung ist — درست است.' },
      { id: '4', question: 'Die Person vertraut dem Arzt sofort.', options: ['richtig', 'falsch'], correctIndex: 1, explanationFa: 'در متن آمده: ich glaube ihm nicht — پس غلط است.' },
      { id: '5', question: 'Die Antwort sagt: Man sollte dem Arzt vertrauen.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'در پاسخ آمده: solltest du ihm vertrauen — درست است.' },
      { id: '6', question: 'Wenn es schlimmer wird, kann man noch einmal zum Arzt gehen.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'در پاسخ آمده: kannst du noch einmal zum Arzt gehen — درست است.' },
    ],
  },

  // ── Exercise 13: Wer sagt das? Arzt oder Patient? — multiple-choice
  {
    id: 'a2-8-13-arzt-oder-patient',
    title: 'Wer sagt das? Arzt oder Patient?',
    type: 'multiple-choice',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'مشخص کنید این جمله را پزشک می‌گوید یا بیمار.',
    instructionDe: 'Wer sagt diesen Satz: Arzt/Ärztin oder Patient/Patientin?',
    explanationFa: 'جمله‌های پزشک معمولاً سؤال درباره‌ی علائم یا دستور درمانی هستند؛ جمله‌های بیمار توصیف درد یا نگرانی است.',
    items: [
      { id: '1', question: 'Was fehlt Ihnen?', options: ['Arzt/Ärztin', 'Patient/Patientin'], correctIndex: 0, explanationFa: 'این سؤال را پزشک می‌پرسد.' },
      { id: '2', question: 'Ich habe seit drei Tagen Bauchschmerzen.', options: ['Arzt/Ärztin', 'Patient/Patientin'], correctIndex: 1, explanationFa: 'این را بیمار توصیف می‌کند.' },
      { id: '3', question: 'Ich untersuche Sie jetzt.', options: ['Arzt/Ärztin', 'Patient/Patientin'], correctIndex: 0, explanationFa: 'این را پزشک می‌گوید.' },
      { id: '4', question: 'Haben Sie Fieber?', options: ['Arzt/Ärztin', 'Patient/Patientin'], correctIndex: 0, explanationFa: 'این سؤال را پزشک می‌پرسد.' },
      { id: '5', question: 'Ich habe Angst vor der Untersuchung.', options: ['Arzt/Ärztin', 'Patient/Patientin'], correctIndex: 1, explanationFa: 'این ترس را بیمار بیان می‌کند.' },
      { id: '6', question: 'Nehmen Sie diese Tabletten zweimal am Tag.', options: ['Arzt/Ärztin', 'Patient/Patientin'], correctIndex: 0, explanationFa: 'این دستور را پزشک می‌دهد.' },
      { id: '7', question: 'Muss ich ins Krankenhaus?', options: ['Arzt/Ärztin', 'Patient/Patientin'], correctIndex: 1, explanationFa: 'این سؤال را بیمار می‌پرسد.' },
      { id: '8', question: 'Hoffentlich ist es nichts Schlimmes.', options: ['Arzt/Ärztin', 'Patient/Patientin'], correctIndex: 1, explanationFa: 'این امیدواری را معمولاً بیمار بیان می‌کند.' },
    ],
  },

  // ── Exercise 14: Beim Arzt — dialogue builder ──────────────────────
  {
    id: 'a2-8-14-beim-arzt',
    title: 'Beim Arzt',
    type: 'dialogue',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'با اطلاعات داده‌شده یک دیالوگ بین Arzt و Patient بسازید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Bilden Sie mit den Informationen einen Dialog zwischen Arzt und Patient.',
    pattern: [
      'مشکل: Bauchschmerzen seit drei Tagen',
      'ترس: Angst vor Untersuchung',
      'پزشک: Untersuchung machen',
      'نتیجه: nicht schlimm',
      'توصیه: viel trinken, Tabletten nehmen',
    ],
    explanationFa: 'برای این دیالوگ از عبارت‌های Was fehlt Ihnen؟ و Ich untersuche Sie jetzt استفاده کنید.',
    items: [
      {
        id: '1',
        promptFa: 'دیالوگ کامل بین پزشک و بیمار',
        sampleAnswer:
          'Arzt: Guten Tag. Was fehlt Ihnen? Patient: Ich habe seit drei Tagen Bauchschmerzen. Arzt: Haben Sie auch Fieber? Patient: Nein, aber ich habe Angst vor der Untersuchung. Arzt: Keine Sorge. Ich untersuche Sie jetzt. Patient: Ist es etwas Schlimmes? Arzt: Nein, hoffentlich nicht. Sie sollten viel trinken und diese Tabletten nehmen. Patient: Danke, Herr Doktor.',
      },
    ],
  },

  // ── Exercise 15: Perfekt: Krankheit und Unfall — fill-blank ──────
  {
    id: 'a2-8-15-perfekt-krankheit',
    title: 'Perfekt: Krankheit und Unfall',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'Partizip II فعل را بنویسید.',
    instructionDe: 'Ergänzen Sie das Partizip II.',
    explanationFa: 'hinfallen، sterben و passieren با sein می‌آیند؛ بقیه‌ی این فعل‌ها معمولاً با haben می‌آیند.',
    items: [
      { id: '1', prompt: 'hinfallen → ist ___', answer: 'hingefallen', translationFa: 'افتاده است' },
      { id: '2', prompt: 'bluten → hat ___', answer: 'geblutet', translationFa: 'خون‌ریزی کرده است' },
      { id: '3', prompt: 'untersuchen → hat ___', answer: 'untersucht', translationFa: 'معاینه کرده است' },
      { id: '4', prompt: 'operieren → hat ___', answer: 'operiert', translationFa: 'عمل کرده است' },
      { id: '5', prompt: 'verbinden → hat ___', answer: 'verbunden', translationFa: 'پانسمان کرده است' },
      { id: '6', prompt: 'sterben → ist ___', answer: 'gestorben', translationFa: 'مرده است' },
      { id: '7', prompt: 'vertrauen → hat ___', answer: 'vertraut', translationFa: 'اعتماد کرده است' },
      { id: '8', prompt: 'sich verletzen → hat sich ___', answer: 'verletzt', translationFa: 'آسیب دیده است' },
      { id: '9', prompt: 'rufen → hat ___', answer: 'gerufen', translationFa: 'خبر کرده است' },
      { id: '10', prompt: 'passieren → ist ___', answer: 'passiert', translationFa: 'اتفاق افتاده است' },
    ],
  },

  // ── Exercise 16: Gefühle richtig betonen — multiple-choice ───────
  {
    id: 'a2-8-16-satzakzent',
    title: 'Gefühle richtig betonen',
    type: 'multiple-choice',
    skill: 'pronunciation',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'کلمه یا عبارتی را که باید با تأکید بیشتری گفته شود انتخاب کنید.',
    instructionDe: 'Welches Wort wird betont?',
    explanationFa: 'در جمله‌های احساسی، کلمه‌ی مهم‌تر را با تأکید بیشتری می‌گوییم.',
    items: [
      { id: '1', question: 'Was ist los?', options: ['Was', 'los'], correctIndex: 1, explanationFa: 'تأکید روی los است.' },
      { id: '2', question: 'Ich habe total Angst.', options: ['total Angst', 'ich'], correctIndex: 0, explanationFa: 'تأکید روی total Angst است.' },
      { id: '3', question: 'Oh, das tut mir echt leid.', options: ['echt leid', 'das'], correctIndex: 0, explanationFa: 'تأکید روی echt leid است.' },
      { id: '4', question: 'Hoffentlich hast du nichts Schlimmes.', options: ['Hoffentlich / nichts Schlimmes', 'du'], correctIndex: 0, explanationFa: 'تأکید روی Hoffentlich و nichts Schlimmes است.' },
      { id: '5', question: 'Geh doch zum Arzt.', options: ['zum Arzt', 'doch'], correctIndex: 0, explanationFa: 'تأکید روی zum Arzt است.' },
    ],
  },

  // ── Exercise 17: weil und deshalb korrigieren — fill-blank ───────
  {
    id: 'a2-8-17-fehler-korrigieren',
    title: 'weil und deshalb korrigieren',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'جمله‌ی اشتباه را اصلاح‌شده بنویسید.',
    instructionDe: 'Korrigieren Sie den Satz.',
    explanationFa: 'خطاهای رایج معمولاً مربوط به جایگاه فعل بعد از weil یا deshalb هستند.',
    items: [
      { id: '1', prompt: 'Ich gehe zum Arzt, weil ich habe Bauchschmerzen. →', answer: 'Ich gehe zum Arzt, weil ich Bauchschmerzen habe.', translationFa: 'فعل habe باید آخر جمله بیاید.' },
      { id: '2', prompt: 'Ich bin krank. Deshalb ich bleibe zu Hause. →', answer: 'Ich bin krank. Deshalb bleibe ich zu Hause.', translationFa: 'فعل bleibe باید بلافاصله بعد از deshalb بیاید.' },
      { id: '3', prompt: 'Er vertraut dem Arzt, weil der Arzt sagt ihm die Wahrheit. →', answer: 'Er vertraut dem Arzt, weil der Arzt ihm die Wahrheit sagt.', translationFa: 'فعل sagt باید آخر جمله بیاید.' },
      { id: '4', prompt: 'Mein Knie blutet. Weil ich fahre in die Notaufnahme. →', answer: 'Mein Knie blutet. Deshalb fahre ich in die Notaufnahme.', translationFa: 'برای نتیجه باید deshalb به‌کار رود، نه weil.' },
      { id: '5', prompt: 'Sie kann nicht arbeiten, weil sie hat Fieber. →', answer: 'Sie kann nicht arbeiten, weil sie Fieber hat.', translationFa: 'فعل hat باید آخر جمله بیاید.' },
    ],
  },

  // ── Exercise 18: Sätze mit weil und deshalb ordnen — sentence-order
  {
    id: 'a2-8-18-saetze-ordnen',
    title: 'Sätze mit weil und deshalb ordnen',
    type: 'sentence-order',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'کلمات را به ترتیب درست بکشید یا روی آن‌ها لمس کنید تا جمله‌ی کامل بسازید.',
    instructionDe: 'Bilden Sie mit den Wörtern einen vollständigen Satz.',
    explanationFa: 'بعد از weil فعل آخر می‌رود؛ بعد از deshalb فعل بلافاصله بعد از آن می‌آید.',
    items: [
      {
        id: '1',
        words: ['zum Arzt', 'ich', 'gehe', 'weil', 'Bauchschmerzen', 'habe', 'ich', ','],
        correctOrder: ['ich', 'gehe', 'zum Arzt', ',', 'weil', 'ich', 'Bauchschmerzen', 'habe'],
        translationFa: 'من به پزشک می‌روم، چون دل‌درد دارم.',
      },
      {
        id: '2',
        words: ['krank', 'ich', 'bin', '.', 'deshalb', 'bleibe', 'zu Hause', 'ich'],
        correctOrder: ['ich', 'bin', 'krank', '.', 'deshalb', 'bleibe', 'ich', 'zu Hause'],
        translationFa: 'من بیمارم. به همین دلیل در خانه می‌مانم.',
      },
      {
        id: '3',
        words: ['Sorgen', 'meine Mutter', 'macht sich', 'weil', 'ich', 'im Krankenhaus', 'bin', ','],
        correctOrder: ['meine Mutter', 'macht sich', 'Sorgen', ',', 'weil', 'ich', 'im Krankenhaus', 'bin'],
        translationFa: 'مادرم نگران است، چون من در بیمارستانم.',
      },
      {
        id: '4',
        words: ['hoffentlich', 'nichts Schlimmes', 'du', 'hast'],
        correctOrder: ['hoffentlich', 'hast', 'du', 'nichts Schlimmes'],
        translationFa: 'امیدوارم چیز بدی نداشته باشی.',
      },
    ],
  },

  // ── Exercise 19: Mini-Test: Lektion 8 A2.1 — multiple-choice ──────
  {
    id: 'a2-8-19-mini-test',
    title: 'Mini-Test: Lektion 8 A2.1',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'گزینه‌ی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie die richtige Antwort.',
    explanationFa: 'این تمرین جمع‌بندی واژگان، گرامر و Kommunikation درس ۸ است.',
    items: [
      { id: '1', question: '«اورژانس / فوریت» به آلمانی:', options: ['der Notfall', 'der Eintritt', 'der Vorschlag'], correctIndex: 0, explanationFa: 'der Notfall یعنی فوریت.' },
      { id: '2', question: '«آمبولانس» به آلمانی:', options: ['der Krankenwagen', 'die Postkarte', 'der Rundgang'], correctIndex: 0, explanationFa: 'der Krankenwagen یعنی آمبولانس.' },
      { id: '3', question: 'Ich gehe zum Arzt, weil ich Schmerzen ___.', options: ['habe', 'haben', 'hat'], correctIndex: 0, explanationFa: 'برای ich فرم درست habe است.' },
      { id: '4', question: 'Ich habe Schmerzen. Deshalb ___ ich zum Arzt.', options: ['gehe', 'ich gehe', 'gehen'], correctIndex: 0, explanationFa: 'فعل gehe باید بلافاصله بعد از deshalb بیاید.' },
      { id: '5', question: '«من نگرانم» به آلمانی:', options: ['Ich mache mir Sorgen.', 'Ich mache Sport.', 'Ich mache einen Rundgang.'], correctIndex: 0, explanationFa: 'Ich mache mir Sorgen یعنی من نگرانم.' },
      { id: '6', question: '«واقعاً متأسفم» به آلمانی:', options: ['Das tut mir wirklich leid.', 'Das ist geöffnet.', 'Das passt gut.'], correctIndex: 0, explanationFa: 'Das tut mir wirklich leid یعنی واقعاً متأسفم.' },
      { id: '7', question: 'hinfallen در Perfekt:', options: ['ist hingefallen', 'hat hingefallen', 'ist gefallen hin'], correctIndex: 0, explanationFa: 'hinfallen با sein می‌آید: ist hingefallen.' },
      { id: '8', question: 'Der Arzt hat mein Knie ___.', options: ['untersucht', 'vertraut', 'gestorben'], correctIndex: 0, explanationFa: 'untersuchen یعنی معاینه کردن.' },
    ],
  },

  // ── Exercise 20: Eine Krankheit oder einen Unfall erzählen ───────
  {
    id: 'a2-8-20-projekt-erzaehlen',
    title: 'Eine Krankheit oder einen Unfall erzählen',
    type: 'dialogue',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 8,
    instructionFa: 'با استفاده از سؤال‌های راهنما، درباره‌ی یک بیماری یا حادثه یک متن A2 بنویسید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Erzählen Sie mit Hilfe der Leitfragen von einer Krankheit oder einem Unfall.',
    pattern: [
      'Was ist passiert?',
      'Wann ist es passiert?',
      'Was hat wehgetan?',
      'Haben Sie einen Arzt / Notarzt gerufen?',
      'Waren Sie im Krankenhaus oder in der Notaufnahme?',
      'Was haben die Ärzte gemacht?',
      'Wie geht es Ihnen jetzt?',
    ],
    explanationFa: 'برای این متن از Perfekt، حداقل ۵ جمله و ترتیب منطقی اتفاقات استفاده کنید.',
    items: [
      {
        id: '1',
        promptFa: 'متن نمونه درباره‌ی یک حادثه دوچرخه‌سواری',
        sampleAnswer:
          'Letzte Woche hatte ich einen kleinen Unfall. Ich bin beim Fahrradfahren hingefallen. Mein Knie hat stark geblutet und mein Fuß hat wehgetan. Eine Frau hat mir geholfen und den Notarzt gerufen. In der Notaufnahme haben die Ärzte mein Knie untersucht und verbunden. Zum Glück war es nicht so schlimm. Jetzt habe ich noch einen Verband, aber es geht mir schon besser.',
      },
    ],
  },
]
