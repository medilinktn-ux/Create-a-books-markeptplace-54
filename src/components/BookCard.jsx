import PropTypes from 'prop-types';
import { useState } from 'react';

export default function BookCard({ book, onAddToCart }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(book);
  };

  return (
    <div className="group relative border rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={book.imageUrl || '/placeholder-book.jpg'}
          alt={`Cover of ${book.title}`}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
          onError={(e) => {
            e.target.src = '/placeholder-book.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <button
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          onClick={toggleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition-colors duration-200 ${
            isWishlisted
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-white/80 text-gray-700 hover:bg-white'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 truncate group-hover:text-blue-600 transition-colors">
          {book.title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
        <p className="text-green-600 font-semibold text-lg">${book.price}</p>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};