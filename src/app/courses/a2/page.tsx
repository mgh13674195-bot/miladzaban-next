import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import A2LessonCard from '@/components/a2/A2LessonCard'
import { a2Lessons, a2Part1, a2Part2 } from '@/data/a2Lessons'

const freeLessons = a2Lessons.filter((l) => l.free).length

export default function A2CoursePage() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">

        {/* Hero */}
        <section className="relative overflow-hidden pt-8 pb-12 bg-cream gradient-mesh">
          <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gold/25 blur-3xl" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/courses" className="text-ink-soft hover:text-primary text-sm transition">دوره‌ها</Link>
              <span className="text-ink-soft/40">/</span>
              <span className="text-sm font-bold">A2</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge badge-gold text-sm px-3 py-1">A2</span>
                  <span className="badge badge-green text-xs">پیش‌متوسطه</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-black mb-3">
                  دوره جامع زبان آلمانی<br />سطح <span className="text-primary">A2</span>
                </h1>
                <p className="text-ink-soft mb-6 max-w-xl leading-relaxed">
                  ۲۴ درس کامل در دو پارت A2.1 و A2.2 — از خانواده و زندگی روزمره تا آمادگی برای آزمون‌های TestDaF.
                  شامل ویدیو، فایل PDF، صوتی و تمرین.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: '📚', val: '۲۴', lbl: 'درس' },
                    { icon: '⏱️', val: '۲۰+ ساعت', lbl: 'محتوا' },
                    { icon: '🎬', val: '۲۴', lbl: 'ویدیو' },
                    { icon: '🆓', val: `${freeLessons} درس`, lbl: 'رایگان' },
                  ].map((s) => (
                    <div key={s.lbl} className="bg-white/80 border border-line rounded-2xl px-4 py-3 text-center min-w-[90px]">
                      <div className="text-xl mb-0.5">{s.icon}</div>
                      <div className="font-black text-sm">{s.val}</div>
                      <div className="text-[11px] text-ink-soft">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buy card */}
              <div className="card p-6 shadow-xl">
                <div className="text-center mb-5">
                  <p className="text-3xl font-black text-primary">۹۹۷,۰۰۰</p>
                  <p className="text-ink-soft text-sm">تومان — دسترسی مادام‌العمر</p>
                </div>
                <div className="space-y-3 mb-5 text-sm">
                  {[
                    '✅ ۲۴ ویدیوی آموزشی',
                    '✅ فایل PDF هر درس',
                    '✅ فایل صوتی مکالمه',
                    '✅ تمرین‌های تعاملی',
                    '✅ گواهینامه دیجیتال',
                    '✅ دسترسی مادام‌العمر',
                  ].map((f) => <p key={f}>{f}</p>)}
                </div>
                <Link href="/signup" className="btn-primary w-full justify-center mb-3">خرید دوره</Link>
                <Link href="/courses/a2/lessons/1" className="btn-ghost w-full justify-center text-sm">
                  شروع رایگان (درس ۱)
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons */}
        <section className="py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">

            {/* A2.1 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-primary text-white grid place-items-center font-black text-sm flex-shrink-0">
                  A2.1
                </div>
                <div>
                  <h2 className="font-black text-lg">پارت اول — A2.1</h2>
                  <p className="text-ink-soft text-sm">{a2Part1.length} درس · زندگی روزمره، خانه، کار</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {a2Part1.map((lesson) => (
                  <A2LessonCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            </div>

            {/* A2.2 */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-gold text-ink grid place-items-center font-black text-sm flex-shrink-0">
                  A2.2
                </div>
                <div>
                  <h2 className="font-black text-lg">پارت دوم — A2.2</h2>
                  <p className="text-ink-soft text-sm">{a2Part2.length} درس · آب‌وهوا، مسافرت، TestDaF</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {a2Part2.map((lesson) => (
                  <A2LessonCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
