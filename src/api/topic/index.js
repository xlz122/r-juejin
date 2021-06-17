import axios from '@axios';

/**
 * @description 获取数据
 */
export const getTopicList = () => {
  return axios.request({
    url: '/topic/topic-list',
    methods: 'get'
  });
};
