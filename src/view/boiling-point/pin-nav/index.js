import React, { Component } from 'react';
import { getBoilingPointPinNav, getBoilingPointPinList } from '@api/boiling-point';
import PinNavUi from './pinNavUi';

class PinNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navData: [], // 导航数据
      navActiveIndex: 0 // 导航选中下标
    }
    // 导航更改
    this.navListChange = this.navListChange.bind(this);
  }

  componentDidMount() {
    // 获取左侧导航数据
    getBoilingPointPinNav()
      .then(res => {
        this.setState({ navData: res.data });
        // 导航和路由对比，获取对应id，导航选中
        let app_id = null;
        res.data.forEach((item, index) => {
          if (item.link === this.props.location.pathname) {
            app_id = item.app_id;
            this.setState({ navActiveIndex: index });
          }
        })
        // 获取列表数据
        this.props.setListLoading(true);
        getBoilingPointPinList({
          id: app_id,
          page: 1,
          pageSize: 10
        })
          .then(res => {
            this.props.setListData(res.data);
            this.props.setListLoading(false);
          })
      })
  }

  render() { 
    return (
      <PinNavUi
        navData={this.state.navData}
        navActiveIndex={this.state.navActiveIndex}
        navListChange={this.navListChange}
      />
    );
  }

  navListChange(item, index) {
    this.setState({ navActiveIndex: index }, () => {
      // 获取列表数据
      this.props.setListLoading(true);
      getBoilingPointPinList({
        id: item.app_id,
        page: 1,
        pageSize: 10
      })
        .then(res => {
          this.props.setListData(res.data);
          this.props.setListLoading(false);
        })
    })
  }
}
 
export default PinNav;