import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { setToken } from 'shared/lib';

export type LoginVariables = {
  username: string;
  password: string;
  remember: boolean;
};

export type LoginResponse = {
  accessToken: string;
};

const login = async ({ username, password }: LoginVariables): Promise<LoginResponse> => {
  const { data } = await axios.post('https://dummyjson.com/auth/login', {
    username,
    password,
  });

  return data;
};

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginVariables>({
    mutationFn: login,
    onSuccess: (data, variables) => {
      setToken(data.accessToken, variables.remember);
    },
  });
};
