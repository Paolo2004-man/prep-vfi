import { Button } from '../components/ui/Button';
import { SectionTitle } from '../components/ui/SectionTitle';

const gallery = [
  {
    src: '/images/run-field.png',
    caption: 'Corsa e resistenza',
  },
  {
    src: '/images/camo-gear.png',
    caption: 'Attrezzatura e disciplina',
  },
  {
    src: '/images/hero-training.png',
    caption: 'Campo e preparazione',
  },
];

export function HomePage() {
  return (
    <div className="home">
      <section className="hero hero--bleed">
        <div
          className="hero__media"
          style={{ backgroundImage: "url('/images/hero-training.png')" }}
          role="img"
          aria-label="Campo di allenamento all'aperto all'alba"
        />
        <div className="hero__veil" />
        <div className="hero__content container">
          <img
            src="/images/crest-prep-vfi.png?v=2"
            alt="Stemma Prep VFI"
            className="hero__crest"
          />
          <p className="section-title__eyebrow">Preparazione fisica</p>
          <h1 className="hero__brand">Prep VFI</h1>
          <p className="hero__lead">
            Preparazione fisica e guida orientativa per avvicinarti al percorso
            VFI — allenamenti, programma e progressi in un’unica piattaforma.
          </p>
          <div className="cta-row">
            <Button to="/guida">Scopri la guida</Button>
            <Button to="/allenamenti" variant="ghost">
              Vai agli allenamenti
            </Button>
          </div>
        </div>
      </section>

      <div className="container home__body">
        <SectionTitle
          as="h2"
          eyebrow="Atmosfera"
          title="Spirito di preparazione"
          description="Immagini e stemmi che richiamano disciplina, campo e allenamento."
        />

        <div className="media-gallery">
          {gallery.map((item) => (
            <figure key={item.src} className="media-gallery__item">
              <img src={item.src} alt={item.caption} loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>

        <SectionTitle
          as="h2"
          eyebrow="Cosa trovi"
          title="Un kit di preparazione chiaro"
          description="Routing, componenti riusabili, UI responsive e persistenza su file JSON — con un look ispirato all’ambiente militare."
        />

        <ul className="feature-list">
          <li>
            <strong>Guida al VFI</strong>
            <span>
              Requisiti, fasi di selezione e consigli pratici, con richiamo
              costante al bando ufficiale.
            </span>
          </li>
          <li>
            <strong>Allenamenti per livello</strong>
            <span>
              Principiante, intermedio e avanzato: corsa, forza, piegamenti,
              addominali e resistenza, con video incorporati.
            </span>
          </li>
          <li>
            <strong>Programma su misura</strong>
            <span>
              Genera un piano settimanale in base a livello, giorni disponibili e
              obiettivo.
            </span>
          </li>
          <li>
            <strong>Progressi su JSON</strong>
            <span>
              Salva tempi, ripetizioni e sessioni nel file data/progress.json.
            </span>
          </li>
        </ul>

        <div className="cta-row">
          <Button to="/programma">Crea il tuo programma</Button>
          <Button to="/consigli" variant="ghost">
            Consigli utili
          </Button>
        </div>
      </div>
    </div>
  );
}
