'use client'
import { useState } from 'react'
import Link from 'next/link'
import AuthTrustPanel from '@/components/auth/AuthTrustPanel'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^\+?[0-9]{8,15}$/

function validateIdentifier(value: string): string | null {
  const trimmed = value.trim()
  if (!trimmed) return 'لطفاً ایمیل یا شماره تلفن را وارد کنید'
  const isEmail = trimmed.includes('@')
  const normalizedPhone = trimmed.replace(/[\s-]/g, '')
  if (isEmail ? !EMAIL_RE.test(trimmed) : !PHONE_RE.test(normalizedPhone)) {
    return 'ایمیل یا شماره تلفن معتبر وارد کنید'
  }
  return null
}

export default function SignupPage() {
  const [identifier, setIdentifier] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationError = validateIdentifier(identifier)
    if (validationError) {
      setError(validationError)
      setNotice(false)
      return
    }
    setError(null)
    setNotice(true)
  }

  return (
    <div className="min-h-screen flex">
      {/* Branded trust panel — desktop only */}
      <div className="hidden lg:block lg:w-[42%] flex-shrink-0">
        <AuthTrustPanel />
      </div>

      {/* Form column */}
      <div className="relative flex-1 flex flex-col gradient-mesh">
        <div className="h-14 flex items-center px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-2 font-black text-base">
            <div className="w-7 h-7 rounded-lg overflow-hidden flex flex-col flex-shrink-0">
              <div className="flex-1 bg-[#1a1a1a]" /><div className="flex-1 bg-primary" /><div className="flex-1 bg-gold" />
            </div>
            میلاد <span className="text-primary">قاسمی</span>
          </Link>
        </div>

        <div className="relative z-10 flex-1 flex items-center justify-center p-4 py-10">
          <div className="w-full max-w-md">
            <div className="glass-card p-8 shadow-xl shadow-primary/10">
              <div className="text-center mb-8">
                <div className="text-4xl mb-3">🇩🇪</div>
                <h1 className="text-2xl font-black mb-1">ثبت‌نام رایگان</h1>
                <p className="text-sm text-ink-soft">اولین درس را رایگان شروع کن.</p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="input-label">نام و نام خانوادگی</label>
                  <input type="text" className="input" placeholder="مثلاً علی رضایی" />
                </div>
                <div>
                  <label className="input-label">ایمیل یا شماره تلفن</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="ایمیل یا شماره تلفن خود را وارد کنید"
                    dir="ltr"
                    value={identifier}
                    onChange={(e) => { setIdentifier(e.target.value); setError(null); setNotice(false) }}
                  />
                  {error && <p className="text-xs text-red-600 mt-1.5">{error}</p>}
                </div>
                <div>
                  <label className="input-label">رمز عبور</label>
                  <input type="password" className="input" placeholder="حداقل ۸ کاراکتر" dir="ltr" />
                </div>
                <div>
                  <label className="input-label">تکرار رمز عبور</label>
                  <input type="password" className="input" placeholder="••••••••" dir="ltr" />
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" className="w-4 h-4 accent-primary mt-0.5 flex-shrink-0" />
                  <label htmlFor="terms" className="text-xs text-ink-soft cursor-pointer leading-relaxed">
                    با <span className="text-ink-soft/70 cursor-default" title="به‌زودی">قوانین و مقررات</span> و{' '}
                    <span className="text-ink-soft/70 cursor-default" title="به‌زودی">حریم خصوصی</span> موافقم.
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-sm py-3.5">
                  ایجاد حساب رایگان
                </button>

                {notice && (
                  <p className="text-xs text-ink-soft bg-cream border border-line rounded-xl p-3 leading-relaxed">
                    ثبت‌نام هنوز فعال نشده است. این بخش به‌زودی با سیستم امن ایمیل یا شماره تلفن راه‌اندازی می‌شود.
                  </p>
                )}
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-line" /></div>
                <div className="relative flex justify-center"><span className="bg-white px-4 text-xs text-ink-soft">یا</span></div>
              </div>

              <button
                type="button"
                disabled
                title="به‌زودی"
                className="w-full flex items-center justify-center gap-3 border-2 border-line rounded-2xl py-3 text-sm font-bold text-ink-soft/50 opacity-60 cursor-not-allowed"
              >
                <span className="text-xl">G</span> ثبت‌نام با Google (به‌زودی)
              </button>

              <p className="text-center text-sm text-ink-soft mt-6">
                قبلاً ثبت‌نام کردی؟{' '}
                <Link href="/login" className="text-primary font-bold hover:underline">ورود</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
