import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h1>Cart</h1>
      {cart.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default CartPage;