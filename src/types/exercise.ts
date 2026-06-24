export type ExerciseType =
  | 'fill-blank'
  | 'multiple-choice'
  | 'matching'
  | 'sentence-order'
  | 'dialogue'
  | 'writing'
  | 'mini-test'
  | 'categorize'
  | 'open-question'

export type ExerciseSkill = 'vocabulary' | 'grammar' | 'speaking' | 'writing' | 'pronunciation' | 'review'

interface ExerciseBase {
  id: string
  title: string
  skill: ExerciseSkill
  level: string
  lessonId: number
  instructionFa: string
  instructionDe?: string
  explanationFa?: string
}

export interface FillBlankItem {
  id: string
  /** Sentence with "___" marking the blank. */
  prompt: string
  /** Accepted answer(s) — array when more than one form is correct (e.g. "war" or "ist"). */
  answer: string | string[]
  translationFa?: string
}

export interface FillBlankExerciseData extends ExerciseBase {
  type: 'fill-blank'
  wordBank?: string[]
  items: FillBlankItem[]
}

export interface MultipleChoiceItem {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanationFa?: string
}

export interface MultipleChoiceExerciseData extends ExerciseBase {
  type: 'multiple-choice'
  items: MultipleChoiceItem[]
}

export interface DialogueItem {
  id: string
  /** Short Fa label describing this dialogue's premise, e.g. "Tante / Ärztin". */
  promptFa: string
  sampleAnswer: string
}

export interface DialogueExerciseData extends ExerciseBase {
  type: 'dialogue'
  pattern: string[]
  items: DialogueItem[]
}

export interface SentenceOrderItem {
  id: string
  /** Words shown in the word bank, in shuffled/scrambled order. */
  words: string[]
  /** The correctly ordered sentence. */
  correctOrder: string[]
  translationFa?: string
}

export interface SentenceOrderExerciseData extends ExerciseBase {
  type: 'sentence-order'
  items: SentenceOrderItem[]
}

export type Exercise =
  | FillBlankExerciseData
  | MultipleChoiceExerciseData
  | DialogueExerciseData
  | SentenceOrderExerciseData
