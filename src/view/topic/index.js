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
    let pageHeight = document.querySelector('.topic');
    if (pageHeight) {
      pageHeight.style.minHeight = (window.innerHeight - pageHeight.offsetTop) + 'px';
    }
    // 获取列表数据
    getTopicList()
      .then(res => {
        this.setState({ listData: res.data });
      })
  }

  componentWillUnmount() {
    // 解决路由切换，组件被销毁，ajax进行了setState操作，setState没有得到值导致的报错问题
    this.setState = ()=>{
      return;
    };
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
    React.Message.info('点击了标题');
  }

  // 关注
  followClick() {
    React.Message.info('点击了关注');
  }
}
 
export default Topic;