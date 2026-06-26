import { LessonNotes } from '@/types/lessonNotes'

/**
 * A2.1 — Lektion 7: Wir könnten montags joggen gehen (Gesundheit, Sport,
 * Konjunktiv II von können/sollen für Vorschläge und Ratschläge)
 * Structured from the lesson-notes source markdown. Independent educational
 * content — not a copy of any coursebook layout.
 */
export const lesson7Notes: LessonNotes = {
  lessonId: 7,
  topic: 'Sport und Fitness',
  titleFa: 'سلامتی، ورزش، پیشنهاد دادن و نصیحت با Konjunktiv II',

  summary: {
    introFa:
      'در این درس درباره‌ی سلامتی، ورزش و تناسب اندام صحبت می‌کنیم. یاد می‌گیریم چطور با Konjunktiv II از können و sollen پیشنهاد بدهیم و نصیحت کنیم: du könntest … (می‌توانی) و du solltest … (بهتر است). همچنین قیدهای زمانی مثل morgens، montags و ساختار zwischen … und … را یاد می‌گیریم و یک برنامه‌ی فیتنس را می‌خوانیم.',
    goals: [
      'واژگان سلامتی و فیتنس مثل Gesundheit, Gewicht, Training, abnehmen را به‌کار ببرد.',
      'نام ورزش‌ها مثل Joggen, Yoga, Aqua-Fitness, Handball را بشناسد.',
      'با könnte/könntest/könnten پیشنهاد نرم بدهد.',
      'با sollte/solltest/sollten نصیحت جدی‌تر بدهد.',
      'فرق بین könntest (پیشنهاد) و solltest (نصیحت) را تشخیص دهد.',
      'با An deiner Stelle würde ich … و Wie wäre es mit …؟ نصیحت بدهد.',
      'قیدهای زمانی morgens, abends, montags, freitags را درست استفاده کند.',
      'با zwischen … und … یک بازه‌ی زمانی بیان کند.',
      'یک برنامه‌ی فیتنس ساده را بخواند و بفهمد.',
      'به یک پیام فروم با پیشنهاد و نصیحت پاسخ بدهد.',
    ],
  },

  keySentences: [
    {
      titleFa: 'پیشنهاد نرم با könnte',
      sentences: [
        { de: 'Du könntest joggen gehen.', fa: 'می‌توانی بروی بدوی.' },
        { de: 'Wir könnten montags joggen gehen.', fa: 'می‌توانیم دوشنبه‌ها برویم بدویم.' },
        { de: 'Sie könnten im Verein trainieren.', fa: 'شما می‌توانید در باشگاه تمرین کنید.' },
      ],
    },
    {
      titleFa: 'نصیحت با sollte',
      sentences: [
        { de: 'Du solltest mehr schlafen.', fa: 'بهتر است بیشتر بخوابی.' },
        { de: 'Sie sollten auf Ihre Ernährung achten.', fa: 'بهتر است به تغذیه‌تان توجه کنید.' },
        { de: 'Wir sollten mehr Wasser trinken.', fa: 'بهتر است آب بیشتری بنوشیم.' },
      ],
    },
    {
      titleFa: 'پیشنهادهای دیگر',
      sentences: [
        { de: 'An deiner Stelle würde ich weniger Kaffee trinken.', fa: 'اگر جای تو بودم، کمتر قهوه می‌خوردم.' },
        { de: 'Wie wäre es mit einer Laufgruppe?', fa: 'نظرت درباره‌ی یک گروه دوندگی چیه؟' },
        { de: 'Mach doch morgens zehn Minuten Gymnastik.', fa: 'صبح‌ها ده دقیقه نرمش کن.' },
      ],
    },
  ],

  grammar: [
    {
      id: 'konjunktiv-koennen',
      titleDe: 'Konjunktiv II: können',
      titleFa: 'صرف können در Konjunktiv II برای پیشنهاد',
      explanationFa: 'برای پیشنهاد مودبانه یا نرم از könnte/könntest/könnten استفاده می‌کنیم.',
      table: {
        headers: ['Person', 'können (Konjunktiv II)'],
        rows: [
          ['ich', 'könnte'],
          ['du', 'könntest'],
          ['er/sie/es', 'könnte'],
          ['wir', 'könnten'],
          ['ihr', 'könntet'],
          ['sie/Sie', 'könnten'],
        ],
      },
      examples: [
        { de: 'Ich könnte mehr Sport machen.', fa: 'می‌توانم ورزش بیشتری بکنم.' },
        { de: 'Du könntest mit einer Laufgruppe trainieren.', fa: 'می‌توانی با یک گروه دوندگی تمرین کنی.' },
        { de: 'Wir könnten montags joggen gehen.', fa: 'می‌توانیم دوشنبه‌ها برویم بدویم.' },
      ],
      note: 'könnte یک پیشنهاد نرم و غیرقطعی است — یعنی «می‌توانی، اگر بخواهی»، نه دستور یا الزام.',
    },
    {
      id: 'konjunktiv-sollen',
      titleDe: 'Konjunktiv II: sollen',
      titleFa: 'صرف sollen در Konjunktiv II برای نصیحت',
      explanationFa: 'sollte/solltest/sollten برای توصیه و نصیحت استفاده می‌شود — نرم‌تر از müssen اما جدی‌تر از könnte.',
      table: {
        headers: ['Person', 'sollen (Konjunktiv II)'],
        rows: [
          ['ich', 'sollte'],
          ['du', 'solltest'],
          ['er/sie/es', 'sollte'],
          ['wir', 'sollten'],
          ['ihr', 'solltet'],
          ['sie/Sie', 'sollten'],
        ],
      },
      examples: [
        { de: 'Ich sollte weniger Kaffee trinken.', fa: 'بهتر است کمتر قهوه بنوشم.' },
        { de: 'Du solltest regelmäßig Sport machen.', fa: 'بهتر است به‌طور منظم ورزش کنی.' },
        { de: 'Sie sollten auf Ihre Gesundheit achten.', fa: 'بهتر است به سلامتی‌تان توجه کنید.' },
      ],
      note: 'sollten برای نصیحت و توصیه است و از müssen نرم‌تر است — حالت اجباری ندارد.',
    },
    {
      id: 'koenntest-oder-solltest',
      titleDe: 'könntest oder solltest?',
      titleFa: 'فرق بین پیشنهاد نرم و نصیحت جدی‌تر',
      explanationFa: 'könntest بیشتر یک پیشنهاد است (یک گزینه‌ی ممکن)؛ solltest نصیحت جدی‌تری است، معمولاً برای موضوعاتی مثل سلامتی که اهمیت بیشتری دارند.',
      examples: [
        { de: 'Mein Rücken tut weh. Du solltest zum Arzt gehen.', fa: 'کمرم درد می‌کند. بهتر است پیش دکتر بروی. — نصیحت جدی' },
        { de: 'Ich möchte draußen trainieren. Du könntest joggen gehen.', fa: 'می‌خواهم بیرون تمرین کنم. می‌توانی بروی بدوی. — پیشنهاد' },
      ],
      note: 'وقتی موضوع مهم‌تر یا فوری‌تر است (مثل درد یا بی‌خوابی) از solltest استفاده می‌کنیم؛ برای پیشنهادهای عادی از könntest.',
    },
    {
      id: 'zwischen-und',
      titleDe: 'zwischen … und …',
      titleFa: 'بیان بازه‌ی زمانی با zwischen … und …',
      explanationFa: 'برای گفتن «بین ساعت … و …» از zwischen … und … استفاده می‌کنیم.',
      examples: [
        { de: 'Ich stehe zwischen sechs und halb sieben auf.', fa: 'بین ساعت شش و شش‌ونیم بیدار می‌شوم.' },
        { de: 'Wir trainieren zwischen 18.00 und 19.00 Uhr.', fa: 'بین ساعت ۱۸ و ۱۹ تمرین می‌کنیم.' },
        { de: 'Der Kurs beginnt zwischen halb neun und neun Uhr.', fa: 'کلاس بین ساعت هشت‌ونیم و نه شروع می‌شود.' },
      ],
      note: 'قیدهای زمانی با -s مثل morgens, abends, montags یعنی «همیشه / معمولاً در آن زمان» — برای عادت‌های تکراری به‌کار می‌روند.',
    },
  ],

  vocabulary: [
    {
      id: 'gesundheit-fitness',
      titleFa: 'سلامتی و تناسب اندام',
      items: [
        { de: 'die Gesundheit', fa: 'سلامتی' },
        { de: 'das Gewicht', fa: 'وزن' },
        { de: 'das Training', fa: 'تمرین' },
        { de: 'die Diät', fa: 'رژیم غذایی' },
        { de: 'abnehmen', fa: 'لاغر شدن' },
        { de: 'wiegen', fa: 'وزن داشتن' },
        { de: 'trainieren', fa: 'تمرین کردن' },
        { de: 'sich ausruhen', fa: 'استراحت کردن' },
        { de: 'regelmäßig', fa: 'منظم' },
        { de: 'selten', fa: 'به‌ندرت' },
        { de: 'frische Luft', fa: 'هوای تازه' },
      ],
    },
    {
      id: 'sportarten',
      titleFa: 'ورزش‌ها',
      items: [
        { de: 'das Joggen', fa: 'دویدن' },
        { de: 'das Yoga', fa: 'یوگا' },
        { de: 'die Aqua-Fitness', fa: 'فیتنس در آب' },
        { de: 'der Handball', fa: 'هندبال' },
        { de: 'das Judo', fa: 'جودو' },
        { de: 'das Rudern', fa: 'قایقرانی' },
        { de: 'die Gymnastik', fa: 'نرمش' },
        { de: 'das Gewichtheben', fa: 'وزنه‌برداری' },
        { de: 'der Mannschaftssport', fa: 'ورزش گروهی' },
      ],
    },
    {
      id: 'zeitangaben',
      titleFa: 'قیدهای زمانی',
      items: [
        { de: 'morgens', fa: 'صبح‌ها' },
        { de: 'vormittags', fa: 'قبل از ظهرها' },
        { de: 'mittags', fa: 'ظهرها' },
        { de: 'nachmittags', fa: 'بعدازظهرها' },
        { de: 'abends', fa: 'عصرها / شب‌ها' },
        { de: 'nachts', fa: 'شب‌ها (نیمه‌شب)' },
        { de: 'montags', fa: 'دوشنبه‌ها' },
        { de: 'freitags', fa: 'جمعه‌ها' },
      ],
    },
  ],

  redemittel: [
    {
      titleFa: 'پیشنهاد دادن',
      phrases: [
        { de: 'Du könntest …', fa: 'می‌توانی …' },
        { de: 'Wie wäre es mit …?', fa: 'نظرت درباره‌ی … چیه؟' },
        { de: 'Mach doch …', fa: '… بکن (پیشنهاد دوستانه)' },
      ],
    },
    {
      titleFa: 'نصیحت کردن',
      phrases: [
        { de: 'Du solltest …', fa: 'بهتر است …' },
        { de: 'An deiner Stelle würde ich …', fa: 'اگر جای تو بودم …' },
      ],
    },
    {
      titleFa: 'درخواست راهنمایی',
      phrases: [
        { de: 'Was würdest du mir empfehlen?', fa: 'تو چه چیزی به من پیشنهاد می‌کنی؟' },
        { de: 'Hast du einen Tipp für mich?', fa: 'برای من یک پیشنهاد داری؟' },
        { de: 'Was passt zu mir?', fa: 'چه چیزی به من می‌خورد / مناسب من است؟' },
      ],
    },
  ],

  dialogues: [
    {
      id: 'dialog-sport-vorschlagen',
      titleFa: 'مکالمه پیشنهاد ورزش',
      lines: [
        { speaker: 'A', de: 'Ich möchte wieder mehr Sport machen, aber allein macht es keinen Spaß.', fa: 'می‌خواهم دوباره ورزش بیشتری بکنم، اما تنهایی لذتی ندارد.' },
        { speaker: 'B', de: 'Du könntest mit einer Laufgruppe joggen gehen.', fa: 'می‌توانی با یک گروه دوندگی بروی بدوی.' },
        { speaker: 'A', de: 'Gute Idee. Wann trainieren sie?', fa: 'ایده‌ی خوبی است. کی تمرین می‌کنند؟' },
        { speaker: 'B', de: 'Montags und mittwochs um 19 Uhr.', fa: 'دوشنبه‌ها و چهارشنبه‌ها ساعت ۱۹.' },
        { speaker: 'A', de: 'Das passt gut. Kommst du mit?', fa: 'این خوب جور می‌شود. تو هم می‌آیی؟' },
        { speaker: 'B', de: 'Ja, wir könnten zusammen hingehen.', fa: 'بله، می‌توانیم با هم برویم.' },
      ],
    },
    {
      id: 'dialog-abnehmen-rat',
      titleFa: 'مکالمه نصیحت برای لاغر شدن',
      lines: [
        { speaker: 'A', de: 'Ich möchte fünf Kilo abnehmen. Hast du einen Tipp für mich?', fa: 'می‌خواهم پنج کیلو لاغر شوم. برای من یک پیشنهاد داری؟' },
        { speaker: 'B', de: 'Du solltest regelmäßig Sport machen und abends keine Nudeln mehr essen.', fa: 'بهتر است به‌طور منظم ورزش کنی و شب‌ها دیگر پاستا نخوری.' },
        { speaker: 'A', de: 'Joggen allein finde ich langweilig.', fa: 'دویدن تنها را خسته‌کننده می‌دانم.' },
        { speaker: 'B', de: 'Dann könntest du Aqua-Fitness machen oder in einer Gruppe laufen.', fa: 'پس می‌توانی فیتنس در آب بروی یا گروهی بدوی.' },
        { speaker: 'A', de: 'Das klingt gut.', fa: 'به نظر خوب می‌رسد.' },
        { speaker: 'B', de: 'Und vergiss nicht: Du solltest auch auf deine Ernährung achten.', fa: 'و فراموش نکن: بهتر است به تغذیه‌ات هم توجه کنی.' },
      ],
    },
    {
      id: 'dialog-schlafprobleme',
      titleFa: 'مکالمه مشکل خواب',
      lines: [
        { speaker: 'A', de: 'Ich bin abends oft nervös und kann nachts nicht gut schlafen.', fa: 'شب‌ها اغلب عصبی هستم و شب‌ها خوب نمی‌خوابم.' },
        { speaker: 'B', de: 'An deiner Stelle würde ich abends keinen Kaffee trinken.', fa: 'اگر جای تو بودم، شب‌ها قهوه نمی‌خوردم.' },
        { speaker: 'A', de: 'Ja, vielleicht hast du recht.', fa: 'بله، شاید حق با تو باشد.' },
        { speaker: 'B', de: 'Du könntest auch Yoga machen oder spazieren gehen.', fa: 'می‌توانی یوگا هم بکنی یا پیاده‌روی کنی.' },
        { speaker: 'A', de: 'Wie oft sollte ich das machen?', fa: 'چند بار باید این کار را بکنم؟' },
        { speaker: 'B', de: 'Vielleicht dreimal pro Woche.', fa: 'شاید سه بار در هفته.' },
      ],
    },
  ],

  sampleStory: {
    de: 'Fitnessplan für Sara. Montag: morgens Yoga, abends Spaziergang. Dienstag: nachmittags Joggen im Park. Mittwoch: abends Fitnessstudio. Donnerstag: Pause. Freitag: morgens Aqua-Fitness. Samstag: vormittags Fahrrad fahren. Sonntag: ausruhen.',
    fa: 'برنامه‌ی فیتنس سارا. دوشنبه: صبح یوگا، عصر پیاده‌روی. سه‌شنبه: بعدازظهر دویدن در پارک. چهارشنبه: عصر باشگاه ورزشی. پنج‌شنبه: استراحت. جمعه: صبح فیتنس در آب. شنبه: قبل از ظهر دوچرخه‌سواری. یکشنبه: استراحت.',
  },

  summaryClosingFa:
    'درس ۷ A2.1 درباره‌ی سلامتی، ورزش و تناسب اندام است. در این درس یاد گرفتیم با könnte پیشنهاد نرم بدهیم و با sollte نصیحت کنیم، و فرق بین این دو را تشخیص دهیم. همچنین یاد گرفتیم با قیدهای زمانی مثل morgens و montags و ساختار zwischen … und … زمان‌بندی را بیان کنیم و یک برنامه‌ی فیتنس را بخوانیم. این درس برای A2 خیلی مهم است، چون زبان‌آموز یاد می‌گیرد با لطافت به دیگران پیشنهاد بدهد و نصیحت کند، بدون اینکه لحن دستوری داشته باشد.',
  summaryTopics: [
    'واژگان سلامتی و ورزش',
    'Konjunktiv II: können',
    'Konjunktiv II: sollen',
    'könntest oder solltest؟',
    'An deiner Stelle würde ich …',
    'Wie wäre es mit …؟',
    'قیدهای زمانی morgens / montags',
    'zwischen … und …',
    'خواندن یک Fitnessplan',
  ],
}
