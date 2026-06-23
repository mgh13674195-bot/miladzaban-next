import { A2Lesson, A2LessonVideo } from '@/types/a2'

function VideoCard({ video }: { video: A2LessonVideo }) {
  const hasUrl = Boolean(video.url)

  return (
    <div className="flex items-center gap-4 bg-cream rounded-2xl p-4">
      <div className="w-11 h-11 rounded-xl bg-ink/90 text-gold grid place-items-center flex-shrink-0">
        {hasUrl ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-bold text-sm truncate">{video.title}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="badge badge-green text-[10px]">رایگان</span>
          {video.duration && <span className="text-xs text-ink-soft">{video.duration}</span>}
        </div>
      </div>

      {hasUrl ? (
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-sm flex-shrink-0"
        >
          {video.source === 'telegram' ? 'مشاهده در تلگرام' : 'شروع ویدیو'}
        </a>
      ) : (
        <span className="text-xs text-ink-soft/60 flex-shrink-0 px-3">به‌زودی</span>
      )}
    </div>
  )
}

export default function VideoSection({ lesson }: { lesson: A2Lesson }) {
  return (
    <>
      <div className="card p-6">
        <h2 className="font-black text-lg mb-1 flex items-center gap-2">
          <span className="text-2xl">📘</span> ویدیوهای کتاب درسی
        </h2>
        <p className="text-xs text-ink-soft mb-4">
          {lesson.lessonVideos.length} ویدیو · همه رایگان و در کانال تلگرام منتشر شده
        </p>

        {lesson.lessonVideos.length > 0 ? (
          <div className="space-y-3">
            {lesson.lessonVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="bg-cream rounded-2xl p-6 text-center text-ink-soft text-sm">
            ویدیوی این درس به‌زودی اضافه می‌شود.
          </div>
        )}
      </div>

      <div className="card p-6">
        <h2 className="font-black text-lg mb-1 flex items-center gap-2">
          <span className="text-2xl">📗</span> ویدیوی کتاب کار
        </h2>
        <p className="text-xs text-ink-soft mb-4">تمرین‌های تکمیلی کتاب کار — رایگان</p>

        {lesson.workbookVideos.length > 0 ? (
          <div className="space-y-3">
            {lesson.workbookVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="bg-cream rounded-2xl p-6 text-center text-ink-soft text-sm">
            ویدیوی کتاب کار این درس به‌زودی اضافه می‌شود.
          </div>
        )}
      </div>
    </>
  )
}
