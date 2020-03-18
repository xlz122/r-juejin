import React, { Component, Fragment } from 'react';
import './index.less';
import { homeRecommendNavList } from '@api/home';
import RecommendedUi from './recommendedUi';

class HomeRecommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendNavList: [], // 首页推荐导航数据
      categoryNavActive: 0, // 推荐导航选中下标
      timeChoiceShow: false, // 控制热榜时间选择显示
      dropDownShow: false, // 控制热榜时间下拉菜单显示
      dropDownTitle: '' // 热榜显示title
    }
    // 导航
    this.categoryNavClick = this.categoryNavClick.bind(this);
    // 热榜
    this.timeToggle = this.timeToggle.bind(this);
    // 时间选择
    this.timeChoiceClick = this.timeChoiceClick.bind(this);
  }

  componentDidMount() {
    // 获取首页推荐导航数据
    homeRecommendNavList()
      .then(res => {
        this.setState({ recommendNavList: res.data });
        this.setState({ dropDownTitle: res.data.timeChoice[0].time });
      })
  }

  render() { 
    return (
      <Fragment>
        <RecommendedUi
          recommendNavList={this.state.recommendNavList}
          categoryNavActive={this.state.categoryNavActive}
          categoryNavClick={this.categoryNavClick}
          timeChoiceShow={this.state.timeChoiceShow}
          timeChoiceClick={this.timeChoiceClick}
          dropDownShow={this.state.dropDownShow}
          dropDownTitle={this.state.dropDownTitle}
          timeToggle={this.timeToggle}
        />
      </Fragment>  
    );
  }

  // 导航切换
  categoryNavClick(index) {
    this.setState({ categoryNavActive: index });
    if (index === 2) {
      this.setState({ timeChoiceShow: true });
    } else {
      this.setState({ timeChoiceShow: false });
      this.setState({ dropDownTitle: this.state.recommendNavList.timeChoice[0].time });
    }
  }

  // 热榜时间菜单显隐
  timeToggle() {
    let { dropDownShow } = this.state;
    if (dropDownShow) {
      this.setState({ dropDownShow: false });
    } else {
      this.setState({ dropDownShow: true });
    }
  }

  // 热榜时间选择
  timeChoiceClick(item, index) {
    this.setState({ dropDownTitle: item.time });
    this.setState({ dropDownShow: false });
  }
}
 
export default HomeRecommended;