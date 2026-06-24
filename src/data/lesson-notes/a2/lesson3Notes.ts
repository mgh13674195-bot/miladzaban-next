import { LessonNotes } from '@/types/lessonNotes'

/**
 * A2.1 — Lektion 3: Reisen, Natur und Erholung
 * Structured from the lesson-notes source markdown. Independent educational
 * content — not a copy of any coursebook layout.
 */
export const lesson3Notes: LessonNotes = {
  lessonId: 3,
  topic: 'Reisen, Natur und Erholung',
  titleFa: 'سفر، طبیعت، استراحت و بیان علاقه با würde gern',

  summary: {
    introFa:
      'در این درس درباره‌ی سفر، طبیعت، استراحت و گردشگری صحبت می‌کنیم. یاد می‌گیریم چطور آگهی‌های ساده‌ی گردشگری را بخوانیم، درباره‌ی یک پیشنهاد سفر نظر بدهیم، علاقه و خواسته‌ی خودمان را با würde gern و am liebsten بیان کنیم و از فعل‌ها اسم‌های جدید با پسوند -ung یا -er بسازیم.',
    goals: [
      'واژگان طبیعت مثل Wald, Ufer, Strand, Vogel, Dorf را به‌کار ببرد.',
      'درباره‌ی سفر و اوقات فراغت با کلماتی مثل Erholung, Beratung, Fahrt صحبت کند.',
      'علاقه و خواسته‌ی خود را با Ich würde gern … بیان کند.',
      'بیشترین علاقه‌ی خود را با Ich würde am liebsten … بیان کند.',
      'از فعل‌ها اسم با پسوند -ung بسازد (erholen → die Erholung).',
      'از فعل‌ها اسم شخص با پسوند -er بسازد (wandern → der Wanderer).',
      'فرق بین -ung (مفهوم/فعالیت) و -er (شخص) را تشخیص دهد.',
      'درباره‌ی یک پیشنهاد سفر نظر بدهد (gefällt mir, liegt im Trend, funktioniert bestimmt).',
      'یک آگهی کوتاه گردشگری را بخواند و بفهمد.',
      'درباره‌ی انتخاب نوع سفر با کسی گفت‌وگو کند.',
    ],
  },

  keySentences: [
    {
      titleFa: 'بیان علاقه و خواسته',
      sentences: [
        { de: 'Ich würde gern wandern.', fa: 'دوست دارم پیاده‌روی کنم.' },
        { de: 'Ich würde am liebsten ans Meer fahren.', fa: 'از همه بیشتر دوست دارم به دریا بروم.' },
        { de: 'Würdest du gern einen Surfkurs machen?', fa: 'آیا دوست داری یک دوره‌ی سرفینگ بروی؟' },
        { de: 'Wir würden gern eine Radtour machen.', fa: 'ما دوست داریم یک تور دوچرخه برویم.' },
        { de: 'Welche Reise würden Sie gern buchen?', fa: 'شما دوست دارید کدام سفر را رزرو کنید؟' },
      ],
    },
    {
      titleFa: 'بیان نظر درباره یک ایده',
      sentences: [
        { de: 'Die Idee gefällt mir sehr gut.', fa: 'این ایده خیلی به من خوش می‌آید.' },
        { de: 'Das gefällt mir überhaupt nicht.', fa: 'این اصلاً به من خوش نمی‌آید.' },
        { de: 'Das finde ich nicht so gut.', fa: 'این را خیلی خوب نمی‌دانم.' },
        { de: 'Das funktioniert bestimmt.', fa: 'این حتماً جواب می‌دهد.' },
        { de: 'Camping liegt gerade im Trend.', fa: 'کمپینگ این روزها مد شده است.' },
        { de: 'Ich fahre lieber mit dem Zug.', fa: 'من ترجیح می‌دهم با قطار بروم.' },
      ],
    },
    {
      titleFa: 'درباره طبیعت و سفر',
      sentences: [
        { de: 'Der Wald hier ist sehr ruhig.', fa: 'این جنگل خیلی ساکت است.' },
        { de: 'Wir wandern oft am Ufer.', fa: 'ما اغلب کنار ساحل پیاده‌روی می‌کنیم.' },
        { de: 'Der Strand ist heute sehr voll.', fa: 'ساحل امروز خیلی شلوغ است.' },
        { de: 'Im Urlaub brauche ich Ruhe und Erholung.', fa: 'در تعطیلات به آرامش و استراحت نیاز دارم.' },
      ],
    },
  ],

  grammar: [
    {
      id: 'wuerde-gern',
      titleDe: 'würde + gern',
      titleFa: 'بیان علاقه و خواسته با würde gern',
      explanationFa:
        'برای گفتن «دوست دارم کاری انجام بدهم» در سطح A2 از würde + gern استفاده می‌کنیم. würde جای دوم جمله می‌آید و فعل اصلی به‌صورت ساده (Infinitiv) به انتهای جمله می‌رود.',
      table: {
        headers: ['Person', 'würde'],
        rows: [
          ['ich', 'würde'],
          ['du', 'würdest'],
          ['er/sie/es', 'würde'],
          ['wir', 'würden'],
          ['ihr', 'würdet'],
          ['sie/Sie', 'würden'],
        ],
      },
      examples: [
        { de: 'Ich würde gern eine Reise buchen.', fa: 'دوست دارم یک سفر رزرو کنم.' },
        { de: 'Du würdest gern nach Italien fahren.', fa: 'تو دوست داری به ایتالیا بروی.' },
        { de: 'Wir würden gern am See übernachten.', fa: 'ما دوست داریم کنار دریاچه بمانیم.' },
      ],
      note: 'würde در جایگاه دوم جمله می‌آید و فعل اصلی (مثل wandern, fahren, machen) ساده و بدون صرف به انتهای جمله می‌رود: Ich würde gern wandern.',
    },
    {
      id: 'am-liebsten',
      titleDe: 'am liebsten',
      titleFa: 'بیان بیشترین علاقه با am liebsten',
      explanationFa: 'وقتی بخواهیم بگوییم از همه‌ی گزینه‌ها کدام را بیشتر دوست داریم، از am liebsten در کنار würde استفاده می‌کنیم.',
      examples: [
        { de: 'Ich würde am liebsten ans Meer fahren.', fa: 'از همه بیشتر دوست دارم به دریا بروم.' },
        { de: 'Ihr würdet am liebsten in der Sonne liegen.', fa: 'شما (جمع) از همه بیشتر دوست دارید زیر آفتاب دراز بکشید.' },
      ],
      note: 'am liebsten معمولاً همراه با würde می‌آید و قوی‌تر از gern است — یعنی «از همه بیشتر».',
    },
    {
      id: 'nomen-mit-ung',
      titleDe: 'Nomen mit -ung',
      titleFa: 'ساخت اسم با پسوند -ung',
      explanationFa: 'از بعضی فعل‌ها می‌توانیم با اضافه کردن -ung یک اسم مفهومی یا فعالیت بسازیم. بیشتر این اسم‌ها مؤنث‌اند و با die می‌آیند.',
      examples: [
        { de: 'erholen → die Erholung', fa: 'استراحت کردن → استراحت / بازیابی انرژی' },
        { de: 'beraten → die Beratung', fa: 'مشاوره دادن → مشاوره' },
        { de: 'anmelden → die Anmeldung', fa: 'ثبت‌نام کردن → ثبت‌نام' },
        { de: 'wandern → die Wanderung', fa: 'پیاده‌روی کردن → پیاده‌روی' },
        { de: 'erfahren → die Erfahrung', fa: 'تجربه کردن → تجربه' },
      ],
      note: 'بیشتر اسم‌های ساخته‌شده با -ung مؤنث هستند: die Erholung, die Beratung, die Anmeldung.',
    },
    {
      id: 'nomen-mit-er',
      titleDe: 'Nomen mit -er',
      titleFa: 'ساخت اسم شخص با پسوند -er',
      explanationFa: 'گاهی از فعل، اسم شخصی می‌سازیم که آن کار را انجام می‌دهد. این اسم‌ها معمولاً مذکر هستند و با der می‌آیند.',
      examples: [
        { de: 'wandern → der Wanderer', fa: 'پیاده‌روی کردن → کوه‌پیما / گردشگر پیاده' },
        { de: 'vermieten → der Vermieter', fa: 'اجاره دادن → صاحبخانه / اجاره‌دهنده' },
        { de: 'fahren → der Fahrer', fa: 'رانندگی کردن → راننده' },
        { de: 'verkaufen → der Verkäufer', fa: 'فروختن → فروشنده' },
      ],
      note: 'برای حالت مؤنث می‌توان -in اضافه کرد: der Fahrer → die Fahrerin، der Verkäufer → die Verkäuferin.',
    },
    {
      id: 'ung-oder-er',
      titleDe: '-ung oder -er?',
      titleFa: 'تفاوت بین -ung و -er',
      explanationFa: '-ung برای ساخت اسم مفهوم یا فعالیت به‌کار می‌رود، و -er برای ساخت اسم شخصی که آن کار را انجام می‌دهد.',
      table: {
        headers: ['فعل', 'اسم با -ung', 'اسم با -er'],
        rows: [
          ['beraten', 'die Beratung', 'der Berater'],
          ['wandern', 'die Wanderung', 'der Wanderer'],
          ['verkaufen', '—', 'der Verkäufer'],
          ['anmelden', 'die Anmeldung', '—'],
        ],
      },
      note: 'اگر جمله درباره‌ی یک فعالیت یا مفهوم باشد، -ung به‌کار می‌رود؛ اگر جمله درباره‌ی یک شخص باشد، -er به‌کار می‌رود.',
    },
  ],

  vocabulary: [
    {
      id: 'natur',
      titleFa: 'طبیعت و محیط',
      items: [
        { de: 'der Wald', fa: 'جنگل' },
        { de: 'das Ufer', fa: 'ساحل / کنار آب' },
        { de: 'der Strand', fa: 'ساحل شنی' },
        { de: 'der Vogel', fa: 'پرنده' },
        { de: 'das Dorf', fa: 'روستا' },
        { de: 'die Landschaft', fa: 'منظره / چشم‌انداز' },
        { de: 'der See', fa: 'دریاچه' },
        { de: 'die Pflanze', fa: 'گیاه' },
        { de: 'die Sonne', fa: 'خورشید' },
        { de: 'das Meer', fa: 'دریا' },
      ],
    },
    {
      id: 'reise-urlaub',
      titleFa: 'سفر و اوقات فراغت',
      items: [
        { de: 'die Reise', fa: 'سفر' },
        { de: 'der Urlaub', fa: 'تعطیلات' },
        { de: 'buchen', fa: 'رزرو کردن' },
        { de: 'die Beratung', fa: 'مشاوره' },
        { de: 'die Erfahrung', fa: 'تجربه' },
        { de: 'die Fahrt', fa: 'مسیر / سفر با وسیله' },
        { de: 'die Gruppe', fa: 'گروه' },
        { de: 'der Service', fa: 'خدمات' },
        { de: 'die Erholung', fa: 'استراحت / بازیابی انرژی' },
        { de: 'die Ruhe', fa: 'آرامش' },
      ],
    },
    {
      id: 'eigenschaften-aktivitaeten',
      titleFa: 'صفت‌ها و فعالیت‌ها',
      items: [
        { de: 'aktiv', fa: 'فعال' },
        { de: 'sportlich', fa: 'ورزشکار / اهل ورزش' },
        { de: 'anstrengend', fa: 'خسته‌کننده / طاقت‌فرسا' },
        { de: 'wandern', fa: 'پیاده‌روی کردن' },
        { de: 'erleben', fa: 'تجربه کردن' },
        { de: 'surfen', fa: 'سرفینگ کردن' },
        { de: 'mieten', fa: 'اجاره کردن' },
        { de: 'vermieten', fa: 'اجاره دادن' },
        { de: 'verkaufen', fa: 'فروختن' },
      ],
    },
  ],

  redemittel: [
    {
      titleFa: 'بیان علاقه و خواسته',
      phrases: [
        { de: 'Ich würde gern …', fa: 'دوست دارم …' },
        { de: 'Ich würde am liebsten …', fa: 'از همه بیشتر دوست دارم …' },
        { de: 'Was würdest du gern machen?', fa: 'دوست داری چه کار کنی؟' },
        { de: 'Welche Idee gefällt dir am besten?', fa: 'کدام ایده بیشتر به تو خوش می‌آید؟' },
      ],
    },
    {
      titleFa: 'بیان نظر مثبت یا منفی',
      phrases: [
        { de: 'Das gefällt mir sehr gut.', fa: 'این خیلی به من خوش می‌آید.' },
        { de: 'Das gefällt mir überhaupt nicht.', fa: 'این اصلاً به من خوش نمی‌آید.' },
        { de: 'Das finde ich nicht so gut.', fa: 'این را خیلی خوب نمی‌دانم.' },
        { de: 'Das funktioniert bestimmt.', fa: 'این حتماً جواب می‌دهد.' },
        { de: 'Das liegt im Trend.', fa: 'این مد شده / ترند است.' },
      ],
    },
    {
      titleFa: 'بیان ترجیح',
      phrases: [
        { de: 'Ich fahre lieber mit dem Zug.', fa: 'من ترجیح می‌دهم با قطار بروم.' },
        { de: 'Ich würde lieber ans Meer fahren.', fa: 'من ترجیح می‌دهم به دریا بروم.' },
      ],
    },
  ],

  dialogues: [
    {
      id: 'dialog-reise-waehlen',
      titleFa: 'مکالمه درباره انتخاب سفر',
      lines: [
        { speaker: 'A', de: 'Welche Reise gefällt dir am besten?', fa: 'کدام سفر بیشتر به تو خوش می‌آید؟' },
        { speaker: 'B', de: 'Mir gefällt die Radtour am See sehr gut.', fa: 'تور دوچرخه کنار دریاچه خیلی به من خوش می‌آید.' },
        { speaker: 'A', de: 'Warum?', fa: 'چرا؟' },
        { speaker: 'B', de: 'Ich fahre gern Fahrrad und ich möchte die Natur sehen.', fa: 'من دوست دارم دوچرخه‌سواری کنم و می‌خواهم طبیعت را ببینم.' },
        { speaker: 'A', de: 'Ich würde lieber ans Meer fahren.', fa: 'من ترجیح می‌دهم به دریا بروم.' },
        { speaker: 'B', de: 'Echt? Warum?', fa: 'واقعاً؟ چرا؟' },
        { speaker: 'A', de: 'Ich möchte einen Surfkurs machen. Das finde ich spannend.', fa: 'می‌خواهم یک دوره‌ی سرفینگ بروم. این را جالب می‌دانم.' },
      ],
    },
    {
      id: 'dialog-reisebuero',
      titleFa: 'مکالمه در آژانس سفر',
      lines: [
        { speaker: 'A', de: 'Guten Tag. Ich suche eine Reise mit viel Ruhe und Natur.', fa: 'سلام. دنبال سفری با آرامش و طبیعت زیاد هستم.' },
        { speaker: 'B', de: 'Dann empfehle ich Ihnen unser Naturhotel am See.', fa: 'پس هتل طبیعت‌گرای ما کنار دریاچه را پیشنهاد می‌کنم.' },
        { speaker: 'A', de: 'Was kann man dort machen?', fa: 'آنجا چه کاری می‌توان کرد؟' },
        { speaker: 'B', de: 'Sie können wandern, schwimmen oder Fahrrad fahren.', fa: 'می‌توانید پیاده‌روی کنید، شنا کنید یا دوچرخه‌سواری کنید.' },
        { speaker: 'A', de: 'Gibt es auch Beratung vor Ort?', fa: 'آیا در محل هم مشاوره وجود دارد؟' },
        { speaker: 'B', de: 'Ja, unsere Mitarbeiter geben Ihnen Karten und Tipps.', fa: 'بله، همکاران ما به شما نقشه و نکات لازم را می‌دهند.' },
        { speaker: 'A', de: 'Das klingt gut. Ich würde gern eine Woche buchen.', fa: 'خوب به نظر می‌رسد. دوست دارم یک هفته رزرو کنم.' },
      ],
    },
    {
      id: 'dialog-deutschkurs-idee',
      titleFa: 'مکالمه درباره ایده‌ی سفر کلاس آلمانی',
      lines: [
        { speaker: 'A', de: 'Was machen wir mit dem Deutschkurs?', fa: 'با کلاس آلمانی چه کار کنیم؟' },
        { speaker: 'B', de: 'Ich würde gern an einen See fahren.', fa: 'دوست دارم به یک دریاچه برویم.' },
        { speaker: 'A', de: 'Warum?', fa: 'چرا؟' },
        { speaker: 'B', de: 'Da kann man schwimmen und in der Sonne liegen.', fa: 'آنجا می‌توان شنا کرد و زیر آفتاب دراز کشید.' },
        { speaker: 'A', de: 'Mir gefällt die Idee auch gut, aber vielleicht ist das Wetter schlecht.', fa: 'این ایده به من هم خوش می‌آید، اما شاید هوا بد باشد.' },
        { speaker: 'B', de: 'Dann könnten wir eine Stadt besuchen.', fa: 'پس می‌توانیم به یک شهر برویم.' },
        { speaker: 'A', de: 'Gute Idee!', fa: 'ایده‌ی خوبی است!' },
      ],
    },
  ],

  sampleStory: {
    de: 'Naturcamp am See. Sie brauchen Ruhe und Erholung? Dann kommen Sie zu uns! Unser Naturcamp liegt direkt an einem kleinen See. Hier können Sie wandern, schwimmen, Fahrrad fahren oder einfach in der Sonne liegen. Für Familien gibt es kleine Hütten und einen Spielplatz. Jeden Morgen bekommen Sie ein regionales Frühstück. Karten und Tipps bekommen Sie an der Rezeption. Eine Woche kostet ab 420 Euro pro Person.',
    fa: 'کمپ طبیعت کنار دریاچه. به آرامش و استراحت نیاز دارید؟ پس به ما بپیوندید! کمپ طبیعت ما مستقیماً کنار یک دریاچه‌ی کوچک قرار دارد. اینجا می‌توانید پیاده‌روی کنید، شنا کنید، دوچرخه‌سواری کنید یا فقط زیر آفتاب دراز بکشید. برای خانواده‌ها کلبه‌های کوچک و یک زمین بازی وجود دارد. هر روز صبح یک صبحانه‌ی محلی دریافت می‌کنید. نقشه و نکات لازم را در پذیرش می‌گیرید. یک هفته از ۴۲۰ یورو برای هر نفر شروع می‌شود.',
  },

  summaryClosingFa:
    'درس ۳ A2.1 درباره‌ی سفر، طبیعت، استراحت و انتخاب پیشنهادهای گردشگری است. در این درس یاد گرفتیم آگهی‌های ساده‌ی گردشگری را بخوانیم، درباره‌ی سفرها نظر بدهیم، علاقه و خواسته‌ی خود را با würde gern / am liebsten بیان کنیم و واژه‌های جدیدی با -ung و -er بسازیم. این درس برای A2 خیلی مهم است، چون زبان‌آموز یاد می‌گیرد فقط درباره‌ی سفر حرف نزند، بلکه نظر بدهد، پیشنهاد را ارزیابی کند، ترجیح خود را بیان کند و یک پیشنهاد سفر کوتاه بسازد.',
  summaryTopics: [
    'واژگان طبیعت و سفر',
    'Ich würde gern …',
    'Ich würde am liebsten …',
    'Nomen mit -ung',
    'Nomen mit -er',
    'بیان نظر درباره یک ایده',
    'Das liegt im Trend',
    'خواندن آگهی گردشگری',
    'گفت‌وگو درباره انتخاب سفر',
  ],
}
