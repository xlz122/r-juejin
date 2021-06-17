import React from 'react';
import { Skeleton } from 'antd';
import PinListUi from './pinListUi';

function PonList(props) {
  // 关注
  const followClick = () => {
    React.Message.info('关注');
  };

  // 赞
  const fabulousClick = () => {
    React.Message.info('赞');
  };

  // 评论
  const commentClick = () => {
    React.Message.info('评论');
  };

  // 分享
  const shareClick = () => {
    React.Message.info('分享');
  };

  return (
    <Skeleton active loading={props.listLoading} paragraph={{ rows: 2 }}>
      <PinListUi
        listData={props.listData}
        followClick={followClick}
        fabulousClick={fabulousClick}
        commentClick={commentClick}
        shareClick={shareClick}
      />
      <Skeleton
        className="pin-list-loading"
        active
        loading={props.pageLoading}
        paragraph={{ rows: 2 }}
      />
    </Skeleton>
  );
}

export default PonList;
