import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import { CartContext } from '../context/CartContext';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

const BookDetails = () => {
  const { id } = useParams();
  const { books } = useContext(BookContext);
  const { addToCart } = useContext(CartContext);

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p>Book not found.</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Card className="flex flex-col md:flex-row gap-4">
        <img src={book.image} alt={book.title} className="w-full md:w-1/3 rounded" />
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{book.title}</h1>
          <p className="text-gray-600 mb-2">by {book.author}</p>
          <Badge>{book.genre}</Badge>
          <p className="mt-4">{book.description}</p>
          <p className="text-xl font-semibold mt-4">${book.price}</p>
          <Button className="mt-4" onClick={() => addToCart(book)}>
            Add to Cart
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default BookDetails;