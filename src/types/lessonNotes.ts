export interface BilingualPair {
  de: string
  fa: string
}

export interface KeySentenceGroup {
  titleFa: string
  sentences: BilingualPair[]
}

export interface GrammarTopic {
  id: string
  titleDe: string
  titleFa: string
  explanationFa?: string
  examples?: BilingualPair[]
  table?: { headers: string[]; rows: string[][] }
  /** Short reinforcing tip folded in from the source notes' "نکته‌های مهم" section. */
  note?: string
}

export interface VocabCategory {
  id: string
  titleFa: string
  items: BilingualPair[]
}

export interface RedemittelGroup {
  titleFa: string
  phrases: BilingualPair[]
}

export interface DialogueLine {
  speaker: 'A' | 'B'
  de: string
  fa: string
}

export interface DialogueNote {
  id: string
  titleFa: string
  lines: DialogueLine[]
}

export interface SampleStory {
  de: string
  fa: string
}

export interface LessonNotes {
  lessonId: number
  topic: string
  titleFa: string
  summary: {
    introFa: string
    goals: string[]
  }
  keySentences: KeySentenceGroup[]
  grammar: GrammarTopic[]
  vocabulary: VocabCategory[]
  redemittel: RedemittelGroup[]
  dialogues: DialogueNote[]
  sampleStory: SampleStory
  summaryClosingFa: string
  summaryTopics: string[]
}
