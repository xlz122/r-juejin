import React, { Component, Fragment } from 'react';
import './index.less';
import RecommendedUi from './recommendedUi';

class HomeRecommended extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (
      <Fragment>
        <RecommendedUi />
      </Fragment>  
    );
  }
}
 
export default HomeRecommended;