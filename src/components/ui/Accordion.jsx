import React from 'react';
import { cn } from '../../lib/utils';

export const Accordion = ({ children, className, ...props }) => (
  <div className={cn('border rounded', className)} {...props}>
    {children}
  </div>
);