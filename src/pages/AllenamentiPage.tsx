import { useMemo, useState } from 'react';
import { exercises } from '../data/exercises';
import type { TrainingLevel } from '../types';
import { ExerciseCard } from '../components/training/ExerciseCard';
import { LevelTabs } from '../components/training/LevelTabs';
import { PageBanner } from '../components/ui/PageBanner';

export function AllenamentiPage() {
  const [level, setLevel] = useState<TrainingLevel>('principiante');

  const filtered = useMemo(
    () => exercises.filter((e) => e.level === level),
    [level],
  );

  return (
    <div>
      <PageBanner
        image="/images/run-field.png"
        eyebrow="Preparazione fisica"
        title="Allenamenti per livello"
        description="Corsa, forza, piegamenti, addominali e resistenza — con video dimostrativi."
      />

      <div className="container" style={{ marginTop: '2rem' }}>
        <LevelTabs value={level} onChange={setLevel} />

        <div className="exercise-grid">
          {filtered.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  );
}
