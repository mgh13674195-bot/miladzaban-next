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

const levels = ['A1','A2','B1','B2','C1']

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20">
      {/* Layered champagne/brass-gold gradient blobs — soft, elegant, not neon */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E8D3A0]/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full bg-[#B88A2E]/18 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[#FFF9ED]/55 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <CinematicScroll>
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 items-center">

          {/* Left copy */}
          <div>
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
                  <span className="absolute -bottom-1 inset-x-0 h-3 bg-[#E8D3A0]/45 -z-10 rounded-full" />
                </span>
                <br />
                <span className="text-ink">با میلاد قاسمی</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="lead-text mb-8 max-w-[500px]">
                از سطح A1 تا C1 به‌صورت کاملاً اصولی، همراه با آمادگی تخصصی آزمون‌های TestDaF و Goethe — از صفر تا مهاجرت.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap gap-3 mb-5">
                <Link href="/courses" className="btn-dark text-sm">
                  مشاهده همه دوره‌ها
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </Link>
                <Link href="/courses/a1" className="btn-gold text-sm">شروع رایگان A1</Link>
              </div>
            </Reveal>

            {/* Trust signals */}
            <Reveal delay={380}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-xs font-semibold text-ink-soft">
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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

          {/* Right card */}
          <Reveal delay={150} className="relative">
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 z-10 bg-gold text-white text-xs font-black px-4 py-2 rounded-2xl shadow-lg shadow-gold/40 -rotate-3 select-none float-slow motion-reduce:animate-none">
              🇩🇪 Deutsch lernen
            </div>

            <div className="glass-card p-7 shadow-[0_25px_60px_-12px_rgba(184,138,46,0.18)] relative">
              {/* Teacher profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
                    <defs><clipPath id="rc"><rect width="64" height="64" rx="16" /></clipPath></defs>
                    <g clipPath="url(#rc)">
                      <rect width="64" height="21.3" y="0" fill="#24201A" />
                      <rect width="64" height="21.3" y="21.3" fill="#8A2D2B" />
                      <rect width="64" height="21.4" y="42.6" fill="#B88A2E" />
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-lg">میلاد قاسمی</h3>
                  <p className="text-[#7A5A19] text-sm font-semibold">مدرس زبان آلمانی</p>
                  <div className="flex items-center gap-1 mt-1">
                    {'★★★★★'.split('').map((s, i) => (
                      <span key={i} className="text-gold text-xs">{s}</span>
                    ))}
                    <span className="text-xs text-ink-soft mr-1">۴.۹</span>
                  </div>
                </div>
              </div>

              {/* Level path */}
              <div className="bg-cream rounded-2xl p-4 mb-5">
                <p className="text-xs font-bold text-ink-soft mb-3">مسیر یادگیری شما</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {levels.map((lv, i) => (
                    <div key={lv} className="flex items-center gap-2">
                      <Link
                        href={`/courses/${lv.toLowerCase()}`}
                        className={`px-3 py-1.5 rounded-xl text-xs font-black border-2 transition-all hover:scale-105
                          ${lv === 'A1'
                            ? 'bg-[#B88A2E] text-white border-[#B88A2E] shadow-md shadow-[#B88A2E]/30'
                            : 'bg-white text-ink-soft border-line hover:border-[#B88A2E] hover:text-[#7A5A19]'}`}
                      >
                        {lv}
                      </Link>
                      {i < levels.length - 1 && (
                        <svg className="w-3 h-3 text-ink-soft/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: '🎬', value: 120, suffix: '+', lbl: 'ویدیو' },
                  { icon: '📝', value: 48, suffix: '+', lbl: 'تمرین' },
                  { icon: '🏆', value: 24, suffix: '', lbl: 'درس' },
                ].map((m) => (
                  <div key={m.lbl} className="bg-cream rounded-2xl p-3 text-center">
                    <div className="text-xl mb-1">{m.icon}</div>
                    <AnimatedCounter
                      value={m.value}
                      suffix={m.suffix ?? ''}
                      className="text-sm font-black"
                    />
                    <div className="text-[11px] text-ink-soft">{m.lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating comment bubble — hidden on mobile to avoid overflow outside stacked layout */}
            <div className="hidden lg:block absolute -bottom-4 -left-4 bg-white border border-line rounded-2xl px-4 py-3 shadow-lg max-w-[200px] float-slow-delay motion-reduce:animate-none">
              <p className="text-xs font-semibold text-ink leading-relaxed">«بهترین دوره‌ای که تا حالا دیدم 🙌»</p>
              <p className="text-[10px] text-ink-soft mt-1">— سارا احمدی</p>
            </div>
          </Reveal>

        </div>
        </CinematicScroll>
      </div>
    </section>
  )
}
