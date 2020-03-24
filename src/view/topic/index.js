import React, { Component } from 'react';
import { Skeleton } from 'antd';
import { getTopicList } from '@api/topic';
import TopicUi from './topicUi';

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // 骨架屏loading
      listData: []
    }
    // 标题
    this.titleClick = this.titleClick.bind(this);
    // 关注
    this.followClick = this.followClick.bind(this);
  }
  
  componentDidMount() {
    this.setState({ loading: true });
    getTopicList()
      .then(res => {
        this.setState({ listData: res.data });
        this.setState({ loading: false });
      })
  }

  render() { 
    return (
      <div className="topic">
        <Skeleton active loading={this.state.loading} paragraph={{ rows: 2 }}>
          <TopicUi
            listData={this.state.listData}
            titleClick={this.titleClick}
            followClick={this.followClick}
          />
      </Skeleton>
      </div>
    );
  }

  // 标题
  titleClick() {
    alert('点击了标题');
  }

  // 关注
  followClick() {
    alert('点击了关注');
  }
}
 
export default Topic;