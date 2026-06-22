'use client'
import { useState } from 'react'
import { A2Comment } from '@/types/a2'
import StarRating from '@/components/ui/StarRating'

export default function LessonComments({
  lessonId,
  initial,
}: {
  lessonId: number
  initial: A2Comment[]
}) {
  const [comments, setComments] = useState<A2Comment[]>(initial)
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [stars, setStars] = useState(5)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !text.trim()) return
    const now = new Date()
    const date = `${now.getFullYear() - 621}/${String(now.getMonth()+1).padStart(2,'0')}/${String(now.getDate()).padStart(2,'0')}`
    setComments((prev) => [
      ...prev,
      { id: `${lessonId}-${Date.now()}`, name: name.trim(), text: text.trim(), stars, date },
    ])
    setName(''); setText(''); setStars(5)
  }

  return (
    <div className="card p-6">
      <h2 className="font-black text-lg mb-6 flex items-center gap-2">
        <span className="text-2xl">💬</span> نظرات ({comments.length})
      </h2>

      {/* Comment list */}
      {comments.length > 0 && (
        <div className="space-y-4 mb-8">
          {comments.map((c) => (
            <div key={c.id} className="bg-cream rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary font-black text-sm grid place-items-center">
                    {c.name[0]}
                  </div>
                  <span className="font-bold text-sm">{c.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <StarRating value={c.stars} size="sm" />
                  <span className="text-xs text-ink-soft">{c.date}</span>
                </div>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* New comment form */}
      <form onSubmit={submit} className="space-y-4">
        <h3 className="font-bold text-sm">نظر شما</h3>

        {/* Star picker */}
        <StarRating value={stars} size="lg" interactive onChange={setStars} />

        <input
          className="input"
          placeholder="نام شما"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          className="input resize-none"
          rows={3}
          placeholder="نظر خود را بنویسید…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary w-full justify-center">ثبت نظر</button>
      </form>
    </div>
  )
}
