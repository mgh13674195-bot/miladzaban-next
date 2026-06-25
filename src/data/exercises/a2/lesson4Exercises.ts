import { Exercise } from '@/types/exercise'

/**
 * A2.1 — Lektion 4: Was darf es sein? (Einkaufen, Mengen, Adjektivdeklination
 * nach ein/kein/mein)
 * Independent exercises written for this site — not copied from any
 * coursebook/workbook layout or wording.
 */
export const lesson4Exercises: Exercise[] = [

  // ── Exercise 1: Lebensmittel — multiple-choice ────────────────────
  {
    id: 'a2-4-1-lebensmittel-wortschatz',
    title: 'Lebensmittel: مواد غذایی',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 4,
    instructionFa: 'با توجه به معنی فارسی، کلمه‌ی آلمانی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie das richtige Wort.',
    explanationFa: 'این کلمات از پرکاربردترین واژگان مواد غذایی در خرید روزمره هستند.',
    items: [
      { id: '1', question: 'موز', options: ['die Birne', 'die Banane', 'die Bohne'], correctIndex: 1, explanationFa: 'die Banane یعنی موز.' },
      { id: '2', question: 'گلابی', options: ['die Birne', 'die Marmelade', 'das Mehl'], correctIndex: 0, explanationFa: 'die Birne یعنی گلابی.' },
      { id: '3', question: 'آرد', options: ['der Saft', 'das Mehl', 'die Cola'], correctIndex: 1, explanationFa: 'das Mehl یعنی آرد.' },
      { id: '4', question: 'مربا', options: ['die Marmelade', 'der Quark', 'die Bohne'], correctIndex: 0, explanationFa: 'die Marmelade یعنی مربا.' },
      { id: '5', question: 'نوشیدنی', options: ['das Getränk', 'die Packung', 'der Zettel'], correctIndex: 0, explanationFa: 'das Getränk یعنی نوشیدنی.' },
      { id: '6', question: 'آبمیوه', options: ['der Saft', 'das Gemüse', 'die Dose'], correctIndex: 0, explanationFa: 'der Saft یعنی آبمیوه.' },
    ],
  },

  // ── Exercise 2: Mengen und Verpackungen — fill-blank (word bank) ─
  {
    id: 'a2-4-2-mengen-verpackungen',
    title: 'Mengen und Verpackungen',
    type: 'fill-blank',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 4,
    instructionFa: 'مقدار یا بسته‌بندی مناسب را برای هر ماده‌ی غذایی بکشید یا روی آن کلیک کنید.',
    instructionDe: 'Ergänzen Sie die passende Menge oder Verpackung.',
    wordBank: ['eine Flasche', 'ein Glas', 'ein Kilo', 'eine Dose', 'ein Liter', '100 Gramm', 'eine Packung', 'eine Tüte'],
    explanationFa: 'در خرید باید مقدار یا Verpackung را با Lebensmittel ترکیب کنیم — مثلاً مایعات با Flasche/Liter و موارد سفت با Kilo/Gramm.',
    items: [
      { id: '1', prompt: '___ Cola', answer: 'eine Flasche', translationFa: 'یک بطری کولا' },
      { id: '2', prompt: '___ Marmelade', answer: 'ein Glas', translationFa: 'یک شیشه مربا' },
      { id: '3', prompt: '___ Mehl', answer: 'ein Kilo', translationFa: 'یک کیلو آرد' },
      { id: '4', prompt: '___ Thunfisch', answer: 'eine Dose', translationFa: 'یک قوطی کنسرو تن' },
      { id: '5', prompt: '___ Orangensaft', answer: 'ein Liter', translationFa: 'یک لیتر آب‌پرتقال' },
      { id: '6', prompt: '___ Käse', answer: '100 Gramm', translationFa: '۱۰۰ گرم پنیر' },
      { id: '7', prompt: '___ Milch', answer: 'eine Packung', translationFa: 'یک بسته شیر' },
      { id: '8', prompt: '___ Bohnen', answer: 'eine Tüte', translationFa: 'یک کیسه لوبیا' },
    ],
  },

  // ── Exercise 3: Adjektivdeklination im Nominativ — fill-blank ────
  {
    id: 'a2-4-3-adjektiv-nominativ',
    title: 'Adjektivdeklination im Nominativ',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 4,
    instructionFa: 'پایان صفت را کامل کنید.',
    instructionDe: 'Ergänzen Sie die Adjektivendung.',
    explanationFa: 'بعد از ein در Nominativ، پایان صفت جنس اسم را نشان می‌دهد: مذکر -er، خنثی -es، مؤنث/جمع -e یا -en (برای keine جمع).',
    items: [
      { id: '1', prompt: 'Das ist ein mager___ Schinken.', answer: 'magerer', translationFa: 'این یک ژامبون کم‌چرب است.' },
      { id: '2', prompt: 'Das ist ein hell___ Brot.', answer: 'helles', translationFa: 'این یک نان روشن است.' },
      { id: '3', prompt: 'Das ist eine grün___ Paprika.', answer: 'grüne', translationFa: 'این یک فلفل‌دلمه‌ای سبز است.' },
      { id: '4', prompt: 'Das sind keine roh___ Eier.', answer: 'rohen', translationFa: 'این‌ها تخم‌مرغ خام نیستند.' },
      { id: '5', prompt: 'Das ist eine frisch___ Milch.', answer: 'frische', translationFa: 'این یک شیر تازه است.' },
      { id: '6', prompt: 'Das ist ein weich___ Käse.', answer: 'weicher', translationFa: 'این یک پنیر نرم است.' },
      { id: '7', prompt: 'Das sind alte___ Kartoffeln.', answer: 'alte', translationFa: 'این‌ها سیب‌زمینی‌های کهنه هستند.' },
      { id: '8', prompt: 'Das ist kein normal___ Tee.', answer: 'normaler', translationFa: 'این یک چای معمولی نیست.' },
    ],
  },

  // ── Exercise 4: Adjektivdeklination im Akkusativ — fill-blank ────
  {
    id: 'a2-4-4-adjektiv-akkusativ',
    title: 'Adjektivdeklination im Akkusativ',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 4,
    instructionFa: 'پایان صفت را کامل کنید.',
    instructionDe: 'Ergänzen Sie die Adjektivendung.',
    explanationFa: 'در Akkusativ فقط اسم مذکر تغییر مهم دارد: einen mageren Schinken — بقیه جنس‌ها مثل Nominativ هستند.',
    items: [
      { id: '1', prompt: 'Ich hätte gern einen mager___ Schinken.', answer: 'mageren', translationFa: 'لطفاً یک ژامبون کم‌چرب می‌خواهم.' },
      { id: '2', prompt: 'Ich nehme ein hell___ Brot.', answer: 'helles', translationFa: 'من یک نان روشن برمی‌دارم.' },
      { id: '3', prompt: 'Ich brauche eine grün___ Paprika.', answer: 'grüne', translationFa: 'به یک فلفل‌دلمه‌ای سبز نیاز دارم.' },
      { id: '4', prompt: 'Ich kaufe keine roh___ Eier.', answer: 'rohen', translationFa: 'من تخم‌مرغ خام نمی‌خرم.' },
      { id: '5', prompt: 'Ich hätte gern einen mild___ Käse.', answer: 'milden', translationFa: 'لطفاً یک پنیر ملایم می‌خواهم.' },
      { id: '6', prompt: 'Ich nehme eine klein___ Cola.', answer: 'kleine', translationFa: 'من یک کولای کوچک برمی‌دارم.' },
      { id: '7', prompt: 'Ich brauche ein frisch___ Brötchen.', answer: 'frisches', translationFa: 'به یک نان کوچک تازه نیاز دارم.' },
      { id: '8', prompt: 'Ich kaufe einen hart___ Käse.', answer: 'harten', translationFa: 'من یک پنیر تند می‌خرم.' },
    ],
  },

  // ── Exercise 5: Adjektivdeklination im Dativ — fill-blank ────────
  {
    id: 'a2-4-5-adjektiv-dativ',
    title: 'Adjektivdeklination im Dativ',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 4,
    instructionFa: 'پایان صفت را بعد از mit einem / mit einer کامل کنید.',
    instructionDe: 'Ergänzen Sie die Adjektivendung nach mit einem/einer.',
    explanationFa: 'در Dativ بعد از einem/einer معمولاً صفت پایان -en می‌گیرد — ساده‌تر از Nominativ و Akkusativ.',
    items: [
      { id: '1', prompt: 'mit einem mager___ Schinken', answer: 'mageren', translationFa: 'با یک ژامبون کم‌چرب' },
      { id: '2', prompt: 'mit einem hell___ Brot', answer: 'hellen', translationFa: 'با یک نان روشن' },
      { id: '3', prompt: 'mit einer grün___ Paprika', answer: 'grünen', translationFa: 'با یک فلفل‌دلمه‌ای سبز' },
      { id: '4', prompt: 'mit einem weich___ Käse', answer: 'weichen', translationFa: 'با یک پنیر نرم' },
      { id: '5', prompt: 'mit einer frisch___ Milch', answer: 'frischen', translationFa: 'با یک شیر تازه' },
      { id: '6', prompt: 'mit einem klein___ Glas', answer: 'kleinen', translationFa: 'با یک لیوان کوچک' },
      { id: '7', prompt: 'mit einer groß___ Flasche', answer: 'großen', translationFa: 'با یک بطری بزرگ' },
      { id: '8', prompt: 'mit einem hart gekocht___ Ei', answer: 'hart gekochten', translationFa: 'با یک تخم‌مرغ کاملاً پز' },
    ],
  },

  // ── Exercise 6: Nominativ oder Akkusativ? — multiple-choice ──────
  {
    id: 'a2-4-6-nominativ-oder-akkusativ',
    title: 'Nominativ oder Akkusativ?',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 4,
    instructionFa: 'پایان درست صفت را انتخاب کنید.',
    instructionDe: 'Wählen Sie die richtige Adjektivendung.',
    explanationFa: 'Das ist … معمولاً Nominativ است؛ Ich nehme / Ich hätte gern / Ich brauche … معمولاً Akkusativ می‌خواهند.',
    items: [
      { id: '1', question: 'Das ist ein frisch___ Saft.', options: ['frischer', 'frischen', 'frische'], correctIndex: 0, explanationFa: 'Das ist … → Nominativ، مذکر → frischer' },
      { id: '2', question: 'Ich nehme einen frisch___ Saft.', options: ['frischer', 'frischen', 'frisches'], correctIndex: 1, explanationFa: 'Ich nehme … → Akkusativ، مذکر → frischen' },
      { id: '3', question: 'Das ist eine klein___ Packung.', options: ['kleine', 'kleinen', 'kleines'], correctIndex: 0, explanationFa: 'Das ist … → Nominativ، مؤنث → kleine' },
      { id: '4', question: 'Ich brauche eine klein___ Packung.', options: ['kleiner', 'kleine', 'kleinen'], correctIndex: 1, explanationFa: 'Ich brauche … → Akkusativ، مؤنث هم kleine می‌ماند' },
      { id: '5', question: 'Das ist ein hart___ Brötchen.', options: ['hartes', 'harten', 'harte'], correctIndex: 0, explanationFa: 'Das ist … → Nominativ، خنثی → hartes' },
      { id: '6', question: 'Ich hätte gern ein hart___ Brötchen.', options: ['hartes', 'harten', 'harter'], correctIndex: 0, explanationFa: 'Akkusativ خنثی هم مثل Nominativ می‌ماند → hartes' },
    ],
  },

  // ── Exercise 7: Sätze beim Einkaufen ordnen — sentence-order ─────
  {
    id: 'a2-4-7-saetze-einkaufen-ordnen',
    title: 'Sätze beim Einkaufen ordnen',
    type: 'sentence-order',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 4,
    instructionFa: 'کلمات را به ترتیب درست بکشید یا روی آن‌ها کلیک کنید تا جمله‌ی کامل بسازید.',
    instructionDe: 'Bilden Sie mit den Wörtern einen vollständigen Satz.',
    explanationFa: 'در جمله‌های خبری فعل دوم می‌آید؛ در جمله‌های پرسشی بدون کلمه‌ی پرسشی، فعل اول می‌آید.',
    items: [
      {
        id: '1',
        words: ['gern', 'hätte', 'einen milden Käse', '.', 'Ich'],
        correctOrder: ['Ich', 'hätte', 'gern', 'einen milden Käse', '.'],
        translationFa: 'لطفاً یک پنیر ملایم می‌خواهم.',
      },
      {
        id: '2',
        words: ['es', 'darf', 'sein', '?', 'Wie viel'],
        correctOrder: ['Wie viel', 'darf', 'es', 'sein', '?'],
        translationFa: 'چه مقدار می‌خواهید؟',
      },
      {
        id: '3',
        words: ['ich', 'nehme', 'eine kleine Cola', '.', 'Dann'],
        correctOrder: ['Dann', 'nehme', 'ich', 'eine kleine Cola', '.'],
        translationFa: 'پس یک کولای کوچک برمی‌دارم.',
      },
      {
        id: '4',
        words: ['Sie', 'Möchten', 'noch etwas', '?', 'sonst'],
        correctOrder: ['Möchten', 'Sie', 'sonst', 'noch etwas', '?'],
        translationFa: 'چیز دیگری هم می‌خواهید؟',
      },
      {
        id: '5',
        words: ['ich', 'brauche', 'ein Kilo Mehl', '.', 'Ich'],
        correctOrder: ['Ich', 'brauche', 'ein Kilo Mehl', '.'],
        translationFa: 'به یک کیلو آرد نیاز دارم.',
      },
      {
        id: '6',
        words: ['keine rohen Eier', 'haben', '.', 'Wir'],
        correctOrder: ['Wir', 'haben', 'keine rohen Eier', '.'],
        translationFa: 'ما تخم‌مرغ خام نداریم.',
      },
    ],
  },

  // ── Exercise 8: Kurze Einkaufsdialoge — dialogue ─────────────────
  {
    id: 'a2-4-8-dialog-einkaufen',
    title: 'Kurze Einkaufsdialoge',
    type: 'dialogue',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 4,
    instructionFa: 'با استفاده از الگوی زیر، برای هر آیتم یک دیالوگ کوتاه خرید بسازید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Bilden Sie mit dem Muster einen kurzen Einkaufsdialog.',
    pattern: [
      'A: Was darf es sein?',
      'B: Ich hätte gern …',
      'A: Sonst noch etwas?',
      'B: Nein, danke. Das ist alles.',
    ],
    explanationFa: 'این الگو ساده‌ترین شکل یک خرید کوتاه در فروشگاه است — برای هر مقدار/محصول می‌توان همین جمله‌ها را تکرار کرد.',
    items: [
      {
        id: '1',
        promptFa: '500 Gramm Tomaten',
        sampleAnswer: 'A: Was darf es sein?\nB: Ich hätte gern 500 Gramm Tomaten.\nA: Sonst noch etwas?\nB: Nein, danke. Das ist alles.',
      },
      {
        id: '2',
        promptFa: 'ein Liter Milch',
        sampleAnswer: 'A: Was darf es sein?\nB: Ich hätte gern einen Liter Milch.\nA: Sonst noch etwas?\nB: Nein, danke. Das ist alles.',
      },
      {
        id: '3',
        promptFa: '250 Gramm Schinken',
        sampleAnswer: 'A: Was darf es sein?\nB: Ich hätte gern 250 Gramm Schinken.\nA: Sonst noch etwas?\nB: Nein, danke. Das ist alles.',
      },
      {
        id: '4',
        promptFa: 'eine Flasche Cola',
        sampleAnswer: 'A: Was darf es sein?\nB: Ich hätte gern eine Flasche Cola.\nA: Sonst noch etwas?\nB: Nein, danke. Das ist alles.',
      },
    ],
  },
]
