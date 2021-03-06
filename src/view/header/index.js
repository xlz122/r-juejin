import React, { Component, Fragment } from 'react';
import { accountLogout } from '@api/user/index.js';
import { getHeaderNav } from '@api/header/index.js';
import HeaderUi from './headerUi.js';
import Login from '@view/login';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navListData: [], //nav列表数据
      searchIsFocus: false, // 搜索框时候聚焦
      articleStatus: false, // 写文章弹框
      loginType: 'login', // 登录/注册
      loginStatus: false, // 登录弹框
      userDropdownShow: false // 用户设置
    }
    // 搜索
    this.searchInputFocus = this.searchInputFocus.bind(this);
    this.searchInputBlur = this.searchInputBlur.bind(this);
    this.searchArticle = this.searchArticle.bind(this);
    // 写文章
    this.setArticleShow = this.setArticleShow.bind(this);
    this.articleShow = this.articleShow.bind(this);
    this.articleStart = this.articleStart.bind(this);
    // 登录/注册框展开关闭
    this.loginShow = this.loginShow.bind(this);
    this.registerShow = this.registerShow.bind(this);
    this.loginClose = this.loginClose.bind(this);
    // 用户设置
    this.userDropdown = this.userDropdown.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    // 绑定监听事件
    document.addEventListener('click', this.setArticleShow);
    // 获取nav列表数据
    getHeaderNav()
      .then(res => {
        this.setState({ navListData: res.data });
      })
  }

  componentWillUnmount() {
    // 组件销毁解绑监听事件
    document.removeEventListener('click', this.setArticleShow);
  }

  // 搜索框聚焦
  searchInputFocus() {
    this.setState({ searchIsFocus: true });
  }

  // 搜索框失去焦点
  searchInputBlur() {
    this.setState({ searchIsFocus: false });
  }

  // 搜索
  searchArticle() {
    React.Message.info('搜索');
  }

  // 监听document点击，关闭写文章弹框
  // 关闭用户设置
  setArticleShow() {
    this.setState({ articleStatus: false });
    this.setState({ userDropdownShow: false });
  }

  // 写文章弹框
  articleShow(e) {
    e.nativeEvent.stopImmediatePropagation();
    if (this.state.articleStatus) {
      this.setState({ articleStatus: false });
    } else {
      this.setState({ articleStatus: true });
    }
  }

  // 点击写文章弹框内部
  panelClick(e) {
    e.nativeEvent.stopImmediatePropagation();
  }

  // 写文章点击
  articleStart(e) {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation(); //阻止事件冒泡
    React.Message.info('写文章');
  }

  // 登录框弹出
  loginShow() {
    this.setState({ loginType: 'login', loginStatus: true });
  }

  // 注册框弹出
  registerShow() {
    this.setState({ loginType: 'register', loginStatus: true });
  }

  // 登录/注册框关闭
  loginClose() {
    this.setState({ loginStatus: false });
  }

  // 用户设置
  userDropdown(e) {
    e.nativeEvent.stopImmediatePropagation();

    if (this.state.userDropdownShow) {
      this.setState({ userDropdownShow: false });
    } else {
      this.setState({ userDropdownShow: true });
    }
  }

  // 退出
  logout(e) {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation(); //阻止事件冒泡

    accountLogout()
      .then(res => {
        if (res.code === 200) {
          React.store.setUserInfo({});
          localStorage.setItem('userInfo', '');
          React.Message.success('退出成功');
        }
      })
      .catch(err => {
        React.Message.error(err);
      });
  }

  render() {
    return (
      <Fragment>
        <HeaderUi
          navListData={this.state.navListData}
          searchIsFocus={this.state.searchIsFocus}
          searchInputFocus={this.searchInputFocus}
          searchInputBlur={this.searchInputBlur}
          searchArticle={this.searchArticle}
          articleShow={this.articleShow}
          articleStatus={this.state.articleStatus}
          panelClick={this.panelClick}
          articleStart={this.articleStart}
          loginShow={this.loginShow}
          registerShow={this.registerShow}
          userDropdown={this.userDropdown}
          userDropdownShow={this.state.userDropdownShow}
          logout={this.logout}
        />
        {
          this.state.loginStatus &&
          <Login
            loginType={this.state.loginType}
            close={this.loginClose}
          />
        }
      </Fragment>
    );
  }
}

export default Header;
