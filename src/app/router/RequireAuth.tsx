import { type FC } from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { getToken } from 'shared/lib';

export const RequireAuth: FC = () => {
  const isAuth = getToken();

  if (!isAuth) {
    return <Navigate to='/login' replace />;
  }

  return <Outlet />;
};
