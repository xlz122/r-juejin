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
    // 动态计算当前页面高度
    let pageHeight = document.querySelector(".topic");
    if (pageHeight) {
      pageHeight.style.minHeight = (window.innerHeight - pageHeight.offsetTop) + 'px';
    }
    getTopicList()
      .then(res => {
        this.setState({ listData: res.data });
      })
  }

  render() { 
    return (
      <div className="topic">
        <TopicUi
          listData={this.state.listData}
          titleClick={this.titleClick}
          followClick={this.followClick}
        />
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