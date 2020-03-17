import React from 'react';
import { Link } from 'react-router-dom';

function RecommendedUi() {
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
              <div className="dropdown-toggle">
                3天内
              </div>
              <ul className="dropdown-menu">
                <li className="dropdown-menu-item">
                  <Link className="item-link" to="">3天内</Link>
                </li>
                <li className="dropdown-menu-item">
                  <Link className="item-link" to="">7天内</Link>
                </li>
                <li className="dropdown-menu-item">
                  <Link className="item-link" to="">30天内</Link>
                </li>
                <li className="dropdown-menu-item">
                  <Link className="item-link" to="">全部</Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <div className="sidebar"></div>
    </div>
  )
}

export default RecommendedUi;