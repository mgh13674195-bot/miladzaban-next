import { notFound } from 'next/navigation'
import { a2Lessons, getA2Lesson, getA2Adjacent } from '@/data/a2Lessons'
import Navbar from '@/components/layout/Navbar'
import A2LessonClient from '@/components/a2/A2LessonClient'

export function generateStaticParams() {
  return a2Lessons.map((l) => ({ lessonId: String(l.id) }))
}

export default function A2LessonPage({ params }: { params: { lessonId: string } }) {
  const id = Number(params.lessonId)
  const lesson = getA2Lesson(id)
  if (!lesson) notFound()

  const { prev, next } = getA2Adjacent(id)

  return (
    <>
      <Navbar />
      <A2LessonClient lesson={lesson} prev={prev} next={next} />
    </>
  )
}
