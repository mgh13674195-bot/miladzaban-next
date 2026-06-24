import Link from 'next/link'
import Image from 'next/image'

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
  {
    label: 'یوتیوب',
    ariaLabel: 'YouTube',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'اینستاگرام',
    ariaLabel: 'Instagram',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'تلگرام',
    ariaLabel: 'Telegram',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M21.5 3.5L2.7 11.1c-1 .4-1 1 .1 1.3l4.6 1.4 1.8 5.6c.2.6.4.7.9.4l2.6-2 4.6 3.4c.6.4 1.1.2 1.3-.5l3.2-15.1c.2-.9-.4-1.3-1.3-.9zM8.7 14.3l-2.1-.7L17 6.5c.2-.1.4 0 .2.2L9.5 13c-.2.2-.4.5-.5 1z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-16 pb-24 md:pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-black text-xl mb-4 group">
              <Image
                src="/image/flag-germany-brush.png"
                alt="German flag"
                width={44}
                height={55}
                className="w-11 h-auto object-contain flex-shrink-0 group-hover:scale-105 transition-transform"
              />
              میلاد <span className="text-gold">قاسمی</span>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-[260px]">
              آموزش زبان آلمانی از A1 تا C1 همراه با آمادگی آزمون‌های بین‌المللی و مشاوره مهاجرت.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <span
                  key={s.label}
                  role="img"
                  aria-label={`${s.ariaLabel} (به‌زودی)`}
                  title="به‌زودی"
                  className="w-10 h-10 rounded-xl bg-white/8 grid place-items-center text-white/50 cursor-default"
                >
                  {s.icon}
                </span>
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
            <span className="cursor-default" title="به‌زودی">حریم خصوصی</span>
            <span className="cursor-default" title="به‌زودی">قوانین استفاده</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
