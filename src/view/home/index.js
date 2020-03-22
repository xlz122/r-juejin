import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import lodash from 'lodash';
import { getHomeNav } from '@api/home';
import HomeNavUi from './home-nav';
import { createDB, insertData, getAllData, updateData, clearAllData, deleteDB } from '@indexDB';
import './index.less';

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
    // 数据库操作
    var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
    if( !indexedDB ){
      throw Error('当前不支持 indexed 数据库');
    } else {
      createDB('juejinDB', 'account' , 1);
      // insertData('juejinDB', 'account', { username: 'xlz13', password: 1235456, phoneNumber: 14798980339 });
      // updateData('juejinDB', 'account', { username: 'xlz13', value: '12563' }, () => {
      //   console.log('数据更新完成');
      // });
      // getAllData('juejinDB', 'account', (data) => {
      //   console.log(data)
      // })
      // clearAllData('juejinDB', 'account');
      // deleteDB('juejinDB')
    }

    // 获取首页导航数据
    getHomeNav()
      .then(res => {
        // 数据存储前进行数据修改
        res.data.map(item => item.isShow = false);
        this.setState({ homeNavData: res.data });
      })
  }

  render() {
    return (
      <div className="home">
        <HomeNavUi
          homeNavData={this.state.homeNavData}
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
  // 深拷贝：解决子组件使用connect之后，父组件更新，不会触发子组件更新
  homeNavMouseOver(index) {
    let list = lodash.cloneDeep(this.state.homeNavData);
    list[index].isShow = true;
    this.setState({ homeNavData: list });
  }

  // 主页导航划出
  homeNavMouseOut(index) {
    let list = lodash.cloneDeep(this.state.homeNavData);
    list[index].isShow = false;
    this.setState({ homeNavData: list });
  }

  // 主页导航详情跳转
  homeNavDetailsJump(e) {
    e.stopPropagation(); //阻止事件冒泡
    alert('点击了详情跳转');
  }
}
 
export default Home;