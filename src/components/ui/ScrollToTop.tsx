'use client'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-7 left-7 w-11 h-11 rounded-full bg-primary text-white text-xl shadow-lg shadow-primary/40 z-50 grid place-items-center hover:-translate-y-1 transition-transform"
      aria-label="برگشت به بالا"
    >
      ↑
    </button>
  )
}
