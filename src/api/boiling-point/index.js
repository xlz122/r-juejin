import Axios from '@axios';

/**
 * @desc 获取沸点左侧导航数据
*/
export const getBoilingPointPinNav = () => {
  return Axios.request({
    url: '/boiling-point/pin-nav',
    methods: 'get'
  })
}

/**
 * @desc 获取沸点列表数据
*/
export const getBoilingPointPinList = ({ id, page, pageSize }) => {
  const params = { id, page, pageSize };
  return Axios.request({
    url: '/boiling-point/pin-list',
    methods: 'get',
    params
  })
}