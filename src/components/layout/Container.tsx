import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '', narrow = false }) => (
  <div className={`mx-auto w-full px-6 md:px-10 ${narrow ? 'max-w-3xl' : 'max-w-edit'} ${className}`}>
    {children}
  </div>
);
