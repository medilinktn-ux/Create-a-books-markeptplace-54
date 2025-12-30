import React, { createContext, useState } from 'react';
import mockBooks from '../data/mockBooks';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books] = useState(mockBooks);

  return (
    <BookContext.Provider value={{ books }}>
      {children}
    </BookContext.Provider>
  );
};