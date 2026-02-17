import React from 'react';

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`inline-block px-3 py-1.5 text-xs font-medium rounded-full bg-surface text-text-primary border border-border dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 mr-2 mb-2 ${className}`}>
    {children}
  </span>
);
