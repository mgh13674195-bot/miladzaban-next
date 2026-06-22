'use client'
import { useState } from 'react'
import { Comment } from '@/types'
import StarRating from '@/components/ui/StarRating'

interface Props {
  comments: Comment[]
  onAdd: (c: Comment) => void
}

const PER_PAGE = 4

export default function CommentsSection({ comments, onAdd }: Props) {
  const [page, setPage] = useState(0)
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [stars, setStars] = useState(0)

  const totalPages = Math.ceil(comments.length / PER_PAGE)
  const slice = comments.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  const submit = () => {
    if (!name.trim()) return alert('لطفاً نامت رو وارد کن')
    if (!text.trim()) return alert('لطفاً نظرت رو بنویس')
    if (!stars) return alert('لطفاً امتیاز بده')
    const now = new Date()
    onAdd({
      id: String(Date.now()),
      name: name.trim(),
      text: text.trim(),
      stars,
      date: `${now.getFullYear() - 621}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}`,
    })
    setName(''); setText(''); setStars(0); setPage(0)
  }

  return (
    <div className="card">
      <div className="flex items-center gap-3 p-5 border-b border-line">
        <div className="w-8 h-8 rounded-lg bg-primary-light grid place-items-center text-lg">💬</div>
        <h2 className="font-black text-sm flex-1">نظرات زبان‌آموزان</h2>
        <span className="text-xs text-ink-soft">{comments.length} نظر</span>
      </div>

      <div className="p-5">
        {/* Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 min-h-[160px]">
          {slice.map((c) => (
            <div key={c.id} className="bg-cream rounded-2xl p-4 border border-line flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-gold grid place-items-center text-white font-black text-sm flex-shrink-0">
                  {c.name[0]}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-ink">{c.name}</div>
                  <div className="text-[11px] text-ink-soft">{c.date}</div>
                </div>
                <StarRating value={c.stars} size="sm" />
              </div>
              <p className="text-sm text-ink-soft leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-9 h-9 rounded-full border-[1.5px] border-line bg-white text-xl grid place-items-center disabled:opacity-30 hover:border-primary hover:text-primary transition-colors"
            >‹</button>
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-2 rounded-full transition-all ${i === page ? 'w-5 bg-primary' : 'w-2 bg-line'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="w-9 h-9 rounded-full border-[1.5px] border-line bg-white text-xl grid place-items-center disabled:opacity-30 hover:border-primary hover:text-primary transition-colors"
            >›</button>
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-line my-5" />

        {/* Add comment */}
        <div>
          <div className="text-sm font-bold text-ink mb-4">نظر شما</div>

          {/* Stars */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-ink-soft">امتیاز:</span>
            <StarRating value={stars} interactive onChange={setStars} />
          </div>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="نام شما"
            className="input mb-2.5"
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="نظر خود را بنویسید..."
            rows={3}
            className="input resize-y mb-3"
          />
          <button onClick={submit} className="btn-primary btn-sm">
            ثبت نظر ←
          </button>
        </div>
      </div>
    </div>
  )
}
