import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from './asyncComponent';
import './index.less';

// 引入全局弹框组件
const Message = asyncComponent(() => import('@view/common/message'));

// 按需引入
// 目前使用node12版本创建的react项目，使用低版本node版本创建的react项目，如（8.9.1）会报错，import语法不支持
const Home = asyncComponent(() => import('@view/home'));
const Header = asyncComponent(() => import('@view/header'));
const boilingPoint = asyncComponent(() => import('@view/boilingPoint'));
const Topic = asyncComponent(() => import('@view/topic'));
const Brochure = asyncComponent(() => import('@view/brochure'));
const Activity = asyncComponent(() => import('@view/activity'));

function AppRouter() {
  return (
    <Router>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/boiling-point" component={boilingPoint} />
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

export default AppRouter;