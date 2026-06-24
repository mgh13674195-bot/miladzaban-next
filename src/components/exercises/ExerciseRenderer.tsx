import { Exercise } from '@/types/exercise'
import ExerciseCard from './ExerciseCard'
import FillBlankExercise from './FillBlankExercise'
import MultipleChoiceExercise from './MultipleChoiceExercise'
import DialogueExercise from './DialogueExercise'
import SentenceOrderExercise from './SentenceOrderExercise'

function renderBody(exercise: Exercise) {
  switch (exercise.type) {
    case 'fill-blank':
      return <FillBlankExercise exercise={exercise} />
    case 'multiple-choice':
      return <MultipleChoiceExercise exercise={exercise} />
    case 'dialogue':
      return <DialogueExercise exercise={exercise} />
    case 'sentence-order':
      return <SentenceOrderExercise exercise={exercise} />
    default:
      return null
  }
}

export default function ExerciseRenderer({ exercises }: { exercises: Exercise[] }) {
  if (exercises.length === 0) return null

  return (
    <div className="space-y-5">
      {exercises.map((exercise, i) => (
        <ExerciseCard key={exercise.id} index={i} total={exercises.length} exercise={exercise}>
          {renderBody(exercise)}
        </ExerciseCard>
      ))}
    </div>
  )
}
