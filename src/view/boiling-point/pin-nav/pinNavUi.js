import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

function PinNavUi(props) {
  // 数据
  const { navData, navActiveIndex } = props;
  // 事件
  const { navActiveChange } = props;
  return (
    <ul className="pin-nav-list">
      {
        navData &&
        navData.map((item, index) => {
          return (
            <li
              className={`li-item ${index === 0 ? 'li-first-item' : ''} ${index === parseInt(navActiveIndex) ? 'li-active-item' : ''}`}
              key={index + item}
              onClick={() => { navActiveChange(index) }}
            >
              <Link className="item-link" to={item.link}>{item.title}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default PinNavUi;
