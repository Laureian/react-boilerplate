import { useAuth } from 'hooks/useAuth';
import React from 'react';

export const Login = () => {
  const { login } = useAuth();

  return (
    <>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </>
  );
};
