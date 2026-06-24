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

const DRAG_MIME = 'text/plain'

export default function FillBlankExercise({ exercise }: { exercise: FillBlankExerciseData }) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [selectedWord, setSelectedWord] = useState<string | null>(null)
  const [dragOverId, setDragOverId] = useState<string | null>(null)

  const check = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: true }))
  }

  const fillBlank = (id: string, word: string) => {
    setValues((prev) => ({ ...prev, [id]: word }))
    setChecked((prev) => ({ ...prev, [id]: false }))
  }

  /** Word-bank chip tapped/clicked: fill the first empty blank, or — if every
   *  blank already has a value — select the word so the user can tap (or
   *  drag) it onto a specific blank to replace its value.
   *  Reads/writes `values` via the updater-function form so a burst of
   *  clicks (or unrelated re-renders) never targets a stale "first empty"
   *  blank. */
  const onWordClick = (word: string) => {
    let filledId: string | null = null
    setValues((prev) => {
      const firstEmpty = exercise.items.find((item) => !(prev[item.id] ?? '').trim())
      if (!firstEmpty) return prev
      filledId = firstEmpty.id
      return { ...prev, [firstEmpty.id]: word }
    })
    if (filledId) {
      setChecked((prev) => ({ ...prev, [filledId as string]: false }))
      setSelectedWord(null)
    } else {
      setSelectedWord((prev) => (prev === word ? null : word))
    }
  }

  /** Blank tapped/clicked: place a selected word, or clear an already-filled
   *  blank so it can be retyped/replaced. Empty blanks with no word selected
   *  just receive normal keyboard focus. */
  const onBlankClick = (id: string) => {
    if (selectedWord) {
      fillBlank(id, selectedWord)
      setSelectedWord(null)
      return
    }
    if ((values[id] ?? '').trim()) {
      fillBlank(id, '')
    }
  }

  const onDropWord = (id: string, e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault()
    const word = e.dataTransfer.getData(DRAG_MIME)
    if (word) fillBlank(id, word)
    setSelectedWord(null)
    setDragOverId(null)
  }

  return (
    <div className="space-y-4">
      {exercise.wordBank && (
        <div dir="ltr" className="flex flex-wrap gap-2 text-left">
          {exercise.wordBank.map((w) => (
            <button
              key={w}
              type="button"
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData(DRAG_MIME, w)
                e.dataTransfer.effectAllowed = 'copy'
              }}
              onClick={() => onWordClick(w)}
              className={`de badge text-xs transition-colors cursor-grab active:cursor-grabbing ${
                selectedWord === w
                  ? 'badge-gold ring-2 ring-primary/50'
                  : 'badge-gray hover:border-primary hover:text-primary'
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      )}
      {exercise.wordBank && selectedWord && (
        <p className="text-xs text-ink-soft">
          کلمه‌ی <span className="de font-bold">{selectedWord}</span> انتخاب شد — روی یک جای خالی بزنید تا قرار بگیرد.
        </p>
      )}

      {exercise.items.map((item, i) => {
        const [before, after] = item.prompt.split('___')
        // No "___" marker means the blank is a full free-form sentence (e.g. "X / Y →"),
        // not a single missing word — give it a much wider input.
        const isSentenceBlank = after === undefined
        const isChecked = checked[item.id]
        const value = values[item.id] ?? ''
        const correct = isChecked && isCorrectAnswer(value, item.answer)
        const isDragOver = dragOverId === item.id

        return (
          <div key={item.id} className="border border-line rounded-2xl p-4">
            <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
              {/* German sentence + blank — isolated in its own LTR context so the
                  fragments render in natural reading order regardless of the page's RTL direction. */}
              <div dir="ltr" className="flex items-center gap-2 flex-wrap flex-1 min-w-0 text-left">
                <span className="text-xs font-bold text-ink-soft flex-shrink-0">{i + 1}.</span>
                <span className="de text-sm font-semibold">{before}</span>
                <input
                  type="text"
                  value={value}
                  onClick={exercise.wordBank ? () => onBlankClick(item.id) : undefined}
                  onChange={(e) => {
                    setValues((prev) => ({ ...prev, [item.id]: e.target.value }))
                    setChecked((prev) => ({ ...prev, [item.id]: false }))
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && check(item.id)}
                  onDragOver={(e) => {
                    e.preventDefault()
                    setDragOverId(item.id)
                  }}
                  onDragLeave={() => setDragOverId((prev) => (prev === item.id ? null : prev))}
                  onDrop={(e) => onDropWord(item.id, e)}
                  dir="ltr"
                  className={`de inline-block px-2 py-1 rounded-lg border-2 focus:border-primary focus:outline-none text-sm font-semibold transition-colors ${
                    isSentenceBlank ? 'flex-1 min-w-[220px] text-left' : 'w-32 sm:w-40 text-center'
                  } ${isDragOver ? 'border-primary bg-primary-light' : 'border-line'}`}
                  placeholder={isSentenceBlank ? 'Meine Großmutter war …' : '…'}
                />
                <span className="de text-sm font-semibold">{after}</span>
              </div>

              <button
                type="button"
                onClick={() => check(item.id)}
                disabled={!value.trim()}
                className="btn-ghost btn-sm flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
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
