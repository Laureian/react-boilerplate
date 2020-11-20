import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PageNotFound } from 'pages/PageNotFound/PageNotFound.page';
import { useAuth } from 'hooks/useAuth';

import { publicRoutes, privateRoutes } from './router.config';
import { AuthGuard } from './AuthGuard';

const publicRoutesSwitch = publicRoutes.map(
  ({ component: Component, path, routes = [] }) => (
    <Route key={path} exact path={path}>
      <Component routes={routes} />
    </Route>
  )
);

const privateRoutesSwitch = privateRoutes.map(
  ({ component: Component, path, routes = [], roles }) => (
    <Route key={path} exact path={path}>
      <AuthGuard roles={roles}>
        <Component routes={routes} />
      </AuthGuard>
    </Route>
  )
);

export const RouterSwitch = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Switch>
      {isAuthenticated ? privateRoutesSwitch : publicRoutesSwitch}
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};
