import React from "react";

const CardItem = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08),_0_-2px_10px_rgba(45,78,255,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12),_0_-4px_15px_rgba(45,78,255,0.2)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">


      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain p-4"
      />
      <div className="p-4">
        <h3 className="text-gray-700 text-lg font-semibold mb-2 truncate">{product.title}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between mt-4">
          <p className="text-green-600 font-semibold">
            ${product.price.toFixed(2)}
          </p>
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in cursor-pointer"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
