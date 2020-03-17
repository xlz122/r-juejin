import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// 引入react-redux连接器
import { connect } from 'react-redux';
import './index.less';
// 主页导航依赖
import homeNavJson from './home-nav/json';
import HomeNavUi from './home-nav';
import { homeNavAction } from '@store/actionCreators';

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
      homeNavData: homeNavJson
    }
    // 主页导航
    this.getHomeNavDom = this.getHomeNavDom.bind(this);
    this.homeNavMouseOver = this.homeNavMouseOver.bind(this);
    this.homeNavMouseOut = this.homeNavMouseOut.bind(this);
    this.homeNavDetailsJump = this.homeNavDetailsJump.bind(this);
  }

  componentWillMount() {
    // 对主页导航数据进行修改
    let list = this.state.homeNavData;
    list.map(item => item.isShow = false);
    this.setState({ homeNavData: list });
  }

  render() { 
    return (
      <div className="home">
        <HomeNavUi
          getHomeNavDom={this.getHomeNavDom}
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

  // 获取submenuDom
  getHomeNavDom() {
    const { homeNavData } =  this.state;
    const { homeNavActionIndex, homeNavChange } =  this.props;
    const homeNavDom = homeNavData.map((item, index) => {
      return (
        <li
          className={`li-item ${index === parseInt(homeNavActionIndex) ? 'li-active-item ' : ''}`}
          key={index + item}
          onClick={() => { homeNavChange(index) }}
          onMouseOver={() => { this.homeNavMouseOver(index) }}
          onMouseLeave={() => { this.homeNavMouseOut(index) }}
        >
          <Link className="item-link" to={item.link}>{item.title}</Link>
          <span className="auxiliary"></span>
          {
            // 存在子项 && 是否显示 && 是否选中项
            item.children && item.isShow && index !== parseInt(homeNavActionIndex) &&
            <ul className="list-details">
              {
                item.children.map((i, ind) => {
                  // 去除第一项全部
                  if (ind === 0) {
                    return false;
                  }
                  return (
                    <li
                      className="details-item"
                      key={ind + i}
                    >
                      <Link className="details-link" to="" onClick={this.homeNavDetailsJump}>{i.title}</Link>
                      <span className="auxiliary"></span>
                    </li>
                  )
                })
              }
            </ul>
          }
        </li>
      );
    })
    return homeNavDom;
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
    homeNavChange(index) {
      sessionStorage.setItem('homeNavActionIndex', index);
      const action = homeNavAction(index);
      dispatch(action);
    }
  }
}
 
export default connect(stateToProps, dispatchToProps)(Home);