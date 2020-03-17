import { NAV_LIST, HOME_NAV_LIST } from './actionTypes';

// 设置主导航栏下标
export const navListAction = (index) => ({
  type: NAV_LIST,
  index
});

// 设置首页导航下标
export const homeNavAction = (index) => ({
  type: HOME_NAV_LIST,
  index
});