import React from 'react';
import './index.less';

function CategoryNav(props) {
  // json数据
  const { list, timeChoice } = props.navListData;
  // 属性
  const { navActiveIndex, timeChoiceShow, timeChoiceTitle, timeChoiceMenuShow } = props;
  // 事件
  const { navListChange, timeChoiceToggle, timeChoiceClick } = props;
  return (
    <div className="category-nav">
      <ul className="nav-list">
        {
          list &&
          list.map((item, index) => {
            return (
              <li
                className={`li-item ${index === navActiveIndex ? 'li-active-item': '' } ${index === list.length - 1 ? 'li-last-item' : ''}`}
                key={index + item}
                onClick={() => { navListChange(index) }}
              >
                <span className="item-text">{item.title}</span>
              </li>
            )
          })
        }
        {
          timeChoiceShow &&
          <div className="time-choice">
            <div className="dropdown-toggle" onClick={timeChoiceToggle}>
              {timeChoiceTitle}
              <i className={`icon-arrow ${timeChoiceMenuShow ? 'icon-arrow-lower' : ''}`}></i>
            </div>
            {
              timeChoiceMenuShow &&
              <ul className="dropdown-menu">
                {
                  timeChoice &&
                  timeChoice.map((item, index) => {
                    return (
                      <li
                        className="dropdown-menu-item"
                        key={index + item}
                        onClick={() => { timeChoiceClick(item, index) }}
                      >
                        <span className="item-text">{item.time}</span>
                      </li>
                    )
                  })
                }
              </ul>
            }
          </div>
        }
      </ul>
    </div>
  )
}
 
export default CategoryNav;