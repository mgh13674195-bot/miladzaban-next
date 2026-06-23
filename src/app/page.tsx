import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import Reveal from '@/components/ui/Reveal'
import AmbientBackground from '@/components/ui/AmbientBackground'
import Hero from '@/components/home/Hero'
import CoursesSection from '@/components/home/CoursesSection'
import LearningPreviewSection from '@/components/home/LearningPreviewSection'
import BlogSection from '@/components/home/BlogSection'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import FaqSection from '@/components/home/FaqSection'

const features = [
  { icon: '🎬', title: 'ویدیوهای باکیفیت', desc: 'بیش از ۱۲۰ ساعت ویدیو آموزشی با زیرنویس فارسی.' },
  { icon: '✏️', title: 'تمرین تعاملی', desc: 'تمرین‌های چندگزینه‌ای، جای‌خالی و drag & drop.' },
  { icon: '📊', title: 'پیشرفت‌سنج هوشمند', desc: 'نمودار پیشرفت و آمار دقیق از هر درس و تمرین.' },
  { icon: '💬', title: 'جامعه زبان‌آموزان', desc: 'ارتباط با هزاران زبان‌آموز و پرسش از استاد.' },
]


const libraryFiles = [
  { name: 'لیست ۱۰۰۰ لغت پرکاربرد آلمانی', size: 'PDF · ۲.۴ مگابایت', icon: '📄' },
  { name: 'تمرین گرامر سطح A1–A2', size: 'PDF · ۱.۸ مگابایت', icon: '📝' },
  { name: 'عبارات ضروری زندگی در آلمان', size: 'PDF · ۳.۱ مگابایت', icon: '✈️' },
  { name: 'راهنمای آزمون Goethe B1', size: 'PDF · ۵.۶ مگابایت', icon: '🏆' },
]

export default function HomePage() {
  return (
    <div className="relative bg-[#fff9ed]">
      <AmbientBackground />
      <Navbar />
      <main className="pb-20 md:pb-0">

        <Hero />

        {/* Feature strip */}
        <section className="py-14 border-y border-line bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 90}>
                  <div className="flex flex-col items-center text-center gap-3 p-5 rounded-3xl border border-line hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-primary-light grid place-items-center text-2xl flex-shrink-0">{f.icon}</div>
                    <h3 className="font-black text-sm">{f.title}</h3>
                    <p className="text-xs text-ink-soft leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CoursesSection />

        <LearningPreviewSection />

        {/* Exam banners */}
        <section id="exam" className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal>
                <div className="rounded-3xl p-8 text-white relative overflow-hidden min-h-[200px] flex flex-col justify-end" style={{ background: 'linear-gradient(135deg, #0e9b6f 0%, #0b5c41 100%)' }}>
                  <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
                  <div className="absolute top-6 left-6 text-5xl opacity-30">🎓</div>
                  <div className="relative">
                    <span className="badge bg-white/20 text-white text-[11px] mb-3">آزمون بین‌المللی</span>
                    <h3 className="text-xl font-black mb-2">آمادگی TestDaF و Goethe</h3>
                    <p className="text-white/80 text-sm mb-4">دوره‌های تخصصی Schreiben و Sprechen با تصحیح شخصی.</p>
                    <Link href="/courses/b1" className="btn-gold btn-sm self-start">مشاهده دوره ←</Link>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="rounded-3xl p-8 text-white relative overflow-hidden min-h-[200px] flex flex-col justify-end" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)' }}>
                  <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
                  <div className="absolute top-6 left-6 text-5xl opacity-30">✈️</div>
                  <div className="relative">
                    <span className="badge bg-white/20 text-white text-[11px] mb-3">مهاجرت</span>
                    <h3 className="text-xl font-black mb-2">آلمانی برای مهاجرت</h3>
                    <p className="text-white/80 text-sm mb-4">عبارات ضروری برای زندگی، کار و تحصیل در آلمان.</p>
                    <Link href="/courses/b2" className="btn-gold btn-sm self-start">شروع کن ←</Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <BlogSection />

        <TestimonialsCarousel />

        {/* Library */}
        <section id="library" className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Reveal>
              <div className="bg-[#111] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/15 blur-3xl" />
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 items-center relative z-10">
                  <div>
                    <span className="badge bg-gold/20 text-gold border-gold/30 mb-4">رایگان</span>
                    <h2 className="text-2xl font-black mb-3">کتابخانه‌ی <span className="text-gold">میلاد</span></h2>
                    <p className="text-white/60 mb-6 text-sm leading-relaxed">منابع آموزشی رایگان — PDF، فایل‌های صوتی و راهنماهای آزمون.</p>
                    <Link href="#" className="btn-gold btn-sm">مشاهده کامل کتابخانه ←</Link>
                  </div>
                  <div className="space-y-3">
                    {libraryFiles.map((f) => (
                      <a key={f.name} href="#" className="flex items-center gap-3.5 bg-white/6 border border-white/10 p-4 rounded-2xl hover:bg-white/12 hover:-translate-x-1 transition-all group">
                        <div className="text-2xl flex-shrink-0">{f.icon}</div>
                        <div className="flex-1 min-w-0">
                          <b className="block text-sm truncate">{f.name}</b>
                          <small className="text-white/45 text-xs">{f.size}</small>
                        </div>
                        <span className="text-white/40 group-hover:text-white transition-colors text-sm">↓</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <FaqSection />

        {/* CTA */}
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <Reveal>
              <div className="text-5xl mb-4">🇩🇪</div>
              <h2 className="text-3xl font-black mb-3">آماده‌ای شروع کنی؟</h2>
              <p className="text-ink-soft mb-8">اولین درس رایگانه. بدون نیاز به کارت بانکی.</p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Link href="/courses/a1" className="btn-primary">شروع رایگان با A1</Link>
                <Link href="/signup" className="btn-ghost">ثبت‌نام رایگان</Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-ink-soft">
                {['ضمانت بازگشت وجه ۷ روزه', 'پشتیبانی مستقیم در پنل', '+۴۰۰۰ زبان‌آموز راضی'].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
