import Axios from '@axios';

/**
 * @desc 获取数据
*/
export const getTopicList = () => {
  return Axios.request({
    url: '/topic/topic-list',
    methods: 'get'
  })
}