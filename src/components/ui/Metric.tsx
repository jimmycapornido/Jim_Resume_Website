import React from 'react';

interface MetricProps {
  value: string;
  label: string;
  tone?: 'default' | 'inverted';
  className?: string;
}

export const Metric: React.FC<MetricProps> = ({ value, label, tone = 'default', className = '' }) => (
  <div className={className}>
    <div className={`font-extrabold text-metric tabular-nums ${tone === 'inverted' ? 'text-white' : 'text-navy'}`}>
      {value}
    </div>
    <div
      className={`mt-2 text-sm font-medium uppercase tracking-wide ${
        tone === 'inverted' ? 'text-clinical-light/80' : 'text-text-secondary'
      }`}
    >
      {label}
    </div>
  </div>
);
