import { LessonNotes } from '@/types/lessonNotes'

/**
 * A2.1 — Lektion 6: Meine Lieblingsveranstaltung (Veranstaltungen,
 * temporale Präpositionen, Vorschläge machen, sich verabreden)
 * Structured from the lesson-notes source markdown. Independent educational
 * content — not a copy of any coursebook layout.
 */
export const lesson6Notes: LessonNotes = {
  lessonId: 6,
  topic: 'Kultur',
  titleFa: 'رویدادهای فرهنگی، پیشنهاد دادن، قرار گذاشتن و زمان‌ها',

  summary: {
    introFa:
      'در این درس درباره‌ی رویدادهای فرهنگی مثل جشنواره، کنسرت، تئاتر و نمایشگاه صحبت می‌کنیم. یاد می‌گیریم چطور برای یک برنامه پیشنهاد بدهیم، با هم قرار بگذاریم، موافقت یا مخالفت کنیم و درباره‌ی برنامه‌ی مورد علاقه‌ی خودمان بنویسیم. همچنین حروف اضافه‌ی زمانی مهم مثل seit، über، von … bis، vor، in و nach را یاد می‌گیریم.',
    goals: [
      'واژگان رویدادها مثل Festival, Konzert, Theaterstück, Vortrag را به‌کار ببرد.',
      'کلماتی مثل Eintritt, Eintrittskarte, Ermäßigung را درست استفاده کند.',
      'با seit + Dativ بگوید چیزی از چه زمانی شروع شده و ادامه دارد.',
      'با über + Akkusativ مدت زمان تقریبی را بیان کند.',
      'فرق von … bis و von … an را تشخیص دهد.',
      'از vor، in و nach برای گذشته و آینده استفاده کند.',
      'برای یک برنامه پیشنهاد بدهد: Möchtest du vielleicht mitkommen؟',
      'با پیشنهاد دیگران موافقت یا مخالفت کند.',
      'برای دیدار با کسی قرار بگذارد (sich verabreden).',
      'درباره‌ی Lieblingsveranstaltung خودش چند جمله بنویسد یا تعریف کند.',
    ],
  },

  keySentences: [
    {
      titleFa: 'پیشنهاد دادن برای یک برنامه',
      sentences: [
        { de: 'Möchtest du vielleicht mitkommen?', fa: 'دوست داری شاید همراه بیایی؟' },
        { de: 'Was hältst du davon?', fa: 'نظرت چیه؟' },
        { de: 'Wie wäre es mit einem Konzert?', fa: 'نظرت درباره‌ی یک کنسرت چیه؟' },
        { de: 'Darf ich etwas vorschlagen?', fa: 'می‌توانم چیزی پیشنهاد بدهم؟' },
      ],
    },
    {
      titleFa: 'موافقت و مخالفت',
      sentences: [
        { de: 'Einverstanden. Das machen wir.', fa: 'موافقم. این کار را می‌کنیم.' },
        { de: 'Das ist keine so gute Idee.', fa: 'این ایده‌ی خیلی خوبی نیست.' },
        { de: 'Sehr nett, aber da kann ich leider nicht.', fa: 'خیلی لطف داری، اما متأسفانه نمی‌توانم.' },
        { de: 'Ich würde lieber ins Theater gehen.', fa: 'من ترجیح می‌دهم به تئاتر بروم.' },
      ],
    },
    {
      titleFa: 'قرار گذاشتن',
      sentences: [
        { de: 'Wann treffen wir uns?', fa: 'کی همدیگر را می‌بینیم؟' },
        { de: 'Wir treffen uns um 18:30 Uhr vor dem Eingang.', fa: 'ساعت ۱۸:۳۰ کنار ورودی همدیگر را می‌بینیم.' },
        { de: 'Das passt gut.', fa: 'این خوب جور می‌شود.' },
        { de: 'Dann lass uns das so ausmachen.', fa: 'پس بیا همین‌طور قرار بگذاریم.' },
      ],
    },
  ],

  grammar: [
    {
      id: 'seit-dativ',
      titleDe: 'seit + Dativ',
      titleFa: 'بیان شروع از گذشته تا الان با seit',
      explanationFa: 'seit یعنی «از … تا الان» و برای چیزی که از گذشته شروع شده و هنوز ادامه دارد به‌کار می‌رود. بعد از seit همیشه Dativ می‌آید.',
      examples: [
        { de: 'Ich lerne seit einem Jahr Deutsch.', fa: 'یک سال است آلمانی یاد می‌گیرم.' },
        { de: 'Ich wohne seit 2020 in Frankfurt.', fa: 'از سال ۲۰۲۰ در فرانکفورت زندگی می‌کنم.' },
        { de: 'Sie arbeitet seit drei Monaten in dieser Firma.', fa: 'سه ماه است در این شرکت کار می‌کند.' },
      ],
      note: 'بعد از seit باید Dativ بسازیم: ein Jahr → seit einem Jahr، eine Woche → seit einer Woche.',
    },
    {
      id: 'ueber-akkusativ',
      titleDe: 'über + Akkusativ',
      titleFa: 'بیان مدت زمان تقریبی با über',
      explanationFa: 'وقتی بخواهیم بگوییم «بیش از / حدوداً مدت …»، از über + Akkusativ استفاده می‌کنیم.',
      examples: [
        { de: 'Das Festival dauert über eine Woche.', fa: 'جشنواره بیش از یک هفته طول می‌کشد.' },
        { de: 'Ich war über einen Monat in Berlin.', fa: 'بیش از یک ماه در برلین بودم.' },
        { de: 'Er hat über zehn Jahre in München gelebt.', fa: 'بیش از ده سال در مونیخ زندگی کرده است.' },
      ],
      note: 'بعد از über، Akkusativ می‌آید — eine Woche, einen Monat, zehn Jahre بدون تغییر می‌مانند.',
    },
    {
      id: 'von-bis-von-an',
      titleDe: 'von … bis / von … an',
      titleFa: 'فرق von … bis و von … an',
      explanationFa: 'von … bis یعنی از یک زمان تا یک زمان مشخص (بازه‌ی محدود). von … an یعنی از یک زمان به بعد (بدون پایان مشخص).',
      table: {
        headers: ['ساختار', 'معنی', 'مثال'],
        rows: [
          ['von … bis', 'از … تا …', 'vom 1. Mai bis zum 30. Juni'],
          ['von … an', 'از … به بعد', 'von morgen an'],
        ],
      },
      examples: [
        { de: 'Das Festival findet vom 10. bis zum 15. Juli statt.', fa: 'جشنواره از ۱۰ تا ۱۵ جولای برگزار می‌شود.' },
        { de: 'Von morgen an habe ich Urlaub.', fa: 'از فردا به بعد مرخصی دارم.' },
      ],
      note: 'von … bis برای بازه‌ی زمانی محدود است؛ von … an یعنی از زمانی به بعد، بدون پایان مشخص.',
    },
    {
      id: 'vor-in-nach',
      titleDe: 'vor, in, nach',
      titleFa: 'حروف اضافه‌ی زمان برای گذشته و آینده',
      explanationFa: 'vor برای زمانی قبل از الان (گذشته)، in برای زمانی بعد از الان (آینده) و nach برای زمانی بعد از یک اتفاق به‌کار می‌رود.',
      table: {
        headers: ['حرف اضافه', 'معنی', 'مثال'],
        rows: [
          ['vor', 'قبل از الان (گذشته)', 'vor zwei Jahren'],
          ['in', 'بعد از الان (آینده)', 'in zwei Wochen'],
          ['nach', 'بعد از یک اتفاق', 'nach dem Konzert'],
        ],
      },
      examples: [
        { de: 'Vor zwei Jahren war ich in Berlin.', fa: 'دو سال پیش در برلین بودم.' },
        { de: 'In zwei Wochen fahre ich nach Köln.', fa: 'دو هفته دیگر به کلن می‌روم.' },
        { de: 'Nach dem Konzert gehen wir essen.', fa: 'بعد از کنسرت می‌رویم غذا بخوریم.' },
      ],
      note: 'vor = گذشته، in = آینده، nach = بعد از یک اتفاق خاص — این سه را با هم اشتباه نگیرید.',
    },
  ],

  vocabulary: [
    {
      id: 'veranstaltungen',
      titleFa: 'رویدادها و برنامه‌های فرهنگی',
      items: [
        { de: 'die Veranstaltung', fa: 'رویداد / برنامه' },
        { de: 'das Festival', fa: 'جشنواره' },
        { de: 'das Konzert', fa: 'کنسرت' },
        { de: 'das Theaterstück', fa: 'نمایش تئاتر' },
        { de: 'der Vortrag', fa: 'سخنرانی' },
        { de: 'die Diskussion', fa: 'بحث و گفت‌وگو' },
        { de: 'die Ausstellung', fa: 'نمایشگاه' },
        { de: 'die Bühne', fa: 'صحنه' },
        { de: 'der Künstler', fa: 'هنرمند' },
        { de: 'das Kostüm', fa: 'لباس نمایش' },
      ],
    },
    {
      id: 'tickets-preise',
      titleFa: 'بلیت و قیمت',
      items: [
        { de: 'der Eintritt', fa: 'ورودی / حق ورود' },
        { de: 'die Eintrittskarte', fa: 'بلیت ورود' },
        { de: 'die Kinokarte', fa: 'بلیت سینما' },
        { de: 'die Ermäßigung', fa: 'تخفیف' },
      ],
    },
    {
      id: 'verabreden-vorschlagen',
      titleFa: 'پیشنهاد دادن و قرار گذاشتن',
      items: [
        { de: 'vorschlagen', fa: 'پیشنهاد دادن' },
        { de: 'sich verabreden', fa: 'قرار گذاشتن' },
        { de: 'stattfinden', fa: 'برگزار شدن' },
        { de: 'mitkommen', fa: 'همراه آمدن' },
        { de: 'erleben', fa: 'تجربه کردن' },
        { de: 'ausmachen (einen Termin)', fa: 'قرار گذاشتن / تعیین کردن (وقت)' },
        { de: 'der Treffpunkt', fa: 'محل قرار' },
      ],
    },
  ],

  redemittel: [
    {
      titleFa: 'پیشنهاد دادن',
      phrases: [
        { de: 'Möchtest du vielleicht mitkommen?', fa: 'دوست داری شاید همراه بیایی؟' },
        { de: 'Was hältst du davon?', fa: 'نظرت چیه؟' },
        { de: 'Wie wäre es mit …?', fa: 'نظرت درباره‌ی … چیه؟' },
        { de: 'Darf ich etwas vorschlagen?', fa: 'می‌توانم چیزی پیشنهاد بدهم؟' },
      ],
    },
    {
      titleFa: 'موافقت کردن',
      phrases: [
        { de: 'Ja, gern.', fa: 'بله، با کمال میل.' },
        { de: 'Einverstanden.', fa: 'موافقم.' },
        { de: 'Okay, das machen wir.', fa: 'باشه، این کار را می‌کنیم.' },
        { de: 'Das passt auch.', fa: 'این هم خوب جور می‌شود.' },
      ],
    },
    {
      titleFa: 'مخالفت یا رد محترمانه',
      phrases: [
        { de: 'Das ist keine so gute Idee.', fa: 'این ایده‌ی خیلی خوبی نیست.' },
        { de: 'Sehr nett, aber da kann ich leider nicht.', fa: 'خیلی لطف داری، اما متأسفانه نمی‌توانم.' },
        { de: 'Ich finde das nicht so interessant.', fa: 'به نظرم این خیلی جالب نیست.' },
        { de: 'Ich würde lieber … gehen.', fa: 'من ترجیح می‌دهم به … بروم.' },
      ],
    },
  ],

  dialogues: [
    {
      id: 'dialog-konzert-vorschlagen',
      titleFa: 'مکالمه پیشنهاد کنسرت',
      lines: [
        { speaker: 'A', de: 'Am Samstag gibt es ein Konzert im Stadtpark. Möchtest du vielleicht mitkommen?', fa: 'شنبه یک کنسرت در پارک شهر است. دوست داری شاید همراه بیایی؟' },
        { speaker: 'B', de: 'Sehr gern. Was kostet der Eintritt?', fa: 'با کمال میل. ورودی چقدر است؟' },
        { speaker: 'A', de: '12 Euro, aber Studenten bekommen eine Ermäßigung.', fa: '۱۲ یورو، اما دانشجوها تخفیف می‌گیرند.' },
        { speaker: 'B', de: 'Super. Wann treffen wir uns?', fa: 'عالی. کی همدیگر را می‌بینیم؟' },
        { speaker: 'A', de: 'Um 18:30 Uhr vor dem Eingang.', fa: 'ساعت ۱۸:۳۰ کنار ورودی.' },
        { speaker: 'B', de: 'Einverstanden. Das machen wir.', fa: 'موافقم. این کار را می‌کنیم.' },
      ],
    },
    {
      id: 'dialog-vorschlag-ablehnen',
      titleFa: 'مکالمه رد پیشنهاد و پیشنهاد جایگزین',
      lines: [
        { speaker: 'A', de: 'Wollen wir zu einer Lesung gehen?', fa: 'به یک جلسه‌ی کتاب‌خوانی برویم؟' },
        { speaker: 'B', de: 'Sehr nett, aber das finde ich noch zu schwer.', fa: 'خیلی لطف داری، اما به نظرم هنوز سخت است.' },
        { speaker: 'A', de: 'Darf ich etwas anderes vorschlagen?', fa: 'می‌توانم چیز دیگری پیشنهاد بدهم؟' },
        { speaker: 'B', de: 'Ja, gern.', fa: 'بله، با کمال میل.' },
        { speaker: 'A', de: 'Wie wäre es mit einem deutschen Film mit Untertiteln?', fa: 'نظرت درباره‌ی یک فیلم آلمانی با زیرنویس چیه؟' },
        { speaker: 'B', de: 'Das ist eine gute Idee. Wann läuft der Film?', fa: 'ایده‌ی خوبی است. فیلم کی شروع می‌شود؟' },
        { speaker: 'A', de: 'Um 19 Uhr.', fa: 'ساعت ۱۹.' },
        { speaker: 'B', de: 'Okay, das passt.', fa: 'باشه، این جور می‌شود.' },
      ],
    },
    {
      id: 'dialog-lieblingsveranstaltung',
      titleFa: 'مکالمه درباره برنامه مورد علاقه',
      lines: [
        { speaker: 'A', de: 'Was ist deine Lieblingsveranstaltung?', fa: 'برنامه‌ی مورد علاقه‌ات چیست؟' },
        { speaker: 'B', de: 'Mein Lieblingsfest ist das Sommerfestival in Mainz.', fa: 'جشن مورد علاقه‌ام جشنواره‌ی تابستانی ماینتس است.' },
        { speaker: 'A', de: 'Seit wann gibt es das Festival?', fa: 'از چه زمانی این جشنواره وجود دارد؟' },
        { speaker: 'B', de: 'Seit über 20 Jahren.', fa: 'بیش از ۲۰ سال است.' },
        { speaker: 'A', de: 'Was kann man dort erleben?', fa: 'آنجا چه چیزهایی می‌توان تجربه کرد؟' },
        { speaker: 'B', de: 'Es gibt Konzerte, Essen, Kunst und eine Feuer-Show.', fa: 'کنسرت، غذا، هنر و یک نمایش آتش وجود دارد.' },
        { speaker: 'A', de: 'Warst du schon dort?', fa: 'قبلاً آنجا بوده‌ای؟' },
        { speaker: 'B', de: 'Ja, letztes Jahr. Es war sehr spannend.', fa: 'بله، سال گذشته. خیلی جالب بود.' },
      ],
    },
  ],

  sampleStory: {
    de: 'Meine Lieblingsveranstaltung ist das Sommerfestival in Mainz. Es findet jedes Jahr im Juli im Stadtpark statt. Das Festival gibt es seit über 20 Jahren. Dort kann man Konzerte hören, verschiedene Speisen probieren und eine Feuer-Show sehen. Ich war letztes Jahr zum ersten Mal dort. Besonders gut gefallen mir die Musik und die Atmosphäre. Ich finde das Festival spannend, weil man viele interessante Menschen trifft.',
    fa: 'برنامه‌ی مورد علاقه‌ی من جشنواره‌ی تابستانی ماینتس است. این جشنواره هر سال در ماه ژوئیه در پارک شهر برگزار می‌شود. این جشنواره بیش از ۲۰ سال است که وجود دارد. آنجا می‌توان کنسرت شنید، غذاهای مختلف چشید و یک نمایش آتش دید. سال گذشته برای اولین بار آنجا رفتم. به‌خصوص موسیقی و فضای آن را خیلی دوست دارم. این جشنواره را جالب می‌دانم، چون آدم‌های جالب زیادی آنجا می‌بینم.',
  },

  summaryClosingFa:
    'درس ۶ A2.1 درباره‌ی رویدادهای فرهنگی، پیشنهاد دادن، قرار گذاشتن و حروف اضافه‌ی زمان است. در این درس یاد گرفتیم برای یک برنامه پیشنهاد بدهیم (Möchtest du vielleicht mitkommen؟)، موافقت یا مخالفت کنیم، با هم قرار بگذاریم و درباره‌ی Lieblingsveranstaltung خودمان بنویسیم. مهم‌ترین بخش گرامر درس، حروف اضافه‌ی زمانی seit، über، von … bis/an، vor، in و nach بود. این درس برای A2 خیلی مهم است، چون زبان‌آموز یاد می‌گیرد درباره‌ی برنامه‌ها صحبت کند، پیشنهاد بدهد و زمان‌بندی دقیق بیان کند.',
  summaryTopics: [
    'واژگان رویدادهای فرهنگی',
    'Eintritt و Ermäßigung',
    'seit + Dativ',
    'über + Akkusativ',
    'von … bis / von … an',
    'vor / in / nach',
    'پیشنهاد دادن و قرار گذاشتن',
    'موافقت و مخالفت',
    'نوشتن درباره‌ی Lieblingsveranstaltung',
  ],
}
