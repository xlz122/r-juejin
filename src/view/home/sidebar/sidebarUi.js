import React from 'react';
import { connect } from 'react-redux';
// 侧边广告
import sidebarBanner1 from '@images/home/home-sidebar-advertisement1.jpg';
import sidebarBanner2 from '@images/home/home-sidebar-advertisement2.jpg';
// 侧边下载二维码
import sidebarQeCode from '@images/home/home-sidebar-qr-code.png';
// 侧边喜欢
import sidebarLinkImg1 from '@images/home/home-sidebar-link-section-img1.png';
import sidebarLinkImg2 from '@images/home/home-sidebar-link-section-img2.png';
import sidebarLinkImg3 from '@images/home/home-sidebar-link-section-img3.png';
import sidebarLinkImg4 from '@images/home/home-sidebar-link-section-img4.png';
import sidebarLinkImg5 from '@images/home/home-sidebar-link-section-img5.png';
// 关注我们
import sidebarFollowImg1 from '@images/home/home-sidebar-follow-img1.png';
import sidebarFollowImg2 from '@images/home/home-sidebar-follow-img2.png';
import sidebarFollowImg3 from '@images/home/home-sidebar-follow-img3.png';
import sidebarFollowImg4 from '@images/home/home-sidebar-follow-img4.png';
import './index.less';

function SidebarUi(props) {
  // 数据
  const { registerAccountValue, registerPhoneValue, registerPasswordValue } = props;
  // 事件
  const {
    registerAccountChange,
    registerPhoneChange,
    registerPasswordChange,
    register
  } = props;

  return (
    <div className="sidebar-container">
      {/* 注册部分 */}
      {!props.userInfo.token && (
        <div className="auth-section">
          <div className="title">掘金 - juejin.im</div>
          <div className="slogan">一个帮助开发者成长的社区</div>
          <div className="input-group">
            <div className="input-box">
              <input
                className="input"
                type="text"
                value={registerAccountValue}
                onChange={registerAccountChange}
                placeholder="用户名"
              />
            </div>
            <div className="input-box">
              <input
                className="input"
                type="text"
                value={registerPhoneValue}
                onChange={registerPhoneChange}
                placeholder="手机号"
              />
            </div>
            <div className="input-box">
              <input
                className="input"
                placeholder="密码（不少于6位）"
                value={registerPasswordValue}
                onChange={registerPasswordChange}
              />
            </div>
            <button className="submit-btn" onClick={register}>
              立即注册
            </button>
          </div>
          <div className="agreement-box">
            <p>注册登录即表示</p>
            <span>同意</span>
            <span className="clickable">用户协议</span>
            <span>、</span>
            <span className="clickable">隐私政策</span>
          </div>
        </div>
      )}
      {/* 广告部分 */}
      <div className="banner-section">
        <div className="banner-link">
          <img className="img" src={sidebarBanner1} alt="banner" />
        </div>
      </div>
      <div className="banner-section">
        <div className="banner-link">
          <img className="img" src={sidebarBanner2} alt="banner" />
        </div>
      </div>
      {/* 标签 */}
      <div className="sidebar-tags">
        <div className="header">
          <span className="title">热门标签</span>
          <span className="right-text">查看全部</span>
        </div>
        <ul className="tags-content">
          <li className="item">架构</li>
          <li className="item">开源</li>
          <li className="item">算法</li>
          <li className="item">GitHub</li>
          <li className="item">面试</li>
          <li className="item">代码规范</li>
          <li className="item">产品</li>
          <li className="item">掘金翻译计划</li>
        </ul>
      </div>
      {/* 下载 */}
      <div className="download">
        <img className="img" src={sidebarQeCode} alt="download" />
        <div className="content-box">
          <div className="headline">下载掘金客户端</div>
          <div className="desc">一个帮助开发者成长的社区</div>
        </div>
      </div>
      {/* 喜欢 */}
      <ul className="link-section">
        <li className="item">
          <img className="img" src={sidebarLinkImg1} alt="link-section" />
          <span className="text">收藏集</span>
        </li>
        <li className="item">
          <img className="img" src={sidebarLinkImg2} alt="link-section" />
          <span className="text">掘金社区漫游指南</span>
        </li>
        <li className="item">
          <img className="img" src={sidebarLinkImg3} alt="link-section" />
          <span className="text">下载掘金浏览器插件</span>
        </li>
        <li className="item">
          <img className="img" src={sidebarLinkImg4} alt="link-section" />
          <span className="text">前往掘金翻译计划</span>
        </li>
        <li className="item">
          <img className="img" src={sidebarLinkImg5} alt="link-section" />
          <span className="text">商务合作</span>
        </li>
      </ul>
      {/* 关注我们 */}
      <div className="follow-section">
        <div>关注我们</div>
        <ul className="account-list">
          <li className="item">
            <img className="img" src={sidebarFollowImg1} alt="follow" />
          </li>
          <li className="item">
            <img className="img" src={sidebarFollowImg2} alt="follow" />
          </li>
          <li className="item">
            <img className="img" src={sidebarFollowImg3} alt="follow" />
          </li>
          <li className="item">
            <img className="img" src={sidebarFollowImg4} alt="follow" />
          </li>
        </ul>
      </div>
      {/* 更多 */}
      <div className="more-section">
        <ul className="more-list">
          <li className="item">关于</li>
          <li className="item">招聘</li>
          <li className="item">商务合作</li>
          <li className="item last-item">友情链接</li>
        </ul>
        <ul className="more-list">
          <li className="item">用户协议</li>
          <li className="item last-item">隐私政策</li>
        </ul>
        <ul className="more-list">
          <li className="item last-item">©2020 掘金</li>
        </ul>
        <ul className="more-list">
          <li className="item last-item">Powered by QingCloud</li>
        </ul>
        <ul className="more-list">
          <li className="item last-item">津ICP备15003202号-2</li>
        </ul>
        <ul className="more-list">
          <li className="item last-item">京公网安备11010802026719号-2</li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  };
};

export default connect(mapStateToProps)(SidebarUi);
