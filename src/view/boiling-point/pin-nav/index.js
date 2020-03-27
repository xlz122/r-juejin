import React, { Component } from 'react';
import './index.less';

class PinNav extends Component {
  render() {
    return (
      <ul className="pin-nav-list">
        <li className="li-item li-first-item">推荐</li>
        <li className="li-item li-active-item">推荐</li>
        <li className="li-item">推荐</li>
        <li className="li-item">推荐</li>
        <li className="li-item">推荐</li>
        <li className="li-item">推荐</li>
        <li className="li-item">推荐</li>
      </ul>
    )
  }
}

export default PinNav;