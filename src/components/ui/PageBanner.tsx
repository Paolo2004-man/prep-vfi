interface PageBannerProps {
  image: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageBanner({ image, eyebrow, title, description }: PageBannerProps) {
  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="page-banner__veil" />
      <div className="page-banner__content">
        <img
          src="/images/crest-prep-vfi.png?v=2"
          alt=""
          className="page-banner__crest"
          aria-hidden
        />
        <span className="section-title__eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
    </section>
  );
}
