import lodash from 'lodash';
import { NAV_LIST, HOME_NAV_LIST } from './actionTypes.js';

const defaultState = {
  navListActiveIndex: sessionStorage.getItem('navListActiveIndex') || 0, // 主导航栏下标
  homeNavActionIndex: sessionStorage.getItem('homeNavActionIndex') || 0 // 导航栏(submenu)下标
};

export default (state = defaultState, action) => {
  // 设置主导航栏下标
  if (action.type === NAV_LIST) {
    let cloneState = lodash.cloneDeep(state);
    cloneState.navListActiveIndex = action.index;
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