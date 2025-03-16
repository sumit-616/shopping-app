import React, { useContext } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const { data: products, isLoading, error } = useProducts();
  const { addToCart } = useContext(CartContext);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductCard products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;