import React, { Component } from 'react';
import PinNav from '../pin-nav';
import PinList from '../pin-list';
import Sidebar from '../sidebar';
import './index.less';

class BoilingPointRecom extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
      <div className="boiling-point-recom">
        <div className="dock-nav">
          <PinNav />
        </div>
        <div className="content">
          <PinList />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    );
  }
}
 
export default BoilingPointRecom;