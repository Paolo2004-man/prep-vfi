import type { Exercise } from '../../types';
import { categoryLabels } from '../../data/exercises';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { VideoEmbed } from './VideoEmbed';

interface ExerciseCardProps {
  exercise: Exercise;
}

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <Card className="exercise-card">
      <div className="exercise-card__meta">
        <Badge>{categoryLabels[exercise.category]}</Badge>
        <Badge>{exercise.level}</Badge>
      </div>
      <h3>{exercise.name}</h3>
      <p>{exercise.description}</p>
      <p className="exercise-card__sets">{exercise.sets}</p>
      <VideoEmbed youtubeId={exercise.youtubeId} title={exercise.name} />
      <p>
        <strong>Consiglio:</strong> {exercise.tips}
      </p>
    </Card>
  );
}
