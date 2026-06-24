'use client'
import Link from 'next/link'
import { A2Lesson } from '@/types/a2'
import { getLessonNotes } from '@/data/lesson-notes/a2/lesson1Notes'
import VideoSection from './VideoSection'
import PdfSection from './PdfSection'
import AudioSection from './AudioSection'
import A2ExerciseSection from './A2ExerciseSection'
import LessonComments from './LessonComments'
import LessonNavigation from './LessonNavigation'
import LessonNotesSection from './notes/LessonNotesSection'

export default function A2LessonClient({
  lesson,
  prev,
  next,
}: {
  lesson: A2Lesson
  prev: A2Lesson | null
  next: A2Lesson | null
}) {
  const notes = getLessonNotes(lesson.id)

  return (
    <div className="min-h-screen bg-[#fffbf5]">
      {/* Sticky top bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-line">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/courses/a2" className="text-ink-soft hover:text-primary transition flex-shrink-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <div className="w-px h-4 bg-line flex-shrink-0" />
          <span className="badge badge-dark text-[11px] flex-shrink-0">{lesson.part}</span>
          <div className="flex-1 min-w-0 flex flex-col justify-center leading-tight">
            <span className="text-[10px] text-ink-soft truncate">
              Lektion {lesson.id} · {lesson.topic}
            </span>
            <h1 className="de font-black text-sm truncate">{lesson.title}</h1>
          </div>
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
            {notes && <LessonNotesSection notes={notes} />}
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
