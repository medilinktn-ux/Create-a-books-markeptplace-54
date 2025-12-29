import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

const BookList = ({ books, onAddToCart, onViewDetails }) => (
  <div>
    {books.map(book => (
      <BookCard
        key={book.id}
        book={book}
        onAddToCart={onAddToCart}
        onViewDetails={onViewDetails}
      />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default BookList;