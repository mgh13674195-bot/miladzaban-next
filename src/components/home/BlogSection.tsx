import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { blogPosts } from '@/data/blog'

export default function BlogSection() {
  const [featured, ...rest] = blogPosts
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-primary font-bold text-sm tracking-wide mb-1">مطالب آموزشی</div>
            <h2 className="section-title">جدیدترین <span className="text-primary">مقالات</span></h2>
          </div>
          <Link href="/blog" className="btn-ghost btn-sm flex-shrink-0">همه مقالات ←</Link>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr] gap-6">
          {/* Featured */}
          <Reveal as="div">
          <Link href={`/blog/${featured.id}`} className="card-hover group row-span-1">
            <div
              className="h-52 grid place-items-center text-6xl relative"
              style={{ background: `linear-gradient(135deg, ${featured.gradient[0]}, ${featured.gradient[1]})` }}
            >
              {featured.emoji}
              <span className="absolute top-3 right-3 badge-dark">{featured.category}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black mb-2 leading-snug group-hover:text-primary transition-colors">{featured.title}</h3>
              <p className="text-sm text-ink-soft mb-4 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-ink-soft">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-gold grid place-items-center text-white font-black text-[9px]">م.ق</div>
                  {featured.author}
                </div>
                <span>{featured.date}</span>
              </div>
            </div>
          </Link>
          </Reveal>

          {/* Side cards */}
          {rest.map((post, i) => (
            <Reveal key={post.id} delay={(i + 1) * 100}>
              <Link href={`/blog/${post.id}`} className="card-hover group flex flex-col">
                <div
                  className="h-36 grid place-items-center text-4xl relative"
                  style={{ background: `linear-gradient(135deg, ${post.gradient[0]}, ${post.gradient[1]})` }}
                >
                  {post.emoji}
                  <span className="absolute top-3 right-3 badge-dark text-[10px]">{post.category}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-sm font-black mb-2 leading-relaxed group-hover:text-primary transition-colors flex-1">{post.title}</h3>
                  <div className="flex items-center justify-between text-xs text-ink-soft border-t border-line pt-3 mt-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-gold grid place-items-center text-white font-black text-[8px]">م.ق</div>
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
