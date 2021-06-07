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
    React.Message.info('点击了广告列表');
  }

  // 专栏条目点击
  columnEntryItemClick() {
    React.Message.info('点击了专栏列表');
  }

  // 专栏条目喜欢点击
  likeCountClick(e) {
    // 阻止事件冒泡
    e.stopPropagation();
    React.Message.info('点击了喜欢');
  }

  // 专栏条目不喜欢点击
  commentsCountClick(e) {
    // 阻止事件冒泡
    e.stopPropagation();
    React.Message.info('点击了不喜欢');
  }
}

export default ListContainer;
