import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { headerNavAction } from '@store/actionCreators';
// logo
import logoBg from '@images/header/logo.svg';
// 搜索icon
import searchIcon from '@images/header/search-icon.svg';
import searchActiveIcon from '@images/header/search-active-icon.svg';
// 写文章
import articleIcon from '@images/header/article-icon.svg';
import ArticleUi from '@view/header/article';
import './index.less';


function HeaderUi(props) {
  // 父组件传递
  const { navListData, searchArticle, articleShow, articleStatus, panelClick, articleStart, loginShow, registerShow, userDropdownShow } = props;
  const { searchIsFocus, searchInputFocus, searchInputBlur, userDropdown, logout } = props;
  // redux传递
  const { headerNavActiveIndex, navListChange } = props;
  return (
    <div className="header-container">
      <Link className="logo-bg" to="/">
        <img className="logo-img" src={logoBg} alt="logo" />
        <span className="auxiliary"></span>
      </Link>
      <ul className="nav-list">
        {
          navListData.map((item, index) => {
            return (
              <li
                className={`li-item ${index === parseInt(headerNavActiveIndex) ? 'li-active-item ' : ''}`}
                key={index + item}
                onClick={() => { navListChange(index) }}
              >
                <Link className="item-link" to={item.link} replace>{item.title}</Link>
                <span className="auxiliary"></span>
              </li>
            );
          })
        }
      </ul>
      <div className="nav-search">
        <div className={`search-container ${searchIsFocus ? 'search-active-container' : ''}`}>
          <input
            className="search-input"
            onFocus={searchInputFocus}
            onBlur={searchInputBlur}
            placeholder="搜索掘金"
          />
          <img className="search-icon" src={searchIsFocus ? searchActiveIcon : searchIcon} onClick={searchArticle} alt="search" />
        </div>
      </div>
      <div className="sidebar">
        <div className="article">
          <img className="artile-img" src={articleIcon} alt="article" />
          <span className="text" onClick={articleShow}>写文章</span>
          {
            articleStatus &&
            <ArticleUi
              panelClick={panelClick}
              articleStart={articleStart}
            />
          }
        </div>
        {
          !React.store.userInfo.token &&
          <div className="auth">
            <span className="text login-text" onClick={loginShow}>登录</span>
            <span className="text" onClick={registerShow}>注册</span>
            <p>{React.store.userInfo.token}</p>
          </div>
        }
        {
          React.store.userInfo.token &&
          <div className="avatar" onClick={userDropdown}>
            <img className="img-avatar" src="https://user-gold-cdn.xitu.io/2020/5/29/1725f85d251ec3f1?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" alt="" />
            {
              userDropdownShow &&
              <div className="user-dropdown-list" onClick={panelClick}>
                <div className="nav-menu-item-group">
                  <div className="item-group">
                    <span className="group-text">写文章</span>
                  </div>
                  <div className="item-group">
                    <span className="group-text">草稿</span>
                  </div>
                </div>
                <div className="nav-menu-item-group">
                  <div className="item-group">
                    <span className="group-text">我的主页</span>
                  </div>
                  <div className="item-group">
                    <span className="group-text">我赞过的</span>
                  </div>
                  <div className="item-group">
                    <span className="group-text">我的小册</span>
                  </div>
                  <div className="item-group">
                    <span className="group-text">我的收藏集</span>
                  </div>
                  <div className="item-group">
                    <span className="group-text">标签管理</span>
                  </div>
                </div>
                <div className="nav-menu-item-group">
                  <div className="item-group">
                    <span className="group-text">字学</span>
                  </div>
                </div>
                <div className="nav-menu-item-group">
                  <div className="item-group">
                    <span className="group-text">设置</span>
                  </div>
                  <div className="item-group">
                    <span className="group-text">关于</span>
                  </div>
                </div>
                <div className="nav-menu-item-group">
                  <div className="item-group" onClick={logout}>
                    <span className="group-text">登出</span>
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    headerNavActiveIndex: state.headerNavActiveIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // 设置头部导航下标
    navListChange(index) {
      sessionStorage.setItem('headerNavActiveIndex', index);
      const action = headerNavAction(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUi);
