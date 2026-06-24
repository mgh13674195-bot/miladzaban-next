import Link from 'next/link'
import { Course } from '@/types'

interface Props {
  course: Course
  featured?: boolean
}

export default function CourseCard({ course, featured }: Props) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className={`glass-card-hover group flex flex-col ${featured ? 'md:flex-row' : 'h-full'}`}
    >
      {/* Banner */}
      <div
        className={`relative flex items-center justify-center text-white font-black flex-shrink-0 overflow-hidden
          ${featured ? 'md:w-48 h-40 md:h-auto rounded-none md:rounded-r-3xl' : 'h-36'}`}
        style={{ background: `linear-gradient(135deg, ${course.gradient[0]}, ${course.gradient[1]})` }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '14px 14px' }}
        />
        <span className="relative text-4xl font-black tracking-tighter drop-shadow-sm">{course.level}</span>
        <span className="absolute top-3 right-3 badge-gold text-[11px] shadow-sm">{course.discount} تخفیف</span>
        {course.lessons.length > 0 && (
          <span className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-sm text-white text-[11px] font-bold px-2 py-1 rounded-lg">
            {course.lessons.length} درس
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <span className="text-[11px] font-bold text-ink-soft/70 de">{course.label}</span>
            <h3 className="text-base font-black leading-snug">{course.title}</h3>
          </div>
          <div className="hidden md:grid w-9 h-9 rounded-xl bg-cream place-items-center text-primary group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>

        <p className="text-sm text-ink-soft flex-1 mb-4 leading-relaxed">{course.description}</p>

        <div className="flex items-center justify-between pt-3 border-t border-line">
          <div>
            <div className="text-xs text-ink-soft/50 line-through tabular-nums">{course.originalPrice} تومان</div>
            <div className="text-lg font-black text-primary tabular-nums">{course.price} <span className="text-xs font-semibold text-ink-soft">تومان</span></div>
          </div>
          <span className="badge-red text-[11px]">سطح {course.level}</span>
        </div>
      </div>
    </Link>
  )
}
