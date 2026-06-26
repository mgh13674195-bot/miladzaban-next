import { Exercise } from '@/types/exercise'

/**
 * A2.1 — Lektion 7: Wir könnten montags joggen gehen (Gesundheit, Sport,
 * Konjunktiv II von können/sollen für Vorschläge und Ratschläge)
 * Independent exercises written for this site — not copied from any
 * coursebook/workbook layout or wording.
 */
export const lesson7Exercises: Exercise[] = [

  // ── Exercise 1: Gesundheit und Fitness — multiple-choice ──────────
  {
    id: 'a2-7-1-gesundheit-fitness-wortschatz',
    title: 'Gesundheit und Fitness',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 7,
    instructionFa: 'با توجه به معنی فارسی، کلمه‌ی آلمانی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie das richtige Wort.',
    explanationFa: 'این کلمات از مهم‌ترین واژگان سلامتی و تناسب اندام هستند.',
    items: [
      { id: '1', question: 'سلامتی', options: ['die Gesundheit', 'der Verein', 'die Nudel'], correctIndex: 0, explanationFa: 'die Gesundheit یعنی سلامتی.' },
      { id: '2', question: 'وزن', options: ['das Gewicht', 'die Post', 'die Stelle'], correctIndex: 0, explanationFa: 'das Gewicht یعنی وزن.' },
      { id: '3', question: 'تمرین', options: ['das Training', 'die Diät', 'der Golf'], correctIndex: 0, explanationFa: 'das Training یعنی تمرین.' },
      { id: '4', question: 'لاغر شدن', options: ['abnehmen', 'öffnen', 'leihen'], correctIndex: 0, explanationFa: 'abnehmen یعنی لاغر شدن.' },
      { id: '5', question: 'وزن داشتن', options: ['wiegen', 'empfehlen', 'teilnehmen'], correctIndex: 0, explanationFa: 'wiegen یعنی وزن داشتن.' },
      { id: '6', question: 'منظم', options: ['regelmäßig', 'selten', 'frisch'], correctIndex: 0, explanationFa: 'regelmäßig یعنی منظم.' },
    ],
  },

  // ── Exercise 2: Konjunktiv II: können — fill-blank ────────────────
  {
    id: 'a2-7-2-konjunktiv-koennen',
    title: 'Konjunktiv II: können',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 7,
    instructionFa: 'فرم درست könnte/könntest/könnten/könntet را بنویسید.',
    instructionDe: 'Ergänzen Sie die richtige Form von können.',
    explanationFa: 'این ساختار برای پیشنهاد مودبانه و نرم به‌کار می‌رود.',
    items: [
      { id: '1', prompt: 'Ich ___ mehr Sport machen.', answer: 'könnte', translationFa: 'می‌توانم ورزش بیشتری بکنم.' },
      { id: '2', prompt: 'Du ___ mit einer Laufgruppe trainieren.', answer: 'könntest', translationFa: 'می‌توانی با یک گروه دوندگی تمرین کنی.' },
      { id: '3', prompt: 'Er ___ abends spazieren gehen.', answer: 'könnte', translationFa: 'او می‌تواند شب‌ها پیاده‌روی کند.' },
      { id: '4', prompt: 'Wir ___ montags joggen gehen.', answer: 'könnten', translationFa: 'می‌توانیم دوشنبه‌ها برویم بدویم.' },
      { id: '5', prompt: 'Ihr ___ einen Tanzkurs machen.', answer: 'könntet', translationFa: 'می‌توانید یک کلاس رقص بروید.' },
      { id: '6', prompt: 'Sie ___ Aqua-Fitness ausprobieren.', answer: 'könnten', translationFa: 'آن‌ها می‌توانند فیتنس در آب را امتحان کنند.' },
      { id: '7', prompt: 'Frau Meier, Sie ___ im Verein trainieren.', answer: 'könnten', translationFa: 'خانم مایر، شما می‌توانید در باشگاه تمرین کنید.' },
    ],
  },

  // ── Exercise 3: Konjunktiv II: sollen — fill-blank ────────────────
  {
    id: 'a2-7-3-konjunktiv-sollen',
    title: 'Konjunktiv II: sollen',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 7,
    instructionFa: 'فرم درست sollte/solltest/sollten/solltet را بنویسید.',
    instructionDe: 'Ergänzen Sie die richtige Form von sollen.',
    explanationFa: 'sollten برای نصیحت و توصیه است و از müssen نرم‌تر است.',
    items: [
      { id: '1', prompt: 'Ich ___ weniger Kaffee trinken.', answer: 'sollte', translationFa: 'بهتر است کمتر قهوه بنوشم.' },
      { id: '2', prompt: 'Du ___ regelmäßig Sport machen.', answer: 'solltest', translationFa: 'بهتر است به‌طور منظم ورزش کنی.' },
      { id: '3', prompt: 'Er ___ nicht so spät essen.', answer: 'sollte', translationFa: 'او بهتر است این‌قدر دیر غذا نخورد.' },
      { id: '4', prompt: 'Wir ___ mehr Wasser trinken.', answer: 'sollten', translationFa: 'بهتر است آب بیشتری بنوشیم.' },
      { id: '5', prompt: 'Ihr ___ euch vor dem Spiel ausruhen.', answer: 'solltet', translationFa: 'بهتر است قبل از بازی استراحت کنید.' },
      { id: '6', prompt: 'Sie ___ auf Ihre Gesundheit achten.', answer: 'sollten', translationFa: 'بهتر است به سلامتی‌تان توجه کنید.' },
      { id: '7', prompt: 'Michelle ___ noch nicht trainieren.', answer: 'sollte', translationFa: 'بهتر است میشل هنوز تمرین نکند.' },
    ],
  },

  // ── Exercise 4: könntest oder solltest? — multiple-choice ─────────
  {
    id: 'a2-7-4-koenntest-oder-solltest',
    title: 'könntest oder solltest?',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 7,
    instructionFa: 'گزینه‌ی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie könntest oder solltest.',
    explanationFa: 'könntest بیشتر یک پیشنهاد است؛ solltest نصیحت جدی‌تری است.',
    items: [
      { id: '1', question: 'Ich bin oft müde. Du ___ früher schlafen gehen.', options: ['solltest', 'könntest'], correctIndex: 0, explanationFa: 'موضوع سلامتی مهم است → نصیحت جدی → solltest' },
      { id: '2', question: 'Ich möchte eine neue Sportart ausprobieren. Du ___ Yoga machen.', options: ['solltest', 'könntest'], correctIndex: 1, explanationFa: 'این فقط یک پیشنهاد است → könntest' },
      { id: '3', question: 'Mein Rücken tut weh. Du ___ zum Arzt gehen.', options: ['solltest', 'könntest'], correctIndex: 0, explanationFa: 'درد جسمی، نصیحت جدی → solltest' },
      { id: '4', question: 'Ich möchte draußen trainieren. Du ___ joggen gehen.', options: ['solltest', 'könntest'], correctIndex: 1, explanationFa: 'پیشنهاد عادی → könntest' },
      { id: '5', question: 'Ich habe starke Halsschmerzen. Du ___ dich ausruhen und viel trinken.', options: ['solltest', 'könntest'], correctIndex: 0, explanationFa: 'مشکل سلامتی جدی‌تر → solltest' },
    ],
  },

  // ── Exercise 5: zwischen ... und ... — fill-blank (word bank) ────
  {
    id: 'a2-7-5-zwischen-und',
    title: 'zwischen ... und ...',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 7,
    instructionFa: 'جمله‌ها را با zwischen کامل کنید — کلمه را بکشید یا روی آن کلیک کنید.',
    instructionDe: 'Ergänzen Sie die Sätze mit zwischen.',
    wordBank: ['zwischen'],
    explanationFa: 'zwischen … und … برای بیان بازه‌ی زمانی استفاده می‌شود.',
    items: [
      { id: '1', prompt: 'Ich stehe ___ sechs und halb sieben auf.', answer: 'zwischen', translationFa: 'بین ساعت شش و شش‌ونیم بیدار می‌شوم.' },
      { id: '2', prompt: 'Wir trainieren ___ 18.00 und 19.00 Uhr.', answer: 'zwischen', translationFa: 'بین ساعت ۱۸ و ۱۹ تمرین می‌کنیم.' },
      { id: '3', prompt: 'Die Kinder kommen ___ Viertel vor vier und vier Uhr.', answer: 'zwischen', translationFa: 'بچه‌ها بین ساعت چهار ربع‌کم و چهار می‌آیند.' },
      { id: '4', prompt: 'Ich mache Mittagspause ___ 12.00 und 13.00 Uhr.', answer: 'zwischen', translationFa: 'بین ساعت ۱۲ و ۱۳ استراحت ظهر دارم.' },
      { id: '5', prompt: 'Der Kurs beginnt ___ halb neun und neun Uhr.', answer: 'zwischen', translationFa: 'کلاس بین ساعت هشت‌ونیم و نه شروع می‌شود.' },
    ],
  },

  // ── Exercise 6: Ratschläge geben — dialogue ───────────────────────
  {
    id: 'a2-7-6-ratschlaege-geben',
    title: 'Ratschläge geben',
    type: 'dialogue',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 7,
    instructionFa: 'برای هر مشکل، با یکی از این ساختارها یک نصیحت بسازید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Bilden Sie für jedes Problem einen Ratschlag.',
    pattern: [
      'Du solltest …',
      'Du könntest …',
      'An deiner Stelle würde ich …',
      'Mach doch …',
      'Wie wäre es mit …?',
    ],
    explanationFa: 'برای هر مشکل می‌توان از چند ساختار مختلف نصیحت استفاده کرد.',
    items: [
      { id: '1', promptFa: 'Ich bin immer müde.', sampleAnswer: 'Du solltest früher schlafen gehen.' },
      { id: '2', promptFa: 'Ich möchte fünf Kilo abnehmen.', sampleAnswer: 'Du könntest regelmäßig joggen gehen.' },
      { id: '3', promptFa: 'Ich bin nervös und kann nicht schlafen.', sampleAnswer: 'An deiner Stelle würde ich weniger Kaffee trinken.' },
      { id: '4', promptFa: 'Ich habe keine Zeit für Sport.', sampleAnswer: 'Mach doch morgens zehn Minuten Gymnastik.' },
      { id: '5', promptFa: 'Ich sitze den ganzen Tag im Büro.', sampleAnswer: 'Du solltest in der Mittagspause spazieren gehen.' },
      { id: '6', promptFa: 'Ich möchte Sport machen, aber nicht allein.', sampleAnswer: 'Wie wäre es mit einer Laufgruppe?' },
    ],
  },

  // ── Exercise 7: Sätze mit sollte und könnte ordnen — sentence-order
  {
    id: 'a2-7-7-saetze-ordnen',
    title: 'Sätze mit sollte und könnte ordnen',
    type: 'sentence-order',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 7,
    instructionFa: 'کلمات را به ترتیب درست بکشید یا روی آن‌ها کلیک کنید تا جمله‌ی کامل بسازید.',
    instructionDe: 'Bilden Sie mit den Wörtern einen vollständigen Satz.',
    explanationFa: 'در جمله‌های خبری فعل دوم می‌آید؛ در جمله‌های پرسشی بدون کلمه‌ی پرسشی، فعل اول می‌آید.',
    items: [
      {
        id: '1',
        words: ['solltest', 'Du', 'regelmäßig', 'Sport machen', '.'],
        correctOrder: ['Du', 'solltest', 'regelmäßig', 'Sport machen', '.'],
        translationFa: 'بهتر است به‌طور منظم ورزش کنی.',
      },
      {
        id: '2',
        words: ['könnten', 'Wir', 'montags', 'joggen gehen', '.'],
        correctOrder: ['Wir', 'könnten', 'montags', 'joggen gehen', '.'],
        translationFa: 'می‌توانیم دوشنبه‌ها برویم بدویم.',
      },
      {
        id: '3',
        words: ['deiner Stelle', 'würde', 'ich', 'weniger Kaffee trinken', '.', 'An'],
        correctOrder: ['An', 'deiner Stelle', 'würde', 'ich', 'weniger Kaffee trinken', '.'],
        translationFa: 'اگر جای تو بودم، کمتر قهوه می‌خوردم.',
      },
      {
        id: '4',
        words: ['wäre', 'es', 'mit Aqua-Fitness', '?', 'Wie'],
        correctOrder: ['Wie', 'wäre', 'es', 'mit Aqua-Fitness', '?'],
        translationFa: 'نظرت درباره‌ی فیتنس در آب چیه؟',
      },
      {
        id: '5',
        words: ['sollte', 'Er', 'abends', 'keine Nudeln essen', '.'],
        correctOrder: ['Er', 'sollte', 'abends', 'keine Nudeln essen', '.'],
        translationFa: 'بهتر است او شب‌ها پاستا نخورد.',
      },
      {
        id: '6',
        words: ['könntet', 'Ihr', 'freitags', 'zum Lauftraining kommen', '.'],
        correctOrder: ['Ihr', 'könntet', 'freitags', 'zum Lauftraining kommen', '.'],
        translationFa: 'می‌توانید جمعه‌ها به تمرین دو بیایید.',
      },
    ],
  },

  // ── Exercise 8: Um Rat bitten — multiple-choice ───────────────────
  {
    id: 'a2-7-8-um-rat-bitten',
    title: 'Um Rat bitten',
    type: 'multiple-choice',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 7,
    instructionFa: 'برای هر جواب، سؤال مناسب را انتخاب کنید.',
    instructionDe: 'Wählen Sie die passende Frage.',
    explanationFa: 'این عبارت‌ها برای درخواست راهنمایی و توصیه به‌کار می‌روند.',
    items: [
      { id: '1', question: 'Du könntest Yoga machen.', options: ['Was würdest du mir empfehlen?', 'Wo ist die Post?', 'Was kostet das?'], correctIndex: 0, explanationFa: 'Was würdest du mir empfehlen؟ یعنی تو چه پیشنهادی به من می‌کنی؟' },
      { id: '2', question: 'Ja, du solltest mehr schlafen.', options: ['Hast du einen Tipp für mich?', 'Wie alt bist du?', 'Wann fährt der Zug?'], correctIndex: 0, explanationFa: 'Hast du einen Tipp für mich؟ یعنی برای من یک پیشنهاد داری؟' },
      { id: '3', question: 'Aqua-Fitness passt gut zu dir.', options: ['Welche Sportart passt zu mir?', 'Was isst du gern?', 'Wo wohnst du?'], correctIndex: 0, explanationFa: 'Welche Sportart passt zu mir؟ یعنی چه ورزشی به من می‌خورد؟' },
      { id: '4', question: 'An deiner Stelle würde ich weniger Kaffee trinken.', options: ['Was würdest du an meiner Stelle machen?', 'Wie heißt der Trainer?', 'Wo ist das Kino?'], correctIndex: 0, explanationFa: 'Was würdest du an meiner Stelle machen؟ یعنی اگر جای من بودی چه کار می‌کردی؟' },
    ],
  },

  // ── Exercise 9: ch wie ich oder ach? — multiple-choice ────────────
  {
    id: 'a2-7-9-aussprache-ch',
    title: 'ch wie ich oder ach?',
    type: 'multiple-choice',
    skill: 'pronunciation',
    level: 'A2.1',
    lessonId: 7,
    instructionFa: 'مشخص کنید صدای ch در این کلمه مثل کدام است.',
    instructionDe: 'Wie wird "ch" in diesem Wort ausgesprochen?',
    explanationFa: 'بعد از a, o, u, au صدای ch مثل ach است؛ بعد از e, i, ä, ö, ü, ei, eu/äu صدای ch مثل ich است.',
    items: [
      { id: '1', question: 'ich', options: ['مثل ach', 'مثل ich'], correctIndex: 1, explanationFa: 'بعد از i، صدای ch مثل ich است.' },
      { id: '2', question: 'ach', options: ['مثل ach', 'مثل ich'], correctIndex: 0, explanationFa: 'بعد از a، صدای ch مثل ach است.' },
      { id: '3', question: 'auch', options: ['مثل ach', 'مثل ich'], correctIndex: 0, explanationFa: 'بعد از au، صدای ch مثل ach است.' },
      { id: '4', question: 'euch', options: ['مثل ach', 'مثل ich'], correctIndex: 1, explanationFa: 'بعد از eu، صدای ch مثل ich است.' },
      { id: '5', question: 'mach', options: ['مثل ach', 'مثل ich'], correctIndex: 0, explanationFa: 'بعد از a، صدای ch مثل ach است.' },
      { id: '6', question: 'mich', options: ['مثل ach', 'مثل ich'], correctIndex: 1, explanationFa: 'بعد از i، صدای ch مثل ich است.' },
      { id: '7', question: 'doch', options: ['مثل ach', 'مثل ich'], correctIndex: 0, explanationFa: 'بعد از o، صدای ch مثل ach است.' },
      { id: '8', question: 'dich', options: ['مثل ach', 'مثل ich'], correctIndex: 1, explanationFa: 'بعد از i، صدای ch مثل ich است.' },
      { id: '9', question: 'möchte', options: ['مثل ach', 'مثل ich'], correctIndex: 1, explanationFa: 'بعد از ö، صدای ch مثل ich است.' },
      { id: '10', question: 'nachts', options: ['مثل ach', 'مثل ich'], correctIndex: 0, explanationFa: 'بعد از a، صدای ch مثل ach است.' },
      { id: '11', question: 'nichts', options: ['مثل ach', 'مثل ich'], correctIndex: 1, explanationFa: 'بعد از i، صدای ch مثل ich است.' },
      { id: '12', question: 'Woche', options: ['مثل ach', 'مثل ich'], correctIndex: 0, explanationFa: 'بعد از o، صدای ch مثل ach است.' },
    ],
  },

  // ── Exercise 10: Mein Sportprofil — dialogue/writing project ──────
  {
    id: 'a2-7-10-mein-sportprofil',
    title: 'Mein Sportprofil',
    type: 'dialogue',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 7,
    instructionFa: 'با استفاده از سؤال‌های راهنما، درباره‌ی وضعیت ورزشی و سلامتی خودتان یک متن کوتاه بنویسید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Beschreiben Sie Ihr Sportprofil mit Hilfe der Leitfragen.',
    pattern: [
      'Sind Sie fit?',
      'Machen Sie gern Sport?',
      'Trainieren Sie lieber allein oder mit anderen?',
      'Sind Sie gern draußen an der frischen Luft?',
      'Welche Sportarten mögen Sie?',
      'Welche Probleme haben Sie?',
      'Welche Sportart passt zu Ihnen?',
    ],
    explanationFa: 'برای این متن از فعل‌های sollte/könnte و واژگان ورزش استفاده کنید.',
    items: [
      {
        id: '1',
        promptFa: 'فرد علاقه‌مند به دویدن گروهی',
        sampleAnswer:
          'Ich bin nicht besonders fit, aber ich möchte mehr für meine Gesundheit tun. Ich mache nicht gern allein Sport. Am liebsten bin ich draußen an der frischen Luft. Joggen finde ich interessant, aber allein macht es mir keinen Spaß. Deshalb würde ich gern mit einer Laufgruppe trainieren. Ich sollte auch auf meine Ernährung achten, denn ich möchte drei Kilo abnehmen.',
      },
      {
        id: '2',
        promptFa: 'فرد علاقه‌مند به ورزش آرام',
        sampleAnswer:
          'Ich bin ziemlich fit, aber ich mag keine harten Sportarten. Ich trainiere lieber allein. Yoga und Aqua-Fitness gefallen mir sehr gut, weil sie ruhig und gut für meinen Rücken sind. Ich sollte regelmäßiger trainieren, denn momentan mache ich nur einmal pro Woche Sport.',
      },
      {
        id: '3',
        promptFa: 'فرد علاقه‌مند به ورزش گروهی',
        sampleAnswer:
          'Ich bin sehr fit und mache gern Mannschaftssport. Ich trainiere am liebsten mit anderen, weil es mehr Spaß macht. Handball und Rudern gefallen mir besonders gut. Ich sollte vielleicht weniger Wettkampf machen und mehr auf meinen Schlaf achten.',
      },
    ],
  },

  // ── Exercise 11: Mini-Test: Lektion 7 A2.1 — multiple-choice ──────
  {
    id: 'a2-7-11-mini-test',
    title: 'Mini-Test: Lektion 7 A2.1',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 7,
    instructionFa: 'گزینه‌ی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie die richtige Antwort.',
    explanationFa: 'این تمرین جمع‌بندی واژگان، گرامر و Kommunikation درس ۷ است.',
    items: [
      { id: '1', question: 'Du ___ mehr Sport machen.', options: ['solltest', 'solltet', 'sollen'], correctIndex: 0, explanationFa: 'برای du، فرم درست solltest است.' },
      { id: '2', question: 'Wir ___ montags joggen gehen.', options: ['könnte', 'könnten', 'könntest'], correctIndex: 1, explanationFa: 'برای wir، فرم درست könnten است.' },
      { id: '3', question: '«به جای تو بودم …» به آلمانی؟', options: ['An deiner Stelle würde ich …', 'In deine Platz mache ich …', 'Für dich bin ich …'], correctIndex: 0, explanationFa: 'An deiner Stelle würde ich یعنی به جای تو بودم.' },
      { id: '4', question: '«لاغر شدن» به آلمانی؟', options: ['abnehmen', 'wiegen', 'öffnen'], correctIndex: 0, explanationFa: 'abnehmen یعنی لاغر شدن.' },
      { id: '5', question: '«وزن داشتن» به آلمانی؟', options: ['wiegen', 'leihen', 'empfehlen'], correctIndex: 0, explanationFa: 'wiegen یعنی وزن داشتن.' },
      { id: '6', question: 'Ich trainiere ___.', options: ['regelmäßig', 'Regel', 'Regelung'], correctIndex: 0, explanationFa: 'regelmäßig یعنی منظم (قید).' },
      { id: '7', question: 'Wir treffen uns ___ sieben und Viertel nach sieben.', options: ['zwischen', 'seit', 'über'], correctIndex: 0, explanationFa: 'برای بازه‌ی زمانی → zwischen' },
      { id: '8', question: 'بعد از au صدای ch مثل کدام است؟', options: ['ach', 'ich'], correctIndex: 0, explanationFa: 'بعد از au، صدای ch مثل ach است.' },
    ],
  },
]
