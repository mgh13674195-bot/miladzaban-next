import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'
import LessonClient from '@/components/lesson/LessonClient'
import { courses } from '@/data/courses'

interface Props {
  params: { level: string; lessonId: string }
}

export async function generateStaticParams() {
  return courses.flatMap((c) =>
    c.lessons.map((l) => ({ level: c.id, lessonId: String(l.id) }))
  )
}

export default function LessonPage({ params }: Props) {
  const course = courses.find((c) => c.id === params.level)
  if (!course) notFound()

  const lesson = course.lessons.find((l) => l.id === Number(params.lessonId))
  if (!lesson) notFound()

  const lessonIndex = course.lessons.indexOf(lesson)
  const prevLesson = course.lessons[lessonIndex - 1] ?? null
  const nextLesson = course.lessons[lessonIndex + 1] ?? null

  return (
    <>
      <Navbar />
      <LessonClient
        course={course}
        lesson={lesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
      />
      <Footer />
      <ScrollToTop />
    </>
  )
}
