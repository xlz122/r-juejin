import axios from '@axios';

/**
 * @description 获取小册导航数据
 */
export const getBrochureChildNav = () => {
  return axios.request({
    url: '/brochure/child-nav-bar',
    methods: 'get'
  });
}

/**
 * @description 获取小册数据列表数据
 * @param { Number } ssid 小册导航id
 * @param { Number } page 页数
 * @param { Number } pageSize 条数
 */
export const getBrochureBooksList = ({ ssid, page, pageSize }) => {
  const params = { ssid, page, pageSize };
  return axios.request({
    url: '/brochure/books-list',
    methods: 'get',
    params
  });
}
