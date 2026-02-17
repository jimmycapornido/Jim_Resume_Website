import React from 'react';

export const SectionHeading: React.FC<{ id?: string; children: React.ReactNode }> = ({ id, children }) => (
  <h2 id={id} className="text-h2 font-bold mb-8 text-text-primary dark:text-slate-100 tracking-tight">
    {children}
  </h2>
);
