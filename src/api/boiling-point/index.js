import axios from '@axios';

/**
 * @description 获取沸点左侧导航数据
 */
export const getBoilingPointPinNav = () => {
  return axios.request({
    url: '/boiling-point/pin-nav',
    methods: 'get'
  });
};

/**
 * @description 获取沸点列表数据
 * @param { Number } app_id 沸点左侧导航id
 * @param { Number } page 页数
 * @param { Number } pageSize 条数
 */
export const getBoilingPointPinList = ({ app_id, page, pageSize }) => {
  const params = { app_id, page, pageSize };
  return axios.request({
    url: '/boiling-point/pin-list',
    methods: 'get',
    params
  });
};
