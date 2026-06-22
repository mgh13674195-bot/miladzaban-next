'use client'
import { useState } from 'react'

const SIZES = { sm: 'w-3.5 h-3.5', md: 'w-4 h-4', lg: 'w-6 h-6' } as const

interface Props {
  value: number
  size?: keyof typeof SIZES
  interactive?: boolean
  onChange?: (n: number) => void
}

export default function StarRating({ value, size = 'md', interactive = false, onChange }: Props) {
  const [hover, setHover] = useState(0)
  const active = hover || value

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const star = (
          <svg key={i} className={`${SIZES[size]} ${i <= active ? 'text-gold' : 'text-line'}`} viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )
        if (!interactive) return star
        return (
          <button
            key={i}
            type="button"
            aria-label={`${i} ستاره`}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(0)}
            onClick={() => onChange?.(i)}
            className="transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 rounded"
          >
            {star}
          </button>
        )
      })}
    </div>
  )
}
