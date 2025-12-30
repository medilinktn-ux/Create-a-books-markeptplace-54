import React, { useContext } from 'react';
import BookCard from './BookCard';
import { BookContext } from '../context/BookContext';
import { CartContext } from '../context/CartContext';

const BookList = () => {
  const { books } = useContext(BookContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

export default BookList;