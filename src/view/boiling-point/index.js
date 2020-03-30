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
    this.state = {
      listLoading: false, // 列表loading
      listData: [] // 列表数据
    }
    // 设置列表loading
    this.setListLoading = this.setListLoading.bind(this);
    // 设置列表数据
    this.setListData = this.setListData.bind(this);
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
            <PinNav
              location={this.props.location}
              setListLoading={this.setListLoading}
              setListData={this.setListData}
            />
          </div>
          <div className="content">
            <Route exact path="/boiling-point" render={props => <PinList {...props} listLoading={this.state.listLoading} listData={this.state.listData} />} />
            <Route exact path="/boiling-point/hot" render={props => <PinList {...props} listLoading={this.state.listLoading} listData={this.state.listData} />} />
            <Route exact path="/boiling-point/following" render={props => <PinList {...props} listLoading={this.state.listLoading} listData={this.state.listData} />} />
            <Route exact path="/boiling-point/open-source" render={props => <PinList {...props} listLoading={this.state.listLoading} listData={this.state.listData} />} />
            <Route exact path="/boiling-point/recruit" render={props => <PinList {...props} listLoading={this.state.listLoading} listData={this.state.listData} />} />
            <Route exact path="/boiling-point/blind-date" render={props => <PinList {...props} listLoading={this.state.listLoading} listData={this.state.listData} />} />
            <Route exact path="/boiling-point/idle" render={props => <PinList {...props} listLoading={this.state.listLoading} listData={this.state.listData} />} />
            <Route exact path="/boiling-point/amway" render={props => <PinList {...props} listLoading={this.state.listLoading} listData={this.state.listData} />} />
            <Route exact path="/boiling-point/tool" render={props => <PinList {...props} listLoading={this.state.listLoading} listData={this.state.listData} />} />
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }

  // 设置列表loading
  setListLoading(bool) {
    this.setState({ listLoading: bool });
  }

  // 设置列表数据
  setListData(list) {
    this.setState({ listData: list });
  }

}
 
export default BoilingPoint;