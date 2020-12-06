/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Página não encontrada!</h1>} />
    </Switch>
  );
}

const ROUTES = [
  {
    path: '/',
    key: 'APP_ROOT',
    exact: true,
    component: Cadastro,
  },
];

export default ROUTES;
