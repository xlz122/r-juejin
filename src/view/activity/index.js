import React, { Component } from 'react';
import './index.less';

class Activity extends Component {
  componentDidMount() {
    // 动态计算当前页面高度
    let pageHeight = document.querySelector(".activity");
    if (pageHeight) {
      pageHeight.style.minHeight = (window.innerHeight - pageHeight.offsetTop) + 'px';
    }
  }
  
  render(){
    return (
      <div className="activity">
        Activity
      </div>
    )
  }
}
export default Activity;