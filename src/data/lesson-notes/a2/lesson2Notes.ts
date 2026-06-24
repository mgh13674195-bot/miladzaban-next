import { LessonNotes } from '@/types/lessonNotes'

/**
 * A2.1 — Lektion 2: Wohin mit der Kommode?
 * Structured from the lesson-notes source markdown. Independent educational
 * content — not a copy of any coursebook layout.
 */
export const lesson2Notes: LessonNotes = {
  lessonId: 2,
  topic: 'Wohin mit der Kommode?',
  titleFa: 'وسایل خانه، چیدمان اتاق و اسباب‌کشی',

  summary: {
    introFa:
      'در این درس یاد می‌گیریم چطور درباره‌ی وسایل خانه، چیدمان اتاق، اسباب‌کشی و جای اشیا صحبت کنیم. موضوع اصلی درس این است که بتوانیم بگوییم چیزی کجا قرار دارد یا چیزی را کجا می‌گذاریم. در آلمانی Wo? (کجا؟ — چیزی کجا قرار دارد) و Wohin? (به کجا؟ — چیزی را به کجا می‌گذاریم) دو سؤال خیلی مهم‌اند و فرق بین آن‌ها یکی از مهم‌ترین بخش‌های گرامر A2 است.',
    goals: [
      'درباره‌ی وسایل خانه و اتاق صحبت کند.',
      'بگوید اشیا کجا قرار دارند.',
      'بگوید اشیا را کجا می‌گذارد.',
      'فرق بین Wo? + Dativ و Wohin? + Akkusativ را بفهمد.',
      'فعل‌های stehen, stellen, liegen, legen, hängen را درست استفاده کند.',
      'برای چیدمان خانه و اتاق پیشنهاد بدهد.',
      'درباره‌ی اسباب‌کشی و Einrichtung صحبت کند.',
      'یک متن ساده درباره‌ی چیدمان اتاق بخواند و بفهمد.',
      'نکات ساده برای زیباتر کردن اتاق یا خانه بدهد.',
      'یک متن خلاقانه کوتاه درباره‌ی یک شیء در خانه بنویسد.',
    ],
  },

  keySentences: [
    {
      titleFa: 'درباره جای اشیا',
      sentences: [
        { de: 'Der Tisch steht am Fenster.', fa: 'میز کنار پنجره قرار دارد.' },
        { de: 'Das Sofa steht vor der Wand.', fa: 'مبل جلوی دیوار قرار دارد.' },
        { de: 'Die Lampe hängt über dem Tisch.', fa: 'چراغ بالای میز آویزان است.' },
        { de: 'Das Bild hängt an der Wand.', fa: 'تابلو روی دیوار آویزان است.' },
        { de: 'Der Teppich liegt auf dem Boden.', fa: 'فرش روی زمین قرار دارد.' },
        { de: 'Das Kissen liegt auf dem Sofa.', fa: 'کوسن روی مبل است.' },
      ],
    },
    {
      titleFa: 'درباره گذاشتن اشیا',
      sentences: [
        { de: 'Stell den Tisch ans Fenster.', fa: 'میز را کنار پنجره بگذار.' },
        { de: 'Leg das Buch auf den Tisch.', fa: 'کتاب را روی میز بگذار.' },
        { de: 'Häng das Bild an die Wand.', fa: 'تابلو را روی دیوار آویزان کن.' },
        { de: 'Stell die Kommode zwischen die Türen.', fa: 'کمد را بین درها بگذار.' },
        { de: 'Leg den Teppich auf den Boden.', fa: 'فرش را روی زمین پهن کن.' },
      ],
    },
    {
      titleFa: 'درباره اسباب‌کشی',
      sentences: [
        { de: 'Ich bin schon einmal umgezogen.', fa: 'من قبلاً یک‌بار اسباب‌کشی کرده‌ام.' },
        { de: 'Wir ziehen nächste Woche um.', fa: 'ما هفته‌ی آینده اسباب‌کشی می‌کنیم.' },
        { de: 'Die Wohnung ist noch leer.', fa: 'آپارتمان هنوز خالی است.' },
        { de: 'Wir müssen die Möbel noch stellen.', fa: 'ما هنوز باید وسایل را بچینیم.' },
        { de: 'Wohin mit der Kommode?', fa: 'کمد را کجا بگذاریم؟' },
      ],
    },
    {
      titleFa: 'درباره پیشنهاد برای چیدمان',
      sentences: [
        { de: 'Stell nicht zu viele Möbel in das Zimmer.', fa: 'وسایل زیادی داخل اتاق نگذار.' },
        { de: 'Sonst wird der Raum zu dunkel.', fa: 'وگرنه اتاق خیلی تاریک می‌شود.' },
        { de: 'Häng einen Spiegel an die Wand.', fa: 'یک آینه روی دیوار آویزان کن.' },
        { de: 'Dann sieht der Raum größer aus.', fa: 'آن‌وقت اتاق بزرگ‌تر به نظر می‌رسد.' },
        { de: 'Leg einen Teppich auf den Boden.', fa: 'یک فرش روی زمین بگذار.' },
        { de: 'Das macht das Zimmer gemütlicher.', fa: 'این باعث می‌شود اتاق دنج‌تر شود.' },
      ],
    },
  ],

  grammar: [
    {
      id: 'wechselpraepositionen',
      titleDe: 'Wechselpräpositionen',
      titleFa: 'حروف اضافه‌ی دوحالتی (مکان)',
      explanationFa:
        'در این درس با حروف اضافه‌ای کار می‌کنیم که می‌توانند هم با Dativ و هم با Akkusativ بیایند. اصل ماجرا: وقتی می‌پرسیم چیزی کجا قرار دارد (Wo?) از Dativ استفاده می‌کنیم؛ وقتی می‌پرسیم چیزی را به کجا می‌گذاریم یا حرکت می‌دهیم (Wohin?) از Akkusativ استفاده می‌کنیم.',
      table: {
        headers: ['Präposition', 'معنی'],
        rows: [
          ['in', 'در / داخل'],
          ['an', 'به / کنار / روی سطح عمودی'],
          ['auf', 'روی سطح افقی'],
          ['über', 'بالای'],
          ['unter', 'زیر'],
          ['vor', 'جلوی'],
          ['hinter', 'پشت'],
          ['neben', 'کنار'],
          ['zwischen', 'بین'],
        ],
      },
      note: 'قاعده‌ی اصلی: Wo? → Dativ، Wohin? → Akkusativ.',
    },
    {
      id: 'wo-dativ',
      titleDe: 'Wo? + Dativ',
      titleFa: 'سؤال Wo و حالت Dativ',
      explanationFa: 'وقتی چیزی در یک مکان ثابت قرار دارد، از Dativ استفاده می‌کنیم.',
      examples: [
        { de: 'Wo steht der Tisch?', fa: 'میز کجا قرار دارد؟' },
        { de: 'Der Tisch steht am Fenster.', fa: 'میز کنار پنجره قرار دارد.' },
        { de: 'Wo liegt das Buch?', fa: 'کتاب کجاست؟' },
        { de: 'Das Buch liegt auf dem Tisch.', fa: 'کتاب روی میز است.' },
        { de: 'Wo hängt das Bild?', fa: 'تابلو کجا آویزان است؟' },
        { de: 'Das Bild hängt an der Wand.', fa: 'تابلو روی دیوار آویزان است.' },
      ],
    },
    {
      id: 'wohin-akkusativ',
      titleDe: 'Wohin? + Akkusativ',
      titleFa: 'سؤال Wohin و حالت Akkusativ',
      explanationFa: 'وقتی چیزی را به یک مکان می‌گذاریم یا حرکت می‌دهیم، از Akkusativ استفاده می‌کنیم.',
      examples: [
        { de: 'Wohin stellst du den Tisch?', fa: 'میز را کجا می‌گذاری؟' },
        { de: 'Ich stelle den Tisch ans Fenster.', fa: 'میز را کنار پنجره می‌گذارم.' },
        { de: 'Wohin legst du das Buch?', fa: 'کتاب را کجا می‌گذاری؟' },
        { de: 'Ich lege das Buch auf den Tisch.', fa: 'کتاب را روی میز می‌گذارم.' },
        { de: 'Wohin hängst du das Bild?', fa: 'تابلو را کجا آویزان می‌کنی؟' },
        { de: 'Ich hänge das Bild an die Wand.', fa: 'تابلو را روی دیوار آویزان می‌کنم.' },
      ],
      note: 'در فارسی معمولاً هر دو را با «کجا» می‌گوییم، اما در آلمانی فرق دارد: Wo? یعنی چیزی الان کجاست (Dativ) و Wohin? یعنی چیزی را به کجا می‌بریم (Akkusativ).',
    },
    {
      id: 'dativ-akkusativ-vergleich',
      titleDe: 'auf, an, in, vor, zwischen — Dativ vs. Akkusativ',
      titleFa: 'مقایسه‌ی Dativ و Akkusativ با حروف اضافه‌ی پرکاربرد',
      explanationFa: 'همان حرف اضافه، بسته به اینکه Wo? یا Wohin? باشد، آرتیکل و حالت جمله را تغییر می‌دهد.',
      examples: [
        { de: 'Das Buch liegt auf dem Tisch.', fa: 'کتاب روی میز است. — Wo? + Dativ' },
        { de: 'Ich lege das Buch auf den Tisch.', fa: 'کتاب را روی میز می‌گذارم. — Wohin? + Akkusativ' },
        { de: 'Das Bild hängt an der Wand.', fa: 'تابلو روی دیوار است. — Wo? + Dativ' },
        { de: 'Ich hänge das Bild an die Wand.', fa: 'تابلو را روی دیوار آویزان می‌کنم. — Wohin? + Akkusativ' },
        { de: 'Die Bücher stehen im Regal.', fa: 'کتاب‌ها داخل قفسه هستند. — Wo? + Dativ' },
        { de: 'Ich stelle die Bücher ins Regal.', fa: 'کتاب‌ها را داخل قفسه می‌گذارم. — Wohin? + Akkusativ' },
        { de: 'Das Sofa steht vor der Wand.', fa: 'مبل جلوی دیوار قرار دارد. — Wo? + Dativ' },
        { de: 'Ich stelle das Sofa vor die Wand.', fa: 'مبل را جلوی دیوار می‌گذارم. — Wohin? + Akkusativ' },
        { de: 'Die Kommode steht zwischen den Türen.', fa: 'کمد بین درها قرار دارد. — Wo? + Dativ' },
        { de: 'Ich stelle die Kommode zwischen die Türen.', fa: 'کمد را بین درها می‌گذارم. — Wohin? + Akkusativ' },
      ],
      table: {
        headers: ['Nominativ', 'Dativ (Wo?)', 'Akkusativ (Wohin?)'],
        rows: [
          ['der Tisch', 'auf dem Tisch', 'auf den Tisch'],
          ['das Regal', 'auf dem Regal', 'auf das Regal'],
          ['die Wand', 'an der Wand', 'an die Wand'],
          ['die Türen', 'zwischen den Türen', 'zwischen die Türen'],
        ],
      },
      note: 'بعد از Dativ و بعد از Akkusativ، آرتیکل اسم تغییر می‌کند — به همین دلیل dem/den و der/die در این جمله‌ها فرق دارند.',
    },
    {
      id: 'stehen-stellen-liegen-legen',
      titleDe: 'stehen / stellen, liegen / legen',
      titleFa: 'فعل‌های حالت ثابت در برابر فعل‌های حرکت',
      explanationFa:
        'stehen و liegen برای حالت ثابت (چیزی همان‌جا قرار دارد) به کار می‌روند. stellen و legen برای حرکت یا جابه‌جایی (چیزی را می‌گذاریم) به کار می‌روند.',
      examples: [
        { de: 'Der Stuhl steht in der Ecke.', fa: 'صندلی در گوشه قرار دارد.' },
        { de: 'Ich stelle den Stuhl in die Ecke.', fa: 'من صندلی را در گوشه می‌گذارم.' },
        { de: 'Das Buch liegt auf dem Tisch.', fa: 'کتاب روی میز است.' },
        { de: 'Ich lege das Buch auf den Tisch.', fa: 'من کتاب را روی میز می‌گذارم.' },
      ],
      note: 'فارسی‌زبان‌ها معمولاً هر چهار فعل را «گذاشتن / بودن» ترجمه می‌کنند، اما باید دقت کرد: stehen/liegen حالت ثابت‌اند و stellen/legen حرکت‌اند.',
    },
    {
      id: 'haengen',
      titleDe: 'hängen',
      titleFa: 'فعل hängen برای حالت ثابت و حرکت',
      explanationFa:
        'فعل hängen هم برای حالت ثابت و هم برای حرکت استفاده می‌شود؛ فرق آن فقط در حالت اسم بعدش (Dativ یا Akkusativ) دیده می‌شود.',
      examples: [
        { de: 'Das Bild hängt an der Wand.', fa: 'تابلو روی دیوار آویزان است. — حالت ثابت' },
        { de: 'Ich hänge das Bild an die Wand.', fa: 'من تابلو را روی دیوار آویزان می‌کنم. — حرکت' },
      ],
      note: 'در سطح A2 مهم‌ترین نکته این است: Wo hängt das Bild? → an der Wand، Wohin hängst du das Bild? → an die Wand.',
    },
  ],

  vocabulary: [
    {
      id: 'wohnung-moebel',
      titleFa: 'وسایل خانه و اتاق',
      items: [
        { de: 'die Kommode', fa: 'کمد کوتاه / دراور' },
        { de: 'das Sofa', fa: 'مبل' },
        { de: 'der Tisch', fa: 'میز' },
        { de: 'der Schreibtisch', fa: 'میز تحریر' },
        { de: 'der Stuhl', fa: 'صندلی' },
        { de: 'der Schrank', fa: 'کمد' },
        { de: 'das Regal', fa: 'قفسه' },
        { de: 'das Bett', fa: 'تخت' },
        { de: 'der Teppich', fa: 'فرش' },
        { de: 'das Kissen', fa: 'کوسن / بالش کوچک' },
        { de: 'die Lampe', fa: 'چراغ' },
        { de: 'das Bild', fa: 'تصویر / تابلو' },
        { de: 'der Spiegel', fa: 'آینه' },
        { de: 'der Vorhang', fa: 'پرده' },
        { de: 'die Wand', fa: 'دیوار' },
        { de: 'die Tür', fa: 'در' },
        { de: 'das Fenster', fa: 'پنجره' },
        { de: 'der Boden', fa: 'زمین / کف' },
        { de: 'die Ecke', fa: 'گوشه' },
        { de: 'das Fernsehgerät', fa: 'تلویزیون' },
        { de: 'der Herd', fa: 'اجاق گاز' },
        { de: 'das Werkzeug', fa: 'ابزار' },
        { de: 'das Souvenir', fa: 'سوغاتی' },
        { de: 'das Heft', fa: 'دفتر' },
        { de: 'der Gegenstand', fa: 'شیء / وسیله' },
      ],
    },
    {
      id: 'verben',
      titleFa: 'فعل‌های مهم',
      items: [
        { de: 'stehen', fa: 'ایستادن / قرار داشتن' },
        { de: 'stellen', fa: 'گذاشتن به حالت ایستاده' },
        { de: 'liegen', fa: 'قرار داشتن / خوابیده بودن' },
        { de: 'legen', fa: 'گذاشتن / قرار دادن' },
        { de: 'hängen', fa: 'آویزان بودن / آویزان کردن' },
        { de: 'umziehen', fa: 'اسباب‌کشی کردن' },
        { de: 'einrichten', fa: 'چیدمان کردن / مبله کردن' },
        { de: 'renovieren', fa: 'بازسازی کردن' },
        { de: 'verstecken', fa: 'پنهان کردن' },
        { de: 'diskutieren', fa: 'بحث کردن' },
        { de: 'suchen', fa: 'جست‌وجو کردن' },
        { de: 'finden', fa: 'پیدا کردن' },
      ],
    },
    {
      id: 'adjektive-ortsangaben',
      titleFa: 'صفت‌ها و عبارات مکانی',
      items: [
        { de: 'hell', fa: 'روشن' },
        { de: 'dunkel', fa: 'تاریک' },
        { de: 'schwer', fa: 'سنگین / سخت' },
        { de: 'gemütlich', fa: 'دنج / راحت' },
        { de: 'leer', fa: 'خالی' },
        { de: 'groß', fa: 'بزرگ' },
        { de: 'klein', fa: 'کوچک' },
        { de: 'vorsichtig', fa: 'محتاط' },
        { de: 'direkt', fa: 'مستقیم' },
        { de: 'sonst', fa: 'وگرنه' },
        { de: 'lieber', fa: 'بهتر است / ترجیحاً' },
        { de: 'zu viele', fa: 'بیش از حد زیاد' },
        { de: 'nicht zu viele', fa: 'نه خیلی زیاد' },
        { de: 'in der Ecke', fa: 'در گوشه' },
        { de: 'an der Wand', fa: 'روی دیوار' },
        { de: 'auf dem Boden', fa: 'روی زمین' },
        { de: 'über dem Tisch', fa: 'بالای میز' },
        { de: 'unter dem Bett', fa: 'زیر تخت' },
        { de: 'vor der Tür', fa: 'جلوی در' },
        { de: 'hinter der Tür', fa: 'پشت در' },
        { de: 'zwischen den Türen', fa: 'بین درها' },
      ],
    },
  ],

  redemittel: [
    {
      titleFa: 'پرسیدن مکان',
      phrases: [
        { de: 'Wo steht der Tisch?', fa: 'میز کجا قرار دارد؟' },
        { de: 'Wo liegt das Buch?', fa: 'کتاب کجاست؟' },
        { de: 'Wo hängt das Bild?', fa: 'تابلو کجا آویزان است؟' },
      ],
    },
    {
      titleFa: 'پرسیدن جهت / محل گذاشتن',
      phrases: [
        { de: 'Wohin soll ich den Tisch stellen?', fa: 'میز را کجا بگذارم؟' },
        { de: 'Wohin soll ich das Buch legen?', fa: 'کتاب را کجا بگذارم؟' },
        { de: 'Wohin soll ich das Bild hängen?', fa: 'تابلو را کجا آویزان کنم؟' },
      ],
    },
    {
      titleFa: 'دستور دادن / پیشنهاد دادن',
      phrases: [
        { de: 'Stell den Tisch ans Fenster.', fa: 'میز را کنار پنجره بگذار.' },
        { de: 'Leg das Buch auf den Tisch.', fa: 'کتاب را روی میز بگذار.' },
        { de: 'Häng das Bild an die Wand.', fa: 'تابلو را روی دیوار آویزان کن.' },
        { de: 'Stell die Kommode lieber neben die Tür.', fa: 'بهتر است کمد را کنار در بگذاری.' },
        { de: 'Leg den Teppich auf den Boden.', fa: 'فرش را روی زمین بگذار.' },
      ],
    },
    {
      titleFa: 'دادن نکات چیدمان',
      phrases: [
        { de: 'Stell nicht zu viele Möbel ins Zimmer.', fa: 'وسایل زیادی داخل اتاق نگذار.' },
        { de: 'Sonst wird der Raum zu klein.', fa: 'وگرنه اتاق خیلی کوچک می‌شود.' },
        { de: 'Häng einen Spiegel an die Wand.', fa: 'یک آینه روی دیوار آویزان کن.' },
        { de: 'Dann sieht der Raum größer aus.', fa: 'آن‌وقت اتاق بزرگ‌تر به نظر می‌رسد.' },
        { de: 'Sei vorsichtig mit dunklen Möbeln.', fa: 'با وسایل تیره محتاط باش.' },
        { de: 'Helle Farben machen den Raum freundlicher.', fa: 'رنگ‌های روشن اتاق را دلپذیرتر می‌کنند.' },
      ],
    },
  ],

  dialogues: [
    {
      id: 'dialog-umzug',
      titleFa: 'مکالمه درباره اسباب‌کشی',
      lines: [
        { speaker: 'A', de: 'Wohin mit der Kommode?', fa: 'کمد را کجا بگذاریم؟' },
        { speaker: 'B', de: 'Stell sie doch neben die Tür.', fa: 'بگذار کنار در.' },
        { speaker: 'A', de: 'Neben die Tür? Da ist nicht genug Platz.', fa: 'کنار در؟ آنجا جا کافی نیست.' },
        { speaker: 'B', de: 'Dann stell sie zwischen die Fenster.', fa: 'پس بگذار بین پنجره‌ها.' },
        { speaker: 'A', de: 'Gute Idee. Und wohin soll ich den Teppich legen?', fa: 'ایده‌ی خوبی است. فرش را کجا بگذارم؟' },
        { speaker: 'B', de: 'Leg ihn vor das Sofa.', fa: 'بگذار جلوی مبل.' },
        { speaker: 'A', de: 'Okay. Das sieht gemütlich aus.', fa: 'باشه. این دنج به نظر می‌رسد.' },
      ],
    },
    {
      id: 'dialog-zimmer-einrichten',
      titleFa: 'مکالمه درباره چیدمان اتاق',
      lines: [
        { speaker: 'A', de: 'Dein Zimmer ist schön, aber ein bisschen dunkel.', fa: 'اتاقت قشنگ است، اما کمی تاریک است.' },
        { speaker: 'B', de: 'Ja, ich weiß. Was kann ich machen?', fa: 'بله، می‌دانم. چه کار می‌توانم بکنم؟' },
        { speaker: 'A', de: 'Häng einen Spiegel an die Wand. Dann sieht der Raum heller aus.', fa: 'یک آینه روی دیوار آویزان کن. آن‌وقت اتاق روشن‌تر به نظر می‌رسد.' },
        { speaker: 'B', de: 'Gute Idee. Und die Lampe?', fa: 'ایده‌ی خوبی است. و چراغ؟' },
        { speaker: 'A', de: 'Stell die Lampe auf den Tisch. Das Licht ist dann wärmer.', fa: 'چراغ را روی میز بگذار. آن‌وقت نور گرم‌تر است.' },
        { speaker: 'B', de: 'Super, danke!', fa: 'عالی، ممنون!' },
      ],
    },
    {
      id: 'dialog-moebelgeschaeft',
      titleFa: 'مکالمه در فروشگاه وسایل خانه',
      lines: [
        { speaker: 'A', de: 'Ich suche einen Teppich für mein Wohnzimmer.', fa: 'دنبال یک فرش برای اتاق نشیمنم هستم.' },
        { speaker: 'B', de: 'Welche Farbe möchten Sie?', fa: 'چه رنگی می‌خواهید؟' },
        { speaker: 'A', de: 'Vielleicht hellgrau. Mein Wohnzimmer ist ziemlich dunkel.', fa: 'شاید خاکستری روشن. اتاق نشیمنم نسبتاً تاریک است.' },
        { speaker: 'B', de: 'Dann ist ein heller Teppich eine gute Idee.', fa: 'پس یک فرش روشن ایده‌ی خوبی است.' },
        { speaker: 'A', de: 'Und wo finde ich Spiegel?', fa: 'و آینه‌ها را کجا پیدا می‌کنم؟' },
        { speaker: 'B', de: 'Spiegel finden Sie im zweiten Stock, bei der Dekoration.', fa: 'آینه‌ها را در طبقه دوم، بخش دکوراسیون پیدا می‌کنید.' },
        { speaker: 'A', de: 'Danke schön.', fa: 'خیلی ممنون.' },
        { speaker: 'B', de: 'Gern.', fa: 'خواهش می‌کنم.' },
      ],
    },
  ],

  sampleStory: {
    de: 'Mein Zimmer ist klein, aber gemütlich. Links steht mein Bett. Neben dem Bett steht ein kleiner Tisch. Auf dem Tisch steht eine Lampe. An der Wand hängt ein Bild. Vor dem Bett liegt ein Teppich. In der Ecke steht ein Regal. Ich möchte noch einen Spiegel an die Wand hängen, denn dann sieht das Zimmer größer aus.',
    fa: 'اتاق من کوچک است، اما دنج است. سمت چپ تخت من قرار دارد. کنار تخت یک میز کوچک است. روی میز یک چراغ قرار دارد. روی دیوار یک تابلو آویزان است. جلوی تخت یک فرش قرار دارد. در گوشه یک قفسه است. می‌خواهم هنوز یک آینه روی دیوار آویزان کنم، چون آن‌وقت اتاق بزرگ‌تر به نظر می‌رسد.',
  },

  summaryClosingFa:
    'در این درس یاد گرفتیم درباره‌ی خانه، وسایل خانه، چیدمان اتاق و اسباب‌کشی صحبت کنیم. مهم‌ترین بخش گرامر درس تفاوت بین Wo? و Wohin? است: اگر چیزی در یک مکان قرار دارد از Dativ استفاده می‌کنیم (Das Buch liegt auf dem Tisch)، و اگر چیزی را به یک مکان می‌گذاریم از Akkusativ استفاده می‌کنیم (Ich lege das Buch auf den Tisch). این درس برای سطح A2 خیلی مهم است، چون زبان‌آموز از اینجا به بعد باید بتواند مکان، جهت حرکت و چیدمان اشیا را دقیق توضیح بدهد.',
  summaryTopics: [
    'وسایل خانه و اتاق',
    'Wo? + Dativ',
    'Wohin? + Akkusativ',
    'Wechselpräpositionen',
    'stehen / stellen',
    'liegen / legen',
    'hängen',
    'پیشنهاد برای چیدمان اتاق',
    'اسباب‌کشی و Einrichtung',
  ],
}
