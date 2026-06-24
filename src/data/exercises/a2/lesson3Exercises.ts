import { Exercise } from '@/types/exercise'

/**
 * A2.1 — Lektion 3: Reisen, Natur, würde gern / am liebsten, Nomen mit -ung / -er
 * Independent exercises written for this site — not copied from any
 * coursebook/workbook layout or wording.
 */
export const lesson3Exercises: Exercise[] = [

  // ── Exercise 1: Natur und Umwelt — multiple-choice ────────────────
  {
    id: 'a2-3-1-natur-wortschatz',
    title: 'Natur und Umwelt',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 3,
    instructionFa: 'با توجه به توضیح، کلمه‌ی آلمانی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie das richtige Wort.',
    explanationFa: 'این کلمات وسایل و مکان‌های مهم طبیعت را نشان می‌دهند.',
    items: [
      {
        id: '1',
        question: 'Ein Ort mit vielen Bäumen?',
        options: ['der Wald', 'der Strand', 'das Dorf'],
        correctIndex: 0,
        explanationFa: 'der Wald یعنی جنگل — جایی با درخت‌های زیاد.',
      },
      {
        id: '2',
        question: 'Direkt am Meer oder See?',
        options: ['das Ufer', 'die Katze', 'die Karte'],
        correctIndex: 0,
        explanationFa: 'das Ufer یعنی ساحل / کنار آب.',
      },
      {
        id: '3',
        question: 'Sand und Wasser am Meer?',
        options: ['der Strand', 'die Pflanze', 'der Unterricht'],
        correctIndex: 0,
        explanationFa: 'der Strand یعنی ساحل شنی.',
      },
      {
        id: '4',
        question: 'Ein Tier, das fliegt?',
        options: ['der Vogel', 'der Hund', 'die Katze'],
        correctIndex: 0,
        explanationFa: 'der Vogel یعنی پرنده.',
      },
      {
        id: '5',
        question: 'Kleiner als eine Stadt?',
        options: ['das Dorf', 'die Gruppe', 'der Trend'],
        correctIndex: 0,
        explanationFa: 'das Dorf یعنی روستا — جایی کوچک‌تر از شهر.',
      },
    ],
  },

  // ── Exercise 2: Nomen mit -ung — fill-blank ───────────────────────
  {
    id: 'a2-3-2-nomen-mit-ung',
    title: 'Nomen mit -ung',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 3,
    instructionFa: 'از فعل داده‌شده، اسم با پسوند -ung بسازید.',
    instructionDe: 'Bilden Sie das passende Nomen mit -ung.',
    explanationFa: 'بیشتر اسم‌های ساخته‌شده با -ung مؤنث هستند و با die می‌آیند.',
    items: [
      { id: '1', prompt: 'erholen → die ___', answer: 'Erholung', translationFa: 'استراحت کردن → استراحت / بازیابی انرژی' },
      { id: '2', prompt: 'beraten → die ___', answer: 'Beratung', translationFa: 'مشاوره دادن → مشاوره' },
      { id: '3', prompt: 'anmelden → die ___', answer: 'Anmeldung', translationFa: 'ثبت‌نام کردن → ثبت‌نام' },
      { id: '4', prompt: 'wandern → die ___', answer: 'Wanderung', translationFa: 'پیاده‌روی کردن → پیاده‌روی' },
      { id: '5', prompt: 'erfahren → die ___', answer: 'Erfahrung', translationFa: 'تجربه کردن → تجربه' },
      { id: '6', prompt: 'ordnen → die ___', answer: 'Ordnung', translationFa: 'مرتب کردن → نظم' },
    ],
  },

  // ── Exercise 3: Nomen mit -er — fill-blank ────────────────────────
  {
    id: 'a2-3-3-nomen-mit-er',
    title: 'Nomen mit -er',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 3,
    instructionFa: 'از فعل داده‌شده، اسم شخص با پسوند -er بسازید.',
    instructionDe: 'Bilden Sie das passende Nomen mit -er.',
    explanationFa: 'با -er معمولاً اسم شخص (اغلب مذکر، با der) ساخته می‌شود؛ برای زن می‌توان -in اضافه کرد.',
    items: [
      { id: '1', prompt: 'wandern → der ___', answer: 'Wanderer', translationFa: 'پیاده‌روی کردن → کوه‌پیما / گردشگر پیاده' },
      { id: '2', prompt: 'fahren → der ___', answer: 'Fahrer', translationFa: 'رانندگی کردن → راننده' },
      { id: '3', prompt: 'vermieten → der ___', answer: 'Vermieter', translationFa: 'اجاره دادن → صاحبخانه / اجاره‌دهنده' },
      { id: '4', prompt: 'beraten → der ___', answer: 'Berater', translationFa: 'مشاوره دادن → مشاور' },
      { id: '5', prompt: 'verkaufen → der ___', answer: 'Verkäufer', translationFa: 'فروختن → فروشنده' },
      { id: '6', prompt: 'mieten → der ___', answer: 'Mieter', translationFa: 'اجاره کردن → اجاره‌کننده' },
    ],
  },

  // ── Exercise 4: -ung oder -er? — multiple-choice ──────────────────
  {
    id: 'a2-3-4-ung-oder-er',
    title: '-ung oder -er?',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 3,
    instructionFa: 'گزینه‌ی درست را انتخاب کنید: اسم مفهوم/فعالیت (-ung) یا اسم شخص (-er)؟',
    instructionDe: 'Wählen Sie: -ung oder -er?',
    explanationFa: '-ung برای مفهوم یا فعالیت است؛ -er برای شخصی که آن کار را انجام می‌دهد.',
    items: [
      {
        id: '1',
        question: 'Ich brauche gute ___ für meine Reise.',
        options: ['Beratung', 'Berater'],
        correctIndex: 0,
        explanationFa: 'اینجا منظور خود مشاوره (فعالیت) است → Beratung',
      },
      {
        id: '2',
        question: 'Der ___ zeigt uns den Weg in den Bergen.',
        options: ['Wanderung', 'Wanderer'],
        correctIndex: 1,
        explanationFa: 'اینجا منظور شخص کوه‌پیما است → Wanderer',
      },
      {
        id: '3',
        question: 'Die ___ für den Kurs ist online.',
        options: ['Anmeldung', 'Anmelder'],
        correctIndex: 0,
        explanationFa: 'اینجا منظور خود ثبت‌نام (فعالیت) است → Anmeldung',
      },
      {
        id: '4',
        question: 'Der ___ verkauft Fahrräder.',
        options: ['Verkaufung', 'Verkäufer'],
        correctIndex: 1,
        explanationFa: 'اینجا منظور شخص فروشنده است → Verkäufer (Verkaufung وجود ندارد)',
      },
      {
        id: '5',
        question: 'Nach viel Stress brauche ich ___.',
        options: ['Erholung', 'Erholer'],
        correctIndex: 0,
        explanationFa: 'اینجا منظور خود استراحت (مفهوم) است → Erholung',
      },
      {
        id: '6',
        question: 'Die ___ war sehr anstrengend.',
        options: ['Wanderung', 'Wanderer'],
        correctIndex: 0,
        explanationFa: 'اینجا منظور خود پیاده‌روی (فعالیت) است → Wanderung',
      },
    ],
  },

  // ── Exercise 5: würde richtig konjugieren — fill-blank (word bank) ─
  {
    id: 'a2-3-5-wuerde-konjugieren',
    title: 'würde richtig konjugieren',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 3,
    instructionFa: 'جمله‌ها را با فرم درست würde کامل کنید.',
    instructionDe: 'Ergänzen Sie die richtige Form von würde.',
    wordBank: ['würde', 'würdest', 'würden', 'würdet'],
    explanationFa: 'würde با فاعل جمله صرف می‌شود: ich/er würde، du würdest، wir/sie würden، ihr würdet.',
    items: [
      { id: '1', prompt: 'Ich ___ gern eine Reise buchen.', answer: 'würde', translationFa: 'دوست دارم یک سفر رزرو کنم.' },
      { id: '2', prompt: 'Du ___ gern nach Italien fahren.', answer: 'würdest', translationFa: 'تو دوست داری به ایتالیا بروی.' },
      { id: '3', prompt: 'Er ___ am liebsten wandern.', answer: 'würde', translationFa: 'او از همه بیشتر دوست دارد پیاده‌روی کند.' },
      { id: '4', prompt: 'Wir ___ gern am See übernachten.', answer: 'würden', translationFa: 'ما دوست داریم کنار دریاچه بمانیم.' },
      { id: '5', prompt: 'Ihr ___ lieber eine Radtour machen.', answer: 'würdet', translationFa: 'شما (جمع) ترجیح می‌دهید یک تور دوچرخه بروید.' },
      { id: '6', prompt: 'Sie ___ gern einen Surfkurs machen.', answer: 'würden', translationFa: 'آن‌ها دوست دارند یک دوره‌ی سرفینگ بروند.' },
    ],
  },

  // ── Exercise 6: Urlaubswünsche mit würde gern — sentence-order ───
  {
    id: 'a2-3-6-urlaubswuensche-saetze',
    title: 'Urlaubswünsche mit würde gern',
    type: 'sentence-order',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 3,
    instructionFa: 'کلمات را به ترتیب درست بکشید یا روی آن‌ها کلیک کنید تا جمله‌ی کامل بسازید.',
    instructionDe: 'Bilden Sie mit den Wörtern einen vollständigen Satz.',
    explanationFa: 'würde در جایگاه دوم جمله می‌آید و فعل اصلی (مثل wandern, fahren, machen) به انتهای جمله می‌رود.',
    items: [
      {
        id: '1',
        words: ['wandern', 'gern', 'würde', '.', 'Ich'],
        correctOrder: ['Ich', 'würde', 'gern', 'wandern', '.'],
        translationFa: 'دوست دارم پیاده‌روی کنم.',
      },
      {
        id: '2',
        words: ['fahren', 'ans Meer', 'am liebsten', 'würde', '.', 'Ich'],
        correctOrder: ['Ich', 'würde', 'am liebsten', 'ans Meer', 'fahren', '.'],
        translationFa: 'از همه بیشتر دوست دارم به دریا بروم.',
      },
      {
        id: '3',
        words: ['machen', 'du', 'gern', 'einen Surfkurs', '?', 'Würdest'],
        correctOrder: ['Würdest', 'du', 'gern', 'einen Surfkurs', 'machen', '?'],
        translationFa: 'آیا دوست داری یک دوره‌ی سرفینگ بروی؟',
      },
      {
        id: '4',
        words: ['machen', 'eine Radtour', 'gern', '.', 'würden', 'Wir'],
        correctOrder: ['Wir', 'würden', 'gern', 'eine Radtour', 'machen', '.'],
        translationFa: 'ما دوست داریم یک تور دوچرخه برویم.',
      },
      {
        id: '5',
        words: ['liegen', 'in der Sonne', 'am liebsten', '.', 'würdet', 'Ihr'],
        correctOrder: ['Ihr', 'würdet', 'am liebsten', 'in der Sonne', 'liegen', '.'],
        translationFa: 'شما (جمع) از همه بیشتر دوست دارید زیر آفتاب دراز بکشید.',
      },
    ],
  },

  // ── Exercise 7: Welche Reise gefällt dir? — dialogue ──────────────
  {
    id: 'a2-3-7-dialog-reise-waehlen',
    title: 'Welche Reise gefällt dir?',
    type: 'dialogue',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 3,
    instructionFa: 'با استفاده از الگوی زیر، برای هر پیشنهاد سفر یک دیالوگ کوتاه بسازید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Bilden Sie mit dem Muster einen kurzen Dialog.',
    pattern: [
      'A: Welche Reise gefällt dir am besten?',
      'B: Mir gefällt … sehr gut.',
      'A: Warum?',
      'B: Ich … gern und ich möchte …',
      'A: Ich würde lieber …',
      'B: Warum?',
      'A: …',
    ],
    explanationFa: 'برای بیان علاقه از gefällt mir و برای بیان ترجیح از würde lieber استفاده می‌کنیم.',
    items: [
      {
        id: '1',
        promptFa: 'Wanderung in den Bergen',
        sampleAnswer:
          'A: Welche Reise gefällt dir am besten?\nB: Mir gefällt die Wanderung in den Bergen sehr gut.\nA: Warum?\nB: Ich wandere gern und ich möchte die Natur sehen.\nA: Ich würde lieber ans Meer fahren.\nB: Warum?\nA: Ich möchte einen Surfkurs machen.',
      },
      {
        id: '2',
        promptFa: 'Wellness-Hotel',
        sampleAnswer:
          'A: Welche Reise gefällt dir am besten?\nB: Mir gefällt das Wellness-Hotel sehr gut.\nA: Warum?\nB: Ich brauche Ruhe und Erholung und ich möchte mich entspannen.\nA: Ich würde lieber wandern gehen.\nB: Warum?\nA: Ich bin gern aktiv.',
      },
      {
        id: '3',
        promptFa: 'Surfkurs am Meer',
        sampleAnswer:
          'A: Welche Reise gefällt dir am besten?\nB: Mir gefällt der Surfkurs am Meer sehr gut.\nA: Warum?\nB: Ich surfe gern und ich möchte etwas Neues lernen.\nA: Ich würde lieber eine Radtour machen.\nB: Warum?\nA: Ich fahre lieber Fahrrad als zu surfen.',
      },
      {
        id: '4',
        promptFa: 'Städtereise nach Berlin',
        sampleAnswer:
          'A: Welche Reise gefällt dir am besten?\nB: Mir gefällt die Städtereise nach Berlin sehr gut.\nA: Warum?\nB: Ich gehe gern in Museen und ich möchte die Stadt erleben.\nA: Ich würde lieber am See übernachten.\nB: Warum?\nA: Ich brauche mehr Ruhe und Natur.',
      },
    ],
  },
]
