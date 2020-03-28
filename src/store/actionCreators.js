import { HEADER_NAV_LIST, CHILD_NAV_BAR, BOILING_POINT_NAV, BOILING_POINT_LIST } from './actionTypes';

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

// 设置沸点左侧导航下标
export const boilingPointNavAction = (index) => ({
  type: BOILING_POINT_NAV,
  index
});

// 设置沸点列表数据
export const boilingPointListAction = (list) => ({
  type: BOILING_POINT_LIST,
  list
});