'use client'
import Link from 'next/link'
import { A2Lesson } from '@/types/a2'

export default function A2LessonCard({ lesson, index }: { lesson: A2Lesson; index: number }) {
  const locked = !lesson.free

  return (
    <Link
      href={locked ? '#' : `/courses/a2/lessons/${lesson.id}`}
      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all group
        ${locked
          ? 'border-line bg-white/50 cursor-not-allowed opacity-70'
          : 'border-line bg-white hover:border-primary hover:shadow-md hover:-translate-y-0.5 cursor-pointer'}`}
      onClick={locked ? (e) => e.preventDefault() : undefined}
    >
      {/* Number badge */}
      <div className={`w-10 h-10 rounded-xl grid place-items-center text-sm font-black flex-shrink-0
        ${lesson.free ? 'bg-primary/10 text-primary' : 'bg-line text-ink-soft'}`}>
        {index + 1}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm truncate">{lesson.title}</p>
        <p className="text-xs text-ink-soft mt-0.5">{lesson.duration}</p>
      </div>

      {/* Tags + lock */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {lesson.free && (
          <span className="badge badge-green text-[10px] px-2 py-0.5">رایگان</span>
        )}
        {locked ? (
          <svg className="w-4 h-4 text-ink-soft/50" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
          </svg>
        ) : (
          <svg className="w-4 h-4 text-ink-soft/40 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        )}
      </div>
    </Link>
  )
}
