import lodash from 'lodash';
import { HEADER_NAV_LIST, CHILD_NAV_BAR, BOILING_POINT_NAV, BOILING_POINT_LIST } from './actionTypes.js';

const defaultState = {
  headerNavActiveIndex: sessionStorage.getItem('headerNavActiveIndex') || 0, // 头部导航栏下标
  childNavBarActiveIndex: sessionStorage.getItem('childNavBarActiveIndex') || 0, // 子导航栏下标
  boilingPointActiveIndex: sessionStorage.getItem('boilingPointActiveIndex') || 0, // 沸点左侧导航下标
  boilingPointList: [] // 沸点列表数据
};

export default (state = defaultState, action) => {
  // 设置主导航栏下标
  if (action.type === HEADER_NAV_LIST) {
    let cloneState = lodash.cloneDeep(state);
    cloneState.headerNavActiveIndex = action.index;
    return cloneState;
  }

  // 设置子导航栏下标
  if (action.type === CHILD_NAV_BAR) {
    let cloneState = lodash.cloneDeep(state);
    cloneState.childNavBarActiveIndex = action.index;
    return cloneState;
  }

  // 设置沸点左侧导航下标
  if (action.type === BOILING_POINT_NAV) {
    let cloneState = lodash.cloneDeep(state);
    cloneState.boilingPointActiveIndex = action.index;
    return cloneState;
  }

  // 设置沸点列表数据
  if (action.type === BOILING_POINT_LIST) {
    let cloneState = lodash.cloneDeep(state);
    cloneState.boilingPointList = action.list;
    return cloneState;
  }

  return state;
}