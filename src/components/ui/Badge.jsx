import React from 'react';
import { cn } from '../../lib/utils';

export const Badge = ({ children, className, variant = 'default', ...props }) => {
  const variants = {
    default: 'bg-gray-200 text-gray-800',
    success: 'bg-green-200 text-green-800',
    danger: 'bg-red-200 text-red-800',
  };
  return (
    <span className={cn('px-2 py-1 text-xs rounded', variants[variant], className)} {...props}>
      {children}
    </span>
  );
};