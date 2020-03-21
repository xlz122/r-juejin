import  Axios from '@axios';

/**
 * @desc 获取头部导航nav数据
*/
export const getHeaderNav = () => {
  return Axios.request({
    url:  '/header/nav-list',
    methods: 'get'
  })
}