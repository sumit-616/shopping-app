import React from 'react';
import CardItem from './CardItem';

const ProductCard = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <CardItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductCard;