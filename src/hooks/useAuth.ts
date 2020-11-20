import { useCallback } from 'react';

import { IUser, ROLE } from 'types/common.types';

import { useLocalStorage } from './useLocalStorage';

const sampleUser: IUser = {
  username: 'example@example.com',
  role: ROLE.ADMIN
};

export type UseAuth = () => {
  isAuthenticated: boolean;
  user: IUser;
  login: () => void;
  logout: () => void;
  setUser: (user: IUser) => void;
};

export const useAuth: UseAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage(
    'isAuthenticated',
    false
  );
  const [user, setUser] = useLocalStorage('user', null);

  const login = useCallback(() => {
    setIsAuthenticated(true);
    setUser(sampleUser);
    window.location.replace('/dashboard');
  }, [setIsAuthenticated, setUser]);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
    window.location.replace('/login');
  }, [setIsAuthenticated, setUser]);

  return {
    isAuthenticated,
    login,
    logout,
    user,
    setUser,
  };
};
