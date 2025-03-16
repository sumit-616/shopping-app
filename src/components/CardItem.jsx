import React from 'react';

const CardItem = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain p-4"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 truncate">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <p className="text-xl font-bold text-blue-600 mb-4">
          ${product.price.toFixed(2)}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CardItem;