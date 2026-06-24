'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  {
    label: 'دوره‌ها',
    href: '/courses',
    sub: [
      { label: 'آلمانی A1 — مبتدی', href: '/courses/a1' },
      { label: 'آلمانی A2 — پایه', href: '/courses/a2' },
      { label: 'آلمانی B1 — متوسطه', href: '/courses/b1' },
      { label: 'آلمانی B2 — پیش‌پیشرفته', href: '/courses/b2' },
      { label: 'آلمانی C1 — پیشرفته', href: '/courses/c1' },
    ],
  },
  { label: 'مطالب آموزشی', href: '/blog' },
  { label: 'کتابخانه', href: '/#library' },
  { label: 'تماس با ما', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSub, setOpenSub] = useState<string | null>(null)

  // A2 lessons show the shared Navbar (stacked above their own lesson header).
  // Other levels keep their dedicated in-page lesson topbar instead, to avoid
  // a duplicated/second navigation bar there.
  const isNonA2Lesson = pathname?.includes('/lessons/') && !pathname?.includes('/a2/lessons/')

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isNonA2Lesson ? 'hidden' : ''}`}>
        <div className="glass border-b border-line/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 font-black text-lg flex-shrink-0 group">
              <Image
                src="/image/flag-germany-brush.png"
                alt="German flag"
                width={44}
                height={55}
                className="w-11 h-auto object-contain flex-shrink-0 group-hover:scale-105 transition-transform"
              />
              <span className="text-xl text-[#111111]">میلاد قاسمی</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex flex-1 justify-center">
              <ul className="flex gap-1 list-none">
                {navLinks.map((item) => (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.sub && setOpenSub(item.label)}
                    onMouseLeave={() => setOpenSub(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150
                        ${pathname === item.href ? 'bg-primary-light text-primary' : 'text-ink-soft hover:bg-cream hover:text-ink'}`}
                    >
                      {item.label}
                      {item.sub && (
                        <svg className={`w-3 h-3 transition-transform duration-200 ${openSub === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>

                    {item.sub && openSub === item.label && (
                      <div className="absolute top-full right-0 pt-2 min-w-[220px] z-50">
                      <div className="glass rounded-2xl p-2 shadow-2xl border border-line animate-in fade-in slide-in-from-top-2 duration-150">
                        {item.sub.map((s) => (
                          <Link
                            key={s.label}
                            href={s.href}
                            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-ink-soft hover:bg-primary-light hover:text-primary transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 flex-shrink-0" />
                            {s.label}
                          </Link>
                        ))}
                      </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <Link href="/login" className="btn-ghost btn-sm">ورود</Link>
              <Link href="/signup" className="btn-primary btn-sm">ثبت‌نام رایگان</Link>
              <Link href="/panel" className="btn-dark btn-sm gap-1.5">
                <span className="text-base">👤</span> پنل
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-10 h-10 rounded-xl bg-cream grid place-items-center text-ink hover:bg-line transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="منو"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[400] flex" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" />
          <div
            className="relative mr-auto w-[300px] max-w-[85vw] h-full bg-white flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between p-5 border-b border-line">
              <Link href="/" className="flex items-center gap-2 font-black text-base" onClick={() => setMobileOpen(false)}>
                <Image
                  src="/image/flag-germany-brush.png"
                  alt="German flag"
                  width={40}
                  height={50}
                  className="w-10 h-auto object-contain flex-shrink-0"
                />
                <span className="text-lg text-[#111111]">میلاد قاسمی</span>
              </Link>
              <button
                className="w-8 h-8 rounded-full bg-cream grid place-items-center text-sm text-ink-soft hover:bg-line"
                onClick={() => setMobileOpen(false)}
              >✕</button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {navLinks.map((item) => (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold text-ink hover:bg-cream transition-colors text-right"
                    onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                  >
                    <span>{item.label}</span>
                    {item.sub && (
                      <svg className={`w-4 h-4 transition-transform ${openSub === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                  {item.sub && openSub === item.label && (
                    <div className="pr-4 mt-1 space-y-0.5">
                      {item.sub.map((s) => (
                        <Link
                          key={s.label}
                          href={s.href}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-ink-soft hover:text-primary hover:bg-primary-light transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="w-1 h-1 rounded-full bg-current opacity-40 flex-shrink-0" />
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Auth buttons */}
            <div className="p-4 border-t border-line space-y-2">
              <Link href="/login" className="btn-ghost w-full justify-center text-sm" onClick={() => setMobileOpen(false)}>ورود</Link>
              <Link href="/signup" className="btn-primary w-full justify-center text-sm" onClick={() => setMobileOpen(false)}>ثبت‌نام رایگان</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
