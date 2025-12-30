import React, { useContext } from 'react';
import BookList from '../components/BookList';
import { BookContext } from '../context/BookContext';
import { CartContext } from '../context/CartContext';

const HomePage = () => {
  const { books } = useContext(BookContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Book Store</h1>
      <BookList books={books} onAddToCart={addToCart} />
    </div>
  );
};

export default HomePage;