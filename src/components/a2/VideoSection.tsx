'use client'
import { A2Lesson } from '@/types/a2'

const PLACEHOLDER = 'TELEGRAM_PLACEHOLDER'

export default function VideoSection({ lesson }: { lesson: A2Lesson }) {
  const hasVideo = lesson.videoUrl && lesson.videoUrl !== PLACEHOLDER

  return (
    <div className="card p-6">
      <h2 className="font-black text-lg mb-4 flex items-center gap-2">
        <span className="text-2xl">🎬</span> ویدیو آموزشی
      </h2>

      {hasVideo ? (
        <div className="rounded-2xl overflow-hidden aspect-video bg-black">
          <iframe
            src={lesson.videoUrl}
            className="w-full h-full"
            allowFullScreen
            allow="autoplay; encrypted-media"
          />
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink to-[#2d3f37] p-8 text-white text-center">
          <div className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-white/10 grid place-items-center mx-auto mb-4">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-gold" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <p className="font-bold mb-2">ویدیو در کانال تلگرام منتشر می‌شود</p>
            <p className="text-white/60 text-sm mb-5">
              ویدیوی این درس به‌زودی در کانال اختصاصی دوره A2 منتشر خواهد شد.
            </p>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-ink font-black px-5 py-2.5 rounded-xl text-sm hover:bg-gold-soft transition-colors"
            >
              پیوستن به کانال
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
