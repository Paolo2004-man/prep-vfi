import { asset } from '../../utils/asset';

interface EmblemProps {
  name: 'crest' | 'chevrons' | 'star-badge';
  className?: string;
  alt?: string;
}

const srcMap = {
  crest: asset('emblems/crest.svg'),
  chevrons: asset('emblems/chevrons.svg'),
  'star-badge': asset('emblems/star-badge.svg'),
} as const;

export function Emblem({ name, className = '', alt = '' }: EmblemProps) {
  return (
    <img
      src={srcMap[name]}
      alt={alt}
      className={`emblem ${className}`.trim()}
      draggable={false}
    />
  );
}
