import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// 引入react-redux连接器
import { connect } from 'react-redux';
import './index.less';
// 主页导航依赖
import { getHomeNavList } from '@api/home';
import { homeNavAction } from '@store/actionCreators';
import HomeNavUi from './home-nav';

// 引入组件
import asyncComponent from '@router/asyncComponent.js';
const HomeRecommended = asyncComponent(() => import('@view/home/home-recommended'));
const Topic = asyncComponent(() => import('@view/topic'));
const Brochure = asyncComponent(() => import('@view/brochure'));
const Activity = asyncComponent(() => import('@view/activity'));

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeNavData: []
    }
    // 主页导航
    this.homeNavMouseOver = this.homeNavMouseOver.bind(this);
    this.homeNavMouseOut = this.homeNavMouseOut.bind(this);
    this.homeNavDetailsJump = this.homeNavDetailsJump.bind(this);
  }

  componentDidMount() {
    // 获取首页导航数据
    getHomeNavList()
      .then(res => {
        this.setState({ homeNavData: res.data });
      })
  }

  // componentWillMount 即将被废弃 需要使用 UNSAFE_componentWillMount
  UNSAFE_componentWillMount() {
    // 对主页导航数据进行修改
    let list = this.state.homeNavData;
    list.map(item => item.isShow = false);
    this.setState({ homeNavData: list });
  }

  render() { 
    return (
      <div className="home">
        <HomeNavUi
          homeNavData={this.state.homeNavData}
          homeNavActionIndex={this.props.homeNavActionIndex}
          homeNavChange={this.props.homeNavChange}
          homeNavMouseOver={this.homeNavMouseOver}
          homeNavMouseOut={this.homeNavMouseOut}
          homeNavDetailsJump={this.homeNavDetailsJump}
        />
        <div className="home-container">
          <Route exact path="/home" component={HomeRecommended} />
          <Route path="/home/backend" component={Topic} />
          <Route path="/home/frontend" component={Brochure} />
          <Route path="/home/android" component={Activity} />
        </div>
      </div>
    );
  }

  // 主页导航划过
  homeNavMouseOver(index) {
    let list = this.state.homeNavData;
    list[index].isShow = true;
    this.setState({ homeNavData: list });
  }

  // 主页导航划出
  homeNavMouseOut(index) {
    let list = this.state.homeNavData;
    list[index].isShow = false;
    this.setState({ homeNavData: list });
  }

  // 主页导航详情跳转
  homeNavDetailsJump(e) {
    e.stopPropagation(); //阻止事件冒泡
    alert('点击了详情跳转');
  }
}

const stateToProps = (state) => {
  return {
    homeNavActionIndex: state.homeNavActionIndex
  }
}

const dispatchToProps = (dispatch) => {
  return {
    // 设置首页导航下标
    homeNavChange(index) {
      sessionStorage.setItem('homeNavActionIndex', index);
      const action = homeNavAction(index);
      dispatch(action);
    }
  }
}
 
export default connect(stateToProps, dispatchToProps)(Home);