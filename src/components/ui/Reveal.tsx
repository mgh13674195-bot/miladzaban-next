'use client'
import { useEffect, useRef, useState, type ReactNode } from 'react'

type Direction = 'up' | 'none'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
  as?: 'div' | 'li'
}

export default function Reveal({ children, className = '', delay = 0, direction = 'up', as = 'div' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)

    if (mq.matches) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as
  const hiddenTransform = direction === 'up' ? 'translate-y-5' : ''

  return (
    <Tag
      ref={ref as any}
      className={`${reduced ? '' : 'transition-all duration-700 ease-out'} ${
        visible ? 'opacity-100 translate-y-0' : `opacity-0 ${hiddenTransform}`
      } ${className}`}
      style={!reduced ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
