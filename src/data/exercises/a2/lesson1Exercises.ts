import { Exercise } from '@/types/exercise'

/**
 * A2.1 — Lektion 1: Familie, Berufe, Kindheit, Possessivartikel, Perfekt
 * Independent exercises written for this site — not copied from any
 * coursebook/workbook layout or wording.
 */
export const lesson1Exercises: Exercise[] = [

  // ── Exercise 1: Familienwortschatz — fill-blank ──────────────────
  {
    id: 'a2-1-1-familie-wortschatz',
    title: 'Familie: Wer ist das?',
    type: 'fill-blank',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 1,
    instructionFa: 'جمله‌ها را با کلمه مناسب از بانک کلمات کامل کنید.',
    instructionDe: 'Ergänzen Sie die Sätze mit dem passenden Wort.',
    wordBank: ['Onkel', 'Tante', 'Cousin', 'Cousine', 'Neffe', 'Nichte', 'Schwiegervater', 'Schwiegermutter'],
    explanationFa: 'این کلمات نسبت‌های خانوادگی را نشان می‌دهند — مهم است جنسیت (مذکر/مؤنث) درست انتخاب شود.',
    items: [
      { id: '1', prompt: 'Der Bruder von meiner Mutter ist mein ___.', answer: 'Onkel', translationFa: 'برادر مادرم، عموی من است.' },
      { id: '2', prompt: 'Die Schwester von meinem Vater ist meine ___.', answer: 'Tante', translationFa: 'خواهر پدرم، عمه من است.' },
      { id: '3', prompt: 'Der Sohn von meiner Tante ist mein ___.', answer: 'Cousin', translationFa: 'پسر عمه‌ام، پسرعمه/پسرخاله من است.' },
      { id: '4', prompt: 'Die Tochter von meinem Onkel ist meine ___.', answer: 'Cousine', translationFa: 'دختر عمویم، دخترعمو/دخترخاله من است.' },
      { id: '5', prompt: 'Der Sohn von meiner Schwester ist mein ___.', answer: 'Neffe', translationFa: 'پسر خواهرم، خواهرزاده‌ی من (پسر) است.' },
      { id: '6', prompt: 'Die Tochter von meinem Bruder ist meine ___.', answer: 'Nichte', translationFa: 'دختر برادرم، برادرزاده‌ی من (دختر) است.' },
      { id: '7', prompt: 'Der Vater von meiner Frau ist mein ___.', answer: 'Schwiegervater', translationFa: 'پدر همسرم، پدرزن/پدرشوهر من است.' },
      { id: '8', prompt: 'Die Mutter von meinem Mann ist meine ___.', answer: 'Schwiegermutter', translationFa: 'مادر شوهرم، مادرشوهر من است.' },
    ],
  },

  // ── Exercise 2: Über Familie und Berufe sprechen — dialogue ──────
  {
    id: 'a2-1-2-dialog-familie-beruf',
    title: 'Über Familie und Berufe sprechen',
    type: 'dialogue',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 1,
    instructionFa: 'با استفاده از الگوی زیر، برای هر مورد یک دیالوگ کوتاه بسازید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Bilden Sie mit dem Muster einen kurzen Dialog.',
    pattern: [
      'A: Hast du einen/eine ...?',
      'B: Ja, ich habe einen/eine ... Er/Sie heißt ...',
      'A: Was ist er/sie von Beruf?',
      'B: Er/Sie ist ...',
      'A: Möchtest du auch ... werden?',
      'B: Ja/Nein, ich möchte lieber ...',
    ],
    explanationFa: 'در آلمانی برای پرسیدن شغل می‌گوییم «Was ist er/sie von Beruf?» و در پاسخ فعل sein بدون حرف تعریف می‌آید: «Er ist Bäcker.»',
    items: [
      {
        id: '1',
        promptFa: 'Tante / Ärztin',
        sampleAnswer:
          'A: Hast du eine Tante?\nB: Ja, ich habe eine Tante. Sie heißt Mina.\nA: Was ist sie von Beruf?\nB: Sie ist Ärztin.\nA: Möchtest du auch Ärztin werden?\nB: Nein, ich möchte lieber etwas anderes machen.',
      },
      {
        id: '2',
        promptFa: 'Cousin / Koch',
        sampleAnswer:
          'A: Hast du einen Cousin?\nB: Ja, ich habe einen Cousin. Er heißt Max.\nA: Was ist er von Beruf?\nB: Er ist Koch.\nA: Möchtest du auch Koch werden?\nB: Ja, das wäre schön.',
      },
      {
        id: '3',
        promptFa: 'Großvater / Lehrer',
        sampleAnswer:
          'A: Hast du einen Großvater?\nB: Ja, ich habe einen Großvater. Er heißt Hans.\nA: Was ist er von Beruf?\nB: Er ist Lehrer.\nA: Möchtest du auch Lehrer werden?\nB: Nein, ich möchte lieber Deutschlehrer werden.',
      },
      {
        id: '4',
        promptFa: 'Schwester / Journalistin',
        sampleAnswer:
          'A: Hast du eine Schwester?\nB: Ja, ich habe eine Schwester. Sie heißt Lena.\nA: Was ist sie von Beruf?\nB: Sie ist Journalistin.\nA: Möchtest du auch Journalistin werden?\nB: Ja, das interessiert mich sehr.',
      },
    ],
  },

  // ── Exercise 3: Possessivartikel im Nominativ — fill-blank ───────
  {
    id: 'a2-1-3-possessiv-nominativ',
    title: 'Possessivartikel im Nominativ',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 1,
    instructionFa: 'جمله‌ها را با ضمیر ملکی مناسب کامل کنید.',
    instructionDe: 'Ergänzen Sie die Sätze mit dem passenden Possessivartikel.',
    explanationFa: 'Possessivartikel مثل Artikel نامعین، با جنسیت و تعداد اسم بعد از خودش تغییر می‌کند — برای مردانه/خنثی در Nominativ بدون پایانه، برای مؤنث و جمع با پایانه‌ی -e.',
    items: [
      { id: '1', prompt: 'Ich habe einen Bruder. ___ Bruder heißt Ali.', answer: 'Mein' },
      { id: '2', prompt: 'Du hast eine Schwester. ___ Schwester wohnt in Berlin.', answer: 'Deine' },
      { id: '3', prompt: 'Er hat einen Sohn. ___ Sohn ist 10 Jahre alt.', answer: 'Sein' },
      { id: '4', prompt: 'Sie hat eine Tochter. ___ Tochter spielt Fußball.', answer: 'Ihre' },
      { id: '5', prompt: 'Wir haben ein Auto. ___ Auto ist neu.', answer: 'Unser' },
      { id: '6', prompt: 'Ihr habt eine Wohnung. ___ Wohnung ist schön.', answer: 'Eure' },
      { id: '7', prompt: 'Sie haben zwei Kinder. ___ Kinder gehen zur Schule.', answer: 'Ihre' },
      { id: '8', prompt: 'Herr Müller, ist das ___ Hund?', answer: 'Ihr' },
    ],
  },

  // ── Exercise 4: mein / meinen / meinem — multiple-choice ─────────
  {
    id: 'a2-1-4-mein-meinen-meinem',
    title: 'mein, meinen oder meinem?',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 1,
    instructionFa: 'گزینه‌ی درست را برای هر جمله انتخاب کنید.',
    instructionDe: 'Wählen Sie die richtige Form.',
    explanationFa: 'Nominativ برای فاعل جمله، Akkusativ برای مفعول مستقیم (معمولاً بعد از فعل) و Dativ بعد از حرف اضافه‌ی mit یا برای مفعول غیرمستقیم به‌کار می‌رود.',
    items: [
      {
        id: '1',
        question: 'Das ist ___ Vater.',
        options: ['mein', 'meinen', 'meinem'],
        correctIndex: 0,
        explanationFa: 'فاعل جمله (Nominativ) → mein',
      },
      {
        id: '2',
        question: 'Ich besuche heute ___ Vater.',
        options: ['mein', 'meinen', 'meinem'],
        correctIndex: 1,
        explanationFa: 'مفعول مستقیم فعل besuchen (Akkusativ) → meinen',
      },
      {
        id: '3',
        question: 'Ich helfe ___ Vater.',
        options: ['mein', 'meinen', 'meinem'],
        correctIndex: 2,
        explanationFa: 'فعل helfen همیشه با Dativ می‌آید → meinem',
      },
      {
        id: '4',
        question: 'Das ist ___ Mutter.',
        options: ['meine', 'meinen', 'meiner'],
        correctIndex: 0,
        explanationFa: 'فاعل جمله، اسم مؤنث (Nominativ) → meine',
      },
      {
        id: '5',
        question: 'Ich besuche ___ Mutter.',
        options: ['meine', 'meinen', 'meiner'],
        correctIndex: 0,
        explanationFa: 'مفعول مستقیم، اسم مؤنث (Akkusativ) → meine (برای مؤنث بدون تغییر)',
      },
      {
        id: '6',
        question: 'Ich telefoniere mit ___ Mutter.',
        options: ['meine', 'meinen', 'meiner'],
        correctIndex: 2,
        explanationFa: 'بعد از حرف اضافه‌ی mit همیشه Dativ می‌آید، برای مؤنث → meiner',
      },
    ],
  },

  // ── Exercise 5: Berufe in meiner Familie — sentence building ─────
  {
    id: 'a2-1-5-berufe-familie',
    title: 'Berufe in meiner Familie',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 1,
    instructionFa: 'با اسم خانواده و شغل داده‌شده، یک جمله‌ی کامل بسازید. می‌توانید از war (گذشته) یا ist (حال) استفاده کنید.',
    instructionDe: 'Bilden Sie einen vollständigen Satz.',
    explanationFa: 'برای شغل در گذشته از war (Präteritum von sein) و برای شغل در حال حاضر از ist استفاده می‌کنیم — هر دو شکل در این تمرین پذیرفته می‌شود.',
    items: [
      {
        id: '1',
        prompt: 'Großmutter / Lehrerin →',
        answer: ['Meine Großmutter war Lehrerin.', 'Meine Großmutter ist Lehrerin.'],
        translationFa: 'مادربزرگم معلم بود / است.',
      },
      {
        id: '2',
        prompt: 'Vater / Arzt →',
        answer: ['Mein Vater war Arzt.', 'Mein Vater ist Arzt.'],
        translationFa: 'پدرم پزشک بود / است.',
      },
      {
        id: '3',
        prompt: 'Mutter / Verkäuferin →',
        answer: ['Meine Mutter war Verkäuferin.', 'Meine Mutter ist Verkäuferin.'],
        translationFa: 'مادرم فروشنده بود / است.',
      },
      {
        id: '4',
        prompt: 'Onkel / Mechaniker →',
        answer: ['Mein Onkel war Mechaniker.', 'Mein Onkel ist Mechaniker.'],
        translationFa: 'عمویم/داییم مکانیک بود / است.',
      },
      {
        id: '5',
        prompt: 'Tante / Krankenschwester →',
        answer: ['Meine Tante war Krankenschwester.', 'Meine Tante ist Krankenschwester.'],
        translationFa: 'عمه‌ام/خاله‌ام پرستار بود / است.',
      },
      {
        id: '6',
        prompt: 'Cousin / Student →',
        answer: ['Mein Cousin war Student.', 'Mein Cousin ist Student.'],
        translationFa: 'پسرعموی/پسرخاله‌ام دانشجو بود / است.',
      },
    ],
  },
]

export function getExercisesForLesson(lessonId: number): Exercise[] {
  if (lessonId === 1) return lesson1Exercises
  return []
}
