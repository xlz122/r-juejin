import React from 'react';
import PinNavUi from './pinNavUi';

function PinNav(props) {
  return (
    <PinNavUi
      navData={props.navData}
      navActiveIndex={props.navActiveIndex}
      navActiveChange={props.navActiveChange}
    />
  );
}

export default PinNav;
