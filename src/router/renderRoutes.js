import React from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from './asyncComponent';

/**
 * @description renderRoutes 渲染路由
 * @param { Array } routes 路由列表
 */
function renderRoutes(routes) {
  let routeList = [];

  // routes不是数组直接返回
  if (Object.prototype.toString.call(routes) !== '[object Array]') {
    return routeList;
  }

  routeList = routes.map((item) => {
    return handlerRoute(item);
  });

  return routeList;
}

/**
 * @description 处理路由数据
 * @param { Array } routes 路由列表项
 */
function handlerRoute(item) {
  if (Object.prototype.toString.call(item.component) !== '[object String]') {
    return (
      <Route path={item.path} key={item.path}>
        <item.component />
      </Route>
    );
  }
  return (
    <Route
      key={item.path}
      path={item.path}
      exact={item.meta && item.meta.exact}
      render={(props) => {
        const LoadableComponent = asyncComponent(
          () => import(`@/${item.component}`)
        );
        return <LoadableComponent {...props} />;
      }}
    />
  );
}

export default renderRoutes;
