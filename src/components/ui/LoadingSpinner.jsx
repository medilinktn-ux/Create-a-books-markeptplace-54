import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const LoadingSpinner = () => (
  <div className="p-4">
    <Skeleton count={3} />
  </div>
);