import { Exercise } from '@/types/exercise'

/**
 * A2.1 — Lektion 10: Gut, dass du reserviert hast (Restaurantbesuch,
 * bestellen, reklamieren, bezahlen, Konjunktion dass)
 * Independent exercises written for this site — not copied from any
 * coursebook/workbook layout or wording.
 */
export const lesson10Exercises: Exercise[] = [

  // ── Exercise 1: Im Restaurant: Besteck und Geschirr — multiple-choice
  {
    id: 'a2-10-1-besteck-geschirr',
    title: 'Im Restaurant: Besteck und Geschirr',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'با توجه به معنی فارسی، کلمه‌ی آلمانی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie das richtige Wort.',
    explanationFa: 'این کلمات مربوط به وسایل سر میز در رستوران هستند.',
    items: [
      { id: '1', question: 'قاشق', options: ['der Löffel', 'das Messer', 'die Kanne'], correctIndex: 0, explanationFa: 'der Löffel یعنی قاشق.' },
      { id: '2', question: 'چنگال', options: ['die Gabel', 'das Glas', 'der Teller'], correctIndex: 0, explanationFa: 'die Gabel یعنی چنگال.' },
      { id: '3', question: 'چاقو', options: ['das Messer', 'die Tasse', 'der Zucker'], correctIndex: 0, explanationFa: 'das Messer یعنی چاقو.' },
      { id: '4', question: 'بشقاب', options: ['der Teller', 'das Lokal', 'die Rechnung'], correctIndex: 0, explanationFa: 'der Teller یعنی بشقاب.' },
      { id: '5', question: 'فنجان', options: ['die Tasse', 'der Essig', 'das Öl'], correctIndex: 0, explanationFa: 'die Tasse یعنی فنجان.' },
      { id: '6', question: 'قوری / پارچ', options: ['die Kanne', 'die Serviette', 'das Steak'], correctIndex: 0, explanationFa: 'die Kanne یعنی قوری.' },
      { id: '7', question: 'قاشق‌چنگال (مجموعه)', options: ['das Besteck', 'das Geschirr', 'die Pommes'], correctIndex: 0, explanationFa: 'das Besteck یعنی قاشق‌چنگال.' },
      { id: '8', question: 'ظرف‌ها / سرویس غذاخوری', options: ['das Geschirr', 'der Pfeffer', 'das Hähnchen'], correctIndex: 0, explanationFa: 'das Geschirr یعنی ظرف‌ها.' },
    ],
  },

  // ── Exercise 2: Was steht auf dem Tisch? — fill-blank (word bank) ─
  {
    id: 'a2-10-2-was-steht-auf-dem-tisch',
    title: 'Was steht auf dem Tisch?',
    type: 'fill-blank',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'هر کلمه را در دسته‌ی درست بنویسید — کلمه را بکشید یا روی آن لمس کنید.',
    instructionDe: 'Ordnen Sie die Wörter der richtigen Gruppe zu.',
    wordBank: ['Löffel', 'Teller', 'Essig', 'Gabel', 'Tasse', 'Salz'],
    explanationFa: 'Besteck = قاشق‌چنگال، Geschirr = ظرف‌ها، و چند چیز دیگر هم روی میز قرار دارند مثل سرکه و نمک.',
    items: [
      { id: '1', prompt: 'Besteck: der ___', answer: 'Löffel', translationFa: 'قاشق جزو Besteck است.' },
      { id: '2', prompt: 'Besteck: die ___', answer: 'Gabel', translationFa: 'چنگال جزو Besteck است.' },
      { id: '3', prompt: 'Geschirr: der ___', answer: 'Teller', translationFa: 'بشقاب جزو Geschirr است.' },
      { id: '4', prompt: 'Geschirr: die ___', answer: 'Tasse', translationFa: 'فنجان جزو Geschirr است.' },
      { id: '5', prompt: 'Auf dem Tisch: der ___', answer: 'Essig', translationFa: 'سرکه هم روی میز است.' },
      { id: '6', prompt: 'Auf dem Tisch: das ___', answer: 'Salz', translationFa: 'نمک هم روی میز است.' },
    ],
  },

  // ── Exercise 3: Speisen und Lebensmittel — multiple-choice ────────
  {
    id: 'a2-10-3-speisen-lebensmittel',
    title: 'Speisen und Lebensmittel',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'معنی فارسی درست را برای هر کلمه‌ی آلمانی انتخاب کنید.',
    instructionDe: 'Wählen Sie die richtige Bedeutung.',
    explanationFa: 'این کلمات از پرکاربردترین واژگان غذا در رستوران هستند.',
    items: [
      { id: '1', question: 'das Steak', options: ['استیک', 'مرغ', 'سس'], correctIndex: 0, explanationFa: 'das Steak یعنی استیک.' },
      { id: '2', question: 'das Schnitzel', options: ['شنیسل', 'نمک', 'شکر'], correctIndex: 0, explanationFa: 'das Schnitzel یعنی شنیسل.' },
      { id: '3', question: 'das Hähnchen', options: ['مرغ', 'فلفل', 'روغن'], correctIndex: 0, explanationFa: 'das Hähnchen یعنی مرغ.' },
      { id: '4', question: 'die Pommes frites', options: ['سیب‌زمینی سرخ‌کرده', 'سرکه', 'سس'], correctIndex: 0, explanationFa: 'die Pommes frites یعنی سیب‌زمینی سرخ‌کرده.' },
      { id: '5', question: 'die Soße', options: ['سس', 'استیک', 'شکر'], correctIndex: 0, explanationFa: 'die Soße یعنی سس.' },
      { id: '6', question: 'der Essig', options: ['سرکه', 'روغن', 'نمک'], correctIndex: 0, explanationFa: 'der Essig یعنی سرکه.' },
      { id: '7', question: 'das Öl', options: ['روغن', 'سرکه', 'فلفل'], correctIndex: 0, explanationFa: 'das Öl یعنی روغن.' },
      { id: '8', question: 'der Zucker', options: ['شکر', 'نمک', 'فلفل'], correctIndex: 0, explanationFa: 'der Zucker یعنی شکر.' },
    ],
  },

  // ── Exercise 4: dass-Sätze: فعل آخر جمله — multiple-choice ────────
  {
    id: 'a2-10-4-dass-faetze-fa',
    title: 'dass-Sätze: فعل آخر جمله',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'جمله‌ی درست بعد از dass را انتخاب کنید.',
    instructionDe: 'Wählen Sie den richtigen Nebensatz mit dass.',
    explanationFa: 'در جمله‌ی فرعی بعد از dass فعل صرف‌شده همیشه به آخر جمله می‌رود.',
    items: [
      { id: '1', question: 'Ich finde, dass ...', options: ['das Lokal sehr schön ist', 'ist das Lokal sehr schön'], correctIndex: 0, explanationFa: 'فعل ist باید آخر جمله بیاید.' },
      { id: '2', question: 'Schade, dass ...', options: ['es keine Pizza gibt', 'gibt es keine Pizza'], correctIndex: 0, explanationFa: 'فعل gibt باید آخر جمله بیاید.' },
      { id: '3', question: 'Gut, dass ...', options: ['du reserviert hast', 'hast du reserviert'], correctIndex: 0, explanationFa: 'فعل hast باید آخر جمله بیاید.' },
      { id: '4', question: 'Ich hoffe, dass ...', options: ['der Kellner bald kommt', 'kommt der Kellner bald'], correctIndex: 0, explanationFa: 'فعل kommt باید آخر جمله بیاید.' },
      { id: '5', question: 'Ich denke, dass ...', options: ['die Suppe zu kalt ist', 'ist die Suppe zu kalt'], correctIndex: 0, explanationFa: 'فعل ist باید آخر جمله بیاید.' },
    ],
  },

  // ── Exercise 5: Sätze mit dass bilden — fill-blank ────────────────
  {
    id: 'a2-10-5-saetze-mit-dass-bilden',
    title: 'Sätze mit dass bilden',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'جمله‌ی ساده را به یک جمله‌ی کامل با dass تبدیل کنید — فعل را به آخر جمله ببرید.',
    instructionDe: 'Bilden Sie einen vollständigen Satz mit dass.',
    explanationFa: 'وقتی جمله را به جمله‌ی فرعی با dass تبدیل می‌کنیم، فعل صرف‌شده آخر جمله می‌رود.',
    items: [
      { id: '1', prompt: 'Das Essen schmeckt gut. → Ich finde, dass ___', answer: 'das Essen gut schmeckt', translationFa: 'به نظرم غذا خوب است.' },
      { id: '2', prompt: 'Die Preise sind nicht so hoch. → Gut, dass ___', answer: 'die Preise nicht so hoch sind', translationFa: 'خوب شد که قیمت‌ها زیاد بالا نیست.' },
      { id: '3', prompt: 'Der Kellner kommt bald. → Ich hoffe, dass ___', answer: 'der Kellner bald kommt', translationFa: 'امیدوارم گارسون زود بیاید.' },
      { id: '4', prompt: 'Es gibt keine Pizza. → Schade, dass ___', answer: 'es keine Pizza gibt', translationFa: 'حیف که پیتزا نیست.' },
      { id: '5', prompt: 'Das Restaurant ist zu laut. → Ich denke, dass ___', answer: 'das Restaurant zu laut ist', translationFa: 'فکر می‌کنم رستوران خیلی پرسروصداست.' },
    ],
  },

  // ── Exercise 6: Gut, schön oder schade? — multiple-choice ────────
  {
    id: 'a2-10-6-gut-schoen-schade',
    title: 'Gut, schön oder schade?',
    type: 'multiple-choice',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'برای هر موقعیت، جمله‌ی مناسب با dass را انتخاب کنید.',
    instructionDe: 'Wählen Sie den passenden Satz mit dass.',
    explanationFa: 'Gut و Schön احساس مثبت نشان می‌دهند، Schade احساس منفی یا تأسف.',
    items: [
      { id: '1', question: 'دوستت میز رزرو کرده. چه می‌گویی؟', options: ['Gut, dass du reserviert hast.', 'Schade, dass du reserviert hast.', 'Ich weiß nicht, dass du reserviert hast.'], correctIndex: 0, explanationFa: 'این خبر خوب است → Gut, dass …' },
      { id: '2', question: 'در رستوران پیتزا نیست. چه می‌گویی؟', options: ['Schön, dass es keine Pizza gibt.', 'Schade, dass es keine Pizza gibt.', 'Gut, dass es keine Pizza gibt.'], correctIndex: 1, explanationFa: 'این یک کمبود است → Schade, dass …' },
      { id: '3', question: 'دوستت آمده و تو خوشحالی.', options: ['Schön, dass du gekommen bist.', 'Schade, dass du gekommen bist.', 'Kann es sein, dass du gekommen bist?'], correctIndex: 0, explanationFa: 'خوشحالی از حضور کسی → Schön, dass …' },
      { id: '4', question: 'غذا خیلی خوب است.', options: ['Ich finde, dass das Essen sehr gut schmeckt.', 'Schade, dass das Essen gut schmeckt.', 'Ich hoffe, dass das Essen schlecht ist.'], correctIndex: 0, explanationFa: 'بیان نظر مثبت با Ich finde, dass …' },
    ],
  },

  // ── Exercise 7: Im Restaurant bestellen — dialogue fill-blank ────
  {
    id: 'a2-10-7-im-restaurant-bestellen',
    title: 'Im Restaurant bestellen',
    type: 'fill-blank',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'دیالوگ سفارش غذا را با کلمات بانک کامل کنید — دسکتاپ: درگ‌ودراپ، موبایل: لمس کنید.',
    instructionDe: 'Ergänzen Sie den Dialog.',
    wordBank: ['gern', 'Moment', 'bringen', 'hätte', 'nehme'],
    explanationFa: 'این دیالوگ سفارش دادن مؤدبانه در رستوران را تمرین می‌کند.',
    items: [
      { id: '1', prompt: 'A: Entschuldigung, wir würden ___ bestellen.', answer: 'gern', translationFa: 'ببخشید، می‌خواهیم سفارش بدهیم.' },
      { id: '2', prompt: 'B: Einen ___, bitte. Ich komme gleich.', answer: 'Moment', translationFa: 'یک لحظه، لطفاً. الان می‌آیم.' },
      { id: '3', prompt: 'B: Was kann ich Ihnen ___?', answer: 'bringen', translationFa: 'چه چیزی می‌توانم برایتان بیاورم؟' },
      { id: '4', prompt: 'A: Ich ___ gern ein Schnitzel.', answer: 'hätte', translationFa: 'من یک شنیسل می‌خواهم.' },
      { id: '5', prompt: 'A: Ich ___ ein Mineralwasser.', answer: 'nehme', translationFa: 'من یک آب معدنی برمی‌دارم.' },
    ],
  },

  // ── Exercise 8: nicht mit ..., sondern mit ... — fill-blank ───────
  {
    id: 'a2-10-8-nicht-mit-sondern-mit',
    title: 'nicht mit ..., sondern mit ...',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'جمله‌ها را با sondern کامل کنید.',
    instructionDe: 'Ergänzen Sie die Sätze mit sondern.',
    explanationFa: 'sondern بعد از یک نفی (nicht) می‌آید و گزینه‌ی درست را معرفی می‌کند.',
    items: [
      { id: '1', prompt: 'Ich nehme das Schnitzel, aber nicht mit Kartoffeln, ___ mit Pommes frites.', answer: 'sondern', translationFa: 'من شنیسل را برمی‌دارم، اما نه با سیب‌زمینی، بلکه با سیب‌زمینی سرخ‌کرده.' },
      { id: '2', prompt: 'Ich möchte den Salat, aber nicht mit Essig, ___ nur mit Öl.', answer: 'sondern', translationFa: 'سالاد می‌خواهم، اما نه با سرکه، بلکه فقط با روغن.' },
      { id: '3', prompt: 'Ich nehme den Fisch, aber nicht mit Reis, ___ mit Kartoffelpüree.', answer: 'sondern', translationFa: 'ماهی را برمی‌دارم، اما نه با برنج، بلکه با پوره‌ی سیب‌زمینی.' },
      { id: '4', prompt: 'Ich möchte Tee, aber nicht mit Zucker, ___ mit Milch.', answer: 'sondern', translationFa: 'چای می‌خواهم، اما نه با شکر، بلکه با شیر.' },
      { id: '5', prompt: 'Ich nehme das Steak, aber nicht mit Salat, ___ mit Pommes.', answer: 'sondern', translationFa: 'استیک را برمی‌دارم، اما نه با سالاد، بلکه با سیب‌زمینی سرخ‌کرده.' },
    ],
  },

  // ── Exercise 9: Um etwas bitten — multiple-choice ─────────────────
  {
    id: 'a2-10-9-um-etwas-bitten',
    title: 'Um etwas bitten',
    type: 'multiple-choice',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'برای هر موقعیت، جمله‌ی مناسب را انتخاب کنید.',
    instructionDe: 'Wählen Sie den passenden Satz.',
    explanationFa: 'این جمله‌ها برای درخواست مؤدبانه‌ی چیزی در رستوران به‌کار می‌روند.',
    items: [
      { id: '1', question: 'قاشق نداری. چه می‌گویی؟', options: ['Könnte ich bitte einen Löffel bekommen?', 'Ich habe keinen Hunger.', 'Die Rechnung stimmt so.'], correctIndex: 0, explanationFa: 'Könnte ich … bekommen؟ یعنی می‌توانم … داشته باشم؟' },
      { id: '2', question: 'سرکه و روغن می‌خواهی.', options: ['Bringen Sie uns bitte Essig und Öl?', 'Ich möchte kein Lokal.', 'Das Restaurant ist laut.'], correctIndex: 0, explanationFa: 'این درخواست مؤدبانه برای آوردن چیزی است.' },
      { id: '3', question: 'چاقو تمیز نیست.', options: ['Das Messer ist nicht sauber. Könnte ich ein anderes bekommen?', 'Der Tee ist warm.', 'Ich habe reserviert.'], correctIndex: 0, explanationFa: 'این هم شکایت و هم درخواست است.' },
      { id: '4', question: 'آب خیلی گرم است.', options: ['Das Mineralwasser ist zu warm.', 'Ich gebe es an die Küche weiter.', 'Wir zahlen getrennt.'], correctIndex: 0, explanationFa: 'این جمله توصیف مشکل است.' },
    ],
  },

  // ── Exercise 10: Reklamieren im Restaurant — multiple-choice ─────
  {
    id: 'a2-10-10-reklamieren',
    title: 'Reklamieren im Restaurant',
    type: 'multiple-choice',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'برای هر مشکل، واکنش مناسب گارسون را انتخاب کنید.',
    instructionDe: 'Wählen Sie die passende Reaktion des Kellners.',
    explanationFa: 'گارسون معمولاً با عذرخواهی و پیشنهاد جایگزین به شکایت پاسخ می‌دهد.',
    items: [
      { id: '1', question: 'Die Suppe ist kalt.', options: ['Ich bringe Ihnen eine neue Suppe.', 'Zusammen oder getrennt?', 'Das Restaurant ist sehr beliebt.'], correctIndex: 0, explanationFa: 'برای سوپ سرد، گارسون سوپ جدید پیشنهاد می‌دهد.' },
      { id: '2', question: 'Das Messer ist nicht sauber.', options: ['Ich bringe Ihnen sofort ein anderes Besteck.', 'Das macht 18 Euro.', 'Ich nehme das Steak.'], correctIndex: 0, explanationFa: 'برای چاقوی کثیف، قاشق‌چنگال جدید می‌آورند.' },
      { id: '3', question: 'Der Salat war nicht frisch.', options: ['Das tut mir leid. Ich gebe es an die Küche weiter.', 'Hier bitte, stimmt so.', 'Ich hätte gern ein Mineralwasser.'], correctIndex: 0, explanationFa: 'این شکایت را گارسون به آشپزخانه اطلاع می‌دهد.' },
      { id: '4', question: 'Wir haben kein Öl für den Salat.', options: ['Ich bringe Ihnen gleich Öl.', 'Die Rechnung, bitte.', 'Der Kellner ist sehr freundlich.'], correctIndex: 0, explanationFa: 'برای کمبود روغن، گارسون فوراً می‌آورد.' },
    ],
  },

  // ── Exercise 11: Im Restaurant bezahlen — sentence-order ─────────
  {
    id: 'a2-10-11-bezahlen',
    title: 'Im Restaurant bezahlen',
    type: 'sentence-order',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'جمله‌های دیالوگ را به ترتیب درست بکشید یا روی آن‌ها لمس کنید.',
    instructionDe: 'Bringen Sie den Dialog in die richtige Reihenfolge.',
    explanationFa: 'این دیالوگ مراحل درخواست صورت‌حساب و پرداخت را نشان می‌دهد.',
    items: [
      {
        id: '1',
        words: ['Hier bitte, stimmt so.', 'Die Rechnung, bitte.', 'Vielen Dank.', 'Das macht 28,50 Euro.', 'Zusammen oder getrennt?', 'Getrennt, bitte.'],
        correctOrder: ['Die Rechnung, bitte.', 'Zusammen oder getrennt?', 'Getrennt, bitte.', 'Das macht 28,50 Euro.', 'Hier bitte, stimmt so.', 'Vielen Dank.'],
        translationFa: 'صورت‌حساب لطفاً. باهم یا جدا؟ جدا لطفاً. جمعش می‌شود ۲۸.۵۰ یورو. بفرمایید، باقی‌اش برای شما. بسیار متشکرم.',
      },
    ],
  },

  // ── Exercise 12: Wer sagt das? Gast oder Kellner? — multiple-choice
  {
    id: 'a2-10-12-gast-oder-kellner',
    title: 'Wer sagt das? Gast oder Kellner?',
    type: 'multiple-choice',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'مشخص کنید این جمله را مشتری می‌گوید یا گارسون.',
    instructionDe: 'Wer sagt diesen Satz: Gast oder Kellner/in?',
    explanationFa: 'جمله‌های گارسون معمولاً پیشنهاد یا سؤال درباره‌ی سفارش هستند؛ جمله‌های مشتری درخواست یا توصیف مشکل است.',
    items: [
      { id: '1', question: 'Was kann ich Ihnen bringen?', options: ['Gast', 'Kellner/in'], correctIndex: 1, explanationFa: 'این را گارسون می‌گوید.' },
      { id: '2', question: 'Ich hätte gern ein Steak.', options: ['Gast', 'Kellner/in'], correctIndex: 0, explanationFa: 'این را مشتری می‌گوید.' },
      { id: '3', question: 'Entschuldigung, wir würden gern bestellen.', options: ['Gast', 'Kellner/in'], correctIndex: 0, explanationFa: 'این را مشتری می‌گوید.' },
      { id: '4', question: 'Einen Moment, bitte.', options: ['Gast', 'Kellner/in'], correctIndex: 1, explanationFa: 'این را گارسون می‌گوید.' },
      { id: '5', question: 'Die Rechnung, bitte.', options: ['Gast', 'Kellner/in'], correctIndex: 0, explanationFa: 'این را مشتری می‌گوید.' },
      { id: '6', question: 'Zusammen oder getrennt?', options: ['Gast', 'Kellner/in'], correctIndex: 1, explanationFa: 'این را گارسون می‌گوید.' },
      { id: '7', question: 'Der Salat war nicht frisch.', options: ['Gast', 'Kellner/in'], correctIndex: 0, explanationFa: 'این شکایت را مشتری می‌گوید.' },
      { id: '8', question: 'Ich gebe es an die Küche weiter.', options: ['Gast', 'Kellner/in'], correctIndex: 1, explanationFa: 'این را گارسون می‌گوید.' },
    ],
  },

  // ── Exercise 13: Gästebuch: Restaurant bewerten — multiple-choice
  {
    id: 'a2-10-13-gaestebuch',
    title: 'Gästebuch: Restaurant bewerten',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'متن نظرات مهمان‌ها را بخوانید و مشخص کنید هر جمله مربوط به کدام فرد است.',
    instructionDe: 'Wer sagt das: Nina, Omid oder Sara?',
    explanationFa:
      'متن: «Nina: Das Lokal ist sehr schön und das Essen schmeckt gut. Die Portionen sind groß. Leider mussten wir lange warten. — Omid: Ich finde das Restaurant zu teuer. Mein Salat war nicht frisch und die Soße war versalzen. — Sara: Das Restaurant ist beliebt und die Kellner sind sehr freundlich. Aber ohne Reservierung bekommt man schwer einen Tisch.»',
    items: [
      { id: '1', question: 'Das Essen schmeckt gut.', options: ['Nina', 'Omid', 'Sara'], correctIndex: 0, explanationFa: 'نینا می‌گوید: das Essen schmeckt gut.' },
      { id: '2', question: 'Das Restaurant ist zu teuer.', options: ['Nina', 'Omid', 'Sara'], correctIndex: 1, explanationFa: 'امید می‌گوید: das Restaurant zu teuer.' },
      { id: '3', question: 'Man muss reservieren.', options: ['Nina', 'Omid', 'Sara'], correctIndex: 2, explanationFa: 'سارا می‌گوید: ohne Reservierung bekommt man schwer einen Tisch — یعنی بدون رزرو، گرفتن میز سخت است.' },
      { id: '4', question: 'Die Portionen sind groß.', options: ['Nina', 'Omid', 'Sara'], correctIndex: 0, explanationFa: 'نینا می‌گوید: Die Portionen sind groß.' },
      { id: '5', question: 'Der Salat war nicht frisch.', options: ['Nina', 'Omid', 'Sara'], correctIndex: 1, explanationFa: 'امید می‌گوید: Mein Salat war nicht frisch.' },
      { id: '6', question: 'Die Kellner sind freundlich.', options: ['Nina', 'Omid', 'Sara'], correctIndex: 2, explanationFa: 'سارا می‌گوید: die Kellner sind sehr freundlich.' },
    ],
  },

  // ── Exercise 14: Positiv oder negativ? — multiple-choice ─────────
  {
    id: 'a2-10-14-positiv-negativ',
    title: 'Positiv oder negativ?',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'مشخص کنید این جمله نظر مثبت است یا منفی.',
    instructionDe: 'Ist der Satz positiv oder negativ?',
    explanationFa: 'در نظرات رستوران، جمله‌های مثبت معمولاً درباره‌ی کیفیت یا خدمات خوب هستند، منفی درباره‌ی مشکلات.',
    items: [
      { id: '1', question: 'Das Essen ist gut.', options: ['Positiv', 'Negativ'], correctIndex: 0, explanationFa: 'این نظر مثبت است.' },
      { id: '2', question: 'Die Suppe ist kalt.', options: ['Positiv', 'Negativ'], correctIndex: 1, explanationFa: 'این نظر منفی است.' },
      { id: '3', question: 'Die Kellner sind freundlich.', options: ['Positiv', 'Negativ'], correctIndex: 0, explanationFa: 'این نظر مثبت است.' },
      { id: '4', question: 'Wir mussten lange warten.', options: ['Positiv', 'Negativ'], correctIndex: 1, explanationFa: 'این نظر منفی است.' },
      { id: '5', question: 'Die Portionen sind groß.', options: ['Positiv', 'Negativ'], correctIndex: 0, explanationFa: 'این نظر مثبت است.' },
      { id: '6', question: 'Der Salat war nicht frisch.', options: ['Positiv', 'Negativ'], correctIndex: 1, explanationFa: 'این نظر منفی است.' },
      { id: '7', question: 'Das Lokal ist sehr beliebt.', options: ['Positiv', 'Negativ'], correctIndex: 0, explanationFa: 'این نظر مثبت است.' },
      { id: '8', question: 'Die Soße war versalzen.', options: ['Positiv', 'Negativ'], correctIndex: 1, explanationFa: 'این نظر منفی است.' },
    ],
  },

  // ── Exercise 15: Sätze mit dass ordnen — sentence-order ───────────
  {
    id: 'a2-10-15-saetze-mit-dass-ordnen',
    title: 'Sätze mit dass ordnen',
    type: 'sentence-order',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'کلمات را به ترتیب درست بکشید یا روی آن‌ها لمس کنید تا جمله‌ی کامل با dass بسازید.',
    instructionDe: 'Bilden Sie mit den Wörtern einen vollständigen Satz mit dass.',
    explanationFa: 'فعل صرف‌شده بعد از dass همیشه آخر جمله می‌آید.',
    items: [
      {
        id: '1',
        words: ['finde', 'ich', 'dass', 'das Essen', 'gut', 'schmeckt', ','],
        correctOrder: ['ich', 'finde', ',', 'dass', 'das Essen', 'gut', 'schmeckt'],
        translationFa: 'به نظرم غذا خوب است.',
      },
      {
        id: '2',
        words: ['schade', 'dass', 'es', 'keine Pizza', 'gibt', ','],
        correctOrder: ['schade', ',', 'dass', 'es', 'keine Pizza', 'gibt'],
        translationFa: 'حیف که پیتزا نیست.',
      },
      {
        id: '3',
        words: ['gut', 'dass', 'du', 'reserviert', 'hast', ','],
        correctOrder: ['gut', ',', 'dass', 'du', 'reserviert', 'hast'],
        translationFa: 'خوب شد که رزرو کردی.',
      },
      {
        id: '4',
        words: ['hoffe', 'ich', 'dass', 'der Kellner', 'bald', 'kommt', ','],
        correctOrder: ['ich', 'hoffe', ',', 'dass', 'der Kellner', 'bald', 'kommt'],
        translationFa: 'امیدوارم گارسون زود بیاید.',
      },
      {
        id: '5',
        words: ['denke', 'ich', 'dass', 'die Suppe', 'kalt', 'ist', ','],
        correctOrder: ['ich', 'denke', ',', 'dass', 'die Suppe', 'kalt', 'ist'],
        translationFa: 'فکر می‌کنم سوپ سرد است.',
      },
    ],
  },

  // ── Exercise 16: dass-Sätze korrigieren — multiple-choice ────────
  {
    id: 'a2-10-16-dass-korrigieren',
    title: 'dass-Sätze korrigieren',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'جمله‌ی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie den richtigen Satz.',
    explanationFa: 'خطای رایج این است که فعل به جای آخر جمله، در جای دیگری قرار می‌گیرد.',
    items: [
      { id: '1', question: 'کدام جمله درست است؟', options: ['Ich finde, dass das Essen schmeckt gut.', 'Ich finde, dass das Essen gut schmeckt.'], correctIndex: 1, explanationFa: 'فعل schmeckt باید آخر جمله بیاید.' },
      { id: '2', question: 'کدام جمله درست است؟', options: ['Schade, dass gibt es keine Pizza.', 'Schade, dass es keine Pizza gibt.'], correctIndex: 1, explanationFa: 'فعل gibt باید آخر جمله بیاید.' },
      { id: '3', question: 'کدام جمله درست است؟', options: ['Gut, dass hast du reserviert.', 'Gut, dass du reserviert hast.'], correctIndex: 1, explanationFa: 'فعل hast باید آخر جمله بیاید.' },
      { id: '4', question: 'کدام جمله درست است؟', options: ['Ich hoffe, dass kommt der Kellner bald.', 'Ich hoffe, dass der Kellner bald kommt.'], correctIndex: 1, explanationFa: 'فعل kommt باید آخر جمله بیاید.' },
      { id: '5', question: 'کدام جمله درست است؟', options: ['Ich denke, dass die Preise sind zu hoch.', 'Ich denke, dass die Preise zu hoch sind.'], correctIndex: 1, explanationFa: 'فعل sind باید آخر جمله بیاید.' },
      { id: '6', question: 'کدام جمله درست است؟', options: ['Kann es sein, dass ist das Messer nicht sauber?', 'Kann es sein, dass das Messer nicht sauber ist?'], correctIndex: 1, explanationFa: 'فعل ist باید آخر جمله بیاید.' },
    ],
  },

  // ── Exercise 17: Im Restaurant: bestellen, reklamieren, bezahlen
  {
    id: 'a2-10-17-restaurant-dialog-builder',
    title: 'Im Restaurant: bestellen, reklamieren, bezahlen',
    type: 'dialogue',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'با اطلاعات داده‌شده یک دیالوگ کامل بین Gast و Kellner/in بسازید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Bilden Sie mit den Informationen einen vollständigen Dialog.',
    pattern: [
      'Gast möchte bestellen.',
      'Essen: Schnitzel mit Pommes frites',
      'Getränk: Mineralwasser',
      'Problem: Suppe ist kalt',
      'Bitte: neues Besteck',
      'Bezahlen: getrennt',
    ],
    explanationFa: 'برای این دیالوگ از عبارت‌های Entschuldigung, wir würden gern bestellen و Verzeihen Sie, aber … استفاده کنید.',
    items: [
      {
        id: '1',
        promptFa: 'دیالوگ کامل سفارش، شکایت و پرداخت',
        sampleAnswer:
          'Gast: Entschuldigung, wir würden gern bestellen. Kellner: Einen Moment, bitte. Was kann ich Ihnen bringen? Gast: Ich hätte gern ein Schnitzel mit Pommes frites und ein Mineralwasser. Kellner: Gern. Gast: Verzeihen Sie, aber die Suppe ist kalt. Kellner: Oh, das tut mir leid. Ich bringe Ihnen eine neue Suppe. Gast: Könnte ich auch ein neues Besteck bekommen? Kellner: Natürlich. Gast: Später möchten wir getrennt zahlen. Kellner: Kein Problem.',
      },
    ],
  },

  // ── Exercise 18: b-d-g und p-t-k — multiple-choice ────────────────
  {
    id: 'a2-10-18-b-d-g-p-t-k',
    title: 'b-d-g und p-t-k',
    type: 'multiple-choice',
    skill: 'pronunciation',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'مشخص کنید این کلمه با کدام گروه صدا شروع می‌شود.',
    instructionDe: 'Zu welcher Gruppe gehört das Wort?',
    explanationFa: 'باید به تفاوت صداهای b/p، d/t و g/k دقت کرد.',
    items: [
      { id: '1', question: 'Besteck', options: ['b-d-g', 'p-t-k'], correctIndex: 0, explanationFa: 'Besteck با صدای b شروع می‌شود.' },
      { id: '2', question: 'Pizza', options: ['b-d-g', 'p-t-k'], correctIndex: 1, explanationFa: 'Pizza با صدای p شروع می‌شود.' },
      { id: '3', question: 'Dose', options: ['b-d-g', 'p-t-k'], correctIndex: 0, explanationFa: 'Dose با صدای d شروع می‌شود.' },
      { id: '4', question: 'Tasse', options: ['b-d-g', 'p-t-k'], correctIndex: 1, explanationFa: 'Tasse با صدای t شروع می‌شود.' },
      { id: '5', question: 'Gabel', options: ['b-d-g', 'p-t-k'], correctIndex: 0, explanationFa: 'Gabel با صدای g شروع می‌شود.' },
      { id: '6', question: 'Kaffee', options: ['b-d-g', 'p-t-k'], correctIndex: 1, explanationFa: 'Kaffee با صدای k شروع می‌شود.' },
      { id: '7', question: 'danke', options: ['b-d-g', 'p-t-k'], correctIndex: 0, explanationFa: 'danke با صدای d شروع می‌شود.' },
      { id: '8', question: 'Pommes', options: ['b-d-g', 'p-t-k'], correctIndex: 1, explanationFa: 'Pommes با صدای p شروع می‌شود.' },
    ],
  },

  // ── Exercise 19: Mini-Test: Lektion 10 A2.1 — multiple-choice ────
  {
    id: 'a2-10-19-mini-test',
    title: 'Mini-Test: Lektion 10 A2.1',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'گزینه‌ی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie die richtige Antwort.',
    explanationFa: 'این تمرین جمع‌بندی واژگان، گرامر و Kommunikation درس ۱۰ است.',
    items: [
      { id: '1', question: '«صورت‌حساب لطفاً» به آلمانی:', options: ['Die Rechnung, bitte.', 'Das Messer ist kalt.', 'Ich habe reserviert.'], correctIndex: 0, explanationFa: 'Die Rechnung, bitte یعنی صورت‌حساب لطفاً.' },
      { id: '2', question: '«قاشق» به آلمانی:', options: ['der Löffel', 'die Gabel', 'das Glas'], correctIndex: 0, explanationFa: 'der Löffel یعنی قاشق.' },
      { id: '3', question: 'Schade, dass es keine Pizza ___.', options: ['gibt', 'geben', 'ist'], correctIndex: 0, explanationFa: 'فعل gibt باید آخر جمله بیاید.' },
      { id: '4', question: 'Ich finde, dass das Essen gut ___.', options: ['schmeckt', 'schmecken', 'geschmeckt'], correctIndex: 0, explanationFa: 'فعل schmeckt باید آخر جمله بیاید و با das Essen مطابقت کند.' },
      { id: '5', question: '«باهم یا جدا؟»', options: ['Zusammen oder getrennt?', 'Salz oder Pfeffer?', 'Teller oder Glas?'], correctIndex: 0, explanationFa: 'Zusammen oder getrennt؟ یعنی باهم یا جدا؟' },
      { id: '6', question: 'Verzeihen Sie, aber die Suppe ist ___.', options: ['kalt', 'reserviert', 'getrennt'], correctIndex: 0, explanationFa: 'kalt یعنی سرد.' },
      { id: '7', question: 'Ich hätte gern ein Steak, aber nicht mit Salat, ___ mit Pommes.', options: ['sondern', 'weil', 'deshalb'], correctIndex: 0, explanationFa: 'sondern بعد از نفی می‌آید.' },
      { id: '8', question: 'Gut, dass du ___ hast.', options: ['reserviert', 'reservieren', 'reservierst'], correctIndex: 0, explanationFa: 'با haben + Partizip II: reserviert.' },
    ],
  },

  // ── Exercise 20: Mein Restaurantbesuch — final project ───────────
  {
    id: 'a2-10-20-mein-restaurantbesuch',
    title: 'Mein Restaurantbesuch',
    type: 'dialogue',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 10,
    instructionFa: 'با استفاده از سؤال‌های راهنما، درباره‌ی یک تجربه‌ی رستورانی یک متن یا دیالوگ A2 بنویسید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Schreiben Sie mit Hilfe der Leitfragen über einen Restaurantbesuch.',
    pattern: [
      'Haben Sie reserviert?',
      'Was haben Sie bestellt?',
      'Was hat gut geschmeckt?',
      'Gab es ein Problem?',
      'Haben Sie reklamiert?',
      'Haben Sie zusammen oder getrennt gezahlt?',
      'Wie fanden Sie das Restaurant?',
    ],
    explanationFa: 'برای این متن از حداقل دو جمله‌ی dass استفاده کنید.',
    items: [
      {
        id: '1',
        promptFa: 'متن نمونه درباره‌ی یک تجربه‌ی رستورانی',
        sampleAnswer:
          'Gestern war ich mit meiner Freundin in einem italienischen Restaurant. Gut, dass sie reserviert hatte, denn das Lokal war sehr voll. Ich habe Pasta bestellt und sie hat Fisch genommen. Das Essen hat sehr gut geschmeckt, aber die Suppe war leider kalt. Deshalb haben wir reklamiert. Der Kellner war sehr freundlich und hat sofort eine neue Suppe gebracht. Am Ende haben wir getrennt gezahlt. Ich finde, dass das Restaurant gut ist, aber ein bisschen laut.',
      },
    ],
  },
]
