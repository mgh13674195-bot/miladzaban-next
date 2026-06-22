import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { blogPosts } from '@/data/blog'

interface Props { params: { id: string } }

export function generateStaticParams() {
  return blogPosts.map((p) => ({ id: p.id }))
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.id === params.id)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        {/* Hero */}
        <div className="h-56 sm:h-72 grid place-items-center text-8xl relative" style={{ background: `linear-gradient(135deg, ${post.gradient[0]}, ${post.gradient[1]})` }}>
          {post.emoji}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span className="absolute bottom-5 right-6 badge-dark">{post.category}</span>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-ink-soft mb-6">
            <Link href="/" className="text-primary hover:underline">خانه</Link>
            <span>/</span>
            <Link href="/blog" className="text-primary hover:underline">مقالات</Link>
            <span>/</span>
            <span className="text-ink-soft truncate max-w-[200px]">{post.title}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-black mb-4 leading-snug">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-ink-soft mb-8 pb-6 border-b border-line">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-gold grid place-items-center text-white font-black text-[10px]">م.ق</div>
              <span className="font-semibold">{post.author}</span>
            </div>
            <span className="text-line">·</span>
            <span>{post.date}</span>
            <span className="text-line">·</span>
            <span>۵ دقیقه مطالعه</span>
          </div>

          {/* Content (sample) */}
          <div className="prose-fa space-y-5 text-ink-soft leading-relaxed text-sm">
            <p>{post.excerpt}</p>
            <p>
              یادگیری زبان آلمانی یکی از چالش‌های جذاب در دنیای زبان‌آموزی است. در این مقاله سعی می‌کنیم با روش‌های علمی و عملی،
              مسیر یادگیری را برای شما هموارتر کنیم.
            </p>
            <h2 className="text-lg font-black text-ink">چرا این موضوع مهم است؟</h2>
            <p>
              بسیاری از زبان‌آموزان در این مرحله دچار سردرگمی می‌شوند. با رویکرد درست و تمرین منظم،
              می‌توانید در مدت کوتاه‌تری به نتیجه برسید.
            </p>
            <div className="bg-cream border border-line rounded-2xl p-5">
              <p className="font-bold text-ink mb-2">💡 نکته مهم</p>
              <p>تمرین روزانه ۲۰ دقیقه بهتر از تمرین ۳ ساعته یک‌بار در هفته است.</p>
            </div>
            <h2 className="text-lg font-black text-ink">نتیجه‌گیری</h2>
            <p>
              با پیروی از این روش‌ها و استمرار در تمرین، بدون شک پیشرفت چشمگیری خواهید داشت.
              سوالات خود را در بخش نظرات بنویسید.
            </p>
          </div>

          {/* Tags */}
          <div className="flex gap-2 flex-wrap mt-8 pt-6 border-t border-line">
            <span className="badge-gray">{post.category}</span>
            <span className="badge-gray">آلمانی</span>
            <span className="badge-gray">یادگیری زبان</span>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-10">
            <h2 className="font-black text-lg mb-5">مقالات مرتبط</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((r) => (
                <Link key={r.id} href={`/blog/${r.id}`} className="card-hover group flex gap-4 p-4">
                  <div className="w-16 h-16 rounded-2xl grid place-items-center text-2xl flex-shrink-0" style={{ background: `linear-gradient(135deg, ${r.gradient[0]}, ${r.gradient[1]})` }}>
                    {r.emoji}
                  </div>
                  <div>
                    <span className="badge-dark text-[10px] mb-1">{r.category}</span>
                    <h3 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors">{r.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
