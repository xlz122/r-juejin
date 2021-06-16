import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import renderRoutes from '@router/renderRoutes';
// 路由数据
import { routes } from '@router/routes';
// 404页面
import NotFound from '@view/not-found/NotFound';

function App() {
  return (
    <>
      <Switch>
        {renderRoutes(routes)}
        <Route component={RedirectAs404} />
      </Switch>
    </>
  );
}

// 重定向以及404
const RedirectAs404 = ({ location }) => {
  if (location?.pathname === '/') {
    return <Redirect exact to="/xlz/home" from="/" />;
  }
  return <NotFound />;
};

export default App;
