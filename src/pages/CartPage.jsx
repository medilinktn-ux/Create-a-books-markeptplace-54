import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <Card key={item.id} className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </Card>
          ))}
          <div className="text-right">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <Button className="mt-2">Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;