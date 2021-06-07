import axios from '@axios';

/**
 * @desc 获取首页子导航数据
 */
export const getHomeChildNav = () => {
  return axios.request({
    url: '/home/child-nav-bar',
    methods: 'get'
  });
}

/**
 * @desc 获取首页 - 分类导航数据
 */
export const getHomeCategoryNav = () => {
  return axios.request({
    url: '/home/category-nav-list',
    method: 'get'
  });
}

/**
 * @desc 获取首页 - 条目列表数据
 */
export const getHomeEntryList = ({ web_id, page, pageSize, entryType, entryTime }) => {
  const params = { web_id, page, pageSize, entryType, entryTime };
  return axios.request({
    url: '/home/entry-list',
    method: 'get',
    params
  });
}
