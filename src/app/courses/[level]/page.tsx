import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import LessonList from '@/components/courses/LessonList'
import { courses } from '@/data/courses'

interface Props { params: { level: string } }

export function generateStaticParams() {
  return courses.map((c) => ({ level: c.id }))
}

export default function CoursePage({ params }: Props) {
  const course = courses.find((c) => c.id === params.level)
  if (!course) notFound()

  const hasLessons = course.lessons.length > 0
  const lessonCount = course.lessons.length
  const freeLessons = course.lessons.filter((l) => l.free).length

  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">

        {/* Hero */}
        <div className="text-white relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${course.gradient[0]} 0%, ${course.gradient[1]} 60%, #111 100%)` }}>
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 text-[200px] font-black leading-none select-none">{course.level}</div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14">
            <div className="flex items-start gap-6 flex-wrap">
              <div
                className="w-20 h-20 rounded-[22px] grid place-items-center font-black text-3xl flex-shrink-0 shadow-2xl"
                style={{ background: 'rgba(255,255,255,.15)', backdropFilter: 'blur(10px)', border: '1.5px solid rgba(255,255,255,.25)' }}
              >
                {course.level}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge bg-white/20 text-white border-white/20 text-xs">{course.label}</span>
                  <span className="badge bg-gold/25 text-gold border-gold/30 text-xs">{course.discount} تخفیف</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black mb-2">{course.title}</h1>
                <p className="text-white/70 mb-5 max-w-lg">{course.description}</p>
                <div className="flex flex-wrap gap-5 text-sm text-white/75">
                  <span className="flex items-center gap-1.5">📚 {hasLessons ? `${lessonCount} درس` : 'به‌زودی'}</span>
                  <span className="flex items-center gap-1.5">⏱ ۳۶ ساعت</span>
                  {hasLessons && <span className="flex items-center gap-1.5">🎁 {freeLessons} درس رایگان</span>}
                  <span className="flex items-center gap-1.5">♾️ دسترسی دائمی</span>
                </div>
              </div>

              {/* Buy card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex-shrink-0 w-full sm:w-64 text-center">
                {hasLessons ? (
                  <>
                    <div className="text-white/50 text-sm line-through mb-0.5">{course.originalPrice} تومان</div>
                    <div className="text-3xl font-black text-gold leading-none">{course.price}</div>
                    <div className="text-white/60 text-xs mt-0.5 mb-5">تومان</div>
                    <button className="btn-gold w-full justify-center text-sm mb-2">خرید دوره 🎓</button>
                    <Link href={`/courses/${course.id}/lessons/${course.lessons[0].id}`} className="text-white/60 text-xs hover:text-white transition-colors">
                      یا شروع رایگان ←
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="text-lg font-black text-white mb-1">به‌زودی</div>
                    <p className="text-white/60 text-xs mb-5">محتوای این سطح در حال آماده‌سازی است.</p>
                    <button type="button" disabled title="به‌زودی" className="btn-gold w-full justify-center text-sm opacity-50 cursor-not-allowed">
                      به‌زودی
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Progress bar placeholder */}
            {hasLessons && (
              <div className="mt-8 max-w-sm">
                <div className="flex justify-between text-xs text-white/50 mb-1.5"><span>پیشرفت شما</span><span>۸٪</span></div>
                <div className="h-1.5 bg-white/15 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-l from-gold to-primary rounded-full" style={{ width: '8%' }} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Lessons */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">

            {/* Left — lesson list */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-black">📋 سرفصل دوره</h2>
                {hasLessons && <span className="text-xs text-ink-soft">{freeLessons} درس رایگان</span>}
              </div>
              <LessonList courseId={course.id} lessons={course.lessons} />
            </div>

            {/* Right — course info */}
            <div className="space-y-5">
              <div className="card p-5">
                <h3 className="font-black text-sm mb-4">این دوره شامل چیست؟</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    { icon: '🎬', text: hasLessons ? `${lessonCount} ویدیوی آموزشی` : 'ویدیوهای آموزشی (به‌زودی)' },
                    { icon: '✏️', text: 'تمرین‌های تعاملی هر درس' },
                    { icon: '📄', text: 'فایل‌های PDF قابل دانلود' },
                    { icon: '💬', text: 'دیالوگ‌های صوتی نمونه' },
                    { icon: '🧩', text: 'تمرین گرامر کامل' },
                    { icon: '♾️', text: 'دسترسی دائمی بعد از خرید' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-2.5 text-ink-soft">
                      <span className="text-base">{item.icon}</span>{item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-5">
                <h3 className="font-black text-sm mb-3">مناسب برای</h3>
                <ul className="space-y-2 text-sm text-ink-soft">
                  {['کسانی که از صفر شروع می‌کنند', 'زبان‌آموزانی که می‌خواهند مهاجرت کنند', 'دانشجویان آزمون Goethe / TestDaF'].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5 flex-shrink-0">✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-3xl p-5 text-center">
                <div className="text-3xl mb-2">🎓</div>
                {hasLessons ? (
                  <>
                    <h3 className="font-black mb-1">آماده خرید؟</h3>
                    <p className="text-xs text-white/70 mb-4">ضمانت بازگشت وجه ۷ روزه</p>
                    <button className="btn-gold w-full justify-center text-sm">خرید دوره — {course.price} تومان</button>
                  </>
                ) : (
                  <>
                    <h3 className="font-black mb-1">به‌زودی</h3>
                    <p className="text-xs text-white/70 mb-4">این سطح هنوز برای خرید آماده نیست.</p>
                    <button type="button" disabled title="به‌زودی" className="btn-gold w-full justify-center text-sm opacity-50 cursor-not-allowed">
                      به‌زودی
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
