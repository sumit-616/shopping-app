import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + (Number(item.quantity) || 0), 0);
  const totalAmount = cart.reduce((total, item) => total + (Number(item.price) * Number(item.quantity) || 0), 0);


  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">
          {/* Cart Items */}
          <div className="lg:w-[70%]">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] p-4 flex items-start mb-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain mr-4"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold truncate">{item.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 overflow-hidden">
                    {item.description}
                  </p>
                  <p className="text-green-600 font-semibold mt-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="mx-4">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors duration-300 ml-4 cursor-pointer"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between">
            <div className="mt-20">
              <p className="text-xl text-[#166534] uppercase font-[600]">Your Cart</p>
              <p className="text-5xl font-[600] text-[#15803d] uppercase mb-4">Summary</p>
              <p className="font-[600] text-xl text-slate-700">
                Total Items: <span className="font-normal">{totalItems}</span>
              </p>
              <p className="text-slate-700 text-xl font-[600] mb-5">
                Total Amount:
                <span className="font-bold ml-2 text-black">${totalAmount.toFixed(2)}</span>
              </p>
              <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d] border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in cursor-pointer">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart State
        <div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">
          <h1 className="font-[600] text-xl">Your Cart is Empty!</h1>
          <Link to="/">
            <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300 cursor-pointer">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;