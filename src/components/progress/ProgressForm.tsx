import { useState } from 'react';
import type { FormEvent } from 'react';
import type { ExerciseCategory } from '../../types';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface ProgressFormProps {
  onSubmit: (data: {
    date: string;
    exerciseName: string;
    category: ExerciseCategory;
    value: number;
    unit: 'ripetizioni' | 'secondi' | 'minuti' | 'metri';
    notes?: string;
    completed: boolean;
  }) => void;
}

const categories: { value: ExerciseCategory; label: string }[] = [
  { value: 'corsa', label: 'Corsa' },
  { value: 'forza', label: 'Forza' },
  { value: 'piegamenti', label: 'Piegamenti' },
  { value: 'addominali', label: 'Addominali' },
  { value: 'resistenza', label: 'Resistenza' },
];

export function ProgressForm({ onSubmit }: ProgressFormProps) {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [exerciseName, setExerciseName] = useState('');
  const [category, setCategory] = useState<ExerciseCategory>('piegamenti');
  const [value, setValue] = useState(10);
  const [unit, setUnit] = useState<'ripetizioni' | 'secondi' | 'minuti' | 'metri'>(
    'ripetizioni',
  );
  const [notes, setNotes] = useState('');
  const [completed, setCompleted] = useState(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!exerciseName.trim()) return;
    onSubmit({
      date,
      exerciseName: exerciseName.trim(),
      category,
      value,
      unit,
      notes: notes.trim() || undefined,
      completed,
    });
    setExerciseName('');
    setNotes('');
  };

  return (
    <Card>
      <h2>Registra un allenamento</h2>
      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="date">Data</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="category">Categoria</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as ExerciseCategory)}
          >
            {categories.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field field--full">
          <label htmlFor="exercise">Esercizio / prova</label>
          <input
            id="exercise"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            placeholder="Es. Piegamenti, Corsa 1000 m…"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="value">Valore</label>
          <input
            id="value"
            type="number"
            min={0}
            step={1}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="unit">Unità</label>
          <select
            id="unit"
            value={unit}
            onChange={(e) =>
              setUnit(e.target.value as 'ripetizioni' | 'secondi' | 'minuti' | 'metri')
            }
          >
            <option value="ripetizioni">Ripetizioni</option>
            <option value="secondi">Secondi</option>
            <option value="minuti">Minuti</option>
            <option value="metri">Metri</option>
          </select>
        </div>
        <div className="field field--full">
          <label htmlFor="notes">Note (opzionale)</label>
          <textarea
            id="notes"
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Come ti sei sentito, condizioni, ecc."
          />
        </div>
        <div className="field field--full">
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />{' '}
            Allenamento completato
          </label>
        </div>
        <div className="field field--full">
          <Button type="submit">Salva</Button>
        </div>
      </form>
    </Card>
  );
}
