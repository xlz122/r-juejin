import Axios from '@axios';

/**
 * @desc 获取首页导航数据
*/
export const getHomeNav = () => {
  return Axios.request({
    url: '/home/nav-list',
    methods: 'get'
  })
}

/**
 * @desc 获取首页 - 分类导航数据
*/
export const getHomeCategoryNav = () => {
  return Axios.request({
    url: '/home/category-nav-list',
    method: 'get'
  })
}

/**
 * @desc 获取首页 - 条目列表数据
*/
export const getHomeEntryList = ({ page, pageSize, entryType, entryTime }) => {
  const params = { page, pageSize, entryType, entryTime };
  return Axios.request({
    url: '/home/entry-list',
    method: 'get',
    params
  })
}