import { type FC } from 'react';

import { Flex, Typography } from 'antd';

import { ProductSearchInput } from 'features/productsSearch';

import styles from './Header.module.scss';

const { Title } = Typography;

export const Header: FC = () => {
  return (
    <Flex justify='space-between' align='center' className={styles.header}>
      <Title level={3} className={styles.title}>
        Товары
      </Title>
      <ProductSearchInput />
      <div />
    </Flex>
  );
};
