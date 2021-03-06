import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { headerNavAction } from '@store/actionCreators';
import { getHomeChildNav, getHomeCategoryNav, getHomeEntryList } from '@api/home';
import { getPageBottomHeight } from '@/utils/utils';
import ChildNavBar from '@view/common/child-nav-bar';
import ChildNavBarDetails from '@view/common/child-nav-bar/childNavBarDetails';
import SidebarUi from './sidebar';
import './index.less';

// 引入列表组件
import asyncComponent from '@router/asyncComponent.js';
const ListContainer = asyncComponent(() => import('@view/home/list-container'));

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navData: [], // 导航数据
      navActiveIndex: 0, // 导航选中
      navTagActiveIndex: 0, // 标签选中
      categoryNavListData: [], // 类别导航数据
      categoryActiveIndex: 0, // 类别导航选中下标
      timeChoiceShow: false, // 类别导航时间选择显隐
      timeChoiceTitle: '全部', // 类别导航时间选择title
      timeChoiceMenuShow: false, // 类别导航时间选择下拉菜单显隐
      entryType: 0, // 条目类型id
      entryTime: 0, // 条目时间范围id
      listLoading: false, // 列表loading
      web_id: 0, // 二级导航id
      web_c_id: 'all', // 二级子项id
      page: 1, // 列表页数
      pageSize: 15, // 列表条数
      listData: [], // 列表数据
      look: true, // 分页请求开关
      pageLoading: false // 分页时的loading
    }
    // 导航
    this.getHomeCategoryNavData = this.getHomeCategoryNavData.bind(this);
    this.navActiveChange = this.navActiveChange.bind(this);
    this.navMouseOver = this.navMouseOver.bind(this);
    this.navMouseOut = this.navMouseOut.bind(this);
    this.navDetailsJump = this.navDetailsJump.bind(this);
    // 标签
    this.navTagActiveChange = this.navTagActiveChange.bind(this);
    // 类别导航
    this.categoryNavChange = this.categoryNavChange.bind(this);
    this.timeChoiceToggle = this.timeChoiceToggle.bind(this);
    this.timeChoiceClick = this.timeChoiceClick.bind(this);
    // 列表事件
    this.getListData = this.getListData.bind(this);
    // 滚动条监听
    this.bindHandleScroll = this.bindHandleScroll.bind(this);

    // 子组件事件
    this.likeCountClick = this.likeCountClick.bind(this);
  }

  componentDidMount() {
    // 动态计算当前页面高度
    let pageHeight = document.querySelector(".home");
    if (pageHeight) {
      pageHeight.style.minHeight = (window.innerHeight - pageHeight.offsetTop) + 'px';
    }

    // 重置顶部导航
    this.props.navListChange(0);

    // 获取导航数据
    getHomeChildNav()
      .then(res => {
        // 数据存储前进行数据修改
        res.data.map(item => item.isShow = false);
        this.setState({ navData: res.data });
        // 导航和路由对比，获取对应id，导航选中
        res.data.forEach((item, index) => {
          if (item.link === this.props.location.pathname) {
            this.setState({
              navActiveIndex: index,
              web_id: item.web_id
            }, () => {
              // 获取分类导航数据
              this.getHomeCategoryNavData();
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

  // 获取分类导航数据
  getHomeCategoryNavData() {
    getHomeCategoryNav()
      .then(res => {
        this.setState({
          categoryNavListData: res.data,
          entryType: res.data.list[0]?.classifyId
        }, () => {
          this.getListData();
        });
      })
  }

  // 导航变化
  navActiveChange(index) {
    let navData = this.state.navData;
    navData.forEach((i, ind) => {
      if (index === ind) {
        this.setState({
          navActiveIndex: index,
          navTagActiveIndex: 0,
          web_id: i.web_id,
          web_c_id: 'all',
          timeChoiceShow: false,
          entryType: this.state.categoryNavListData.list[0]?.classifyId,
          entryTime: 'all'
        }, () => {
          this.getListData();
        })
      }
    })
  }

  // 获取列表数据
  getListData() {
    this.setState({ listLoading: true });
    getHomeEntryList({
      web_id: this.state.web_id,
      web_c_id: this.state.web_c_id,
      page: this.state.page,
      pageSize: this.state.pageSize,
      entryType: this.state.entryType,
      entryTime: this.state.entryTime
    })
      .then(res => {
        this.setState({
          listData: res.data,
          listLoading: false
        });
      })
  }

  // 导航划过
  // 深拷贝：解决子组件使用connect之后，父组件更新，不会触发子组件更新
  navMouseOver(index) {
    let list = this.state.navData;
    list[index].isShow = true;
    this.setState({ navData: list });
  }

  // 导航划出
  navMouseOut(index) {
    let list = this.state.navData;
    list[index].isShow = false;
    this.setState({ navData: list });
  }

  // 导航详情跳转
  navDetailsJump(e, i, index, ind) {
    // 阻止事件冒泡
    e.stopPropagation();
    // 点击后标签框关闭
    const navData = this.state.navData;
    navData.forEach(item => {
      item.isShow = false;
    })
    // 更新子导航
    this.navActiveChange(index);
    // 详情选中
    this.setState({
      navData,
      web_c_id: i.web_c_id,
      navTagActiveIndex: ind,
      categoryActiveIndex: 0,
      timeChoiceShow: false,
      entryType: this.state.categoryNavListData.list[0]?.classifyId,
      entryTime: 'all'
    });
  }

  // 标签改变
  navTagActiveChange(i, ind) {
    this.setState({
      web_c_id: i.web_c_id,
      navTagActiveIndex: ind,
      categoryActiveIndex: 0,
      timeChoiceShow: false,
      entryType: this.state.categoryNavListData.list[0]?.classifyId,
      entryTime: 'all'
    }, () => {
      this.getListData();
    });
  }

  bindHandleScroll(event) {
    // 滚动条距离页面底部的高度
    const bottomHeight = getPageBottomHeight(event);

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
        web_id: this.state.web_id,
        web_c_id: this.state.web_c_id,
        page: this.state.page,
        pageSize: this.state.pageSize,
        entryType: this.state.entryType,
        entryTime: this.state.entryTime
      })
        .then(res => {
          let listData = this.state.listData;
          listData.columnEntryList = listData.columnEntryList.concat(res.data.columnEntryList);
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

  // 类别导航切换
  categoryNavChange(item, index) {
    if (index === 2) {
      this.setState({
        timeChoiceShow: true,
        timeChoiceTitle: '全部',
        entryTime: 'all'
      });
    } else {
      this.setState({
        timeChoiceShow: false,
        timeChoiceTitle: this.state.categoryNavListData.timeChoice[0].time
      });
    }
    //根据路由，获取对应id，导航选中
    let navData = this.state.navData;
    navData.forEach(i => {
      if (i.link === this.props.location.pathname) {
        this.setState({
          categoryActiveIndex: index,
          web_id: i.web_id,
          page: 1,
          pageSize: 15,
          entryType: item.classifyId
        }, () => {
          this.getListData();
        })
      }
    })
  }

  // 类别导航 - 时间选择菜单显隐
  timeChoiceToggle() {
    let { timeChoiceMenuShow } = this.state;
    if (timeChoiceMenuShow) {
      this.setState({ timeChoiceMenuShow: false });
    } else {
      this.setState({ timeChoiceMenuShow: true });
    }
  }

  // 类别导航 - 时间选择
  timeChoiceClick(item, index) {
    //根据路由，获取对应id，导航选中
    let navData = this.state.navData;
    navData.forEach(i => {
      if (i.link === this.props.location.pathname) {
        this.setState({
          categoryActiveIndex: index,
          timeChoiceTitle: item.time,
          timeChoiceMenuShow: false,
          web_id: i.web_id,
          page: 1,
          pageSize: 15,
          entryTime: item.timeId
        }, () => {
          this.getListData();
        })
      }
    })
  }

  // 专栏条目点赞
  likeCountClick(item) {
    const listData = this.state.listData;
    listData.columnEntryList.forEach(l => {
      if (l.id === item.id) {
        l.like = !item.like;
        // 点赞数增减
        if (item.like) {
          l.likeCount++;
        } else {
          l.likeCount--;
        }
      }
    });

    this.setState({
      listData
    });
  }

  render() {
    const childProps = {
      categoryNavListData: this.state.categoryNavListData,
      categoryActiveIndex: this.state.categoryActiveIndex,
      timeChoiceShow: this.state.timeChoiceShow,
      timeChoiceTitle: this.state.timeChoiceTitle,
      timeChoiceMenuShow: this.state.timeChoiceMenuShow,
      categoryNavChange: this.categoryNavChange,
      timeChoiceToggle: this.timeChoiceToggle,
      timeChoiceClick: this.timeChoiceClick,
      listLoading: this.state.listLoading,
      likeCountClick: this.likeCountClick,
      listData: this.state.listData,
      pageLoading: this.state.pageLoading
    }
    return (
      <div className="home">
        <ChildNavBar
          navData={this.state.navData}
          navActiveIndex={this.state.navActiveIndex}
          navTagActiveIndex={this.state.navTagActiveIndex}
          navActiveChange={this.navActiveChange}
          navMouseOver={this.navMouseOver}
          navMouseOut={this.navMouseOut}
          navDetailsJump={this.navDetailsJump}
        />
        <ChildNavBarDetails
          navData={this.state.navData}
          navActiveIndex={this.state.navActiveIndex}
          navTagActiveIndex={this.state.navTagActiveIndex}
          navTagActiveChange={this.navTagActiveChange}
        />
        <div className="home-container">
          <div className="content">
            <Switch>
              <Route exact={true} path="/xlz/home" render={props => <ListContainer {...props} {...childProps} />} />
              <Route exact={true} path="/xlz/home/backend" render={props => <ListContainer {...props} {...childProps} />} />
              <Route exact={true} path="/xlz/home/frontend" render={props => <ListContainer {...props} {...childProps} />} />
              <Route exact={true} path="/xlz/home/android" render={props => <ListContainer {...props} {...childProps} />} />
              <Route exact={true} path="/xlz/home/ios" render={props => <ListContainer {...props} {...childProps} />} />
              <Route exact={true} path="/xlz/home/ai" render={props => <ListContainer {...props} {...childProps} />} />
              <Route exact={true} path="/xlz/home/freebie" render={props => <ListContainer {...props} {...childProps} />} />
              <Route exact={true} path="/xlz/home/career" render={props => <ListContainer {...props} {...childProps} />} />
              <Route exact={true} path="/xlz/home/article" render={props => <ListContainer {...props} {...childProps} />} />
              <Redirect from="*" to="/404" />
            </Switch>
          </div>
          <div className="sidebar">
            <SidebarUi />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // 设置头部导航下标
    navListChange(index) {
      localStorage.setItem('headerNavActiveIndex', index);
      const action = headerNavAction(index);
      dispatch(action);
    }
  }
}

export default connect(() => {}, mapDispatchToProps)(Home);