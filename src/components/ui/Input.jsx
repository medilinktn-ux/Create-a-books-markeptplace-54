import React from 'react';
import { cn } from '../../lib/utils';

export const Input = ({ className, ...props }) => (
  <input className={cn('border rounded px-3 py-2', className)} {...props} />
);