import lodash from 'lodash';
import { USER_INFO, HEADER_NAV_LIST } from './actionTypes';

export type ReduxState = {
  userInfo: unknown;
  headerNavActiveIndex: number | string;
};

type ReduxAction = {
  type: string;
  [index: string]: unknown;
};

export type ReduxDispatch = (action: ReduxAction) => void;

// 本地存储容错处理
function faultTolerant(name: string) {
  if (localStorage.getItem(name)) {
    return JSON.parse(localStorage.getItem(name) as string);
  }
}

const defaultState: ReduxState = {
  userInfo: faultTolerant('userInfo') || {}, // 用户信息
  headerNavActiveIndex: localStorage.getItem('headerNavActiveIndex') || 0 // 头部导航栏下标
};

const reducer = (state: ReduxState = defaultState, action: ReduxAction) => {
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
};

export default reducer;
