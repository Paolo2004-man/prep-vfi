import type { TrainingLevel } from '../../types';

const levels: { id: TrainingLevel; label: string }[] = [
  { id: 'principiante', label: 'Principiante' },
  { id: 'intermedio', label: 'Intermedio' },
  { id: 'avanzato', label: 'Avanzato' },
];

interface LevelTabsProps {
  value: TrainingLevel;
  onChange: (level: TrainingLevel) => void;
}

export function LevelTabs({ value, onChange }: LevelTabsProps) {
  return (
    <div className="level-tabs" role="tablist" aria-label="Livello di allenamento">
      {levels.map((level) => (
        <button
          key={level.id}
          type="button"
          role="tab"
          aria-selected={value === level.id}
          className={value === level.id ? 'active' : undefined}
          onClick={() => onChange(level.id)}
        >
          {level.label}
        </button>
      ))}
    </div>
  );
}
