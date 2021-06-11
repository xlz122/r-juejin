import React from 'react';
import { formatDate, DateWeek } from '@/utils/utils';
import listDateIcon from '@images/activity/date.png';
import listAddressIcon from '@images/activity/address.png';
import './index.less';

function ChildNavBar(props) {
  // 数据
  const { listData } = props;
  // 事件
  const { activityClick } = props;

  return (
    <div className="activity-list-container">
      <ul className="list-warp">
        {
          listData.map((item, index) => {
            return (
              <li
                className="list-warp-item"
                key={index}
                onClick={() => {
                  activityClick(item.detailUrl);
                }}
              >
                <img className="item-img" src={item.imgUrl} alt="" />
                <div className="item-content">
                  <div className="content-title">{item.title}</div>
                  <div className="content-date">
                    <img className="content-date-icon" src={listDateIcon} alt="img" />
                    <span className="content-date-text">
                      {
                        formatDate({ date: item.date, formatStr: 'MM-dd' })
                      }
                    </span>
                    <span className="content-week-text">
                      { DateWeek(item.date)}
                    </span>
                  </div>
                  <div className="content-address">
                    <img className="content-address-icon" src={listAddressIcon} alt="img" />
                    <span className="content-address-text">{item.address}</span>
                  </div>
                  {
                    !item.endOrNot &&
                    <div className="btn-join">报名参加</div>
                  }
                  {
                    item.endOrNot &&
                    <div className="btn-join btn-join-details">活动详情</div>
                  }
                </div>
              </li>
            );
          })
        }
        {props.children}
      </ul>
    </div>
  );
}

export default ChildNavBar;
