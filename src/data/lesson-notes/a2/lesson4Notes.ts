import { LessonNotes } from '@/types/lessonNotes'

/**
 * A2.1 — Lektion 4: Was darf es sein? (Einkaufen, Lebensmittel, Adjektivdeklination)
 * Structured from the lesson-notes source markdown. Independent educational
 * content — not a copy of any coursebook layout.
 */
export const lesson4Notes: LessonNotes = {
  lessonId: 4,
  topic: 'Was darf es sein?',
  titleFa: 'خرید، مواد غذایی و پایان صفت بعد از ein/kein/mein',

  summary: {
    introFa:
      'در این درس درباره‌ی خرید، مواد غذایی، مقدار و بسته‌بندی، و سفارش دادن در فروشگاه یا کافه صحبت می‌کنیم. یاد می‌گیریم چطور با Ich hätte gern … سفارش بدهیم، با lieber ترجیح خودمان را بگوییم و پایان صفت‌ها را بعد از ein/kein/mein در Nominativ، Akkusativ و Dativ درست بسازیم.',
    goals: [
      'واژگان مواد غذایی مهم مثل Banane, Birne, Mehl, Marmelade را به‌کار ببرد.',
      'مقدار و بسته‌بندی را با Kilo, Gramm, Liter, Packung, Flasche, Glas, Dose بیان کند.',
      'یک لیست خرید (Einkaufszettel) ساده بنویسد.',
      'در فروشگاه یا کافه سفارش بدهد: Ich hätte gern … / Wie viel darf es sein؟',
      'با Möchten Sie lieber … oder …؟ بین دو گزینه انتخاب کند.',
      'مکالمه‌ی خرید را با Sonst noch etwas؟ و Das ist alles. تمام کند.',
      'پایان صفت را بعد از ein/eine/kein/keine در Nominativ بسازد.',
      'پایان صفت را بعد از einen/ein/eine/keine در Akkusativ بسازد.',
      'پایان صفت را بعد از mit einem/einer در Dativ بسازد.',
      'جمله‌های ساده‌ی خرید را با ترتیب درست کلمات بسازد.',
    ],
  },

  keySentences: [
    {
      titleFa: 'سفارش دادن در فروشگاه',
      sentences: [
        { de: 'Was darf es sein?', fa: 'چی میل دارید؟ / چی برایتان بیاورم؟' },
        { de: 'Ich hätte gern 250 Gramm Käse.', fa: 'لطفاً ۲۵۰ گرم پنیر می‌خواهم.' },
        { de: 'Wie viel darf es sein?', fa: 'چه مقدار می‌خواهید؟' },
        { de: 'Sonst noch etwas?', fa: 'چیز دیگری هم می‌خواهید؟' },
        { de: 'Das ist alles, danke.', fa: 'همین کافی است، ممنون.' },
      ],
    },
    {
      titleFa: 'انتخاب بین دو گزینه',
      sentences: [
        { de: 'Möchten Sie lieber einen milden oder einen harten Käse?', fa: 'پنیر ملایم را ترجیح می‌دهید یا پنیر تند را؟' },
        { de: 'Einen milden, bitte.', fa: 'لطفاً پنیر ملایم.' },
        { de: 'Dann nehme ich den frischen.', fa: 'پس آن تازه را برمی‌دارم.' },
        { de: 'Ich möchte lieber einen weichen Käse.', fa: 'من ترجیح می‌دهم پنیر نرم بگیرم.' },
      ],
    },
    {
      titleFa: 'مواد غذایی و مقدار',
      sentences: [
        { de: 'Ich brauche ein Kilo Mehl.', fa: 'به یک کیلو آرد نیاز دارم.' },
        { de: 'Wir haben keine rohen Eier.', fa: 'ما تخم‌مرغ خام نداریم.' },
        { de: 'Das ist ein frisches Brot.', fa: 'این یک نان تازه است.' },
        { de: 'Ich kaufe eine Flasche Orangensaft.', fa: 'من یک بطری آب‌پرتقال می‌خرم.' },
      ],
    },
  ],

  grammar: [
    {
      id: 'adjektiv-nominativ',
      titleDe: 'Adjektivdeklination im Nominativ',
      titleFa: 'پایان صفت بعد از ein/kein در Nominativ',
      explanationFa:
        'وقتی صفت قبل از اسم می‌آید و جمله با Das ist … اسم را معرفی می‌کند (Nominativ)، پایان صفت جنس اسم را نشان می‌دهد: مذکر -er، خنثی -es، مؤنث/جمع -e.',
      table: {
        headers: ['جنس اسم', 'پایان صفت', 'مثال'],
        rows: [
          ['مذکر (der)', '-er', 'ein magerer Schinken'],
          ['خنثی (das)', '-es', 'ein helles Brot'],
          ['مؤنث (die)', '-e', 'eine grüne Paprika'],
          ['جمع', '-en', 'keine rohen Eier'],
        ],
      },
      examples: [
        { de: 'Das ist ein magerer Schinken.', fa: 'این یک ژامبون کم‌چرب است.' },
        { de: 'Das ist ein helles Brot.', fa: 'این یک نان روشن است.' },
        { de: 'Das ist eine grüne Paprika.', fa: 'این یک فلفل‌دلمه‌ای سبز است.' },
        { de: 'Das sind keine rohen Eier.', fa: 'این‌ها تخم‌مرغ خام نیستند.' },
      ],
      note: 'Nominativ معمولاً وقتی به‌کار می‌رود که چیزی را فقط معرفی یا توصیف می‌کنیم: Das ist …',
    },
    {
      id: 'adjektiv-akkusativ',
      titleDe: 'Adjektivdeklination im Akkusativ',
      titleFa: 'پایان صفت بعد از einen/ein/eine در Akkusativ',
      explanationFa:
        'وقتی چیزی را سفارش می‌دهیم یا می‌خریم (Ich nehme … / Ich hätte gern …)، از Akkusativ استفاده می‌کنیم. فقط برای اسم مذکر پایان صفت تغییر می‌کند: -er در Nominativ به -en در Akkusativ.',
      table: {
        headers: ['جنس اسم', 'پایان صفت', 'مثال'],
        rows: [
          ['مذکر (der)', '-en', 'einen mageren Schinken'],
          ['خنثی (das)', '-es', 'ein helles Brot'],
          ['مؤنث (die)', '-e', 'eine grüne Paprika'],
          ['جمع', '-en', 'keine rohen Eier'],
        ],
      },
      examples: [
        { de: 'Ich hätte gern einen mageren Schinken.', fa: 'لطفاً یک ژامبون کم‌چرب می‌خواهم.' },
        { de: 'Ich nehme ein helles Brot.', fa: 'من یک نان روشن برمی‌دارم.' },
        { de: 'Ich brauche eine grüne Paprika.', fa: 'به یک فلفل‌دلمه‌ای سبز نیاز دارم.' },
        { de: 'Ich kaufe keine rohen Eier.', fa: 'من تخم‌مرغ خام نمی‌خرم.' },
      ],
      note: 'در Akkusativ فقط حالت مذکر تغییر مهم دارد: einen mageren Schinken — بقیه جنس‌ها مثل Nominativ هستند.',
    },
    {
      id: 'nominativ-oder-akkusativ',
      titleDe: 'Nominativ oder Akkusativ?',
      titleFa: 'کدام جمله Nominativ است و کدام Akkusativ؟',
      explanationFa: 'Das ist … معمولاً Nominativ است (معرفی کردن چیزی)، اما Ich nehme … / Ich hätte gern … / Ich brauche … معمولاً Akkusativ می‌خواهند (سفارش دادن یا خریدن چیزی).',
      examples: [
        { de: 'Das ist ein frischer Saft.', fa: 'این یک آب‌میوه‌ی تازه است. — Nominativ' },
        { de: 'Ich nehme einen frischen Saft.', fa: 'من یک آب‌میوه‌ی تازه برمی‌دارم. — Akkusativ' },
        { de: 'Das ist eine kleine Packung.', fa: 'این یک بسته‌ی کوچک است. — Nominativ' },
        { de: 'Ich brauche eine kleine Packung.', fa: 'به یک بسته‌ی کوچک نیاز دارم. — Akkusativ' },
      ],
    },
    {
      id: 'adjektiv-dativ',
      titleDe: 'Adjektivdeklination im Dativ',
      titleFa: 'پایان صفت بعد از mit einem/einer در Dativ',
      explanationFa: 'بعد از حرف اضافه‌ی mit و مقاله‌ی نامعین einem (مذکر/خنثی) یا einer (مؤنث)، صفت تقریباً همیشه پایان -en می‌گیرد.',
      table: {
        headers: ['Dativ', 'مثال'],
        rows: [
          ['mit einem + صفت + اسم مذکر/خنثی', 'mit einem mageren Schinken'],
          ['mit einer + صفت + اسم مؤنث', 'mit einer frischen Milch'],
        ],
      },
      examples: [
        { de: 'mit einem mageren Schinken', fa: 'با یک ژامبون کم‌چرب' },
        { de: 'mit einem hellen Brot', fa: 'با یک نان روشن' },
        { de: 'mit einer grünen Paprika', fa: 'با یک فلفل‌دلمه‌ای سبز' },
        { de: 'mit einer frischen Milch', fa: 'با یک شیر تازه' },
      ],
      note: 'در Dativ بعد از einem/einer معمولاً صفت پایان -en می‌گیرد — ساده‌تر از Nominativ و Akkusativ.',
    },
  ],

  vocabulary: [
    {
      id: 'lebensmittel',
      titleFa: 'مواد غذایی',
      items: [
        { de: 'die Banane', fa: 'موز' },
        { de: 'die Birne', fa: 'گلابی' },
        { de: 'das Mehl', fa: 'آرد' },
        { de: 'die Marmelade', fa: 'مربا' },
        { de: 'das Getränk', fa: 'نوشیدنی' },
        { de: 'der Saft', fa: 'آبمیوه' },
        { de: 'der Käse', fa: 'پنیر' },
        { de: 'der Schinken', fa: 'ژامبون' },
        { de: 'das Brot', fa: 'نان' },
        { de: 'das Brötchen', fa: 'نان کوچک / نان صبحانه' },
        { de: 'das Ei / die Eier', fa: 'تخم‌مرغ' },
        { de: 'die Tomate', fa: 'گوجه‌فرنگی' },
      ],
    },
    {
      id: 'mengen-verpackungen',
      titleFa: 'مقدار و بسته‌بندی',
      items: [
        { de: 'eine Flasche', fa: 'یک بطری' },
        { de: 'ein Glas', fa: 'یک شیشه / یک لیوان' },
        { de: 'ein Kilo', fa: 'یک کیلو' },
        { de: 'eine Dose', fa: 'یک قوطی کنسرو' },
        { de: 'ein Liter', fa: 'یک لیتر' },
        { de: '100 Gramm', fa: '۱۰۰ گرم' },
        { de: 'eine Packung', fa: 'یک بسته' },
        { de: 'eine Tüte', fa: 'یک کیسه' },
        { de: 'ein Pfund', fa: 'نیم کیلو (پوند آلمانی)' },
        { de: 'eine Portion', fa: 'یک پرس' },
      ],
    },
    {
      id: 'adjektive-essen',
      titleFa: 'صفت‌های مربوط به غذا',
      items: [
        { de: 'hart', fa: 'سخت / سفت' },
        { de: 'weich', fa: 'نرم' },
        { de: 'fett', fa: 'چرب' },
        { de: 'fettarm / mager', fa: 'کم‌چرب' },
        { de: 'roh', fa: 'خام' },
        { de: 'gekocht', fa: 'پخته' },
        { de: 'frisch', fa: 'تازه' },
        { de: 'mild', fa: 'ملایم' },
        { de: 'teuer', fa: 'گران' },
        { de: 'billig', fa: 'ارزان' },
      ],
    },
  ],

  redemittel: [
    {
      titleFa: 'سفارش دادن',
      phrases: [
        { de: 'Was darf es sein?', fa: 'چی میل دارید؟' },
        { de: 'Ich hätte gern …', fa: 'لطفاً … می‌خواهم.' },
        { de: 'Wie viel darf es sein?', fa: 'چه مقدار می‌خواهید؟' },
      ],
    },
    {
      titleFa: 'انتخاب و ترجیح',
      phrases: [
        { de: 'Möchten Sie lieber … oder …?', fa: '… را ترجیح می‌دهید یا …؟' },
        { de: 'Dann nehme ich …', fa: 'پس … را برمی‌دارم.' },
        { de: 'Ich möchte lieber …', fa: 'من ترجیح می‌دهم …' },
      ],
    },
    {
      titleFa: 'پایان خرید',
      phrases: [
        { de: 'Sonst noch etwas?', fa: 'چیز دیگری هم می‌خواهید؟' },
        { de: 'Das ist alles, danke.', fa: 'همین کافی است، ممنون.' },
      ],
    },
  ],

  dialogues: [
    {
      id: 'dialog-kaese-kaufen',
      titleFa: 'مکالمه خرید پنیر',
      lines: [
        { speaker: 'A', de: 'Guten Tag. Was darf es sein?', fa: 'سلام. چی میل دارید؟' },
        { speaker: 'B', de: 'Ich hätte gern 250 Gramm Käse.', fa: 'لطفاً ۲۵۰ گرم پنیر می‌خواهم.' },
        { speaker: 'A', de: 'Möchten Sie lieber einen milden oder einen harten Käse?', fa: 'پنیر ملایم را ترجیح می‌دهید یا پنیر تند را؟' },
        { speaker: 'B', de: 'Einen milden, bitte.', fa: 'لطفاً پنیر ملایم.' },
        { speaker: 'A', de: 'Sonst noch etwas?', fa: 'چیز دیگری هم می‌خواهید؟' },
        { speaker: 'B', de: 'Ja, ein helles Brot bitte.', fa: 'بله، یک نان روشن هم لطفاً.' },
        { speaker: 'A', de: 'Sehr gern.', fa: 'با کمال میل.' },
        { speaker: 'B', de: 'Danke, das ist alles.', fa: 'ممنون، همین کافی است.' },
      ],
    },
    {
      id: 'dialog-fruehstueck-cafe',
      titleFa: 'مکالمه در کافه صبحانه',
      lines: [
        { speaker: 'A', de: 'Was darf ich Ihnen bringen?', fa: 'چی برایتان بیاورم؟' },
        { speaker: 'B', de: 'Ich hätte gern ein kleines Frühstück.', fa: 'لطفاً یک صبحانه‌ی کوچک می‌خواهم.' },
        { speaker: 'A', de: 'Möchten Sie Kaffee oder Tee?', fa: 'قهوه می‌خواهید یا چای؟' },
        { speaker: 'B', de: 'Einen grünen Tee, bitte.', fa: 'یک چای سبز، لطفاً.' },
        { speaker: 'A', de: 'Möchten Sie ein Ei dazu?', fa: 'یک تخم‌مرغ هم همراهش می‌خواهید؟' },
        { speaker: 'B', de: 'Ja, ein weich gekochtes Ei bitte.', fa: 'بله، یک تخم‌مرغ نیم‌پز لطفاً.' },
        { speaker: 'A', de: 'Sehr gern.', fa: 'با کمال میل.' },
        { speaker: 'B', de: 'Danke.', fa: 'ممنون.' },
      ],
    },
    {
      id: 'dialog-zwei-optionen',
      titleFa: 'مکالمه انتخاب بین دو چیز',
      lines: [
        { speaker: 'A', de: 'Möchten Sie lieber normale Tomaten oder Cocktailtomaten?', fa: 'گوجه‌فرنگی معمولی را ترجیح می‌دهید یا گوجه‌فرنگی کوچک را؟' },
        { speaker: 'B', de: 'Was kosten die Cocktailtomaten?', fa: 'گوجه‌فرنگی کوچک چقدر است؟' },
        { speaker: 'A', de: '2,80 Euro pro Kilo.', fa: '۲٫۸۰ یورو هر کیلو.' },
        { speaker: 'B', de: 'Dann geben Sie mir bitte ein Pfund Cocktailtomaten.', fa: 'پس لطفاً نیم کیلو گوجه‌فرنگی کوچک بدهید.' },
        { speaker: 'A', de: 'Sonst noch etwas?', fa: 'چیز دیگری هم می‌خواهید؟' },
        { speaker: 'B', de: 'Ja, eine Flasche Orangensaft.', fa: 'بله، یک بطری آب‌پرتقال هم.' },
        { speaker: 'A', de: 'Frisch gepresst oder normal?', fa: 'تازه‌گرفته‌شده یا معمولی؟' },
        { speaker: 'B', de: 'Den frischen, bitte.', fa: 'آن تازه‌گرفته‌شده، لطفاً.' },
      ],
    },
  ],

  sampleStory: {
    de: 'Heute gehe ich einkaufen. Ich brauche ein Kilo Mehl, eine Packung Milch und 250 Gramm Käse. An der Käsetheke fragt der Verkäufer: Möchten Sie lieber einen milden oder einen harten Käse? Ich nehme den milden. Dann brauche ich noch ein helles Brot und eine Flasche Orangensaft. An der Kasse sage ich: Das ist alles, danke.',
    fa: 'امروز می‌روم خرید. به یک کیلو آرد، یک بسته شیر و ۲۵۰ گرم پنیر نیاز دارم. کنار پیشخوان پنیر، فروشنده می‌پرسد: پنیر ملایم را ترجیح می‌دهید یا پنیر تند را؟ من پنیر ملایم را برمی‌دارم. بعد به یک نان روشن و یک بطری آب‌پرتقال هم نیاز دارم. کنار صندوق می‌گویم: همین کافی است، ممنون.',
  },

  summaryClosingFa:
    'درس ۴ A2.1 درباره‌ی خرید، مواد غذایی، مقدار و بسته‌بندی و سفارش دادن در فروشگاه یا کافه است. در این درس یاد گرفتیم با Ich hätte gern … سفارش بدهیم، با Möchten Sie lieber … oder …؟ بین دو گزینه انتخاب کنیم و یک خرید را با Sonst noch etwas؟ و Das ist alles. تمام کنیم. مهم‌ترین بخش گرامر درس، پایان صفت بعد از ein/kein/mein در Nominativ، Akkusativ و Dativ بود. این درس برای A2 خیلی مهم است، چون زبان‌آموز از اینجا به بعد باید بتواند یک خرید کامل و طبیعی در آلمانی انجام بدهد.',
  summaryTopics: [
    'واژگان مواد غذایی',
    'مقدار و بسته‌بندی',
    'Ich hätte gern …',
    'Möchten Sie lieber … oder …؟',
    'Sonst noch etwas؟ / Das ist alles.',
    'Adjektivdeklination im Nominativ',
    'Adjektivdeklination im Akkusativ',
    'Adjektivdeklination im Dativ',
    'خرید در فروشگاه و کافه',
  ],
}
