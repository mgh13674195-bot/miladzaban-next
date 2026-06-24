import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import CinematicScroll from '@/components/ui/CinematicScroll'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

interface StatItem {
  value: number
  lbl: string
  prefix?: string
  decimals?: number
}

const stats: StatItem[] = [
  { value: 4000, prefix: '+', lbl: 'زبان‌آموز فعال' },
  { value: 6, lbl: 'سطح A1 تا C1' },
  { value: 4.9, decimals: 1, lbl: 'رضایت کاربران' },
  { value: 120, prefix: '+', lbl: 'ساعت محتوا' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20">
      {/* Layered champagne/brass-gold gradient blobs — soft, elegant, not neon */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E8D3A0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full bg-[#B88A2E]/18 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[#FFF9ED]/55 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <CinematicScroll>
        <div className="grid grid-cols-1 items-center">

          {/* Left copy */}
          <div className="w-full max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-bold text-ink-soft shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#8A2D2B] animate-pulse" />
                دوره‌های جدید A2 و B1 منتشر شد
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="display-title mb-5">
                <span className="text-ink">آموزش زبان</span>{' '}
                <span className="relative text-[#7A5A19] inline-block">
                  آلمانی
                  <span className="absolute -bottom-1 inset-x-0 h-2 bg-[#E8D3A0]/40 -z-10 rounded-full" />
                </span>
                <br />
                <span className="text-ink">با میلاد قاسمی</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="lead-text mb-8 max-w-[560px] mx-auto">
                از سطح A1 تا C1 به‌صورت کاملاً اصولی، همراه با آمادگی تخصصی آزمون‌های TestDaF و Goethe — از صفر تا مهاجرت.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap justify-center gap-3 mb-5">
                <Link href="/courses" className="btn-dark text-sm">
                  مشاهده همه دوره‌ها
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </Link>
                <Link href="/courses/a1" className="btn-gold text-sm">شروع رایگان A1</Link>
              </div>
            </Reveal>

            {/* Trust signals */}
            <Reveal delay={380}>
              <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 mb-8 text-xs font-semibold text-ink-soft">
                {['بدون نیاز به کارت بانکی', 'ضمانت بازگشت وجه ۷ روزه', 'گواهینامه پایان دوره'].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#7A5A19] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {stats.map((s, i) => (
                <Reveal key={s.lbl} delay={440 + i * 70}>
                  <div className="glass-card px-4 py-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(184,138,46,0.25)]">
                    <AnimatedCounter
                      value={s.value}
                      decimals={s.decimals ?? 0}
                      prefix={s.prefix ?? ''}
                      className="text-2xl font-black text-[#15130F] leading-none"
                    />
                    <div className="text-xs text-ink-soft mt-1">{s.lbl}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Future teacher photo / hero image will go here */}

        </div>
        </CinematicScroll>
      </div>
    </section>
  )
}
