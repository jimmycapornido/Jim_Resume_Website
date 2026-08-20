import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  tone?: 'default' | 'inverted';
  className?: string;
}

export const Eyebrow: React.FC<EyebrowProps> = ({ children, tone = 'default', className = '' }) => (
  <span
    className={`block text-eyebrow font-semibold uppercase ${
      tone === 'inverted' ? 'text-accent' : 'text-primary'
    } ${className}`}
  >
    {children}
  </span>
);
