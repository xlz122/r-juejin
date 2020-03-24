import React, { Component } from 'react';
import { getTopicList } from '@api/topic';
import TopicUi from './topicUi';

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    }
    // 标题
    this.titleClick = this.titleClick.bind(this);
    // 关注
    this.followClick = this.followClick.bind(this);
  }
  
  componentDidMount() {
    getTopicList()
      .then(res => {
        this.setState({ listData: res.data });
      })
  }

  render() { 
    return (
      <TopicUi
        listData={this.state.listData}
        titleClick={this.titleClick}
        followClick={this.followClick}
      />
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