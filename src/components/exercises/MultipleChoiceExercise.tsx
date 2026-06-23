'use client'
import { useState } from 'react'
import { MultipleChoiceExerciseData } from '@/types/exercise'
import FeedbackBlock from './FeedbackBlock'

export default function MultipleChoiceExercise({ exercise }: { exercise: MultipleChoiceExerciseData }) {
  const [selected, setSelected] = useState<Record<string, number>>({})
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const choose = (itemId: string, optionIndex: number) => {
    if (checked[itemId]) return // lock after answering
    setSelected((prev) => ({ ...prev, [itemId]: optionIndex }))
    setChecked((prev) => ({ ...prev, [itemId]: true }))
  }

  return (
    <div className="space-y-4">
      {exercise.items.map((item, i) => {
        const chosen = selected[item.id]
        const isChecked = checked[item.id]
        const isCorrect = isChecked && chosen === item.correctIndex

        return (
          <div key={item.id} className="border border-line rounded-2xl p-4">
            <p className="text-xs font-bold text-ink-soft mb-2">{i + 1}.</p>
            <p className="de text-sm font-semibold mb-3">{item.question}</p>

            <div className="flex flex-wrap gap-2">
              {item.options.map((opt, optIndex) => {
                const isChosen = chosen === optIndex
                const isRight = optIndex === item.correctIndex
                let stateClass = 'border-line bg-white hover:border-primary/40'
                if (isChecked && isChosen && isRight) stateClass = 'border-primary bg-primary-light text-primary-dark'
                else if (isChecked && isChosen && !isRight) stateClass = 'border-[#e8c4bd] bg-[#fdf3f1] text-[#7a3a30]'
                else if (isChecked && isRight) stateClass = 'border-primary/40 bg-primary-light/50'

                return (
                  <button
                    key={optIndex}
                    type="button"
                    onClick={() => choose(item.id, optIndex)}
                    disabled={isChecked}
                    className={`de px-4 py-2 rounded-xl border-2 text-sm font-semibold transition-all disabled:cursor-default ${stateClass}`}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>

            {isChecked && (
              <FeedbackBlock
                isCorrect={isCorrect}
                correctAnswer={item.options[item.correctIndex]}
                explanationFa={item.explanationFa}
              />
            )}
          </div>
        )
      })}

      {exercise.explanationFa && (
        <div className="bg-cream rounded-xl p-3 text-sm text-ink-soft leading-relaxed">
          💡 {exercise.explanationFa}
        </div>
      )}
    </div>
  )
}
