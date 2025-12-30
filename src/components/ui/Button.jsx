import React from 'react';
import { cn } from '../../lib/utils';

export const Button = ({ children, className, variant = 'primary', ...props }) => {
  const base = 'px-4 py-2 rounded';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};