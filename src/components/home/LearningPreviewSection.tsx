import Reveal from '@/components/ui/Reveal'

const features = [
  {
    icon: '🎬',
    title: 'ویدیوهای آموزشی گام‌به‌گام',
    desc: 'هر درس با ویدیوی کامل، زیرنویس فارسی و توضیح گرامری همراه است — متناسب با سرعت یادگیری بزرگسالان.',
  },
  {
    icon: '📄',
    title: 'فایل PDF خلاصه هر درس',
    desc: 'جدول لغات، نکات گرامری و تمرین‌های هر درس به‌صورت PDF قابل دانلود و مرور مجدد.',
  },
  {
    icon: '🎧',
    title: 'فایل صوتی برای تلفظ صحیح',
    desc: 'گفت‌وگوهای نمونه با تلفظ بومی، برای تقویت مهارت شنیداری در کنار مطالعه.',
  },
  {
    icon: '✏️',
    title: 'تمرین تعاملی پس از هر درس',
    desc: 'سوالات چندگزینه‌ای و تمرین جای‌خالی برای تثبیت آموخته‌ها، قبل از رفتن به درس بعد.',
  },
]

export default function LearningPreviewSection() {
  return (
    <section className="py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="mb-12 sm:mb-16 max-w-2xl">
          <div className="eyebrow">ساختار هر درس</div>
          <h2 className="section-title mb-3">یک تجربه یادگیری کامل، نه فقط یک ویدیو</h2>
          <p className="section-subtitle !mx-0">
            هر درس از چهار بخش تشکیل شده تا یادگیری شما عمیق و پایدار باشد.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          {/* Feature list */}
          <div className="space-y-5 order-2 lg:order-1">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 90}>
                <div className="flex gap-4 p-5 rounded-3xl border border-line bg-white hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-primary-light grid place-items-center text-2xl flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-base mb-1">{f.title}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Sticky visual panel — desktop only; mobile just stacks above */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-28">
            <Reveal delay={120}>
              <div className="glass-card p-6 sm:p-8 shadow-xl shadow-primary/10 relative overflow-hidden">
                <div className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 rounded-full bg-gold/15 blur-3xl" />

                {/* Mock lesson screen */}
                <div className="rounded-2xl bg-ink overflow-hidden mb-5 aspect-video relative">
                  <div className="absolute inset-0 gradient-mesh-dark" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm grid place-items-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 badge bg-white/15 text-white text-[11px]">۴۵ دقیقه</span>
                </div>

                <div className="space-y-2.5">
                  <div className="h-2.5 rounded-full bg-line w-full" />
                  <div className="h-2.5 rounded-full bg-line w-4/5" />
                  <div className="h-2.5 rounded-full bg-line w-3/5" />
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  {['📄', '🎧', '✏️'].map((icon) => (
                    <div key={icon} className="bg-cream rounded-2xl py-4 text-center text-2xl">{icon}</div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
