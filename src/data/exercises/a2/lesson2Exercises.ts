import { Exercise } from '@/types/exercise'

/**
 * A2.1 — Lektion 2: Wohin mit der Kommode? (Wo/Wohin, Dativ/Akkusativ,
 * stehen/stellen, liegen/legen, Möbel & Wohnung)
 * Independent exercises written for this site — not copied from any
 * coursebook/workbook layout or wording.
 */
export const lesson2Exercises: Exercise[] = [

  // ── Exercise 1: Wo oder Wohin? — multiple-choice ──────────────────
  {
    id: 'a2-2-1-wo-oder-wohin',
    title: 'Wo oder Wohin?',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 2,
    instructionFa: 'برای هر جمله مشخص کنید سؤال درست Wo یا Wohin است.',
    instructionDe: 'Wählen Sie die richtige Frage: Wo oder Wohin?',
    explanationFa: 'Wo? برای جایی که چیزی الان قرار دارد (Dativ) و Wohin? برای جایی که چیزی را به آن می‌بریم یا می‌گذاریم (Akkusativ) به‌کار می‌رود.',
    items: [
      {
        id: '1',
        question: 'Das Buch liegt auf dem Tisch.',
        options: ['Wo?', 'Wohin?'],
        correctIndex: 0,
        explanationFa: 'کتاب همین الان روی میز قرار دارد، حالت ثابت → Wo?',
      },
      {
        id: '2',
        question: 'Ich lege das Buch auf den Tisch.',
        options: ['Wo?', 'Wohin?'],
        correctIndex: 1,
        explanationFa: 'کتاب را به جایی می‌بریم/می‌گذاریم، حرکت → Wohin?',
      },
      {
        id: '3',
        question: 'Das Bild hängt an der Wand.',
        options: ['Wo?', 'Wohin?'],
        correctIndex: 0,
        explanationFa: 'تابلو همین الان روی دیوار است → Wo?',
      },
      {
        id: '4',
        question: 'Ich hänge das Bild an die Wand.',
        options: ['Wo?', 'Wohin?'],
        correctIndex: 1,
        explanationFa: 'تابلو را آویزان می‌کنیم، حرکت → Wohin?',
      },
      {
        id: '5',
        question: 'Der Stuhl steht in der Ecke.',
        options: ['Wo?', 'Wohin?'],
        correctIndex: 0,
        explanationFa: 'صندلی همین الان در گوشه است → Wo?',
      },
      {
        id: '6',
        question: 'Ich stelle den Stuhl in die Ecke.',
        options: ['Wo?', 'Wohin?'],
        correctIndex: 1,
        explanationFa: 'صندلی را به گوشه می‌بریم، حرکت → Wohin?',
      },
    ],
  },

  // ── Exercise 2: Dativ oder Akkusativ? — fill-blank (article) ──────
  {
    id: 'a2-2-2-dativ-oder-akkusativ',
    title: 'Dativ oder Akkusativ?',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 2,
    instructionFa: 'جمله‌ها را با آرتیکل درست (Dativ یا Akkusativ) کامل کنید.',
    instructionDe: 'Ergänzen Sie die Sätze mit dem richtigen Artikel.',
    wordBank: ['dem', 'den', 'der', 'die'],
    explanationFa: 'وقتی فعل حالت ثابت دارد (liegen, stehen, hängen) از Dativ استفاده می‌کنیم؛ وقتی فعل حرکت دارد (legen, stellen, hängen به معنای آویزان کردن) از Akkusativ استفاده می‌کنیم.',
    items: [
      { id: '1', prompt: 'Das Buch liegt auf ___ Tisch.', answer: 'dem', translationFa: 'کتاب روی میز است. — Wo? + Dativ' },
      { id: '2', prompt: 'Ich lege das Buch auf ___ Tisch.', answer: 'den', translationFa: 'کتاب را روی میز می‌گذارم. — Wohin? + Akkusativ' },
      { id: '3', prompt: 'Das Bild hängt an ___ Wand.', answer: 'der', translationFa: 'تابلو روی دیوار آویزان است. — Wo? + Dativ' },
      { id: '4', prompt: 'Ich hänge das Bild an ___ Wand.', answer: 'die', translationFa: 'تابلو را روی دیوار آویزان می‌کنم. — Wohin? + Akkusativ' },
      { id: '5', prompt: 'Der Teppich liegt auf ___ Boden.', answer: 'dem', translationFa: 'فرش روی زمین است. — Wo? + Dativ' },
      { id: '6', prompt: 'Ich lege den Teppich auf ___ Boden.', answer: 'den', translationFa: 'فرش را روی زمین می‌گذارم. — Wohin? + Akkusativ' },
      { id: '7', prompt: 'Die Kommode steht zwischen ___ Türen.', answer: 'den', translationFa: 'کمد بین درها قرار دارد. — Wo? + Dativ' },
      { id: '8', prompt: 'Ich stelle die Kommode zwischen ___ Türen.', answer: 'die', translationFa: 'کمد را بین درها می‌گذارم. — Wohin? + Akkusativ' },
    ],
  },

  // ── Exercise 3: stehen oder stellen? — fill-blank (verb form) ─────
  {
    id: 'a2-2-3-stehen-oder-stellen',
    title: 'stehen oder stellen?',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 2,
    instructionFa: 'فعل درست (stehen یا stellen) را با صرف مناسب در جای خالی بگذارید.',
    instructionDe: 'Ergänzen Sie das passende Verb: stehen oder stellen.',
    wordBank: ['steht', 'stelle', 'stellen', 'stehen'],
    explanationFa: 'stehen یعنی چیزی ایستاده/قرار دارد (حالت ثابت). stellen یعنی چیزی را ایستاده می‌گذاریم (حرکت).',
    items: [
      { id: '1', prompt: 'Der Stuhl ___ in der Ecke.', answer: 'steht', translationFa: 'صندلی در گوشه قرار دارد.' },
      { id: '2', prompt: 'Ich ___ den Stuhl in die Ecke.', answer: 'stelle', translationFa: 'من صندلی را در گوشه می‌گذارم.' },
      { id: '3', prompt: 'Der Tisch ___ am Fenster.', answer: 'steht', translationFa: 'میز کنار پنجره قرار دارد.' },
      { id: '4', prompt: 'Wir ___ den Tisch ans Fenster.', answer: 'stellen', translationFa: 'ما میز را کنار پنجره می‌گذاریم.' },
      { id: '5', prompt: 'Das Sofa ___ vor der Wand.', answer: 'steht', translationFa: 'مبل جلوی دیوار قرار دارد.' },
      { id: '6', prompt: 'Wohin ___ wir das Sofa?', answer: 'stellen', translationFa: 'مبل را کجا بگذاریم؟' },
    ],
  },

  // ── Exercise 4: liegen oder legen? — fill-blank (verb form) ───────
  {
    id: 'a2-2-4-liegen-oder-legen',
    title: 'liegen oder legen?',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 2,
    instructionFa: 'فعل درست (liegen یا legen) را با صرف مناسب در جای خالی بگذارید.',
    instructionDe: 'Ergänzen Sie das passende Verb: liegen oder legen.',
    wordBank: ['liegt', 'lege', 'legen', 'liegen'],
    explanationFa: 'liegen یعنی چیزی خوابیده/قرار دارد (حالت ثابت). legen یعنی چیزی را می‌گذاریم/قرار می‌دهیم (حرکت).',
    items: [
      { id: '1', prompt: 'Das Buch ___ auf dem Tisch.', answer: 'liegt', translationFa: 'کتاب روی میز است.' },
      { id: '2', prompt: 'Ich ___ das Buch auf den Tisch.', answer: 'lege', translationFa: 'من کتاب را روی میز می‌گذارم.' },
      { id: '3', prompt: 'Der Teppich ___ auf dem Boden.', answer: 'liegt', translationFa: 'فرش روی زمین است.' },
      { id: '4', prompt: 'Wir ___ den Teppich auf den Boden.', answer: 'legen', translationFa: 'ما فرش را روی زمین می‌گذاریم.' },
      { id: '5', prompt: 'Das Kissen ___ auf dem Sofa.', answer: 'liegt', translationFa: 'کوسن روی مبل است.' },
      { id: '6', prompt: 'Wohin ___ ich das Kissen?', answer: 'lege', translationFa: 'کوسن را کجا بگذارم؟' },
    ],
  },

  // ── Exercise 5: Möbel & Zimmer beschreiben — sentence-order (drag & drop) ───
  {
    id: 'a2-2-5-moebel-saetze-bauen',
    title: 'Möbel und Zimmer beschreiben',
    type: 'sentence-order',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 2,
    instructionFa: 'کلمات را به ترتیب درست بکشید یا روی آن‌ها کلیک کنید تا جمله‌ی کامل بسازید.',
    instructionDe: 'Bilden Sie mit den Wörtern einen vollständigen Satz.',
    explanationFa: 'برای حالت ثابت از stehen/liegen/hängen + Dativ استفاده می‌کنیم — Wo? است نه Wohin؟.',
    items: [
      {
        id: '1',
        words: ['Tisch', 'Lampe', 'auf', '.', 'steht', 'dem', 'Die'],
        correctOrder: ['Die', 'Lampe', 'steht', 'auf', 'dem', 'Tisch', '.'],
        translationFa: 'چراغ روی میز قرار دارد.',
      },
      {
        id: '2',
        words: ['Wand', 'Bild', 'hängt', '.', 'an', 'der', 'Das'],
        correctOrder: ['Das', 'Bild', 'hängt', 'an', 'der', 'Wand', '.'],
        translationFa: 'تابلو روی دیوار آویزان است.',
      },
      {
        id: '3',
        words: ['Boden', 'Teppich', 'liegt', 'dem', '.', 'auf', 'Der'],
        correctOrder: ['Der', 'Teppich', 'liegt', 'auf', 'dem', 'Boden', '.'],
        translationFa: 'فرش روی زمین است.',
      },
      {
        id: '4',
        words: ['Türen', 'Kommode', 'steht', '.', 'den', 'zwischen', 'Die'],
        correctOrder: ['Die', 'Kommode', 'steht', 'zwischen', 'den', 'Türen', '.'],
        translationFa: 'کمد بین درها قرار دارد.',
      },
      {
        id: '5',
        words: ['Wand', 'Sofa', 'steht', '.', 'vor', 'der', 'Das'],
        correctOrder: ['Das', 'Sofa', 'steht', 'vor', 'der', 'Wand', '.'],
        translationFa: 'مبل جلوی دیوار قرار دارد.',
      },
      {
        id: '6',
        words: ['Wand', 'Spiegel', 'hängt', '.', 'an', 'der', 'Der'],
        correctOrder: ['Der', 'Spiegel', 'hängt', 'an', 'der', 'Wand', '.'],
        translationFa: 'آینه روی دیوار آویزان است.',
      },
    ],
  },
]

export function getLesson2Exercises(): Exercise[] {
  return lesson2Exercises
}
