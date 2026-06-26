import { LessonNotes } from '@/types/lessonNotes'

/**
 * A2.1 — Lektion 12: Wenn es warm ist, essen wir meist Salat (Lebensmittel,
 * Essgewohnheiten, Statistik, Überraschung ausdrücken, Konjunktion wenn)
 * Structured from the lesson-notes source markdown. Independent educational
 * content — not a copy of any coursebook layout.
 */
export const lesson12Notes: LessonNotes = {
  lessonId: 12,
  topic: 'Ernährung',
  titleFa: 'مواد غذایی، عادت‌های غذایی، آمار تغذیه، بیان تعجب، جمله‌های wenn',

  summary: {
    introFa:
      'در این درس درباره‌ی مواد غذایی، نوشیدنی‌ها و عادت‌های غذایی صحبت می‌کنیم. یاد می‌گیریم با کلمات آماری مثل die Hälfte, durchschnittlich, rund, Prozent درباره‌ی مصرف غذا در آلمان صحبت کنیم. همچنین یاد می‌گیریم تعجب خودمان را بیان کنیم و عادت‌های غذایی کشورمان را با آلمان مقایسه کنیم. گرامر اصلی این درس حرف ربط wenn است که برای بیان شرط یا موقعیت تکرارشونده به‌کار می‌رود.',
    goals: [
      'واژگان مواد غذایی مثل Obst, Gemüse, Fleisch, Fisch, Getreide را به‌کار ببرد.',
      'واژگان آماری مثل die Hälfte, doppelt, durchschnittlich, rund, Prozent, genug, kaum را بفهمد.',
      'یک متن درباره‌ی Ernährung in Deutschland را بخواند و بفهمد.',
      'جمله‌های wenn بسازد و فعل را به آخر جمله‌ی فرعی ببرد.',
      'جمله‌ی wenn را هم در ابتدا و هم در انتهای جمله به‌کار ببرد.',
      'فرق wenn (وقتی/اگر) و dass (که) را تشخیص دهد.',
      'با Es überrascht mich, dass … و Ich finde es komisch, dass … تعجب خود را بیان کند.',
      'با In meiner Heimat … و Bei uns ist das anders عادت غذایی کشورش را با آلمان مقایسه کند.',
      'درباره‌ی مصرف شخصی غذا و نوشیدنی صحبت کند.',
      'یک کامنت فروم درباره‌ی عادت‌های غذایی بنویسد.',
    ],
  },

  keySentences: [
    {
      titleFa: 'جمله‌های wenn',
      sentences: [
        { de: 'Wenn es warm ist, essen wir meist Salat.', fa: 'وقتی هوا گرم است، معمولاً سالاد می‌خوریم.' },
        { de: 'Wenn es schnell gehen muss, gibt es auch mal Pizza.', fa: 'وقتی باید سریع باشد، گاهی هم پیتزا داریم.' },
        { de: 'Wir essen meist Salat, wenn es warm ist.', fa: 'ما معمولاً سالاد می‌خوریم، وقتی هوا گرم است.' },
      ],
    },
    {
      titleFa: 'بیان تعجب',
      sentences: [
        { de: 'Es überrascht mich, dass viele Menschen wenig Fisch essen.', fa: 'برایم تعجب‌آور است که خیلی‌ها کم ماهی می‌خورند.' },
        { de: 'Ich finde es komisch, dass viele Leute Brot zum Frühstück essen.', fa: 'به نظرم عجیب است که خیلی‌ها صبحانه نان می‌خورند.' },
        { de: 'Das überrascht mich nicht.', fa: 'این من را متعجب نمی‌کند.' },
      ],
    },
    {
      titleFa: 'مقایسه با کشور خود',
      sentences: [
        { de: 'In meiner Heimat essen wir morgens oft Käse und Eier.', fa: 'در کشور من ما صبح‌ها اغلب پنیر و تخم‌مرغ می‌خوریم.' },
        { de: 'In Deutschland ist das anders, aber bei uns essen viele Familien oft Fisch.', fa: 'در آلمان این فرق دارد، اما پیش ما خیلی خانواده‌ها اغلب ماهی می‌خورند.' },
        { de: 'Bei uns ist das auch so.', fa: 'پیش ما هم همین‌طور است.' },
      ],
    },
    {
      titleFa: 'آمار و مقدار',
      sentences: [
        { de: 'Frauen essen nur die Hälfte von der Fleischmenge der Männer.', fa: 'زن‌ها فقط نصف مقدار گوشتی که مردها می‌خورند، می‌خورند.' },
        { de: 'Männer essen durchschnittlich mehr Fleisch als Frauen.', fa: 'مردها به‌طور متوسط گوشت بیشتری از زن‌ها می‌خورند.' },
        { de: 'Rund 70 Prozent essen nicht genug Obst und Gemüse.', fa: 'حدوداً ۷۰ درصد میوه و سبزی کافی نمی‌خورند.' },
      ],
    },
  ],

  grammar: [
    {
      id: 'konjunktion-wenn',
      titleDe: 'Konjunktion wenn',
      titleFa: 'حرف ربط wenn',
      explanationFa: 'wenn یعنی «وقتی» یا «اگر» و برای بیان یک شرط یا یک موقعیت تکرارشونده به‌کار می‌رود. بعد از wenn فعل صرف‌شده‌ی جمله‌ی فرعی به آخر جمله می‌رود.',
      examples: [
        { de: 'Wenn es warm ist, essen wir meist Salat.', fa: 'وقتی هوا گرم است، معمولاً سالاد می‌خوریم.' },
        { de: 'Wenn es schnell gehen muss, gibt es auch mal Pizza.', fa: 'وقتی باید سریع باشد، گاهی هم پیتزا داریم.' },
        { de: 'Wenn Gäste kommen, kochen wir etwas Besonderes.', fa: 'وقتی مهمان می‌آید، یک چیز خاص می‌پزیم.' },
      ],
      note: 'فعل صرف‌شده در جمله‌ی فرعی بعد از wenn همیشه آخر جمله می‌آید — دقیقاً مثل weil و dass.',
    },
    {
      id: 'wenn-satzstellung',
      titleDe: 'wenn-Satz vorn oder hinten',
      titleFa: 'جایگاه جمله‌ی wenn — اول یا آخر جمله',
      explanationFa: 'جمله‌ی wenn می‌تواند هم در ابتدای جمله بیاید و هم در انتهای آن — هر دو ساختار درست‌اند.',
      table: {
        headers: ['ساختار', 'مثال'],
        rows: [
          ['Wenn + Nebensatz, Hauptsatz', 'Wenn es warm ist, essen wir Salat.'],
          ['Hauptsatz + wenn + Nebensatz', 'Wir essen Salat, wenn es warm ist.'],
        ],
      },
      examples: [
        { de: 'Wenn es warm ist, essen wir Salat.', fa: 'وقتی هوا گرم است، سالاد می‌خوریم.' },
        { de: 'Wir essen Salat, wenn es warm ist.', fa: 'سالاد می‌خوریم، وقتی هوا گرم است.' },
      ],
      note: 'اگر جمله با wenn شروع شود، بعد از کاما فعل جمله‌ی اصلی بلافاصله می‌آید (جایگاه دوم): Wenn es warm ist, essen wir Salat.',
    },
    {
      id: 'wenn-vs-dass',
      titleDe: 'wenn oder dass?',
      titleFa: 'فرق wenn و dass',
      explanationFa: 'wenn یعنی «وقتی/اگر» و برای شرط یا موقعیت زمانی به‌کار می‌رود. dass یعنی «که» و برای گزارش فکر، نظر یا احساس استفاده می‌شود. هر دو فعل را به آخر جمله می‌برند.',
      examples: [
        { de: 'Ich esse Salat, wenn es warm ist.', fa: 'سالاد می‌خورم، وقتی هوا گرم است. — شرط/زمان' },
        { de: 'Ich finde es komisch, dass viele Leute wenig Fisch essen.', fa: 'به نظرم عجیب است که خیلی‌ها کم ماهی می‌خورند. — نظر/احساس' },
      ],
      note: 'برای تشخیص: اگر جمله یک شرط یا تکرار را بیان می‌کند → wenn. اگر جمله یک فکر، نظر یا احساس را گزارش می‌دهد → dass.',
    },
  ],

  vocabulary: [
    {
      id: 'lebensmittel-getraenke',
      titleFa: 'مواد غذایی و نوشیدنی‌ها',
      items: [
        { de: 'das Obst', fa: 'میوه' },
        { de: 'das Gemüse', fa: 'سبزیجات' },
        { de: 'die Wurst', fa: 'سوسیس / کالباس' },
        { de: 'das Fleisch', fa: 'گوشت' },
        { de: 'der Fisch', fa: 'ماهی' },
        { de: 'das Getreide', fa: 'غلات' },
        { de: 'die Limonade', fa: 'نوشابه / لیموناد' },
        { de: 'das Mineralwasser', fa: 'آب معدنی' },
        { de: 'das Hühnerfleisch', fa: 'گوشت مرغ' },
        { de: 'das Rindfleisch', fa: 'گوشت گاو' },
        { de: 'das Schweinefleisch', fa: 'گوشت خوک' },
      ],
    },
    {
      id: 'mengen-statistik',
      titleFa: 'آمار و مقدار',
      items: [
        { de: 'die Hälfte', fa: 'نصف' },
        { de: 'doppelt so viel', fa: 'دو برابر' },
        { de: 'durchschnittlich', fa: 'به‌طور متوسط' },
        { de: 'rund', fa: 'حدوداً' },
        { de: 'Prozent', fa: 'درصد' },
        { de: 'genug', fa: 'کافی' },
        { de: 'kaum', fa: 'تقریباً هیچ / به‌سختی' },
        { de: 'häufig', fa: 'زیاد / مکرر' },
        { de: 'zu viel / zu wenig', fa: 'زیادی / کمی' },
      ],
    },
  ],

  redemittel: [
    {
      titleFa: 'بیان تعجب',
      phrases: [
        { de: 'Es überrascht mich, dass …', fa: 'برایم تعجب‌آور است که …' },
        { de: 'Es wundert mich, dass …', fa: 'برایم عجیب است که …' },
        { de: 'Ich finde es komisch, dass …', fa: 'به نظرم عجیب است که …' },
        { de: 'Ich habe gedacht, dass …', fa: 'فکر می‌کردم که …' },
        { de: 'Es war mir klar, dass …', fa: 'برایم روشن بود که …' },
        { de: 'Das überrascht mich nicht.', fa: 'این من را متعجب نمی‌کند.' },
        { de: 'Wirklich? / Komisch!', fa: 'واقعاً؟ / عجیبه!' },
      ],
    },
    {
      titleFa: 'مقایسه‌ی عادت‌های غذایی',
      phrases: [
        { de: 'Bei uns ist das auch so.', fa: 'پیش ما هم همین‌طور است.' },
        { de: 'Bei uns ist das anders.', fa: 'پیش ما این فرق دارد.' },
        { de: 'In meiner Heimat essen wir …', fa: 'در کشور/زادگاه من ما … می‌خوریم.' },
        { de: 'In Deutschland …, aber bei uns …', fa: 'در آلمان …، اما پیش ما …' },
      ],
    },
    {
      titleFa: 'درباره‌ی برنامه‌های آشپزی',
      phrases: [
        { de: 'Mir gefallen Kochsendungen sehr gut.', fa: 'برنامه‌های آشپزی را خیلی دوست دارم.' },
        { de: 'Ich interessiere mich nicht für Kochen.', fa: 'به آشپزی علاقه ندارم.' },
        { de: 'Ich koche die Gerichte oft nach.', fa: 'این غذاها را اغلب امتحان می‌کنم.' },
      ],
    },
  ],

  dialogues: [
    {
      id: 'dialog-ueberraschung-essen',
      titleFa: 'مکالمه تعجب درباره‌ی غذا',
      lines: [
        { speaker: 'A', de: 'Ich habe gelesen, dass viele Menschen zu wenig Obst und Gemüse essen.', fa: 'خواندم که خیلی‌ها میوه و سبزی کافی نمی‌خورند.' },
        { speaker: 'B', de: 'Wirklich? Das überrascht mich.', fa: 'واقعاً؟ این تعجب‌آور است.' },
        { speaker: 'A', de: 'Ja, und viele essen auch kaum Fisch.', fa: 'بله، و خیلی‌ها هم تقریباً ماهی نمی‌خورند.' },
        { speaker: 'B', de: 'Das finde ich komisch. Bei uns essen viele Familien oft Fisch.', fa: 'این برایم عجیب است. پیش ما خیلی خانواده‌ها اغلب ماهی می‌خورند.' },
        { speaker: 'A', de: 'In meiner Heimat ist das anders. Wir essen mehr Fleisch und Reis.', fa: 'در کشور من این فرق دارد. ما گوشت و برنج بیشتری می‌خوریم.' },
      ],
    },
    {
      id: 'dialog-gaeste-kochen',
      titleFa: 'مکالمه وقتی مهمان می‌آید',
      lines: [
        { speaker: 'A', de: 'Was kocht ihr, wenn Gäste kommen?', fa: 'وقتی مهمان می‌آید چی می‌پزید؟' },
        { speaker: 'B', de: 'Wenn Gäste kommen, kochen wir meistens Reis mit Fleisch und Salat.', fa: 'وقتی مهمان می‌آید، معمولاً برنج با گوشت و سالاد می‌پزیم.' },
        { speaker: 'A', de: 'Und wenn es schnell gehen muss?', fa: 'و وقتی باید سریع باشد؟' },
        { speaker: 'B', de: 'Dann bestellen wir manchmal Pizza.', fa: 'آن وقت گاهی پیتزا سفارش می‌دهیم.' },
        { speaker: 'A', de: 'Bei uns ist das auch so.', fa: 'پیش ما هم همین‌طور است.' },
      ],
    },
    {
      id: 'dialog-persoenliche-essgewohnheiten',
      titleFa: 'مکالمه درباره‌ی عادت غذایی شخصی',
      lines: [
        { speaker: 'A', de: 'Isst du genug Gemüse?', fa: 'سبزی کافی می‌خوری؟' },
        { speaker: 'B', de: 'Ich glaube, ich esse zu wenig Gemüse.', fa: 'فکر می‌کنم سبزی کافی نمی‌خورم.' },
        { speaker: 'A', de: 'Und wie oft isst du Fleisch?', fa: 'و چقدر گوشت می‌خوری؟' },
        { speaker: 'B', de: 'Vielleicht zwei- oder dreimal pro Woche. Fisch esse ich fast nie.', fa: 'شاید دو یا سه بار در هفته. ماهی تقریباً هیچ‌وقت نمی‌خورم.' },
        { speaker: 'A', de: 'Trinkst du genug Wasser?', fa: 'آب کافی می‌خوری؟' },
        { speaker: 'B', de: 'Nein, leider nicht. Ich trinke viel Tee, aber zu wenig Wasser.', fa: 'نه، متأسفانه نه. چای زیاد می‌خورم، اما آب کم.' },
      ],
    },
    {
      id: 'dialog-laendervergleich',
      titleFa: 'مکالمه مقایسه‌ی کشورها',
      lines: [
        { speaker: 'A', de: 'In Deutschland essen viele Menschen Brot zum Frühstück.', fa: 'در آلمان خیلی‌ها صبحانه نان می‌خورند.' },
        { speaker: 'B', de: 'Das war mir klar. Aber ich finde es komisch, dass manche nur Marmelade oder Honig essen.', fa: 'این برایم روشن بود. اما به نظرم عجیب است که بعضی‌ها فقط مارمالاد یا عسل می‌خورند.' },
        { speaker: 'A', de: 'Wie ist das in deiner Heimat?', fa: 'در کشور تو این چطور است؟' },
        { speaker: 'B', de: 'Bei uns isst man oft Brot, Käse, Eier und manchmal warmes Essen.', fa: 'پیش ما اغلب نان، پنیر، تخم‌مرغ و گاهی غذای گرم می‌خورند.' },
        { speaker: 'A', de: 'Interessant. Das ist also ein bisschen anders.', fa: 'جالب است. پس کمی فرق دارد.' },
      ],
    },
  ],

  sampleStory: {
    de: 'Meine Essgewohnheiten. Ich esse oft Brot, Reis, Gemüse und Käse. Fleisch esse ich manchmal, aber Fisch esse ich selten. Ich trinke viel Tee, aber wahrscheinlich zu wenig Wasser. Es überrascht mich, dass viele Menschen in Deutschland oft Brot zum Frühstück essen. In meiner Heimat ist das ein bisschen anders. Wenn Gäste kommen, kochen wir meistens Reis mit Fleisch oder Gemüse. Ich finde, dass Essgewohnheiten viel über eine Kultur zeigen.',
    fa: 'عادت‌های غذایی من. من اغلب نان، برنج، سبزی و پنیر می‌خورم. گوشت گاهی می‌خورم، اما ماهی به‌ندرت. چای زیاد می‌خورم، اما احتمالاً آب کم. برایم تعجب‌آور است که خیلی‌ها در آلمان اغلب صبحانه نان می‌خورند. در کشور من این کمی فرق دارد. وقتی مهمان می‌آید، معمولاً برنج با گوشت یا سبزی می‌پزیم. به نظرم عادت‌های غذایی خیلی چیزها درباره‌ی یک فرهنگ نشان می‌دهد.',
  },

  summaryClosingFa:
    'درس ۱۲ A2.1 درباره‌ی مواد غذایی، عادت‌های غذایی، آمار تغذیه و مقایسه‌ی فرهنگ‌ها است. در این درس واژگان مهم مثل Obst, Gemüse, Fleisch, Fisch و کلمات آماری مثل die Hälfte, durchschnittlich, rund, Prozent را یاد گرفتیم. گرامر اصلی این درس حرف ربط wenn بود — فعل صرف‌شده در جمله‌ی فرعی بعد از wenn آخر جمله می‌رود، و جمله‌ی wenn می‌تواند اول یا آخر جمله بیاید. همچنین یاد گرفتیم با Es überrascht mich, dass … تعجب خود را بیان کنیم و با In meiner Heimat … و Bei uns ist das anders عادت‌های غذایی کشورمان را با آلمان مقایسه کنیم.',
  summaryTopics: [
    'واژگان مواد غذایی و نوشیدنی‌ها',
    'کلمات آماری: Hälfte, durchschnittlich, rund, Prozent',
    'Konjunktion wenn — فعل آخر جمله',
    'جایگاه جمله‌ی wenn — اول یا آخر جمله',
    'wenn در مقابل dass',
    'بیان تعجب با Es überrascht mich, dass …',
    'مقایسه با In meiner Heimat … / Bei uns ist das anders',
    'خواندن متن Ernährung in Deutschland',
    'نوشتن کامنت فروم درباره‌ی عادت‌های غذایی',
    'صحبت درباره‌ی مصرف شخصی غذا',
  ],
}
