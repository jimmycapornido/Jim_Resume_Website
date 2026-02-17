import React from 'react';

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = '', ...props }, ref) => (
    <textarea
      ref={ref}
      className={`block w-full px-4 py-2.5 border-2 border-border rounded-lg bg-white dark:bg-slate-800 dark:border-slate-700 text-text-primary dark:text-slate-100 placeholder-text-muted dark:placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-20 transition resize-none ${className}`}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';
