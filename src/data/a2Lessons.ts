import { A2Lesson, A2LessonVideo } from '@/types/a2'

// ─────────────────────────────────────────────
// PLACEHOLDER SENTINELS — replace with real URLs
// ─────────────────────────────────────────────
const PDF_PLACEHOLDER   = 'PDF_PLACEHOLDER'
const AUDIO_PLACEHOLDER = 'AUDIO_PLACEHOLDER'
const EX_PLACEHOLDER    = 'EXERCISE_PLACEHOLDER'

const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
function toPersianDigits(n: number) {
  return String(n).replace(/[0-9]/g, (d) => PERSIAN_DIGITS[Number(d)])
}

/** Builds the coursebook-video playlist for a lesson — count varies per lesson (4–6). */
function buildCoursebookVideos(lessonId: number, count: number): A2LessonVideo[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `lesson-${lessonId}-coursebook-${i + 1}`,
    title: `کتاب درسی — بخش ${toPersianDigits(i + 1)}`,
    type: 'coursebook',
    source: 'telegram',
    url: '', // fill in with the real Telegram post link
    isFree: true,
  }))
}

/** Builds the (usually single) workbook video for a lesson. */
function buildWorkbookVideo(lessonId: number): A2LessonVideo[] {
  return [
    {
      id: `lesson-${lessonId}-workbook-1`,
      title: `کتاب کار — تمرین‌های درس ${toPersianDigits(lessonId)}`,
      type: 'workbook',
      source: 'telegram',
      url: '', // fill in with the real Telegram post link
      isFree: true,
    },
  ]
}

export const a2Lessons: A2Lesson[] = [

  // ═══════════════════════════════
  //  A2.1  —  Lessons 1–12
  // ═══════════════════════════════

  {
    id: 1, part: 'A2.1', free: true,
    title: 'مرور A1 — احوالپرسی و معرفی',
    shortDescription: 'مروری بر درس‌های A1: معرفی خود، احوالپرسی رسمی و غیررسمی، فعل‌های پایه.',
    duration: '۴۵ دقیقه',
    tags: ['مرور', 'گرامر', 'مکالمه'],
    lessonVideos: buildCoursebookVideos(1, 4), workbookVideos: buildWorkbookVideo(1),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'die Begrüßung', fa: 'احوالپرسی', example: 'Die Begrüßung ist wichtig.' },
      { de: 'sich vorstellen', fa: 'معرفی کردن خود' },
      { de: 'formell / informell', fa: 'رسمی / غیررسمی' },
      { de: 'Wie geht es Ihnen?', fa: 'حال شما چطور است؟ (رسمی)' },
    ],
    sampleComments: [
      { id: '1-1', name: 'نیلوفر رضایی', text: 'مرور خوبی بود. همه‌چیز از A1 به خاطرم آمد.', stars: 5, date: '۱۴۰۳/۰۵/۰۱' },
      { id: '1-2', name: 'امیر حسینی', text: 'واضح و روان توضیح داده شده.', stars: 5, date: '۱۴۰۳/۰۵/۰۳' },
    ],
  },

  {
    id: 2, part: 'A2.1', free: true,
    title: 'خانواده و روابط',
    shortDescription: 'لغات خانواده، توضیح روابط خانوادگی، ساختار جملات توصیفی.',
    duration: '۵۰ دقیقه',
    tags: ['لغت', 'خانواده', 'گرامر'],
    lessonVideos: buildCoursebookVideos(2, 5), workbookVideos: buildWorkbookVideo(2),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'die Familie', fa: 'خانواده' },
      { de: 'der Bruder / die Schwester', fa: 'برادر / خواهر' },
      { de: 'die Großeltern', fa: 'پدربزرگ و مادربزرگ' },
      { de: 'verheiratet / ledig', fa: 'متأهل / مجرد' },
      { de: 'das Geschwister', fa: 'خواهر و برادر' },
    ],
    sampleComments: [
      { id: '2-1', name: 'سارا کریمی', text: 'درس خیلی کاربردی بود.', stars: 5, date: '۱۴۰۳/۰۵/۰۵' },
    ],
  },

  {
    id: 3, part: 'A2.1', free: true,
    title: 'خانه و آپارتمان',
    shortDescription: 'اتاق‌ها، لوازم خانگی، توضیح خانه به آلمانی و حروف اضافه مکانی.',
    duration: '۵۵ دقیقه',
    tags: ['لغت', 'مکان', 'حروف اضافه'],
    lessonVideos: buildCoursebookVideos(3, 6), workbookVideos: buildWorkbookVideo(3),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'die Wohnung', fa: 'آپارتمان' },
      { de: 'das Schlafzimmer', fa: 'اتاق خواب' },
      { de: 'die Küche', fa: 'آشپزخانه' },
      { de: 'neben / zwischen / gegenüber', fa: 'کنار / بین / روبرو' },
      { de: 'die Miete', fa: 'اجاره' },
    ],
    sampleComments: [
      { id: '3-1', name: 'علی محمدی', text: 'حروف اضافه مکانی را بالاخره یاد گرفتم!', stars: 5, date: '۱۴۰۳/۰۵/۰۸' },
    ],
  },

  {
    id: 4, part: 'A2.1', free: true,
    title: 'روز و برنامه روزانه',
    shortDescription: 'فعل‌های جدا شدنی، بیان ساعت، توصیف برنامه روزانه.',
    duration: '۵۰ دقیقه',
    tags: ['گرامر', 'فعل‌های جداشدنی', 'زمان'],
    lessonVideos: buildCoursebookVideos(4, 4), workbookVideos: buildWorkbookVideo(4),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'aufstehen', fa: 'بلند شدن', example: 'Ich stehe um 7 Uhr auf.' },
      { de: 'frühstücken', fa: 'صبحانه خوردن' },
      { de: 'der Tagesablauf', fa: 'برنامه روزانه' },
      { de: 'morgens / abends', fa: 'صبح‌ها / شب‌ها' },
    ],
    sampleComments: [
      { id: '4-1', name: 'مریم صادقی', text: 'فعل‌های جداشدنی خیلی خوب توضیح داده شد.', stars: 5, date: '۱۴۰۳/۰۵/۱۰' },
    ],
  },

  {
    id: 5, part: 'A2.1', free: true,
    title: 'خرید و مغازه‌ها',
    shortDescription: 'دیالوگ‌های خرید، قیمت پرسیدن، مقایسه با صفات تفضیلی.',
    duration: '۴۵ دقیقه',
    tags: ['مکالمه', 'خرید', 'صفات'],
    lessonVideos: buildCoursebookVideos(5, 5), workbookVideos: buildWorkbookVideo(5),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'das Geschäft / der Laden', fa: 'مغازه' },
      { de: 'Was kostet das?', fa: 'این چقدر است؟' },
      { de: 'billiger / teurer', fa: 'ارزان‌تر / گران‌تر' },
      { de: 'der Einkauf', fa: 'خرید' },
      { de: 'bezahlen', fa: 'پرداخت کردن' },
    ],
    sampleComments: [],
  },

  {
    id: 6, part: 'A2.1', free: true,
    title: 'غذا و آشپزخانه',
    shortDescription: 'لغات غذا، سفارش دادن در رستوران، دستور پخت ساده.',
    duration: '۵۵ دقیقه',
    tags: ['لغت', 'غذا', 'مکالمه'],
    lessonVideos: buildCoursebookVideos(6, 6), workbookVideos: buildWorkbookVideo(6),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'das Essen / die Speise', fa: 'غذا' },
      { de: 'Ich hätte gern…', fa: 'من می‌خواستم…' },
      { de: 'die Zutaten', fa: 'مواد اولیه' },
      { de: 'schmecken', fa: 'مزه دادن' },
      { de: 'vegetarisch', fa: 'گیاهخواری' },
    ],
    sampleComments: [
      { id: '6-1', name: 'کاوه رضایی', text: 'بخش رستوران خیلی کاربردی بود!', stars: 5, date: '۱۴۰۳/۰۵/۱۵' },
    ],
  },

  {
    id: 7, part: 'A2.1', free: true,
    title: 'حمل‌ونقل و مسیریابی',
    shortDescription: 'پرسیدن مسیر، استفاده از وسایل نقلیه عمومی، ساختار جمله با حروف اضافه.',
    duration: '۵۰ دقیقه',
    tags: ['مکالمه', 'شهر', 'حمل‌ونقل'],
    lessonVideos: buildCoursebookVideos(7, 4), workbookVideos: buildWorkbookVideo(7),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'der Bus / die U-Bahn', fa: 'اتوبوس / مترو' },
      { de: 'Wie komme ich zum…?', fa: 'چطور به … می‌رسم؟' },
      { de: 'links / rechts / geradeaus', fa: 'چپ / راست / مستقیم' },
      { de: 'die Haltestelle', fa: 'ایستگاه' },
    ],
    sampleComments: [],
  },

  {
    id: 8, part: 'A2.1', free: true,
    title: 'کار و حرفه',
    shortDescription: 'معرفی شغل، توضیح مسئولیت‌ها، جملات در محیط کار.',
    duration: '۵۵ دقیقه',
    tags: ['کار', 'لغت', 'مکالمه'],
    lessonVideos: buildCoursebookVideos(8, 5), workbookVideos: buildWorkbookVideo(8),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'der Beruf', fa: 'حرفه / شغل' },
      { de: 'Was machen Sie beruflich?', fa: 'شغل شما چیست؟' },
      { de: 'der Kollege / die Kollegin', fa: 'همکار' },
      { de: 'das Büro', fa: 'دفتر' },
      { de: 'arbeitslos', fa: 'بیکار' },
    ],
    sampleComments: [
      { id: '8-1', name: 'فرشته نوری', text: 'خیلی به دردم خورد برای مصاحبه کاری.', stars: 5, date: '۱۴۰۳/۰۵/۲۰' },
    ],
  },

  {
    id: 9, part: 'A2.1', free: true,
    title: 'اوقات فراغت و سرگرمی',
    shortDescription: 'بیان علاقه‌مندی‌ها، دعوت کردن، رد کردن دعوت با مؤدبانه.',
    duration: '۴۵ دقیقه',
    tags: ['مکالمه', 'علایق', 'لغت'],
    lessonVideos: buildCoursebookVideos(9, 4), workbookVideos: buildWorkbookVideo(9),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'das Hobby', fa: 'سرگرمی' },
      { de: 'Ich interessiere mich für…', fa: 'به … علاقه دارم.' },
      { de: 'leider kann ich nicht', fa: 'متأسفانه نمی‌توانم' },
      { de: 'der Verein', fa: 'باشگاه / انجمن' },
    ],
    sampleComments: [],
  },

  {
    id: 10, part: 'A2.1', free: true,
    title: 'پوشاک و مد',
    shortDescription: 'لغات لباس، رنگ‌ها، خرید لباس و تعریف‌کردن.',
    duration: '۴۰ دقیقه',
    tags: ['لغت', 'خرید', 'توصیف'],
    lessonVideos: buildCoursebookVideos(10, 5), workbookVideos: buildWorkbookVideo(10),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'das Kleid / die Hose', fa: 'لباس / شلوار' },
      { de: 'die Größe', fa: 'سایز' },
      { de: 'Das steht Ihnen gut!', fa: 'این به شما می‌آید!' },
      { de: 'umtauschen', fa: 'تعویض کردن' },
    ],
    sampleComments: [],
  },

  {
    id: 11, part: 'A2.1', free: true,
    title: 'بهداشت و سلامتی',
    shortDescription: 'بیان درد، مراجعه به پزشک، داروخانه.',
    duration: '۵۰ دقیقه',
    tags: ['سلامتی', 'مکالمه', 'لغت'],
    lessonVideos: buildCoursebookVideos(11, 4), workbookVideos: buildWorkbookVideo(11),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'der Arzt / die Ärztin', fa: 'پزشک' },
      { de: 'Mir tut der Kopf weh.', fa: 'سرم درد می‌کند.' },
      { de: 'das Rezept', fa: 'نسخه' },
      { de: 'die Apotheke', fa: 'داروخانه' },
      { de: 'die Krankenversicherung', fa: 'بیمه درمانی' },
    ],
    sampleComments: [
      { id: '11-1', name: 'آرش موسوی', text: 'این درس برای زندگی در آلمان خیلی ضروریه.', stars: 5, date: '۱۴۰۳/۰۶/۰۱' },
    ],
  },

  {
    id: 12, part: 'A2.1', free: true,
    title: 'مرور A2.1 — آزمون میانی',
    shortDescription: 'مرور کامل درس‌های ۱ تا ۱۱، آزمون تمرینی A2.1.',
    duration: '۶۰ دقیقه',
    tags: ['مرور', 'آزمون', 'A2.1'],
    lessonVideos: buildCoursebookVideos(12, 6), workbookVideos: buildWorkbookVideo(12),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [],
    sampleComments: [
      { id: '12-1', name: 'لیلا احمدی', text: 'آزمون میانی خوبی بود. همه‌چیز پوشش داده شد.', stars: 5, date: '۱۴۰۳/۰۶/۰۵' },
      { id: '12-2', name: 'حامد رضایی', text: 'سخت‌تر از چیزی بود که فکر می‌کردم ولی آموختنی.', stars: 4, date: '۱۴۰۳/۰۶/۰۷' },
    ],
  },

  // ═══════════════════════════════
  //  A2.2  —  Lessons 13–24
  // ═══════════════════════════════

  {
    id: 13, part: 'A2.2', free: true,
    title: 'آب‌وهوا و فصل‌ها',
    shortDescription: 'توصیف هوا، فصل‌ها، جملات با Konjunktiv II برای بیان آرزو.',
    duration: '۴۵ دقیقه',
    tags: ['لغت', 'هوا', 'گرامر'],
    lessonVideos: buildCoursebookVideos(13, 4), workbookVideos: buildWorkbookVideo(13),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'das Wetter', fa: 'هوا' },
      { de: 'Es regnet / schneit.', fa: 'باران می‌بارد / برف می‌آید.' },
      { de: 'der Frühling / Sommer / Herbst / Winter', fa: 'بهار / تابستان / پاییز / زمستان' },
      { de: 'die Temperatur', fa: 'دما' },
    ],
    sampleComments: [],
  },

  {
    id: 14, part: 'A2.2', free: true,
    title: 'مسافرت و هتل',
    shortDescription: 'رزرو هتل، پرسیدن اطلاعات، مکالمه‌های فرودگاه.',
    duration: '۵۵ دقیقه',
    tags: ['مسافرت', 'مکالمه', 'لغت'],
    lessonVideos: buildCoursebookVideos(14, 5), workbookVideos: buildWorkbookVideo(14),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'das Hotel / die Unterkunft', fa: 'هتل / اقامتگاه' },
      { de: 'reservieren', fa: 'رزرو کردن' },
      { de: 'der Flug', fa: 'پرواز' },
      { de: 'die Rezeption', fa: 'پذیرش' },
      { de: 'das Doppelzimmer', fa: 'اتاق دو تخته' },
    ],
    sampleComments: [
      { id: '14-1', name: 'نگار صادقی', text: 'این درس قبل از سفرم به آلمان خیلی کمک کرد!', stars: 5, date: '۱۴۰۳/۰۶/۱۰' },
    ],
  },

  {
    id: 15, part: 'A2.2', free: true,
    title: 'تلفن و ارتباطات',
    shortDescription: 'مکالمه تلفنی، پیام گذاشتن، ارتباط رسمی.',
    duration: '۴۵ دقیقه',
    tags: ['مکالمه', 'تلفن', 'رسمی'],
    lessonVideos: buildCoursebookVideos(15, 6), workbookVideos: buildWorkbookVideo(15),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'Hier ist…', fa: 'اینجا … صحبت می‌کند.' },
      { de: 'Einen Moment bitte.', fa: 'یک لحظه لطفاً.' },
      { de: 'die Nachricht', fa: 'پیام' },
      { de: 'zurückrufen', fa: 'زنگ زدن به کسی' },
    ],
    sampleComments: [],
  },

  {
    id: 16, part: 'A2.2', free: true,
    title: 'پول و بانک',
    shortDescription: 'مکالمه در بانک، باز کردن حساب، پرداخت قبض.',
    duration: '۵۰ دقیقه',
    tags: ['بانک', 'مکالمه', 'لغت'],
    lessonVideos: buildCoursebookVideos(16, 4), workbookVideos: buildWorkbookVideo(16),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'das Konto', fa: 'حساب بانکی' },
      { de: 'überweisen', fa: 'انتقال دادن (پول)' },
      { de: 'der Kontoauszug', fa: 'صورت حساب' },
      { de: 'bar / mit Karte', fa: 'نقدی / با کارت' },
    ],
    sampleComments: [],
  },

  {
    id: 17, part: 'A2.2', free: true,
    title: 'تحصیل و مدرسه',
    shortDescription: 'سیستم آموزشی آلمان، لغات دانشگاه و مدرسه، نوشتن درخواست.',
    duration: '۵۵ دقیقه',
    tags: ['تحصیل', 'لغت', 'گرامر'],
    lessonVideos: buildCoursebookVideos(17, 5), workbookVideos: buildWorkbookVideo(17),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'die Schule / die Universität', fa: 'مدرسه / دانشگاه' },
      { de: 'das Studium', fa: 'تحصیل دانشگاهی' },
      { de: 'der Abschluss', fa: 'مدرک تحصیلی' },
      { de: 'sich bewerben', fa: 'درخواست دادن' },
    ],
    sampleComments: [
      { id: '17-1', name: 'پریسا نیکزاد', text: 'این درس برای اپلای دانشگاه خیلی مفید بود.', stars: 5, date: '۱۴۰۳/۰۶/۱۵' },
    ],
  },

  {
    id: 18, part: 'A2.2', free: true,
    title: 'فناوری و اینترنت',
    shortDescription: 'لغات دیجیتال، رسانه‌های اجتماعی، جملات با Passiv ساده.',
    duration: '۴۵ دقیقه',
    tags: ['فناوری', 'لغت', 'Passiv'],
    lessonVideos: buildCoursebookVideos(18, 4), workbookVideos: buildWorkbookVideo(18),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'das Smartphone', fa: 'گوشی هوشمند' },
      { de: 'herunterladen', fa: 'دانلود کردن' },
      { de: 'das Passwort', fa: 'رمز عبور' },
      { de: 'die soziale Medien', fa: 'رسانه‌های اجتماعی' },
    ],
    sampleComments: [],
  },

  {
    id: 19, part: 'A2.2', free: true,
    title: 'طبیعت و محیط زیست',
    shortDescription: 'لغات طبیعت، مشکلات محیط زیستی، صحبت درباره راه‌حل‌ها.',
    duration: '۵۰ دقیقه',
    tags: ['محیط زیست', 'لغت', 'گفتگو'],
    lessonVideos: buildCoursebookVideos(19, 5), workbookVideos: buildWorkbookVideo(19),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'die Umwelt', fa: 'محیط زیست' },
      { de: 'recyceln', fa: 'بازیافت کردن' },
      { de: 'der Klimawandel', fa: 'تغییر آب‌وهوا' },
      { de: 'erneuerbare Energie', fa: 'انرژی تجدیدپذیر' },
    ],
    sampleComments: [],
  },

  {
    id: 20, part: 'A2.2', free: true,
    title: 'فرهنگ و آداب آلمان',
    shortDescription: 'آداب اجتماعی در آلمان، تعطیلات، رسوم فرهنگی مهم.',
    duration: '۵۰ دقیقه',
    tags: ['فرهنگ', 'آلمان', 'جامعه'],
    lessonVideos: buildCoursebookVideos(20, 6), workbookVideos: buildWorkbookVideo(20),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'die Pünktlichkeit', fa: 'دقت در وقت‌شناسی' },
      { de: 'der Feiertag', fa: 'تعطیل رسمی' },
      { de: 'das Oktoberfest', fa: 'جشن اکتبر' },
      { de: 'die Gastfreundschaft', fa: 'مهمان‌نوازی' },
    ],
    sampleComments: [
      { id: '20-1', name: 'رها شیرازی', text: 'این درس چشم‌هام رو به فرهنگ آلمان باز کرد.', stars: 5, date: '۱۴۰۳/۰۶/۲۰' },
    ],
  },

  {
    id: 21, part: 'A2.2', free: true,
    title: 'آمادگی TestDaF — مهارت Hören',
    shortDescription: 'تکنیک‌های گوش دادن، تمرین سوالات Hören سطح A2/B1.',
    duration: '۶۰ دقیقه',
    tags: ['TestDaF', 'Hören', 'آزمون'],
    lessonVideos: buildCoursebookVideos(21, 4), workbookVideos: buildWorkbookVideo(21),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'zuhören', fa: 'گوش دادن' },
      { de: 'die Aufgabe', fa: 'تکلیف / سوال' },
      { de: 'markieren', fa: 'علامت زدن' },
      { de: 'der Hörverstehen', fa: 'درک شنیداری' },
    ],
    sampleComments: [
      { id: '21-1', name: 'مهدی نظری', text: 'تکنیک‌ها خیلی کمک‌کننده بودن.', stars: 5, date: '۱۴۰۳/۰۶/۲۵' },
    ],
  },

  {
    id: 22, part: 'A2.2', free: true,
    title: 'آمادگی TestDaF — مهارت Lesen',
    shortDescription: 'استراتژی‌های خواندن، انواع متن، تمرین سوالات Lesen.',
    duration: '۶۰ دقیقه',
    tags: ['TestDaF', 'Lesen', 'آزمون'],
    lessonVideos: buildCoursebookVideos(22, 5), workbookVideos: buildWorkbookVideo(22),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'der Text / der Artikel', fa: 'متن / مقاله' },
      { de: 'überfliegen', fa: 'نگاه اجمالی انداختن' },
      { de: 'der Schlüsselbegriff', fa: 'کلیدواژه' },
      { de: 'das Leseverstehen', fa: 'درک مطلب' },
    ],
    sampleComments: [],
  },

  {
    id: 23, part: 'A2.2', free: true,
    title: 'آمادگی TestDaF — مهارت Schreiben',
    shortDescription: 'ساختار نامه رسمی، نوشتن ایمیل، بیان نظر.',
    duration: '۶۵ دقیقه',
    tags: ['TestDaF', 'Schreiben', 'نوشتار'],
    lessonVideos: buildCoursebookVideos(23, 4), workbookVideos: buildWorkbookVideo(23),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [
      { de: 'der Brief / die E-Mail', fa: 'نامه / ایمیل' },
      { de: 'Sehr geehrte Damen und Herren', fa: 'با احترام (شروع نامه)' },
      { de: 'Mit freundlichen Grüßen', fa: 'با احترام (پایان نامه)' },
      { de: 'der Schreibstil', fa: 'سبک نوشتاری' },
    ],
    sampleComments: [
      { id: '23-1', name: 'زهرا کریمی', text: 'بالاخره یاد گرفتم چطور نامه رسمی بنویسم!', stars: 5, date: '۱۴۰۳/۰۷/۰۱' },
    ],
  },

  {
    id: 24, part: 'A2.2', free: true,
    title: 'مرور نهایی A2 — آزمون پایانی',
    shortDescription: 'مرور کامل A2.1 و A2.2، آزمون پایانی، گواهینامه دیجیتال.',
    duration: '۷۰ دقیقه',
    tags: ['مرور', 'آزمون پایانی', 'A2'],
    lessonVideos: buildCoursebookVideos(24, 6), workbookVideos: buildWorkbookVideo(24),
    pdfUrl: PDF_PLACEHOLDER, audioUrl: AUDIO_PLACEHOLDER, exercisesUrl: EX_PLACEHOLDER,
    vocabulary: [],
    sampleComments: [
      { id: '24-1', name: 'بهناز موسوی', text: 'دوره فوق‌العاده‌ای بود. از A2 فارغ‌التحصیل شدم! 🎉', stars: 5, date: '۱۴۰۳/۰۷/۱۰' },
      { id: '24-2', name: 'سجاد امیری', text: 'میلاد واقعاً بهترینه. ممنون از این دوره کامل.', stars: 5, date: '۱۴۰۳/۰۷/۱۲' },
    ],
  },
]

export const a2Part1 = a2Lessons.filter((l) => l.part === 'A2.1')
export const a2Part2 = a2Lessons.filter((l) => l.part === 'A2.2')

export function getA2Lesson(id: number) {
  return a2Lessons.find((l) => l.id === id) ?? null
}
export function getA2Adjacent(id: number) {
  const idx = a2Lessons.findIndex((l) => l.id === id)
  return {
    prev: a2Lessons[idx - 1] ?? null,
    next: a2Lessons[idx + 1] ?? null,
  }
}
