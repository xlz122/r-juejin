import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getActivityChildNav, getActiviryList } from '@api/activity';
import { getPageBottomHeight } from '@/utils/utils';
import ChildNavBar from './child-nav-bar';
import './index.less';

// 引入导航组件
import asyncComponent from '@router/asyncComponent.js';
const ActivityList = asyncComponent(() => import('@view/activity/activity-list'));

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navData: [], // 导航数据
      navActiveIndex: 0, // 导航选中
      listLoading: false, // 列表loading
      city_id: 0, // 导航id
      page: 1, // 列表页数
      pageSize: 8, // 列表条数
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
    let pageHeight = document.querySelector(".activity");
    if (pageHeight) {
      pageHeight.style.minHeight = (window.innerHeight - pageHeight.offsetTop) + 'px';
    }
    // 获取导航数据
    getActivityChildNav()
      .then(res => {
        // 数据存储前进行数据修改
        res.data.banner_citys.map(item => item.isShow = false);
        this.setState({ navData: res.data });
        // 导航和路由对比，获取对应id，导航选中
        res.data.banner_citys.forEach((item, index) => {
          if (item.link === this.props.location.pathname) {
            this.setState({ navActiveIndex: index, city_id: item.city_id }, () => {
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

  // 导航变化
  navActiveChange(index) {
    let navData = this.state.navData;
    navData.banner_citys.forEach((i, ind) => {
      if (index === ind) {
        this.setState({
          navActiveIndex: index,
          city_id: i.city_id,
          page: 1,
          pageSize: 8
        }, () => {
          this.getListData();
        })
      }
    })
    // 导航点击，重置分页开关
    this.setState({ look: true });
  }

  // 获取列表数据
  getListData() {
    this.setState({ listLoading: true });
    getActiviryList({
      city_id: this.state.city_id,
      page: this.state.page,
      pageSize: this.state.pageSize
    })
      .then(res => {
        // 数据长度小于条数
        if (res.data.length < this.state.pageSize) {
          this.setState({
            look: false,
            listData: res.data,
            listLoading: false
          });
        } else {
          this.setState({
            look: true,
            listData: res.data,
            listLoading: false
          });
        }
      })
  }

  // 页面滚动监听
  bindHandleScroll(event) {
    // 滚动条距离页面底部的高度
    const bottomHeight = getPageBottomHeight(event);

    if (bottomHeight <= 60 && this.state.look) {
      // 分页数据请求，最大45条数据
      let page = this.state.page;
      page++;
      this.setState({
        look: false,
        pageLoading: true,
        city_id: this.state.city_id,
        page,
        pageSize: 4
      });
      getActiviryList({
        city_id: this.state.city_id,
        page: this.state.page,
        pageSize: this.state.pageSize
      })
        .then(res => {
          if (res.code === 200) {
            let listData = this.state.listData;
            listData = listData.concat(res.data);
            // 数据长度小于条数
            if (res.data.length < this.state.pageSize) {
              this.setState({
                look: false,
                pageLoading: false,
                listData
              });
            } else {
              this.setState({
                look: true,
                pageLoading: false,
                listData
              });
            }
          }
        })
        .catch(() => {
          this.setState({ look: true });
        })
    }
  }

  render() {
    const childProps = {
      listLoading: this.state.listLoading,
      listData: this.state.listData,
      pageLoading: this.state.pageLoading
    }
    return (
      <div className="activity">
        <ChildNavBar
          navData={this.state.navData}
          navActiveIndex={this.state.navActiveIndex}
          navActiveChange={this.navActiveChange}
        />
        <div className="activity-container">
          <div className="content">
            <Route exact path="/activity" render={props => <ActivityList {...props} {...childProps} />} />
            <Route path="/activity/beijing" render={props => <ActivityList {...props} {...childProps} />} />
            <Route path="/activity/shanghai" render={props => <ActivityList {...props} {...childProps} />} />
            <Route path="/activity/guangzhou" render={props => <ActivityList {...props} {...childProps} />} />
            <Route path="/activity/shenzhen" render={props => <ActivityList {...props} {...childProps} />} />
            <Route path="/activity/hangzhou" render={props => <ActivityList {...props} {...childProps} />} />
          </div>
        </div>
      </div>
    );
  }
}

export default Activity;
