import Link from 'next/link'
import CourseCard from '@/components/course/CourseCard'
import Reveal from '@/components/ui/Reveal'
import { courses } from '@/data/courses'

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-primary font-bold text-sm tracking-wide mb-1">دوره‌های آموزشی</div>
            <h2 className="section-title">مسیر یادگیری <span className="text-primary">آلمانی</span></h2>
            <p className="text-ink-soft text-sm mt-2">از مبتدی مطلق تا پیشرفته — ۵ سطح، ۱ مسیر.</p>
          </div>
          <Link href="/courses" className="btn-ghost btn-sm flex-shrink-0">مشاهده همه ←</Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {courses.map((course, i) => (
            <Reveal key={course.id} delay={(i % 5) * 80}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
