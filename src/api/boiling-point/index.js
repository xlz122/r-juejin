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