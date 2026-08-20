import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-inverted';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 transition duration-200 ease-in-out';
  let color = '';
  if (variant === 'primary') color = 'bg-primary text-white hover:bg-royal shadow-sm hover:shadow-md';
  else if (variant === 'secondary') color = 'bg-accent text-white hover:bg-[#0c8fc9] shadow-sm hover:shadow-md';
  else if (variant === 'outline') color = 'border-2 border-primary text-primary bg-transparent hover:bg-clinical-ice';
  else if (variant === 'outline-inverted') color = 'border-2 border-white/60 text-white bg-transparent hover:bg-white/10';
  return (
    <button className={`${base} ${color} ${className}`} {...props}>
      {children}
    </button>
  );
};
