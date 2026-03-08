import React from 'react';

export const SectionHeading: React.FC<{
  id?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}> = ({ id, icon, children }) => (
  <h2
    id={id}
    className="text-h2 font-bold mb-8 flex items-center gap-3 text-text-primary dark:text-slate-100 tracking-tight scroll-mt-40 md:scroll-mt-56"
  >
    {icon && <span className="inline-block w-8 h-8 text-primary">{icon}</span>}
    <span>{children}</span>
  </h2>
);
