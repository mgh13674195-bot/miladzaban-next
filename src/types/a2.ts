export type A2Part = 'A2.1' | 'A2.2'

export interface A2VocabItem {
  de: string
  fa: string
  example?: string
}

export interface A2Comment {
  id: string
  name: string
  text: string
  stars: number
  date: string
}

export type A2VideoType = 'coursebook' | 'workbook'
export type A2VideoSource = 'telegram' | 'youtube' | 'other'

export interface A2LessonVideo {
  id: string
  title: string
  type: A2VideoType
  source: A2VideoSource
  url: string            // empty string until the real link is added
  duration?: string      // e.g. "۱۲ دقیقه" — optional, not every video has one yet
  isFree: boolean        // per-video flag — lets paid courses reuse this type later
}

export interface A2Lesson {
  id: number                // 1–24
  part: A2Part              // 1–12 = A2.1 | 13–24 = A2.2
  title: string
  shortDescription: string
  duration: string
  free: boolean              // whole-lesson access flag (kept for future paid courses)
  tags: string[]

  lessonVideos: A2LessonVideo[]   // coursebook videos — variable count per lesson
  workbookVideos: A2LessonVideo[] // usually one workbook video, but kept as an array

  // All links are placeholders — replace with real URLs when ready
  pdfUrl: string            // PDF download link
  audioUrl: string          // Audio file link
  exercisesUrl: string      // External exercise link / file

  vocabulary: A2VocabItem[]
  sampleComments: A2Comment[]
}
