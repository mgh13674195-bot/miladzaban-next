import { Exercise } from '@/types/exercise'

/**
 * A2.1 — Lektion 9: Bei guten Autos sind wir ganz vorn (Arbeitsleben, Firma,
 * Produktion, Import/Export, Adjektivdeklination ohne Artikel)
 * Independent exercises written for this site — not copied from any
 * coursebook/workbook layout or wording.
 */
export const lesson9Exercises: Exercise[] = [

  // ── Exercise 1: Wortschatz: Arbeitsleben — multiple-choice ────────
  {
    id: 'a2-9-1-wortschatz-arbeitsleben',
    title: 'Wortschatz: Arbeitsleben',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'با توجه به معنی فارسی، کلمه‌ی آلمانی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie das richtige Wort.',
    explanationFa: 'این کلمات از مهم‌ترین واژگان زندگی کاری و شرکت هستند.',
    items: [
      { id: '1', question: 'کارگر', options: ['der Arbeiter', 'der Urlaub', 'die Miete'], correctIndex: 0, explanationFa: 'der Arbeiter یعنی کارگر.' },
      { id: '2', question: 'کارمند', options: ['der Lohn', 'die / der Angestellte', 'die Halle'], correctIndex: 1, explanationFa: 'die/der Angestellte یعنی کارمند.' },
      { id: '3', question: 'کارخانه / مجموعه تولیدی', options: ['das Werk', 'die Reise', 'die Wahrheit'], correctIndex: 0, explanationFa: 'das Werk یعنی کارخانه.' },
      { id: '4', question: 'انبار', options: ['das Lager', 'der Vertrag', 'die Gesundheit'], correctIndex: 0, explanationFa: 'das Lager یعنی انبار.' },
      { id: '5', question: 'تولید', options: ['die Produktion', 'die Reparatur', 'die Einladung'], correctIndex: 0, explanationFa: 'die Produktion یعنی تولید.' },
      { id: '6', question: 'حقوق / دستمزد', options: ['der Lohn', 'das Team', 'das Ausland'], correctIndex: 0, explanationFa: 'der Lohn یعنی حقوق.' },
      { id: '7', question: 'صادرات', options: ['der Export', 'der Bericht', 'die Firma'], correctIndex: 0, explanationFa: 'der Export یعنی صادرات.' },
      { id: '8', question: 'واردات', options: ['der Import', 'die Woche', 'das Herz'], correctIndex: 0, explanationFa: 'der Import یعنی واردات.' },
    ],
  },

  // ── Exercise 2: Beruf und Arbeitsort — multiple-choice ────────────
  {
    id: 'a2-9-2-beruf-arbeitsort',
    title: 'Beruf und Arbeitsort',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'برای هر شغل، محل کار درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie den richtigen Arbeitsort.',
    explanationFa: 'هر شغل معمولاً به یک محل کار خاص مرتبط است.',
    items: [
      { id: '1', question: 'Arzt / Ärztin', options: ['im Krankenhaus', 'im Lager', 'in einem Geschäft'], correctIndex: 0, explanationFa: 'پزشک معمولاً im Krankenhaus کار می‌کند.' },
      { id: '2', question: 'KFZ-Mechatroniker/in', options: ['in einer Werkstatt', 'im Büro', 'im Krankenhaus'], correctIndex: 0, explanationFa: 'مکانیک خودرو in einer Werkstatt کار می‌کند.' },
      { id: '3', question: 'Verkäufer/in', options: ['in einem Geschäft', 'im Lager', 'in einer Werkstatt'], correctIndex: 0, explanationFa: 'فروشنده in einem Geschäft کار می‌کند.' },
      { id: '4', question: 'Ingenieur/in', options: ['in einem Betrieb / Werk', 'in einem Geschäft', 'im Krankenhaus'], correctIndex: 0, explanationFa: 'مهندس in einem Betrieb / Werk کار می‌کند.' },
      { id: '5', question: 'Lagerarbeiter/in', options: ['im Lager', 'im Büro', 'in einer Werkstatt'], correctIndex: 0, explanationFa: 'کارگر انبار im Lager کار می‌کند.' },
      { id: '6', question: 'Bürokraft', options: ['im Büro', 'im Lager', 'in einem Geschäft'], correctIndex: 0, explanationFa: 'کارمند دفتری im Büro کار می‌کند.' },
    ],
  },

  // ── Exercise 3: Import, Export, Produktion — multiple-choice ──────
  {
    id: 'a2-9-3-import-export-produktion',
    title: 'Import, Export, Produktion',
    type: 'multiple-choice',
    skill: 'vocabulary',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'با توجه به توضیح فارسی، کلمه‌ی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie das richtige Wort.',
    explanationFa: 'این کلمات به اقتصاد و تولید مربوط می‌شوند.',
    items: [
      { id: '1', question: 'اگر یک شرکت کالا را به کشورهای دیگر بفروشد، می‌گوییم:', options: ['importieren', 'exportieren', 'reparieren'], correctIndex: 1, explanationFa: 'exportieren یعنی صادر کردن.' },
      { id: '2', question: 'اگر قطعات از کشورهای دیگر وارد شوند، می‌گوییم:', options: ['importieren', 'steigen', 'sparen'], correctIndex: 0, explanationFa: 'importieren یعنی وارد کردن.' },
      { id: '3', question: 'وقتی در کارخانه ماشین ساخته می‌شود، این بخش را می‌گوییم:', options: ['Produktion', 'Ausland', 'Erfolg'], correctIndex: 0, explanationFa: 'Produktion یعنی تولید.' },
      { id: '4', question: 'جایی که کالاها نگه‌داری می‌شوند:', options: ['Halle', 'Lager', 'Lohn'], correctIndex: 1, explanationFa: 'Lager یعنی انبار.' },
    ],
  },

  // ── Exercise 4: Ein Werk vorstellen — reading (richtig/falsch) ────
  {
    id: 'a2-9-4-werk-vorstellen',
    title: 'Ein Werk vorstellen',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'متن را بخوانید و درست یا غلط بودن جمله‌ها را تشخیص دهید.',
    instructionDe: 'Lesen Sie den Text und entscheiden Sie: richtig oder falsch.',
    explanationFa:
      'متن: «In unserem Werk arbeiten 600 Mitarbeiter. Jeden Tag produzieren wir etwa 300 Fahrzeuge. Viele Autos gehen in den Export. Die Teile kommen pünktlich mit LKWs. Früher war das Lager viel größer. Heute arbeiten viele Maschinen in den Hallen, deshalb ist die Arbeit leichter geworden.»',
    items: [
      { id: '1', question: 'Im Werk arbeiten 600 Mitarbeiter.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'در متن آمده: arbeiten 600 Mitarbeiter — درست است.' },
      { id: '2', question: 'Jeden Tag produziert man 30 Fahrzeuge.', options: ['richtig', 'falsch'], correctIndex: 1, explanationFa: 'در متن آمده: etwa 300 Fahrzeuge — پس غلط است.' },
      { id: '3', question: 'Viele Autos gehen ins Ausland.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'Export یعنی فرستادن به خارج از کشور — درست است.' },
      { id: '4', question: 'Die Teile kommen mit dem Zug.', options: ['richtig', 'falsch'], correctIndex: 1, explanationFa: 'در متن آمده: mit LKWs — پس غلط است.' },
      { id: '5', question: 'Heute machen Maschinen viel Arbeit.', options: ['richtig', 'falsch'], correctIndex: 0, explanationFa: 'در متن آمده: arbeiten viele Maschinen in den Hallen — درست است.' },
      { id: '6', question: 'Die Arbeit ist heute schwerer als früher.', options: ['richtig', 'falsch'], correctIndex: 1, explanationFa: 'در متن آمده: die Arbeit leichter geworden — پس غلط است.' },
    ],
  },

  // ── Exercise 5: Nominativ ohne Artikel — fill-blank ───────────────
  {
    id: 'a2-9-5-nominativ-ohne-artikel',
    title: 'Adjektivdeklination: Nominativ ohne Artikel',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'صفت را با پایان درست Nominativ کامل کنید.',
    instructionDe: 'Ergänzen Sie das Adjektiv im Nominativ.',
    explanationFa: 'در Nominativ بدون حرف تعریف: مذکر -er، خنثی -es، مؤنث -e، جمع -e.',
    items: [
      { id: '1', prompt: '___ Lohn ist mir wichtig. (gut)', answer: 'Guter Lohn', translationFa: 'حقوق خوب برایم مهم است.' },
      { id: '2', prompt: '___ Lager ist modern. (groß)', answer: 'Großes Lager', translationFa: 'انبار بزرگ مدرن است.' },
      { id: '3', prompt: '___ Arbeitszeit passt gut zu mir. (flexibel)', answer: 'Flexible Arbeitszeit', translationFa: 'ساعت کاری منعطف به من می‌خورد.' },
      { id: '4', prompt: '___ Büros sind auch wichtig. (klein)', answer: 'Kleine Büros', translationFa: 'دفترهای کوچک هم مهم هستند.' },
      { id: '5', prompt: '___ Betrieb sucht neue Mitarbeiter. (international)', answer: 'Internationaler Betrieb', translationFa: 'شرکت بین‌المللی به دنبال کارمندان جدید است.' },
    ],
  },

  // ── Exercise 6: Akkusativ ohne Artikel — fill-blank ───────────────
  {
    id: 'a2-9-6-akkusativ-ohne-artikel',
    title: 'Adjektivdeklination: Akkusativ ohne Artikel',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'صفت را با پایان درست Akkusativ کامل کنید.',
    instructionDe: 'Ergänzen Sie das Adjektiv im Akkusativ.',
    explanationFa: 'در Akkusativ بدون حرف تعریف فقط مذکر تغییر می‌کند: -er → -en.',
    items: [
      { id: '1', prompt: 'Ich suche ___ Job. (interessant)', answer: 'interessanten Job', translationFa: 'من به دنبال شغل جالبی هستم.' },
      { id: '2', prompt: 'Wir brauchen ___ Lkw. (klein)', answer: 'kleinen Lkw', translationFa: 'ما به یک کامیون کوچک نیاز داریم.' },
      { id: '3', prompt: 'Die Firma bietet ___ Lohn. (gut)', answer: 'guten Lohn', translationFa: 'شرکت حقوق خوبی پیشنهاد می‌دهد.' },
      { id: '4', prompt: 'Ich möchte ___ Arbeitszeit. (flexibel)', answer: 'flexible Arbeitszeit', translationFa: 'من ساعت کاری منعطف می‌خواهم.' },
      { id: '5', prompt: 'Er sucht ___ Büros. (klein)', answer: 'kleine Büros', translationFa: 'او به دنبال دفترهای کوچک است.' },
    ],
  },

  // ── Exercise 7: Dativ ohne Artikel — fill-blank ───────────────────
  {
    id: 'a2-9-7-dativ-ohne-artikel',
    title: 'Adjektivdeklination: Dativ ohne Artikel',
    type: 'fill-blank',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'صفت را با پایان درست Dativ کامل کنید.',
    instructionDe: 'Ergänzen Sie das Adjektiv im Dativ.',
    explanationFa: 'در Dativ بدون حرف تعریف: مذکر/خنثی -em، مؤنث -er، جمع -en.',
    items: [
      { id: '1', prompt: 'Ich arbeite mit ___ Kollegen. (nett)', answer: 'netten Kollegen', translationFa: 'من با همکارهای خوبی کار می‌کنم.' },
      { id: '2', prompt: 'Wir sprechen über Arbeit in ___ Betrieb. (groß)', answer: 'großem Betrieb', translationFa: 'ما درباره‌ی کار در یک شرکت بزرگ صحبت می‌کنیم.' },
      { id: '3', prompt: 'Er fährt mit ___ Lkw. (neu)', answer: 'neuem Lkw', translationFa: 'او با یک کامیون جدید رانندگی می‌کند.' },
      { id: '4', prompt: 'Sie arbeitet seit Jahren in ___ Firma. (international)', answer: 'internationaler Firma', translationFa: 'او سال‌هاست در یک شرکت بین‌المللی کار می‌کند.' },
      { id: '5', prompt: 'Ich bin mit ___ Arbeitszeit zufrieden. (flexibel)', answer: 'flexibler Arbeitszeit', translationFa: 'من از ساعت کاری منعطف راضی هستم.' },
    ],
  },

  // ── Exercise 8: Nominativ, Akkusativ oder Dativ? — multiple-choice
  {
    id: 'a2-9-8-fall-erkennen',
    title: 'Nominativ, Akkusativ oder Dativ?',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'حالت دستوری (نقش) عبارت صفت‌دار را تشخیص دهید.',
    instructionDe: 'Welcher Fall ist das?',
    explanationFa: 'پایان صفت نشان می‌دهد جمله در چه حالتی است.',
    items: [
      { id: '1', question: 'Guter Lohn ist wichtig.', options: ['Nominativ', 'Akkusativ', 'Dativ'], correctIndex: 0, explanationFa: 'guter (پایان -er) → فاعل جمله → Nominativ' },
      { id: '2', question: 'Ich suche guten Lohn.', options: ['Nominativ', 'Akkusativ', 'Dativ'], correctIndex: 1, explanationFa: 'guten (پایان -en، مذکر) → مفعول مستقیم → Akkusativ' },
      { id: '3', question: 'Ich bin mit gutem Lohn zufrieden.', options: ['Nominativ', 'Akkusativ', 'Dativ'], correctIndex: 2, explanationFa: 'gutem (پایان -em) → بعد از mit → Dativ' },
      { id: '4', question: 'Flexible Arbeitszeit passt gut.', options: ['Nominativ', 'Akkusativ', 'Dativ'], correctIndex: 0, explanationFa: 'flexible (پایان -e، مؤنث) → فاعل جمله → Nominativ' },
      { id: '5', question: 'Ich möchte flexible Arbeitszeit.', options: ['Nominativ', 'Akkusativ', 'Dativ'], correctIndex: 1, explanationFa: 'flexible (مؤنث، -e در هر دو حالت) → مفعول مستقیم → Akkusativ' },
      { id: '6', question: 'Ich arbeite mit flexibler Arbeitszeit besser.', options: ['Nominativ', 'Akkusativ', 'Dativ'], correctIndex: 2, explanationFa: 'flexibler (پایان -er، مؤنث) → بعد از mit → Dativ' },
    ],
  },

  // ── Exercise 9: Stellenanzeige ergänzen — fill-blank (word bank) ─
  {
    id: 'a2-9-9-stellenanzeige',
    title: 'Stellenanzeige ergänzen',
    type: 'fill-blank',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'آگهی شغلی را با کلمات بانک کامل کنید — دسکتاپ: درگ‌ودراپ، موبایل: لمس کنید.',
    instructionDe: 'Ergänzen Sie die Stellenanzeige.',
    wordBank: ['freundliche', 'langer', 'flexible', 'guten', 'nette'],
    explanationFa: 'متن کامل: «Internationale Firma sucht freundliche Mitarbeiter mit langer Berufserfahrung. Wir bieten flexible Arbeitszeit, guten Lohn und nette Kollegen.»',
    items: [
      { id: '1', prompt: 'Internationale Firma sucht ___ Mitarbeiter', answer: 'freundliche', translationFa: 'شرکت بین‌المللی به دنبال کارمندان مهربان است.' },
      { id: '2', prompt: 'mit ___ Berufserfahrung.', answer: 'langer', translationFa: 'با سابقه‌ی کاری طولانی.' },
      { id: '3', prompt: 'Wir bieten ___ Arbeitszeit,', answer: 'flexible', translationFa: 'ما ساعت کاری منعطف پیشنهاد می‌دهیم.' },
      { id: '4', prompt: '___ Lohn', answer: 'guten', translationFa: 'حقوق خوب' },
      { id: '5', prompt: 'und ___ Kollegen.', answer: 'nette', translationFa: 'و همکارهای خوب.' },
    ],
  },

  // ── Exercise 10: Wichtigkeit ausdrücken — multiple-choice ─────────
  {
    id: 'a2-9-10-wichtigkeit-ausdruecken',
    title: 'Wichtigkeit ausdrücken',
    type: 'multiple-choice',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'پاسخ مناسب را برای هر سؤال انتخاب کنید.',
    instructionDe: 'Wählen Sie die passende Antwort.',
    explanationFa: 'این جمله‌ها برای بیان میزان اهمیت چیزها در شغل به‌کار می‌روند.',
    items: [
      { id: '1', question: 'Ist dir guter Lohn wichtig?', options: ['Ja, das ist mir sehr wichtig.', 'Ich bin krank.', 'Das ist ein Auto.'], correctIndex: 0, explanationFa: 'Ja, das ist mir sehr wichtig یعنی بله، خیلی برایم مهم است.' },
      { id: '2', question: 'Arbeitest du gern im Team?', options: ['Ja, ich arbeite gern im Team.', 'Ich habe Kopfschmerzen.', 'Das ist teuer.'], correctIndex: 0, explanationFa: 'Ja, ich arbeite gern im Team یعنی بله، با علاقه در تیم کار می‌کنم.' },
      { id: '3', question: 'Ist dir flexible Arbeitszeit wichtig?', options: ['Mir ist das nicht so wichtig.', 'Ich gehe ins Kino.', 'Er repariert Autos.'], correctIndex: 0, explanationFa: 'Mir ist das nicht so wichtig یعنی این برایم زیاد مهم نیست.' },
    ],
  },

  // ── Exercise 11: Welcher Beruf passt? — multiple-choice ───────────
  {
    id: 'a2-9-11-welcher-beruf-passt',
    title: 'Welcher Beruf passt?',
    type: 'multiple-choice',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'با توجه به علایق هر فرد، شغل مناسب را انتخاب کنید.',
    instructionDe: 'Welcher Beruf passt zu wem?',
    explanationFa: 'علایق و سبک کاری هر فرد، شغل مناسب او را نشان می‌دهد.',
    items: [
      { id: '1', question: 'Sara arbeitet gern im Team und im Büro.', options: ['Bürokraft / Projektassistenz', 'Landschaftsgärtner/in', 'KFZ-Mechatroniker/in'], correctIndex: 0, explanationFa: 'کسی که در تیم و دفتر کار می‌کند، مناسب Bürokraft است.' },
      { id: '2', question: 'Ali arbeitet gern selbstständig und draußen.', options: ['Landschaftsgärtner/in', 'Bürokraft / Projektassistenz', 'Verkäufer/in'], correctIndex: 0, explanationFa: 'کسی که مستقل و بیرون کار می‌کند، مناسب Landschaftsgärtner/in است.' },
      { id: '3', question: 'Nina möchte gut verdienen und in einer internationalen Firma arbeiten.', options: ['Verkäufer/in in einer internationalen Firma', 'Lagerarbeiter/in', 'KFZ-Mechatroniker/in'], correctIndex: 0, explanationFa: 'علاقه به شرکت بین‌المللی و درآمد خوب، مناسب این شغل است.' },
      { id: '4', question: 'Reza repariert gern Autos.', options: ['KFZ-Mechatroniker/in', 'Bürokraft', 'Ingenieur/in'], correctIndex: 0, explanationFa: 'تعمیر خودرو، شغل KFZ-Mechatroniker/in است.' },
    ],
  },

  // ── Exercise 12: Was ist dir wichtig? — dialogue fill-blank ───────
  {
    id: 'a2-9-12-was-ist-dir-wichtig',
    title: 'Was ist dir wichtig?',
    type: 'fill-blank',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'دیالوگ را با کلمات بانک کامل کنید — دسکتاپ: درگ‌ودراپ، موبایل: لمس کنید.',
    instructionDe: 'Ergänzen Sie den Dialog.',
    wordBank: ['guter Lohn', 'im Team', 'selbstständig', 'flexible Arbeitszeit', 'sehr wichtig'],
    explanationFa: 'این دیالوگ بیان اولویت‌های شغلی را تمرین می‌کند.',
    items: [
      { id: '1', prompt: 'B: ___ ist mir sehr wichtig.', answer: 'guter Lohn', translationFa: 'حقوق خوب برایم خیلی مهم است.' },
      { id: '2', prompt: 'A: Und arbeitest du lieber allein oder ___?', answer: 'im Team', translationFa: 'و ترجیح می‌دهی تنها یا در تیم کار کنی؟' },
      { id: '3', prompt: 'B: Ich arbeite gern ___.', answer: 'selbstständig', translationFa: 'من با علاقه مستقل کار می‌کنم.' },
      { id: '4', prompt: 'A: Ist dir ___ auch wichtig?', answer: 'flexible Arbeitszeit', translationFa: 'ساعت کاری منعطف هم برایت مهم است؟' },
      { id: '5', prompt: 'B: Ja, das ist mir auch ___.', answer: 'sehr wichtig', translationFa: 'بله، این هم برایم خیلی مهم است.' },
    ],
  },

  // ── Exercise 13: Berufe raten: Ja/Nein-Fragen — sentence-order ───
  {
    id: 'a2-9-13-berufe-raten',
    title: 'Berufe raten: Ja/Nein-Fragen',
    type: 'sentence-order',
    skill: 'speaking',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'کلمات را به ترتیب درست بکشید یا روی آن‌ها لمس کنید تا سؤال بله/نه بسازید.',
    instructionDe: 'Bilden Sie die richtige Ja/Nein-Frage.',
    explanationFa: 'این سؤال‌ها برای بازی حدس‌زدن شغل به‌کار می‌روند.',
    items: [
      {
        id: '1',
        words: ['einem Büro', 'Arbeite', 'ich', 'in', '?'],
        correctOrder: ['Arbeite', 'ich', 'in', 'einem Büro', '?'],
        translationFa: 'من در یک دفتر کار می‌کنم؟',
      },
      {
        id: '2',
        words: ['studiert', 'Habe', 'ich', '?'],
        correctOrder: ['Habe', 'ich', 'studiert', '?'],
        translationFa: 'من تحصیلات دانشگاهی دارم؟',
      },
      {
        id: '3',
        words: ['selbstständig', 'Bin', 'ich', '?'],
        correctOrder: ['Bin', 'ich', 'selbstständig', '?'],
        translationFa: 'من مستقل کار می‌کنم؟',
      },
      {
        id: '4',
        words: ['viel', 'Muss', 'ich', 'reisen', '?'],
        correctOrder: ['Muss', 'ich', 'viel', 'reisen', '?'],
        translationFa: 'باید زیاد سفر کنم؟',
      },
      {
        id: '5',
        words: ['mit Menschen', 'Arbeite', 'ich', '?'],
        correctOrder: ['Arbeite', 'ich', 'mit Menschen', '?'],
        translationFa: 'با مردم کار می‌کنم؟',
      },
      {
        id: '6',
        words: ['draußen', 'Arbeite', 'ich', '?'],
        correctOrder: ['Arbeite', 'ich', 'draußen', '?'],
        translationFa: 'بیرون کار می‌کنم؟',
      },
    ],
  },

  // ── Exercise 14: Praktikum lesen und verstehen — fill-blank ──────
  {
    id: 'a2-9-14-praktikum-lesen',
    title: 'Praktikum lesen und verstehen',
    type: 'fill-blank',
    skill: 'review',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'متن آگهی کارآموزی را بخوانید و به سؤال‌ها پاسخ دهید.',
    instructionDe: 'Lesen Sie den Text und beantworten Sie die Fragen.',
    explanationFa:
      'متن: «Praktikum in einem Technikbetrieb (Oktober–Dezember, Vollzeit). Unser Betrieb produziert kleine Maschinen für andere Firmen. Aufgaben: Mitarbeit in der Produktion, Hilfe im Lager, Zusammenarbeit mit Ingenieuren. Qualifikation: Student/in, teamfähig, flexibel, selbstständig. Kontakt: Frau Sommer, Tel. 01234 / 56789»',
    items: [
      { id: '1', prompt: 'Wie lange dauert das Praktikum?', answer: 'Oktober bis Dezember', translationFa: 'کارآموزی از اکتبر تا دسامبر است.' },
      { id: '2', prompt: 'Was produziert der Betrieb?', answer: 'kleine Maschinen', translationFa: 'شرکت ماشین‌های کوچک تولید می‌کند.' },
      { id: '3', prompt: 'Was macht man im Praktikum?', answer: 'Mitarbeit in der Produktion und Hilfe im Lager', translationFa: 'همکاری در تولید و کمک در انبار.' },
      { id: '4', prompt: 'Mit wem arbeitet man zusammen?', answer: 'mit Ingenieuren', translationFa: 'با مهندسان همکاری می‌شود.' },
      { id: '5', prompt: 'Was muss man können / sein?', answer: 'teamfähig, flexibel, selbstständig, Student/in', translationFa: 'باید تیمی، منعطف، مستقل و دانشجو باشد.' },
      { id: '6', prompt: 'Mit wem kann man Kontakt aufnehmen?', answer: 'mit Frau Sommer', translationFa: 'می‌توان با خانم سامر تماس گرفت.' },
    ],
  },

  // ── Exercise 15: Mein Traumjob — dialogue/writing ─────────────────
  {
    id: 'a2-9-15-mein-traumjob',
    title: 'Mein Traumjob',
    type: 'dialogue',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'با استفاده از سؤال‌های راهنما، درباره‌ی شغل دلخواه خودتان یک متن کوتاه بنویسید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Beschreiben Sie Ihren Traumjob mit Hilfe der Leitfragen.',
    pattern: [
      'Was ist dein Traumjob?',
      'Wo möchtest du arbeiten?',
      'Möchtest du im Team oder selbstständig arbeiten?',
      'Ist dir guter Lohn wichtig?',
      'Ist dir flexible Arbeitszeit wichtig?',
      'Wie sollen die Arbeitsbedingungen sein?',
      'Was möchtest du nicht gern machen?',
    ],
    explanationFa: 'برای این متن از Guter Lohn ist mir wichtig و Ich arbeite gern … استفاده کنید.',
    items: [
      {
        id: '1',
        promptFa: 'متن نمونه درباره‌ی شغل دلخواه',
        sampleAnswer:
          'Mein Traumjob ist Projektmanager in einer internationalen Firma. Ich möchte gern in einem Büro arbeiten, aber nicht den ganzen Tag drinnen sitzen. Ich arbeite gern im Team, aber manchmal auch selbstständig. Guter Lohn und flexible Arbeitszeit sind mir sehr wichtig. Ich möchte nette Kollegen und gute Arbeitsbedingungen haben. Ich möchte nicht gern unter großem Stress arbeiten.',
      },
    ],
  },

  // ── Exercise 16: Sätze ordnen: Arbeit und Job — sentence-order ───
  {
    id: 'a2-9-16-saetze-ordnen',
    title: 'Sätze ordnen: Arbeit und Job',
    type: 'sentence-order',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'کلمات را به ترتیب درست بکشید یا روی آن‌ها لمس کنید تا جمله‌ی کامل بسازید.',
    instructionDe: 'Bilden Sie mit den Wörtern einen vollständigen Satz.',
    explanationFa: 'به جایگاه فعل (جایگاه دوم) و پایان صفت بدون حرف تعریف دقت کنید.',
    items: [
      {
        id: '1',
        words: ['mir', 'Lohn', 'ist', 'sehr wichtig', 'Guter', '.'],
        correctOrder: ['Guter', 'Lohn', 'ist', 'mir', 'sehr wichtig', '.'],
        translationFa: 'حقوق خوب برایم خیلی مهم است.',
      },
      {
        id: '2',
        words: ['im Team', 'arbeite', 'gern', 'Ich', '.'],
        correctOrder: ['Ich', 'arbeite', 'gern', 'im Team', '.'],
        translationFa: 'من با علاقه در تیم کار می‌کنم.',
      },
      {
        id: '3',
        words: ['neue Mitarbeiter', 'sucht', 'Betrieb', 'Internationaler', '.'],
        correctOrder: ['Internationaler', 'Betrieb', 'sucht', 'neue Mitarbeiter', '.'],
        translationFa: 'شرکت بین‌المللی به دنبال کارمندان جدید است.',
      },
      {
        id: '4',
        words: ['Arbeitszeit', 'möchte', 'flexible', 'Ich', '.'],
        correctOrder: ['Ich', 'möchte', 'flexible', 'Arbeitszeit', '.'],
        translationFa: 'من ساعت کاری منعطف می‌خواهم.',
      },
      {
        id: '5',
        words: ['Kollegen', 'arbeite', 'netten', 'Ich', 'mit', '.'],
        correctOrder: ['Ich', 'arbeite', 'mit', 'netten', 'Kollegen', '.'],
        translationFa: 'من با همکارهای خوبی کار می‌کنم.',
      },
      {
        id: '6',
        words: ['kleine', 'sucht', 'Büros', 'Die Firma', '.'],
        correctOrder: ['Die Firma', 'sucht', 'kleine', 'Büros', '.'],
        translationFa: 'شرکت به دنبال دفترهای کوچک است.',
      },
    ],
  },

  // ── Exercise 17: Adjektive korrigieren — multiple-choice ─────────
  {
    id: 'a2-9-17-adjektive-korrigieren',
    title: 'Adjektive korrigieren',
    type: 'multiple-choice',
    skill: 'grammar',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'جمله‌ی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie den richtigen Satz.',
    explanationFa: 'به پایان صفت بدون حرف تعریف دقت کنید — این خطاهای رایج هستند.',
    items: [
      { id: '1', question: 'کدام جمله درست است؟', options: ['Ich möchte flexible Arbeitszeit.', 'Ich möchte guten Arbeitszeit.'], correctIndex: 0, explanationFa: 'Arbeitszeit مؤنث است → flexible (نه guten).' },
      { id: '2', question: 'کدام جمله درست است؟', options: ['Mir ist gute Lohn sehr wichtig.', 'Mir ist guter Lohn sehr wichtig.'], correctIndex: 1, explanationFa: 'Lohn مذکر و فاعل جمله است → guter (پایان -er).' },
      { id: '3', question: 'کدام جمله درست است؟', options: ['Ich arbeite mit nette Kollegen.', 'Ich arbeite mit netten Kollegen.'], correctIndex: 1, explanationFa: 'بعد از mit در Dativ جمع → netten (پایان -en).' },
      { id: '4', question: 'کدام جمله درست است؟', options: ['Wir suchen großes Büros.', 'Wir suchen große Büros.'], correctIndex: 1, explanationFa: 'Büros جمع است → große (پایان -e، نه -es).' },
      { id: '5', question: 'کدام جمله درست است؟', options: ['Er hat lang Berufserfahrung.', 'Er hat lange Berufserfahrung.'], correctIndex: 1, explanationFa: 'Berufserfahrung مؤنث و مفعول مستقیم است → lange (پایان -e).' },
      { id: '6', question: 'کدام جمله درست است؟', options: ['Sie arbeitet in internationale Firma.', 'Sie arbeitet in internationaler Firma.'], correctIndex: 1, explanationFa: 'بعد از in در Dativ مؤنث بدون حرف تعریف → internationaler (پایان -er). نکته: در گفتار روزمره معمولاً می‌گوییم «in einer internationalen Firma»، اما در این درس ساختار بدون حرف تعریف را تمرین می‌کنیم.' },
    ],
  },

  // ── Exercise 18: Mini-Test: Lektion 9 A2.1 — multiple-choice ──────
  {
    id: 'a2-9-18-mini-test',
    title: 'Mini-Test: Lektion 9 A2.1',
    type: 'multiple-choice',
    skill: 'review',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'گزینه‌ی درست را انتخاب کنید.',
    instructionDe: 'Wählen Sie die richtige Antwort.',
    explanationFa: 'این تمرین جمع‌بندی واژگان، گرامر و Kommunikation درس ۹ است.',
    items: [
      { id: '1', question: '«حقوق» به آلمانی:', options: ['der Lohn', 'das Lager', 'der Export'], correctIndex: 0, explanationFa: 'der Lohn یعنی حقوق.' },
      { id: '2', question: '«انبار» به آلمانی:', options: ['die Firma', 'das Lager', 'die Produktion'], correctIndex: 1, explanationFa: 'das Lager یعنی انبار.' },
      { id: '3', question: 'شکل درست:', options: ['guter Lohn', 'guten Arbeitszeit', 'große Betrieb'], correctIndex: 0, explanationFa: 'مذکر در Nominativ پایان -er می‌گیرد: guter Lohn.' },
      { id: '4', question: 'شکل درست با Dativ:', options: ['mit nette Kollegen', 'mit netten Kollegen', 'mit netter Kollegen'], correctIndex: 1, explanationFa: 'جمع در Dativ پایان -en می‌گیرد.' },
      { id: '5', question: 'Ist dir flexible Arbeitszeit wichtig?', options: ['Ja, das ist mir sehr wichtig.', 'Ich habe Hunger.', 'Das ist ein Lkw.'], correctIndex: 0, explanationFa: 'این جمله بیان اهمیت زیاد است.' },
      { id: '6', question: '«من دوست دارم مستقل کار کنم» به آلمانی:', options: ['Ich arbeite gern selbstständig.', 'Ich bin gern Export.', 'Ich habe gern Lager.'], correctIndex: 0, explanationFa: 'selbstständig یعنی مستقل.' },
      { id: '7', question: '«شرکت» در معنای Betrieb / Firma:', options: ['das Herz', 'der Betrieb', 'die Grippe'], correctIndex: 1, explanationFa: 'der Betrieb یعنی شرکت/مجموعه‌ی کاری.' },
      { id: '8', question: '«صادرات» به آلمانی:', options: ['der Export', 'der Import', 'die Reparatur'], correctIndex: 0, explanationFa: 'der Export یعنی صادرات.' },
    ],
  },

  // ── Exercise 19: Satzakzent: Arbeit und Job — multiple-choice ─────
  {
    id: 'a2-9-19-satzakzent',
    title: 'Satzakzent: Arbeit und Job',
    type: 'multiple-choice',
    skill: 'pronunciation',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'کلمه یا عبارتی را که باید با تأکید بیشتری گفته شود انتخاب کنید.',
    instructionDe: 'Welches Wort wird betont?',
    explanationFa: 'در جمله‌های مهم درباره‌ی شغل، کلمه‌ی کلیدی را با تأکید بیشتری می‌گوییم.',
    items: [
      { id: '1', question: 'Guter Lohn ist mir sehr wichtig.', options: ['Guter Lohn', 'mir'], correctIndex: 0, explanationFa: 'تأکید روی Guter Lohn است.' },
      { id: '2', question: 'Flexible Arbeitszeit ist mir auch wichtig.', options: ['Flexible Arbeitszeit', 'auch'], correctIndex: 0, explanationFa: 'تأکید روی Flexible Arbeitszeit است.' },
      { id: '3', question: 'Ich arbeite gern selbstständig.', options: ['selbstständig', 'Ich'], correctIndex: 0, explanationFa: 'تأکید روی selbstständig است.' },
      { id: '4', question: 'Wir produzieren kleine Maschinen.', options: ['kleine Maschinen', 'Wir'], correctIndex: 0, explanationFa: 'تأکید روی kleine Maschinen است.' },
    ],
  },

  // ── Exercise 20: Mein idealer Arbeitsplatz — final project ───────
  {
    id: 'a2-9-20-idealer-arbeitsplatz',
    title: 'Mein idealer Arbeitsplatz',
    type: 'dialogue',
    skill: 'writing',
    level: 'A2.1',
    lessonId: 9,
    instructionFa: 'با استفاده از سؤال‌های راهنما، درباره‌ی محل کار ایده‌آل خودتان یک متن A2 بنویسید. سپس پاسخ نمونه را ببینید.',
    instructionDe: 'Beschreiben Sie Ihren idealen Arbeitsplatz mit Hilfe der Leitfragen.',
    pattern: [
      'Welchen Beruf möchtest du haben?',
      'Wo möchtest du arbeiten?',
      'Möchtest du im Team oder selbstständig arbeiten?',
      'Was ist dir wichtig?',
      'Was ist dir nicht so wichtig?',
      'Wie sollen Lohn, Arbeitszeit und Arbeitsbedingungen sein?',
      'Welche Kollegen möchtest du haben?',
    ],
    explanationFa: 'برای این متن از حداقل ۵ جمله و عبارت‌های wichtig/nicht so wichtig استفاده کنید.',
    items: [
      {
        id: '1',
        promptFa: 'متن نمونه درباره‌ی محل کار ایده‌آل',
        sampleAnswer:
          'Ich möchte später in einem internationalen Betrieb arbeiten. Ich arbeite gern im Team, aber auch manchmal selbstständig. Guter Lohn und flexible Arbeitszeit sind mir sehr wichtig. Ein großes Büro ist mir nicht so wichtig. Ich möchte nette Kollegen und gute Arbeitsbedingungen haben. Ich möchte interessante Aufgaben und nicht zu viel Stress.',
      },
    ],
  },
]
