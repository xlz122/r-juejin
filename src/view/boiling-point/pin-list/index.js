import React, { Component } from 'react';
import PinListUi from './pinListUi';

class PonList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    // 关注
    this.followClick = this.followClick.bind(this);
    // 赞
    this.fabulousClick = this.fabulousClick.bind(this);
    // 评论
    this.commentClick = this.commentClick.bind(this);
    // 分享
    this.shareClick = this.shareClick.bind(this);
  }

  render() { 
    return (
      <PinListUi
        followClick={this.followClick}
        fabulousClick={this.fabulousClick}
        commentClick={this.commentClick}
        shareClick={this.shareClick}
      />
    );
  }

  // 关注
  followClick() {
    React.Message.info('点击了关注');
  }

  // 赞
  fabulousClick() {
    React.Message.info('点击了赞');
  }

  // 评论
  commentClick() {
    React.Message.info('点击了评论');
  }

  // 分享
  shareClick() {
    React.Message.info('点击了分享');
  }
}
 
export default PonList;