import Reveal from '@/components/ui/Reveal'

const faqs = [
  {
    q: 'آیا برای شروع باید دانش قبلی از زبان آلمانی داشته باشم؟',
    a: 'نه. دوره A1 از مطلق صفر شروع می‌شود؛ الفبا، تلفظ و اولین جملات. کافی است درس اول را رایگان امتحان کنید.',
  },
  {
    q: 'دوره‌ها چه مدت در دسترس هستند؟',
    a: 'تمام دوره‌های خریداری‌شده دسترسی مادام‌العمر دارند؛ می‌توانید با سرعت خودتان و هر زمان که خواستید مرور کنید.',
  },
  {
    q: 'آیا محتوا برای آمادگی آزمون‌های TestDaF و Goethe هم مناسب است؟',
    a: 'بله. از سطح B1 به بعد، بخش‌های اختصاصی آمادگی آزمون شامل تمرین Schreiben، Sprechen و نمونه‌سوالات واقعی ارائه می‌شود.',
  },
  {
    q: 'اگر دوره مناسب من نبود، امکان بازگشت وجه هست؟',
    a: 'بله، تا ۷ روز پس از خرید، در صورت عدم رضایت، مبلغ به‌طور کامل بازگردانده می‌شود — بدون پرسش اضافه.',
  },
]

export default function FaqSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12">
          <div className="eyebrow justify-center">سوالات پرتکرار</div>
          <h2 className="section-title">هر چیزی که باید بدانید</h2>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 80}>
              <details className="group card overflow-hidden">
                <summary className="flex items-center justify-between gap-3 p-5 cursor-pointer select-none list-none">
                  <span className="font-bold text-sm sm:text-base">{item.q}</span>
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 group-open:rotate-45"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="px-5 pb-5 text-sm text-ink-soft leading-relaxed">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
