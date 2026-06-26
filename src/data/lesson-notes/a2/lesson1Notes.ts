import { LessonNotes } from '@/types/lessonNotes'
import { lesson2Notes } from './lesson2Notes'
import { lesson3Notes } from './lesson3Notes'
import { lesson4Notes } from './lesson4Notes'
import { lesson5Notes } from './lesson5Notes'
import { lesson6Notes } from './lesson6Notes'
import { lesson7Notes } from './lesson7Notes'
import { lesson8Notes } from './lesson8Notes'
import { lesson9Notes } from './lesson9Notes'
import { lesson10Notes } from './lesson10Notes'

/**
 * A2.1 — Lektion 1: Berufe und Familie
 * Structured from the lesson-notes source markdown. Independent educational
 * content — not a copy of any coursebook layout.
 */
export const lesson1Notes: LessonNotes = {
  lessonId: 1,
  topic: 'Berufe und Familie',
  titleFa: 'خانواده، شغل و خاطرات گذشته',

  summary: {
    introFa:
      'در این درس یاد می‌گیریم درباره‌ی خانواده، شغل اعضای خانواده، خاطرات کودکی و اتفاقات گذشته صحبت کنیم. همچنین یاد می‌گیریم چطور با استفاده از Perfekt و Präteritum یک داستان ساده تعریف کنیم و با کلماتی مثل zuerst, dann, danach, zum Schluss ترتیب اتفاقات را نشان بدهیم.',
    goals: [
      'درباره‌ی اعضای خانواده صحبت کند.',
      'نسبت‌های خانوادگی مثل عمو، خاله، پسرعمو، خواهرزاده و مادرشوهر را بشناسد.',
      'درباره‌ی شغل اعضای خانواده در گذشته و حال جمله بسازد.',
      'خاطرات کودکی خود را با Perfekt تعریف کند.',
      'از war و hatte در گذشته استفاده کند.',
      'Possessivartikel مثل mein, dein, sein, ihr, unser, euer, Ihr را بهتر بفهمد.',
      'یک داستان خانوادگی کوتاه تعریف کند.',
      'ترتیب اتفاقات را با zuerst, dann, danach, zum Schluss بیان کند.',
      'یک ایمیل کوتاه درباره‌ی یک عضو خانواده بنویسد.',
      'درباره‌ی فعالیت‌های کودکی سؤال بپرسد و جواب بدهد.',
    ],
  },

  keySentences: [
    {
      titleFa: 'درباره خانواده',
      sentences: [
        { de: 'Das ist mein Onkel.', fa: 'این عموی من است.' },
        { de: 'Das ist meine Tante.', fa: 'این خاله / عمه‌ی من است.' },
        { de: 'Mein Cousin wohnt in Berlin.', fa: 'پسرعمو / پسرخاله‌ی من در برلین زندگی می‌کند.' },
        { de: 'Meine Nichte ist fünf Jahre alt.', fa: 'خواهرزاده / برادرزاده‌ی من پنج ساله است.' },
      ],
    },
    {
      titleFa: 'درباره شغل',
      sentences: [
        { de: 'Mein Opa war Bäcker.', fa: 'پدربزرگ من نانوا بود.' },
        { de: 'Meine Oma war Lehrerin.', fa: 'مادربزرگ من معلم بود.' },
        { de: 'Mein Vater ist Arzt.', fa: 'پدر من پزشک است.' },
        { de: 'Meine Mutter arbeitet als Verkäuferin.', fa: 'مادر من به عنوان فروشنده کار می‌کند.' },
        { de: 'Was war dein Großvater von Beruf?', fa: 'پدربزرگت چه شغلی داشت؟' },
      ],
    },
    {
      titleFa: 'درباره کودکی',
      sentences: [
        { de: 'Als Kind habe ich gern Fußball gespielt.', fa: 'در کودکی دوست داشتم فوتبال بازی کنم.' },
        { de: 'Früher habe ich oft Comics gelesen.', fa: 'قبلاً زیاد کمیک می‌خواندم.' },
        { de: 'Ich bin oft Fahrrad gefahren.', fa: 'من زیاد دوچرخه‌سواری می‌کردم.' },
        { de: 'Wir haben draußen übernachtet.', fa: 'ما بیرون خوابیدیم / شب را بیرون گذراندیم.' },
        { de: 'Mein Bruder ist auf Bäume geklettert.', fa: 'برادرم از درخت‌ها بالا رفت.' },
      ],
    },
    {
      titleFa: 'درباره داستان خانوادگی',
      sentences: [
        { de: 'Habe ich dir schon von meinem Opa erzählt?', fa: 'آیا تا حالا درباره‌ی پدربزرگم برایت تعریف کرده‌ام؟' },
        { de: 'Also pass auf:', fa: 'پس گوش کن / دقت کن:' },
        { de: 'Zuerst hat er in einer Bäckerei gearbeitet.', fa: 'اول در یک نانوایی کار کرد.' },
        { de: 'Dann hat er seine eigene Bäckerei eröffnet.', fa: 'بعد نانوایی خودش را باز کرد.' },
        { de: 'Danach ist er in eine andere Stadt gezogen.', fa: 'بعد از آن به یک شهر دیگر نقل مکان کرد.' },
        { de: 'Zum Schluss hat er die Bäckerei seinem Sohn gegeben.', fa: 'در پایان نانوایی را به پسرش داد.' },
      ],
    },
  ],

  grammar: [
    {
      id: 'possessivartikel',
      titleDe: 'Possessivartikel',
      titleFa: 'ضمایر ملکی',
      explanationFa: 'این کلمات نشان می‌دهند چیزی متعلق به چه کسی است.',
      table: {
        headers: ['Person', 'Possessivartikel', 'معنی'],
        rows: [
          ['ich', 'mein', 'مال من'],
          ['du', 'dein', 'مال تو'],
          ['er', 'sein', 'مال او، مذکر'],
          ['sie', 'ihr', 'مال او، مؤنث'],
          ['wir', 'unser', 'مال ما'],
          ['ihr', 'euer', 'مال شما، غیررسمی جمع'],
          ['sie', 'ihr', 'مال آن‌ها'],
          ['Sie', 'Ihr', 'مال شما، رسمی'],
        ],
      },
      examples: [
        { de: 'mein Vater', fa: 'پدر من' },
        { de: 'meine Mutter', fa: 'مادر من' },
        { de: 'dein Bruder', fa: 'برادر تو' },
        { de: 'seine Schwester', fa: 'خواهر او' },
        { de: 'unser Haus', fa: 'خانه‌ی ما' },
        { de: 'eure Wohnung', fa: 'آپارتمان شما' },
      ],
    },
    {
      id: 'possessivartikel-cases',
      titleDe: 'Possessivartikel: Nominativ / Akkusativ / Dativ',
      titleFa: 'ضمایر ملکی در حالت‌های مختلف',
      explanationFa: 'ضمایر ملکی در آلمانی با جنس اسم و حالت جمله تغییر می‌کنند.',
      examples: [
        { de: 'Das ist mein Vater.', fa: 'این پدر من است. — Nominativ' },
        { de: 'Ich besuche meinen Vater.', fa: 'من پدرم را ملاقات می‌کنم. — Akkusativ' },
        { de: 'Ich helfe meinem Vater.', fa: 'من به پدرم کمک می‌کنم. — Dativ' },
        { de: 'Das ist meine Mutter.', fa: 'این مادر من است. — Nominativ' },
        { de: 'Ich besuche meine Mutter.', fa: 'من مادرم را ملاقات می‌کنم. — Akkusativ' },
        { de: 'Ich telefoniere mit meiner Mutter.', fa: 'من با مادرم تلفنی صحبت می‌کنم. — Dativ' },
      ],
      note: 'در آلمانی نمی‌توانیم همیشه فقط mein بگوییم؛ باید به جنس و حالت اسم توجه کنیم: mein Vater (پدر من) ولی meinen Vater (پدرم را) و meinem Vater (به پدرم).',
    },
    {
      id: 'perfekt',
      titleDe: 'Perfekt',
      titleFa: 'زمان گذشته برای تعریف خاطرات',
      explanationFa: 'برای گفتن کارهایی که در گذشته انجام داده‌ایم، معمولاً از Perfekt استفاده می‌کنیم. ساختار: haben / sein + Partizip II',
      examples: [
        { de: 'Ich habe Fußball gespielt.', fa: 'من فوتبال بازی کردم.' },
        { de: 'Ich habe Comics gelesen.', fa: 'من کمیک خواندم.' },
        { de: 'Ich bin Fahrrad gefahren.', fa: 'من دوچرخه‌سواری کردم.' },
        { de: 'Ich bin auf Bäume geklettert.', fa: 'من از درخت‌ها بالا رفتم.' },
      ],
      note: 'بیشتر فعل‌ها با haben می‌آیند (Ich habe gespielt/gelesen/gearbeitet)، اما فعل‌های حرکت یا تغییر مکان معمولاً با sein می‌آیند (Ich bin gefahren/gekommen/geklettert).',
    },
    {
      id: 'praeteritum-sein-haben',
      titleDe: 'Präteritum von sein und haben',
      titleFa: 'گذشته‌ی ساده‌ی sein و haben',
      explanationFa: 'برای فعل‌های sein و haben در داستان‌گویی، خیلی وقت‌ها از Präteritum استفاده می‌کنیم.',
      table: {
        headers: ['sein (حال)', 'sein (گذشته)', 'haben (حال)', 'haben (گذشته)'],
        rows: [
          ['ich bin', 'ich war', 'ich habe', 'ich hatte'],
          ['du bist', 'du warst', 'du hast', 'du hattest'],
          ['er/sie ist', 'er/sie war', 'er/sie hat', 'er/sie hatte'],
          ['wir sind', 'wir waren', 'wir haben', 'wir hatten'],
        ],
      },
      examples: [
        { de: 'Mein Opa war Bäcker.', fa: 'پدربزرگ من نانوا بود.' },
        { de: 'Meine Oma war sehr fleißig.', fa: 'مادربزرگ من خیلی سخت‌کوش بود.' },
        { de: 'Mein Onkel hatte eine kleine Firma.', fa: 'عموی من یک شرکت کوچک داشت.' },
        { de: 'Wir hatten früher viele Tiere.', fa: 'ما قبلاً حیوانات زیادی داشتیم.' },
      ],
      note: 'در مکالمه روزمره، به‌جای «Ich bin gewesen» یا «Ich habe gehabt» معمولاً می‌گوییم «Ich war» و «Ich hatte» — طبیعی‌تر و رایج‌تر است.',
    },
    {
      id: 'story-sequencing',
      titleDe: 'zuerst, dann, danach, zum Schluss',
      titleFa: 'ترتیب اتفاقات در داستان',
      explanationFa: 'برای تعریف داستان، از این کلمات برای نشان دادن ترتیب اتفاقات استفاده می‌کنیم.',
      table: {
        headers: ['آلمانی', 'فارسی'],
        rows: [
          ['zuerst', 'اول'],
          ['dann', 'بعد'],
          ['danach', 'بعد از آن'],
          ['später', 'بعداً'],
          ['am Anfang', 'در ابتدا'],
          ['am Ende', 'در پایان'],
          ['zum Schluss', 'در آخر / در پایان'],
        ],
      },
      examples: [
        {
          de: 'Zuerst hat mein Opa in einer Bäckerei gearbeitet. Dann hat er seine eigene Bäckerei eröffnet. Danach hat er viel gearbeitet. Zum Schluss hat er die Bäckerei meinem Vater gegeben.',
          fa: 'اول پدربزرگم در یک نانوایی کار کرد. بعد نانوایی خودش را باز کرد. بعد از آن خیلی کار کرد. در پایان نانوایی را به پدرم داد.',
        },
      ],
      note: 'اگر فقط چند جمله پشت سر هم بگوییم، داستان خشک می‌شود. این کلمات ترتیب، داستان را منظم‌تر و طبیعی‌تر می‌کنند.',
    },
  ],

  vocabulary: [
    {
      id: 'familie',
      titleFa: 'خانواده',
      items: [
        { de: 'der Opa / der Großvater', fa: 'پدربزرگ' },
        { de: 'die Oma / die Großmutter', fa: 'مادربزرگ' },
        { de: 'der Onkel', fa: 'عمو / دایی' },
        { de: 'die Tante', fa: 'عمه / خاله' },
        { de: 'der Cousin', fa: 'پسرعمو / پسرخاله / پسردایی / پسرعمه' },
        { de: 'die Cousine', fa: 'دخترعمو / دخترخاله / دختردایی / دخترعمه' },
        { de: 'der Neffe', fa: 'برادرزاده / خواهرزاده، پسر' },
        { de: 'die Nichte', fa: 'برادرزاده / خواهرزاده، دختر' },
        { de: 'der Schwiegervater', fa: 'پدرشوهر / پدرزن' },
        { de: 'die Schwiegermutter', fa: 'مادرشوهر / مادرزن' },
        { de: 'die Schwiegertochter', fa: 'عروس خانواده' },
        { de: 'der Schwiegersohn', fa: 'داماد خانواده' },
        { de: 'die Eltern', fa: 'والدین' },
        { de: 'die Großeltern', fa: 'پدربزرگ و مادربزرگ' },
        { de: 'die Geschwister', fa: 'خواهر و برادرها' },
      ],
    },
    {
      id: 'berufe',
      titleFa: 'شغل‌ها',
      items: [
        { de: 'der Bäcker / die Bäckerin', fa: 'نانوا' },
        { de: 'der Arzt / die Ärztin', fa: 'پزشک' },
        { de: 'der Lehrer / die Lehrerin', fa: 'معلم' },
        { de: 'der Verkäufer / die Verkäuferin', fa: 'فروشنده' },
        { de: 'der Koch / die Köchin', fa: 'آشپز' },
        { de: 'der Journalist / die Journalistin', fa: 'روزنامه‌نگار' },
        { de: 'der Student / die Studentin', fa: 'دانشجو' },
      ],
    },
    {
      id: 'kindheit',
      titleFa: 'کودکی و فعالیت‌ها',
      items: [
        { de: 'die Kindheit', fa: 'کودکی' },
        { de: 'die Jugend', fa: 'جوانی / نوجوانی' },
        { de: 'als Kind', fa: 'در کودکی' },
        { de: 'früher', fa: 'قبلاً / در گذشته' },
        { de: 'draußen', fa: 'بیرون' },
        { de: 'die Geschichte', fa: 'داستان' },
        { de: 'der Witz', fa: 'لطیفه' },
        { de: 'die Puppe', fa: 'عروسک' },
        { de: 'das Spiel', fa: 'بازی' },
        { de: 'die Mannschaft', fa: 'تیم' },
        { de: 'das Hobby', fa: 'سرگرمی' },
        { de: 'Fußball spielen', fa: 'فوتبال بازی کردن' },
        { de: 'Comics lesen', fa: 'کمیک خواندن' },
        { de: 'Fahrrad fahren', fa: 'دوچرخه‌سواری کردن' },
        { de: 'auf Bäume klettern', fa: 'از درخت‌ها بالا رفتن' },
        { de: 'draußen übernachten', fa: 'شب را بیرون گذراندن' },
        { de: 'Witze erzählen', fa: 'لطیفه تعریف کردن' },
        { de: 'Geschichten erzählen', fa: 'داستان تعریف کردن' },
        { de: 'Sachen verkaufen', fa: 'چیزها را فروختن' },
        { de: 'Bilder sammeln', fa: 'عکس‌ها را جمع کردن' },
        { de: 'mit Puppen spielen', fa: 'با عروسک بازی کردن' },
        { de: 'zeichnen', fa: 'نقاشی کشیدن' },
        { de: 'streiten', fa: 'دعوا کردن / بحث کردن' },
      ],
    },
    {
      id: 'story-words',
      titleFa: 'کلمات داستان',
      items: [
        { de: 'zuerst', fa: 'اول' },
        { de: 'dann', fa: 'بعد' },
        { de: 'danach', fa: 'بعد از آن' },
        { de: 'später', fa: 'بعداً' },
        { de: 'am Anfang', fa: 'در ابتدا' },
        { de: 'am Ende', fa: 'در پایان' },
        { de: 'zum Schluss', fa: 'در آخر / در پایان' },
        { de: 'passieren', fa: 'اتفاق افتادن' },
        { de: 'klappen', fa: 'خوب پیش رفتن / جواب دادن' },
        { de: 'aufpassen', fa: 'دقت کردن' },
        { de: 'erzählen', fa: 'تعریف کردن' },
        { de: 'bekommen', fa: 'دریافت کردن' },
        { de: 'vergessen', fa: 'فراموش کردن' },
        { de: 'besuchen', fa: 'ملاقات کردن / به دیدن کسی رفتن' },
        { de: 'verkaufen', fa: 'فروختن' },
        { de: 'eröffnen', fa: 'افتتاح کردن' },
        { de: 'umziehen', fa: 'نقل مکان کردن' },
        { de: 'wachsen', fa: 'رشد کردن / بزرگ شدن' },
      ],
    },
  ],

  redemittel: [
    {
      titleFa: 'شروع داستان',
      phrases: [
        { de: 'Habe ich dir schon von meinem Opa erzählt?', fa: 'تا حالا درباره‌ی پدربزرگم برایت تعریف کرده‌ام؟' },
        { de: 'Ich möchte dir von meiner Tante erzählen.', fa: 'می‌خواهم درباره‌ی خاله / عمه‌ام برایت تعریف کنم.' },
        { de: 'Also pass auf:', fa: 'پس گوش کن:' },
        { de: 'Die Geschichte ist wirklich interessant.', fa: 'این داستان واقعاً جالب است.' },
      ],
    },
    {
      titleFa: 'پرسیدن درباره گذشته',
      phrases: [
        { de: 'Was hast du als Kind gern gemacht?', fa: 'در کودکی چه کاری را دوست داشتی انجام بدهی؟' },
        { de: 'Was war dein Opa von Beruf?', fa: 'پدربزرگت چه شغلی داشت؟' },
        { de: 'Wo hat deine Oma früher gearbeitet?', fa: 'مادربزرگت قبلاً کجا کار می‌کرد؟' },
        { de: 'Hast du als Kind oft draußen gespielt?', fa: 'در کودکی زیاد بیرون بازی می‌کردی؟' },
        { de: 'Bist du früher oft Fahrrad gefahren?', fa: 'قبلاً زیاد دوچرخه‌سواری می‌کردی؟' },
      ],
    },
    {
      titleFa: 'جواب دادن درباره گذشته',
      phrases: [
        { de: 'Als Kind habe ich gern Fußball gespielt.', fa: 'در کودکی فوتبال بازی کردن را دوست داشتم.' },
        { de: 'Früher habe ich oft Comics gelesen.', fa: 'قبلاً زیاد کمیک می‌خواندم.' },
        { de: 'Mein Opa war Bäcker.', fa: 'پدربزرگم نانوا بود.' },
        { de: 'Meine Oma hatte einen kleinen Laden.', fa: 'مادربزرگم یک مغازه کوچک داشت.' },
        { de: 'Wir haben oft zusammen gespielt.', fa: 'ما اغلب با هم بازی می‌کردیم.' },
      ],
    },
    {
      titleFa: 'ترتیب دادن داستان',
      phrases: [
        { de: 'Zuerst …', fa: 'اول …' },
        { de: 'Dann …', fa: 'بعد …' },
        { de: 'Danach …', fa: 'بعد از آن …' },
        { de: 'Später …', fa: 'بعداً …' },
        { de: 'Zum Schluss …', fa: 'در پایان …' },
      ],
    },
  ],

  dialogues: [
    {
      id: 'dialog-beruf',
      titleFa: 'مکالمه درباره شغل خانواده',
      lines: [
        { speaker: 'A', de: 'Was war dein Großvater von Beruf?', fa: 'پدربزرگت چه شغلی داشت؟' },
        { speaker: 'B', de: 'Mein Großvater war Bäcker.', fa: 'پدربزرگم نانوا بود.' },
        { speaker: 'A', de: 'Hat er lange als Bäcker gearbeitet?', fa: 'مدت زیادی به عنوان نانوا کار کرد؟' },
        { speaker: 'B', de: 'Ja, sehr lange. Zuerst hat er in einer kleinen Bäckerei gearbeitet.', fa: 'بله، خیلی طولانی. اول در یک نانوایی کوچک کار کرد.' },
        { speaker: 'A', de: 'Und später?', fa: 'و بعداً؟' },
        { speaker: 'B', de: 'Später hatte er seine eigene Bäckerei.', fa: 'بعداً نانوایی خودش را داشت.' },
        { speaker: 'A', de: 'Das ist interessant!', fa: 'جالب است!' },
      ],
    },
    {
      id: 'dialog-kindheit',
      titleFa: 'مکالمه درباره کودکی',
      lines: [
        { speaker: 'A', de: 'Was hast du als Kind gern gemacht?', fa: 'در کودکی دوست داشتی چه کار کنی؟' },
        { speaker: 'B', de: 'Ich habe gern draußen gespielt. Und du?', fa: 'دوست داشتم بیرون بازی کنم. تو چطور؟' },
        { speaker: 'A', de: 'Ich habe oft Comics gelesen.', fa: 'من زیاد کمیک می‌خواندم.' },
        { speaker: 'B', de: 'Bist du auch Fahrrad gefahren?', fa: 'دوچرخه‌سواری هم می‌کردی؟' },
        { speaker: 'A', de: 'Ja, sehr oft. Im Sommer bin ich fast jeden Tag Fahrrad gefahren.', fa: 'بله، خیلی زیاد. تابستان تقریباً هر روز دوچرخه‌سواری می‌کردم.' },
        { speaker: 'B', de: 'Schön! Ich bin früher auch gern Fahrrad gefahren.', fa: 'چه خوب! من هم قبلاً دوست داشتم دوچرخه‌سواری کنم.' },
      ],
    },
    {
      id: 'dialog-familiengeschichte',
      titleFa: 'مکالمه داستان خانوادگی',
      lines: [
        { speaker: 'A', de: 'Habe ich dir schon von meiner Tante erzählt?', fa: 'تا حالا درباره‌ی خاله‌ام برایت تعریف کرده‌ام؟' },
        { speaker: 'B', de: 'Nein, erzähl mal!', fa: 'نه، تعریف کن!' },
        { speaker: 'A', de: 'Also pass auf: Meine Tante war früher Tänzerin.', fa: 'پس گوش کن: خاله‌ام قبلاً رقصنده بود.' },
        { speaker: 'B', de: 'Wirklich?', fa: 'واقعاً؟' },
        { speaker: 'A', de: 'Ja. Zuerst hat sie in Teheran getanzt. Dann ist sie nach Deutschland gekommen. Danach hat sie eine kleine Tanzschule eröffnet.', fa: 'بله. اول در تهران فعالیت کرد. بعد به آلمان آمد. بعد از آن یک مدرسه‌ی کوچک رقص باز کرد.' },
        { speaker: 'B', de: 'Das ist ja toll!', fa: 'چه عالی!' },
        { speaker: 'A', de: 'Ja, sie war sehr mutig und fleißig.', fa: 'بله، او خیلی شجاع و سخت‌کوش بود.' },
      ],
    },
  ],

  sampleStory: {
    de: 'Mein Großvater war früher Koch. Zuerst hat er in einem Restaurant gearbeitet. Dann hat er ein kleines Café eröffnet. Danach hat er viele Gäste bekommen. Er war sehr fleißig und freundlich. Zum Schluss hat er das Café seinem Sohn gegeben. Heute erzählt meine Familie noch oft von ihm.',
    fa: 'پدربزرگم قبلاً آشپز بود. اول در یک رستوران کار کرد. بعد یک کافه‌ی کوچک باز کرد. بعد از آن مشتری‌های زیادی پیدا کرد. او خیلی سخت‌کوش و مهربان بود. در پایان کافه را به پسرش داد. امروز خانواده‌ی من هنوز زیاد درباره‌ی او صحبت می‌کند.',
  },

  summaryClosingFa:
    'در این درس یاد گرفتیم درباره‌ی خانواده، شغل اعضای خانواده و خاطرات گذشته صحبت کنیم. همچنین یاد گرفتیم چطور با Perfekt درباره‌ی کارهایی که قبلاً انجام داده‌ایم جمله بسازیم و با war / hatte درباره‌ی گذشته‌ی افراد توضیح بدهیم. این درس برای زبان‌آموزان A2 خیلی مهم است، چون از اینجا به بعد زبان‌آموز باید بتواند فقط جمله‌های ساده نگوید، بلکه یک خاطره یا داستان کوتاه را هم تعریف کند.',
  summaryTopics: [
    'اعضای خانواده',
    'شغل‌ها',
    'خاطرات کودکی',
    'فعالیت‌های گذشته',
    'Possessivartikel',
    'Perfekt',
    'Präteritum von sein und haben',
    'تعریف کردن داستان خانوادگی',
    'ترتیب اتفاقات با zuerst, dann, danach, zum Schluss',
  ],
}

export function getLessonNotes(lessonId: number): LessonNotes | null {
  if (lessonId === 1) return lesson1Notes
  if (lessonId === 2) return lesson2Notes
  if (lessonId === 3) return lesson3Notes
  if (lessonId === 4) return lesson4Notes
  if (lessonId === 5) return lesson5Notes
  if (lessonId === 6) return lesson6Notes
  if (lessonId === 7) return lesson7Notes
  if (lessonId === 8) return lesson8Notes
  if (lessonId === 9) return lesson9Notes
  if (lessonId === 10) return lesson10Notes
  return null
}
