'use client'
import { useState } from 'react'
import { Exercise } from '@/types'

interface Props { exercises: Exercise[] }

type Tab = 'mcq' | 'fill' | 'drag' | 'dusie'

export default function ExerciseSection({ exercises }: Props) {
  const [tab, setTab] = useState<Tab>('mcq')
  const mcqs = exercises.filter((e) => e.type === 'mcq')
  const fills = exercises.filter((e) => e.type === 'fill')
  const drags = exercises.filter((e) => e.type === 'drag')
  const duSies = exercises.filter((e) => e.type === 'dusie')

  return (
    <div className="card">
      <div className="flex items-center gap-3 p-5 border-b border-line">
        <div className="w-8 h-8 rounded-lg bg-amber-50 grid place-items-center text-lg">✏️</div>
        <h2 className="font-black text-sm">تمرین‌های تعاملی</h2>
      </div>
      <div className="p-5">
        {/* Tabs */}
        <div className="flex bg-cream border border-line rounded-xl p-1 gap-1 mb-5">
          {([['mcq', 'چهارگزینه‌ای'], ['fill', 'جای خالی'], ['drag', 'مرتب‌سازی'], ['dusie', 'du یا Sie']] as [Tab, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex-1 py-2 px-1 text-xs font-bold rounded-lg transition-all ${tab === key ? 'bg-white text-ink shadow-sm' : 'text-ink-soft hover:text-ink'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* MCQ */}
        {tab === 'mcq' && <MCQPanel questions={mcqs} />}
        {tab === 'fill' && <FillPanel questions={fills} />}
        {tab === 'drag' && <DragPanel questions={drags} />}
        {tab === 'dusie' && <DuSiePanel questions={duSies} />}
      </div>
    </div>
  )
}

/* ── MCQ ── */
function MCQPanel({ questions }: { questions: Exercise[] }) {
  const [states, setStates] = useState<Record<number, { selected: number | null; solved: boolean }>>({})

  const pick = (qi: number, oi: number) => {
    setStates((prev) => {
      const cur = prev[qi] ?? { selected: null, solved: false }
      if (cur.solved) return prev
      const correct = oi === questions[qi].correctIndex
      return { ...prev, [qi]: { selected: oi, solved: correct } }
    })
  }

  return (
    <div className="space-y-4">
      {questions.map((q, qi) => {
        const s = states[qi] ?? { selected: null, solved: false }
        return (
          <div key={qi} className="bg-cream rounded-2xl p-4 border border-line">
            <div className="flex gap-2.5 mb-3">
              <div className="w-6 h-6 bg-primary text-white rounded-lg grid place-items-center text-xs font-black flex-shrink-0 mt-0.5">{qi + 1}</div>
              <span className="text-sm font-semibold">{q.question}</span>
            </div>
            <div className="space-y-2">
              {q.options?.map((opt, oi) => {
                let cls = 'bg-white border-line text-ink-soft hover:border-primary hover:text-primary'
                if (s.selected !== null) {
                  if (oi === q.correctIndex) cls = 'bg-green-50 border-green-300 text-green-700 font-bold'
                  else if (oi === s.selected && !s.solved) cls = 'bg-red-50 border-red-300 text-red-700'
                }
                return (
                  <button
                    key={oi}
                    onClick={() => pick(qi, oi)}
                    disabled={s.solved || (s.selected === oi)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl border-[1.5px] text-sm transition-all ${cls}`}
                    style={{ direction: 'ltr', textAlign: 'left' }}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
            {s.selected !== null && (
              <div className={`mt-2.5 text-xs font-bold px-3 py-2 rounded-lg ${s.solved ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {s.solved ? '✅ آفرین! درسته.' : '❌ اشتباهه، دوباره امتحان کن.'}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ── FILL ── */
function FillPanel({ questions }: { questions: Exercise[] }) {
  const [states, setStates] = useState<Record<number, { picked: string | null }>>({})

  const pick = (qi: number, val: string) => {
    setStates((prev) => ({ ...prev, [qi]: { picked: val } }))
  }

  return (
    <div className="space-y-4">
      {questions.map((q, qi) => {
        const s = states[qi]
        const done = !!s?.picked
        const correct = s?.picked === q.correctAnswer

        return (
          <div key={qi} className="bg-cream rounded-2xl p-4 border border-line">
            <div className="text-sm font-bold mb-3" style={{ direction: 'ltr', textAlign: 'left' }}>
              {q.sentence?.replace('___', `[${s?.picked ?? '___'}]`)}
            </div>
            <div className="flex gap-2 flex-wrap">
              {q.blankOptions?.map((opt) => {
                let cls = 'bg-white border-line text-ink-soft hover:border-primary hover:text-primary'
                if (done) {
                  if (opt === q.correctAnswer) cls = 'bg-green-50 border-green-300 text-green-700 font-bold'
                  else if (opt === s?.picked && !correct) cls = 'bg-red-50 border-red-300 text-red-700'
                }
                return (
                  <button key={opt} onClick={() => !done && pick(qi, opt)} disabled={done} className={`px-5 py-2 rounded-full border-[1.5px] text-sm font-semibold transition-all ${cls}`} style={{ direction: 'ltr' }}>
                    {opt}
                  </button>
                )
              })}
            </div>
            {done && (
              <div className={`mt-2.5 text-xs font-bold px-3 py-2 rounded-lg ${correct ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {correct ? '✅ آفرین! درسته.' : `❌ جواب درست: ${q.correctAnswer}`}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ── DRAG ── */
function DragPanel({ questions }: { questions: Exercise[] }) {
  const [zones, setZones] = useState<Record<number, string[]>>({})
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  const addWord = (qi: number, word: string) => {
    setZones((prev) => ({ ...prev, [qi]: [...(prev[qi] ?? []), word] }))
    setChecked((prev) => ({ ...prev, [qi]: false }))
  }

  const removeWord = (qi: number, idx: number) => {
    setZones((prev) => {
      const arr = [...(prev[qi] ?? [])]
      arr.splice(idx, 1)
      return { ...prev, [qi]: arr }
    })
    setChecked((prev) => ({ ...prev, [qi]: false }))
  }

  const reset = (qi: number) => {
    setZones((prev) => ({ ...prev, [qi]: [] }))
    setChecked((prev) => ({ ...prev, [qi]: false }))
  }

  const check = (qi: number) => setChecked((prev) => ({ ...prev, [qi]: true }))

  return (
    <div className="space-y-4">
      <p className="text-xs text-ink-soft mb-2">روی کلمات کلیک کن تا جمله بسازی:</p>
      {questions.map((q, qi) => {
        const zone = zones[qi] ?? []
        const isChecked = checked[qi]
        const isCorrect = JSON.stringify(zone) === JSON.stringify(q.correctOrder)
        const usedWords = new Set(zone)

        return (
          <div key={qi} className="bg-cream rounded-2xl p-4 border border-line">
            <p className="text-xs text-ink-soft mb-2.5">جمله {qi + 1} را بساز:</p>
            {/* Word bank */}
            <div className="flex flex-wrap gap-2 mb-3" style={{ direction: 'ltr' }}>
              {q.words?.map((w, wi) => {
                const used = zone.filter((z) => z === w).length >= (q.words?.filter((x) => x === w).length ?? 0)
                return (
                  <button
                    key={wi}
                    onClick={() => !used && addWord(qi, w)}
                    disabled={used}
                    className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all border-2 ${used ? 'opacity-25 cursor-not-allowed bg-cream border-line text-ink-soft' : 'bg-[#1a1a1a] text-white border-transparent hover:-translate-y-0.5 hover:shadow-md'}`}
                  >
                    {w}
                  </button>
                )
              })}
            </div>
            {/* Drop zone */}
            <div className="min-h-11 bg-white border-2 border-dashed border-line rounded-xl p-2.5 flex flex-wrap gap-2 mb-3" style={{ direction: 'ltr' }}>
              {zone.map((w, i) => (
                <button
                  key={i}
                  onClick={() => removeWord(qi, i)}
                  className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all ${isChecked ? (isCorrect ? 'bg-green-50 text-green-700 border-2 border-green-200' : 'bg-red-50 text-red-700 border-2 border-red-200') : 'bg-blue-50 text-blue-700 border-2 border-blue-200 hover:bg-red-50 hover:text-red-700 hover:border-red-200'}`}
                >
                  {w}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => check(qi)} className="px-4 py-2 bg-primary text-white rounded-full text-xs font-bold hover:bg-primary-dark transition-colors">بررسی ✓</button>
              <button onClick={() => reset(qi)} className="px-4 py-2 bg-white border border-line text-ink-soft rounded-full text-xs font-bold hover:border-ink-soft transition-colors">↺ ریست</button>
            </div>
            {isChecked && (
              <div className={`mt-2.5 text-xs font-bold px-3 py-2 rounded-lg ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {isCorrect ? '✅ آفرین! جمله درسته.' : '❌ ترتیب اشتباهه. دوباره امتحان کن.'}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ── DU/SIE ── */
function DuSiePanel({ questions }: { questions: Exercise[] }) {
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const pick = (qi: number, val: string) => {
    setAnswers((prev) => ({ ...prev, [qi]: val }))
  }

  return (
    <div className="space-y-3">
      <p className="text-xs text-ink-soft mb-3">در هر موقعیت <b>du</b> یا <b>Sie</b> را انتخاب کنید:</p>
      {questions.map((q, qi) => {
        const ans = answers[qi]
        const done = !!ans
        const correct = ans === q.correctPronoun

        return (
          <div key={qi} className="bg-cream rounded-xl p-4 border border-line">
            <p className="text-sm font-semibold mb-3">{qi + 1}. {q.situation}</p>
            <div className="flex gap-2.5">
              {(['du', 'Sie'] as const).map((p) => {
                let cls = p === 'du'
                  ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
                  : 'bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100'
                if (done) {
                  if (p === q.correctPronoun) cls = 'bg-green-50 border-green-300 text-green-700'
                  else if (p === ans && !correct) cls = 'bg-red-50 border-red-300 text-red-700'
                }
                return (
                  <button
                    key={p}
                    onClick={() => !done && pick(qi, p)}
                    disabled={done}
                    className={`flex-1 py-2.5 rounded-xl border-2 text-base font-black transition-all ${cls}`}
                  >
                    {p}
                  </button>
                )
              })}
            </div>
            {done && (
              <div className={`mt-2.5 text-xs font-semibold ${correct ? 'text-green-700' : 'text-red-600'}`}>
                {correct ? `✅ درست! "${ans}" استفاده میشه.` : `❌ اشتباه. باید "${q.correctPronoun}" استفاده کنی.`}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
