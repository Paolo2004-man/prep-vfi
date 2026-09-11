import type { ProgressEntry } from '../../types';
import { categoryLabels } from '../../data/exercises';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface ProgressHistoryProps {
  entries: ProgressEntry[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export function ProgressHistory({ entries, onRemove, onClear }: ProgressHistoryProps) {
  if (entries.length === 0) {
    return (
      <div className="empty-state">
        Nessun progresso salvato. Registra il primo allenamento qui sopra.
      </div>
    );
  }

  return (
    <Card>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '1rem',
        }}
      >
        <h2 style={{ margin: 0 }}>Storico</h2>
        <Button variant="danger" size="small" onClick={onClear}>
          Cancella tutto
        </Button>
      </div>
      <div className="progress-table-wrap">
        <table className="progress-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Esercizio</th>
              <th>Categoria</th>
              <th>Risultato</th>
              <th>Stato</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.date}</td>
                <td>
                  {entry.exerciseName}
                  {entry.notes ? (
                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                      {entry.notes}
                    </div>
                  ) : null}
                </td>
                <td>{categoryLabels[entry.category]}</td>
                <td>
                  {entry.value} {entry.unit}
                </td>
                <td>{entry.completed ? 'Completato' : 'Parziale'}</td>
                <td>
                  <Button
                    variant="ghost"
                    size="small"
                    onClick={() => onRemove(entry.id)}
                    aria-label={`Elimina ${entry.exerciseName}`}
                  >
                    Elimina
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
