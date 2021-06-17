import axios from '@axios';

/**
 * @description 获取头部导航nav数据
 */
export const getHeaderNav = () => {
  return axios.request({
    url: '/header/nav-list',
    method: 'get'
  });
};
