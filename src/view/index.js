import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/router/asyncComponent';
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

function App(props) {
  React.store = props;

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Switch>
          <Route path="/xlz/home" component={Home} />
          <Route path="/xlz/boiling-point" component={BoilingPoint} />
          <Route path="/xlz/topic" component={Topic} />
          <Route path="/xlz/brochure" component={Brochure} />
          <Route path="/xlz/activity" component={Activity} />
          <Redirect from="*" to="/404" />
        </Switch>
      </div>
      <Message />
    </>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
