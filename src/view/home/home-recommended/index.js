import React, { Component } from 'react';
import { Skeleton } from 'antd';
import { getHomeCategoryNav, getHomeEntryList } from '@api/home';
import CategoryNav from '../category-nav';
import EntryListUi from '../entry-list';
import SidebarUi from '../sidebar';
import './index.less';

class HomeRecommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // 骨架屏loading
      navListData: [], // 导航列表数据
      navActiveIndex: 0, // 导航选中下标
      timeChoiceShow: false, // 时间选择显隐
      timeChoiceTitle: '', // 时间选择title
      timeChoiceMenuShow: false, // 时间选择下拉菜单显隐
      page: 1, // 列表条目页数
      pageSize: 15, // 列表条目条数
      entryType: 0, // 条目类型
      entryTime: '', // 条目时间
      entryList: [], // 列表条目数据
      look: true, // 分页请求开关
      pageLoading: false // 分页时的loading
    }
    // 滚动条监听
    this.bindHandleScroll = this.bindHandleScroll.bind(this);
    // 数据获取
    this.getEntryList = this.getEntryList.bind(this);
    // 导航切换
    this.navListChange = this.navListChange.bind(this);
    // 时间选择菜单显隐
    this.timeChoiceToggle = this.timeChoiceToggle.bind(this);
    // 时间选择
    this.timeChoiceClick = this.timeChoiceClick.bind(this);
    // 广告条目点击
    this.adEntryItemClick = this.adEntryItemClick.bind(this);
    // 专栏条目
    this.columnEntryItemClick = this.columnEntryItemClick.bind(this);
    this.likeCountClick = this.likeCountClick.bind(this);
    this.commentsCountClick = this.commentsCountClick.bind(this);
  }

  componentDidMount() {
    // 进行scroll事件的注册，绑定一个函数，让这个函数进行监听处理
    window.addEventListener('scroll', this.bindHandleScroll);
    // 获取分类导航数据
    getHomeCategoryNav()
      .then(res => {
        this.setState({ navListData: res.data });
      })
    // 获取列表条目数据
    this.getEntryList();
  }

  componentWillUnmount(){
    // 进行scroll事件的注销
    window.removeEventListener('scroll', this.bindHandleScroll);
  }

  render() {
    return (
      <div className="home-recommended">
        <div className="content">
          <CategoryNav
            navListData={this.state.navListData}
            navActiveIndex={this.state.navActiveIndex}
            navListChange={this.navListChange}
            timeChoiceToggle={this.timeChoiceToggle}
            timeChoiceShow={this.state.timeChoiceShow}
            timeChoiceTitle={this.state.timeChoiceTitle}
            timeChoiceMenuShow={this.state.timeChoiceMenuShow}
            timeChoiceClick={this.timeChoiceClick}
          />
          <Skeleton active loading={this.state.loading} paragraph={{ rows: 2 }}>
            <EntryListUi
              entryList={this.state.entryList}
              adEntryItemClick={this.adEntryItemClick}
              columnEntryItemClick={this.columnEntryItemClick}
              likeCountClick={this.likeCountClick}
              commentsCountClick={this.commentsCountClick}
            />
            <Skeleton active loading={this.state.pageLoading} paragraph={{ rows: 2 }}></Skeleton>
          </Skeleton>
        </div>
        <div className="sidebar">
          <SidebarUi />
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
      page++;
      this.setState({
        look: false,
        pageLoading: true,
        page,
        pageSize: 6
      });
      getHomeEntryList({
        page: this.state.page,
        pageSize: this.state.pageSize,
        entryType: this.state.entryType,
        entryTime: this.state.entryTime
      })
        .then(res => {
          let entryList = this.state.entryList;
          entryList.columnEntryList = entryList.columnEntryList.concat(res.data.columnEntryList);
          this.setState({
            look: true,
            pageLoading: false,
            entryList
          });
        })
        .catch(() => {
          this.setState({ look: true });
        })
    }
  }

  // 获取列表条目数据
  getEntryList() {
    this.setState({ loading: true });
    getHomeEntryList({
      page: this.state.page,
      pageSize: this.state.pageSize,
      entryType: this.state.entryType,
      entryTime: this.state.entryTime
    })
      .then(res => {
        this.setState({
          entryList: res.data,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          entryList: [],
          loading: false
        });
      })
  }

  // 导航切换
  navListChange(index) {
    if (index === 2) {
      this.setState({ timeChoiceShow: true });
    } else {
      this.setState({
        timeChoiceShow: false,
        timeChoiceTitle: this.state.navListData.timeChoice[0].time
      });
    }
    this.setState({
      navActiveIndex: index,
      page: 1,
      pageSize: 15,
      entryType: index
    }, () => {
      this.getEntryList();
    });
  }

  // 时间选择菜单显隐
  timeChoiceToggle() {
    let { timeChoiceMenuShow } = this.state;
    if (timeChoiceMenuShow) {
      this.setState({ timeChoiceMenuShow: false });
    } else {
      this.setState({ timeChoiceMenuShow: true });
    }
  }

  // 时间选择
  timeChoiceClick(item, index) {
    this.setState({
      timeChoiceTitle: item.time,
      timeChoiceMenuShow: false,
      page: 1,
      pageSize: 15,
      entryTime: index
    }, () => {
      this.getEntryList();
    });
  }

  // 广告条目点击
  adEntryItemClick() {
    alert('点击了广告列表');
  }

  // 专栏条目点击
  columnEntryItemClick() {
    alert('点击了专栏列表');
  }

  // 专栏条目喜欢点击
  likeCountClick(e) {
    // 阻止事件冒泡
    e.stopPropagation();
    alert('点击了喜欢');
  }

  // 专栏条目不喜欢点击
  commentsCountClick(e) {
    // 阻止事件冒泡
    e.stopPropagation();
    alert('点击了不喜欢');
  }
}

export default HomeRecommended;