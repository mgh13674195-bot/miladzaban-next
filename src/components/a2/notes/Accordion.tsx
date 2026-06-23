'use client'
import { useState } from 'react'

interface Props {
  title: string
  subtitle?: string
  defaultOpen?: boolean
  children: React.ReactNode
}

/** Shared collapsible row used by vocabulary, grammar, and dialogue panels. */
export default function Accordion({ title, subtitle, defaultOpen = false, children }: Props) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-line rounded-2xl overflow-hidden bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 p-4 text-right hover:bg-cream/60 transition-colors"
      >
        <div className="min-w-0">
          <p className="font-bold text-sm truncate">{title}</p>
          {subtitle && <p className="text-xs text-ink-soft mt-0.5 truncate">{subtitle}</p>}
        </div>
        <svg
          className={`w-4 h-4 text-ink-soft flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="p-4 pt-0 border-t border-line">{children}</div>}
    </div>
  )
}
