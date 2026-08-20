import React from 'react';

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className = '', children, ...props }, ref) => (
    <select
      ref={ref}
      className={`block w-full px-4 py-2.5 border-2 border-border rounded-lg bg-white text-text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 transition ${className}`}
      {...props}
    >
      {children}
    </select>
  )
);
Select.displayName = 'Select';
