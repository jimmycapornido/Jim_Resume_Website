import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  let base = 'px-6 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition';
  let color = '';
  if (variant === 'primary') color = 'bg-primary text-white hover:bg-[#153099] shadow-sm';
  else if (variant === 'secondary') color = 'bg-accent text-white hover:bg-[#0355a1] shadow-sm';
  else if (variant === 'outline') color = 'border-2 border-primary text-primary bg-white hover:bg-[#f9fafb] dark:bg-slate-900 dark:hover:bg-slate-800';
  return (
    <button className={`${base} ${color} ${className}`} {...props}>
      {children}
    </button>
  );
};
