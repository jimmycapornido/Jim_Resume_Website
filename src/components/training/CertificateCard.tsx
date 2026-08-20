import React from 'react';
import { TrainingItem } from '../../types/training';

export const CertificateCard: React.FC<{
  item: TrainingItem;
  onEnlarge: (item: TrainingItem) => void;
}> = ({ item, onEnlarge }) => (
  <div>
    <button
      type="button"
      onClick={() => onEnlarge(item)}
      aria-label={`Enlarge certificate: ${item.title} from ${item.provider}`}
      className="block w-full rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <img
        src={item.image}
        alt={`Certificate: ${item.title}, issued by ${item.provider}`}
        className="w-full h-auto object-cover"
        loading="lazy"
        width={800}
        height={600}
      />
    </button>
    <h3 className="mt-4 font-bold text-navy">{item.title}</h3>
    <p className="mt-1 text-xs font-medium text-text-muted">
      {item.provider} · {item.date}
    </p>
    <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.summary}</p>
  </div>
);
