import Index from '@view/index';

const routes = [
  // 嵌套路由的component需为组件，而不是文件路径
  {
    path: '/xlz',
    meta: {
      exact: true
    },
    component: Index
  },
  {
    path: '/404',
    component: 'view/not-found/NotFound'
  }
];

export { routes };
