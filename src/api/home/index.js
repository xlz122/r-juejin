import axios from '@axios';

/**
 * @description 获取首页子导航数据
 */
export const getHomeChildNav = () => {
  return axios.request({
    url: '/home/child-nav-bar',
    methods: 'get'
  });
};

/**
 * @description 获取首页 - 分类导航数据
 */
export const getHomeCategoryNav = () => {
  return axios.request({
    url: '/home/category-nav-list',
    method: 'get'
  });
};

/**
 * @description 获取首页 - 条目列表数据
 * @param { Number } web_id 二级导航id
 * @param { Number | String } web_c_id 二级导航子项id，没有子项id传all
 * @param { Number } page 页数
 * @param { Number } pageSize 条数
 * @param { Number } entryType 分类导航id
 * @param { Number | String } entryTime 分类导航时间范围id,全部传all
 */
export const getHomeEntryList = ({
  web_id,
  web_c_id,
  page,
  pageSize,
  entryType,
  entryTime
}) => {
  const params = { web_id, web_c_id, page, pageSize, entryType, entryTime };
  return axios.request({
    url: '/home/entry-list',
    method: 'get',
    params
  });
};
