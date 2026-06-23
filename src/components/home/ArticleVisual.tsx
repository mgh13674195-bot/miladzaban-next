interface IconProps {
  className?: string
}

function GrammarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v18.5a2.5 2.5 0 01-2.5 2.5H6.5A2.5 2.5 0 014 20.5v-16z" />
    </svg>
  )
}

function ExamIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7m-9-5v3.5c0 .55 4.03 2.5 9 2.5s9-1.95 9-2.5V9" />
    </svg>
  )
}

function SkillIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h1a1 1 0 001-1v-4a1 1 0 00-1-1H3m18 6a2 2 0 01-2 2h-1a1 1 0 01-1-1v-4a1 1 0 011-1h3" />
    </svg>
  )
}

function ArticleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h7l7 7v7a2 2 0 01-2 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6M9 17h4" />
    </svg>
  )
}

const ICONS: Record<string, (props: IconProps) => JSX.Element> = {
  'گرامر': GrammarIcon,
  'آزمون': ExamIcon,
  'مهارت': SkillIcon,
}

interface Props {
  gradient: [string, string]
  category: string
  size?: 'lg' | 'sm'
  className?: string
}

export default function ArticleVisual({ gradient, category, size = 'sm', className = '' }: Props) {
  const Icon = ICONS[category] ?? ArticleIcon

  return (
    <div
      className={`relative overflow-hidden ${size === 'lg' ? 'h-48 lg:h-auto' : 'h-40'} ${className}`}
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }}
    >
      {/* Abstract dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}
      />
      {/* Soft glow */}
      <div className="pointer-events-none absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-white/15 blur-2xl" />
      <div className="pointer-events-none absolute -top-8 -right-8 w-28 h-28 rounded-full bg-black/10 blur-2xl" />

      {/* Icon chip */}
      <div
        className={`absolute bottom-4 right-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 grid place-items-center text-white shadow-sm
          ${size === 'lg' ? 'w-14 h-14' : 'w-10 h-10'}`}
      >
        <Icon className={size === 'lg' ? 'w-7 h-7' : 'w-5 h-5'} />
      </div>
    </div>
  )
}
