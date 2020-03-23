import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import lodash from 'lodash';
import { getHomeNav } from '@api/home';
import NavUi from './nav';
import './index.less';

// 引入组件
import asyncComponent from '@router/asyncComponent.js';
const HomeRecommended = asyncComponent(() => import('@view/home/home-recommended'));

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navData: []
    }
    // 主页导航
    this.navMouseOver = this.navMouseOver.bind(this);
    this.navMouseOut = this.navMouseOut.bind(this);
    this.navDetailsJump = this.navDetailsJump.bind(this);
  }

  componentDidMount() {
    // 获取首页导航数据
    getHomeNav()
      .then(res => {
        // 数据存储前进行数据修改
        res.data.map(item => item.isShow = false);
        this.setState({ navData: res.data });
      })
  }

  render() {
    return (
      <div className="home">
        <NavUi
          navData={this.state.navData}
          navMouseOver={this.navMouseOver}
          navMouseOut={this.navMouseOut}
          navDetailsJump={this.navDetailsJump}
        />
        <div className="home-container">
          <Route exact path="/home" component={HomeRecommended} />
          <Route path="/home/backend" component={HomeRecommended} />
          <Route path="/home/frontend" component={HomeRecommended} />
          <Route path="/home/android" component={HomeRecommended} />
        </div>
      </div>
    );
  }

  // 主页导航划过
  // 深拷贝：解决子组件使用connect之后，父组件更新，不会触发子组件更新
  navMouseOver(index) {
    let list = lodash.cloneDeep(this.state.navData);
    list[index].isShow = true;
    this.setState({ navData: list });
  }

  // 主页导航划出
  navMouseOut(index) {
    let list = lodash.cloneDeep(this.state.navData);
    list[index].isShow = false;
    this.setState({ navData: list });
  }

  // 主页导航详情跳转
  navDetailsJump(e) {
    e.stopPropagation(); //阻止事件冒泡
    alert('点击了详情跳转');
  }
}
 
export default Home;