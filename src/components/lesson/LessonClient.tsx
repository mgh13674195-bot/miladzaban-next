'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Course, Lesson, Comment } from '@/types'
import YouTubePlayer from './YouTubePlayer'
import PhraseList from './PhraseList'
import GrammarSection from './GrammarSection'
import DialogSection from './DialogSection'
import VocabSection from './VocabSection'
import ExerciseSection from './ExerciseSection'
import CommentsSection from './CommentsSection'

interface Props {
  course: Course
  lesson: Lesson
  prevLesson: Lesson | null
  nextLesson: Lesson | null
}

const sampleComments: Comment[] = [
  { id: '1', name: 'سارا احمدی', text: 'درس خیلی خوب توضیح داده شده. مخصوصاً بخش تفاوت du و Sie.', stars: 5, date: '۱۴۰۳/۰۴/۱۲' },
  { id: '2', name: 'علی رضایی', text: 'تمرین‌های drag and drop خیلی کمک کرد!', stars: 5, date: '۱۴۰۳/۰۴/۱۰' },
  { id: '3', name: 'مریم کریمی', text: 'میلاد استاد خیلی خوبیه. صبور و واضح توضیح میده.', stars: 4, date: '۱۴۰۳/۰۴/۰۸' },
]

export default function LessonClient({ course, lesson, prevLesson, nextLesson }: Props) {
  const [comments, setComments] = useState<Comment[]>(sampleComments)
  const [sidebarTab, setSidebarTab] = useState<'video' | 'lessons'>('video')

  return (
    <div className="min-h-screen bg-[#fffbf5]">
      {/* Lesson topbar */}
      <div className="sticky top-0 z-50 glass border-b border-line/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 font-black text-sm flex-shrink-0">
            <div className="w-7 h-7 rounded-lg overflow-hidden flex flex-col flex-shrink-0">
              <div className="flex-1 bg-[#1a1a1a]" /><div className="flex-1 bg-primary" /><div className="flex-1 bg-gold" />
            </div>
            <span className="hidden sm:block">میلاد <span className="text-primary">قاسمی</span></span>
          </Link>

          <div className="h-4 w-px bg-line mx-1 hidden sm:block" />

          <div className="flex-1 min-w-0 hidden sm:block">
            <p className="text-xs text-ink-soft truncate">
              <span className="font-bold text-ink">دوره {course.level}</span> — {course.label} · {lesson.title}
            </p>
          </div>

          <div className="flex items-center gap-2 mr-auto sm:mr-0">
            {prevLesson && (
              <Link href={`/courses/${course.id}/lessons/${prevLesson.id}`} className="btn-ghost btn-sm text-xs hidden sm:flex">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                درس قبلی
              </Link>
            )}
            {nextLesson && (
              <Link href={`/courses/${course.id}/lessons/${nextLesson.id}`} className="btn-primary btn-sm text-xs">
                درس بعدی
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </Link>
            )}
            <Link href={`/courses/${course.id}`} className="btn-ghost btn-sm text-xs">بازگشت</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">

          {/* ── Main Content ── */}
          <div className="min-w-0">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-ink-soft mb-5">
              <Link href="/" className="hover:text-primary transition-colors">خانه</Link>
              <span>/</span>
              <Link href={`/courses/${course.id}`} className="hover:text-primary transition-colors">دوره {course.level}</Link>
              <span>/</span>
              <span className="text-ink font-semibold">درس {lesson.id}</span>
            </div>

            {/* Lesson header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span className="badge-dark">{course.level} · درس {lesson.id}</span>
                {lesson.free && <span className="badge-green">🎁 رایگان</span>}
                <span className="badge-gray">⏱ {lesson.duration}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black mb-2 leading-snug">{lesson.title}</h1>
              <p className="text-sm text-ink-soft leading-relaxed max-w-xl">
                در این درس یاد می‌گیریم چطور به آلمانی خودمان را معرفی کنیم، اسم بپرسیم، بگوییم اهل کجا هستیم و احوالپرسی کنیم.
              </p>
            </div>

            {/* Mobile video */}
            <div className="lg:hidden mb-6">
              <div className="card overflow-hidden">
                <YouTubePlayer videoId={lesson.youtubeId ?? 'PLACEHOLDER'} title={lesson.title} />
              </div>
            </div>

            {/* Lesson content sections */}
            <div className="space-y-4">
              {lesson.content?.targetPhrases && <PhraseList phrases={lesson.content.targetPhrases} />}
              {lesson.content?.grammar && <GrammarSection blocks={lesson.content.grammar} />}
              {lesson.content?.dialog && <DialogSection messages={lesson.content.dialog} />}
              {lesson.content?.vocabulary && <VocabSection items={lesson.content.vocabulary} />}
              {lesson.content?.exercises && <ExerciseSection exercises={lesson.content.exercises} />}
              <CommentsSection comments={comments} onAdd={(c) => setComments((p) => [c, ...p])} />
            </div>

            {/* Bottom nav */}
            <div className="flex justify-between items-center pt-6 mt-4 border-t border-line gap-3">
              {prevLesson ? (
                <Link href={`/courses/${course.id}/lessons/${prevLesson.id}`} className="btn-ghost btn-sm text-xs">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  درس قبلی
                </Link>
              ) : (
                <Link href={`/courses/${course.id}`} className="btn-ghost btn-sm text-xs">→ بازگشت به دوره</Link>
              )}
              {nextLesson ? (
                <Link href={`/courses/${course.id}/lessons/${nextLesson.id}`} className="btn-primary btn-sm text-xs">
                  درس بعدی ←
                </Link>
              ) : (
                <Link href={`/courses/${course.id}`} className="btn-gold btn-sm text-xs">پایان دوره 🎉</Link>
              )}
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="hidden lg:flex flex-col gap-4">
            {/* Sticky wrapper */}
            <div className="sticky top-20 space-y-4">

              {/* Tab switcher */}
              <div className="flex gap-1 bg-cream rounded-2xl p-1 border border-line">
                {(['video', 'lessons'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setSidebarTab(t)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all
                      ${sidebarTab === t ? 'bg-white text-primary shadow-sm' : 'text-ink-soft hover:text-ink'}`}
                  >
                    {t === 'video' ? '🎬 ویدیو' : '📋 دروس'}
                  </button>
                ))}
              </div>

              {sidebarTab === 'video' ? (
                <>
                  {/* Video */}
                  <div className="card overflow-hidden">
                    <YouTubePlayer videoId={lesson.youtubeId ?? 'PLACEHOLDER'} title={lesson.title} />
                    <div className="p-3">
                      <a href="https://youtube.com/@miladqasemi" target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full p-2.5 bg-[#FF0000] text-white text-xs font-bold rounded-xl hover:opacity-90 transition-opacity">
                        ▶ تماشا در یوتیوب
                      </a>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="card p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg">📊</span>
                      <h4 className="font-bold text-sm">نتیجه تمرین‌ها</h4>
                    </div>
                    <div className="text-center py-2">
                      <div className="text-4xl font-black text-primary leading-none mb-1">۰</div>
                      <div className="text-xs text-ink-soft mb-3">از ۶ سوال</div>
                      <div className="flex gap-1 justify-center mb-4">
                        {[1,2,3,4,5].map(i => <span key={i} className="text-lg text-line">☆</span>)}
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '4%' }} />
                      </div>
                      <p className="text-xs text-ink-soft mt-2">پیشرفت دوره {course.level}: ۴٪</p>
                    </div>
                  </div>

                  {/* Ask */}
                  <div className="card p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">💬</span>
                      <h4 className="font-bold text-sm">سوال داری؟</h4>
                    </div>
                    <p className="text-xs text-ink-soft mb-3 leading-relaxed">سوالت رو توی پنل کاربری بپرس — میلاد قاسمی جواب میده.</p>
                    <Link href="/panel" className="btn-dark w-full justify-center text-xs py-2.5">
                      ورود به پنل 👤
                    </Link>
                  </div>
                </>
              ) : (
                /* Lessons list */
                <div className="card">
                  <div className="p-4 border-b border-line">
                    <h3 className="font-black text-sm">دروس دوره {course.level}</h3>
                    <p className="text-xs text-ink-soft">{course.lessons.length} درس</p>
                  </div>
                  <div className="p-3 max-h-[460px] overflow-y-auto space-y-1">
                    {course.lessons.map((l) => (
                      <Link
                        key={l.id}
                        href={`/courses/${course.id}/lessons/${l.id}`}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all border
                          ${l.id === lesson.id
                            ? 'bg-primary-light border-primary/20 text-primary font-bold'
                            : 'border-transparent hover:bg-cream hover:border-line text-ink-soft'}`}
                      >
                        <div className={`w-6 h-6 rounded-lg grid place-items-center text-[11px] font-black flex-shrink-0
                          ${l.id === lesson.id ? 'bg-primary text-white' : 'bg-cream border border-line text-ink-soft'}`}>
                          {l.id}
                        </div>
                        <span className="flex-1 truncate">{l.title}</span>
                        {l.free && <span className="text-[10px] text-gold font-bold flex-shrink-0">رایگان</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
