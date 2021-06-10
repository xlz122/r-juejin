import React from 'react';
import ChildNavBarUi from './childNavBarUi';

function ChildNavBar(props) {
  return (
    <ChildNavBarUi
      navData={props.navData}
      navActiveIndex={props.navActiveIndex}
      navActiveChange={props.navActiveChange}
      navMouseOver={props.navMouseOver}
      navMouseOut={props.navMouseOut}
      navDetailsJump={props.navDetailsJump}
    />
  );
}

export default ChildNavBar;
