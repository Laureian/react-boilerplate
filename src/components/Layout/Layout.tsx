import React from 'react';

const Private: React.FC = ({ children }) => {
  return (
    <>
      <h1>Authenticated Layout</h1>
      {children}
    </>
  );
};

const Public: React.FC = ({ children }) => {
  return (
    <>
      <h1>Unauthenticated Layout</h1>
      {children}
    </>
  );
};

export const Layout = {
  Private,
  Public,
};
