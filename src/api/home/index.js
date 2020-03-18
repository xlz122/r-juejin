import Axios from '@axios';

/**
 * @desc 获取首页导航数据
*/
export const homeNavList = () => {
  return Axios.request({
    url: '/json/home/nav-list.json',
    methods: 'get'
  })
}