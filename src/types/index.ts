export type TrainingLevel = 'principiante' | 'intermedio' | 'avanzato';

export type ExerciseCategory =
  | 'corsa'
  | 'forza'
  | 'piegamenti'
  | 'addominali'
  | 'resistenza';

export type Goal =
  | 'resistenza'
  | 'forza'
  | 'selezione'
  | 'generale';

export interface Exercise {
  id: string;
  name: string;
  category: ExerciseCategory;
  level: TrainingLevel;
  description: string;
  sets: string;
  tips: string;
  youtubeId: string;
}

export interface ProgressEntry {
  id: string;
  date: string;
  exerciseName: string;
  category: ExerciseCategory;
  value: number;
  unit: 'ripetizioni' | 'secondi' | 'minuti' | 'metri';
  notes?: string;
  completed: boolean;
}

export interface ProgramConfig {
  level: TrainingLevel;
  daysPerWeek: number;
  goal: Goal;
}

export interface ProgramDay {
  dayLabel: string;
  focus: string;
  exercises: {
    name: string;
    prescription: string;
  }[];
  notes: string;
}
