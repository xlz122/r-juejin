import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less';
import { setHomeCategoryNav } from '@store/actionCreators';
import CategoryNav from '../category-nav';

class HomeRecommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navListData: this.props.categoryNavData, // 导航列表数据
      navActiveIndex: 0, // 导航选中下标
      timeChoiceShow: false, // 时间选择显隐
      timeChoiceTitle: '', // 时间选择title
      timeChoiceMenuShow: false, // 时间选择下拉菜单显隐
    }
    // 导航切换
    this.navListChange = this.navListChange.bind(this);
    // 时间选择菜单显隐
    this.timeChoiceToggle = this.timeChoiceToggle.bind(this);
    // 时间选择
    this.timeChoiceClick = this.timeChoiceClick.bind(this);
    // 分类导航的数据是异步的,进行订阅更新
    // 问题：无法通过context拿到store
    // this.categoryNavDataChange = this.categoryNavDataChange.bind(this);
    // context.subscribe(this.categoryNavDataChange);
  }

  // categoryNavDataChange() {
  //   this.setState({ navListData: this.props.categoryNavData })
  // }

  componentDidMount() {
    // 获取导航数据
    this.props.getCategoryNavData();
  }

  render() {
    return (
      <div className="home-recommended">
        <div className="content">
          <CategoryNav
            navListData={this.props.navListData}
            navActiveIndex={this.state.navActiveIndex}
            navListChange={this.navListChange}
            timeChoiceToggle={this.timeChoiceToggle}
            timeChoiceShow={this.state.timeChoiceShow}
            timeChoiceTitle={this.state.timeChoiceTitle}
            timeChoiceMenuShow={this.state.timeChoiceMenuShow}
            timeChoiceClick={this.timeChoiceClick}
          />
        </div>
        <div className="sidebar"></div>
      </div>
    );
  }

  // 导航切换
  navListChange(index) {
    this.setState({ navActiveIndex: index });
    if (index === 2) {
      this.setState({ timeChoiceShow: true });
    } else {
      this.setState({ timeChoiceShow: false });
      this.setState({ timeChoiceTitle: this.props.navListData.timeChoice[0].time });
    }
  }

  // 时间选择菜单显隐
  timeChoiceToggle() {
    let { timeChoiceMenuShow } = this.state;
    if (timeChoiceMenuShow) {
      this.setState({ timeChoiceMenuShow: false });
    } else {
      this.setState({ timeChoiceMenuShow: true });
    }
  }

  // 时间选择
  timeChoiceClick(item, index) {
    this.setState({ timeChoiceTitle: item.time });
    this.setState({ timeChoiceMenuShow: false });
  }
}

const stateToProps = (state) => {
  return {
    navListData: state.categoryNavData
  }
}

const dispatchToProps = (dispatch) => {
  return {
    // 获取分类导航数据
    getCategoryNavData() {
      const action = setHomeCategoryNav();
      dispatch(action);
    }
  }
}
 
export default connect(stateToProps, dispatchToProps)(HomeRecommended);