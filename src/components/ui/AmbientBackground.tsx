'use client'
import { useEffect, useRef } from 'react'

/**
 * Decorative, page-level ambient background: soft champagne/gold blurred
 * blobs behind the content, with an extremely subtle, slow parallax drift
 * on pointer move and scroll. Static when prefers-reduced-motion is set.
 */
export default function AmbientBackground() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const pointerRange = isMobile ? 6 : 16 // px
    const scrollMultiplier = isMobile ? 0.008 : 0.015
    const scrollClamp = 18 // px

    let ticking = false

    const onPointerMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      root.style.setProperty('--amb-mx', `${(nx * pointerRange).toFixed(2)}px`)
      root.style.setProperty('--amb-my', `${(ny * pointerRange).toFixed(2)}px`)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const sy = Math.max(-scrollClamp, Math.min(scrollClamp, window.scrollY * scrollMultiplier))
        root.style.setProperty('--amb-sy', `${sy.toFixed(2)}px`)
        ticking = false
      })
    }

    // Touch devices rarely fire pointermove without a drag, so this is
    // naturally desktop-only — satisfies "simplify movement on mobile".
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ '--amb-mx': '0px', '--amb-my': '0px', '--amb-sy': '0px' } as React.CSSProperties}
    >
      {/* Warm ivory glow — large, soft, top area */}
      <div
        className="absolute -top-1/4 left-1/4 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full blur-3xl
                   transition-transform duration-[1400ms] ease-out motion-reduce:!transform-none"
        style={{
          background: 'rgba(255, 249, 237, 0.55)',
          transform: 'translate3d(calc(var(--amb-mx) * 0.4), calc(var(--amb-my) * 0.4 + var(--amb-sy) * 0.6), 0)',
        }}
      />

      {/* Pale champagne — right side */}
      <div
        className="absolute top-1/3 -right-1/4 w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full blur-3xl
                   transition-transform duration-[1600ms] ease-out motion-reduce:!transform-none"
        style={{
          background: 'rgba(232, 211, 160, 0.35)',
          transform: 'translate3d(calc(var(--amb-mx) * -0.6), calc(var(--amb-my) * 0.5 + var(--amb-sy) * -0.4), 0)',
        }}
      />

      {/* Soft gold glow — lower left */}
      <div
        className="absolute bottom-0 -left-1/4 w-[50vw] h-[50vw] max-w-[550px] max-h-[550px] rounded-full blur-3xl
                   transition-transform duration-[1800ms] ease-out motion-reduce:!transform-none"
        style={{
          background: 'rgba(184, 138, 46, 0.18)',
          transform: 'translate3d(calc(var(--amb-mx) * 0.5), calc(var(--amb-my) * -0.5 + var(--amb-sy) * 0.5), 0)',
        }}
      />

      {/* Faint wine accent — very subtle depth, center-bottom */}
      <div
        className="absolute bottom-1/4 left-1/2 w-[40vw] h-[40vw] max-w-[420px] max-h-[420px] rounded-full blur-3xl
                   transition-transform duration-[2000ms] ease-out motion-reduce:!transform-none"
        style={{
          background: 'rgba(111, 29, 27, 0.06)',
          transform: 'translate3d(calc(var(--amb-mx) * -0.3), calc(var(--amb-my) * 0.3 + var(--amb-sy) * 0.3), 0)',
        }}
      />
    </div>
  )
}
