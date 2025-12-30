import React from 'react';
import { cn } from '../../lib/utils';

export const Modal = ({ children, show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className={cn('bg-white rounded p-6 max-w-md w-full')} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};