import lodash from 'lodash';
import { HEADER_NAV_LIST, HOME_NAV_LIST } from './actionTypes.js';

const defaultState = {
  headerNavActiveIndex: sessionStorage.getItem('headerNavActiveIndex') || 0, // 头部导航栏下标
  homeNavActionIndex: sessionStorage.getItem('homeNavActionIndex') || 0 // 首页导航栏下标
};

export default (state = defaultState, action) => {
  // 设置主导航栏下标
  if (action.type === HEADER_NAV_LIST) {
    let cloneState = lodash.cloneDeep(state);
    cloneState.headerNavActiveIndex = action.index;
    return cloneState;
  }

  // 设置导航栏(submenu)下标
  if (action.type === HOME_NAV_LIST) {
    let cloneState = lodash.cloneDeep(state);
    cloneState.homeNavActionIndex = action.index;
    return cloneState;
  }

  return state;
}