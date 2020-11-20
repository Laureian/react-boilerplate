import { ComponentType, LazyExoticComponent } from 'react';
import { ROLE } from 'types/common.types';

export type Route = {
  component: ComponentType<any> | LazyExoticComponent<any>;
  path: string;
  routes?: Route[];
  roles?: ROLE[];
};

export const PUBLIC_PATHS = {
  DEFAULT_PATH: '/',
  LOGIN: '/login',
};

export const PRIVATE_PATHS = {
  DEFAULT_PATH: '/',
  DASHBOARD: '/dashboard',
  ADMIN_DASHBOARD: '/admin-dashboard',
  getExampleParametrizedRoute: (id = ':id') => `/example/${id}`,
};