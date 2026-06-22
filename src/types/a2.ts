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

export interface A2Lesson {
  id: number                // 1–24
  part: A2Part              // 1–12 = A2.1 | 13–24 = A2.2
  title: string
  shortDescription: string
  duration: string
  free: boolean
  tags: string[]

  // All links are placeholders — replace with real URLs when ready
  videoUrl: string          // Telegram or any external video link
  pdfUrl: string            // PDF download link
  audioUrl: string          // Audio file link
  exercisesUrl: string      // External exercise link / file

  vocabulary: A2VocabItem[]
  sampleComments: A2Comment[]
}
