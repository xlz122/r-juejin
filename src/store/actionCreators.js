import { HEADER_NAV_LIST, HOME_NAV_LIST } from './actionTypes';

// 设置头部主导航栏下标
export const headerNavAction = (index) => ({
  type: HEADER_NAV_LIST,
  index
});

// 设置首页导航下标
export const homeNavAction = (index) => ({
  type: HOME_NAV_LIST,
  index
});