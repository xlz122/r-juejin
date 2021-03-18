import React, { useState, useEffect } from 'react';
import TopicUi from './topicUi';
import { getTopicList } from '@api/topic';

function Topic() {
  const [list, setList] = useState([]);

  // 获取列表数据
  useEffect(() => {
    getTopicList()
      .then(res => {
        setList(res.data);
      })
  }, []);

  // 动态计算当前页面高度
  useEffect(() => {
    let pageHeight = document.querySelector('.topic');
    if (pageHeight) {
      pageHeight.style.minHeight = (window.innerHeight - pageHeight.offsetTop) + 'px';
    }
  }, []);

  // 标题
  const titleClick = function() {
    React.Message.info('标题');
  }

  // 关注
  const followClick = function() {
    React.Message.info('关注');
  }
  return (
    <TopicUi
      listData={list}
      titleClick={titleClick}
      followClick={followClick}
    />
  );
}

export default React.memo(Topic);
