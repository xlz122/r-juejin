import React, { Component } from 'react';
import ChildNavBarUi from './childNavBarUi';

class ChildNavBar extends Component {
  render() {
    return (
      <ChildNavBarUi
        navData={this.props.navData}
        navActiveIndex={this.props.navActiveIndex}
        navActiveChange={this.props.navActiveChange}
        navMouseOver={this.props.navMouseOver}
        navMouseOut={this.props.navMouseOut}
        navDetailsJump={this.props.navDetailsJump}
      />
    );
  }
}

export default ChildNavBar;
