import { Exercise } from '@/types/exercise'

/**
 * A2.1 — Lektion 11: Ich freue mich so (Recycling, Second-Hand,
 * Geschäftsidee, Glückwunschkarte, reflexive Verben)
 * Independent exercises written for this site — not copied from any
 * coursebook/workbook layout or wording.
 */
export const lesson11Exercises: Exercise[] = [

  // ── Exercise 1: Produkte und Gebrauchsgegenstände — multiple-choice
  {
    id: 'a2-11-1-produkte-gegenstaende',
    title: 'Produkte und Gebrauchsgegenstände',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'با توجه به معنی فارسی، کلمه‌ی آلمانی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie das richtige Wort.',
    explanationFa: 'این کلمات مربوط به محصولات و وسایل روزمره هستند.',
    items: [
      { id: '1', question: 'پاکت نامه', options: ['der Briefumschlag', 'der Rucksack', 'die Werkstatt'], correctIndex: 0, explanationFa: 'der Briefumschlag یعنی پاکت نامه.' },
      { id: '2', question: 'کاغذ نامه', options: ['das Briefpapier', 'die Handtasche', 'der Kunde'], correctIndex: 0, explanationFa: 'das Briefpapier یعنی کاغذ نامه.' },
      { id: '3', question: 'کارت پستال', options: ['die Postkarte', 'der Schmuck', 'der Stoff'], correctIndex: 0, explanationFa: 'die Postkarte یعنی کارت پستال.' },
      { id: '4', question: 'دفترچه یادداشت', options: ['der Notizblock', 'die Meinung', 'der Grund'], correctIndex: 0, explanationFa: 'der Notizblock یعنی دفترچه یادداشت.' },
      { id: '5', question: 'کاغذ کادو', options: ['das Geschenkpapier', 'die Werkstatt', 'die Kundin'], correctIndex: 0, explanationFa: 'das Geschenkpapier یعنی کاغذ کادو.' },
      { id: '6', question: 'کیف دستی زنانه', options: ['die Handtasche', 'der Artikel', 'der Rucksack'], correctIndex: 0, explanationFa: 'die Handtasche یعنی کیف دستی زنانه.' },
      { id: '7', question: 'کوله‌پشتی', options: ['der Rucksack', 'der Briefumschlag', 'die Postkarte'], correctIndex: 0, explanationFa: 'der Rucksack یعنی کوله‌پشتی.' },
      { id: '8', question: 'کیف پول', options: ['die Geldbörse', 'die Werkstatt', 'der Grund'], correctIndex: 0, explanationFa: 'die Geldbörse (das Portemonnaie) یعنی کیف پول.' },
    ],
  },

  // ── Exercise 2: Woraus ist das? Materialien — fill-blank ─────────
  {
    id: 'a2-11-2-woraus-ist-das',
    title: 'Woraus ist das? Materialien',
    type: 'fill-blank',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'جمله‌ها را با ماده‌ی مناسب کامل کنید — کلمه را بکشید یا روی آن لمس کنید.',
    instructionDe: 'Ergänzen Sie die Sätze mit dem passenden Material.',
    wordBank: ['Papier', 'Holz', 'Stoff', 'Glas', 'Plastikflaschen', 'Metall'],
    explanationFa: 'برای گفتن جنس یک چیز از aus + Dativ استفاده می‌کنیم.',
    items: [
      { id: '1', prompt: 'Der Briefumschlag ist aus ___.', answer: 'Papier', translationFa: 'پاکت نامه از کاغذ است.' },
      { id: '2', prompt: 'Der Schrank ist aus ___.', answer: 'Holz', translationFa: 'کمد از چوب است.' },
      { id: '3', prompt: 'Die Tasche ist aus altem ___.', answer: 'Stoff', translationFa: 'کیف از پارچه‌ی کهنه است.' },
      { id: '4', prompt: 'Die Flasche ist aus ___.', answer: 'Glas', translationFa: 'بطری از شیشه است.' },
      { id: '5', prompt: 'Der Rucksack ist aus alten ___.', answer: 'Plastikflaschen', translationFa: 'کوله‌پشتی از بطری‌های پلاستیکی قدیمی است.' },
      { id: '6', prompt: 'Der Schmuck ist aus ___.', answer: 'Metall', translationFa: 'زینت‌آلات از فلز است.' },
    ],
  },

  // ── Exercise 3: Wichtige Verben: Recycling und Firma — multiple-choice
  {
    id: 'a2-11-3-wichtige-verben',
    title: 'Wichtige Verben: Recycling und Firma',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'فعل مناسب را انتخاب کنید.',
    instructionDe: 'Wählen Sie das passende Verb.',
    explanationFa: 'این فعل‌ها از مهم‌ترین واژگان درس درباره‌ی بازیافت و شرکت هستند.',
    items: [
      { id: '1', question: 'alte Sachen nicht ___', options: ['wegwerfen', 'gratulieren', 'fühlen'], correctIndex: 0, explanationFa: 'wegwerfen یعنی دور انداختن.' },
      { id: '2', question: 'Taschen aus alten Stoffen ___', options: ['herstellen', 'streiten', 'verlieren'], correctIndex: 0, explanationFa: 'herstellen یعنی تولید کردن.' },
      { id: '3', question: 'ein Fest ___', options: ['organisieren', 'erinnern', 'beschweren'], correctIndex: 0, explanationFa: 'organisieren یعنی سازمان‌دهی کردن.' },
      { id: '4', question: 'altes Papier wieder ___', options: ['verwenden', 'ausruhen', 'fühlen'], correctIndex: 0, explanationFa: 'verwenden یعنی استفاده کردن.' },
      { id: '5', question: 'sich für die Zusammenarbeit ___', options: ['bedanken', 'wegwerfen', 'herstellen'], correctIndex: 0, explanationFa: 'sich bedanken یعنی تشکر کردن.' },
      { id: '6', question: 'jemandem viel Erfolg ___', options: ['wünschen', 'verlieren', 'verwenden'], correctIndex: 0, explanationFa: 'wünschen یعنی آرزو کردن.' },
      { id: '7', question: 'sich an die ersten Produkte ___', options: ['erinnern', 'herstellen', 'organisieren'], correctIndex: 0, explanationFa: 'sich erinnern یعنی به‌یاد آوردن.' },
      { id: '8', question: 'mit einer Kollegin ___', options: ['sich unterhalten', 'sich fühlen', 'sich freuen'], correctIndex: 0, explanationFa: 'sich unterhalten یعنی گفت‌وگو کردن.' },
    ],
  },

  // ── Exercise 4: Reflexivpronomen einsetzen — fill-blank ──────────
  {
    id: 'a2-11-4-reflexivpronomen-einsetzen',
    title: 'Reflexivpronomen einsetzen',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'ضمیر انعکاسی درست را بنویسید.',
    instructionDe: 'Ergänzen Sie das richtige Reflexivpronomen.',
    explanationFa: 'ضمیر انعکاسی باید با فاعل جمله هماهنگ باشد: ich=mich, du=dich, er/sie/es=sich, wir=uns, ihr=euch, sie/Sie=sich.',
    items: [
      { id: '1', prompt: 'Ich freue ___ auf das Fest.', answer: 'mich', translationFa: 'من برای جشن خوشحالم.' },
      { id: '2', prompt: 'Du erinnerst ___ an den Urlaub.', answer: 'dich', translationFa: 'تو تعطیلات یادت می‌آید.' },
      { id: '3', prompt: 'Er ärgert ___ über den Fehler.', answer: 'sich', translationFa: 'او از این اشتباه ناراحت می‌شود.' },
      { id: '4', prompt: 'Wir bedanken ___ für die Hilfe.', answer: 'uns', translationFa: 'ما بابت کمک تشکر می‌کنیم.' },
      { id: '5', prompt: 'Ihr streitet ___ schon wieder.', answer: 'euch', translationFa: 'شما دوباره دعوا می‌کنید.' },
      { id: '6', prompt: 'Sie unterhalten ___ mit den Kunden.', answer: 'sich', translationFa: 'آن‌ها با مشتری‌ها گفت‌وگو می‌کنند.' },
      { id: '7', prompt: 'Frau Bauer, fühlen Sie ___ gut?', answer: 'sich', translationFa: 'خانم بائر، حالتان خوب است؟' },
      { id: '8', prompt: 'Die Kinder ruhen ___ aus.', answer: 'sich', translationFa: 'بچه‌ها استراحت می‌کنند.' },
    ],
  },

  // ── Exercise 5: Welches reflexive Verb passt? — multiple-choice ──
  {
    id: 'a2-11-5-welches-verb-passt',
    title: 'Welches reflexive Verb passt?',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'فعل انعکاسی مناسب را انتخاب کنید.',
    instructionDe: 'Wählen Sie das passende reflexive Verb.',
    explanationFa: 'هر موقعیت یک فعل انعکاسی خاص می‌طلبد.',
    items: [
      { id: '1', question: 'Ich habe morgen Geburtstag. Ich ___ mich sehr.', options: ['freue', 'streite', 'beschwere'], correctIndex: 0, explanationFa: 'sich freuen یعنی خوشحال بودن.' },
      { id: '2', question: 'Wir haben ein Problem mit dem Produkt. Wir ___ uns beim Service.', options: ['beschweren', 'fühlen', 'erinnern'], correctIndex: 0, explanationFa: 'sich beschweren یعنی شکایت کردن.' },
      { id: '3', question: 'Meine Kinder sind laut. Sie ___ sich jeden Tag.', options: ['streiten', 'bedanken', 'freuen'], correctIndex: 0, explanationFa: 'sich streiten یعنی دعوا کردن.' },
      { id: '4', question: 'Ich bin müde. Ich ___ mich ein bisschen aus.', options: ['ruhe', 'ärgere', 'erinnere'], correctIndex: 0, explanationFa: 'sich ausruhen یعنی استراحت کردن.' },
      { id: '5', question: 'Ich habe alte Fotos gesehen. Ich ___ mich an meine Kindheit.', options: ['erinnere', 'beschwere', 'fühle'], correctIndex: 0, explanationFa: 'sich erinnern یعنی به‌یاد آوردن.' },
      { id: '6', question: 'Nach dem Urlaub ___ wir uns sehr gut.', options: ['fühlen', 'streiten', 'bedanken'], correctIndex: 0, explanationFa: 'sich fühlen یعنی احساس کردن.' },
    ],
  },

  // ── Exercise 6: Sätze mit reflexiven Verben — sentence-order ─────
  {
    id: 'a2-11-6-saetze-mit-reflexiven-verben',
    title: 'Sätze mit reflexiven Verben',
    type: 'sentence-order',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'کلمات را به ترتیب درست بکشید یا روی آن‌ها لمس کنید تا جمله‌ی کامل بسازید.',
    instructionDe: 'Bilden Sie mit den Wörtern einen vollständigen Satz.',
    explanationFa: 'ضمیر انعکاسی معمولاً بعد از فعل صرف‌شده می‌آید.',
    items: [
      {
        id: '1',
        words: ['mich', 'freue', 'auf das Wochenende', 'Ich'],
        correctOrder: ['Ich', 'freue', 'mich', 'auf das Wochenende'],
        translationFa: 'من برای آخر هفته خوشحالم.',
      },
      {
        id: '2',
        words: ['dich', 'erinnerst', 'an den ersten Arbeitstag', 'Du'],
        correctOrder: ['Du', 'erinnerst', 'dich', 'an den ersten Arbeitstag'],
        translationFa: 'اولین روز کاری‌ات یادت می‌آید.',
      },
      {
        id: '3',
        words: ['uns', 'bedanken', 'für die Zusammenarbeit', 'Wir'],
        correctOrder: ['Wir', 'bedanken', 'uns', 'für die Zusammenarbeit'],
        translationFa: 'ما بابت همکاری تشکر می‌کنیم.',
      },
      {
        id: '4',
        words: ['sich', 'beschweren', 'über den Service', 'Die Kunden'],
        correctOrder: ['Die Kunden', 'beschweren', 'sich', 'über den Service'],
        translationFa: 'مشتری‌ها از خدمات شکایت می‌کنند.',
      },
      {
        id: '5',
        words: ['euch', 'streitet', 'oft', 'Ihr'],
        correctOrder: ['Ihr', 'streitet', 'euch', 'oft'],
        translationFa: 'شما اغلب دعوا می‌کنید.',
      },
      {
        id: '6',
        words: ['sich', 'fühlt', 'sehr gut', 'Frau Bauer'],
        correctOrder: ['Frau Bauer', 'fühlt', 'sich', 'sehr gut'],
        translationFa: 'حال خانم بائر خیلی خوب است.',
      },
    ],
  },

  // ── Exercise 7: Reflexive Verben im Perfekt — fill-blank ─────────
  {
    id: 'a2-11-7-reflexive-verben-perfekt',
    title: 'Reflexive Verben im Perfekt',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'ضمیر انعکاسی درست را در جمله‌های Perfekt بنویسید.',
    instructionDe: 'Ergänzen Sie das Reflexivpronomen im Perfekt.',
    explanationFa: 'ضمیر انعکاسی در Perfekt هم باقی می‌ماند و بین haben و Partizip II می‌آید.',
    items: [
      { id: '1', prompt: 'Ich habe ___ über den Fehler geärgert.', answer: 'mich', translationFa: 'من از این اشتباه ناراحت شدم.' },
      { id: '2', prompt: 'Du hast ___ an den ersten Tag erinnert.', answer: 'dich', translationFa: 'تو اولین روز را یادت آمد.' },
      { id: '3', prompt: 'Wir haben ___ für die Hilfe bedankt.', answer: 'uns', translationFa: 'ما بابت کمک تشکر کردیم.' },
      { id: '4', prompt: 'Ihr habt ___ gestern gestritten.', answer: 'euch', translationFa: 'شما دیروز دعوا کردید.' },
      { id: '5', prompt: 'Sie hat ___ mit ihrer Kollegin unterhalten.', answer: 'sich', translationFa: 'او با همکارش گفت‌وگو کرد.' },
      { id: '6', prompt: 'Die Gäste haben ___ über das Essen beschwert.', answer: 'sich', translationFa: 'مهمان‌ها از غذا شکایت کردند.' },
    ],
  },

  // ── Exercise 8: Eine Meinung ausdrücken — multiple-choice ────────
  {
    id: 'a2-11-8-meinung-ausdruecken',
    title: 'Eine Meinung ausdrücken',
    type: 'multiple-choice',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'مشخص کنید این عبارت بیان نظر مثبت، منفی یا کلی است.',
    instructionDe: 'Ist der Ausdruck positiv, negativ oder allgemein?',
    explanationFa: 'برخی عبارت‌های نظر مثبت‌اند، برخی منفی، و برخی فقط نظر کلی بیان می‌کنند.',
    items: [
      { id: '1', question: 'Ich finde es schön, dass …', options: ['مثبت', 'منفی', 'کلی'], correctIndex: 0, explanationFa: 'schön یعنی قشنگ — نظر مثبت.' },
      { id: '2', question: 'Ich finde es traurig, dass …', options: ['مثبت', 'منفی', 'کلی'], correctIndex: 1, explanationFa: 'traurig یعنی ناراحت‌کننده — نظر منفی.' },
      { id: '3', question: 'Ich bin froh, dass …', options: ['مثبت', 'منفی', 'کلی'], correctIndex: 0, explanationFa: 'froh یعنی خوشحال — نظر مثبت.' },
      { id: '4', question: 'Ich denke, dass …', options: ['مثبت', 'منفی', 'کلی'], correctIndex: 2, explanationFa: 'این فقط بیان یک فکر کلی است.' },
      { id: '5', question: 'Ich finde es schrecklich, dass …', options: ['مثبت', 'منفی', 'کلی'], correctIndex: 1, explanationFa: 'schrecklich یعنی وحشتناک — نظر منفی.' },
      { id: '6', question: 'Meiner Meinung nach …', options: ['مثبت', 'منفی', 'کلی'], correctIndex: 2, explanationFa: 'این فقط بیان نظر کلی است.' },
      { id: '7', question: 'Besonders gut gefällt mir, dass …', options: ['مثبت', 'منفی', 'کلی'], correctIndex: 0, explanationFa: 'gut gefällt mir یعنی خیلی خوشم می‌آید — نظر مثبت.' },
    ],
  },

  // ── Exercise 9: Meinung mit dass-Sätzen — fill-blank ──────────────
  {
    id: 'a2-11-9-meinung-mit-dass',
    title: 'Meinung mit dass-Sätzen',
    type: 'fill-blank',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'با عبارت شروع‌شده، جمله‌ی کامل با dass بسازید — فعل را آخر جمله ببرید.',
    instructionDe: 'Bilden Sie einen vollständigen Satz mit dass.',
    explanationFa: 'بعد از dass فعل صرف‌شده به آخر جمله می‌رود.',
    items: [
      { id: '1', prompt: 'Viele Menschen werfen zu viel weg. → Ich finde es traurig, dass ___', answer: 'viele Menschen zu viel wegwerfen', translationFa: 'برایم ناراحت‌کننده است که خیلی‌ها زیاد دور می‌اندازند.' },
      { id: '2', prompt: 'Die Firma verwendet alte Materialien. → Ich finde es schön, dass ___', answer: 'die Firma alte Materialien verwendet', translationFa: 'به نظرم قشنگ است که شرکت از مواد قدیمی استفاده می‌کند.' },
      { id: '3', prompt: 'Die Produkte gefallen den Kunden. → Ich bin froh, dass ___', answer: 'die Produkte den Kunden gefallen', translationFa: 'خوشحالم که محصولات مورد پسند مشتری‌هاست.' },
      { id: '4', prompt: 'Die Geschäftsidee ist gut. → Ich denke, dass ___', answer: 'die Geschäftsidee gut ist', translationFa: 'فکر می‌کنم ایده‌ی تجاری خوبی است.' },
      { id: '5', prompt: 'Arbeitslose Menschen bekommen eine Chance. → Besonders gut gefällt mir, dass ___', answer: 'arbeitslose Menschen eine Chance bekommen', translationFa: 'چیزی که مخصوصاً خوشم می‌آید این است که افراد بیکار فرصت پیدا می‌کنند.' },
    ],
  },

  // ── Exercise 10: Second-Hand-Kaufhaus verstehen — multiple-choice
  {
    id: 'a2-11-10-second-hand-kaufhaus',
    title: 'Second-Hand-Kaufhaus verstehen',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'متن را بخوانید و درست یا غلط بودن جمله‌ها را تشخیص دهید.',
    instructionDe: 'Lesen Sie den Text und entscheiden Sie: richtig oder falsch.',
    explanationFa:
      'متن: «Second-Hand-Kaufhaus GrünPlus. Viele Menschen werfen alte Möbel, Kleidung, Bücher und Geschirr zu schnell weg. Das Second-Hand-Kaufhaus GrünPlus sammelt diese Sachen, repariert sie und verkauft sie wieder. Einige Mitarbeiter waren lange arbeitslos. In der Werkstatt bekommen sie eine neue Chance. Die Kunden freuen sich über günstige Preise. Meiner Meinung nach ist das eine gute Geschäftsidee, weil man weniger Müll produziert und Menschen ohne Arbeit helfen kann.»',
    items: [
      { id: '1', question: 'GrünPlus verkauft neue Luxusprodukte.', options: ['richtig', 'falsch'], correctIndex: 1, explanationFa: 'این فروشگاه Second-Hand است، نه فروشنده‌ی محصولات لوکس جدید.' },
      { id: '2', question: 'Das Kaufhaus sammelt alte Sachen.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'در متن آمده: sammelt diese Sachen — درست است.' },
      { id: '3', question: 'Die Mitarbeiter reparieren manche Produkte.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'در متن آمده: repariert sie — درست است.' },
      { id: '4', question: 'Einige Mitarbeiter waren früher arbeitslos.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'در متن آمده: waren lange arbeitslos — درست است.' },
      { id: '5', question: 'Die Preise sind sehr teuer.', options: ['richtig', 'falsch'], correctIndex: 1, explanationFa: 'در متن آمده: günstige Preise — پس غلط است.' },
      { id: '6', question: 'Die Idee hilft Menschen und der Umwelt.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'این از نتیجه‌ی متن برداشت می‌شود — درست است.' },
    ],
  },

  // ── Exercise 11: Aus Alt mach Neu — fill-blank ────────────────────
  {
    id: 'a2-11-11-aus-alt-mach-neu',
    title: 'Aus Alt mach Neu',
    type: 'fill-blank',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'جمله‌ها را با محصول مناسب کامل کنید — کلمه را بکشید یا روی آن لمس کنید.',
    instructionDe: 'Ergänzen Sie die Sätze.',
    wordBank: ['Briefumschläge', 'Rucksäcke', 'Notizblöcke', 'Möbel', 'Schmuck', 'Taschen'],
    explanationFa: 'ساختار Aus … kann man … machen/herstellen برای بیان ایده‌ی بازیافت به‌کار می‌رود.',
    items: [
      { id: '1', prompt: 'Aus alten Landkarten kann man ___ machen.', answer: 'Briefumschläge', translationFa: 'از نقشه‌های قدیمی می‌توان پاکت نامه ساخت.' },
      { id: '2', prompt: 'Aus alten Plastikflaschen kann man ___ herstellen.', answer: 'Rucksäcke', translationFa: 'از بطری‌های پلاستیکی قدیمی می‌توان کوله‌پشتی تولید کرد.' },
      { id: '3', prompt: 'Aus altem Papier kann man ___ produzieren.', answer: 'Notizblöcke', translationFa: 'از کاغذ کهنه می‌توان دفترچه یادداشت تولید کرد.' },
      { id: '4', prompt: 'Aus altem Holz kann man ___ bauen.', answer: 'Möbel', translationFa: 'از چوب کهنه می‌توان مبلمان ساخت.' },
      { id: '5', prompt: 'Aus Metallresten kann man ___ machen.', answer: 'Schmuck', translationFa: 'از باقی‌مانده‌ی فلز می‌توان زینت‌آلات ساخت.' },
      { id: '6', prompt: 'Aus alten Stoffen kann man ___ nähen.', answer: 'Taschen', translationFa: 'از پارچه‌های کهنه می‌توان کیف دوخت.' },
    ],
  },

  // ── Exercise 12: Interview mit einer Gründerin — multiple-choice
  {
    id: 'a2-11-12-interview-gruenderin',
    title: 'Interview mit einer Gründerin',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'متن مصاحبه را بخوانید و درست یا غلط بودن جمله‌ها را تشخیص دهید.',
    instructionDe: 'Lesen Sie das Interview und entscheiden Sie: richtig oder falsch.',
    explanationFa:
      'متن: «Reporter: Frau Keller, Sie stellen Taschen aus alten Stoffen her. Sind Sie zufrieden؟ Frau Keller: Ja, sehr. Ich freue mich besonders, dass unsere Produkte den Kunden gefallen. Reporter: War der Anfang schwer؟ Frau Keller: Ja, am Anfang hatte ich wenige Kontakte. Aber jetzt kennen wir viele Betriebe. Reporter: Ärgern Sie sich über Konkurrenz؟ Frau Keller: Nein, ich ärgere mich nicht. Ich denke, dass Second-Hand und Recycling im Trend liegen. Reporter: Haben Sie neue Ideen؟ Frau Keller: Ja, wir möchten bald auch Rucksäcke und Schmuck herstellen.»',
    items: [
      { id: '1', question: 'Frau Keller stellt Taschen aus alten Stoffen her.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'در متن آمده: Sie stellen Taschen aus alten Stoffen her — درست است.' },
      { id: '2', question: 'Sie ist unzufrieden.', options: ['richtig', 'falsch'], correctIndex: 1, explanationFa: 'در متن آمده: Ja, sehr (zufrieden) — پس غلط است.' },
      { id: '3', question: 'Am Anfang hatte sie viele Kontakte.', options: ['richtig', 'falsch'], correctIndex: 1, explanationFa: 'در متن آمده: am Anfang hatte ich wenige Kontakte — پس غلط است.' },
      { id: '4', question: 'Heute kennt sie viele Betriebe.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'در متن آمده: jetzt kennen wir viele Betriebe — درست است.' },
      { id: '5', question: 'Sie ärgert sich sehr über Konkurrenz.', options: ['richtig', 'falsch'], correctIndex: 1, explanationFa: 'در متن آمده: ich ärgere mich nicht — پس غلط است.' },
      { id: '6', question: 'Sie möchte neue Produkte herstellen.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'در متن آمده: wir möchten bald auch Rucksäcke und Schmuck herstellen — درست است.' },
    ],
  },

  // ── Exercise 13: Gratulieren und wünschen — multiple-choice ──────
  {
    id: 'a2-11-13-gratulieren-wuenschen',
    title: 'Gratulieren und wünschen',
    type: 'multiple-choice',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'برای هر موقعیت، جمله‌ی مناسب را انتخاب کنید.',
    instructionDe: 'Wählen Sie den passenden Satz.',
    explanationFa: 'این جمله‌ها برای تبریک و آرزوی موفقیت به‌کار می‌روند.',
    items: [
      { id: '1', question: 'همکارت ۱۰ سال است در شرکت کار می‌کند.', options: ['Herzlichen Glückwunsch zum Jubiläum!', 'Ich beschwere mich über den Service.', 'Ich werfe das weg.'], correctIndex: 0, explanationFa: 'این جمله برای سالگرد کاری مناسب است.' },
      { id: '2', question: 'برای آینده‌ی کسی آرزوی موفقیت می‌کنی.', options: ['Wir wünschen Ihnen viel Erfolg.', 'Die Tasche ist aus Stoff.', 'Ich erinnere mich.'], correctIndex: 0, explanationFa: 'Wir wünschen Ihnen viel Erfolg یعنی برایتان موفقیت زیاد آرزو می‌کنیم.' },
      { id: '3', question: 'می‌خواهی رسمی تبریک بگویی.', options: ['Wir gratulieren Ihnen herzlich.', 'Ich streite mich mit dir.', 'Ich ruhe mich aus.'], correctIndex: 0, explanationFa: 'Wir gratulieren Ihnen herzlich یعنی صمیمانه تبریک می‌گوییم.' },
      { id: '4', question: 'می‌خواهی تشکر کنی.', options: ['Wir danken Ihnen für die gute Zusammenarbeit.', 'Ich verliere meine Tasche.', 'Das ist aus Glas.'], correctIndex: 0, explanationFa: 'این جمله برای تشکر رسمی به‌کار می‌رود.' },
    ],
  },

  // ── Exercise 14: danken oder sich bedanken? — fill-blank ─────────
  {
    id: 'a2-11-14-danken-oder-sich-bedanken',
    title: 'danken oder sich bedanken?',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'جمله‌ها را با کلمه‌ی درست کامل کنید.',
    instructionDe: 'Ergänzen Sie die Sätze.',
    explanationFa: 'danken با Dativ (شخص) می‌آید؛ sich bedanken für با Akkusativ (چیز) می‌آید.',
    items: [
      { id: '1', prompt: 'Wir ___ Ihnen für die gute Zusammenarbeit.', answer: 'danken', translationFa: 'ما به خاطر همکاری خوب از شما تشکر می‌کنیم.' },
      { id: '2', prompt: 'Wir ___ uns für Ihre Hilfe.', answer: 'bedanken', translationFa: 'ما بابت کمک شما تشکر می‌کنیم.' },
      { id: '3', prompt: 'Ich danke ___ für alles.', answer: 'dir', translationFa: 'بابت همه چیز از تو متشکرم.' },
      { id: '4', prompt: 'Wir bedanken ___ herzlich.', answer: 'uns', translationFa: 'ما صمیمانه تشکر می‌کنیم.' },
      { id: '5', prompt: 'Vielen Dank ___ die schönen Jahre.', answer: 'für', translationFa: 'بسیار متشکریم بابت این سال‌های خوب.' },
    ],
  },

  // ── Exercise 15: Eine Glückwunschkarte ergänzen — fill-blank ────
  {
    id: 'a2-11-15-glueckwunschkarte-ergaenzen',
    title: 'Eine Glückwunschkarte ergänzen',
    type: 'fill-blank',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'کارت تبریک را با کلمات بانک کامل کنید — دسکتاپ: درگ‌ودراپ، موبایل: لمس کنید.',
    instructionDe: 'Ergänzen Sie die Glückwunschkarte.',
    wordBank: ['Herzlichen Glückwunsch', 'Jubiläum', 'gratulieren', 'danken', 'Zusammenarbeit', 'wünschen', 'Erfolg'],
    explanationFa: 'متن کامل: «Liebe Frau Bauer, Herzlichen Glückwunsch zum zehnjährigen Jubiläum! Wir gratulieren Ihnen ganz herzlich. Wir danken Ihnen für die gute Zusammenarbeit. Für die Zukunft wünschen wir Ihnen viel Erfolg.»',
    items: [
      { id: '1', prompt: '___ zum zehnjährigen Jubiläum!', answer: 'Herzlichen Glückwunsch', translationFa: 'تبریک صمیمانه برای سالگرد دهمین سال!' },
      { id: '2', prompt: 'Herzlichen Glückwunsch zum zehnjährigen ___!', answer: 'Jubiläum', translationFa: 'سالگرد ده‌سالگی' },
      { id: '3', prompt: 'Wir ___ Ihnen ganz herzlich.', answer: 'gratulieren', translationFa: 'ما صمیمانه به شما تبریک می‌گوییم.' },
      { id: '4', prompt: 'Wir ___ Ihnen für die gute Zusammenarbeit.', answer: 'danken', translationFa: 'ما بابت همکاری خوب از شما تشکر می‌کنیم.' },
      { id: '5', prompt: 'Wir danken Ihnen für die gute ___.', answer: 'Zusammenarbeit', translationFa: 'همکاری خوب' },
      { id: '6', prompt: 'Für die Zukunft ___ wir Ihnen viel Erfolg.', answer: 'wünschen', translationFa: 'برای آینده برایتان موفقیت زیاد آرزو می‌کنیم.' },
      { id: '7', prompt: 'Für die Zukunft wünschen wir Ihnen viel ___.', answer: 'Erfolg', translationFa: 'موفقیت زیاد' },
    ],
  },

  // ── Exercise 16: Eine Glückwunschkarte schreiben — dialogue ─────
  {
    id: 'a2-11-16-glueckwunschkarte-schreiben',
    title: 'Eine Glückwunschkarte schreiben',
    type: 'dialogue',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'برای همکاری که ۵ سال است در شرکت کار می‌کند، یک کارت تبریک بنویسید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Schreiben Sie eine Glückwunschkarte für eine Kollegin.',
    pattern: [
      'Anrede',
      'Glückwunsch',
      'Dank für die Zusammenarbeit',
      'Wünsche für die Zukunft',
      'Schluss',
    ],
    explanationFa: 'کارت تبریک باید این بخش‌ها را داشته باشد: خطاب، تبریک، تشکر، آرزوی آینده، پایان.',
    items: [
      {
        id: '1',
        promptFa: 'کارت تبریک نمونه برای همکاری که ۵ سال کار کرده',
        sampleAnswer:
          'Liebe Frau Schneider, herzlichen Glückwunsch zum fünfjährigen Jubiläum! Wir gratulieren Ihnen ganz herzlich. Wir danken Ihnen für die gute Zusammenarbeit und für Ihr Engagement. Für die Zukunft wünschen wir Ihnen viel Erfolg, Glück und Gesundheit. Herzliche Grüße, Ihr Team',
      },
    ],
  },

  // ── Exercise 17: Sätze ordnen: Reflexive Verben und Glückwünsche
  {
    id: 'a2-11-17-saetze-ordnen',
    title: 'Sätze ordnen: Reflexive Verben und Glückwünsche',
    type: 'sentence-order',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'کلمات را به ترتیب درست بکشید یا روی آن‌ها لمس کنید تا جمله‌ی کامل بسازید.',
    instructionDe: 'Bilden Sie mit den Wörtern einen vollständigen Satz.',
    explanationFa: 'به جایگاه ضمیر انعکاسی بعد از فعل دقت کنید.',
    items: [
      {
        id: '1',
        words: ['mich', 'freue', 'sehr', 'Ich'],
        correctOrder: ['Ich', 'freue', 'mich', 'sehr'],
        translationFa: 'من خیلی خوشحالم.',
      },
      {
        id: '2',
        words: ['sich', 'erinnert', 'an ihre ersten Produkte', 'Sie'],
        correctOrder: ['Sie', 'erinnert', 'sich', 'an ihre ersten Produkte'],
        translationFa: 'او اولین محصولاتش را یادش می‌آید.',
      },
      {
        id: '3',
        words: ['uns', 'bedanken', 'für die Zusammenarbeit', 'Wir'],
        correctOrder: ['Wir', 'bedanken', 'uns', 'für die Zusammenarbeit'],
        translationFa: 'ما بابت همکاری تشکر می‌کنیم.',
      },
      {
        id: '4',
        words: ['uns', 'fühlen', 'heute', 'sehr gut', 'Wir'],
        correctOrder: ['Wir', 'fühlen', 'uns', 'heute', 'sehr gut'],
        translationFa: 'حال ما امروز خیلی خوب است.',
      },
      {
        id: '5',
        words: ['zum Jubiläum', 'Herzlichen Glückwunsch'],
        correctOrder: ['Herzlichen Glückwunsch', 'zum Jubiläum'],
        translationFa: 'تبریک صمیمانه برای سالگرد!',
      },
      {
        id: '6',
        words: ['Ihnen', 'wünschen', 'viel Erfolg', 'Wir'],
        correctOrder: ['Wir', 'wünschen', 'Ihnen', 'viel Erfolg'],
        translationFa: 'ما برایتان موفقیت زیاد آرزو می‌کنیم.',
      },
    ],
  },

  // ── Exercise 18: Reflexivpronomen korrigieren — multiple-choice ──
  {
    id: 'a2-11-18-reflexivpronomen-korrigieren',
    title: 'Reflexivpronomen korrigieren',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'جمله‌ی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie den richtigen Satz.',
    explanationFa: 'ضمیر انعکاسی باید با فاعل جمله هماهنگ باشد.',
    items: [
      { id: '1', question: 'کدام جمله درست است؟', options: ['Ich freue sich auf das Fest.', 'Ich freue mich auf das Fest.'], correctIndex: 1, explanationFa: 'با ich باید mich بیاید، نه sich.' },
      { id: '2', question: 'کدام جمله درست است؟', options: ['Du erinnerst mich an deinen Urlaub.', 'Du erinnerst dich an deinen Urlaub.'], correctIndex: 1, explanationFa: 'با du باید dich بیاید.' },
      { id: '3', question: 'کدام جمله درست است؟', options: ['Wir bedanken sich für die Hilfe.', 'Wir bedanken uns für die Hilfe.'], correctIndex: 1, explanationFa: 'با wir باید uns بیاید.' },
      { id: '4', question: 'کدام جمله درست است؟', options: ['Ihr streitet uns jeden Tag.', 'Ihr streitet euch jeden Tag.'], correctIndex: 1, explanationFa: 'با ihr باید euch بیاید.' },
      { id: '5', question: 'کدام جمله درست است؟', options: ['Frau Bauer fühlt dich gut.', 'Frau Bauer fühlt sich gut.'], correctIndex: 1, explanationFa: 'با er/sie/es باید sich بیاید.' },
      { id: '6', question: 'کدام جمله درست است؟', options: ['Die Kunden beschweren uns über die Produkte.', 'Die Kunden beschweren sich über die Produkte.'], correctIndex: 1, explanationFa: 'با sie (جمع) باید sich بیاید.' },
    ],
  },

  // ── Exercise 19: Mini-Test: Lektion 11 A2.1 — multiple-choice ───
  {
    id: 'a2-11-19-mini-test',
    title: 'Mini-Test: Lektion 11 A2.1',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'گزینه‌ی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie die richtige Antwort.',
    explanationFa: 'این تمرین جمع‌بندی واژگان، گرامر و Kommunikation درس ۱۱ است.',
    items: [
      { id: '1', question: 'Ich freue ___ sehr.', options: ['mich', 'dich', 'sich'], correctIndex: 0, explanationFa: 'با ich باید mich بیاید.' },
      { id: '2', question: 'Wir bedanken ___ für die Zusammenarbeit.', options: ['uns', 'euch', 'sich'], correctIndex: 0, explanationFa: 'با wir باید uns بیاید.' },
      { id: '3', question: '«پاکت نامه» به آلمانی:', options: ['der Briefumschlag', 'die Werkstatt', 'der Schmuck'], correctIndex: 0, explanationFa: 'der Briefumschlag یعنی پاکت نامه.' },
      { id: '4', question: '«کارگاه» به آلمانی:', options: ['die Werkstatt', 'der Kunde', 'der Grund'], correctIndex: 0, explanationFa: 'die Werkstatt یعنی کارگاه.' },
      { id: '5', question: 'Die Tasche ist aus altem ___.', options: ['Stoff', 'Meinung', 'Wunsch'], correctIndex: 0, explanationFa: 'Stoff یعنی پارچه.' },
      { id: '6', question: '«به نظر من» به آلمانی:', options: ['Meiner Meinung nach', 'Viel Glück', 'Ich ruhe mich aus'], correctIndex: 0, explanationFa: 'Meiner Meinung nach یعنی به نظر من.' },
      { id: '7', question: '«تبریک صمیمانه برای سالگرد»:', options: ['Herzlichen Glückwunsch zum Jubiläum!', 'Ich beschwere mich.', 'Ich erinnere mich.'], correctIndex: 0, explanationFa: 'این جمله برای تبریک سالگرد است.' },
      { id: '8', question: 'Ich finde es schön, dass die Firma alte Materialien ___.', options: ['verwendet', 'verwenden', 'verwendest'], correctIndex: 0, explanationFa: 'فعل verwendet با die Firma (سوم‌شخص مفرد) مطابقت دارد و آخر جمله می‌آید.' },
    ],
  },

  // ── Exercise 20: Eine Geschäftsidee bewerten — final project ────
  {
    id: 'a2-11-20-geschaeftsidee-bewerten',
    title: 'Eine Geschäftsidee bewerten',
    type: 'dialogue',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 11,
    instructionFa: 'درباره‌ی این ایده‌ی تجاری با استفاده از سؤال‌های راهنما نظر بدهید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Bewerten Sie die Geschäftsidee mit Hilfe der Leitfragen.',
    pattern: [
      'Eine Firma stellt Taschen und Rucksäcke aus alten Stoffen und Plastikflaschen her. Außerdem arbeiten dort Menschen, die lange arbeitslos waren.',
      'Wie finden Sie die Geschäftsidee?',
      'Was finden Sie gut?',
      'Was finden Sie traurig oder schrecklich?',
      'Würden Sie die Produkte kaufen? Warum?',
      'Würden Sie gern in dieser Firma arbeiten? Warum?',
      'Welche Produkte könnte die Firma noch herstellen?',
    ],
    explanationFa: 'برای این متن از حداقل دو جمله‌ی dass و حداقل یک جمله‌ی weil استفاده کنید.',
    items: [
      {
        id: '1',
        promptFa: 'متن نمونه درباره‌ی نظر نسبت به یک ایده‌ی تجاری',
        sampleAnswer:
          'Ich finde die Geschäftsidee sehr gut. Besonders gut gefällt mir, dass die Firma alte Stoffe und Plastikflaschen verwendet. Ich finde es traurig, dass viele Menschen so viel wegwerfen. Deshalb finde ich es schön, dass man aus alten Sachen neue Produkte herstellen kann. Ich würde die Taschen kaufen, weil sie praktisch und umweltfreundlich sind. In dieser Firma würde ich auch gern arbeiten, weil die Arbeit sinnvoll ist. Die Firma könnte auch Schmuck, Notizblöcke und Geschenkpapier herstellen.',
      },
    ],
  },
]
