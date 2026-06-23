import { A2Lesson } from '@/types/a2'
import { getExercisesForLesson } from '@/data/exercises/a2/lesson1Exercises'
import { getLessonNotes } from '@/data/lesson-notes/a2/lesson1Notes'
import ExerciseTabs from '@/components/exercises/ExerciseTabs'

const PLACEHOLDER = 'EXERCISE_PLACEHOLDER'

export default function A2ExerciseSection({ lesson }: { lesson: A2Lesson }) {
  const hasEx = lesson.exercisesUrl && lesson.exercisesUrl !== PLACEHOLDER
  const hasNotes = getLessonNotes(lesson.id) !== null
  // The lesson-notes "واژگان" tab already covers vocabulary for lessons that have notes —
  // suppress this flat table there to avoid showing two separate vocab surfaces.
  const hasVocab = lesson.vocabulary.length > 0 && !hasNotes
  const exercises = getExercisesForLesson(lesson.id)
  const hasInteractiveExercises = exercises.length > 0
  const showVocabCard = hasVocab || !hasInteractiveExercises

  return (
    <div className="space-y-5">
      {showVocabCard && (
      <div className="card p-6">
        <h2 className="font-black text-lg mb-4 flex items-center gap-2">
          <span className="text-2xl">✏️</span> لغات کلیدی
        </h2>

        {/* Vocabulary table */}
        {hasVocab && (
          <div className="mb-5">
            <h3 className="text-sm font-bold text-ink-soft mb-3">لغات کلیدی این درس</h3>
            <div className="divide-y divide-line border border-line rounded-2xl overflow-hidden">
              {lesson.vocabulary.map((v, i) => (
                <div key={i} className="grid grid-cols-[1fr_1.2fr] gap-2 items-start px-4 py-3 hover:bg-cream/60 transition">
                  <span className="de font-bold text-sm text-ink">{v.de}</span>
                  <div>
                    <span className="text-sm text-ink-soft">{v.fa}</span>
                    {v.example && (
                      <p className="de text-xs text-ink-soft/70 mt-0.5 italic">{v.example}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exercise link — only shown when no interactive exercises exist for this lesson yet */}
        {!hasInteractiveExercises && (
          hasEx ? (
            <a
              href={lesson.exercisesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              رفتن به تمرین‌ها
            </a>
          ) : (
            <div className="bg-cream rounded-xl p-4 text-center text-sm text-ink-soft">
              تمرین‌های این درس به‌زودی اضافه می‌شوند.
            </div>
          )
        )}
      </div>
      )}

      {/* Interactive exercises */}
      {hasInteractiveExercises && (
        <div>
          <h2 className="font-black text-lg mb-4 flex items-center gap-2 px-1">
            <span className="text-2xl">🧩</span> تمرین‌های تعاملی
          </h2>
          <ExerciseTabs exercises={exercises} />
        </div>
      )}
    </div>
  )
}
