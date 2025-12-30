import React from 'react';
import { cn } from '../../lib/utils';

export const Label = ({ children, className, ...props }) => (
  <label className={cn('block text-sm font-medium mb-1', className)} {...props}>
    {children}
  </label>
);