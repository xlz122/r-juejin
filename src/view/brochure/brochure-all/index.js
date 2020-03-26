import React, { Component } from 'react';
import { Skeleton } from 'antd';
import { getBrochureBooksList } from '@api/brochure';
import BooksList from '../books-list';
import Sidebar from '../sidebar';
import './index.less';

class BrochureAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // 骨架屏loading
      page: 1, // 列表页数
      pageSize: 10, // 列表条数
      listData: [], // 列表数据
      look: true, // 分页请求开关
      pageLoading: false // 分页时的loading
    }
    // 滚动条监听
    this.bindHandleScroll = this.bindHandleScroll.bind(this);
    // 列表
    this.getBooksList = this.getBooksList.bind(this);
    this.bookClick = this.bookClick.bind(this);
  }

  componentDidMount() {
    // 进行scroll事件的注册，绑定一个函数，让这个函数进行监听处理
    window.addEventListener('scroll', this.bindHandleScroll);
    // 动态计算当前页面高度
    let brochureAll = document.querySelector(".brochure-all");
    if (brochureAll) {
      brochureAll.style.minHeight = (window.innerHeight - brochureAll.offsetParent.offsetTop) + 'px';
    }
    this.getBooksList();
  }

  componentWillUnmount(){
    // 进行scroll事件的注销
    window.removeEventListener('scroll', this.bindHandleScroll);
  }

  render() { 
    return (
      <div className="brochure-all">
        <div className="content">
          <Skeleton active loading={this.state.loading} paragraph={{ rows: 2 }} style={{ background: 'red' }}>
            <BooksList
              listData={this.state.listData}
              bookClick={this.bookClick}
            >
              <Skeleton active loading={this.state.pageLoading} paragraph={{ rows: 2 }}></Skeleton>
            </BooksList>
          </Skeleton>
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    );
  }

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
      if (page >= 7) {
        // 最大45条数据
        this.setState({ look: false });
        return false;
      }
      page++;
      this.setState({
        look: false,
        pageLoading: true,
        page,
        pageSize: 5
      });
      getBrochureBooksList({
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

  // 书籍列表数据
  getBooksList() {
    this.setState({ loading: true });
    getBrochureBooksList({
      page: this.state.page,
      pageSize: this.state.pageSize
    })
      .then(res => {
        this.setState({ listData: res.data });
        this.setState({ loading: false });
      })
      .catch(() => {
        this.setState({ listData: [] });
        this.setState({ loading: false });
      })
  }

  // 书籍列表点击
  bookClick() {
    alert('书籍列表点击');
  }
}
 
export default BrochureAll;