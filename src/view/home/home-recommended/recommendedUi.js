import React from 'react';
import { Link } from 'react-router-dom';

function RecommendedUi(props) {
  return (
    <div className="home-recommended">
      <div className="content">
        <div className="category-nav">
          <ul className="nav-list">
            <li className="li-item li-active-item">
              <Link className="item-link" to="">热门</Link>
            </li>
            <li className="li-item">
              <Link className="item-link" to="">最新</Link>
            </li>
            <li className="li-item li-last-item">
              <Link className="item-link" to="">热榜</Link>
            </li>
            <div className="time-choice">
              <div className="dropdown-toggle" onClick={props.timeToggle}>
                3天内
                <i className={`icon-arrow ${props.dropDownShow ? 'icon-arrow-lower' : ''}`}></i>
              </div>
              {
                props.dropDownShow &&
                <ul className="dropdown-menu">
                  <li className="dropdown-menu-item">
                    <span className="item-text">3天内</span>
                  </li>
                  <li className="dropdown-menu-item">
                    <span className="item-text">7天内</span>
                  </li>
                  <li className="dropdown-menu-item">
                    <span className="item-text">30天内</span>
                  </li>
                  <li className="dropdown-menu-item">
                    <span className="item-text">全部</span>
                  </li>
                </ul>
              }
            </div>
          </ul>
        </div>
      </div>
      <div className="sidebar"></div>
    </div>
  )
}

export default RecommendedUi;