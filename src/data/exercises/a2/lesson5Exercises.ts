import { Exercise } from '@/types/exercise'

/**
 * A2.1 — Lektion 5: Schaut mal, der schöne Dom! (Stadtbesichtigung,
 * Adjektivdeklination nach bestimmtem Artikel, gemeinsam planen)
 * Independent exercises written for this site — not copied from any
 * coursebook/workbook layout or wording.
 */
export const lesson5Exercises: Exercise[] = [

  // ── Exercise 1: Tourismus-Wortschatz — multiple-choice ────────────
  {
    id: 'a2-5-1-tourismus-wortschatz',
    title: 'Tourismus-Wortschatz',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 5,
    instructionFa: 'با توجه به توضیح فارسی، کلمه‌ی آلمانی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie das richtige Wort.',
    explanationFa: 'این کلمات از مهم‌ترین واژگان گردشگری و گردش در شهر هستند.',
    items: [
      { id: '1', question: 'کلیسای بزرگ و معروف در شهر', options: ['der Dom', 'der Supermarkt', 'die Unterkunft'], correctIndex: 0, explanationFa: 'der Dom یعنی کلیسای بزرگ.' },
      { id: '2', question: 'جاهای دیدنی یک شهر', options: ['die Sehenswürdigkeiten', 'die Ferien', 'die Kamera'], correctIndex: 0, explanationFa: 'die Sehenswürdigkeiten یعنی جاهای دیدنی.' },
      { id: '3', question: 'راهنمای گردشگری، هم شخص و هم کتاب', options: ['der Reiseführer', 'der Club', 'das Trinkgeld'], correctIndex: 0, explanationFa: 'der Reiseführer یعنی راهنمای گردشگری.' },
      { id: '4', question: 'جایی برای خوابیدن در سفر', options: ['die Unterkunft', 'die Nachricht', 'die Mauer'], correctIndex: 0, explanationFa: 'die Unterkunft یعنی محل اقامت.' },
      { id: '5', question: 'قدم زدن و دیدن شهر با برنامه', options: ['der Rundgang', 'der Wunsch', 'die Kamera'], correctIndex: 0, explanationFa: 'der Rundgang یعنی قدم‌زنی شهری با برنامه.' },
      { id: '6', question: 'بازدید گروهی با راهنما', options: ['die Führung', 'die Postkarte', 'der Supermarkt'], correctIndex: 0, explanationFa: 'die Führung یعنی بازدید گروهی با راهنما.' },
    ],
  },

  // ── Exercise 2: Adjektivdeklination der/das/die im Nominativ ─────
  {
    id: 'a2-5-2-adjektiv-nominativ',
    title: 'Adjektivdeklination: der/das/die im Nominativ',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 5,
    instructionFa: 'پایان صفت را کامل کنید.',
    instructionDe: 'Ergänzen Sie die Adjektivendung.',
    explanationFa: 'بعد از der/das/die در مفرد Nominativ صفت معمولاً -e می‌گیرد، اما در Plural با die معمولاً -en می‌آید.',
    items: [
      { id: '1', prompt: 'der berühmt___ Dom', answer: 'berühmte', translationFa: 'کلیسای معروف' },
      { id: '2', prompt: 'das bunt___ Fenster', answer: 'bunte', translationFa: 'پنجره‌ی رنگی' },
      { id: '3', prompt: 'die neu___ Kamera', answer: 'neue', translationFa: 'دوربین جدید' },
      { id: '4', prompt: 'die nett___ Leute', answer: 'netten', translationFa: 'آدم‌های مهربان' },
      { id: '5', prompt: 'der schön___ Platz', answer: 'schöne', translationFa: 'میدان زیبا' },
      { id: '6', prompt: 'das alt___ Rathaus', answer: 'alte', translationFa: 'شهرداری قدیمی' },
      { id: '7', prompt: 'die modern___ Kirche', answer: 'moderne', translationFa: 'کلیسای مدرن' },
      { id: '8', prompt: 'die interessant___ Museen', answer: 'interessanten', translationFa: 'موزه‌های جالب' },
    ],
  },

  // ── Exercise 3: Adjektivdeklination bestimmter Artikel im Akkusativ
  {
    id: 'a2-5-3-adjektiv-akkusativ',
    title: 'Adjektivdeklination: bestimmter Artikel im Akkusativ',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 5,
    instructionFa: 'پایان صفت را کامل کنید.',
    instructionDe: 'Ergänzen Sie die Adjektivendung.',
    explanationFa: 'در Akkusativ مذکر بعد از den صفت -en می‌گیرد؛ Plural هم بعد از die معمولاً -en می‌گیرد. خنثی و مؤنث مثل Nominativ می‌مانند.',
    items: [
      { id: '1', prompt: 'Ich finde den alt___ Dom schön.', answer: 'alten', translationFa: 'کلیسای قدیمی را زیبا می‌دانم.' },
      { id: '2', prompt: 'Wir besichtigen das bekannt___ Museum.', answer: 'bekannte', translationFa: 'ما موزه‌ی معروف را بازدید می‌کنیم.' },
      { id: '3', prompt: 'Ich habe die neu___ Kamera vergessen.', answer: 'neue', translationFa: 'دوربین جدید را فراموش کرده‌ام.' },
      { id: '4', prompt: 'Wir treffen die nett___ Leute im Zentrum.', answer: 'netten', translationFa: 'آدم‌های مهربان را در مرکز شهر می‌بینیم.' },
      { id: '5', prompt: 'Ich mag den klein___ Club.', answer: 'kleinen', translationFa: 'کلاب کوچک را دوست دارم.' },
      { id: '6', prompt: 'Wir sehen das rot___ Rathaus.', answer: 'rote', translationFa: 'شهرداری قرمز را می‌بینیم.' },
      { id: '7', prompt: 'Ich kaufe die teuer___ Postkarten.', answer: 'teuren', translationFa: 'کارت‌پستال‌های گران را می‌خرم.' },
      { id: '8', prompt: 'Ich fotografiere den schön___ Turm.', answer: 'schönen', translationFa: 'از برج زیبا عکس می‌گیرم.' },
    ],
  },

  // ── Exercise 4: Adjektivdeklination im Dativ ──────────────────────
  {
    id: 'a2-5-4-adjektiv-dativ',
    title: 'Adjektivdeklination im Dativ',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 5,
    instructionFa: 'پایان صفت را کامل کنید.',
    instructionDe: 'Ergänzen Sie die Adjektivendung.',
    explanationFa: 'در Dativ بعد از dem/der/den صفت معمولاً -en می‌گیرد.',
    items: [
      { id: '1', prompt: 'mit dem nett___ Reiseführer', answer: 'netten', translationFa: 'با راهنمای مهربان' },
      { id: '2', prompt: 'mit dem bunt___ Prospekt', answer: 'bunten', translationFa: 'با بروشور رنگی' },
      { id: '3', prompt: 'mit der neu___ Kamera', answer: 'neuen', translationFa: 'با دوربین جدید' },
      { id: '4', prompt: 'mit den freundlich___ Touristen', answer: 'freundlichen', translationFa: 'با توریست‌های مهربان' },
      { id: '5', prompt: 'in dem schön___ Hotel', answer: 'schönen', translationFa: 'در هتل زیبا' },
      { id: '6', prompt: 'in der alt___ Kirche', answer: 'alten', translationFa: 'در کلیسای قدیمی' },
      { id: '7', prompt: 'auf dem berühmt___ Platz', answer: 'berühmten', translationFa: 'در میدان معروف' },
      { id: '8', prompt: 'mit den modern___ Fahrrädern', answer: 'modernen', translationFa: 'با دوچرخه‌های مدرن' },
    ],
  },

  // ── Exercise 5: Nominativ, Akkusativ oder Dativ? — multiple-choice
  {
    id: 'a2-5-5-nominativ-akkusativ-dativ',
    title: 'Nominativ, Akkusativ oder Dativ?',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 5,
    instructionFa: 'پایان درست صفت را انتخاب کنید.',
    instructionDe: 'Wählen Sie die richtige Adjektivendung.',
    explanationFa: 'der در Nominativ → -e، den در Akkusativ مذکر → -en، dem/der/den در Dativ → -en، die Plural → -en.',
    items: [
      { id: '1', question: 'Der berühmt___ Dom ist sehr alt.', options: ['berühmte', 'berühmten', 'berühmtes'], correctIndex: 0, explanationFa: 'فاعل جمله، Nominativ → berühmte' },
      { id: '2', question: 'Ich finde den berühmt___ Dom beeindruckend.', options: ['berühmte', 'berühmten', 'berühmtes'], correctIndex: 1, explanationFa: 'مفعول مذکر، Akkusativ → berühmten' },
      { id: '3', question: 'Wir gehen mit dem nett___ Reiseführer durch die Stadt.', options: ['nette', 'netten', 'netter'], correctIndex: 1, explanationFa: 'بعد از mit dem، Dativ → netten' },
      { id: '4', question: 'Das bunt___ Fenster ist wirklich schön.', options: ['bunte', 'buntes', 'bunten'], correctIndex: 0, explanationFa: 'فاعل جمله، Nominativ خنثی → bunte' },
      { id: '5', question: 'Ich fotografiere das bunt___ Fenster.', options: ['bunte', 'buntes', 'bunten'], correctIndex: 0, explanationFa: 'مفعول خنثی، Akkusativ مثل Nominativ → bunte' },
      { id: '6', question: 'Die nett___ Leute helfen uns.', options: ['nette', 'netten', 'netter'], correctIndex: 1, explanationFa: 'جمع با die، Nominativ → netten' },
    ],
  },

  // ── Exercise 6: Postkarte aus der Stadt — fill-blank (word bank) ─
  {
    id: 'a2-5-6-postkarte-stadt',
    title: 'Postkarte aus der Stadt',
    type: 'fill-blank',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 5,
    instructionFa: 'متن کارت‌پستال را با کلمه‌ی مناسب کامل کنید — کلمات را بکشید یا روی آن‌ها کلیک کنید.',
    instructionDe: 'Ergänzen Sie die Postkarte mit dem passenden Wort.',
    wordBank: ['Ferien', 'Dom', 'Führung', 'Reiseführer', 'Sehenswürdigkeiten', 'Kamera', 'Geld', 'Postkarte'],
    explanationFa: 'این متن یک کارت‌پستال نمونه از سفر به کلن است که واژگان مهم گردشگری درس را به‌کار می‌برد.',
    items: [
      { id: '1', prompt: 'Wir machen gerade ___ in Köln.', answer: 'Ferien', translationFa: 'ما الان در کلن تعطیلات هستیم.' },
      { id: '2', prompt: 'Gestern haben wir den berühmten ___ besichtigt.', answer: 'Dom', translationFa: 'دیروز کلیسای معروف را بازدید کردیم.' },
      { id: '3', prompt: 'Danach haben wir eine ___ mitgemacht.', answer: 'Führung', translationFa: 'بعد از آن در یک بازدید گروهی شرکت کردیم.' },
      { id: '4', prompt: 'Der ___ hat uns viele interessante Informationen gegeben.', answer: 'Reiseführer', translationFa: 'راهنمای گردشگری اطلاعات جالب زیادی به ما داد.' },
      { id: '5', prompt: 'Wir haben auch viele ___ gesehen.', answer: 'Sehenswürdigkeiten', translationFa: 'جاهای دیدنی زیادی هم دیدیم.' },
      { id: '6', prompt: 'Leider habe ich meine ___ im Hotel vergessen.', answer: 'Kamera', translationFa: 'متأسفانه دوربینم را در هتل جا گذاشتم.' },
      { id: '7', prompt: 'Jetzt habe ich fast kein ___ mehr.', answer: 'Geld', translationFa: 'الان تقریباً پول ندارم.' },
      { id: '8', prompt: 'Trotzdem möchte ich dir eine ___ schicken.', answer: 'Postkarte', translationFa: 'با این حال می‌خواهم برایت یک کارت‌پستال بفرستم.' },
    ],
  },

  // ── Exercise 7: sch, st, sp richtig aussprechen — multiple-choice
  {
    id: 'a2-5-7-aussprache-sch-st-sp',
    title: 'sch, st, sp richtig aussprechen',
    type: 'multiple-choice',
    skill: 'pronunciation',
    level: 'A2.1',
    lessonId: 5,
    instructionFa: 'مشخص کنید آیا این کلمه صدای «ش» دارد یا نه.',
    instructionDe: 'Hat dieses Wort den Laut "sch"?',
    explanationFa: 'sch همیشه مثل «ش» تلفظ می‌شود. st و sp هم وقتی اول کلمه یا اول بخش کلمه باشند، با صدای «ش» شروع می‌شوند — اما در وسط کلمه (مثل Prospekt) این قانون صدق نمی‌کند.',
    items: [
      { id: '1', question: 'Stadt', options: ['دارد', 'ندارد'], correctIndex: 0, explanationFa: 'St در اول کلمه → صدای «ش» (Schtadt)' },
      { id: '2', question: 'Tourist', options: ['دارد', 'ندارد'], correctIndex: 1, explanationFa: 'st اینجا اول کلمه نیست، صدای «ش» ندارد.' },
      { id: '3', question: 'Schiff', options: ['دارد', 'ندارد'], correctIndex: 0, explanationFa: 'sch همیشه صدای «ش» دارد.' },
      { id: '4', question: 'später', options: ['دارد', 'ندارد'], correctIndex: 0, explanationFa: 'sp در اول کلمه → صدای «ش» (schpäter)' },
      { id: '5', question: 'spielen', options: ['دارد', 'ندارد'], correctIndex: 0, explanationFa: 'sp در اول کلمه → صدای «ش» (schpielen)' },
      { id: '6', question: 'Dom', options: ['دارد', 'ندارد'], correctIndex: 1, explanationFa: 'این کلمه نه sch و نه st/sp اول کلمه دارد.' },
      { id: '7', question: 'Schifffahrt', options: ['دارد', 'ندارد'], correctIndex: 0, explanationFa: 'sch همیشه صدای «ش» دارد.' },
      { id: '8', question: 'Prospekt', options: ['دارد', 'ندارد'], correctIndex: 1, explanationFa: 'sp اینجا وسط کلمه است، نه اول کلمه — صدای «ش» ندارد.' },
      { id: '9', question: 'Schloss', options: ['دارد', 'ندارد'], correctIndex: 0, explanationFa: 'sch همیشه صدای «ش» دارد.' },
      { id: '10', question: 'Kloster', options: ['دارد', 'ندارد'], correctIndex: 1, explanationFa: 'این کلمه نه sch و نه st/sp اول کلمه دارد.' },
    ],
  },

  // ── Exercise 8: Ein Wochenende planen — dialogue ──────────────────
  {
    id: 'a2-5-8-dialog-wochenende-planen',
    title: 'Ein Wochenende planen',
    type: 'dialogue',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 5,
    instructionFa: 'با استفاده از الگوی زیر، برای هر مهمان یک برنامه‌ی کوتاه بسازید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Bilden Sie mit dem Muster einen kurzen Dialog.',
    pattern: [
      'A: Am Wochenende kommt … zu Besuch. Was können wir machen?',
      'B: Zeigst du ihm/ihr nicht zuerst …?',
      'A: Gute Idee. Danach können wir …',
      'B: Einverstanden. Und am Abend?',
      'A: Vielleicht …',
      'B: Das gefällt ihm/ihr bestimmt.',
    ],
    explanationFa: 'برای پیشنهاد دادن از Wollen wir …؟ یا Zeigst du …؟ و برای موافقت از Einverstanden / Gute Idee استفاده می‌کنیم.',
    items: [
      {
        id: '1',
        promptFa: 'Besuch: Freundin aus Berlin / zuerst: Stadtmuseum / danach: alte Kirche / Abend: schicker Club',
        sampleAnswer:
          'A: Am Wochenende kommt meine Freundin aus Berlin. Was können wir machen?\nB: Zeigst du ihr nicht zuerst das Stadtmuseum?\nA: Gute Idee. Danach können wir die alte Kirche besichtigen.\nB: Einverstanden. Und am Abend?\nA: Vielleicht gehen wir in einen schicken Club.\nB: Das gefällt ihr bestimmt.',
      },
      {
        id: '2',
        promptFa: 'Besuch: Bruder aus Hamburg / zuerst: der alte Dom / danach: kleines Café / Abend: schicker Club',
        sampleAnswer:
          'A: Am Wochenende kommt mein Bruder aus Hamburg. Was können wir machen?\nB: Zeigst du ihm nicht zuerst den alten Dom?\nA: Gute Idee. Der Dom ist wirklich beeindruckend.\nB: Danach könnt ihr in ein kleines Café gehen.\nA: Einverstanden. Und am Abend?\nB: Vielleicht ein schicker Club?\nA: Ja, das gefällt ihm bestimmt.',
      },
      {
        id: '3',
        promptFa: 'Besuch: Kollege aus München / zuerst: Rundgang durch die Altstadt / danach: Museum / Abend: traditionelles Restaurant',
        sampleAnswer:
          'A: Am Wochenende kommt mein Kollege aus München. Was können wir machen?\nB: Zeigst du ihm nicht zuerst die Altstadt?\nA: Gute Idee. Danach können wir ins Museum gehen.\nB: Einverstanden. Und am Abend?\nA: Vielleicht ein traditionelles Restaurant?\nB: Das gefällt ihm bestimmt.',
      },
    ],
  },

  // ── Exercise 9: Mini-Test: Lektion 5 A2.1 — multiple-choice ──────
  {
    id: 'a2-5-9-mini-test',
    title: 'Mini-Test: Lektion 5 A2.1',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 5,
    instructionFa: 'گزینه‌ی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie die richtige Antwort.',
    explanationFa: 'این تمرین جمع‌بندی واژگان، گرامر و Kommunikation درس ۵ است.',
    items: [
      { id: '1', question: 'Ich finde den alt___ Dom schön.', options: ['alte', 'alten', 'altes'], correctIndex: 1, explanationFa: 'Akkusativ مذکر بعد از den → alten' },
      { id: '2', question: 'Mit dem nett___ Reiseführer machen wir einen Rundgang.', options: ['nette', 'netter', 'netten'], correctIndex: 2, explanationFa: 'Dativ بعد از dem → netten' },
      { id: '3', question: 'Das bunt___ Fenster gefällt mir.', options: ['bunte', 'buntes', 'bunten'], correctIndex: 0, explanationFa: 'Nominativ خنثی بعد از das → bunte' },
      { id: '4', question: '«جاهای دیدنی» به آلمانی؟', options: ['Sehenswürdigkeiten', 'Unterkunft', 'Trinkgeld'], correctIndex: 0, explanationFa: 'die Sehenswürdigkeiten یعنی جاهای دیدنی.' },
      { id: '5', question: '«من مخالفم» به آلمانی؟', options: ['Ich bin dafür.', 'Ich bin dagegen.', 'Ich bin einverstanden.'], correctIndex: 1, explanationFa: 'Ich bin dagegen یعنی من مخالفم.' },
      { id: '6', question: '«این را می‌توانیم بعداً انجام بدهیم»؟', options: ['Das können wir doch später machen.', 'Das ist geöffnet.', 'Das ist geschlossen.'], correctIndex: 0, explanationFa: 'این جمله برای مخالفت محترمانه استفاده می‌شود.' },
      { id: '7', question: '«بازدید کردن» به آلمانی؟', options: ['besichtigen', 'wechseln', 'geben'], correctIndex: 0, explanationFa: 'besichtigen یعنی بازدید کردن.' },
      { id: '8', question: 'Die nett___ Leute helfen uns.', options: ['nette', 'netten', 'netter'], correctIndex: 1, explanationFa: 'Plural با die، Nominativ → netten' },
    ],
  },
]
