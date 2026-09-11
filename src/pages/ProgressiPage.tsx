import { ProgressForm } from '../components/progress/ProgressForm';
import { ProgressHistory } from '../components/progress/ProgressHistory';
import { ProgressStats } from '../components/progress/ProgressStats';
import { Alert } from '../components/ui/Alert';
import { SectionTitle } from '../components/ui/SectionTitle';
import { useProgress } from '../hooks/useProgress';

export function ProgressiPage() {
  const { entries, addEntry, removeEntry, clearAll, stats, loading, error } =
    useProgress();

  return (
    <div className="container page-shell">
      <SectionTitle
        eyebrow="Monitoraggio"
        title="I tuoi progressi"
        description="Salva tempi, ripetizioni e sessioni completate nel file data/progress.json tramite API locale."
      />

      <Alert>
        I dati vengono scritti su disco in formato JSON (cartella <code>data/</code>).
        Avvia il sito con <strong>npm run dev</strong> per abilitare il salvataggio.
      </Alert>

      {error ? <Alert>Errore JSON: {error}</Alert> : null}

      <ProgressStats
        completed={stats.completed}
        total={stats.total}
        byCategory={stats.byCategory}
      />

      {loading ? (
        <div className="empty-state">Caricamento progressi da JSON…</div>
      ) : (
        <div className="stack">
          <ProgressForm onSubmit={addEntry} />
          <ProgressHistory
            entries={entries}
            onRemove={removeEntry}
            onClear={clearAll}
          />
        </div>
      )}
    </div>
  );
}
