import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import lodash from 'lodash';
import { getHomeChildNav } from '@api/home';
import ChildNavBar from '@view/common/child-nav-bar';
import './index.less';

// 引入子组件
import asyncComponent from '@router/asyncComponent.js';
const HomeRecommended = asyncComponent(() => import('@view/home/home-recommended'));

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navData: []
    }
    // 导航
    this.navMouseOver = this.navMouseOver.bind(this);
    this.navMouseOut = this.navMouseOut.bind(this);
    this.navDetailsJump = this.navDetailsJump.bind(this);
  }

  componentDidMount() {
    // 获取导航数据
    getHomeChildNav()
      .then(res => {
        // 数据存储前进行数据修改
        res.data.map(item => item.isShow = false);
        this.setState({ navData: res.data });
      })
  }

  render() {
    return (
      <div className="home">
        <ChildNavBar
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
          <Route path="/home/ios" component={HomeRecommended} />
          <Route path="/home/ai" component={HomeRecommended} />
          <Route path="/home/freebie" component={HomeRecommended} />
          <Route path="/home/career" component={HomeRecommended} />
          <Route path="/home/article" component={HomeRecommended} />
        </div>
      </div>
    );
  }

  // 导航划过
  // 深拷贝：解决子组件使用connect之后，父组件更新，不会触发子组件更新
  navMouseOver(index) {
    let list = lodash.cloneDeep(this.state.navData);
    list[index].isShow = true;
    this.setState({ navData: list });
  }

  // 导航划出
  navMouseOut(index) {
    let list = lodash.cloneDeep(this.state.navData);
    list[index].isShow = false;
    this.setState({ navData: list });
  }

  // 导航详情跳转
  navDetailsJump(e) {
    //阻止事件冒泡
    e.stopPropagation();
    alert('点击了详情跳转');
  }
}
 
export default Home;