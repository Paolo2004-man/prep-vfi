interface ProgressStatsProps {
  completed: number;
  total: number;
  byCategory: Record<string, number>;
}

export function ProgressStats({ completed, total, byCategory }: ProgressStatsProps) {
  const categories = Object.keys(byCategory).length;

  return (
    <div className="stats-row">
      <div className="stat-box">
        <div className="stat-box__value">{total}</div>
        <div className="stat-box__label">Registrazioni</div>
      </div>
      <div className="stat-box">
        <div className="stat-box__value">{completed}</div>
        <div className="stat-box__label">Completati</div>
      </div>
      <div className="stat-box">
        <div className="stat-box__value">{categories}</div>
        <div className="stat-box__label">Categorie usate</div>
      </div>
    </div>
  );
}
