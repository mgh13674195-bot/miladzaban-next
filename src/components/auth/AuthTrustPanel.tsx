const stats = [
  { num: '+۴۰۰۰', lbl: 'زبان‌آموز فعال' },
  { num: '۴.۹', lbl: 'رضایت کاربران' },
  { num: '۶', lbl: 'سطح A1 تا C1' },
]

export default function AuthTrustPanel() {
  return (
    <div className="relative hidden lg:flex flex-col justify-between h-full p-12 overflow-hidden">
      {/* Layered gradient background */}
      <div className="absolute inset-0 gradient-mesh-dark bg-ink" />
      <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gold/15 blur-3xl" />

      {/* Logo */}
      <div className="relative z-10 flex items-center gap-2.5 font-black text-lg text-white">
        <div className="w-9 h-9 rounded-xl overflow-hidden flex flex-col shadow-md flex-shrink-0">
          <div className="flex-1 bg-white/10" />
          <div className="flex-1 bg-primary" />
          <div className="flex-1 bg-gold" />
        </div>
        میلاد <span className="text-gold">قاسمی</span>
      </div>

      {/* Value proposition + quote */}
      <div className="relative z-10">
        <h2 className="text-3xl font-black text-white leading-tight mb-4">
          مسیر شما برای تسلط<br />بر زبان آلمانی، اینجاست.
        </h2>
        <p className="text-white/65 text-sm leading-relaxed mb-8 max-w-sm">
          از سطح A1 تا C1 با محتوای اصولی، آمادگی تخصصی آزمون‌های بین‌المللی و همراهی مستقیم استاد.
        </p>

        <div className="glass-card bg-white/8 border-white/15 p-5 max-w-sm">
          <div className="flex items-center gap-1 mb-3">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} className="text-gold text-sm">{s}</span>
            ))}
          </div>
          <p className="text-white text-sm leading-relaxed mb-4">
            «در ۸ ماه از صفر به سطح B1 رسیدم. روش تدریس میلاد واقعاً اصولی و قابل‌اعتماده.»
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-gold grid place-items-center text-white font-black text-xs flex-shrink-0">
              س
            </div>
            <div>
              <p className="text-white text-xs font-bold leading-tight">سارا احمدی</p>
              <p className="text-white/50 text-[11px] mt-0.5">A1 → B1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stat chips */}
      <div className="relative z-10 grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.lbl} className="bg-white/8 border border-white/15 rounded-2xl px-3 py-3 text-center backdrop-blur-sm">
            <div className="text-lg font-black text-gold leading-none">{s.num}</div>
            <div className="text-[11px] text-white/60 mt-1">{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
