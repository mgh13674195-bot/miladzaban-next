import { Exercise, ExerciseSkill, ExerciseType } from '@/types/exercise'

const SKILL_LABELS: Record<ExerciseSkill, string> = {
  vocabulary: 'واژگان',
  grammar: 'گرامر',
  speaking: 'مکالمه',
  writing: 'نوشتار',
  pronunciation: 'تلفظ',
  review: 'مرور',
}

const SKILL_BADGE_CLASS: Record<ExerciseSkill, string> = {
  vocabulary: 'badge-green',
  grammar: 'badge-gold',
  speaking: 'badge-dark',
  writing: 'badge-gray',
  pronunciation: 'badge-red',
  review: 'badge-gray',
}

const TYPE_LABELS: Record<ExerciseType, string> = {
  'fill-blank': 'جای خالی',
  'multiple-choice': 'چندگزینه‌ای',
  matching: 'تطبیق',
  'sentence-order': 'مرتب‌سازی جمله',
  dialogue: 'مکالمه‌سازی',
  writing: 'نوشتاری',
  'mini-test': 'مینی‌تست',
  categorize: 'دسته‌بندی',
  'open-question': 'سؤال باز',
}

interface Props {
  index: number
  total: number
  exercise: Exercise
  children: React.ReactNode
}

export default function ExerciseCard({ index, total, exercise, children }: Props) {
  return (
    <div className="glass-card p-5 sm:p-6">
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="text-xs font-bold text-ink-soft">
          تمرین {index + 1} از {total}
        </span>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className={`badge ${SKILL_BADGE_CLASS[exercise.skill]} text-[11px]`}>
            {SKILL_LABELS[exercise.skill]}
          </span>
          <span className="badge badge-gray text-[11px]">{TYPE_LABELS[exercise.type]}</span>
        </div>
      </div>

      <h3 className="font-black text-base sm:text-lg mb-2">{exercise.title}</h3>

      <p className="text-sm text-ink-soft leading-relaxed mb-1">{exercise.instructionFa}</p>
      {exercise.instructionDe && (
        <p className="de text-xs text-ink-soft/70 italic mb-4">{exercise.instructionDe}</p>
      )}
      {!exercise.instructionDe && <div className="mb-4" />}

      <div className="space-y-4">{children}</div>
    </div>
  )
}
