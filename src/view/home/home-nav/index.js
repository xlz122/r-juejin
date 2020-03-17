import React from 'react';
import './index.less';

function HomeNavUi(props) {
  return (
    <div className="home-nav">
      <ul className="home-nav-list">
        {props.getHomeNavDom()}
      </ul>
    </div>
  );
}

export default HomeNavUi;