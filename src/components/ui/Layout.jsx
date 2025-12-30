import React from 'react';
import { cn } from '../../lib/utils';

export const Layout = ({ children, className }) => (
  <div className={cn('min-h-screen bg-gray-50', className)}>
    {children}
  </div>
);