import type { ProgramDay } from '../../types';
import { Card } from '../ui/Card';

interface WorkoutPlanProps {
  days: ProgramDay[];
}

export function WorkoutPlan({ days }: WorkoutPlanProps) {
  if (days.length === 0) return null;

  return (
    <div className="program-days">
      {days.map((day) => (
        <Card key={day.dayLabel} className="program-day">
          <h3>{day.dayLabel}</h3>
          <p className="program-day__focus">{day.focus}</p>
          <ul>
            {day.exercises.map((ex) => (
              <li key={ex.name}>
                <strong>{ex.name}</strong> — {ex.prescription}
              </li>
            ))}
          </ul>
          <p>{day.notes}</p>
        </Card>
      ))}
    </div>
  );
}
