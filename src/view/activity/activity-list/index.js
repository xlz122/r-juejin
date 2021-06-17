import React from 'react';
import { Skeleton } from 'antd';
import ActivityListUi from './activityListUi';

function ActivityList(props) {
  // 活动点击
  const activityClick = detailUrl => {
    window.open(detailUrl, '_blank');
  };

  return (
    <Skeleton active loading={props.listLoading} paragraph={{ rows: 2 }}>
      <ActivityListUi listData={props.listData} activityClick={activityClick}>
        <Skeleton active loading={props.pageLoading} paragraph={{ rows: 2 }} />
      </ActivityListUi>
    </Skeleton>
  );
}

export default ActivityList;
