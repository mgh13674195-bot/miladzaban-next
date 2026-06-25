import { LessonNotes } from '@/types/lessonNotes'

/**
 * A2.1 — Lektion 5: Schaut mal, der schöne Dom! (Stadtbesichtigung,
 * Adjektivdeklination nach bestimmtem Artikel, gemeinsam planen)
 * Structured from the lesson-notes source markdown. Independent educational
 * content — not a copy of any coursebook layout.
 */
export const lesson5Notes: LessonNotes = {
  lessonId: 5,
  topic: 'Stadtbesichtigung',
  titleFa: 'گردش در شهر، برنامه‌ریزی مشترک و پایان صفت بعد از der/das/die',

  summary: {
    introFa:
      'در این درس درباره‌ی گردش در شهر، جاهای دیدنی، برنامه‌ریزی برای بازدید یک دوست و نوشتن Postkarte یا E-Mail صحبت می‌کنیم. یاد می‌گیریم چطور پیشنهاد بدهیم، موافقت یا مخالفت کنیم، پایان صفت را بعد از Artikel معین (der/das/die) در Nominativ، Akkusativ و Dativ بسازیم و به تلفظ sch، st و sp در اول کلمه توجه کنیم.',
    goals: [
      'واژگان گردشگری مثل Dom, Sehenswürdigkeiten, Führung, Rundgang را به‌کار ببرد.',
      'فعل‌های مناسب گردشگری مثل besichtigen, buchen, sich interessieren را درست استفاده کند.',
      'پایان صفت را بعد از der/das/die در Nominativ بسازد.',
      'پایان صفت را بعد از den/das/die در Akkusativ بسازد.',
      'پایان صفت را بعد از dem/der/den در Dativ بسازد.',
      'برای یک بازدید مشترک پیشنهاد بدهد: Wollen wir zuerst …؟',
      'با پیشنهاد دیگران موافقت یا مخالفت کند: Einverstanden. / Ich bin dagegen.',
      'یک برنامه‌ی آخر هفته برای مهمان بنویسد یا تعریف کند.',
      'یک Postkarte یا E-Mail کوتاه درباره‌ی سفر بنویسد.',
      'به تلفظ sch، st و sp در اول کلمه توجه کند.',
    ],
  },

  keySentences: [
    {
      titleFa: 'پیشنهاد دادن برای بازدید',
      sentences: [
        { de: 'Wollen wir zuerst den Dom besichtigen?', fa: 'اول کلیسای بزرگ را بازدید کنیم؟' },
        { de: 'Danach können wir einen Rundgang machen.', fa: 'بعد از آن می‌توانیم یک قدم‌زنی شهری انجام بدهیم.' },
        { de: 'Am Samstagabend könnten wir in einen Club gehen.', fa: 'شنبه شب می‌توانیم به یک کلاب برویم.' },
      ],
    },
    {
      titleFa: 'موافقت و مخالفت',
      sentences: [
        { de: 'Das ist eine gute Idee.', fa: 'این ایده‌ی خوبی است.' },
        { de: 'Einverstanden.', fa: 'موافقم.' },
        { de: 'Ich bin auch dafür.', fa: 'من هم موافقم.' },
        { de: 'Ich bin dagegen.', fa: 'من مخالفم.' },
        { de: 'Das können wir doch später machen.', fa: 'این را می‌توانیم بعداً انجام بدهیم.' },
      ],
    },
    {
      titleFa: 'توصیف شهر با صفت',
      sentences: [
        { de: 'Der berühmte Dom ist sehr alt.', fa: 'کلیسای معروف خیلی قدیمی است.' },
        { de: 'Ich finde den alten Dom beeindruckend.', fa: 'کلیسای قدیمی را تأثیرگذار می‌دانم.' },
        { de: 'Wir gehen mit dem netten Reiseführer durch die Stadt.', fa: 'با راهنمای مهربان در شهر می‌گردیم.' },
        { de: 'Die netten Leute helfen uns.', fa: 'آدم‌های مهربان به ما کمک می‌کنند.' },
      ],
    },
  ],

  grammar: [
    {
      id: 'adjektiv-bestimmt-nominativ',
      titleDe: 'Adjektivdeklination: der/das/die im Nominativ',
      titleFa: 'پایان صفت بعد از Artikel معین در Nominativ',
      explanationFa: 'بعد از der/das/die در Nominativ مفرد، صفت معمولاً -e می‌گیرد. در جمع (با die) صفت -en می‌گیرد.',
      table: {
        headers: ['Artikel', 'پایان صفت', 'مثال'],
        rows: [
          ['der', '-e', 'der berühmte Dom'],
          ['das', '-e', 'das bunte Fenster'],
          ['die', '-e', 'die neue Kamera'],
          ['die (Plural)', '-en', 'die netten Leute'],
        ],
      },
      examples: [
        { de: 'Der berühmte Dom ist sehr alt.', fa: 'کلیسای معروف خیلی قدیمی است.' },
        { de: 'Das bunte Fenster ist wirklich schön.', fa: 'پنجره‌ی رنگی واقعاً زیباست.' },
        { de: 'Die neue Kamera ist teuer.', fa: 'دوربین جدید گران است.' },
        { de: 'Die netten Leute helfen uns.', fa: 'آدم‌های مهربان به ما کمک می‌کنند.' },
      ],
      note: 'بعد از der/das/die در مفرد Nominativ صفت معمولاً -e می‌گیرد، اما در Plural با die معمولاً -en می‌آید.',
    },
    {
      id: 'adjektiv-bestimmt-akkusativ',
      titleDe: 'Adjektivdeklination: bestimmter Artikel im Akkusativ',
      titleFa: 'پایان صفت بعد از den/das/die در Akkusativ',
      explanationFa: 'در Akkusativ فقط اسم مذکر تغییر مهم دارد: der → den و صفت -en می‌گیرد. خنثی و مؤنث مثل Nominativ می‌مانند.',
      table: {
        headers: ['Artikel', 'پایان صفت', 'مثال'],
        rows: [
          ['den (مذکر)', '-en', 'den alten Dom'],
          ['das (خنثی)', '-e', 'das bekannte Museum'],
          ['die (مؤنث)', '-e', 'die neue Kamera'],
          ['die (Plural)', '-en', 'die netten Leute'],
        ],
      },
      examples: [
        { de: 'Ich finde den alten Dom schön.', fa: 'کلیسای قدیمی را زیبا می‌دانم.' },
        { de: 'Wir besichtigen das bekannte Museum.', fa: 'ما موزه‌ی معروف را بازدید می‌کنیم.' },
        { de: 'Ich habe die neue Kamera vergessen.', fa: 'دوربین جدید را فراموش کرده‌ام.' },
        { de: 'Wir treffen die netten Leute im Zentrum.', fa: 'آدم‌های مهربان را در مرکز شهر می‌بینیم.' },
      ],
      note: 'در Akkusativ مذکر بعد از den صفت -en می‌گیرد؛ Plural هم بعد از die معمولاً -en می‌گیرد.',
    },
    {
      id: 'adjektiv-bestimmt-dativ',
      titleDe: 'Adjektivdeklination im Dativ',
      titleFa: 'پایان صفت بعد از dem/der/den در Dativ',
      explanationFa: 'در Dativ بعد از Artikel معین (dem, der, den)، صفت تقریباً همیشه -en می‌گیرد — بدون استثنا برای جنس.',
      table: {
        headers: ['Artikel', 'پایان صفت', 'مثال'],
        rows: [
          ['dem (مذکر/خنثی)', '-en', 'mit dem netten Reiseführer'],
          ['der (مؤنث)', '-en', 'mit der neuen Kamera'],
          ['den (Plural)', '-en', 'mit den netten Leuten'],
        ],
      },
      examples: [
        { de: 'mit dem netten Reiseführer', fa: 'با راهنمای مهربان' },
        { de: 'mit der neuen Kamera', fa: 'با دوربین جدید' },
        { de: 'mit den freundlichen Touristen', fa: 'با توریست‌های مهربان' },
        { de: 'in der alten Kirche', fa: 'در کلیسای قدیمی' },
      ],
      note: 'در Dativ بعد از dem/der/den صفت همیشه -en می‌گیرد — ساده‌ترین حالت در بین سه‌گانه‌ی Nominativ، Akkusativ و Dativ.',
    },
    {
      id: 'nominativ-akkusativ-dativ',
      titleDe: 'Nominativ, Akkusativ oder Dativ?',
      titleFa: 'کدام حالت است و پایان صفت چیست؟',
      explanationFa: 'برای پیدا کردن پایان درست صفت، اول باید حالت جمله (Nominativ، Akkusativ یا Dativ) را تشخیص دهیم: فاعل جمله Nominativ، مفعول مستقیم Akkusativ و بعد از حروف اضافه مثل mit/in/auf معمولاً Dativ است.',
      examples: [
        { de: 'Der berühmte Dom ist sehr alt.', fa: 'کلیسای معروف خیلی قدیمی است. — Nominativ' },
        { de: 'Ich finde den berühmten Dom beeindruckend.', fa: 'کلیسای معروف را تأثیرگذار می‌دانم. — Akkusativ' },
        { de: 'Wir gehen mit dem netten Reiseführer durch die Stadt.', fa: 'با راهنمای مهربان در شهر می‌گردیم. — Dativ' },
        { de: 'Das bunte Fenster ist wirklich schön.', fa: 'پنجره‌ی رنگی واقعاً زیباست. — Nominativ' },
        { de: 'Ich fotografiere das bunte Fenster.', fa: 'از پنجره‌ی رنگی عکس می‌گیرم. — Akkusativ' },
      ],
      note: 'der در Nominativ → -e، den در Akkusativ مذکر → -en، dem/der/den در Dativ → -en، die Plural → -en.',
    },
  ],

  vocabulary: [
    {
      id: 'tourismus-wortschatz',
      titleFa: 'واژگان گردشگری',
      items: [
        { de: 'der Dom', fa: 'کلیسای بزرگ (کلیسای جامع)' },
        { de: 'die Sehenswürdigkeiten', fa: 'جاهای دیدنی' },
        { de: 'der Reiseführer', fa: 'راهنمای گردشگری (شخص یا کتاب)' },
        { de: 'die Unterkunft', fa: 'محل اقامت' },
        { de: 'der Rundgang', fa: 'قدم‌زنی / گردش شهری با برنامه' },
        { de: 'die Führung', fa: 'بازدید گروهی با راهنما' },
        { de: 'das Museum', fa: 'موزه' },
        { de: 'die Postkarte', fa: 'کارت‌پستال' },
        { de: 'der Prospekt', fa: 'بروشور' },
        { de: 'das Trinkgeld', fa: 'انعام' },
        { de: 'die Schifffahrt', fa: 'گردش با کشتی' },
        { de: 'der Platz', fa: 'میدان' },
      ],
    },
    {
      id: 'verben-tourismus',
      titleFa: 'فعل‌های مناسب گردشگری',
      items: [
        { de: 'besichtigen', fa: 'بازدید کردن' },
        { de: 'buchen', fa: 'رزرو کردن' },
        { de: 'wechseln (Geld)', fa: 'تبدیل کردن (پول)' },
        { de: 'geben (Trinkgeld)', fa: 'دادن (انعام)' },
        { de: 'mitmachen (eine Führung)', fa: 'شرکت کردن (در یک بازدید)' },
        { de: 'sich interessieren für', fa: 'به چیزی علاقه داشتن' },
        { de: 'lesen (einen Prospekt)', fa: 'خواندن (یک بروشور)' },
      ],
    },
    {
      id: 'adjektive-stadt',
      titleFa: 'صفت‌های شهر و گردشگری',
      items: [
        { de: 'schön ↔ hässlich', fa: 'زیبا ↔ زشت' },
        { de: 'freundlich ↔ unfreundlich', fa: 'مهربان ↔ بی‌ادب' },
        { de: 'geöffnet ↔ geschlossen', fa: 'باز ↔ بسته' },
        { de: 'interessant ↔ langweilig', fa: 'جالب ↔ خسته‌کننده' },
        { de: 'lang ↔ kurz', fa: 'طولانی ↔ کوتاه' },
        { de: 'modern ↔ alt / traditionell', fa: 'مدرن ↔ قدیمی / سنتی' },
        { de: 'teuer ↔ billig', fa: 'گران ↔ ارزان' },
        { de: 'berühmt', fa: 'معروف' },
        { de: 'bunt', fa: 'رنگارنگ' },
      ],
    },
  ],

  redemittel: [
    {
      titleFa: 'پیشنهاد دادن برای برنامه',
      phrases: [
        { de: 'Wollen wir zuerst …?', fa: 'اول … انجام بدهیم؟' },
        { de: 'Danach können wir …', fa: 'بعد از آن می‌توانیم …' },
        { de: 'Am Samstagabend könnten wir …', fa: 'شنبه شب می‌توانیم …' },
      ],
    },
    {
      titleFa: 'موافقت کردن',
      phrases: [
        { de: 'Das ist eine gute Idee.', fa: 'این ایده‌ی خوبی است.' },
        { de: 'Einverstanden.', fa: 'موافقم.' },
        { de: 'Ich bin auch dafür.', fa: 'من هم موافقم.' },
      ],
    },
    {
      titleFa: 'مخالفت کردن',
      phrases: [
        { de: 'Das können wir doch später machen.', fa: 'این را می‌توانیم بعداً انجام بدهیم.' },
        { de: 'Ich bin dagegen.', fa: 'من مخالفم.' },
        { de: 'Ich finde das nicht so gut.', fa: 'به نظرم این خیلی خوب نیست.' },
      ],
    },
  ],

  dialogues: [
    {
      id: 'dialog-besuch-planen',
      titleFa: 'مکالمه پیشنهاد برنامه برای مهمان',
      lines: [
        { speaker: 'A', de: 'Am Wochenende kommt mein Bruder zu Besuch. Was können wir machen?', fa: 'آخر هفته برادرم به دیدنم می‌آید. چه کار می‌توانیم بکنیم؟' },
        { speaker: 'B', de: 'Wollen wir zuerst den alten Dom besichtigen?', fa: 'اول کلیسای قدیمی را بازدید کنیم؟' },
        { speaker: 'A', de: 'Gute Idee. Der Dom ist wirklich sehenswert.', fa: 'ایده‌ی خوبی است. کلیسا واقعاً دیدنی است.' },
        { speaker: 'B', de: 'Danach können wir in ein kleines Café gehen.', fa: 'بعد از آن می‌توانیم به یک کافه‌ی کوچک برویم.' },
        { speaker: 'A', de: 'Einverstanden. Und am Abend?', fa: 'موافقم. و شب؟' },
        { speaker: 'B', de: 'Vielleicht gehen wir in einen schicken Club.', fa: 'شاید به یک کلاب شیک برویم.' },
        { speaker: 'A', de: 'Das gefällt ihm bestimmt.', fa: 'حتماً به او خوش می‌آید.' },
      ],
    },
    {
      id: 'dialog-hoeflich-ablehnen',
      titleFa: 'مکالمه مخالفت محترمانه',
      lines: [
        { speaker: 'A', de: 'Wollen wir ins Museum gehen?', fa: 'به موزه برویم؟' },
        { speaker: 'B', de: 'Muss das sein? Ich finde Museen ein bisschen langweilig.', fa: 'حتماً باید؟ موزه‌ها را کمی خسته‌کننده می‌دانم.' },
        { speaker: 'A', de: 'Okay. Was möchtest du lieber machen?', fa: 'باشه. ترجیح می‌دهی چه کار کنیم؟' },
        { speaker: 'B', de: 'Ich würde lieber eine Schifffahrt machen.', fa: 'ترجیح می‌دهم یک گردش با کشتی برویم.' },
        { speaker: 'A', de: 'Gute Idee. Danach können wir immer noch ins Museum gehen.', fa: 'ایده‌ی خوبی است. بعدش هم می‌توانیم باز به موزه برویم.' },
        { speaker: 'B', de: 'Einverstanden.', fa: 'موافقم.' },
      ],
    },
    {
      id: 'dialog-neue-stadt',
      titleFa: 'مکالمه در شهر جدید',
      lines: [
        { speaker: 'A', de: 'Was interessiert dich in einer fremden Stadt besonders?', fa: 'در یک شهر غریبه چه چیزی برایت جالب‌تر است؟' },
        { speaker: 'B', de: 'Ich interessiere mich für alte Kirchen und schöne Plätze. Und du?', fa: 'من به کلیساهای قدیمی و میدان‌های زیبا علاقه دارم. تو چطور؟' },
        { speaker: 'A', de: 'Ich mag moderne Museen und schicke Cafés.', fa: 'من موزه‌های مدرن و کافه‌های شیک را دوست دارم.' },
        { speaker: 'B', de: 'Dann machen wir zuerst einen Rundgang durch die Altstadt.', fa: 'پس اول یک قدم‌زنی در شهر قدیمی می‌رویم.' },
        { speaker: 'A', de: 'Ja, und danach gehen wir in ein Café.', fa: 'بله، و بعد از آن به یک کافه می‌رویم.' },
        { speaker: 'B', de: 'Super. Das wird bestimmt schön.', fa: 'عالی. حتماً قشنگ می‌شود.' },
      ],
    },
  ],

  sampleStory: {
    de: 'Liebe Mina, wir machen gerade Ferien in Köln. Gestern haben wir den berühmten Dom besichtigt. Danach haben wir eine Führung mitgemacht. Der Reiseführer hat uns viele interessante Informationen gegeben. Wir haben auch viele Sehenswürdigkeiten gesehen. Leider habe ich meine Kamera im Hotel vergessen. Jetzt habe ich fast kein Geld mehr, aber ich möchte dir trotzdem eine Postkarte schicken. Viele Grüße, Sara',
    fa: 'مینای عزیز، ما الان در کلن تعطیلات هستیم. دیروز کلیسای معروف را بازدید کردیم. بعد از آن در یک بازدید گروهی شرکت کردیم. راهنمای گردشگری اطلاعات جالب زیادی به ما داد. جاهای دیدنی زیادی هم دیدیم. متأسفانه دوربینم را در هتل جا گذاشتم. الان تقریباً پول ندارم، اما با این حال می‌خواهم برایت یک کارت‌پستال بفرستم. با احترام، سارا',
  },

  summaryClosingFa:
    'درس ۵ A2.1 درباره‌ی گردش در شهر، جاهای دیدنی و برنامه‌ریزی مشترک برای یک بازدید است. در این درس یاد گرفتیم پیشنهاد بدهیم (Wollen wir zuerst …؟)، موافقت یا مخالفت کنیم (Einverstanden. / Ich bin dagegen.) و یک Postkarte یا برنامه‌ی آخر هفته بنویسیم. مهم‌ترین بخش گرامر درس، پایان صفت بعد از Artikel معین der/das/die در Nominativ، Akkusativ و Dativ بود. این درس برای A2 خیلی مهم است، چون زبان‌آموز یاد می‌گیرد یک شهر را توصیف کند، برنامه‌ریزی کند و درباره‌ی آن بنویسد.',
  summaryTopics: [
    'واژگان گردشگری',
    'Adjektivdeklination im Nominativ',
    'Adjektivdeklination im Akkusativ',
    'Adjektivdeklination im Dativ',
    'پیشنهاد دادن و موافقت/مخالفت',
    'برنامه‌ریزی آخر هفته',
    'نوشتن Postkarte / E-Mail',
    'تلفظ sch / st / sp',
  ],
}
