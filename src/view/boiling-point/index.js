import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PinNav from './pin-nav';
import Sidebar from './sidebar';
import './index.less';

// 引入列表组件
import asyncComponent from '@router/asyncComponent.js';
const PinList = asyncComponent(() => import('./pin-list'));

class BoilingPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    // 动态计算当前页面高度
    let pageHeight = document.querySelector('.boiling-point');
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
            <Route exact path="/boiling-point" component={PinList} />
            <Route path="/boiling-point/hot" component={PinList} />
            <Route path="/boiling-point/following" component={PinList} />
            <Route path="/boiling-point/open-source" component={PinList} />
            <Route path="/boiling-point/recruit" component={PinList} />
            <Route path="/boiling-point/blind-date" component={PinList} />
            <Route path="/boiling-point/idle" component={PinList} />
            <Route path="/boiling-point/amway" component={PinList} />
            <Route path="/boiling-point/tool" component={PinList} />
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