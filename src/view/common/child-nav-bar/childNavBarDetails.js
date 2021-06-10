import React from 'react';
import { Link } from 'react-router-dom';
import './childNavBarDetails.less';

function ChildNavBarDetails(props) {
  // 数据
  const { navData, navActiveIndex, navTagActiveIndex } = props;
  // 事件
  const { navTagActiveChange } = props;

  return (
    <div className="child-nav-bar-details">
      <ul className="nav-list-details">
        {
          navData.map((item, index) => {
            if (navActiveIndex !== index) {
              return false;
            }
            return item?.children?.map((i, ind) => {
              return (
                <li
                  className={`details-item ${navTagActiveIndex === ind ? 'details-active-item': ''}`}
                  key={i.title}
                  onClick={() => {navTagActiveChange(i, ind);}}
                >
                  <Link className="details-item-link" to={item.link}>{i.title}</Link>
                  <span className="details-auxiliary"></span>
                </li>
              );
            })
          })
        }
      </ul>
    </div>
  );
}

export default ChildNavBarDetails;
