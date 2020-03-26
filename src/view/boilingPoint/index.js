import React, { Component } from 'react';
import PinNav from './pin-nav';
import PinList from './pin-list';
import Sidebar from './sidebar';
import './index.less';

class BoilingPoint extends Component {
  componentDidMount() {
    // 动态计算当前页面高度
    let pageHeight = document.querySelector(".boiling-point");
    if (pageHeight) {
      pageHeight.style.minHeight = (window.innerHeight - pageHeight.offsetTop) + 'px';
    }
  }

  render() { 
    return (
      <div className="boiling-point">
        <div className="boiling-point-container">
          <div className="dock-nav">
            <PinNav />
          </div>
          <div className="content">
            <PinList />
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}
 
export default BoilingPoint;