import React from 'react';
import ChildNavBarUi from './childNavBarUi';

function ChildNavBar(props) {
  return (
    <ChildNavBarUi
      navData={props.navData}
      navActiveIndex={props.navActiveIndex}
      navActiveChange={props.navActiveChange}
    />
  );
}

export default ChildNavBar;
