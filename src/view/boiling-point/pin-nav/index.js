import React, { Component } from 'react';
import { getBoilingPointPinNav } from '@api/boiling-point';
import PinNavUi from './pinNavUi';

class PonList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  componentDidMount() {
    // 获取左侧导航数据
    getBoilingPointPinNav()
      .then(res => {
        this.setState({ navData: res.data });
      })
  }

  render() { 
    return (
      <PinNavUi
        navData={this.state.navData}
      />
    );
  }
}
 
export default PonList;