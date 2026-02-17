import React from 'react';

export const ErrorPanel: React.FC<{ message: string }> = ({ message }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 dark:bg-slate-900 text-red-700 dark:text-red-400 p-8">
    <h2 className="text-xl font-bold mb-2">Error</h2>
    <p className="mb-2">{message}</p>
    <p className="text-sm text-gray-500 dark:text-gray-400">Please check your data files or contact support.</p>
  </div>
);
