import { consigliContent } from '../data/consigli';
import { Card } from '../components/ui/Card';
import { PageBanner } from '../components/ui/PageBanner';
import { asset } from '../utils/asset';

export function ConsigliPage() {
  return (
    <div>
      <PageBanner
        image={asset('images/hero-training.png')}
        eyebrow="Stile di vita"
        title="Consigli pratici"
        description="Allenamento, recupero, alimentazione equilibrata e motivazione."
      />

      <div className="container" style={{ marginTop: '2rem' }}>
        <div className="advice-grid">
          {consigliContent.map((block) => (
            <Card key={block.id} className="advice-card">
              <h3>{block.title}</h3>
              <p>{block.summary}</p>
              <ul>
                {block.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
