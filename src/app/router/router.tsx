import { createBrowserRouter, Navigate } from 'react-router-dom';

import { LoginPage } from 'pages/login';
import { ProductsPage } from 'pages/products';
import { AppLayout } from 'widgets/appLayout';
import { AuthLayout } from 'widgets/authLayout';

import { RequireAuth } from './RequireAuth';

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <RequireAuth />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: '/products',
            element: <ProductsPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/products' replace />,
  },
]);
