'use client'
import { useState } from 'react'
import { VocabItem } from '@/types'

interface Props { items: VocabItem[] }

const PREVIEW = 5

export default function VocabSection({ items }: Props) {
  const [open, setOpen] = useState(false)
  const displayed = open ? items : items.slice(0, PREVIEW)

  return (
    <div className="card">
      <button
        className="flex items-center gap-3 p-5 border-b border-line w-full text-right hover:bg-cream transition-colors"
        onClick={() => setOpen(!open)}
      >
        <div className="w-8 h-8 rounded-lg bg-purple-50 grid place-items-center text-lg flex-shrink-0">📝</div>
        <h2 className="font-black text-sm flex-1">واژگان مهم درس</h2>
        <span className={`text-ink-soft text-sm transition-transform ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      <div className="p-0">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-cream">
              <th className="px-4 py-2 text-xs font-semibold text-ink-soft text-left border-b border-line" style={{ direction: 'ltr' }}>آلمانی</th>
              <th className="px-4 py-2 text-xs font-semibold text-ink-soft text-right border-b border-line">فارسی</th>
            </tr>
          </thead>
          <tbody>
            {displayed.map((item, i) => (
              <tr key={i} className="hover:bg-cream transition-colors border-b border-line last:border-b-0">
                <td className="px-4 py-2.5 font-semibold text-ink-soft" style={{ direction: 'ltr', textAlign: 'left' }}>{item.de}</td>
                <td className="px-4 py-2.5 text-ink-soft text-right">{item.fa}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={() => setOpen(!open)}
          className="w-full py-3 text-xs font-bold text-primary hover:bg-red-50 transition-colors flex items-center justify-center gap-1.5 border-t border-line"
        >
          {open ? 'بستن' : `نمایش همه ${items.length} واژه`}
          <span className={`text-[10px] transition-transform ${open ? 'rotate-180' : ''}`}>▼</span>
        </button>
      </div>
    </div>
  )
}
