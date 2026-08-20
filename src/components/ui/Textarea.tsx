import React from 'react';

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = '', ...props }, ref) => (
    <textarea
      ref={ref}
      className={`block w-full px-4 py-2.5 border-2 border-border rounded-lg bg-white text-text-primary placeholder-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 transition resize-none ${className}`}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';
