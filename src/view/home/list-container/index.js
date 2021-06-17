import React from 'react';
import { Skeleton } from 'antd';
import CategoryNav from '../category-nav';
import EntryListUi from '../entry-list';
import './index.less';

function ListContainer(props) {
  // 广告条目点击
  const adEntryItemClick = () => {
    React.Message.info('广告');
  };

  // 专栏条目点击
  const columnEntryItemClick = () => {
    React.Message.info('专栏');
  };

  // 专栏条目点赞
  const likeCountClick = (e, item) => {
    // 阻止事件冒泡
    e.stopPropagation();
    props.likeCountClick(item);
  };

  // 专栏条目评论
  const commentsCountClick = e => {
    // 阻止事件冒泡
    e.stopPropagation();
    React.Message.info('评论');
  };
  return (
    <div className="list-container">
      <CategoryNav
        navListData={props.categoryNavListData}
        navActiveIndex={props.categoryActiveIndex}
        navListChange={props.categoryNavChange}
        timeChoiceToggle={props.timeChoiceToggle}
        timeChoiceShow={props.timeChoiceShow}
        timeChoiceTitle={props.timeChoiceTitle}
        timeChoiceMenuShow={props.timeChoiceMenuShow}
        timeChoiceClick={props.timeChoiceClick}
      />
      <Skeleton active loading={props.listLoading} paragraph={{ rows: 2 }}>
        <EntryListUi
          entryList={props.listData}
          adEntryItemClick={adEntryItemClick}
          columnEntryItemClick={columnEntryItemClick}
          likeCountClick={likeCountClick}
          commentsCountClick={commentsCountClick}
        />
        <Skeleton active loading={props.pageLoading} paragraph={{ rows: 2 }} />
      </Skeleton>
    </div>
  );
}

export default ListContainer;
