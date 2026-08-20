import React from 'react';

export const Loader: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-clinical-off">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4" />
    <span className="text-primary">Loading…</span>
  </div>
);
