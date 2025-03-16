import { useQuery } from 'react-query';

const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useProducts = () => {
  return useQuery('products', fetchProducts);
};