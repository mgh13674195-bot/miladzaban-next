import { LessonNotes } from '@/types/lessonNotes'

/**
 * A2.1 — Lektion 9: Bei guten Autos sind wir ganz vorn (Arbeitsleben, Firma,
 * Produktion, Import/Export, Adjektivdeklination ohne Artikel)
 * Structured from the lesson-notes source markdown. Independent educational
 * content — not a copy of any coursebook layout.
 */
export const lesson9Notes: LessonNotes = {
  lessonId: 9,
  topic: 'Arbeitsleben',
  titleFa: 'زندگی کاری، شرکت و تولید، بیان اهمیت در شغل، صفت بدون حرف تعریف',

  summary: {
    introFa:
      'در این درس درباره‌ی زندگی کاری، شغل‌ها، محل کار، تولید، شرکت و واردات/صادرات صحبت می‌کنیم. یاد می‌گیریم چطور بگوییم چه چیزی برایمان در یک شغل مهم است — مثل حقوق خوب، ساعت کاری منعطف، کار تیمی یا کار مستقل. همچنین گرامر مهم این درس، یعنی صرف صفت بدون حرف تعریف (Adjektivdeklination ohne Artikel) را در حالت‌های Nominativ، Akkusativ و Dativ یاد می‌گیریم.',
    goals: [
      'واژگان زندگی کاری مثل Arbeiter, Angestellte, Lohn, Arbeitszeit را به‌کار ببرد.',
      'واژگان شرکت و تولید مثل Firma, Betrieb, Werk, Produktion, Lager, Halle را بشناسد.',
      'واژگان اقتصادی مثل Import, Export, importieren, exportieren را به‌کار ببرد.',
      'پایان‌های صفت بدون حرف تعریف را در Nominativ تشخیص دهد و بسازد.',
      'پایان‌های صفت بدون حرف تعریف را در Akkusativ تشخیص دهد و بسازد.',
      'پایان‌های صفت بدون حرف تعریف را در Dativ تشخیص دهد و بسازد.',
      'با Was ist dir im Job wichtig؟ درباره‌ی اهمیت چیزها در شغل بپرسد و پاسخ دهد.',
      'با Mir ist … wichtig و Mir ist … nicht so wichtig نظر خود را بیان کند.',
      'درباره‌ی شغل دلخواه (Traumjob) و محل کار ایده‌آل صحبت کند.',
      'یک متن کوتاه درباره‌ی محل کار ایده‌آل خودش بنویسد.',
    ],
  },

  keySentences: [
    {
      titleFa: 'محل کار و شرکت',
      sentences: [
        { de: 'In unserem Werk arbeiten viele Mitarbeiter.', fa: 'در کارخانه‌ی ما کارمندان زیادی کار می‌کنند.' },
        { de: 'Die Firma produziert kleine Maschinen.', fa: 'شرکت ماشین‌های کوچک تولید می‌کند.' },
        { de: 'Viele Autos gehen in den Export.', fa: 'بسیاری از خودروها صادر می‌شوند.' },
      ],
    },
    {
      titleFa: 'اهمیت دادن در شغل',
      sentences: [
        { de: 'Guter Lohn ist mir sehr wichtig.', fa: 'حقوق خوب برایم خیلی مهم است.' },
        { de: 'Flexible Arbeitszeit ist mir auch wichtig.', fa: 'ساعت کاری منعطف هم برایم مهم است.' },
        { de: 'Ich möchte nicht unter großem Stress arbeiten.', fa: 'نمی‌خواهم تحت استرس زیاد کار کنم.' },
      ],
    },
    {
      titleFa: 'سبک کار',
      sentences: [
        { de: 'Ich arbeite gern im Team.', fa: 'من با علاقه در تیم کار می‌کنم.' },
        { de: 'Ich arbeite gern selbstständig.', fa: 'من با علاقه مستقل کار می‌کنم.' },
        { de: 'Ich arbeite mit netten Kollegen.', fa: 'من با همکارهای خوبی کار می‌کنم.' },
      ],
    },
    {
      titleFa: 'صفت بدون حرف تعریف',
      sentences: [
        { de: 'Wir suchen freundliche Mitarbeiter.', fa: 'ما به دنبال همکاران مهربان هستیم.' },
        { de: 'Internationaler Betrieb sucht neue Mitarbeiter.', fa: 'یک شرکت بین‌المللی به دنبال کارمندان جدید است.' },
      ],
    },
  ],

  grammar: [
    {
      id: 'adjektiv-ohne-artikel',
      titleDe: 'Adjektivdeklination ohne Artikel',
      titleFa: 'صرف صفت بدون حرف تعریف',
      explanationFa: 'وقتی قبل از صفت هیچ حرف تعریفی (der/die/das یا ein) نیاید، خودِ صفت پایانی می‌گیرد که نشان‌دهنده‌ی جنسیت، شمار و حالت (نقش) اسم بعدی است. این ساختار معمولاً در آگهی‌های کاری، عنوان‌ها و جمله‌های کلی به‌کار می‌رود.',
      note: 'این پایان‌ها همان پایان‌های حرف تعریف معین (der, das, die, die) هستند که به‌جای حرف تعریف، به خود صفت اضافه می‌شوند.',
    },
    {
      id: 'nominativ-ohne-artikel',
      titleDe: 'Nominativ ohne Artikel',
      titleFa: 'Nominativ بدون حرف تعریف',
      explanationFa: 'در Nominativ، صفت پایان -er (مذکر)، -es (خنثی)، -e (مؤنث) و -e (جمع) می‌گیرد.',
      table: {
        headers: ['جنسیت/شمار', 'مثال'],
        rows: [
          ['مذکر (-er)', 'guter Lohn'],
          ['خنثی (-es)', 'großes Lager'],
          ['مؤنث (-e)', 'flexible Arbeitszeit'],
          ['جمع (-e)', 'kleine Büros'],
        ],
      },
      examples: [
        { de: 'Guter Lohn ist mir wichtig.', fa: 'حقوق خوب برایم مهم است.' },
        { de: 'Großes Lager ist modern.', fa: 'انبار بزرگ مدرن است.' },
        { de: 'Flexible Arbeitszeit passt gut zu mir.', fa: 'ساعت کاری منعطف به من می‌خورد.' },
        { de: 'Kleine Büros sind auch wichtig.', fa: 'دفترهای کوچک هم مهم هستند.' },
      ],
    },
    {
      id: 'akkusativ-ohne-artikel',
      titleDe: 'Akkusativ ohne Artikel',
      titleFa: 'Akkusativ بدون حرف تعریف',
      explanationFa: 'در Akkusativ، صفت مذکر پایان -en می‌گیرد، اما خنثی، مؤنث و جمع مثل Nominativ باقی می‌مانند (-es, -e, -e).',
      table: {
        headers: ['جنسیت/شمار', 'مثال'],
        rows: [
          ['مذکر (-en)', 'interessanten Job'],
          ['خنثی (-es)', 'großes Lager'],
          ['مؤنث (-e)', 'flexible Arbeitszeit'],
          ['جمع (-e)', 'kleine Büros'],
        ],
      },
      examples: [
        { de: 'Ich suche interessanten Job.', fa: 'من به دنبال شغل جالبی هستم.' },
        { de: 'Die Firma bietet guten Lohn.', fa: 'شرکت حقوق خوبی پیشنهاد می‌دهد.' },
        { de: 'Ich möchte flexible Arbeitszeit.', fa: 'من ساعت کاری منعطف می‌خواهم.' },
        { de: 'Wir suchen kleine Büros.', fa: 'ما به دنبال دفترهای کوچک هستیم.' },
        { de: 'Wir brauchen kleinen Lkw.', fa: 'ما به یک کامیون کوچک نیاز داریم.' },
      ],
      note: 'فقط مذکر در Akkusativ تغییر می‌کند (-er → -en)؛ بقیه مثل Nominativ هستند.',
    },
    {
      id: 'dativ-ohne-artikel',
      titleDe: 'Dativ ohne Artikel',
      titleFa: 'Dativ بدون حرف تعریف',
      explanationFa: 'در Dativ، صفت در همه‌ی جنسیت‌ها و جمع پایان -em (مذکر/خنثی)، -er (مؤنث) یا -en (جمع) می‌گیرد.',
      table: {
        headers: ['جنسیت/شمار', 'مثال'],
        rows: [
          ['مذکر (-em)', 'gutem Lohn'],
          ['خنثی (-em)', 'großem Lager'],
          ['مؤنث (-er)', 'flexibler Arbeitszeit'],
          ['جمع (-en)', 'kleinen Büros'],
        ],
      },
      examples: [
        { de: 'Ich arbeite mit netten Kollegen.', fa: 'من با همکارهای خوبی کار می‌کنم.' },
        { de: 'Wir sprechen über Arbeit in großem Betrieb.', fa: 'ما درباره‌ی کار در یک شرکت بزرگ صحبت می‌کنیم.' },
        { de: 'Er fährt mit neuem Lkw.', fa: 'او با یک کامیون جدید رانندگی می‌کند.' },
        { de: 'Sie arbeitet seit Jahren in internationaler Firma.', fa: 'او سال‌هاست در یک شرکت بین‌المللی کار می‌کند.' },
        { de: 'Ich bin mit flexibler Arbeitszeit zufrieden.', fa: 'من از ساعت کاری منعطف راضی هستم.' },
      ],
      note: 'در گفتار روزمره معمولاً می‌گوییم «in einer internationalen Firma»، اما در این درس ساختار بدون حرف تعریف را تمرین می‌کنیم.',
    },
    {
      id: 'nominativ-akkusativ-dativ-vergleich',
      titleDe: 'Nominativ, Akkusativ oder Dativ?',
      titleFa: 'مقایسه‌ی سه حالت بدون حرف تعریف',
      explanationFa: 'این جدول پایان‌های صفت بدون حرف تعریف را در هر سه حالت با هم مقایسه می‌کند.',
      table: {
        headers: ['حالت', 'مذکر', 'خنثی', 'مؤنث', 'جمع'],
        rows: [
          ['Nominativ', '-er', '-es', '-e', '-e'],
          ['Akkusativ', '-en', '-es', '-e', '-e'],
          ['Dativ', '-em', '-em', '-er', '-en'],
        ],
      },
      note: 'فقط مذکر بین Nominativ و Akkusativ فرق می‌کند (-er → -en)؛ Dativ در همه‌ی جنسیت‌ها و جمع متفاوت است.',
    },
  ],

  vocabulary: [
    {
      id: 'arbeitsleben-berufe',
      titleFa: 'زندگی کاری و شغل‌ها',
      items: [
        { de: 'der Arbeiter', fa: 'کارگر' },
        { de: 'die / der Angestellte', fa: 'کارمند' },
        { de: 'der Beruf', fa: 'شغل / حرفه' },
        { de: 'die Arbeit', fa: 'کار' },
        { de: 'die Arbeitsbedingungen', fa: 'شرایط کاری' },
        { de: 'die Arbeitszeit', fa: 'ساعت کاری' },
        { de: 'der Lohn', fa: 'حقوق / دستمزد' },
        { de: 'das Team', fa: 'تیم' },
        { de: 'selbstständig', fa: 'مستقل' },
      ],
    },
    {
      id: 'firma-betrieb-produktion',
      titleFa: 'شرکت، کارخانه و تولید',
      items: [
        { de: 'die Firma', fa: 'شرکت' },
        { de: 'der Betrieb', fa: 'مجموعه‌ی کاری / شرکت' },
        { de: 'das Werk', fa: 'کارخانه' },
        { de: 'die Produktion', fa: 'تولید' },
        { de: 'das Lager', fa: 'انبار' },
        { de: 'die Halle', fa: 'سالن (کارخانه)' },
        { de: 'die Maschine', fa: 'ماشین / دستگاه' },
        { de: 'der Lkw', fa: 'کامیون' },
      ],
    },
    {
      id: 'wirtschaft-bewegung',
      titleFa: 'اقتصاد و حرکت کالا',
      items: [
        { de: 'der Import', fa: 'واردات' },
        { de: 'der Export', fa: 'صادرات' },
        { de: 'importieren', fa: 'وارد کردن' },
        { de: 'exportieren', fa: 'صادر کردن' },
        { de: 'das Ausland', fa: 'خارج از کشور' },
        { de: 'der Erfolg', fa: 'موفقیت' },
      ],
    },
    {
      id: 'adjektiv-phrasen',
      titleFa: 'عبارت‌های صفت‌دار پرکاربرد',
      items: [
        { de: 'guter Lohn', fa: 'حقوق خوب' },
        { de: 'flexible Arbeitszeit', fa: 'ساعت کاری منعطف' },
        { de: 'nette Kollegen', fa: 'همکارهای خوب' },
        { de: 'gute Arbeitsbedingungen', fa: 'شرایط کاری خوب' },
        { de: 'internationaler Betrieb', fa: 'شرکت بین‌المللی' },
        { de: 'kleine Büros', fa: 'دفترهای کوچک' },
      ],
    },
  ],

  redemittel: [
    {
      titleFa: 'بیان اهمیت',
      phrases: [
        { de: 'Was ist dir im Job wichtig?', fa: 'در شغل چه چیزی برایت مهم است؟' },
        { de: 'Ist dir das wichtig?', fa: 'این برایت مهم است؟' },
        { de: 'Ja, das ist mir sehr wichtig.', fa: 'بله، این برایم خیلی مهم است.' },
        { de: 'Mir ist das auch wichtig.', fa: 'این برای من هم مهم است.' },
        { de: 'Mir ist das nicht so wichtig.', fa: 'این برایم زیاد مهم نیست.' },
      ],
    },
    {
      titleFa: 'صحبت درباره‌ی خواسته‌های شغلی',
      phrases: [
        { de: 'Ich möchte gern …', fa: 'من دوست دارم …' },
        { de: 'Ich möchte nicht gern …', fa: 'دوست ندارم …' },
        { de: 'Guter Lohn ist mir sehr wichtig.', fa: 'حقوق خوب برایم خیلی مهم است.' },
        { de: 'Flexible Arbeitszeit ist mir wichtig.', fa: 'ساعت کاری منعطف برایم مهم است.' },
      ],
    },
    {
      titleFa: 'صحبت درباره‌ی محل و شیوه‌ی کار',
      phrases: [
        { de: 'Ich arbeite gern im Team.', fa: 'من با علاقه در تیم کار می‌کنم.' },
        { de: 'Ich arbeite gern selbstständig.', fa: 'من با علاقه مستقل کار می‌کنم.' },
        { de: 'Ich arbeite gern draußen / drinnen.', fa: 'من با علاقه بیرون / داخل کار می‌کنم.' },
      ],
    },
  ],

  dialogues: [
    {
      id: 'dialog-job-wichtig',
      titleFa: 'مکالمه درباره‌ی اهمیت در شغل',
      lines: [
        { speaker: 'A', de: 'Was ist dir im Job wichtig?', fa: 'در شغل چه چیزی برایت مهم است؟' },
        { speaker: 'B', de: 'Guter Lohn ist mir sehr wichtig. Und dir?', fa: 'حقوق خوب برایم خیلی مهم است. برای تو چی؟' },
        { speaker: 'A', de: 'Mir ist flexible Arbeitszeit wichtiger.', fa: 'برای من ساعت کاری منعطف مهم‌تر است.' },
        { speaker: 'B', de: 'Arbeitest du lieber im Team?', fa: 'تو ترجیح می‌دهی در تیم کار کنی؟' },
        { speaker: 'A', de: 'Ja, ich arbeite gern im Team. Aber manchmal arbeite ich auch gern selbstständig.', fa: 'بله، من با علاقه در تیم کار می‌کنم. اما گاهی هم با علاقه مستقل کار می‌کنم.' },
      ],
    },
    {
      id: 'dialog-traumjob',
      titleFa: 'مکالمه درباره‌ی شغل دلخواه',
      lines: [
        { speaker: 'A', de: 'Was ist dein Traumjob?', fa: 'شغل دلخواهت چیست؟' },
        { speaker: 'B', de: 'Ich möchte gern in einer internationalen Firma arbeiten.', fa: 'من دوست دارم در یک شرکت بین‌المللی کار کنم.' },
        { speaker: 'A', de: 'Arbeitest du lieber drinnen oder draußen?', fa: 'ترجیح می‌دهی داخل یا بیرون کار کنی؟' },
        { speaker: 'B', de: 'Lieber drinnen, aber nicht den ganzen Tag.', fa: 'ترجیح می‌دهم داخل، اما نه تمام روز.' },
        { speaker: 'A', de: 'Ist dir ein großes Büro wichtig?', fa: 'یک دفتر بزرگ برایت مهم است؟' },
        { speaker: 'B', de: 'Nicht so wichtig. Nette Kollegen sind mir wichtiger.', fa: 'زیاد مهم نیست. همکارهای خوب برایم مهم‌ترند.' },
      ],
    },
    {
      id: 'dialog-beruf-raten',
      titleFa: 'مکالمه‌ی حدس‌زدن شغل با بله/نه',
      lines: [
        { speaker: 'A', de: 'Arbeite ich in einem Büro?', fa: 'من در یک دفتر کار می‌کنم؟' },
        { speaker: 'B', de: 'Ja.', fa: 'بله.' },
        { speaker: 'A', de: 'Habe ich studiert?', fa: 'من تحصیلات دانشگاهی دارم؟' },
        { speaker: 'B', de: 'Ja.', fa: 'بله.' },
        { speaker: 'A', de: 'Arbeite ich mit Computern?', fa: 'با کامپیوتر کار می‌کنم؟' },
        { speaker: 'B', de: 'Ja, oft.', fa: 'بله، اغلب.' },
        { speaker: 'A', de: 'Bin ich Ingenieur?', fa: 'من مهندس هستم؟' },
        { speaker: 'B', de: 'Vielleicht! Sehr nah!', fa: 'شاید! خیلی نزدیکی!' },
      ],
    },
  ],

  sampleStory: {
    de: 'Mein idealer Arbeitsplatz. Ich möchte später in einem internationalen Betrieb arbeiten. Ich arbeite gern im Team, aber auch manchmal selbstständig. Guter Lohn und flexible Arbeitszeit sind mir sehr wichtig. Ein großes Büro ist mir nicht so wichtig. Ich möchte nette Kollegen und gute Arbeitsbedingungen haben. Ich möchte interessante Aufgaben und nicht zu viel Stress.',
    fa: 'محل کار ایده‌آل من. من می‌خواهم بعدها در یک شرکت بین‌المللی کار کنم. من با علاقه در تیم کار می‌کنم، اما گاهی هم مستقل. حقوق خوب و ساعت کاری منعطف برایم خیلی مهم هستند. یک دفتر بزرگ برایم زیاد مهم نیست. می‌خواهم همکارهای خوب و شرایط کاری خوب داشته باشم. می‌خواهم وظایف جالب داشته باشم و استرس زیادی نداشته باشم.',
  },

  summaryClosingFa:
    'درس ۹ A2.1 درباره‌ی زندگی کاری، شرکت، تولید، واردات و صادرات و بیان اهمیت در شغل است. در این درس واژگان مهم مثل Arbeiter, Lohn, Firma, Betrieb, Werk, Import, Export را یاد گرفتیم. گرامر اصلی این درس صرف صفت بدون حرف تعریف بود — در Nominativ پایان‌های -er/-es/-e/-e، در Akkusativ فقط مذکر به -en تغییر می‌کند، و در Dativ پایان‌های -em/-em/-er/-en به‌کار می‌روند. همچنین یاد گرفتیم با Was ist dir wichtig؟ و Mir ist … wichtig درباره‌ی اولویت‌های شغلی صحبت کنیم و درباره‌ی شغل دلخواه‌مان بنویسیم.',
  summaryTopics: [
    'واژگان زندگی کاری و شغل‌ها',
    'واژگان شرکت، کارخانه و تولید',
    'واژگان واردات و صادرات',
    'Adjektivdeklination ohne Artikel — Nominativ',
    'Adjektivdeklination ohne Artikel — Akkusativ',
    'Adjektivdeklination ohne Artikel — Dativ',
    'Was ist dir im Job wichtig؟',
    'Mir ist … (nicht so) wichtig.',
    'صحبت درباره‌ی Traumjob',
    'نوشتن درباره‌ی محل کار ایده‌آل',
  ],
}
