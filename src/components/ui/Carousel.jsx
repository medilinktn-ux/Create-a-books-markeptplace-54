import React from 'react';

export const Carousel = ({ children }) => (
  <div className="flex overflow-x-auto space-x-4 p-4">
    {children}
  </div>
);