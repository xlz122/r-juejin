import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';
// logo
import logoBg from '@images/header/logo.svg';
// 搜索icon
import searchIcon from '@images/header/search-icon.svg';
// 写文章
import articleIcon from '@images/header/article-icon.svg';
import ArticleUi from '@view/header/article';

function HeaderUi(props) {
  return (
    <div className="header-container">
      <Link className="logo-bg" to="/">
        <img className="logo-img" src={logoBg} alt="logo" />
        <span className="auxiliary"></span>
      </Link>
      <ul className="nav-list">
        {props.getNavListDom()}
      </ul>
      <div className="nav-search">
        <div className="search-container">
          <input className="search-input" placeholder="搜索掘金" />
          <img className="search-icon" src={searchIcon} onClick={props.searchArticle} alt="search" />
        </div>
      </div>
      <div className="sidebar">
        <div className="article">
          <img className="artile-img" src={articleIcon} alt="article" />
          <span className="text" onClick={props.articleShow}>写文章</span>
          {
            props.articleStatus &&
            <ArticleUi
              panelClick={props.panelClick}
              articleStart={props.articleStart}
            />
          }
        </div>
        <div className="auth">
          <span className="text login-text" onClick={props.loginShow}>登录</span>
          <span className="text" onClick={props.registerShow}>注册</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderUi;