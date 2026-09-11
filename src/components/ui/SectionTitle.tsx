interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: 'h1' | 'h2';
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  as = 'h1',
}: SectionTitleProps) {
  const Heading = as;
  return (
    <div className="section-title">
      {eyebrow ? <span className="section-title__eyebrow">{eyebrow}</span> : null}
      <Heading>{title}</Heading>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
