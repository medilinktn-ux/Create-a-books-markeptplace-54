import React from 'react';
import { cn } from '../../lib/utils';

export const Select = ({ children, className, ...props }) => (
  <select className={cn('border rounded px-3 py-2', className)} {...props}>
    {children}
  </select>
);