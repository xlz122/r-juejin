import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './index.less';

// 引入子组件
import asyncComponent from '@router/asyncComponent.js';
const BoilingPointRecom = asyncComponent(() => import('@view/boiling-point/boiling-point-recom'));

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
          <Route exact path="/boiling-point" component={BoilingPointRecom} />
          <Route path="/boiling-point/hot" component={BoilingPointRecom} />
          <Route path="/boiling-point/following" component={BoilingPointRecom} />
          <Route path="/boiling-point/open-source" component={BoilingPointRecom} />
          <Route path="/boiling-point/recruit" component={BoilingPointRecom} />
          <Route path="/boiling-point/blind-date" component={BoilingPointRecom} />
          <Route path="/boiling-point/idle" component={BoilingPointRecom} />
          <Route path="/boiling-point/amway" component={BoilingPointRecom} />
          <Route path="/boiling-point/tool" component={BoilingPointRecom} />
          <Route path="/boiling-point/recruit" component={BoilingPointRecom} />
          <Route path="/boiling-point/information" component={BoilingPointRecom} />
        </div>
      </div>
    );
  }
}
 
export default BoilingPoint;