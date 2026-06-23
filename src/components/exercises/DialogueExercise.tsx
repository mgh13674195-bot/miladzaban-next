'use client'
import { useState } from 'react'
import { DialogueExerciseData } from '@/types/exercise'

export default function DialogueExercise({ exercise }: { exercise: DialogueExerciseData }) {
  const [drafts, setDrafts] = useState<Record<string, string>>({})
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})

  return (
    <div className="space-y-4">
      <div className="bg-cream rounded-xl p-3 text-sm space-y-0.5">
        {exercise.pattern.map((line, i) => (
          <p key={i} className="de-block text-ink-soft">{line}</p>
        ))}
      </div>

      {exercise.items.map((item, i) => {
        const isRevealed = revealed[item.id]
        return (
          <div key={item.id} className="border border-line rounded-2xl p-4">
            <div className="flex items-center justify-between gap-2 mb-3">
              <p className="text-xs font-bold text-ink-soft">{i + 1}.</p>
              <span className="de badge badge-gray text-[11px]">{item.promptFa}</span>
            </div>

            <textarea
              value={drafts[item.id] ?? ''}
              onChange={(e) => setDrafts((prev) => ({ ...prev, [item.id]: e.target.value }))}
              dir="ltr"
              rows={4}
              placeholder="A: Hast du …?"
              className="de input resize-none text-sm"
            />

            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={() => setRevealed((prev) => ({ ...prev, [item.id]: true }))}
                className="btn-ghost btn-sm"
              >
                مشاهده دیالوگ نمونه
              </button>
            </div>

            {isRevealed && (
              <div className="mt-3 bg-primary-light border border-primary/20 rounded-xl p-3">
                <p className="text-xs font-bold text-primary-dark mb-2">دیالوگ نمونه:</p>
                <p className="de text-sm text-ink whitespace-pre-line leading-relaxed">{item.sampleAnswer}</p>
              </div>
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
