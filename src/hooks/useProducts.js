import { useQuery } from '@tanstack/react-query';

const fetchProducts = async ({ queryKey }) => {
  const [_, page, limit, category, sort] = queryKey;
  let url = `https://fakestoreapi.com/products?`;

  if (category) {
    url += `category=${category}&`;
  }

  if (sort) {
    url += `sort=${sort}&`;
  }

  if (page && limit) {
    url += `limit=${limit}&page=${page}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useProducts = (page, limit, category, sort) => {
  return useQuery({
    queryKey: ['products', page, limit, category, sort], 
    queryFn: fetchProducts,
  });
};