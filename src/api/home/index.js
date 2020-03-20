import Axios from '@axios';

/**
 * @desc 获取首页导航数据
*/
export const getHomeNav = () => {
  return Axios.request({
    url: '/json/home/home-nav.json',
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