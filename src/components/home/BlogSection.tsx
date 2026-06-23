import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import ArticleVisual from '@/components/home/ArticleVisual'
import { blogPosts } from '@/data/blog'

export default function BlogSection() {
  const [featured, ...rest] = blogPosts

  return (
    <section id="blog" className="relative py-20 sm:py-24 bg-white overflow-hidden">
      {/* Subtle background presence so the section doesn't feel disconnected */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary-light/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-24 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow">مطالب آموزشی</div>
            <h2 className="section-title">جدیدترین <span className="text-primary">مقالات</span></h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 border border-line rounded-full px-4 py-2 text-sm font-bold text-ink-soft
                       hover:border-primary hover:text-primary hover:bg-primary-light/40 transition-all duration-300 flex-shrink-0"
          >
            همه مقالات
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </Reveal>

        {/* Featured article — one complete card, flex-based so columns share equal height naturally */}
        <Reveal delay={80}>
          <Link
            href={`/blog/${featured.id}`}
            className="glass-card-hover group flex flex-col lg:flex-row mb-6"
          >
            <ArticleVisual
              gradient={featured.gradient}
              category={featured.category}
              size="lg"
              className="lg:w-[42%] flex-shrink-0"
            />
            <div className="p-6 sm:p-8 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge-dark text-[11px]">{featured.category}</span>
                <span className="badge badge-gold text-[11px]">مقاله ویژه</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black mb-3 leading-snug group-hover:text-primary transition-colors">
                {featured.title}
              </h3>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed flex-1">{featured.excerpt}</p>

              <div className="flex items-center justify-between text-xs text-ink-soft border-t border-line pt-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-gold grid place-items-center text-white font-black text-[10px] flex-shrink-0">
                    م.ق
                  </div>
                  <span className="font-semibold">{featured.author}</span>
                  <span className="text-ink-soft/50">·</span>
                  <span>{featured.date}</span>
                </div>
                <span className="hidden md:inline-flex items-center gap-1 font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  بیشتر بخوانید
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </Reveal>

        {/* Secondary articles — uniform grid, no height-stretch mismatch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post, i) => (
            <Reveal key={post.id} delay={180 + i * 90}>
              <Link href={`/blog/${post.id}`} className="glass-card-hover group flex flex-col h-full">
                <ArticleVisual gradient={post.gradient} category={post.category} size="sm" />
                <div className="p-5 flex flex-col flex-1">
                  <span className="badge-dark text-[10px] self-start mb-3">{post.category}</span>
                  <h3 className="text-sm font-black mb-2 leading-relaxed group-hover:text-primary transition-colors flex-1">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-ink-soft border-t border-line pt-3 mt-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-gold grid place-items-center text-white font-black text-[8px] flex-shrink-0">
                        م.ق
                      </div>
                      {post.author}
                    </div>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
