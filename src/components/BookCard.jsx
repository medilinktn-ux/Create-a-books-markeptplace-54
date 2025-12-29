import React from 'react';
import PropTypes from 'prop-types';

const BookCard = ({ book, onAddToCart, onViewDetails }) => {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(book);
  };

  const handleViewDetails = () => {
    onViewDetails(book);
  };

  return (
    <div
      onClick={handleViewDetails}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col"
    >
      <div className="relative">
        <img
          src={book.image || '/placeholder-book.png'}
          alt={book.title}
          className="w-full h-48 object-cover rounded-t-lg"
          onError={(e) => {
            e.target.src = '/placeholder-book.png';
          }}
        />
        <span className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded text-xs font-semibold">
          ${book.price}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{book.author}</p>
        <p className="text-xs text-gray-500 mt-1">
          {book.condition || 'Good'} condition
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Listed by {book.seller?.name || 'Unknown'}
          </span>
          <span className="text-xs text-gray-500">
            {new Date(book.createdAt).toLocaleDateString()}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-200 text-sm font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    condition: PropTypes.string,
    seller: PropTypes.shape({
      name: PropTypes.string,
    }),
    createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default BookCard;