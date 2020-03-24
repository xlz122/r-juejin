import { HEADER_NAV_LIST, CHILD_NAV_BAR } from './actionTypes';

// 设置头部主导航栏下标
export const headerNavAction = (index) => ({
  type: HEADER_NAV_LIST,
  index
});

// 设置子导航栏下标
export const childNavBarAction = (index) => ({
  type: CHILD_NAV_BAR,
  index
});