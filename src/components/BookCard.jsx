import React from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

const BookCard = ({ book, onAddToCart }) => (
  <Card className="p-4">
    <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded mb-2" />
    <h3 className="font-semibold text-lg truncate">{book.title}</h3>
    <p className="text-gray-600 text-sm">{book.author}</p>
    <p className="font-bold mt-2">${book.price}</p>
    <Button className="w-full mt-2" onClick={() => onAddToCart(book)}>
      Add to Cart
    </Button>
  </Card>
);

export default BookCard;