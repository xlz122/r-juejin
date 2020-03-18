import React from 'react';

function RecommendedUi(props) {
  const { categoryNavActive, categoryNavClick, timeChoiceShow, timeChoiceClick, dropDownTitle } = props;
  const { list, timeChoice } = props.recommendNavList;
  return (
    <div className="home-recommended">
      <div className="content">
        <div className="category-nav">
          <ul className="nav-list">
            {
              list &&
              list.map((item, index) => {
                return (
                  <li
                    className={`li-item ${index === categoryNavActive ? 'li-active-item': '' } ${index === list.length - 1 ? 'li-last-item' : ''}`}
                    key={index + item}
                    onClick={() => { categoryNavClick(index) }}
                  >
                    <span className="item-text">{item.title}</span>
                  </li>
                )
              })
            }
            {
              timeChoiceShow &&
              <div className="time-choice">
                <div className="dropdown-toggle" onClick={props.timeToggle}>
                  {dropDownTitle}
                  <i className={`icon-arrow ${props.dropDownShow ? 'icon-arrow-lower' : ''}`}></i>
                </div>
                {
                  props.dropDownShow &&
                  <ul className="dropdown-menu">
                    {
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
      </div>
      <div className="sidebar"></div>
    </div>
  )
}

export default RecommendedUi;