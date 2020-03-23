import React, { Component } from 'react';
import Sidebar from '../sidebar';
import './index.less';

class BrochureAll extends Component {
  render() { 
    return (
      <div className="brochure-all">
        <div className="content">
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    );
  }
}
 
export default BrochureAll;