import React from 'react';
import './index.less';

function PinList() {
  return (
    <ul className="pin-list">
      <li className="item">
        <div className="item-header-row"></div>
        <div className="item-content-row"></div>
        <div className="item-image-row"></div>
        <div className="item-topic-row"></div>
        <div className="item-action-row"></div>
      </li>
    </ul>
  )
}

export default PinList;