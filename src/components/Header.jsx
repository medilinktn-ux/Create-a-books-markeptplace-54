import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">BookStore</h1>
      <nav className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/cart" className="hover:underline">Cart ({cartCount})</a>
      </nav>
    </header>
  );
};

export default Header;