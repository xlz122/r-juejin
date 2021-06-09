import lodash from 'lodash';
import { USER_INFO, HEADER_NAV_LIST } from './actionTypes.js';

const defaultState = {
  userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || {}, // 用户信息
  headerNavActiveIndex: sessionStorage.getItem('headerNavActiveIndex') || 0 // 头部导航栏下标
};

const reducer = (state = defaultState, action) => {
  // 设置用户信息
  if (action.type === USER_INFO) {
    let cloneState = lodash.cloneDeep(state);
    cloneState.userInfo = action.userinfo;
    return cloneState;
  }

  // 设置主导航栏下标
  if (action.type === HEADER_NAV_LIST) {
    let cloneState = lodash.cloneDeep(state);
    cloneState.headerNavActiveIndex = action.index;
    return cloneState;
  }

  return state;
}

export default reducer;
