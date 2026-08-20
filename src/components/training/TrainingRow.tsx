import React from 'react';
import { TrainingItem } from '../../types/training';

export const TrainingRow: React.FC<{
  item: TrainingItem;
  reverse?: boolean;
  onEnlarge: (item: TrainingItem) => void;
}> = ({ item, reverse = false, onEnlarge }) => (
  <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center py-10 md:py-14 border-b border-border last:border-b-0">
    <div className={reverse ? 'md:order-2' : 'md:order-1'}>
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
          width={1200}
          height={900}
        />
      </button>
    </div>
    <div className={reverse ? 'md:order-1' : 'md:order-2'}>
      <h3 className="text-h3 font-bold text-navy">{item.title}</h3>
      <p className="mt-1 text-sm font-medium text-text-muted">
        {item.provider} · {item.date}
        {item.certificateCode ? ` · ${item.certificateCode}` : ''}
      </p>
      <p className="mt-4 text-sm md:text-base leading-relaxed text-text-secondary">{item.summary}</p>
      <p className="mt-4 text-xs text-text-muted">Click the certificate to enlarge</p>
    </div>
  </div>
);
