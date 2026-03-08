import React from 'react';

export const Divider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`my-12 flex justify-center ${className}`}>
    <div className="h-1 w-32 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-70" />
  </div>
);
