import Axios from '@axios';

/**
 * @desc 获取小册子导航数据
*/
export const getBrochureChildNav = () => {
  return Axios.request({
    url: '/brochure/child-nav-bar',
    methods: 'get'
  })
}