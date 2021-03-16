import React, { Component } from 'react';
import PinNavUi from './pinNavUi';

class PinNav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 
    return (
      <PinNavUi
        navData={this.props.navData}
        navActiveIndex={this.props.navActiveIndex}
        navActiveChange={this.props.navActiveChange}
      />
    );
  }
}
 
export default PinNav;