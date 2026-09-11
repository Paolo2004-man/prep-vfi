import { useState } from 'react';
import type { FormEvent } from 'react';
import { generateProgram } from '../data/programGenerator';
import type { Goal, ProgramDay, TrainingLevel } from '../types';
import { WorkoutPlan } from '../components/training/WorkoutPlan';
import { Alert } from '../components/ui/Alert';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SectionTitle } from '../components/ui/SectionTitle';
import { useJsonFile } from '../hooks/useJsonFile';

export function ProgrammaPage() {
  const [level, setLevel] = useState<TrainingLevel>('principiante');
  const [daysPerWeek, setDaysPerWeek] = useState(3);
  const [goal, setGoal] = useState<Goal>('selezione');
  const { data: plan, setData: setPlan, loading, error } = useJsonFile<ProgramDay[]>(
    'program',
    [],
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const generated = generateProgram({ level, daysPerWeek, goal });
    await setPlan(generated);
  };

  return (
    <div className="container page-shell">
      <SectionTitle
        eyebrow="Su misura"
        title="Programma personalizzato"
        description="Imposta livello, giorni disponibili e obiettivo: il piano viene salvato nel file data/program.json."
      />

      {error ? <Alert>Errore salvataggio JSON: {error}</Alert> : null}

      <div className="grid-2">
        <Card>
          <h2>Configura</h2>
          <form className="stack" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="level">Livello</label>
              <select
                id="level"
                value={level}
                onChange={(e) => setLevel(e.target.value as TrainingLevel)}
              >
                <option value="principiante">Principiante</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzato">Avanzato</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="days">Giorni a settimana ({daysPerWeek})</label>
              <input
                id="days"
                type="range"
                min={2}
                max={6}
                value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(Number(e.target.value))}
              />
            </div>
            <div className="field">
              <label htmlFor="goal">Obiettivo</label>
              <select
                id="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value as Goal)}
              >
                <option value="selezione">Preparazione selezione</option>
                <option value="resistenza">Resistenza / corsa</option>
                <option value="forza">Forza a corpo libero</option>
                <option value="generale">Condizionamento generale</option>
              </select>
            </div>
            <Button type="submit">Genera e salva programma</Button>
          </form>
        </Card>

        <Card>
          <h2>Come usarlo</h2>
          <ul>
            <li>Parti dal livello realistico, non da quello che “vorresti”.</li>
            <li>Se salti un giorno, riprendi senza raddoppiare il volume.</li>
            <li>Segna tempi e ripetizioni nella sezione Progressi.</li>
            <li>Ogni 3–4 settimane rivaluta livello e giorni disponibili.</li>
          </ul>
        </Card>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {loading ? (
          <div className="empty-state">Caricamento programma da JSON…</div>
        ) : plan.length > 0 ? (
          <>
            <h2 style={{ marginBottom: '1rem' }}>Il tuo piano</h2>
            <WorkoutPlan days={plan} />
          </>
        ) : (
          <div className="empty-state">
            Compila il modulo e genera il primo programma.
          </div>
        )}
      </div>
    </div>
  );
}
