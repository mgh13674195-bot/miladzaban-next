'use client'

interface Lesson {
  id: number
  title: string
  duration: string
  tags: { key: string; label: string }[]
  free: boolean
  done?: boolean
}

interface Props {
  courseId: string
  lessons: Lesson[]
}

export default function LessonList({ courseId, lessons }: Props) {
  return (
    <div className="space-y-2">
      {lessons.map((lesson) => {
        const locked = !lesson.free && !lesson.done
        return (
          <div
            key={lesson.id}
            role={locked ? undefined : 'button'}
            tabIndex={locked ? undefined : 0}
            className={`bg-white rounded-2xl border transition-all duration-200 flex items-center gap-4 p-4
              ${locked
                ? 'border-line opacity-60 cursor-not-allowed'
                : 'border-line hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 cursor-pointer'
              }
              ${lesson.done ? 'border-green-100 bg-green-50/40' : ''}`}
            onClick={() => !locked && (window.location.href = `/courses/${courseId}/lessons/${lesson.id}`)}
            onKeyDown={(e) => !locked && e.key === 'Enter' && (window.location.href = `/courses/${courseId}/lessons/${lesson.id}`)}
          >
            {/* Number / Status */}
            <div className={`w-11 h-11 rounded-xl grid place-items-center font-black text-sm flex-shrink-0 transition-colors
              ${lesson.done
                ? 'bg-green-100 text-green-600'
                : locked
                  ? 'bg-cream text-ink-soft/50'
                  : 'bg-red-50 text-primary'}`}
            >
              {lesson.done ? '✓' : locked ? '🔒' : lesson.id}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <b className="text-sm font-bold">{lesson.title}</b>
                {lesson.free && <span className="badge-gold text-[10px]">رایگان</span>}
                {lesson.done && <span className="badge-green text-[10px]">تکمیل</span>}
              </div>
              {lesson.tags.length > 0 && (
                <div className="flex gap-1 mt-1 flex-wrap">
                  {lesson.tags.map((t) => (
                    <span key={t.key} className="badge-gray text-[10px]">{t.label}</span>
                  ))}
                </div>
              )}
            </div>

            {/* Duration */}
            <span className="text-xs text-ink-soft whitespace-nowrap flex-shrink-0">⏱ {lesson.duration}</span>

            {/* Arrow */}
            {!locked && (
              <svg className="w-4 h-4 text-ink-soft/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            )}
          </div>
        )
      })}
    </div>
  )
}
