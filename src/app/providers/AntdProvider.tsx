import type { FC, ReactNode } from 'react';

import { App, ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';

type AntdProviderProps = {
  children: ReactNode;
};

export const AntdProvider: FC<AntdProviderProps> = ({ children }) => {
  return (
    <ConfigProvider
      locale={ruRU}
      theme={{
        token: {
          colorPrimary: '#242edb',
          colorInfo: '#242edb',
          borderRadius: 12,
          fontSize: 16,
          fontFamily: 'Cairo, sans-serif',
        },
        components: {
          Input: {
            fontFamily: 'Inter, sans-serif',
          },
          Checkbox: {
            lineWidth: 2,
            controlInteractiveSize: 22,
          },
          Typography: {
            titleMarginBottom: 0,
            titleMarginTop: 0,
            fontSizeHeading1: 40,
            fontSizeHeading3: 24,
            fontSizeHeading4: 20,
          },
          Table: {
            headerBg: '#ffffff',
            headerColor: '#b2b3b9ff',
            headerSplitColor: 'transparent',
            borderColor: '#e2e2e2ff',
            cellPaddingBlock: 11.5,
            rowHoverBg: 'transparent',
            rowSelectedBg: 'transparent',
            rowSelectedHoverBg: 'transparent',
            headerSortHoverBg: 'transparent',
            headerSortActiveBg: 'transparent',
          },
        },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
};
