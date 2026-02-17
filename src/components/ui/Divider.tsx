import React from 'react';

export const Divider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <hr className={`my-12 border-t border-border dark:border-slate-700 ${className}`} />
);
