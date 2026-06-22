import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { courses } from '@/data/courses'

const recentActivity = [
  { icon: '✅', text: 'درس ۱: معرفی خود را تکمیل کردی', time: '۲ ساعت پیش', course: 'A1' },
  { icon: '🏆', text: 'آزمون درس ۱ با نمره ۹۰٪ پاس شد', time: 'دیروز', course: 'A1' },
  { icon: '🔖', text: 'درس ۲: اعداد و سن را شروع کردی', time: '۳ روز پیش', course: 'A1' },
]

const activeCourses = [
  { id: 'a1', title: 'آلمانی مبتدی مطلق', level: 'A1', progress: 8, total: 24, gradient: ['#1a1a1a', '#333'] },
]

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

          {/* Welcome */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-black mb-1">👋 سلام، علی!</h1>
              <p className="text-sm text-ink-soft">به یادگیریت ادامه بده — امروز ۲۰ دقیقه تمرین کن.</p>
            </div>
            <Link href="/profile" className="btn-ghost btn-sm flex-shrink-0">ویرایش پروفایل</Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: '🎬', label: 'درس‌های تکمیل‌شده', value: '۸' },
              { icon: '⏱', label: 'ساعت مطالعه', value: '۶.۵' },
              { icon: '🏆', label: 'میانگین نمره', value: '۸۷٪' },
              { icon: '🔥', label: 'روز‌های متوالی', value: '۵' },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <div className="text-2xl">{s.icon}</div>
                <div className="text-2xl font-black text-primary leading-none">{s.value}</div>
                <div className="text-xs text-ink-soft">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
            {/* Main */}
            <div className="space-y-6">
              {/* Active courses */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-black text-base">دوره‌های فعال</h2>
                  <Link href="/courses" className="text-xs text-primary font-bold hover:underline">+ افزودن دوره</Link>
                </div>
                {activeCourses.map((c) => (
                  <div key={c.id} className="border border-line rounded-2xl p-5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl grid place-items-center font-black text-white text-lg flex-shrink-0" style={{ background: `linear-gradient(135deg, ${c.gradient[0]}, ${c.gradient[1]})` }}>
                        {c.level}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm">{c.title}</h3>
                        <p className="text-xs text-ink-soft">{c.progress} از {c.total} درس</p>
                      </div>
                      <Link href={`/courses/${c.id}/lessons/${c.progress + 1}`} className="btn-primary btn-sm text-xs">
                        ادامه ←
                      </Link>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${(c.progress / c.total) * 100}%` }} />
                    </div>
                    <div className="flex justify-between text-xs text-ink-soft mt-2">
                      <span>{Math.round((c.progress / c.total) * 100)}٪ تکمیل</span>
                      <span>{c.total - c.progress} درس مانده</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent activity */}
              <div className="card p-6">
                <h2 className="font-black text-base mb-5">فعالیت اخیر</h2>
                <div className="space-y-4">
                  {recentActivity.map((a, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-cream grid place-items-center text-base flex-shrink-0">{a.icon}</div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">{a.text}</p>
                        <p className="text-xs text-ink-soft">{a.time}</p>
                      </div>
                      <span className="badge-gray text-[10px]">{a.course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Profile card */}
              <div className="card p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-gold grid place-items-center text-white font-black text-2xl mx-auto mb-3">ع</div>
                <h3 className="font-black">علی رضایی</h3>
                <p className="text-xs text-ink-soft mb-4">ali@example.com</p>
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="bg-cream rounded-xl p-2">
                    <div className="font-black text-primary">A1</div>
                    <div className="text-ink-soft">سطح فعلی</div>
                  </div>
                  <div className="bg-cream rounded-xl p-2">
                    <div className="font-black text-primary">۵ ⭐</div>
                    <div className="text-ink-soft">امتیاز</div>
                  </div>
                </div>
              </div>

              {/* Weekly goal */}
              <div className="card p-6">
                <h3 className="font-black text-sm mb-4">هدف هفتگی</h3>
                <div className="flex justify-between text-xs text-ink-soft mb-2">
                  <span>۳ درس از ۵</span>
                  <span>۶۰٪</span>
                </div>
                <div className="progress-bar mb-4">
                  <div className="progress-fill" style={{ width: '60%' }} />
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {['ش','ی','د','س','چ','پ','ج'].map((d, i) => (
                    <div key={d} className={`h-8 rounded-lg grid place-items-center text-[10px] font-bold
                      ${i < 4 ? 'bg-primary text-white' : 'bg-cream text-ink-soft'}`}>
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended */}
              <div className="card p-5">
                <h3 className="font-black text-sm mb-3">پیشنهادی بعدی</h3>
                <Link href="/courses/a1/lessons/2" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-ink grid place-items-center text-white text-xs font-black flex-shrink-0">۲</div>
                  <div className="flex-1">
                    <p className="text-sm font-bold group-hover:text-primary transition-colors">درس ۲: اعداد و سن</p>
                    <p className="text-xs text-ink-soft">۴۰ دقیقه · A1</p>
                  </div>
                  <svg className="w-4 h-4 text-ink-soft group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
