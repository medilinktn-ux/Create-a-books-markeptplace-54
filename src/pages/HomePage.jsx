import React, { useEffect } from 'react';
import { useBooks } from '../context/BookContext';
import BookList from '../components/BookList';

const HomePage = () => {
  const { books, setBooks } = useBooks();

  useEffect(() => {
    // Simulate fetching books
    setBooks([
      { id: 1, title: 'Book One' },
      { id: 2, title: 'Book Two' },
    ]);
  }, [setBooks]);

  const handleAddToCart = (book) => {
    console.log('Add to cart:', book);
  };

  const handleViewDetails = (id) => {
    console.log('View details:', id);
  };

  return (
    <div>
      <h1>Book Store</h1>
      <BookList books={books} onAddToCart={handleAddToCart} onViewDetails={handleViewDetails} />
    </div>
  );
};

export default HomePage;