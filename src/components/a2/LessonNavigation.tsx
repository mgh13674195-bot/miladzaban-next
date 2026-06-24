import Link from 'next/link'
import { A2Lesson } from '@/types/a2'

export default function LessonNavigation({
  prev,
  next,
}: {
  prev: A2Lesson | null
  next: A2Lesson | null
}) {
  return (
    <div className="flex items-stretch gap-3">
      {prev ? (
        <Link
          href={`/courses/a2/lessons/${prev.id}`}
          className="flex-1 card p-4 flex items-center gap-3 hover:border-primary hover:-translate-x-1 transition-all group"
        >
          <svg className="w-5 h-5 text-ink-soft group-hover:text-primary flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-ink-soft mb-0.5">درس قبلی</p>
            <p className="de-block text-sm font-bold leading-snug line-clamp-2 break-words max-w-full">{prev.title}</p>
          </div>
        </Link>
      ) : <div className="flex-1" />}

      {next ? (
        <Link
          href={`/courses/a2/lessons/${next.id}`}
          className="flex-1 card p-4 flex items-center justify-end gap-3 hover:border-primary hover:translate-x-1 transition-all group text-left"
        >
          <div className="min-w-0 flex-1 text-left">
            <p className="text-[11px] text-ink-soft mb-0.5 text-left">درس بعدی</p>
            <p className="de-block text-sm font-bold leading-snug line-clamp-2 break-words max-w-full">{next.title}</p>
          </div>
          <svg className="w-5 h-5 text-ink-soft group-hover:text-primary flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      ) : (
        <Link
          href="/courses/a2"
          className="flex-1 card p-4 flex items-center justify-end gap-3 hover:border-gold transition-all group text-left"
        >
          <div className="min-w-0 text-left">
            <p className="text-[11px] text-ink-soft mb-0.5">پایان دوره</p>
            <p className="text-sm font-bold">بازگشت به A2</p>
          </div>
          <span className="text-2xl">🎉</span>
        </Link>
      )}
    </div>
  )
}
