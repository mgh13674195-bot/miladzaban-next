'use client'
import Link from 'next/link'
import { A2Lesson } from '@/types/a2'

const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
function toPersianDigits(n: number) {
  return String(n).replace(/[0-9]/g, (d) => PERSIAN_DIGITS[Number(d)])
}

export default function A2LessonCard({ lesson }: { lesson: A2Lesson }) {
  const coursebookCount = lesson.lessonVideos.length
  const workbookCount = lesson.workbookVideos.length

  return (
    <Link
      href={`/courses/a2/lessons/${lesson.id}`}
      className="flex items-center gap-4 p-4 rounded-2xl border border-line bg-white hover:border-primary hover:shadow-md hover:-translate-y-0.5 cursor-pointer transition-all group"
    >
      {/* Number badge — uses the lesson's real global id, not the filtered array index */}
      <div className="w-10 h-10 rounded-xl grid place-items-center text-sm font-black flex-shrink-0 bg-primary/10 text-primary">
        {lesson.id}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <span className="badge badge-gray text-[10px] px-2 py-0.5 mb-1 inline-block">{lesson.topic}</span>
        <p className="de font-bold text-sm truncate">{lesson.title}</p>
        <p className="text-xs text-ink-soft mt-0.5">
          {lesson.duration} · {toPersianDigits(coursebookCount)} ویدیوی کتاب درسی + {toPersianDigits(workbookCount)} ویدیوی کتاب کار
        </p>
      </div>

      {/* Tags + arrow */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="badge badge-green text-[10px] px-2 py-0.5">رایگان</span>
        <svg className="w-4 h-4 text-ink-soft/40 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </Link>
  )
}
