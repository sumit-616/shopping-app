import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.map(item => (
        <div key={item.id} className="border-b py-2 flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p>${item.price}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      ))}
      <div className="mt-4">
        <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;