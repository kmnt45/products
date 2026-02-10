import { type FC, useMemo } from 'react';

import { Flex, Progress, Table, type TableProps, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { CircleEllipsis, PlusIcon } from 'shared/icons';
import { formatPrice } from 'shared/lib';

import styles from './ProductsTable.module.scss';
import { type Product } from '../model/types';

const { Text } = Typography;

type ProductsTableProps = {
  data: Product[];
  loading: boolean;
  progress: number;
  sortState: {
    field?: keyof Product;
    order?: 'ascend' | 'descend';
  };
  onChangeSort: TableProps<Product>['onChange'];
};

export const ProductsTable: FC<ProductsTableProps> = ({ data, loading, progress, sortState, onChangeSort }) => {
  const columns = useMemo<ColumnsType<Product>>(
    () => [
      {
        title: 'Наименование',
        dataIndex: 'title',
        render: (_, record) => (
          <Flex align='center' gap={18}>
            <div className={styles.preview} />
            <Flex vertical>
              <Text className={styles.title}>{record.title}</Text>
              <Text className={styles.category}>{record.category}</Text>
            </Flex>
          </Flex>
        ),
      },
      {
        title: 'Вендор',
        dataIndex: 'brand',
        align: 'center',
        render: (value) => <Text className={styles.brand}>{value}</Text>,
      },
      {
        title: 'Артикул',
        dataIndex: 'sku',
        align: 'center',
        render: (value) => <Text className={styles.sku}>{value}</Text>,
      },
      {
        title: 'Оценка',
        dataIndex: 'rating',
        align: 'center',
        sorter: true,
        sortOrder: sortState.field === 'rating' ? sortState.order : undefined,
        render: (value: number) => (
          <Text type={value && value < 3 ? 'danger' : undefined}>{value ? `${value}/5` : 'Нет оценок'}</Text>
        ),
      },
      {
        title: 'Цена, ₽',
        dataIndex: 'price',
        align: 'center',
        sorter: true,
        sortOrder: sortState.field === 'price' ? sortState.order : undefined,
        render: (value: number) => {
          const { rub, kop } = formatPrice(value);

          return (
            <span className={styles.price}>
              {rub}
              <span className={styles.priceFraction}>,{kop}</span>
            </span>
          );
        },
      },
      {
        title: '',
        key: 'actions',
        align: 'center',
        width: 200,
        render: () => (
          <Flex gap={32} align='center' justify='center'>
            <button className={styles.add}>
              <PlusIcon />
            </button>
            <CircleEllipsis className={styles.iconButton} />
          </Flex>
        ),
      },
    ],
    [sortState],
  );

  return (
    <div className={styles.tableWrapper}>
      {loading && (
        <Progress percent={progress} size='small' showInfo={false} status='active' className={styles.progress} />
      )}

      <Table
        rowKey='id'
        columns={columns}
        dataSource={data}
        loading={false}
        onChange={onChangeSort}
        rowSelection={{ type: 'checkbox' }}
        pagination={{
          pageSize: 5,
          placement: ['bottomCenter'],
          showSizeChanger: false,
          showQuickJumper: false,
          showTotal: (total, [from, to]) => (
            <span className={styles.total}>
              Показано{' '}
              <span className={styles.totalCount}>
                {from}-{to}
              </span>{' '}
              из <span className={styles.totalCount}>{total}</span>
            </span>
          ),
        }}
      />
    </div>
  );
};
