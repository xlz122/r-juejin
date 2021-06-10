import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

function childNavBarUi(props) {
  // 父组件传递
  const { navData, navMouseOver, navMouseOut, navDetailsJump } =  props;
  // redux传递
  const { navActiveIndex, navTagActiveIndex, navActiveChange } = props;
  return (
    <div className="child-nav-bar">
      <ul className="nav-list">
        {
          navData.map((item, index) => {
            return (
              <li
                className={`li-item ${index === parseInt(navActiveIndex) ? 'li-active-item ' : ''}`}
                key={index + item}
                onMouseOver={() => { navMouseOver && navMouseOver(index) }}
                onMouseLeave={() => { navMouseOut && navMouseOut(index) }}
              >
                <Link className="item-link" to={item.link} replace onClick={() => { navActiveChange(index) }}>{item.title}</Link>
                <span className="auxiliary"></span>
                {
                  // 存在子项 && 是否显示 && 是否选中项
                  item.children && item.isShow && index !== parseInt(navActiveIndex) &&
                  <ul className="list-details">
                    {
                      item.children.map((i, ind) => {
                        // 去除第一项全部
                        if (ind === 0) {
                          return false;
                        }
                        return (
                          <li
                            className={`details-item ${ind === navTagActiveIndex ? 'details-active-item' : ''}`}
                            key={ind + i}
                          >
                            <span className="details-link" onClick={event => { navDetailsJump(event, i, index, ind); }}>{i.title}</span>
                            <span className="auxiliary"></span>
                          </li>
                        )
                      })
                    }
                  </ul>
                }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default childNavBarUi;