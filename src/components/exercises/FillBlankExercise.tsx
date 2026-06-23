'use client'
import { useState } from 'react'
import { FillBlankExerciseData } from '@/types/exercise'
import FeedbackBlock from './FeedbackBlock'

function normalize(s: string) {
  return s.trim().toLowerCase().replace(/\s+/g, ' ')
}

function isCorrectAnswer(value: string, answer: string | string[]) {
  const accepted = Array.isArray(answer) ? answer : [answer]
  return accepted.some((a) => normalize(a) === normalize(value))
}

function firstAnswer(answer: string | string[]) {
  return Array.isArray(answer) ? answer[0] : answer
}

export default function FillBlankExercise({ exercise }: { exercise: FillBlankExerciseData }) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [focusedId, setFocusedId] = useState<string | null>(null)

  const check = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: true }))
  }

  const insertWord = (word: string) => {
    if (!focusedId) return
    setValues((prev) => ({ ...prev, [focusedId]: word }))
  }

  return (
    <div className="space-y-4">
      {exercise.wordBank && (
        <div className="flex flex-wrap gap-2">
          {exercise.wordBank.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => insertWord(w)}
              className="de badge badge-gray text-xs hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              {w}
            </button>
          ))}
        </div>
      )}

      {exercise.items.map((item, i) => {
        const [before, after] = item.prompt.split('___')
        // No "___" marker means the blank is a full free-form sentence (e.g. "X / Y →"),
        // not a single missing word — give it a much wider input.
        const isSentenceBlank = after === undefined
        const isChecked = checked[item.id]
        const value = values[item.id] ?? ''
        const correct = isChecked && isCorrectAnswer(value, item.answer)

        return (
          <div key={item.id} className="border border-line rounded-2xl p-4">
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="text-xs font-bold text-ink-soft flex-shrink-0">{i + 1}.</span>
              <span className="de text-sm font-semibold">{before}</span>
              <input
                type="text"
                value={value}
                onFocus={() => setFocusedId(item.id)}
                onChange={(e) => setValues((prev) => ({ ...prev, [item.id]: e.target.value }))}
                onKeyDown={(e) => e.key === 'Enter' && check(item.id)}
                dir="ltr"
                className={`de inline-block px-2 py-1 rounded-lg border-2 border-line focus:border-primary focus:outline-none text-sm font-semibold ${
                  isSentenceBlank ? 'flex-1 min-w-[220px] text-left' : 'w-32 sm:w-40 text-center'
                }`}
                placeholder={isSentenceBlank ? 'Meine Großmutter war …' : '…'}
              />
              <span className="de text-sm font-semibold">{after}</span>

              <button
                type="button"
                onClick={() => check(item.id)}
                disabled={!value.trim()}
                className="btn-ghost btn-sm flex-shrink-0 mr-auto disabled:opacity-40 disabled:cursor-not-allowed"
              >
                بررسی
              </button>
            </div>

            {isChecked && (
              <FeedbackBlock
                isCorrect={correct}
                correctAnswer={firstAnswer(item.answer)}
                translationFa={item.translationFa}
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
