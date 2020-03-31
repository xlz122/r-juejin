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

/**
 * @desc 获取小册数据列表数据
*/
export const getBrochureBooksList = ({ ssid, page, pageSize }) => {
  const params = { ssid, page, pageSize };
  return Axios.request({
    url: '/brochure/books-list',
    methods: 'get',
    params
  })
}