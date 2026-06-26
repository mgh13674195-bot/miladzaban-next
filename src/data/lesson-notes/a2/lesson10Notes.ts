import { LessonNotes } from '@/types/lessonNotes'

/**
 * A2.1 — Lektion 10: Gut, dass du reserviert hast (Restaurantbesuch,
 * bestellen, reklamieren, bezahlen, Konjunktion dass)
 * Structured from the lesson-notes source markdown. Independent educational
 * content — not a copy of any coursebook layout.
 */
export const lesson10Notes: LessonNotes = {
  lessonId: 10,
  topic: 'Im Restaurant',
  titleFa: 'رفتن به رستوران، سفارش دادن، شکایت کردن، حساب کردن، جمله‌های dass',

  summary: {
    introFa:
      'در این درس درباره‌ی رفتن به رستوران صحبت می‌کنیم: رزرو میز، سفارش غذا و نوشیدنی، درخواست مؤدبانه‌ی وسایل روی میز، شکایت کردن وقتی مشکلی پیش می‌آید، و در نهایت حساب کردن — باهم یا جدا. همچنین واژگان ظرف و وسایل سر میز (Besteck/Geschirr) و غذاهای رایج رستوران را یاد می‌گیریم. گرامر اصلی این درس حرف ربط dass است — وقتی dass به‌کار می‌رود، فعل صرف‌شده‌ی جمله‌ی فرعی به آخر جمله می‌رود.',
    goals: [
      'واژگان Besteck (قاشق، چنگال، چاقو) و Geschirr (بشقاب، لیوان، فنجان، قوری) را به‌کار ببرد.',
      'واژگان غذا و نوشیدنی مثل Steak, Schnitzel, Hähnchen, Pommes frites, Soße, Mineralwasser را بشناسد.',
      'با Ich hätte gern … و Ich nehme … غذا سفارش بدهد.',
      'با Nicht mit …, sondern mit … سفارش خود را دقیق‌تر کند.',
      'با Könnte ich … bekommen؟ چیزی را مؤدبانه درخواست کند.',
      'در صورت بروز مشکل، با Verzeihen Sie, aber … مؤدبانه شکایت کند.',
      'برای حساب کردن از Die Rechnung, bitte و Zusammen oder getrennt؟ استفاده کند.',
      'با dass جمله‌ی فرعی بسازد و فعل را به آخر جمله ببرد.',
      'نظر مثبت و منفی درباره‌ی یک رستوران را در یک متن گاست‌بوک بفهمد.',
      'درباره‌ی یک تجربه‌ی رستورانی با حداقل دو جمله‌ی dass بنویسد.',
    ],
  },

  keySentences: [
    {
      titleFa: 'سفارش دادن',
      sentences: [
        { de: 'Entschuldigung, wir würden gern bestellen.', fa: 'ببخشید، می‌خواهیم سفارش بدهیم.' },
        { de: 'Ich hätte gern ein Schnitzel mit Pommes frites.', fa: 'من یک شنیسل با سیب‌زمینی سرخ‌کرده می‌خواهم.' },
        { de: 'Ich nehme das Steak, aber nicht mit Salat, sondern mit Pommes.', fa: 'من استیک را برمی‌دارم، اما نه با سالاد، بلکه با سیب‌زمینی سرخ‌کرده.' },
      ],
    },
    {
      titleFa: 'شکایت و درخواست',
      sentences: [
        { de: 'Verzeihen Sie, aber die Suppe ist kalt.', fa: 'ببخشید، اما سوپ سرد است.' },
        { de: 'Das Messer ist nicht sauber. Könnte ich ein anderes bekommen?', fa: 'چاقو تمیز نیست. می‌توانم یکی دیگر داشته باشم؟' },
        { de: 'Ich bringe Ihnen sofort eine neue Suppe.', fa: 'من فوراً یک سوپ جدید برایتان می‌آورم.' },
      ],
    },
    {
      titleFa: 'حساب کردن',
      sentences: [
        { de: 'Die Rechnung, bitte.', fa: 'صورت‌حساب لطفاً.' },
        { de: 'Zusammen oder getrennt?', fa: 'باهم یا جدا؟' },
        { de: 'Hier bitte, stimmt so.', fa: 'بفرمایید، باقی‌اش برای شما.' },
      ],
    },
    {
      titleFa: 'جمله‌های dass',
      sentences: [
        { de: 'Ich finde, dass das Restaurant sehr gut ist.', fa: 'به نظرم این رستوران خیلی خوب است.' },
        { de: 'Gut, dass du reserviert hast.', fa: 'خوب شد که رزرو کردی.' },
        { de: 'Schade, dass es keine Pizza gibt.', fa: 'حیف که پیتزا وجود ندارد.' },
      ],
    },
  ],

  grammar: [
    {
      id: 'konjunktion-dass',
      titleDe: 'Konjunktion dass',
      titleFa: 'حرف ربط dass',
      explanationFa: 'dass یک حرف ربط است که یک جمله‌ی فرعی می‌سازد. بعد از dass فعل صرف‌شده‌ی جمله‌ی فرعی همیشه به آخر جمله می‌رود — مثل weil.',
      examples: [
        { de: 'Ich finde, dass das Restaurant sehr gut ist.', fa: 'به نظرم این رستوران خیلی خوب است.' },
        { de: 'Schade, dass es keine Pizza gibt.', fa: 'حیف که پیتزا وجود ندارد.' },
        { de: 'Gut, dass du reserviert hast.', fa: 'خوب شد که رزرو کردی.' },
        { de: 'Ich hoffe, dass der Kellner bald kommt.', fa: 'امیدوارم گارسون زود بیاید.' },
        { de: 'Ich denke, dass die Suppe zu kalt ist.', fa: 'فکر می‌کنم سوپ خیلی سرد است.' },
        { de: 'Kann es sein, dass das Messer nicht sauber ist?', fa: 'ممکن است چاقو تمیز نباشد؟' },
      ],
      note: 'فعل صرف‌شده بعد از dass همیشه آخر جمله می‌آید، حتی اگر جمله طولانی باشد. این دقیقاً مثل قانون weil است.',
    },
    {
      id: 'dass-mit-gefuehlsausdruecken',
      titleDe: 'Gut / Schön / Schade, dass …',
      titleFa: 'بیان احساس با dass',
      explanationFa: 'عبارت‌های کوتاه مثل Gut, dass …، Schön, dass … و Schade, dass … برای واکنش احساسی سریع نسبت به یک خبر یا وضعیت به‌کار می‌روند.',
      examples: [
        { de: 'Gut, dass du reserviert hast.', fa: 'خوب شد که رزرو کردی. — خوشحالی از یک خبر خوب' },
        { de: 'Schön, dass du gekommen bist.', fa: 'خوب شد که آمدی. — خوشحالی از حضور کسی' },
        { de: 'Schade, dass es keine Pizza gibt.', fa: 'حیف که پیتزا نیست. — ناراحتی از یک کمبود' },
      ],
      note: 'Gut و Schön هر دو احساس مثبت نشان می‌دهند؛ Schade احساس منفی یا تأسف را بیان می‌کند.',
    },
    {
      id: 'sondern-nach-negation',
      titleDe: 'nicht mit …, sondern mit …',
      titleFa: 'ساختار نه با …، بلکه با …',
      explanationFa: 'وقتی می‌خواهیم یک گزینه را رد کنیم و گزینه‌ی درست را معرفی کنیم، از nicht … sondern … استفاده می‌کنیم. sondern همیشه بعد از یک نفی (nicht) می‌آید.',
      examples: [
        { de: 'Ich nehme das Schnitzel, aber nicht mit Kartoffeln, sondern mit Pommes frites.', fa: 'من شنیسل را برمی‌دارم، اما نه با سیب‌زمینی، بلکه با سیب‌زمینی سرخ‌کرده.' },
        { de: 'Ich möchte den Salat, aber nicht mit Essig, sondern nur mit Öl.', fa: 'من سالاد می‌خواهم، اما نه با سرکه، بلکه فقط با روغن.' },
        { de: 'Ich möchte Tee, aber nicht mit Zucker, sondern mit Milch.', fa: 'من چای می‌خواهم، اما نه با شکر، بلکه با شیر.' },
      ],
      note: 'sondern فقط بعد از نفی (nicht) می‌آید — نه بعد از یک جمله‌ی مثبت. برای جمله‌های معمولی aber به‌کار می‌رود.',
    },
  ],

  vocabulary: [
    {
      id: 'besteck-geschirr',
      titleFa: 'وسایل سر میز (Besteck و Geschirr)',
      items: [
        { de: 'das Besteck', fa: 'قاشق‌چنگال (مجموعه)' },
        { de: 'das Geschirr', fa: 'ظرف‌ها / سرویس غذاخوری' },
        { de: 'der Löffel', fa: 'قاشق' },
        { de: 'die Gabel', fa: 'چنگال' },
        { de: 'das Messer', fa: 'چاقو' },
        { de: 'der Teller', fa: 'بشقاب' },
        { de: 'das Glas', fa: 'لیوان' },
        { de: 'die Tasse', fa: 'فنجان' },
        { de: 'die Kanne', fa: 'قوری / پارچ' },
        { de: 'die Serviette', fa: 'دستمال سفره' },
      ],
    },
    {
      id: 'gewuerze-zutaten',
      titleFa: 'ادویه و چاشنی روی میز',
      items: [
        { de: 'der Essig', fa: 'سرکه' },
        { de: 'das Öl', fa: 'روغن' },
        { de: 'das Salz', fa: 'نمک' },
        { de: 'der Pfeffer', fa: 'فلفل' },
        { de: 'der Zucker', fa: 'شکر' },
      ],
    },
    {
      id: 'speisen-getraenke',
      titleFa: 'غذاها و نوشیدنی‌ها',
      items: [
        { de: 'das Steak', fa: 'استیک' },
        { de: 'das Schnitzel', fa: 'شنیسل' },
        { de: 'das Hähnchen', fa: 'مرغ' },
        { de: 'die Pommes frites', fa: 'سیب‌زمینی سرخ‌کرده' },
        { de: 'die Soße', fa: 'سس' },
        { de: 'der Salat', fa: 'سالاد' },
        { de: 'das Mineralwasser', fa: 'آب معدنی' },
      ],
    },
    {
      id: 'restaurant-allgemein',
      titleFa: 'واژگان عمومی رستوران',
      items: [
        { de: 'reservieren', fa: 'رزرو کردن' },
        { de: 'bestellen', fa: 'سفارش دادن' },
        { de: 'die Rechnung', fa: 'صورت‌حساب' },
        { de: 'der Kellner / die Kellnerin', fa: 'گارسون' },
        { de: 'das Lokal', fa: 'رستوران / مکان' },
        { de: 'reklamieren', fa: 'شکایت کردن' },
      ],
    },
  ],

  redemittel: [
    {
      titleFa: 'سفارش دادن',
      phrases: [
        { de: 'Entschuldigung, wir würden gern bestellen.', fa: 'ببخشید، می‌خواهیم سفارش بدهیم.' },
        { de: 'Ich hätte gern …', fa: 'من … می‌خواهم.' },
        { de: 'Ich nehme …', fa: 'من … را برمی‌دارم.' },
        { de: 'Was kann ich Ihnen bringen?', fa: 'چه چیزی می‌توانم برایتان بیاورم؟' },
        { de: 'Bringen Sie mir bitte …', fa: 'لطفاً برای من … بیاورید.' },
        { de: 'Aber nicht mit …, sondern mit …', fa: 'اما نه با …، بلکه با …' },
      ],
    },
    {
      titleFa: 'شکایت کردن',
      phrases: [
        { de: 'Verzeihen Sie, aber die Suppe ist kalt.', fa: 'ببخشید، اما سوپ سرد است.' },
        { de: 'Der Salat war nicht frisch.', fa: 'سالاد تازه نبود.' },
        { de: 'Das Messer ist nicht sauber.', fa: 'چاقو تمیز نیست.' },
        { de: 'Könnte ich ein anderes bekommen?', fa: 'می‌توانم یکی دیگر داشته باشم؟' },
        { de: 'Das tut mir leid.', fa: 'متأسفم.' },
        { de: 'Ich bringe Ihnen sofort …', fa: 'فوراً … را برایتان می‌آورم.' },
        { de: 'Ich gebe es an die Küche weiter.', fa: 'به آشپزخانه اطلاع می‌دهم.' },
      ],
    },
    {
      titleFa: 'حساب کردن',
      phrases: [
        { de: 'Die Rechnung, bitte.', fa: 'صورت‌حساب لطفاً.' },
        { de: 'Wir würden gern zahlen.', fa: 'می‌خواهیم حساب کنیم.' },
        { de: 'Zusammen oder getrennt?', fa: 'باهم یا جدا؟' },
        { de: 'Getrennt, bitte.', fa: 'جدا لطفاً.' },
        { de: 'Das macht …', fa: 'جمعش می‌شود …' },
        { de: 'Hier bitte, stimmt so.', fa: 'بفرمایید، باقی‌اش برای شما.' },
      ],
    },
  ],

  dialogues: [
    {
      id: 'dialog-bestellen',
      titleFa: 'مکالمه سفارش دادن',
      lines: [
        { speaker: 'A', de: 'Entschuldigung, wir würden gern bestellen.', fa: 'ببخشید، می‌خواهیم سفارش بدهیم.' },
        { speaker: 'B', de: 'Einen Moment, bitte. Was kann ich Ihnen bringen?', fa: 'یک لحظه لطفاً. چه چیزی می‌توانم برایتان بیاورم؟' },
        { speaker: 'A', de: 'Ich hätte gern ein Schnitzel mit Pommes frites.', fa: 'من یک شنیسل با سیب‌زمینی سرخ‌کرده می‌خواهم.' },
        { speaker: 'B', de: 'Gern. Und was möchten Sie trinken?', fa: 'حتماً. و چه می‌خواهید بنوشید؟' },
        { speaker: 'A', de: 'Ein Mineralwasser, bitte.', fa: 'یک آب معدنی، لطفاً.' },
        { speaker: 'B', de: 'Sehr gern.', fa: 'با کمال میل.' },
      ],
    },
    {
      id: 'dialog-genau-bestellen',
      titleFa: 'مکالمه سفارش دقیق‌تر با sondern',
      lines: [
        { speaker: 'A', de: 'Was kann ich Ihnen bringen?', fa: 'چه چیزی می‌توانم برایتان بیاورم؟' },
        { speaker: 'B', de: 'Ich nehme das Steak. Aber nicht mit Salat, sondern mit Pommes frites.', fa: 'من استیک را برمی‌دارم. اما نه با سالاد، بلکه با سیب‌زمینی سرخ‌کرده.' },
        { speaker: 'A', de: 'Gern. Möchten Sie auch etwas trinken?', fa: 'حتماً. چیزی هم برای نوشیدن می‌خواهید؟' },
        { speaker: 'B', de: 'Ja, bringen Sie mir bitte ein kleines Bier.', fa: 'بله، لطفاً یک آبجوی کوچک برایم بیاورید.' },
        { speaker: 'A', de: 'Sofort.', fa: 'فوراً.' },
      ],
    },
    {
      id: 'dialog-reklamieren',
      titleFa: 'مکالمه شکایت مؤدبانه',
      lines: [
        { speaker: 'A', de: 'Verzeihen Sie, aber die Suppe ist kalt.', fa: 'ببخشید، اما سوپ سرد است.' },
        { speaker: 'B', de: 'Oh, das tut mir leid. Ich bringe Ihnen eine neue Suppe.', fa: 'اوه، متأسفم. یک سوپ جدید برایتان می‌آورم.' },
        { speaker: 'A', de: 'Danke. Und das Messer ist nicht sauber. Könnte ich ein anderes bekommen?', fa: 'متشکرم. و چاقو تمیز نیست. می‌توانم یکی دیگر داشته باشم؟' },
        { speaker: 'B', de: 'Natürlich. Einen Augenblick, bitte.', fa: 'حتماً. یک لحظه لطفاً.' },
      ],
    },
    {
      id: 'dialog-bezahlen',
      titleFa: 'مکالمه حساب کردن',
      lines: [
        { speaker: 'A', de: 'Die Rechnung, bitte.', fa: 'صورت‌حساب لطفاً.' },
        { speaker: 'B', de: 'Zusammen oder getrennt?', fa: 'باهم یا جدا؟' },
        { speaker: 'A', de: 'Getrennt, bitte.', fa: 'جدا لطفاً.' },
        { speaker: 'B', de: 'Das macht 18,90 Euro.', fa: 'جمعش می‌شود ۱۸.۹۰ یورو.' },
        { speaker: 'A', de: 'Hier bitte, stimmt so.', fa: 'بفرمایید، باقی‌اش برای شما.' },
        { speaker: 'B', de: 'Vielen Dank.', fa: 'بسیار متشکرم.' },
      ],
    },
  ],

  sampleStory: {
    de: 'Mein Restaurantbesuch. Gestern war ich mit meiner Freundin in einem italienischen Restaurant. Gut, dass sie reserviert hatte, denn das Lokal war sehr voll. Ich habe Pasta bestellt und sie hat Fisch genommen. Das Essen hat sehr gut geschmeckt, aber die Suppe war leider kalt. Deshalb haben wir reklamiert. Der Kellner war sehr freundlich und hat sofort eine neue Suppe gebracht. Am Ende haben wir getrennt gezahlt. Ich finde, dass das Restaurant gut ist, aber ein bisschen laut.',
    fa: 'بازدید من از رستوران. دیروز با دوست‌دخترم به یک رستوران ایتالیایی رفتم. خوب شد که او میز را رزرو کرده بود، چون رستوران خیلی پر بود. من پاستا سفارش دادم و او ماهی برداشت. غذا خیلی خوب بود، اما سوپ متأسفانه سرد بود. به همین دلیل شکایت کردیم. گارسون خیلی مهربان بود و فوراً یک سوپ جدید آورد. در آخر جدا حساب کردیم. به نظرم رستوران خوب است، اما کمی پرسروصدا.',
  },

  summaryClosingFa:
    'درس ۱۰ A2.1 درباره‌ی رفتن به رستوران، سفارش دادن، شکایت کردن و حساب کردن است. در این درس واژگان مهم Besteck/Geschirr و غذاهای رایج رستوران مثل Steak, Schnitzel, Pommes frites را یاد گرفتیم. گرامر اصلی این درس حرف ربط dass بود — بعد از dass فعل صرف‌شده‌ی جمله‌ی فرعی به آخر جمله می‌رود، دقیقاً مثل weil. همچنین یاد گرفتیم با Ich hätte gern و nicht mit …, sondern mit … سفارش بدهیم، با Verzeihen Sie, aber … مؤدبانه شکایت کنیم، و با Zusammen oder getrennt؟ حساب کنیم.',
  summaryTopics: [
    'واژگان Besteck und Geschirr',
    'غذاها و نوشیدنی‌های رستوران',
    'Konjunktion dass — فعل آخر جمله',
    'Gut / Schön / Schade, dass …',
    'nicht mit …, sondern mit …',
    'سفارش دادن مؤدبانه',
    'شکایت کردن در رستوران',
    'درخواست کردن با Könnte ich …؟',
    'حساب کردن — Zusammen oder getrennt؟',
    'نوشتن درباره‌ی یک Restaurantbesuch',
  ],
}
