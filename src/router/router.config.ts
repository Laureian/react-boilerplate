import { Login } from 'pages/Login/Login';
import { Dashboard } from 'pages/Dashboard/Dashboard';
import { Test } from 'pages/Test/Test.page';
import { ROLE } from 'types/common.types';

import { PRIVATE_PATHS, PUBLIC_PATHS, Route } from './router.types';

export const publicRoutes: Route[] = [
  {
    component: Login,
    path: PUBLIC_PATHS.LOGIN,
  },
  {
    component: Login,
    path: PUBLIC_PATHS.DEFAULT_PATH,
  },
];

export const privateRoutes: Route[] = [
  {
    component: Test,
    path: PRIVATE_PATHS.ADMIN_DASHBOARD,
    roles: [ROLE.ADMIN],
  },
  {
    component: Dashboard,
    path: PRIVATE_PATHS.DASHBOARD,
  },
  {
    component: Dashboard,
    path: PRIVATE_PATHS.DEFAULT_PATH,
  },
  {
    component: Test,
    path: PRIVATE_PATHS.getExampleParametrizedRoute('2'),
  },
];
