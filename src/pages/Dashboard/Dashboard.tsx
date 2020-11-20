import { useAuth } from 'hooks/useAuth';
import React from 'react';

export const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
    </>
  );
};
