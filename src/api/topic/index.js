import axios from '@axios';

/**
 * @desc 获取数据
 */
export const getTopicList = () => {
  return axios.request({
    url: '/topic/topic-list',
    methods: 'get'
  });
}
