import axios from '@axios';

/**
 * @description 获取活动导航数据
 */
export const getActivityChildNav = () => {
  return axios.request({
    url: '/activity/child-nav-bar',
    methods: 'get'
  });
};

/**
 * @description 获取活动列表数据
 * @param { Number } city_id 活动导航id
 * @param { Number } page 页数
 * @param { Number } pageSize 条数
 */
export const getActiviryList = ({ city_id, page, pageSize }) => {
  const params = { city_id, page, pageSize };
  return axios.request({
    url: '/activity/activity-list',
    methods: 'get',
    params
  });
};
