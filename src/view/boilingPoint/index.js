import React, { Component } from 'react';

class BoilingPoint extends Component {
  componentDidMount() {
    // 动态计算当前页面高度
    let pageHeight = document.querySelector(".boiling-point");
    if (pageHeight) {
      pageHeight.style.minHeight = (window.innerHeight - pageHeight.offsetTop) + 'px';
    }
  }

  render() { 
    return (
      <div className="boiling-point">
        BoilingPoint
      </div>
    );
  }
}
 
export default BoilingPoint;