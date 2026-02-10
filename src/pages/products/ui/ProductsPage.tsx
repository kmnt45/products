import { type FC, useEffect, useState } from 'react';

import { App, Button, Flex, Typography } from 'antd';

import { useProductSearchStore } from 'features/productsSearch';
import { PlusCircleIcon, RefreshIcon } from 'shared/icons';

import { AddProductModal } from './AddProductModal';
import styles from './ProductsPage.module.scss';
import { ProductsTable } from './ProductsTable';
import type { CreateProductDto, Product } from '../model/types';
import { useProducts } from '../model/useProducts';

const { Title } = Typography;

export const ProductsPage: FC = () => {
  const search = useProductSearchStore((state) => state.search);
  const { message } = App.useApp();

  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [isModalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [progress, setProgress] = useState(0);

  const { data, loading, reload, error } = useProducts(debouncedSearch);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 300);

    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (loading) {
      setProgress(0);

      interval = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + 10 : prev));
      }, 200);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      setProgress(100);

      const timeout = setTimeout(() => {
        setProgress(0);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [loading]);

  useEffect(() => {
    if (error) {
      message.destroy();
      message.error({
        content: `Не удалось загрузить товары: ${error.message}`,
        duration: 5,
      });
    }
  }, [error]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const handleAddProduct = (dto: CreateProductDto) => {
    const newProduct: Product = {
      id: Date.now(),
      category: 'Без категории',
      rating: 0,
      ...dto,
    };

    setProducts((prev) => [newProduct, ...prev]);
    setModalOpen(false);

    message.success('Товар успешно добавлен');
  };

  const handleReload = () => {
    reload();
    message.success('Таблица обновлена');
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Flex vertical gap={30} className={styles.productsPage}>
      <Flex justify='space-between' align='center'>
        <Title level={4} className={styles.title}>
          Все позиции
        </Title>
        <Flex gap={8} align='center'>
          <Button icon={<RefreshIcon />} onClick={handleReload} className={styles.reloadButton} />
          <Button type='primary' icon={<PlusCircleIcon />} onClick={handleOpenModal} className={styles.addButton}>
            Добавить
          </Button>
        </Flex>
      </Flex>
      <ProductsTable data={products} loading={loading} progress={progress} />
      <AddProductModal open={isModalOpen} closeModal={handleCloseModal} addProduct={handleAddProduct} />
    </Flex>
  );
};
