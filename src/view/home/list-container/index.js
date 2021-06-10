import React, { Component } from 'react';
import { Skeleton } from 'antd';
import CategoryNav from '../category-nav';
import EntryListUi from '../entry-list';
import './index.less';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    // 广告条目点击
    this.adEntryItemClick = this.adEntryItemClick.bind(this);
    // 专栏条目
    this.columnEntryItemClick = this.columnEntryItemClick.bind(this);
    this.likeCountClick = this.likeCountClick.bind(this);
    this.commentsCountClick = this.commentsCountClick.bind(this);
  }

  render() {
    return (
      <div className="list-container">
        <CategoryNav
          navListData={this.props.categoryNavListData}
          navActiveIndex={this.props.categoryActiveIndex}
          navListChange={this.props.categoryNavChange}
          timeChoiceToggle={this.props.timeChoiceToggle}
          timeChoiceShow={this.props.timeChoiceShow}
          timeChoiceTitle={this.props.timeChoiceTitle}
          timeChoiceMenuShow={this.props.timeChoiceMenuShow}
          timeChoiceClick={this.props.timeChoiceClick}
        />
        <Skeleton active loading={this.props.listLoading} paragraph={{ rows: 2 }}>
          <EntryListUi
            entryList={this.props.listData}
            adEntryItemClick={this.adEntryItemClick}
            columnEntryItemClick={this.columnEntryItemClick}
            likeCountClick={this.likeCountClick}
            commentsCountClick={this.commentsCountClick}
          />
          <Skeleton active loading={this.props.pageLoading} paragraph={{ rows: 2 }}></Skeleton>
        </Skeleton>
      </div>
    );
  }

  // 广告条目点击
  adEntryItemClick() {
    React.Message.info('广告');
  }

  // 专栏条目点击
  columnEntryItemClick() {
    React.Message.info('专栏');
  }

  // 专栏条目点赞
  likeCountClick(e) {
    // 阻止事件冒泡
    e.stopPropagation();
    React.Message.info('点赞');
  }

  // 专栏条目评论
  commentsCountClick(e) {
    // 阻止事件冒泡
    e.stopPropagation();
    React.Message.info('评论');
  }
}

export default ListContainer;
