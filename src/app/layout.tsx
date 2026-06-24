import type { Metadata } from 'next'
import { Vazirmatn, Inter } from 'next/font/google'
import './globals.css'
import BottomNav from '@/components/layout/BottomNav'

const vazir = Vazirmatn({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-vazir',
})

// Used only for German/Latin words via the .de / .de-block utility classes —
// keeps Persian UI on Vazirmatn while giving German text proper Latin typography.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-latin',
})

export const metadata: Metadata = {
  title: 'میلاد قاسمی | آموزش زبان آلمانی',
  description: 'آموزش آنلاین زبان آلمانی از سطح A1 تا C1 با میلاد قاسمی',
  keywords: 'آموزش زبان آلمانی, دوره آلمانی, میلاد قاسمی, TestDaF, Goethe',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.variable} ${inter.variable} font-vazir bg-[#fffbf5] text-ink antialiased`}>
        {children}
        <BottomNav />
      </body>
    </html>
  )
}
