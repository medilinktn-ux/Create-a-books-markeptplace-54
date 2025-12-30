import PropTypes from 'prop-types';

export default function BookCard({ book, onAddToCart }) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer bg-white hover:-translate-y-1 transform transition-transform">
      <div className="relative overflow-hidden rounded mb-3">
        <img
          src={book.imageUrl || '/placeholder-book.jpg'}
          alt={`Cover of ${book.title}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = '/placeholder-book.jpg';
          }}
        />
      </div>
      <h3 className="font-bold text-lg mb-1 truncate group-hover:text-blue-600 transition-colors">
        {book.title}
      </h3>
      <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
      <div className="flex items-center justify-between">
        <p className="text-green-600 font-semibold text-lg">${book.price}</p>
        <button
          onClick={() => onAddToCart(book)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:scale-95 transition-all duration-200 shadow hover:shadow-lg"
        >
          Add to Cart
        </button>
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