import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { blogPosts } from '@/data/blog'

const categories = ['همه', 'گرامر', 'لغت', 'مهارت', 'آزمون', 'مهاجرت']

export default function BlogPage() {
  const [featured, ...rest] = blogPosts
  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] text-white py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <div className="badge bg-gold/20 text-gold border-gold/30 mb-4">مطالب آموزشی</div>
              <h1 className="text-3xl sm:text-4xl font-black mb-3">مقالات و نکات آموزشی</h1>
              <p className="text-white/65">راهکارهای واقعی برای یادگیری سریع‌تر زبان آلمانی.</p>
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div className="sticky top-16 z-30 bg-cream/90 backdrop-blur-xl border-b border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <span key={cat} className={`px-4 py-1.5 rounded-full text-sm font-bold cursor-pointer whitespace-nowrap transition-all
                ${cat === 'همه' ? 'bg-primary text-white' : 'bg-white border border-line text-ink-soft hover:border-primary hover:text-primary'}`}>
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          {/* Featured */}
          <Link href={`/blog/${featured.id}`} className="card-hover group grid grid-cols-1 md:grid-cols-[1.4fr_1fr] mb-10 overflow-hidden">
            <div className="h-56 md:h-auto grid place-items-center text-7xl relative" style={{ background: `linear-gradient(135deg, ${featured.gradient[0]}, ${featured.gradient[1]})` }}>
              {featured.emoji}
              <span className="absolute top-4 right-4 badge-dark">{featured.category}</span>
              <span className="absolute bottom-4 left-4 badge bg-white/20 text-white border-white/20">ویژه</span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-xl font-black mb-3 group-hover:text-primary transition-colors leading-snug">{featured.title}</h2>
              <p className="text-sm text-ink-soft mb-6 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-ink-soft">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-gold grid place-items-center text-white font-black text-[10px]">م.ق</div>
                <span>{featured.author}</span>
                <span className="text-line">·</span>
                <span>{featured.date}</span>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="card-hover group flex flex-col">
                <div className="h-44 grid place-items-center text-5xl relative" style={{ background: `linear-gradient(135deg, ${post.gradient[0]}, ${post.gradient[1]})` }}>
                  {post.emoji}
                  <span className="absolute top-3 right-3 badge-dark text-[10px]">{post.category}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-black text-base mb-2 group-hover:text-primary transition-colors leading-snug flex-1">{post.title}</h3>
                  <p className="text-sm text-ink-soft mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-ink-soft border-t border-line pt-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-gold grid place-items-center text-white font-black text-[8px]">م.ق</div>
                      {post.author}
                    </div>
                    {post.date}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
