import React, { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks([
      { id: 1, title: 'Sample Book', price: 9.99 },
    ]);
  }, []);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};