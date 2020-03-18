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

/**
 * @desc 获取首页 - 推荐导航数据
*/
export const homeRecommendNavList = () => {
  return Axios.request({
    url: '/json/home/recommend/nav-list.json',
    methods: 'get'
  })
}