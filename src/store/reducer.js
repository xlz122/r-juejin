import lodash from 'lodash';
import { HEADER_NAV_LIST, CHILD_NAV_BAR } from './actionTypes.js';

const defaultState = {
  headerNavActiveIndex: sessionStorage.getItem('headerNavActiveIndex') || 0, // 头部导航栏下标
  childNavBarActiveIndex: sessionStorage.getItem('childNavBarActiveIndex') || 0 // 子导航栏下标
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

  return state;
}