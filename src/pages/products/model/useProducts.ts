import { useQuery, keepPreviousData } from '@tanstack/react-query';

import { getProducts } from '../api/products.api';

export const useProducts = (search: string) => {
  const query = useQuery({
    queryKey: ['products', search],
    queryFn: () => getProducts(search),
    select: (data) => data.products,
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
  });

  return {
    data: query.data ?? [],
    loading: query.isLoading || query.isFetching,
    reload: query.refetch,
    error: query.error,
  };
};
