import Link from 'next/link'

const cols = {
  'دوره‌ها': [
    { label: 'آلمانی A1', href: '/courses/a1' },
    { label: 'آلمانی A2', href: '/courses/a2' },
    { label: 'آلمانی B1', href: '/courses/b1' },
    { label: 'آلمانی B2', href: '/courses/b2' },
    { label: 'آلمانی C1', href: '/courses/c1' },
  ],
  'محتوا': [
    { label: 'مطالب آموزشی', href: '/blog' },
    { label: 'کتابخانه', href: '/#library' },
    { label: 'آمادگی TestDaF', href: '/courses/b1' },
    { label: 'آمادگی Goethe', href: '/courses/b1' },
  ],
  'حساب': [
    { label: 'ورود', href: '/login' },
    { label: 'ثبت‌نام', href: '/signup' },
    { label: 'داشبورد', href: '/panel' },
    { label: 'پروفایل', href: '/profile' },
  ],
}

const socials = [
  { label: 'یوتیوب', icon: '▶', href: '#' },
  { label: 'اینستاگرام', icon: '◉', href: '#' },
  { label: 'تلگرام', icon: '✈', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-16 pb-24 md:pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-black text-xl mb-4 group">
              <div className="w-9 h-9 rounded-xl overflow-hidden flex flex-col flex-shrink-0 group-hover:scale-105 transition-transform">
                <div className="flex-1 bg-white/10 border border-white/10" />
                <div className="flex-1 bg-primary" />
                <div className="flex-1 bg-gold" />
              </div>
              میلاد <span className="text-gold">قاسمی</span>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-[260px]">
              آموزش زبان آلمانی از A1 تا C1 همراه با آمادگی آزمون‌های بین‌المللی و مشاوره مهاجرت.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/8 grid place-items-center text-sm hover:bg-primary hover:-translate-y-0.5 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-gold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-white/55 text-sm hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <span>© ۱۴۰۳ میلاد قاسمی. تمامی حقوق محفوظ است.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">حریم خصوصی</a>
            <a href="#" className="hover:text-white transition-colors">قوانین استفاده</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
