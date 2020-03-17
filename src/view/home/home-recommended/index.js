import React, { Component, Fragment } from 'react';
import './index.less';
import RecommendedUi from './recommendedUi';

class HomeRecommended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownShow: false // 控制热榜时间下拉菜单显示
    }
    // 热榜
    this.timeToggle = this.timeToggle.bind(this);
  }

  render() { 
    return (
      <Fragment>
        <RecommendedUi
          dropDownShow={this.state.dropDownShow}
          timeToggle={this.timeToggle}
        />
      </Fragment>  
    );
  }

  // 热榜时间切换
  timeToggle() {
    let { dropDownShow } = this.state;
    if (dropDownShow) {
      this.setState({ dropDownShow: false });
    } else {
      this.setState({ dropDownShow: true });
    }
  }
}
 
export default HomeRecommended;