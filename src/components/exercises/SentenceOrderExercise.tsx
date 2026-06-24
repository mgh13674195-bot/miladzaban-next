'use client'
import { useState } from 'react'
import { SentenceOrderExerciseData } from '@/types/exercise'
import FeedbackBlock from './FeedbackBlock'

interface BankSlot {
  word: string
  /** Stable key per word occurrence — lets duplicate words (e.g. two "Ich") work independently. */
  key: number
}

export default function SentenceOrderExercise({ exercise }: { exercise: SentenceOrderExerciseData }) {
  // Per item: which bank slots (by key) have been placed into the answer zone, in order.
  const [placed, setPlaced] = useState<Record<string, number[]>>({})
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [dragKey, setDragKey] = useState<number | null>(null)

  const banks: Record<string, BankSlot[]> = {}
  for (const item of exercise.items) {
    banks[item.id] = item.words.map((word, i) => ({ word, key: i }))
  }

  const place = (itemId: string, key: number) => {
    setPlaced((prev) => {
      const cur = prev[itemId] ?? []
      if (cur.includes(key)) return prev
      return { ...prev, [itemId]: [...cur, key] }
    })
    setChecked((prev) => ({ ...prev, [itemId]: false }))
  }

  const unplace = (itemId: string, key: number) => {
    setPlaced((prev) => ({ ...prev, [itemId]: (prev[itemId] ?? []).filter((k) => k !== key) }))
    setChecked((prev) => ({ ...prev, [itemId]: false }))
  }

  const reset = (itemId: string) => {
    setPlaced((prev) => ({ ...prev, [itemId]: [] }))
    setChecked((prev) => ({ ...prev, [itemId]: false }))
  }

  const check = (itemId: string) => setChecked((prev) => ({ ...prev, [itemId]: true }))

  return (
    <div className="space-y-4">
      <p className="text-xs text-ink-soft leading-relaxed">
        کلمات را بکشید (drag) یا روی آن‌ها کلیک کنید تا به ترتیب درست در کادر زیر قرار بگیرند.
      </p>

      {exercise.items.map((item, i) => {
        const bank = banks[item.id]
        const placedKeys = placed[item.id] ?? []
        const placedWords = placedKeys.map((k) => bank.find((b) => b.key === k)!.word)
        const isChecked = checked[item.id]
        const isCorrect = isChecked && JSON.stringify(placedWords) === JSON.stringify(item.correctOrder)
        const availableSlots = bank.filter((b) => !placedKeys.includes(b.key))

        return (
          <div key={item.id} className="border border-line rounded-2xl p-4">
            <p className="text-xs font-bold text-ink-soft mb-3">{i + 1}.</p>

            {/* Word bank */}
            <div dir="ltr" className="flex flex-wrap gap-2 mb-3 text-left">
              {availableSlots.map((slot) => (
                <button
                  key={slot.key}
                  type="button"
                  draggable
                  onDragStart={() => setDragKey(slot.key)}
                  onDragEnd={() => setDragKey(null)}
                  onClick={() => place(item.id, slot.key)}
                  className="de px-3 py-1.5 rounded-full text-sm font-bold border-2 border-transparent bg-ink text-white transition-all hover:-translate-y-0.5 hover:shadow-md cursor-grab active:cursor-grabbing"
                >
                  {slot.word}
                </button>
              ))}
              {availableSlots.length === 0 && (
                <span className="text-xs text-ink-soft/60 italic">همه کلمات استفاده شدند</span>
              )}
            </div>

            {/* Drop zone */}
            <div
              dir="ltr"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault()
                if (dragKey !== null) place(item.id, dragKey)
                setDragKey(null)
              }}
              className="min-h-[2.75rem] bg-cream border-2 border-dashed border-line rounded-xl p-2.5 flex flex-wrap gap-2 mb-3 text-left"
            >
              {placedKeys.map((key) => {
                const word = bank.find((b) => b.key === key)!.word
                let cls = 'bg-white border-2 border-primary/30 text-ink hover:border-primary/60'
                if (isChecked) {
                  cls = isCorrect
                    ? 'bg-primary-light border-2 border-primary/40 text-primary-dark'
                    : 'bg-[#fdf3f1] border-2 border-[#e8c4bd] text-[#7a3a30]'
                }
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => unplace(item.id, key)}
                    className={`de px-3 py-1.5 rounded-full text-sm font-bold transition-all ${cls}`}
                  >
                    {word}
                  </button>
                )
              })}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => check(item.id)}
                disabled={placedKeys.length === 0}
                className="btn-ghost btn-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                بررسی
              </button>
              <button
                type="button"
                onClick={() => reset(item.id)}
                disabled={placedKeys.length === 0}
                className="btn-ghost btn-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                تلاش دوباره
              </button>
            </div>

            {isChecked && (
              <FeedbackBlock
                isCorrect={isCorrect}
                correctAnswer={item.correctOrder.join(' ')}
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
