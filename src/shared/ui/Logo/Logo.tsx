import { type FC } from 'react';

import { LogoIcon } from 'shared/icons';

import styles from './Logo.module.scss';

export const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <LogoIcon />
    </div>
  );
};
