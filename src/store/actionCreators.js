import { NAV_LIST, HOME_NAV_LIST, HOME_CATEGORY_LIST } from './actionTypes';
import { getHomeCategoryNav } from '@api/home';

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

// 设置首页分类导航,进行数据缓存
const homeCategoryAction = (data) => ({
  type: HOME_CATEGORY_LIST,
  data
})

export const setHomeCategoryNav = () => {
  return (dispatch) => {
    getHomeCategoryNav()
      .then(res => {
        const data = res.data;
        const action = homeCategoryAction(data);
        dispatch(action);
      })
  }
}