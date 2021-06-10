import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from './asyncComponent';
import { userInfoAction, headerNavAction } from '@store/actionCreators';
// 引入react-redux连接器
import { connect } from 'react-redux';
import './index.less';

// 引入全局弹框组件
const Message = asyncComponent(() => import('@view/common/message'));

// 按需引入
// 目前使用node12版本创建的react项目，使用低版本node版本创建的react项目，如（8.9.1）会报错，import语法不支持
const Header = asyncComponent(() => import('@view/header'));
const Home = asyncComponent(() => import('@view/home'));
const BoilingPoint = asyncComponent(() => import('@view/boiling-point'));
const Topic = asyncComponent(() => import('@view/topic'));
const Brochure = asyncComponent(() => import('@view/brochure'));
const Activity = asyncComponent(() => import('@view/activity'));

function AppRouter(props) {
  React.store = props;
  return (
    <Router>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/boiling-point" component={BoilingPoint} />
          <Route path="/topic" component={Topic} />
          <Route path="/brochure" component={Brochure} />
          <Route path="/activity" component={Activity} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
      <Message />
    </Router>
  )
}

// redux数据挂载到props上
const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
    headerNavActiveIndex: state.headerNavActiveIndex
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // 设置用户信息
    setUserInfo(userinfo) {
      const action = userInfoAction(userinfo);
      dispatch(action);
    },
    // 设置头部导航
    setHeaderNavActive(index) {
      const action = headerNavAction(index);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
