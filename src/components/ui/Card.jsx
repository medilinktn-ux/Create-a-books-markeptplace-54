import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ children, className, ...props }) => (
  <div className={cn('bg-white rounded shadow p-4', className)} {...props}>
    {children}
  </div>
);