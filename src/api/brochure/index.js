import Axios from '@axios';

/**
 * @desc 获取小册导航数据
*/
export const getBrochureNav = () => {
  return Axios.request({
    url: '/brochure/nav-list',
    methods: 'get'
  })
}