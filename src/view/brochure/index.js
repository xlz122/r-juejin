import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import lodash from 'lodash';
import { getBrochureNav } from '@api/brochure';
import NavUi from './nav';
import './index.less';

// 引入组件
import asyncComponent from '@router/asyncComponent.js';
const BrochureAll = asyncComponent(() => import('@view/brochure/brochure-all'));

class Brochure extends Component {
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
    // 获取小册导航数据
    getBrochureNav()
      .then(res => {
        // 数据存储前进行数据修改
        res.data.map(item => item.isShow = false);
        this.setState({ navData: res.data });
      })
  }

  render() {
    return (
      <div className="brochure">
        <NavUi
          navData={this.state.navData}
          navMouseOver={this.navMouseOver}
          navMouseOut={this.navMouseOut}
          navDetailsJump={this.navDetailsJump}
        />
        <div className="brochure-container">
          <Route exact path="/brochure" component={BrochureAll} />
          <Route path="/brochure/frontend" component={BrochureAll} />
        </div>
      </div>
    );
  }

  // 小册导航划过
  // 深拷贝：解决子组件使用connect之后，父组件更新，不会触发子组件更新
  navMouseOver(index) {
    let list = lodash.cloneDeep(this.state.navData);
    list[index].isShow = true;
    this.setState({ navData: list });
  }

  // 小册导航划出
  navMouseOut(index) {
    let list = lodash.cloneDeep(this.state.navData);
    list[index].isShow = false;
    this.setState({ navData: list });
  }

  // 小册导航详情跳转
  navDetailsJump(e) {
    e.stopPropagation(); //阻止事件冒泡
    alert('点击了详情跳转');
  }
}
 
export default Brochure;