'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import StarRating from '@/components/ui/StarRating'
import Reveal from '@/components/ui/Reveal'

const testimonials = [
  { name: 'سارا احمدی',   level: 'A1 → B1',      stars: 5, text: 'در ۸ ماه از صفر به B1 رسیدم. میلاد بهترین استادی هست که تا حالا دیدم.' },
  { name: 'علی رضایی',    level: 'B1 → C1',      stars: 5, text: 'TestDaF رو با نمره ۴ در هر چهار مهارت پاس کردم. ممنون میلاد جان!' },
  { name: 'مریم کریمی',   level: 'مبتدی → A2',   stars: 5, text: 'روش تدریسش خیلی واضح و قابل فهمه. به همه توصیه می‌کنم.' },
  { name: 'رضا محمدی',    level: 'A2 → B2',      stars: 5, text: 'خلاصه گرامر و جدول صرف فعل خیلی کامل بود. واقعاً عالی!' },
  { name: 'نیلوفر حسینی', level: 'A1 → A2',      stars: 5, text: 'محتوا کاملاً مناسب مبتدی‌هاست. دیالوگ‌های نمونه خیلی کمک کرد.' },
  { name: 'کاوه صادقی',   level: 'B2 → C1',      stars: 4, text: 'محتوای با کیفیتی داره. فایل‌های PDF درس هم خیلی مفید بودن.' },
]

function getVisible() {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  return 3
}

const SWIPE_THRESHOLD = 40

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(3) // SSR default = desktop
  const touchStartX = useRef(0)
  const touchDeltaX = useRef(0)

  useEffect(() => {
    const update = () => setVisible(getVisible())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = testimonials.length - visible

  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), [])
  const next = useCallback(() => setIndex((i) => Math.min(i + 1, maxIndex)), [maxIndex])

  // Clamp index when visible count changes (e.g. resize)
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, testimonials.length - visible)))
  }, [visible])

  const cardWidthPct = 100 / visible
  // Track is laid out LTR (dir="ltr" on wrapper); negative translateX advances right
  const translateX = -(index * cardWidthPct)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }
  const onTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }
  const onTouchEnd = () => {
    if (touchDeltaX.current <= -SWIPE_THRESHOLD) next()
    else if (touchDeltaX.current >= SWIPE_THRESHOLD) prev()
    touchDeltaX.current = 0
  }

  const ArrowLeft = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )
  const ArrowRight = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <Reveal className="flex items-end justify-between mb-10">
          <div>
            <div className="text-primary font-bold text-sm tracking-wide mb-1">نظرات زبان‌آموزان</div>
            <h2 className="section-title">چه می‌گویند؟</h2>
          </div>
          {/* Desktop arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={next}
              disabled={index >= maxIndex}
              aria-label="بعدی"
              className="w-10 h-10 rounded-xl border-2 border-line bg-white transition-all grid place-items-center
                         enabled:hover:border-primary enabled:hover:text-primary
                         disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={prev}
              disabled={index <= 0}
              aria-label="قبلی"
              className="w-10 h-10 rounded-xl border-2 border-line bg-white transition-all grid place-items-center
                         enabled:hover:border-primary enabled:hover:text-primary
                         disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight />
            </button>
          </div>
        </Reveal>

        {/* Clip window */}
        <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
          {/* Force LTR so translateX direction is predictable regardless of page RTL */}
          <div
            dir="ltr"
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-2.5 box-border"
                style={{ width: `${cardWidthPct}%` }}
              >
                {/* Card — fix height so all cards same height in a row */}
                <div className="bg-white border border-line rounded-3xl p-6 shadow-sm flex flex-col gap-4
                                hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full"
                     dir="rtl"
                >
                  <StarRating value={t.stars} />

                  <p className="text-sm text-ink-soft leading-relaxed flex-1">«{t.text}»</p>

                  <div className="flex items-center gap-3 pt-4 border-t border-line">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-gold
                                    grid place-items-center text-white font-black text-sm flex-shrink-0
                                    shadow-md shadow-primary/20">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-bold leading-tight">{t.name}</div>
                      <div className="text-xs text-ink-soft mt-0.5">{t.level}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots + mobile arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {/* Mobile prev */}
          <button
            onClick={next}
            disabled={index >= maxIndex}
            aria-label="بعدی"
            className="sm:hidden w-9 h-9 rounded-xl border-2 border-line bg-white transition-all grid place-items-center
                       enabled:hover:border-primary enabled:hover:text-primary
                       disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`صفحه ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-line hover:bg-ink-soft/40'
                }`}
              />
            ))}
          </div>

          {/* Mobile next */}
          <button
            onClick={prev}
            disabled={index <= 0}
            aria-label="قبلی"
            className="sm:hidden w-9 h-9 rounded-xl border-2 border-line bg-white transition-all grid place-items-center
                       enabled:hover:border-primary enabled:hover:text-primary
                       disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowRight />
          </button>
        </div>

      </div>
    </section>
  )
}
