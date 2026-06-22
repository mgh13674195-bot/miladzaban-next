'use client'
import Link from 'next/link'
import { A2Lesson } from '@/types/a2'
import VideoSection from './VideoSection'
import PdfSection from './PdfSection'
import AudioSection from './AudioSection'
import A2ExerciseSection from './A2ExerciseSection'
import LessonComments from './LessonComments'
import LessonNavigation from './LessonNavigation'

export default function A2LessonClient({
  lesson,
  prev,
  next,
}: {
  lesson: A2Lesson
  prev: A2Lesson | null
  next: A2Lesson | null
}) {
  return (
    <div className="min-h-screen bg-cream">
      {/* Sticky top bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-line">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/courses/a2" className="text-ink-soft hover:text-primary transition">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="w-px h-4 bg-line" />
          <span className="badge badge-dark text-[11px]">{lesson.part}</span>
          <h1 className="font-black text-sm truncate flex-1">{lesson.title}</h1>
          {lesson.free && <span className="badge badge-green text-[11px] flex-shrink-0">رایگان</span>}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="badge badge-gray">{lesson.duration}</span>
          {lesson.tags.map((t) => (
            <span key={t} className="badge badge-gray">{t}</span>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
          {/* Main column */}
          <div className="space-y-6">
            <VideoSection lesson={lesson} />
            <AudioSection lesson={lesson} />
            <A2ExerciseSection lesson={lesson} />
            <LessonComments lessonId={lesson.id} initial={lesson.sampleComments} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <PdfSection lesson={lesson} />

            {/* Short description */}
            <div className="card p-5">
              <h3 className="font-black text-sm mb-2">درباره این درس</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{lesson.shortDescription}</p>
            </div>

            {/* Navigation */}
            <LessonNavigation prev={prev} next={next} />
          </div>
        </div>
      </main>
    </div>
  )
}
