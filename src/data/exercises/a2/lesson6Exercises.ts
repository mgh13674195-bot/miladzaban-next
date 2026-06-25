import { Exercise } from '@/types/exercise'

/**
 * A2.1 — Lektion 6: Meine Lieblingsveranstaltung (Veranstaltungen,
 * temporale Präpositionen, Vorschläge machen, sich verabreden)
 * Independent exercises written for this site — not copied from any
 * coursebook/workbook layout or wording.
 */
export const lesson6Exercises: Exercise[] = [

  // ── Exercise 1: Veranstaltungen — multiple-choice ─────────────────
  {
    id: 'a2-6-1-veranstaltungen-wortschatz',
    title: 'Veranstaltungen: واژگان رویدادها',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 6,
    instructionFa: 'با توجه به توضیح فارسی، کلمه‌ی آلمانی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie das richtige Wort.',
    explanationFa: 'این کلمات از مهم‌ترین واژگان رویدادها و برنامه‌های فرهنگی هستند.',
    items: [
      { id: '1', question: 'جایی که بازیگران روی صحنه اجرا می‌کنند', options: ['das Theaterstück', 'die Diskussion', 'die Ermäßigung'], correctIndex: 0, explanationFa: 'das Theaterstück یعنی نمایش تئاتر.' },
      { id: '2', question: 'برنامه‌ای که یک نفر درباره‌ی موضوعی صحبت می‌کند', options: ['der Vortrag', 'das Kostüm', 'die Bühne'], correctIndex: 0, explanationFa: 'der Vortrag یعنی سخنرانی.' },
      { id: '3', question: 'تخفیف برای دانشجو یا گروه خاص', options: ['die Ermäßigung', 'der Eintritt', 'der Künstler'], correctIndex: 0, explanationFa: 'die Ermäßigung یعنی تخفیف.' },
      { id: '4', question: 'محلی که اجرا روی آن انجام می‌شود', options: ['die Bühne', 'die Kinokarte', 'das Feuer'], correctIndex: 0, explanationFa: 'die Bühne یعنی صحنه.' },
      { id: '5', question: 'برنامه‌ی بزرگ با موسیقی، غذا یا نمایش‌های مختلف', options: ['das Festival', 'der Vortrag', 'die Eintrittskarte'], correctIndex: 0, explanationFa: 'das Festival یعنی جشنواره.' },
      { id: '6', question: 'گفت‌وگو و بحث درباره‌ی یک موضوع', options: ['die Diskussion', 'das Kostüm', 'der Star'], correctIndex: 0, explanationFa: 'die Diskussion یعنی بحث و گفت‌وگو.' },
    ],
  },

  // ── Exercise 2: seit + Dativ — multiple-choice ────────────────────
  {
    id: 'a2-6-2-seit-dativ',
    title: 'seit + Dativ',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 6,
    instructionFa: 'فرم درست بعد از seit را انتخاب کنید.',
    instructionDe: 'Wählen Sie die richtige Form nach seit.',
    explanationFa: 'seit برای شروع در گذشته تا الان است و همیشه با Dativ می‌آید.',
    items: [
      { id: '1', question: 'Ich lerne seit ___ Deutsch.', options: ['einem Jahr', 'ein Jahr'], correctIndex: 0, explanationFa: 'Dativ مذکر/خنثی → einem Jahr' },
      { id: '2', question: 'Wir wohnen seit ___ in Deutschland.', options: ['2021', 'einen Monat'], correctIndex: 0, explanationFa: 'سال بدون Artikel می‌آید → seit 2021' },
      { id: '3', question: 'Sie arbeitet seit ___ in dieser Firma.', options: ['drei Monaten', 'drei Monate'], correctIndex: 0, explanationFa: 'Dativ جمع → drei Monaten' },
      { id: '4', question: 'Ich kenne ihn seit ___.', options: ['einer Woche', 'eine Woche'], correctIndex: 0, explanationFa: 'Dativ مؤنث → einer Woche' },
      { id: '5', question: 'Mein Bruder spielt seit ___ Gitarre.', options: ['zwei Jahren', 'zwei Jahre'], correctIndex: 0, explanationFa: 'Dativ جمع → zwei Jahren' },
    ],
  },

  // ── Exercise 3: über + Akkusativ — multiple-choice ────────────────
  {
    id: 'a2-6-3-ueber-akkusativ',
    title: 'über + Akkusativ',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 6,
    instructionFa: 'فرم درست بعد از über را انتخاب کنید.',
    instructionDe: 'Wählen Sie die richtige Form nach über.',
    explanationFa: 'über برای مدت زمان تقریبی (بیش از …) است و با Akkusativ می‌آید.',
    items: [
      { id: '1', question: 'Das Festival dauert über ___.', options: ['eine Woche', 'einer Woche'], correctIndex: 0, explanationFa: 'Akkusativ مؤنث → eine Woche' },
      { id: '2', question: 'Ich war über ___ in Wien.', options: ['einen Monat', 'einem Monat'], correctIndex: 0, explanationFa: 'Akkusativ مذکر → einen Monat' },
      { id: '3', question: 'Die Ausstellung läuft über ___.', options: ['ein Jahr', 'einem Jahr'], correctIndex: 0, explanationFa: 'Akkusativ خنثی → ein Jahr' },
      { id: '4', question: 'Wir haben über ___ gewartet.', options: ['eine Stunde', 'einer Stunde'], correctIndex: 0, explanationFa: 'Akkusativ مؤنث → eine Stunde' },
      { id: '5', question: 'Er hat über ___ in München gelebt.', options: ['zehn Jahre', 'zehn Jahren'], correctIndex: 0, explanationFa: 'Akkusativ جمع بدون تغییر → zehn Jahre' },
    ],
  },

  // ── Exercise 4: von ... bis oder von ... an? — fill-blank ─────────
  {
    id: 'a2-6-4-von-bis-von-an',
    title: 'von ... bis oder von ... an?',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 6,
    instructionFa: 'جمله‌ها را با ساختار مناسب کامل کنید.',
    instructionDe: 'Ergänzen Sie die Sätze mit der passenden Struktur.',
    explanationFa: 'von … bis برای بازه‌ی زمانی محدود است؛ von … an یعنی از زمانی به بعد، بدون پایان مشخص.',
    items: [
      { id: '1', prompt: 'Die Ausstellung ist ___ 1. Mai ___ 30. Juni geöffnet.', answer: 'vom / bis zum', translationFa: 'نمایشگاه از ۱ مه تا ۳۰ ژوئن باز است.' },
      { id: '2', prompt: '___ Montag ___ beginnt der Kurs.', answer: 'Von / an', translationFa: 'از دوشنبه به بعد کلاس شروع می‌شود.' },
      { id: '3', prompt: 'Das Festival findet ___ Freitag ___ Sonntag statt.', answer: 'von / bis', translationFa: 'جشنواره از جمعه تا یکشنبه برگزار می‌شود.' },
      { id: '4', prompt: '___ nächster Woche ___ arbeite ich in Berlin.', answer: 'Von / an', translationFa: 'از هفته‌ی آینده به بعد در برلین کار می‌کنم.' },
      { id: '5', prompt: 'Der Rabatt gilt ___ heute ___ Ende des Monats.', answer: 'von / bis', translationFa: 'تخفیف از امروز تا پایان ماه معتبر است.' },
    ],
  },

  // ── Exercise 5: vor, in oder nach? — fill-blank (word bank) ──────
  {
    id: 'a2-6-5-vor-in-nach',
    title: 'vor, in oder nach?',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 6,
    instructionFa: 'جمله‌ها را با vor، in یا nach کامل کنید — کلمات را بکشید یا روی آن‌ها کلیک کنید.',
    instructionDe: 'Ergänzen Sie die Sätze mit vor, in oder nach.',
    wordBank: ['Vor', 'In', 'Nach'],
    explanationFa: 'vor برای گذشته، in برای آینده و nach برای بعد از یک اتفاق به‌کار می‌رود.',
    items: [
      { id: '1', prompt: '___ drei Jahren war ich zum ersten Mal in Wien.', answer: 'Vor', translationFa: 'سه سال پیش برای اولین بار در وین بودم.' },
      { id: '2', prompt: '___ zwei Wochen beginnt das Festival.', answer: 'In', translationFa: 'دو هفته دیگر جشنواره شروع می‌شود.' },
      { id: '3', prompt: '___ dem Vortrag gibt es eine Diskussion.', answer: 'Nach', translationFa: 'بعد از سخنرانی یک بحث برگزار می‌شود.' },
      { id: '4', prompt: '___ einem Monat fahre ich nach München.', answer: 'In', translationFa: 'یک ماه دیگر به مونیخ می‌روم.' },
      { id: '5', prompt: '___ dem Konzert treffen wir die Künstler.', answer: 'Nach', translationFa: 'بعد از کنسرت هنرمندان را می‌بینیم.' },
      { id: '6', prompt: '___ zehn Jahren habe ich Deutsch gelernt.', answer: 'Vor', translationFa: 'ده سال پیش آلمانی یاد گرفتم.' },
    ],
  },

  // ── Exercise 6: Einen Vorschlag machen — fill-blank (word bank) ──
  {
    id: 'a2-6-6-vorschlag-machen',
    title: 'Einen Vorschlag machen',
    type: 'fill-blank',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 6,
    instructionFa: 'جمله‌های پیشنهاد دادن را کامل کنید.',
    instructionDe: 'Ergänzen Sie die Vorschläge.',
    wordBank: ['mitkommen', 'hältst', 'wäre', 'uns', 'vorschlagen', 'Wollen'],
    explanationFa: 'این عبارت‌ها برای پیشنهاد دادن یک برنامه یا فعالیت به‌کار می‌روند.',
    items: [
      { id: '1', prompt: 'Möchtest du vielleicht ___?', answer: 'mitkommen', translationFa: 'دوست داری شاید همراه بیایی؟' },
      { id: '2', prompt: 'Was ___ du davon?', answer: 'hältst', translationFa: 'نظرت چیه؟' },
      { id: '3', prompt: 'Wie ___ es mit einem Konzert?', answer: 'wäre', translationFa: 'نظرت درباره‌ی یک کنسرت چیه؟' },
      { id: '4', prompt: 'Lass ___ ins Kino gehen.', answer: 'uns', translationFa: 'بیا به سینما برویم.' },
      { id: '5', prompt: 'Darf ich etwas ___?', answer: 'vorschlagen', translationFa: 'می‌توانم چیزی پیشنهاد بدهم؟' },
      { id: '6', prompt: '___ wir eine Veranstaltung besuchen?', answer: 'Wollen', translationFa: 'برویم یک رویداد را ببینیم؟' },
    ],
  },

  // ── Exercise 7: Sich verabreden — fill-blank (word bank) ─────────
  {
    id: 'a2-6-7-sich-verabreden',
    title: 'Sich verabreden',
    type: 'fill-blank',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 6,
    instructionFa: 'دیالوگ قرار گذاشتن را با کلمات مناسب کامل کنید.',
    instructionDe: 'Ergänzen Sie den Dialog zum Verabreden.',
    wordBank: ['treffen', 'um', 'Vor', 'ausmachen', 'passt', 'direkt'],
    explanationFa: 'این دیالوگ نمونه‌ای از قرار گذاشتن برای یک رویداد است.',
    items: [
      { id: '1', prompt: 'Gute Idee. Wann ___ wir uns?', answer: 'treffen', translationFa: 'ایده‌ی خوبی است. کی همدیگر را می‌بینیم؟' },
      { id: '2', prompt: 'Vielleicht ___ 18:30 Uhr?', answer: 'um', translationFa: 'شاید ساعت ۱۸:۳۰؟' },
      { id: '3', prompt: 'Das ___ gut. Wo treffen wir uns?', answer: 'passt', translationFa: 'این خوب جور می‌شود. کجا همدیگر را می‌بینیم؟' },
      { id: '4', prompt: '___ dem Eingang.', answer: 'Vor', translationFa: 'کنار ورودی.' },
      { id: '5', prompt: 'Okay. Dann lass uns das so ___.', answer: 'ausmachen', translationFa: 'باشه. پس بیا همین‌طور قرار بگذاریم.' },
      { id: '6', prompt: 'Super. Ich komme ___ von der Arbeit.', answer: 'direkt', translationFa: 'عالی. مستقیم از کار می‌آیم.' },
    ],
  },

  // ── Exercise 8: Sätze ordnen — sentence-order ─────────────────────
  {
    id: 'a2-6-8-saetze-ordnen',
    title: 'Sätze ordnen: Vorschläge und Zeit',
    type: 'sentence-order',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 6,
    instructionFa: 'کلمات را به ترتیب درست بکشید یا روی آن‌ها کلیک کنید تا جمله‌ی کامل بسازید.',
    instructionDe: 'Bilden Sie mit den Wörtern einen vollständigen Satz.',
    explanationFa: 'در جمله‌های پرسشی بدون کلمه‌ی پرسشی، فعل اول جمله می‌آید؛ در جمله‌های خبری فعل دوم می‌آید.',
    items: [
      {
        id: '1',
        words: ['vielleicht', 'Möchtest', 'mitkommen', '?', 'du'],
        correctOrder: ['Möchtest', 'du', 'vielleicht', 'mitkommen', '?'],
        translationFa: 'دوست داری شاید همراه بیایی؟',
      },
      {
        id: '2',
        words: ['Was', 'du', 'davon', '?', 'hältst'],
        correctOrder: ['Was', 'hältst', 'du', 'davon', '?'],
        translationFa: 'نظرت چیه؟',
      },
      {
        id: '3',
        words: ['uns', 'dem Kino', 'treffen', '.', 'vor', 'Wir'],
        correctOrder: ['Wir', 'treffen', 'uns', 'vor', 'dem Kino', '.'],
        translationFa: 'کنار سینما همدیگر را می‌بینیم.',
      },
      {
        id: '4',
        words: ['etwas', 'ich', 'vorschlagen', '?', 'Darf'],
        correctOrder: ['Darf', 'ich', 'etwas', 'vorschlagen', '?'],
        translationFa: 'می‌توانم چیزی پیشنهاد بدهم؟' ,
      },
      {
        id: '5',
        words: ['Das Festival', 'im Sommer', 'statt', '.', 'findet'],
        correctOrder: ['Das Festival', 'findet', 'im Sommer', 'statt', '.'],
        translationFa: 'جشنواره در تابستان برگزار می‌شود.',
      },
      {
        id: '6',
        words: ['einem Jahr', 'Deutsch', 'lerne', '.', 'seit', 'Ich'],
        correctOrder: ['Ich', 'lerne', 'seit', 'einem Jahr', 'Deutsch', '.'],
        translationFa: 'یک سال است آلمانی یاد می‌گیرم.',
      },
    ],
  },

  // ── Exercise 9: f, v und w richtig aussprechen — multiple-choice ─
  {
    id: 'a2-6-9-aussprache-f-v-w',
    title: 'f, v und w richtig aussprechen',
    type: 'multiple-choice',
    skill: 'pronunciation',
    level: 'A2.1',
    lessonId: 6,
    instructionFa: 'مشخص کنید حرف v یا w در این کلمه چطور تلفظ می‌شود.',
    instructionDe: 'Wie wird der Buchstabe ausgesprochen?',
    explanationFa: 'در بسیاری از کلمات آلمانی، v مثل f تلفظ می‌شود (Vater, Veranstaltung). در کلمات خارجی مثل Video و Event، v بیشتر شبیه v انگلیسی تلفظ می‌شود. حرف w در آلمانی همیشه شبیه v انگلیسی است (Wasser, Wien).',
    items: [
      { id: '1', question: 'Vortrag', options: ['مثل f', 'مثل v انگلیسی'], correctIndex: 0, explanationFa: 'در Vortrag حرف V مثل f تلفظ می‌شود.' },
      { id: '2', question: 'Veranstaltung', options: ['مثل f', 'مثل v انگلیسی'], correctIndex: 0, explanationFa: 'در Veranstaltung حرف V مثل f تلفظ می‌شود.' },
      { id: '3', question: 'Vater', options: ['مثل f', 'مثل v انگلیسی'], correctIndex: 0, explanationFa: 'در Vater حرف V مثل f تلفظ می‌شود.' },
      { id: '4', question: 'Video', options: ['مثل f', 'مثل v انگلیسی'], correctIndex: 1, explanationFa: 'در کلمات خارجی مثل Video، V شبیه v انگلیسی تلفظ می‌شود.' },
      { id: '5', question: 'Event', options: ['مثل f', 'مثل v انگلیسی'], correctIndex: 1, explanationFa: 'در کلمات خارجی مثل Event، V شبیه v انگلیسی تلفظ می‌شود.' },
      { id: '6', question: 'Woche', options: ['مثل f', 'مثل v انگلیسی'], correctIndex: 1, explanationFa: 'حرف W در آلمانی همیشه شبیه v انگلیسی تلفظ می‌شود.' },
      { id: '7', question: 'Wien', options: ['مثل f', 'مثل v انگلیسی'], correctIndex: 1, explanationFa: 'حرف W در آلمانی همیشه شبیه v انگلیسی تلفظ می‌شود.' },
      { id: '8', question: 'weltweit', options: ['مثل f', 'مثل v انگلیسی'], correctIndex: 1, explanationFa: 'حرف W در آلمانی همیشه شبیه v انگلیسی تلفظ می‌شود.' },
      { id: '9', question: 'Wissenschaft', options: ['مثل f', 'مثل v انگلیسی'], correctIndex: 1, explanationFa: 'حرف W در آلمانی همیشه شبیه v انگلیسی تلفظ می‌شود.' },
    ],
  },

  // ── Exercise 10: Meine Lieblingsveranstaltung — dialogue/writing ─
  {
    id: 'a2-6-10-lieblingsveranstaltung',
    title: 'Meine Lieblingsveranstaltung',
    type: 'dialogue',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 6,
    instructionFa: 'با استفاده از سؤال‌های راهنما، درباره‌ی برنامه‌ی مورد علاقه‌ی خودتان یک متن کوتاه بنویسید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Beschreiben Sie Ihre Lieblingsveranstaltung mit Hilfe der Leitfragen.',
    pattern: [
      'Wie heißt die Veranstaltung?',
      'Was für eine Veranstaltung ist das?',
      'Wo und wann findet sie statt?',
      'Seit wann gibt es sie?',
      'Was kann man dort erleben?',
      'Was gefällt Ihnen besonders gut?',
    ],
    explanationFa: 'برای این متن از seit (برای مدت وجود برنامه)، فعل‌های erleben/gefallen و واژگان رویدادها استفاده کنید.',
    items: [
      {
        id: '1',
        promptFa: 'جشنواره‌ی تابستانی شهر',
        sampleAnswer:
          'Meine Lieblingsveranstaltung ist das Sommerfestival in Mainz. Es findet jedes Jahr im Juli im Stadtpark statt. Das Festival gibt es seit über 20 Jahren. Dort kann man Konzerte hören, verschiedene Speisen probieren und eine Feuer-Show sehen. Besonders gut gefallen mir die Musik und die Atmosphäre.',
      },
      {
        id: '2',
        promptFa: 'یک کنسرت موسیقی محبوب',
        sampleAnswer:
          'Meine Lieblingsveranstaltung ist das Jazzkonzert im Kulturhaus. Es findet jeden Herbst statt. Es gibt das Konzert seit zehn Jahren. Dort kann man bekannte Künstler live hören. Besonders gut gefällt mir die ruhige Atmosphäre.',
      },
      {
        id: '3',
        promptFa: 'یک نمایشگاه هنری',
        sampleAnswer:
          'Meine Lieblingsveranstaltung ist die Kunstausstellung im Museum. Sie findet jedes Frühjahr statt. Es gibt sie seit fünf Jahren. Dort kann man moderne Kunst sehen und mit Künstlern sprechen. Besonders gut gefällt mir die kreative Atmosphäre.',
      },
    ],
  },

  // ── Exercise 11: Mini-Test: Lektion 6 A2.1 — multiple-choice ─────
  {
    id: 'a2-6-11-mini-test',
    title: 'Mini-Test: Lektion 6 A2.1',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 6,
    instructionFa: 'گزینه‌ی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie die richtige Antwort.',
    explanationFa: 'این تمرین جمع‌بندی واژگان، زمان‌ها، پیشنهاد دادن و قرار گذاشتن درس ۶ است.',
    items: [
      { id: '1', question: '«سخنرانی» به آلمانی؟', options: ['der Vortrag', 'die Bühne', 'die Ermäßigung'], correctIndex: 0, explanationFa: 'der Vortrag یعنی سخنرانی.' },
      { id: '2', question: 'Ich lerne seit ___ Deutsch.', options: ['einem Jahr', 'ein Jahr', 'einen Jahr'], correctIndex: 0, explanationFa: 'بعد از seit، Dativ → einem Jahr' },
      { id: '3', question: 'Das Festival dauert über ___.', options: ['eine Woche', 'einer Woche', 'einem Woche'], correctIndex: 0, explanationFa: 'بعد از über، Akkusativ → eine Woche' },
      { id: '4', question: '«نظرت چیه؟»', options: ['Was hältst du davon?', 'Was kostet das?', 'Wo wohnst du?'], correctIndex: 0, explanationFa: 'Was hältst du davon؟ یعنی نظرت چیه؟' },
      { id: '5', question: '«موافقم»', options: ['Einverstanden.', 'Das ist keine gute Idee.', 'Ich bin dagegen.'], correctIndex: 0, explanationFa: 'Einverstanden یعنی موافقم.' },
      { id: '6', question: 'Wir treffen uns ___ 18 Uhr.', options: ['um', 'am', 'seit'], correctIndex: 0, explanationFa: 'برای ساعت دقیق از um استفاده می‌کنیم.' },
      { id: '7', question: 'Die Ausstellung findet ___ Freitag ___ Sonntag statt.', options: ['von … bis', 'seit … bis', 'über … an'], correctIndex: 0, explanationFa: 'برای بازه‌ی زمانی محدود → von … bis' },
      { id: '8', question: '«دوست داری همراه بیایی؟»', options: ['Möchtest du vielleicht mitkommen?', 'Hast du Eintritt gezahlt?', 'Findet das statt?'], correctIndex: 0, explanationFa: 'Möchtest du vielleicht mitkommen؟ یعنی دوست داری همراه بیایی؟' },
    ],
  },
]
