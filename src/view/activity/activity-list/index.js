import React from 'react';
import { Skeleton } from 'antd';
import ActivityListUi from './activityListUi';

function ActivityList(props) {
  console.log(props);
  // 活动点击
  const activityClick = type => {
    if (type === 0) {
      React.Message.info('报名活动');
    }
    if (type === 1) {
      React.Message.info('活动详情');
    }
  }

  return (
    <Skeleton active loading={props.listLoading} paragraph={{ rows: 2 }}>
      <ActivityListUi
        listData={props.listData}
        activityClick={activityClick}
      >
        <Skeleton active loading={props.pageLoading} paragraph={{ rows: 2 }}></Skeleton>
      </ActivityListUi>
    </Skeleton>
  );
}

export default ActivityList;
