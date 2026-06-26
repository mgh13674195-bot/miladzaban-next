import { LessonNotes } from '@/types/lessonNotes'

/**
 * A2.1 — Lektion 8: Hoffentlich ist es nicht das Herz! (Krankheit, Unfall,
 * Notfall, Gefühle ausdrücken, Kausalsätze mit weil/deshalb/denn)
 * Structured from the lesson-notes source markdown. Independent educational
 * content — not a copy of any coursebook layout.
 */
export const lesson8Notes: LessonNotes = {
  lessonId: 8,
  topic: 'Gesundheit und Krankheit',
  titleFa: 'بیماری، حادثه و اورژانس، بیان نگرانی و امیدواری، جمله‌های دلیل با weil/deshalb/denn',

  summary: {
    introFa:
      'در این درس درباره‌ی بیماری، درد، حادثه و فوریت پزشکی صحبت می‌کنیم. یاد می‌گیریم چطور درباره‌ی اعضای بدن و درد حرف بزنیم، پیش پزشک چه بگوییم، و در شرایط اورژانسی مثل Notarzt, Krankenwagen, Notaufnahme چه واژگانی به‌کار ببریم. همچنین یاد می‌گیریم با weil دلیل بیاوریم (فعل آخر جمله)، با deshalb نتیجه بگیریم (فعل جایگاه دوم) و با denn هم دلیل بیاوریم (فعل جایگاه دوم). در پایان یاد می‌گیریم نگرانی، ترس، همدردی و امیدواری را بیان کنیم.',
    goals: [
      'واژگان بدن و بیماری مثل Herz, Magen, Blut, Knie, Schmerzen را به‌کار ببرد.',
      'erkältet sein و Schmerzen haben را در جمله استفاده کند.',
      'واژگان حادثه و اورژانس مثل Notarzt, Krankenwagen, Notaufnahme, Verband را بشناسد.',
      'با پزشک درباره‌ی بیماری صحبت کند: Was fehlt Ihnen؟ Seit wann haben Sie Schmerzen؟',
      'با weil دلیل بیاورد و فعل را به آخر جمله ببرد.',
      'با deshalb نتیجه بگیرد و فعل را در جایگاه دوم بگذارد.',
      'با denn دلیل بیاورد بدون تغییر جایگاه فعل.',
      'نگرانی، ترس، همدردی و امیدواری را بیان کند: Ich mache mir Sorgen. Das tut mir leid. Hoffentlich ist es nichts Schlimmes.',
      'یک متن فروم درباره‌ی نگرانی بیماری را بخواند و بفهمد.',
      'درباره‌ی یک بیماری یا حادثه با Perfekt بنویسد.',
    ],
  },

  keySentences: [
    {
      titleFa: 'صحبت درباره‌ی درد و بیماری',
      sentences: [
        { de: 'Ich habe seit drei Tagen Bauchschmerzen.', fa: 'سه روز است که دل‌درد دارم.' },
        { de: 'Mein Knie tut weh.', fa: 'زانویم درد می‌کند.' },
        { de: 'Ich bin erkältet.', fa: 'من سرماخورده‌ام.' },
      ],
    },
    {
      titleFa: 'حادثه و اورژانس',
      sentences: [
        { de: 'Ich hatte einen Unfall.', fa: 'من یک حادثه داشتم.' },
        { de: 'Ein Mann hat den Notarzt gerufen.', fa: 'یک مرد پزشک اورژانس را خبر کرد.' },
        { de: 'Die Ärzte haben mein Knie untersucht und verbunden.', fa: 'پزشکان زانوی من را معاینه و پانسمان کردند.' },
      ],
    },
    {
      titleFa: 'نگرانی و امیدواری',
      sentences: [
        { de: 'Was ist los?', fa: 'چی شده؟' },
        { de: 'Ich mache mir Sorgen.', fa: 'من نگرانم.' },
        { de: 'Hoffentlich ist es nichts Schlimmes.', fa: 'امیدوارم چیز بدی نباشد.' },
      ],
    },
  ],

  grammar: [
    {
      id: 'weil-nebensatz',
      titleDe: 'weil + Nebensatz',
      titleFa: 'جمله‌ی دلیل با weil — فعل در آخر جمله',
      explanationFa: 'بعد از weil یک جمله‌ی فرعی می‌آید و فعل صرف‌شده به آخر آن جمله می‌رود.',
      examples: [
        { de: 'Ich gehe zum Arzt, weil ich Bauchschmerzen habe.', fa: 'من به پزشک می‌روم، چون دل‌درد دارم.' },
        { de: 'Julia kann nicht trainieren, weil ihr Knie weh tut.', fa: 'جولیا نمی‌تواند تمرین کند، چون زانویش درد می‌کند.' },
        { de: 'Herr Klein liegt im Krankenhaus, weil er einen Unfall hatte.', fa: 'آقای کلاین در بیمارستان بستری است، چون حادثه‌ای داشت.' },
      ],
      note: 'در جمله‌ی فرعی بعد از weil فعل صرف‌شده همیشه آخر جمله می‌آید.',
    },
    {
      id: 'deshalb-hauptsatz',
      titleDe: 'deshalb + Hauptsatz',
      titleFa: 'جمله‌ی نتیجه با deshalb — فعل در جایگاه دوم',
      explanationFa: 'deshalb یعنی «به همین دلیل / بنابراین». وقتی deshalb اول جمله بیاید، فعل صرف‌شده بعد از آن در جایگاه دوم قرار می‌گیرد.',
      examples: [
        { de: 'Ich habe starke Schmerzen. Deshalb gehe ich zum Arzt.', fa: 'من درد شدید دارم. به همین دلیل به پزشک می‌روم.' },
        { de: 'Mein Knie tut weh. Deshalb gehe ich zum Arzt.', fa: 'زانویم درد می‌کند. به همین دلیل به پزشک می‌روم.' },
        { de: 'Anna hatte einen Unfall. Deshalb liegt sie im Krankenhaus.', fa: 'آنا حادثه‌ای داشت. به همین دلیل در بیمارستان بستری است.' },
      ],
      note: 'بعد از deshalb فعل صرف‌شده در جایگاه دوم می‌آید، نه بعد از فاعل.',
    },
    {
      id: 'denn-hauptsatz',
      titleDe: 'denn + Hauptsatz',
      titleFa: 'جمله‌ی دلیل با denn — جایگاه عادی فعل',
      explanationFa: 'denn هم مثل weil دلیل را بیان می‌کند، اما بعد از denn جایگاه فعل تغییر نمی‌کند — جمله مثل یک جمله‌ی اصلی عادی است.',
      examples: [
        { de: 'Ich gehe zum Arzt, denn ich habe Bauchschmerzen.', fa: 'من به پزشک می‌روم، چون دل‌درد دارم.' },
        { de: 'Anna bleibt zu Hause, denn sie ist erkältet.', fa: 'آنا در خانه می‌ماند، چون سرماخورده است.' },
        { de: 'Tim ruft den Notarzt, denn sein Vater hat starke Schmerzen.', fa: 'تیم پزشک اورژانس را خبر می‌کند، چون پدرش درد شدید دارد.' },
      ],
      note: 'denn یک حرف ربط هم‌پایه‌ساز است؛ بعد از آن فاعل قبل از فعل می‌آید، برخلاف weil.',
    },
    {
      id: 'denn-weil-deshalb-vergleich',
      titleDe: 'denn, weil oder deshalb?',
      titleFa: 'مقایسه‌ی denn، weil و deshalb',
      explanationFa: 'denn و weil هر دو دلیل می‌آورند، اما جایگاه فعل با آن‌ها فرق دارد: بعد از denn فعل جایگاه دوم می‌ماند، بعد از weil فعل آخر جمله می‌رود. deshalb برعکس این دو، نتیجه را بیان می‌کند و خودش اول جمله‌ی نتیجه می‌آید.',
      examples: [
        { de: 'Ich kaufe Tabletten, denn ich habe Kopfschmerzen.', fa: 'من قرص می‌خرم، چون سردرد دارم.' },
        { de: 'Ich kaufe Tabletten, weil ich Kopfschmerzen habe.', fa: 'من قرص می‌خرم، چون سردرد دارم.' },
        { de: 'Ich habe Kopfschmerzen. Deshalb kaufe ich Tabletten.', fa: 'من سردرد دارم. به همین دلیل قرص می‌خرم.' },
      ],
      note: 'denn = چون (فعل جایگاه دوم) | weil = چون (فعل آخر جمله) | deshalb = بنابراین (فعل بعد از deshalb)',
    },
  ],

  vocabulary: [
    {
      id: 'koerper-krankheit',
      titleFa: 'بدن و بیماری',
      items: [
        { de: 'das Herz', fa: 'قلب' },
        { de: 'der Magen', fa: 'معده' },
        { de: 'das Blut', fa: 'خون' },
        { de: 'das Knie', fa: 'زانو' },
        { de: 'die Schmerzen', fa: 'درد' },
        { de: 'erkältet sein', fa: 'سرماخورده بودن' },
        { de: 'Schmerzen haben', fa: 'درد داشتن' },
        { de: 'das Fieber', fa: 'تب' },
        { de: 'bluten', fa: 'خون‌ریزی کردن' },
        { de: 'hinfallen', fa: 'افتادن' },
      ],
    },
    {
      id: 'unfall-notfall',
      titleFa: 'حادثه و اورژانس',
      items: [
        { de: 'der Unfall', fa: 'حادثه' },
        { de: 'der Notfall', fa: 'فوریت / اورژانس' },
        { de: 'der Notarzt', fa: 'پزشک اورژانس' },
        { de: 'der Krankenwagen', fa: 'آمبولانس' },
        { de: 'die Notaufnahme', fa: 'بخش اورژانس بیمارستان' },
        { de: 'der Verband', fa: 'پانسمان / باند' },
        { de: 'die Verletzung', fa: 'آسیب / جراحت' },
        { de: 'die Untersuchung', fa: 'معاینه' },
        { de: 'die Operation', fa: 'عمل جراحی' },
      ],
    },
    {
      id: 'gefuehle-arzt',
      titleFa: 'احساسات و مراجعه به پزشک',
      items: [
        { de: 'sich Sorgen machen', fa: 'نگران بودن' },
        { de: 'Angst haben vor …', fa: 'ترسیدن از …' },
        { de: 'das Mitleid', fa: 'همدردی / دلسوزی' },
        { de: 'die Hoffnung', fa: 'امید' },
        { de: 'vertrauen', fa: 'اعتماد کردن' },
        { de: 'die Wahrheit', fa: 'حقیقت' },
        { de: 'die Sprechstunde', fa: 'ساعت ملاقات پزشک' },
      ],
    },
  ],

  redemittel: [
    {
      titleFa: 'پرسیدن حال و نگرانی',
      phrases: [
        { de: 'Was ist los?', fa: 'چی شده؟' },
        { de: 'Ist alles in Ordnung?', fa: 'همه چیز خوب است؟' },
        { de: 'Ich mache mir Sorgen.', fa: 'من نگرانم.' },
      ],
    },
    {
      titleFa: 'همدردی و امیدواری',
      phrases: [
        { de: 'Oh, das tut mir wirklich leid.', fa: 'اوه، واقعاً متأسفم.' },
        { de: 'Hoffentlich hast du nichts Schlimmes.', fa: 'امیدوارم چیز بدی نداشته باشی.' },
        { de: 'Ich hoffe, es ist alles in Ordnung.', fa: 'امیدوارم همه چیز خوب باشد.' },
      ],
    },
    {
      titleFa: 'پیش پزشک',
      phrases: [
        { de: 'Was fehlt Ihnen?', fa: 'چه مشکلی دارید؟' },
        { de: 'Seit wann haben Sie Schmerzen?', fa: 'از کی درد دارید؟' },
        { de: 'Ich habe Angst vor der Untersuchung.', fa: 'من از معاینه می‌ترسم.' },
      ],
    },
  ],

  dialogues: [
    {
      id: 'dialog-sorge-schmerzen',
      titleFa: 'مکالمه نگرانی درباره درد',
      lines: [
        { speaker: 'A', de: 'Du siehst nicht gut aus. Was ist los?', fa: 'حالت خوب به نظر نمی‌رسد. چی شده؟' },
        { speaker: 'B', de: 'Ich habe seit gestern starke Bauchschmerzen.', fa: 'از دیروز دل‌درد شدید دارم.' },
        { speaker: 'A', de: 'Oh, das tut mir leid. Warst du schon beim Arzt?', fa: 'اوه، متأسفم. پیش پزشک رفتی؟' },
        { speaker: 'B', de: 'Nein, noch nicht. Ich habe Angst vor der Untersuchung.', fa: 'نه، هنوز نه. من از معاینه می‌ترسم.' },
        { speaker: 'A', de: 'Du solltest zum Arzt gehen. Hoffentlich ist es nichts Schlimmes.', fa: 'بهتر است پیش پزشک بروی. امیدوارم چیز بدی نباشد.' },
        { speaker: 'B', de: 'Ja, ich rufe gleich in der Praxis an.', fa: 'بله، الان به مطب زنگ می‌زنم.' },
      ],
    },
    {
      id: 'dialog-beim-arzt',
      titleFa: 'مکالمه در مطب پزشک',
      lines: [
        { speaker: 'A', de: 'Guten Tag. Was fehlt Ihnen?', fa: 'سلام. چه مشکلی دارید؟' },
        { speaker: 'B', de: 'Ich habe Schmerzen im Bauch und mir ist schlecht.', fa: 'دل‌دردم و حالم بد است.' },
        { speaker: 'A', de: 'Seit wann haben Sie die Schmerzen?', fa: 'از کی این درد را دارید؟' },
        { speaker: 'B', de: 'Seit drei Tagen.', fa: 'سه روز است.' },
        { speaker: 'A', de: 'Ich untersuche Sie jetzt. Ist es etwas Schlimmes?', fa: 'الان شما را معاینه می‌کنم. چیز بدی هست؟' },
        { speaker: 'B', de: 'Nein, hoffentlich nicht. Aber Sie sollten sich ausruhen und viel trinken.', fa: 'نه، امیدوارم نباشد. اما بهتر است استراحت کنید و زیاد بنوشید.' },
      ],
    },
    {
      id: 'dialog-sportunfall',
      titleFa: 'مکالمه حادثه ورزشی',
      lines: [
        { speaker: 'A', de: 'Warum warst du gestern nicht beim Training?', fa: 'چرا دیروز در تمرین نبودی؟' },
        { speaker: 'B', de: 'Ich hatte einen Unfall. Ich bin beim Volleyball hingefallen.', fa: 'حادثه‌ای داشتم. در والیبال افتادم.' },
        { speaker: 'A', de: 'Was ist passiert? Hat es geblutet?', fa: 'چه اتفاقی افتاد؟ خون‌ریزی کرد؟' },
        { speaker: 'B', de: 'Ja, mein Knie hat stark geblutet.', fa: 'بله، زانویم خون‌ریزی شدید کرد.' },
        { speaker: 'A', de: 'Oh nein! Warst du in der Notaufnahme?', fa: 'وای نه! در بخش اورژانس بودی؟' },
        { speaker: 'B', de: 'Ja. Die Ärzte haben mein Knie untersucht und verbunden.', fa: 'بله. پزشکان زانویم را معاینه و پانسمان کردند.' },
      ],
    },
  ],

  sampleStory: {
    de: 'Gestern Abend hatte ich einen Unfall. Ich bin mit dem Fahrrad hingefallen. Ein Mann hat den Notarzt gerufen. Der Notarzt hat gesagt, dass ich ins Krankenhaus fahren muss. In der Notaufnahme haben die Ärzte mein Knie untersucht. Jetzt habe ich einen dicken Verband und kann kaum laufen.',
    fa: 'دیشب من حادثه‌ای داشتم. با دوچرخه افتادم. یک مرد پزشک اورژانس را خبر کرد. پزشک اورژانس گفت که باید به بیمارستان بروم. در بخش اورژانس پزشکان زانوی من را معاینه کردند. الان یک پانسمان بزرگ دارم و به‌سختی می‌توانم راه بروم.',
  },

  summaryClosingFa:
    'درس ۸ A2.1 درباره‌ی بیماری، حادثه، اورژانس و بیان احساسات است. در این درس یاد گرفتیم چطور درباره‌ی درد و بدن صحبت کنیم، در اورژانس چه واژگانی به‌کار ببریم و پیش پزشک چه بگوییم. همچنین یاد گرفتیم با weil دلیل بیاوریم (فعل آخر جمله)، با deshalb نتیجه بگیریم (فعل جایگاه دوم) و با denn هم دلیل بیاوریم (فعل جایگاه دوم، بدون تغییر). در پایان یاد گرفتیم نگرانی، ترس، همدردی و امیدواری را با عبارت‌هایی مثل Ich mache mir Sorgen و Hoffentlich ist es nichts Schlimmes بیان کنیم.',
  summaryTopics: [
    'واژگان بدن و بیماری',
    'Unfall und Notfall',
    'Beim Arzt sprechen',
    'weil + فعل آخر جمله',
    'deshalb + فعل جایگاه دوم',
    'denn + جایگاه عادی فعل',
    'Sorge, Mitleid und Hoffnung ausdrücken',
    'Was ist los؟',
    'خواندن یک Forumtext',
    'نوشتن درباره‌ی یک Unfallgeschichte',
  ],
}
