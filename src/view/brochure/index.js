import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { getBrochureChildNav, getBrochureBooksList } from '@api/brochure';
import { getPageBottomHeight } from '@/utils/utils';
import ChildNavBar from '@view/common/child-nav-bar';
import Sidebar from './sidebar';
import './index.less';

// 引入导航组件
import asyncComponent from '@router/asyncComponent.js';
const BooksList = asyncComponent(() => import('@view/brochure/books-list'));

class Brochure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navData: [], // 导航数据
      navActiveIndex: 0, // 导航选中
      listLoading: false, // 列表loading
      ssid: 0, // 导航id
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
    let pageHeight = document.querySelector(".brochure");
    if (pageHeight) {
      pageHeight.style.minHeight = (window.innerHeight - pageHeight.offsetTop) + 'px';
    }
    // 获取导航数据
    getBrochureChildNav()
      .then(res => {
        // 数据存储前进行数据修改
        res.data.map(item => item.isShow = false);
        this.setState({ navData: res.data });
        // 导航和路由对比，获取对应id，导航选中
        res.data.forEach((item, index) => {
          if (item.link === this.props.location.pathname) {
            this.setState({ navActiveIndex: index, ssid: item.ssid }, () => {
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
    navData.forEach((i, ind) => {
      if (index === ind) {
        this.setState({
          navActiveIndex: index,
          ssid: i.ssid,
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
    getBrochureBooksList({
      ssid: this.state.ssid,
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
    // 滚动条距离页面底部的高度
    const bottomHeight = getPageBottomHeight(event);
    
    if (bottomHeight <= 60 && this.state.look) {
      // 分页数据请求，最大45条数据
      let page = this.state.page;
      if (this.state.page >= 7) {
        this.setState({ look: false });
        return false;
      }
      page++;
      this.setState({
        look: false,
        pageLoading: true,
        ssid: this.state.ssid,
        page,
        pageSize: 5
      });
      getBrochureBooksList({
        ssid: this.state.ssid,
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

  render() {
    const childProps = {
      listLoading: this.state.listLoading,
      listData: this.state.listData,
      pageLoading: this.state.pageLoading
    }
    return (
      <div className="brochure">
        <ChildNavBar
          navData={this.state.navData}
          navActiveIndex={this.state.navActiveIndex}
          navActiveChange={this.navActiveChange}
        />
        <div className="brochure-container">
          <div className="content">
            <Route exact path="/brochure" render={props => <BooksList {...props} {...childProps} />} />
            <Route path="/brochure/frontend" render={props => <BooksList {...props} {...childProps} />} />
            <Route path="/brochure/backend" render={props => <BooksList {...props} {...childProps} />} />
            <Route path="/brochure/mobile" render={props => <BooksList {...props} {...childProps} />} />
            <Route path="/brochure/blockchain" render={props => <BooksList {...props} {...childProps} />} />
            <Route path="/brochure/general" render={props => <BooksList {...props} {...childProps} />} />
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Brochure;
