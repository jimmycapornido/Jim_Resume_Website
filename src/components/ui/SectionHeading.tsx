import React from 'react';

export const SectionHeading: React.FC<{
  id?: string;
  icon?: React.ReactNode;
  tone?: 'default' | 'inverted';
  className?: string;
  children: React.ReactNode;
}> = ({ id, icon, tone = 'default', className = '', children }) => (
  <h2
    id={id}
    className={`text-h2 font-extrabold flex items-center gap-3 tracking-tight ${
      tone === 'inverted' ? 'text-white' : 'text-navy'
    } ${className}`}
  >
    {icon && <span className="inline-block w-8 h-8 text-primary">{icon}</span>}
    <span>{children}</span>
  </h2>
);
