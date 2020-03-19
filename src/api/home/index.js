import Axios from '@axios';

/**
 * @desc 获取首页导航数据
*/
export const getHomeNavList = () => {
  return Axios.request({
    url: '/json/home/nav-list.json',
    methods: 'get'
  })
}

/**
 * @desc 获取首页 - 分类导航数据
*/
export const getHomeCategoryNav = () => {
  return Axios.request({
    url: '/json/home/category-nav.json',
    methods: 'get'
  })
}