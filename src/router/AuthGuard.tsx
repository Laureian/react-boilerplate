import React, { ReactElement } from 'react';

import { useAuth } from 'hooks/useAuth';
import { IUser, ROLE } from 'types/common.types';

interface IProps {
  roles?: ROLE[];
  children: ReactElement;
}

export const AuthGuard = ({ roles, children }: IProps) => {
  const { isAuthenticated, user } = useAuth();

  // TODO agree on behaviour when roles are not specified
  // if (!roles) {
  //   throw new Error('Roles for route path not specified.');
  // }

  const isInRole = (user: IUser) =>
    roles ? roles.includes(user.role) : true;

  if (isAuthenticated && isInRole(user)) return children;

  return (<h1>You're not authorized to see this resource</h1>);
};
