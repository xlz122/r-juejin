import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Skeleton } from 'antd';
import { getBoilingPointPinNav } from '@api/boiling-point';
import PinNav from './pin-nav';
import Sidebar from './sidebar';
import './index.less';

// 引入子组件
import asyncComponent from '@router/asyncComponent.js';
const PinList = asyncComponent(() => import('./pin-list'));

class BoilingPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // 骨架屏loading
      navData: [] // 左侧导航数据
    }
  }

  componentDidMount() {
    // 动态计算当前页面高度
    let pageHeight = document.querySelector('.boiling-point');
    if (pageHeight) {
      pageHeight.style.minHeight = (window.innerHeight - pageHeight.offsetTop) + 'px';
    }
    // 获取左侧导航数据
    getBoilingPointPinNav()
      .then(res => {
        this.setState({ navData: res.data });
      })
  }

  render() { 
    return (
      <div className="boiling-point">
        <div className="boiling-point-container">
          <div className="dock-nav">
            <PinNav
              navData={this.state.navData}
            />
          </div>
          <div className="content">
            <Skeleton active loading={this.state.loading} paragraph={{ rows: 2 }}>
              <Route exact path="/boiling-point" component={PinList} />
              <Route path="/boiling-point/hot" component={PinList} />
              <Route path="/boiling-point/following" component={PinList} />
              <Route path="/boiling-point/open-source" component={PinList} />
              <Route path="/boiling-point/recruit" component={PinList} />
              <Route path="/boiling-point/blind-date" component={PinList} />
              <Route path="/boiling-point/idle" component={PinList} />
              <Route path="/boiling-point/amway" component={PinList} />
              <Route path="/boiling-point/tool" component={PinList} />
            </Skeleton>
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