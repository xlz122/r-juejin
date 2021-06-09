import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getBoilingPointPinNav, getBoilingPointPinList } from '@api/boiling-point';
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
      navData: [], // 导航数据
      navActiveIndex: 0, // 导航选中下标
      listLoading: false, // 列表loading
      app_id: null, // 导航id
      page: 1, // 列表页数
      pageSize: 6, // 列表条数
      listData: [], // 列表数据
      look: true, // 分页请求开关
      pageLoading: false // 分页时的loading
    }
    // 导航事件
    this.navActiveChange = this.navActiveChange.bind(this);
    // 列表事件
    this.getListData = this.getListData.bind(this);
    // 滚动条监听
    this.bindHandleScroll = this.bindHandleScroll.bind(this);
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
        // 导航和路由对比，获取对应id，导航选中
        res.data.forEach((item, index) => {
          if (item.link === this.props.location.pathname) {
            this.setState({ navActiveIndex: index, app_id: item.app_id }, () => {
              this.getListData();
            });
          }
        })
      })
    // 进行scroll事件的注册，绑定一个函数，让这个函数进行监听处理
    window.addEventListener('scroll', this.bindHandleScroll);
  }

  componentWillUnmount() {
    // 进行scroll事件的注销
    window.removeEventListener('scroll', this.bindHandleScroll);
    // 解决路由切换，组件被销毁，ajax请求未完成，并在请求内部进行了setState操作，setState没有得到值导致报错
    this.setState = () => {
      return;
    };
  }

  render() {
    const childProps = {
      listLoading: this.state.listLoading,
      listData: this.state.listData,
      pageLoading: this.state.pageLoading
    }
    return (
      <div className="boiling-point">
        <div className="boiling-point-container">
          <div className="dock-nav">
            <PinNav
              navData={this.state.navData}
              navActiveIndex={this.state.navActiveIndex}
              navActiveChange={this.navActiveChange}
            />
          </div>
          <div className="content">
            <Route exact path="/boiling-point" render={props => <PinList {...props} {...childProps} />} />
            <Route exact path="/boiling-point/hot" render={props => <PinList {...props} {...childProps} />} />
            <Route exact path="/boiling-point/following" render={props => <PinList {...props} {...childProps} />} />
            <Route exact path="/boiling-point/open-source" render={props => <PinList {...props} {...childProps} />} />
            <Route exact path="/boiling-point/recruit" render={props => <PinList {...props} {...childProps} />} />
            <Route exact path="/boiling-point/blind-date" render={props => <PinList {...props} {...childProps} />} />
            <Route exact path="/boiling-point/idle" render={props => <PinList {...props} {...childProps} />} />
            <Route exact path="/boiling-point/amway" render={props => <PinList {...props} {...childProps} />} />
            <Route exact path="/boiling-point/tool" render={props => <PinList {...props} {...childProps} />} />
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }

  // 导航变化
  navActiveChange(index) {
    let navData = this.state.navData;
    navData.forEach((i, ind) => {
      if (index === ind) {
        this.setState({
          navActiveIndex: index,
          app_id: i.app_id,
          page: 1
        }, () => {
          this.getListData();
        })
      }
    })
  }

  // 获取列表数据
  getListData() {
    this.setState({ listLoading: true });
    getBoilingPointPinList({
      app_id: this.state.app_id,
      page: this.state.page,
      pageSize: this.state.pageSize
    })
      .then(res => {
        this.setState({
          listData: res.data,
          listLoading: false
        });
      })
  }

  // 页面滚动监听
  bindHandleScroll(event) {
    // 总的滚动的高度
    let scrollHeight = (event.srcElement ? event.srcElement.documentElement.scrollHeight : false)
      || (event.srcElement ? event.srcElement.body.scrollHeight : 0);
    // 视口高度
    let clientHeight = (event.srcElement ? event.srcElement.documentElement.clientHeight : false)
      || (event.srcElement ? event.srcElement.body.clientHeight : 0);
    // 当前滚动的高度
    let scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false)
      || (event.srcElement ? event.srcElement.body.scrollTop : 0);
    // 距离底部高度(总的高度 - 视口高度 - 滚动高度)
    let bottomHeight = scrollHeight - clientHeight - scrollTop;
    if (bottomHeight <= 60 && this.state.look) {
      // 分页数据请求
      let page = this.state.page;
      page++;
      this.setState({
        look: false,
        pageLoading: true,
        page,
        pageSize: 5
      });
      getBoilingPointPinList({
        app_id: this.state.app_id,
        page: this.state.page,
        pageSize: this.state.pageSize
      })
        .then(res => {
          let listData = this.state.listData;
          listData = listData.concat(res.data);
          this.setState({
            look: true,
            pageLoading: false,
            listData
          });
        })
        .catch(() => {
          this.setState({ look: true });
        })
    }
  }
}

export default BoilingPoint;
