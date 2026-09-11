import { guidaContent } from '../data/guida';
import { Card } from '../components/ui/Card';
import { PageBanner } from '../components/ui/PageBanner';
import { asset } from '../utils/asset';

export function GuidaPage() {
  return (
    <div>
      <PageBanner
        image={asset('images/camo-gear.png')}
        eyebrow="Orientamento"
        title="Guida al VFI"
        description="Requisiti, selezione e consigli pratici per prepararti al percorso."
      />

      <div className="container" style={{ marginTop: '2rem' }}>
        <p className="page-intro">{guidaContent.intro}</p>

        <div className="stack" style={{ marginBottom: '2rem' }}>
          <h2>Requisiti (orientativi)</h2>
          <div className="grid-2">
            {guidaContent.requisiti.map((item) => (
              <Card key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="stack" style={{ marginBottom: '2rem' }}>
          <h2>Selezione: fasi tipiche</h2>
          <div className="grid-2">
            {guidaContent.selezione.map((item) => (
              <Card key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="stack" style={{ marginBottom: '2rem' }}>
          <h2>Consigli pratici</h2>
          <Card>
            <ul>
              {guidaContent.consigli.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="stack">
          <h2>Fonti da consultare</h2>
          <Card>
            <ul>
              {guidaContent.fontiUfficiali.map((f) => (
                <li key={f.label}>
                  <a href={f.url} target="_blank" rel="noreferrer noopener">
                    {f.label}
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
