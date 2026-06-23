'use client'
import { useEffect, useRef, useState } from 'react'

const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

function toPersianDigits(input: string) {
  return input.replace(/[0-9]/g, (d) => PERSIAN_DIGITS[Number(d)])
}

function formatValue(n: number, decimals: number, useGrouping: boolean) {
  const fixed = n.toFixed(decimals)
  if (!useGrouping) return fixed
  const [intPart, decPart] = fixed.split('.')
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return decPart !== undefined ? `${grouped}.${decPart}` : grouped
}

interface Props {
  value: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  useGrouping?: boolean
  className?: string
}

export default function AnimatedCounter({
  value,
  duration = 1600,
  decimals = 0,
  prefix = '',
  suffix = '',
  useGrouping = false,
  className = '',
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)
  const [display, setDisplay] = useState(() => formatValue(0, decimals, useGrouping))

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      hasAnimated.current = true
      setDisplay(formatValue(value, decimals, useGrouping))
      return
    }

    const el = ref.current
    if (!el) return

    const runAnimation = () => {
      const start = performance.now()

      const step = (now: number) => {
        const elapsed = now - start
        const t = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setDisplay(formatValue(value * eased, decimals, useGrouping))
        if (t < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          runAnimation()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration, decimals, useGrouping])

  const combined = `${prefix}${toPersianDigits(display)}${suffix}`

  return (
    <span ref={ref} dir="ltr" className={`inline-block ${className}`}>
      {combined}
    </span>
  )
}
