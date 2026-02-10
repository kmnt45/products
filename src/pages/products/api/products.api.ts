import axios from 'axios';

import { type ProductsResponse } from '../model/types';

export const getProducts = async (search?: string): Promise<ProductsResponse> => {
  const url = search ? 'https://dummyjson.com/products/search' : 'https://dummyjson.com/products';

  const { data } = await axios.get<ProductsResponse>(url, {
    params: search ? { q: search } : undefined,
  });

  return data;
};
