'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CourseCard from '@/components/course/CourseCard'
import { courses } from '@/data/courses'

const levels = ['همه', 'A1', 'A2', 'B1', 'B2', 'C1']

export default function CoursesPage() {
  const [activeLevel, setActiveLevel] = useState('همه')

  const filteredCourses =
    activeLevel === 'همه' ? courses : courses.filter((c) => c.level === activeLevel)

  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <div className="badge bg-gold/20 text-gold border-gold/30 mb-4">۵ دوره آموزشی</div>
              <h1 className="text-3xl sm:text-4xl font-black mb-3">دوره‌های آموزش آلمانی</h1>
              <p className="text-white/65 leading-relaxed">
                مسیر کامل از A1 تا C1 — هر دوره با ویدیو، تمرین، دیالوگ و آزمون‌های تعاملی.
              </p>
            </div>
          </div>
        </div>

        {/* Level pills */}
        <div className="sticky top-16 z-30 bg-cream/90 backdrop-blur-xl border-b border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto scrollbar-none">
            {levels.map((lv) => (
              <button
                key={lv}
                type="button"
                onClick={() => setActiveLevel(lv)}
                aria-pressed={activeLevel === lv}
                className={`px-4 py-1.5 rounded-full text-sm font-bold cursor-pointer whitespace-nowrap transition-all
                  ${activeLevel === lv ? 'bg-primary text-white shadow-md shadow-primary/25' : 'bg-white border border-line text-ink-soft hover:border-primary hover:text-primary'}`}
              >
                {lv}
              </button>
            ))}
          </div>
        </div>

        {/* Featured A1 */}
        {activeLevel === 'همه' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <div className="mb-4 flex items-center gap-2">
              <span className="badge-red">محبوب‌ترین</span>
              <h2 className="font-black text-lg">دوره پرطرفدار</h2>
            </div>
            <CourseCard course={courses[0]} featured />
          </div>
        )}

        {/* All courses */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
          <h2 className="font-black text-lg mb-6">
            {activeLevel === 'همه' ? 'همه دوره‌ها' : `دوره‌های سطح ${activeLevel}`}
          </h2>
          {filteredCourses.length === 0 ? (
            <p className="text-ink-soft text-sm">دوره‌ای برای این سطح یافت نشد.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr gap-5">
              {(activeLevel === 'همه' ? filteredCourses.slice(1) : filteredCourses).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>

        {/* Why us */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
          <div className="bg-white rounded-3xl border border-line p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🎬', num: '۱۲۰+', lbl: 'ساعت ویدیو' },
              { icon: '✏️', num: '۲۴۰+', lbl: 'تمرین' },
              { icon: '👨‍🏫', num: '۱', lbl: 'استاد متخصص' },
              { icon: '🏆', num: '۴۰۰۰+', lbl: 'زبان‌آموز' },
            ].map((s) => (
              <div key={s.lbl}>
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-2xl font-black text-primary">{s.num}</div>
                <div className="text-sm text-ink-soft">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
