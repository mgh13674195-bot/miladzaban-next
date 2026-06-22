'use client'
import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Wraps hero content with a subtle scroll-driven fade/scale-out as the
 * user scrolls past it — disabled on mobile and prefers-reduced-motion,
 * since it's a purely decorative "cinematic exit" effect.
 */
export default function CinematicScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches
    if (mq.matches || !isDesktop) return

    const el = ref.current
    if (!el) return

    let ticking = false
    const range = 500 // px of scroll over which the effect plays out

    const update = () => {
      ticking = false
      const progress = Math.min(Math.max(window.scrollY / range, 0), 1)
      const opacity = 1 - progress * 0.6
      const scale = 1 - progress * 0.06
      const translateY = progress * 30
      el.style.opacity = String(opacity)
      el.style.transform = `translateY(${translateY}px) scale(${scale})`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div ref={ref} className="will-change-transform">{children}</div>
}
