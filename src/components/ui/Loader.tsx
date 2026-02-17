import React from 'react';

export const Loader: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-clinical dark:bg-slate-900">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4" />
    <span className="text-primary dark:text-accent">Loading…</span>
  </div>
);
