import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingSpinner = ({ count = 1 }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <Skeleton key={i} />
    ))}
  </>
);

export default LoadingSpinner;