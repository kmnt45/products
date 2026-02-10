import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import 'shared/styles/index.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import { AntdProvider } from './providers';
import { router } from './router';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AntdProvider>
        <RouterProvider router={router} />
      </AntdProvider>
    </QueryClientProvider>
  </StrictMode>,
);
