import { type FC } from 'react';

import { Flex } from 'antd';
import { Outlet } from 'react-router-dom';

import { Header } from 'widgets/header';

import styles from './AppLayout.module.scss';

export const AppLayout: FC = () => {
  return (
    <Flex vertical gap={30} className={styles.layout}>
      <Header />
      <Outlet />
    </Flex>
  );
};
