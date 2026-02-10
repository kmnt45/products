import { create } from 'zustand';

type ProductSearchStore = {
  search: string;
  setSearch: (value: string) => void;
};

export const useProductSearchStore = create<ProductSearchStore>((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
}));
