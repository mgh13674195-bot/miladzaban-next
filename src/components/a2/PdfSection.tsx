import { A2Lesson } from '@/types/a2'

const PLACEHOLDER = 'PDF_PLACEHOLDER'

export default function PdfSection({ lesson }: { lesson: A2Lesson }) {
  const hasPdf = lesson.pdfUrl && lesson.pdfUrl !== PLACEHOLDER

  return (
    <div className="card p-6">
      <h2 className="font-black text-lg mb-4 flex items-center gap-2">
        <span className="text-2xl">📄</span> فایل PDF درس
      </h2>

      {hasPdf ? (
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-cream rounded-2xl p-5">
          <div className="text-5xl">📑</div>
          <div className="flex-1 text-center sm:text-right">
            <p className="de font-bold mb-1">{lesson.title}</p>
            <p className="text-ink-soft text-sm mb-3">خلاصه، لغات کلیدی و تمرین‌های درس به همراه جدول صرف فعل.</p>
            <a
              href={lesson.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-sm inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              دانلود PDF
            </a>
          </div>
        </div>
      ) : (
        <div className="bg-cream rounded-2xl p-6 text-center text-ink-soft">
          <div className="text-4xl mb-3">📭</div>
          <p className="text-sm">فایل PDF این درس به‌زودی بارگذاری می‌شود.</p>
        </div>
      )}
    </div>
  )
}
