import type { ChangeEvent, FC } from 'react';

import { Input } from 'antd';

import { SearchIcon } from 'shared/icons';

import styles from './ProductSearchInput.module.scss';
import { useProductSearchStore } from '../model/store.ts';

export const ProductSearchInput: FC = () => {
  const { search, setSearch } = useProductSearchStore();

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Input
      prefix={<SearchIcon />}
      placeholder='Найти'
      allowClear
      value={search}
      onChange={handleChangeSearch}
      className={styles.search}
    />
  );
};
