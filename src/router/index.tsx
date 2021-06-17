import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import App from '@/App';

function AppRouter(): React.ReactElement {
  const history = useHistory();
  const pathname = useRef();

  // 直接刷新页面触发
  if (!pathname.current) {
    console.log('路由未改变');
    pathname.current = history.location.pathname;
  }

  // 路由改变时触发
  if (pathname.current && history.location.pathname !== pathname.current) {
    console.log('路由改变');
    pathname.current = history.location.pathname;
  }

  return <App />;
}

export default AppRouter;
