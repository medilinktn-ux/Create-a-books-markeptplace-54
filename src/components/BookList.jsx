import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

const BookList = ({ books, onAddToCart }) => (
  <div className="book-list">
    {books.map(book => (
      <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default BookList;