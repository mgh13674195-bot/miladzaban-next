'use client'
import { useState } from 'react'
import { Exercise, ExerciseSkill } from '@/types/exercise'
import ExerciseRenderer from './ExerciseRenderer'

const SKILL_TAB_ORDER: { skill: ExerciseSkill; label: string }[] = [
  { skill: 'vocabulary', label: 'واژگان' },
  { skill: 'grammar', label: 'گرامر' },
  { skill: 'pronunciation', label: 'تلفظ' },
  { skill: 'speaking', label: 'مکالمه' },
  { skill: 'writing', label: 'نوشتن' },
  { skill: 'review', label: 'آزمون' },
]

/**
 * Groups exercises by their existing `skill` field into a tab bar.
 * Only tabs that actually have exercises are shown — no empty tabs,
 * no invented Phase-2 categories.
 */
export default function ExerciseTabs({ exercises }: { exercises: Exercise[] }) {
  const availableTabs = SKILL_TAB_ORDER.filter((t) => exercises.some((e) => e.skill === t.skill))
  const [active, setActive] = useState<ExerciseSkill | null>(availableTabs[0]?.skill ?? null)

  if (exercises.length === 0 || active === null) return null

  const filtered = exercises.filter((e) => e.skill === active)

  return (
    <div>
      {availableTabs.length > 1 && (
        <div className="flex gap-1.5 overflow-x-auto pb-2 mb-5 -mx-1 px-1">
          {availableTabs.map((tab) => (
            <button
              key={tab.skill}
              type="button"
              onClick={() => setActive(tab.skill)}
              className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                active === tab.skill
                  ? 'bg-ink text-white shadow-sm'
                  : 'bg-cream text-ink-soft hover:text-ink border border-line'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
      <ExerciseRenderer exercises={filtered} />
    </div>
  )
}
