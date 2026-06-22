import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <div className="text-8xl mb-6">🇩🇪</div>
        <h1 className="text-4xl font-black mb-3">۴۰۴</h1>
        <p className="text-ink-soft mb-8">صفحه‌ای که دنبالش میگردی پیدا نشد.</p>
        <a href="/" className="btn-primary">→ برگشت به خانه</a>
      </main>
      <Footer />
    </>
  )
}
