import lodash from 'lodash';
import { HEADER_NAV_LIST } from './actionTypes.js';

const defaultState = {
  headerNavActiveIndex: sessionStorage.getItem('headerNavActiveIndex') || 0 // 头部导航栏下标
};

export default (state = defaultState, action) => {
  // 设置主导航栏下标
  if (action.type === HEADER_NAV_LIST) {
    let cloneState = lodash.cloneDeep(state);
    cloneState.headerNavActiveIndex = action.index;
    return cloneState;
  }

  return state;
}
