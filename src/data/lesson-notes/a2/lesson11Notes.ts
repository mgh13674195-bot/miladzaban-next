import { LessonNotes } from '@/types/lessonNotes'

/**
 * A2.1 — Lektion 11: Ich freue mich so (Recycling, Second-Hand,
 * Geschäftsidee, Glückwunschkarte, reflexive Verben)
 * Structured from the lesson-notes source markdown. Independent educational
 * content — not a copy of any coursebook layout.
 */
export const lesson11Notes: LessonNotes = {
  lessonId: 11,
  topic: 'Firmenporträt',
  titleFa: 'بازیافت و Second-Hand، ایده‌ی تجاری، تبریک و تشکر، فعل‌های انعکاسی',

  summary: {
    introFa:
      'در این درس درباره‌ی بازیافت، استفاده‌ی دوباره از وسایل قدیمی و ساختن محصول جدید از مواد دورریختنی صحبت می‌کنیم — مثل کیف از پارچه‌ی کهنه یا کوله‌پشتی از بطری پلاستیکی. همچنین یاد می‌گیریم درباره‌ی یک ایده‌ی تجاری نظر بدهیم، تبریک بگوییم، تشکر کنیم و یک کارت تبریک بنویسیم. گرامر اصلی این درس فعل‌های انعکاسی (reflexive Verben) است — فعل‌هایی که با یک ضمیر انعکاسی مثل mich, dich, sich همراه می‌شوند.',
    goals: [
      'واژگان محصولات و وسایل مثل Briefumschlag, Notizblock, Rucksack, Geldbörse را به‌کار ببرد.',
      'واژگان مواد مثل Papier, Holz, Stoff, Glas, Metall را با ساختار aus + Dativ به‌کار ببرد.',
      'فعل‌های مهم Recycling مثل herstellen, verwenden, wegwerfen, sammeln, reparieren را بشناسد.',
      'فعل‌های انعکاسی مثل sich freuen, sich ärgern, sich erinnern را صرف کند.',
      'ضمیرهای انعکاسی (mich, dich, sich, uns, euch, sich) را با فاعل درست هماهنگ کند.',
      'با Ich finde es schön/traurig, dass … نظر خود را درباره‌ی یک ایده‌ی تجاری بیان کند.',
      'با Herzlichen Glückwunsch zum Jubiläum و Wir wünschen Ihnen … تبریک بگوید.',
      'فرق danken + Dativ و sich bedanken für + Akkusativ را تشخیص دهد.',
      'یک متن درباره‌ی Second-Hand یا یک مصاحبه‌ی کاری را بخواند و بفهمد.',
      'یک کارت تبریک رسمی بنویسد و درباره‌ی یک ایده‌ی تجاری نظر بدهد.',
    ],
  },

  keySentences: [
    {
      titleFa: 'محصولات از مواد بازیافتی',
      sentences: [
        { de: 'Der Briefumschlag ist aus altem Papier.', fa: 'پاکت نامه از کاغذ کهنه ساخته شده است.' },
        { de: 'Die Tasche ist aus altem Stoff.', fa: 'کیف از پارچه‌ی کهنه ساخته شده است.' },
        { de: 'Der Rucksack ist aus alten Plastikflaschen.', fa: 'کوله‌پشتی از بطری‌های پلاستیکی قدیمی ساخته شده است.' },
      ],
    },
    {
      titleFa: 'فعل‌های انعکاسی',
      sentences: [
        { de: 'Ich freue mich sehr.', fa: 'من خیلی خوشحالم.' },
        { de: 'Wir erinnern uns an unsere ersten Produkte.', fa: 'ما اولین محصولاتمان را به یاد می‌آوریم.' },
        { de: 'Die Kunden beschweren sich nie über den Service.', fa: 'مشتری‌ها هیچ‌وقت از خدمات شکایت نمی‌کنند.' },
      ],
    },
    {
      titleFa: 'نظر دادن درباره‌ی یک ایده',
      sentences: [
        { de: 'Ich finde es schön, dass die Firma alte Materialien verwendet.', fa: 'به نظرم قشنگ است که شرکت از مواد قدیمی استفاده می‌کند.' },
        { de: 'Meiner Meinung nach ist das eine gute Geschäftsidee.', fa: 'به نظر من این ایده‌ی تجاری خوبی است.' },
        { de: 'Besonders gut gefällt mir, dass arbeitslose Menschen eine Chance bekommen.', fa: 'چیزی که مخصوصاً خوشم می‌آید این است که افراد بیکار یک فرصت پیدا می‌کنند.' },
      ],
    },
    {
      titleFa: 'تبریک و تشکر',
      sentences: [
        { de: 'Herzlichen Glückwunsch zum Jubiläum!', fa: 'تبریک صمیمانه برای سالگرد!' },
        { de: 'Wir danken Ihnen für die gute Zusammenarbeit.', fa: 'ما به خاطر همکاری خوب از شما تشکر می‌کنیم.' },
        { de: 'Wir bedanken uns für Ihre Hilfe.', fa: 'ما بابت کمک شما تشکر می‌کنیم.' },
      ],
    },
  ],

  grammar: [
    {
      id: 'reflexive-verben',
      titleDe: 'Reflexive Verben',
      titleFa: 'فعل‌های انعکاسی',
      explanationFa: 'فعل‌های انعکاسی فعل‌هایی هستند که همراه با یک ضمیر انعکاسی (Reflexivpronomen) می‌آیند که به خود فاعل جمله برمی‌گردد. مهم‌ترین این فعل‌ها: sich freuen, sich ärgern, sich erinnern, sich fühlen, sich unterhalten, sich beschweren, sich streiten, sich ausruhen, sich treffen, sich bedanken.',
      table: {
        headers: ['فاعل', 'Reflexivpronomen'],
        rows: [
          ['ich', 'mich'],
          ['du', 'dich'],
          ['er/sie/es', 'sich'],
          ['wir', 'uns'],
          ['ihr', 'euch'],
          ['sie/Sie', 'sich'],
        ],
      },
      examples: [
        { de: 'Ich freue mich.', fa: 'من خوشحالم.' },
        { de: 'Du erinnerst dich.', fa: 'تو یادت می‌آید.' },
        { de: 'Er ärgert sich.', fa: 'او ناراحت می‌شود.' },
        { de: 'Wir fühlen uns gut.', fa: 'ما حالمان خوب است.' },
        { de: 'Ihr streitet euch.', fa: 'شما با هم دعوا می‌کنید.' },
        { de: 'Sie beschweren sich.', fa: 'آن‌ها شکایت می‌کنند.' },
      ],
      note: 'ضمیر انعکاسی باید همیشه با فاعل جمله هماهنگ باشد — حتی در Perfekt هم این ضمیر باقی می‌ماند: Ich habe mich gefreut.',
    },
    {
      id: 'danken-vs-sich-bedanken',
      titleDe: 'danken + Dativ / sich bedanken für + Akkusativ',
      titleFa: 'فرق danken و sich bedanken',
      explanationFa: 'هر دو فعل برای تشکر کردن به‌کار می‌روند، اما ساختارشان فرق دارد. danken با حالت Dativ (شخص) می‌آید؛ sich bedanken für با حالت Akkusativ (چیزی که برایش تشکر می‌کنیم) می‌آید.',
      examples: [
        { de: 'Wir danken Ihnen für die gute Zusammenarbeit.', fa: 'ما به خاطر همکاری خوب از شما تشکر می‌کنیم. — danken + Dativ (Ihnen)' },
        { de: 'Ich danke dir für alles.', fa: 'بابت همه چیز از تو متشکرم. — danken + Dativ (dir)' },
        { de: 'Wir bedanken uns für Ihre Hilfe.', fa: 'ما بابت کمک شما تشکر می‌کنیم. — sich bedanken für + Akkusativ (Ihre Hilfe)' },
        { de: 'Ich bedanke mich für die Einladung.', fa: 'بابت دعوت تشکر می‌کنم. — sich bedanken für + Akkusativ (die Einladung)' },
      ],
      note: 'danken خودش بدون حرف اضافه با Dativ می‌آید؛ sich bedanken حتماً با für + Akkusativ همراه است.',
    },
    {
      id: 'aus-dativ-material',
      titleDe: 'aus + Dativ (Material)',
      titleFa: 'بیان جنس و ماده با aus + Dativ',
      explanationFa: 'برای گفتن «از چه چیزی ساخته شده»، از aus + Dativ استفاده می‌کنیم.',
      examples: [
        { de: 'aus Papier', fa: 'از کاغذ' },
        { de: 'aus Holz', fa: 'از چوب' },
        { de: 'aus Stoff', fa: 'از پارچه' },
        { de: 'aus Glas', fa: 'از شیشه' },
        { de: 'aus alten Plastikflaschen', fa: 'از بطری‌های پلاستیکی قدیمی' },
      ],
      note: 'وقتی صفت قبل از اسم Dativ جمع بیاید، پایان -en می‌گیرد: aus alten Materialien.',
    },
  ],

  vocabulary: [
    {
      id: 'produkte-gegenstaende',
      titleFa: 'محصولات و وسایل',
      items: [
        { de: 'der Briefumschlag', fa: 'پاکت نامه' },
        { de: 'das Briefpapier', fa: 'کاغذ نامه' },
        { de: 'die Postkarte', fa: 'کارت پستال' },
        { de: 'der Notizblock', fa: 'دفترچه یادداشت' },
        { de: 'das Geschenkpapier', fa: 'کاغذ کادو' },
        { de: 'die Handtasche', fa: 'کیف دستی زنانه' },
        { de: 'der Rucksack', fa: 'کوله‌پشتی' },
        { de: 'die Geldbörse / das Portemonnaie', fa: 'کیف پول' },
        { de: 'der Schmuck', fa: 'جواهرات / زینت‌آلات' },
      ],
    },
    {
      id: 'materialien',
      titleFa: 'مواد و جنس‌ها',
      items: [
        { de: 'das Papier', fa: 'کاغذ' },
        { de: 'das Holz', fa: 'چوب' },
        { de: 'der Stoff', fa: 'پارچه' },
        { de: 'das Glas', fa: 'شیشه' },
        { de: 'das Metall', fa: 'فلز' },
        { de: 'die Plastikflasche', fa: 'بطری پلاستیکی' },
      ],
    },
    {
      id: 'firma-recycling',
      titleFa: 'شرکت و بازیافت',
      items: [
        { de: 'die Werkstatt', fa: 'کارگاه' },
        { de: 'der Kunde / die Kundin', fa: 'مشتری' },
        { de: 'der Artikel', fa: 'کالا / قلم جنسی' },
        { de: 'die Geschäftsidee', fa: 'ایده‌ی تجاری' },
        { de: 'Second-Hand', fa: 'دست دوم' },
        { de: 'herstellen', fa: 'تولید کردن / ساختن' },
        { de: 'organisieren', fa: 'سازمان‌دهی کردن' },
        { de: 'verwenden', fa: 'استفاده کردن' },
        { de: 'wegwerfen', fa: 'دور انداختن' },
        { de: 'reparieren', fa: 'تعمیر کردن' },
        { de: 'sammeln', fa: 'جمع‌آوری کردن' },
        { de: 'produzieren', fa: 'تولید کردن' },
      ],
    },
    {
      id: 'reflexive-verben-liste',
      titleFa: 'فعل‌های انعکاسی پرکاربرد',
      items: [
        { de: 'sich freuen', fa: 'خوشحال بودن/شدن' },
        { de: 'sich ärgern', fa: 'ناراحت/عصبانی شدن' },
        { de: 'sich erinnern', fa: 'به‌یاد آوردن' },
        { de: 'sich fühlen', fa: 'احساس کردن' },
        { de: 'sich unterhalten', fa: 'صحبت کردن / گفت‌وگو کردن' },
        { de: 'sich beschweren', fa: 'شکایت کردن' },
        { de: 'sich streiten', fa: 'دعوا کردن' },
        { de: 'sich ausruhen', fa: 'استراحت کردن' },
        { de: 'sich treffen', fa: 'دیدار کردن' },
        { de: 'sich bedanken', fa: 'تشکر کردن' },
      ],
    },
  ],

  redemittel: [
    {
      titleFa: 'بیان نظر',
      phrases: [
        { de: 'Ich finde es schön, dass …', fa: 'به نظرم قشنگ است که …' },
        { de: 'Ich finde es traurig, dass …', fa: 'ناراحت‌کننده است که …' },
        { de: 'Ich finde es schrecklich, dass …', fa: 'وحشتناک است که …' },
        { de: 'Ich bin froh, dass …', fa: 'خوشحالم که …' },
        { de: 'Meiner Meinung nach …', fa: 'به نظر من …' },
        { de: 'Besonders gut gefällt mir, dass …', fa: 'چیزی که مخصوصاً خوشم می‌آید این است که …' },
      ],
    },
    {
      titleFa: 'تبریک گفتن',
      phrases: [
        { de: 'Herzlichen Glückwunsch zum Jubiläum!', fa: 'تبریک صمیمانه برای سالگرد!' },
        { de: 'Alles Gute zum Jubiläum!', fa: 'همه‌ی بهترین‌ها برای سالگرد!' },
        { de: 'Viel Glück! / Viel Erfolg!', fa: 'موفق باشی! / موفقیت زیاد!' },
        { de: 'Wir gratulieren Ihnen herzlich.', fa: 'ما صمیمانه به شما تبریک می‌گوییم.' },
        { de: 'Wir wünschen Ihnen viel Erfolg.', fa: 'ما برایتان موفقیت زیاد آرزو می‌کنیم.' },
      ],
    },
    {
      titleFa: 'تشکر کردن',
      phrases: [
        { de: 'Wir danken Ihnen für …', fa: 'ما بابت … از شما تشکر می‌کنیم.' },
        { de: 'Wir bedanken uns für …', fa: 'ما بابت … تشکر می‌کنیم.' },
        { de: 'Vielen Dank für …', fa: 'بسیار متشکریم بابت …' },
      ],
    },
  ],

  dialogues: [
    {
      id: 'dialog-geschaeftsidee',
      titleFa: 'مکالمه نظر درباره‌ی ایده‌ی بازیافت',
      lines: [
        { speaker: 'A', de: 'Wie findest du die Geschäftsidee?', fa: 'این ایده‌ی تجاری را چطور می‌بینی؟' },
        { speaker: 'B', de: 'Ich finde sie sehr gut.', fa: 'من خیلی خوب می‌دانمش.' },
        { speaker: 'A', de: 'Warum?', fa: 'چرا؟' },
        { speaker: 'B', de: 'Weil die Firma alte Materialien verwendet und weniger Müll produziert.', fa: 'چون شرکت از مواد قدیمی استفاده می‌کند و زباله‌ی کمتری تولید می‌کند.' },
        { speaker: 'A', de: 'Würdest du die Produkte kaufen?', fa: 'محصولاتش را می‌خری؟' },
        { speaker: 'B', de: 'Ja, besonders gut gefällt mir, dass die Taschen aus alten Stoffen sind.', fa: 'بله، چیزی که مخصوصاً خوشم می‌آید این است که کیف‌ها از پارچه‌ی کهنه‌اند.' },
      ],
    },
    {
      id: 'dialog-reflexive-verben',
      titleFa: 'مکالمه فعل‌های انعکاسی',
      lines: [
        { speaker: 'A', de: 'Freust du dich auf das Jubiläum?', fa: 'برای سالگرد خوشحالی؟' },
        { speaker: 'B', de: 'Ja, ich freue mich sehr.', fa: 'بله، خیلی خوشحالم.' },
        { speaker: 'A', de: 'Erinnerst du dich noch an deine ersten Produkte?', fa: 'هنوز اولین محصولاتت یادت می‌آید؟' },
        { speaker: 'B', de: 'Natürlich. Am Anfang haben wir Briefumschläge aus alten Landkarten gemacht.', fa: 'البته. اول پاکت نامه از نقشه‌های کهنه می‌ساختیم.' },
        { speaker: 'A', de: 'Ärgerst du dich manchmal über Kritik?', fa: 'گاهی از انتقاد ناراحت می‌شوی؟' },
        { speaker: 'B', de: 'Nein, ich ärgere mich nicht. Kritik hilft uns.', fa: 'نه، ناراحت نمی‌شوم. انتقاد به ما کمک می‌کند.' },
      ],
    },
    {
      id: 'dialog-glueckwunschkarte',
      titleFa: 'مکالمه نوشتن کارت تبریک',
      lines: [
        { speaker: 'A', de: 'Unsere Kollegin arbeitet seit zehn Jahren bei uns. Wir brauchen eine Glückwunschkarte.', fa: 'همکارمان ده سال است پیش ما کار می‌کند. به یک کارت تبریک نیاز داریم.' },
        { speaker: 'B', de: 'Gute Idee. Schreiben wir: Herzlichen Glückwunsch zum Jubiläum!', fa: 'ایده‌ی خوبی است. بنویسیم: تبریک صمیمانه برای سالگرد!' },
        { speaker: 'A', de: 'Und wir sollten uns für die gute Zusammenarbeit bedanken.', fa: 'و باید به خاطر همکاری خوب تشکر کنیم.' },
        { speaker: 'B', de: 'Ja. Und für die Zukunft wünschen wir ihr viel Erfolg.', fa: 'بله. و برای آینده برایش موفقیت زیاد آرزو می‌کنیم.' },
        { speaker: 'A', de: 'Perfekt.', fa: 'عالی است.' },
      ],
    },
    {
      id: 'dialog-second-hand-kaufen',
      titleFa: 'مکالمه خرید Second-Hand',
      lines: [
        { speaker: 'A', de: 'Kaufst du gern Second-Hand-Produkte?', fa: 'دوست داری محصولات Second-Hand بخری؟' },
        { speaker: 'B', de: 'Ja, manchmal. Ich finde es gut, dass man alte Sachen wiederverwendet.', fa: 'بله، گاهی. به نظرم خوب است که از وسایل قدیمی دوباره استفاده می‌شود.' },
        { speaker: 'A', de: 'Ich weiß nicht. Ich kaufe lieber neue Produkte.', fa: 'نمی‌دانم. من ترجیح می‌دهم محصولات جدید بخرم.' },
        { speaker: 'B', de: 'Das verstehe ich, aber Second-Hand ist oft günstiger und umweltfreundlicher.', fa: 'این را می‌فهمم، اما Second-Hand اغلب ارزان‌تر و دوستدار محیط‌زیست‌تر است.' },
        { speaker: 'A', de: 'Stimmt. Vielleicht kaufe ich mal eine Tasche aus altem Stoff.', fa: 'درست است. شاید یک بار یک کیف از پارچه‌ی کهنه بخرم.' },
      ],
    },
  ],

  sampleStory: {
    de: 'Eine gute Geschäftsidee. Eine Firma stellt Taschen und Rucksäcke aus alten Stoffen und Plastikflaschen her. Einige Mitarbeiter waren vorher arbeitslos. Ich finde es schön, dass die Firma alte Materialien verwendet, und ich bin froh, dass die Mitarbeiter eine neue Chance bekommen. Ich denke, dass diese Idee sehr gut ist, weil man weniger Müll produziert. Besonders gut gefällt mir, dass die Produkte den Kunden helfen, umweltfreundlicher zu leben.',
    fa: 'یک ایده‌ی تجاری خوب. یک شرکت کیف و کوله‌پشتی از پارچه‌های کهنه و بطری‌های پلاستیکی می‌سازد. برخی از کارمندان قبلاً بیکار بودند. به نظرم قشنگ است که شرکت از مواد قدیمی استفاده می‌کند، و خوشحالم که کارمندان فرصت جدیدی پیدا می‌کنند. فکر می‌کنم این ایده خیلی خوب است، چون زباله‌ی کمتری تولید می‌شود. چیزی که مخصوصاً خوشم می‌آید این است که این محصولات به مشتری‌ها کمک می‌کنند دوستدار محیط‌زیست‌تر زندگی کنند.',
  },

  summaryClosingFa:
    'درس ۱۱ A2.1 درباره‌ی بازیافت، Second-Hand، ایده‌ی تجاری، تبریک گفتن و تشکر کردن است. در این درس واژگان مهم محصولات و مواد مثل Briefumschlag, Rucksack, Stoff, Glas را یاد گرفتیم. گرامر اصلی این درس فعل‌های انعکاسی بود — فعل‌هایی مثل sich freuen, sich ärgern, sich erinnern که با ضمیر انعکاسی (mich, dich, sich, uns, euch, sich) همراه می‌شوند و این ضمیر باید با فاعل هماهنگ باشد. همچنین یاد گرفتیم با Ich finde es schön, dass … نظر بدهیم، با Herzlichen Glückwunsch zum Jubiläum تبریک بگوییم و فرق danken + Dativ و sich bedanken für + Akkusativ را تشخیص دهیم.',
  summaryTopics: [
    'واژگان محصولات و وسایل بازیافتی',
    'مواد و جنس‌ها با aus + Dativ',
    'فعل‌های انعکاسی و ضمیرهای انعکاسی',
    'danken + Dativ در مقابل sich bedanken für + Akkusativ',
    'بیان نظر با Ich finde es schön/traurig, dass …',
    'Meiner Meinung nach …',
    'تبریک گفتن — Herzlichen Glückwunsch zum Jubiläum!',
    'نوشتن یک Glückwunschkarte',
    'خواندن متن درباره‌ی Second-Hand و مصاحبه‌ی کاری',
    'نظر دادن درباره‌ی یک Geschäftsidee',
  ],
}
