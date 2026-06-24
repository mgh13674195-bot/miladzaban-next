'use client'
import Link from 'next/link'
import AuthTrustPanel from '@/components/auth/AuthTrustPanel'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Branded trust panel — desktop only */}
      <div className="hidden lg:block lg:w-[42%] flex-shrink-0">
        <AuthTrustPanel />
      </div>

      {/* Form column */}
      <div className="relative flex-1 flex flex-col gradient-mesh">
        {/* Top bar — mobile/tablet logo, hidden where the trust panel already shows one */}
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
                <div className="text-4xl mb-3">👋</div>
                <h1 className="text-2xl font-black mb-1">خوش برگشتی!</h1>
                <p className="text-sm text-ink-soft">برای ادامه یادگیری وارد شو.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="input-label">ایمیل</label>
                  <input type="email" className="input" placeholder="example@email.com" dir="ltr" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="input-label !mb-0">رمز عبور</label>
                    <span className="text-xs text-ink-soft/60 cursor-default" title="به‌زودی">فراموش کردی؟</span>
                  </div>
                  <input type="password" className="input" placeholder="••••••••" dir="ltr" />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" className="w-4 h-4 accent-primary" />
                  <label htmlFor="remember" className="text-sm text-ink-soft cursor-pointer">مرا به خاطر بسپار</label>
                </div>

                <button type="submit" className="btn-primary w-full justify-center text-sm py-3.5">
                  ورود به حساب
                </button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-line" /></div>
                <div className="relative flex justify-center"><span className="bg-white px-4 text-xs text-ink-soft">یا</span></div>
              </div>

              <button className="w-full flex items-center justify-center gap-3 border-2 border-line rounded-2xl py-3 text-sm font-bold text-ink hover:border-ink hover:bg-cream transition-all">
                <span className="text-xl">G</span> ورود با Google
              </button>

              <p className="text-center text-sm text-ink-soft mt-6">
                حساب نداری؟{' '}
                <Link href="/signup" className="text-primary font-bold hover:underline">ثبت‌نام رایگان</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
