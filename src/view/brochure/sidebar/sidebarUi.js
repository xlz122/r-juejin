import React from 'react';
import sidebarQrCodeImage from '@images/brochure/brochure-sidebar-qr-code.png';
import sidebarGoldImage from '@images/brochure/brochure-sidebar-gold.png';
import sidebarXituImage from '@images/brochure/brochure-sidebar-xitu.png';
import sidebarCouponImage from '@images/brochure/brochure-sidebar-coupon.svg';
import './index.less';

function SidebarUi() {
  return (
    <div className="sticky-section">
      <div className="slogan">
        <div className="title">掘金小册是什么？</div>
        <div className="desc">一个小篇幅、高浓度、成体系、有收益的技术学习平台</div>
      </div>
      <div className="wechat-qr">
        <div className="title">关注公众号 领取优惠码</div>
        <img className="qr-img" src={sidebarQrCodeImage} alt="qr-img" />
      </div>
      <ul className="help">
        <li className="help-item">
          <img className="help-img" src={sidebarGoldImage} alt="help-img" />
          <p className="help-text">成为作者</p>
        </li>
        <li className="help-item">
          <img className="help-img" src={sidebarXituImage} alt="help-img" />
          <p className="help-text">建议反馈</p>
        </li>
      </ul>
      <div className="book-new">
        <img className="img" src={sidebarCouponImage} alt="coupon" />
        <div className="content-text">
          <div className="title">送你 45 元买小册</div>
          <div className="desc">立即领取</div>
        </div>
      </div>
    </div>
  )
}

export default SidebarUi;