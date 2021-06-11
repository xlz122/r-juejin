import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

function ChildNavBarUi(props) {
  // 数据
  const { navData, navActiveIndex } = props;
  // 事件
  const { navActiveChange } = props;

  return (
    <div className="activity-child-nav">
      <ul className="nav-list">
        {
          navData?.banner_citys?.map((item, index) => {
            return (
              <li
                className={`li-item ${index === parseInt(navActiveIndex) ? 'li-active-item ' : ''}`}
                key={index + item}
              >
                <Link
                  className="item-link"
                  to={item.link}
                  replace
                  onClick={() => {
                    navActiveChange(index);
                  }}
                >
                  {item.title}
                </Link>
                <span className="auxiliary"></span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default ChildNavBarUi;
