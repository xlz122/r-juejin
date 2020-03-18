import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

function HomeNavUi(props) {
  const { homeNavData, homeNavActionIndex, homeNavChange } =  props;
  return (
    <div className="home-nav">
      <ul className="home-nav-list">
        {
          homeNavData.map((item, index) => {
            return (
              <li
                className={`li-item ${index === parseInt(homeNavActionIndex) ? 'li-active-item ' : ''}`}
                key={index + item}
                onClick={() => { homeNavChange(index) }}
                onMouseOver={() => { props.homeNavMouseOver(index) }}
                onMouseLeave={() => { props.homeNavMouseOut(index) }}
              >
                <Link className="item-link" to={item.link}>{item.title}</Link>
                <span className="auxiliary"></span>
                {
                  // 存在子项 && 是否显示 && 是否选中项
                  item.children && item.isShow && index !== parseInt(homeNavActionIndex) &&
                  <ul className="list-details">
                    {
                      item.children.map((i, ind) => {
                        // 去除第一项全部
                        if (ind === 0) {
                          return false;
                        }
                        return (
                          <li
                            className="details-item"
                            key={ind + i}
                          >
                            <Link className="details-link" to="" onClick={props.homeNavDetailsJump}>{i.title}</Link>
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

export default HomeNavUi;