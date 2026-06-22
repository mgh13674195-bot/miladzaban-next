'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const tabs = ['اطلاعات حساب', 'رمز عبور', 'اعلان‌ها']

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">

          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <Link href="/panel" className="w-9 h-9 rounded-xl bg-white border border-line grid place-items-center text-ink-soft hover:border-primary hover:text-primary transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </Link>
            <div>
              <h1 className="text-xl font-black">پروفایل و تنظیمات</h1>
              <p className="text-xs text-ink-soft">اطلاعات حساب کاربری خود را مدیریت کن.</p>
            </div>
          </div>

          {/* Avatar section */}
          <div className="card p-6 mb-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-gold grid place-items-center text-white font-black text-3xl">ع</div>
              <button className="absolute -bottom-1.5 -left-1.5 w-7 h-7 bg-white border-2 border-line rounded-full grid place-items-center text-xs hover:border-primary transition-colors">✏️</button>
            </div>
            <div className="text-center sm:text-right">
              <h2 className="font-black text-lg">علی رضایی</h2>
              <p className="text-sm text-ink-soft">ali@example.com</p>
              <div className="flex gap-2 mt-2 justify-center sm:justify-start">
                <span className="badge-red">سطح A1</span>
                <span className="badge-gold">زبان‌آموز فعال</span>
              </div>
            </div>
            <div className="sm:mr-auto">
              <button className="btn-ghost btn-sm">تغییر تصویر</button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 bg-cream rounded-2xl p-1 mb-6 border border-line">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all duration-200
                  ${activeTab === i ? 'bg-white text-primary shadow-sm' : 'text-ink-soft hover:text-ink'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          {activeTab === 0 && (
            <div className="card p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="input-label">نام</label>
                  <input className="input" defaultValue="علی" />
                </div>
                <div>
                  <label className="input-label">نام خانوادگی</label>
                  <input className="input" defaultValue="رضایی" />
                </div>
              </div>
              <div>
                <label className="input-label">ایمیل</label>
                <input className="input" type="email" defaultValue="ali@example.com" dir="ltr" />
              </div>
              <div>
                <label className="input-label">شماره موبایل</label>
                <input className="input" type="tel" placeholder="۰۹۱۲..." dir="ltr" />
              </div>
              <div>
                <label className="input-label">هدف یادگیری</label>
                <select className="input">
                  <option>مهاجرت به آلمان</option>
                  <option>تحصیل در آلمان</option>
                  <option>کار در آلمان</option>
                  <option>علاقه شخصی</option>
                </select>
              </div>
              <button className="btn-primary btn-sm">ذخیره تغییرات</button>
            </div>
          )}

          {activeTab === 1 && (
            <div className="card p-6 space-y-5">
              <div>
                <label className="input-label">رمز عبور فعلی</label>
                <input className="input" type="password" placeholder="••••••••" dir="ltr" />
              </div>
              <div>
                <label className="input-label">رمز عبور جدید</label>
                <input className="input" type="password" placeholder="حداقل ۸ کاراکتر" dir="ltr" />
              </div>
              <div>
                <label className="input-label">تکرار رمز عبور جدید</label>
                <input className="input" type="password" placeholder="••••••••" dir="ltr" />
              </div>
              <button className="btn-primary btn-sm">تغییر رمز عبور</button>
            </div>
          )}

          {activeTab === 2 && (
            <div className="card p-6 space-y-4">
              {[
                { label: 'ایمیل درس جدید', desc: 'وقتی درس جدید اضافه می‌شه بهت خبر بده' },
                { label: 'یادآوری مطالعه', desc: 'هر روز ساعت ۸ شب یادآوری بفرست' },
                { label: 'اطلاع‌رسانی تخفیف', desc: 'وقتی تخفیف جدید هست بهم بگو' },
                { label: 'خبرنامه هفتگی', desc: 'هر هفته یک مقاله آموزشی در ایمیل' },
              ].map((n, i) => (
                <div key={n.label} className="flex items-center justify-between gap-4 py-3 border-b border-line last:border-0">
                  <div>
                    <p className="text-sm font-bold">{n.label}</p>
                    <p className="text-xs text-ink-soft">{n.desc}</p>
                  </div>
                  <label className="relative flex-shrink-0">
                    <input type="checkbox" className="sr-only peer" defaultChecked={i < 2} />
                    <div className="w-11 h-6 bg-line rounded-full peer-checked:bg-primary transition-colors cursor-pointer" />
                    <div className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:-translate-x-5" />
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
