// Types
export interface Course {
  id: string
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1'
  label: string
  title: string
  description: string
  price: string
  originalPrice: string
  discount: string
  gradient: [string, string]
  lessons: Lesson[]
}

export interface Lesson {
  id: number
  title: string
  duration: string
  tags: LessonTag[]
  free: boolean
  done?: boolean
  youtubeId?: string
  content?: LessonContent
}

export interface LessonTag {
  key: 'grammar' | 'vocab' | 'speaking' | 'listening' | 'writing'
  label: string
}

export interface LessonContent {
  targetPhrases: Phrase[]
  grammar: GrammarBlock[]
  dialog: DialogMessage[]
  vocabulary: VocabItem[]
  exercises: Exercise[]
}

export interface Phrase {
  de: string
  fa: string
}

export interface GrammarBlock {
  title: string
  phrases?: Phrase[]
  note?: string
  table?: ConjugationTable
  duSie?: boolean
  ausRules?: Phrase[]
}

export interface ConjugationTable {
  headers: string[]
  rows: string[][]
}

export interface DialogMessage {
  speaker: 'A' | 'B'
  avatar: string
  de: string
  fa: string
}

export interface VocabItem {
  de: string
  fa: string
}

export interface Exercise {
  type: 'mcq' | 'fill' | 'drag' | 'dusie'
  question?: string
  options?: string[]
  correctIndex?: number
  sentence?: string
  blankOptions?: string[]
  correctAnswer?: string
  words?: string[]
  correctOrder?: string[]
  situation?: string
  correctPronoun?: 'du' | 'Sie'
}

export interface Comment {
  id: string
  name: string
  text: string
  stars: number
  date: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  emoji: string
  gradient: [string, string]
  author: string
  date: string
}
