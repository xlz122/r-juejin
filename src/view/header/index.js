import React, { Component, Fragment } from 'react';
import { getHeaderNav } from '@api/header/index.js';
import HeaderUi from './headerUi.js';
import Login from '@view/login';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navListData: [], //nav列表数据
      articleStatus: false, // 写文章弹框
      loginType: 'login', // 登录/注册
      loginStatus: false // 登录弹框
    }
    // 搜索
    this.searchArticle = this.searchArticle.bind(this);
    // 写文章
    this.setArticleShow = this.setArticleShow.bind(this);
    this.articleShow = this.articleShow.bind(this);
    this.articleStart = this.articleStart.bind(this);
    // 登录/注册框展开关闭
    this.loginShow = this.loginShow.bind(this);
    this.registerShow = this.registerShow.bind(this);
    this.loginClose = this.loginClose.bind(this);
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

  render() {
    return (
      <Fragment>
        <HeaderUi
          navListData={this.state.navListData}
          searchArticle={this.searchArticle}
          articleShow={this.articleShow}
          articleStatus={this.state.articleStatus}
          panelClick={this.panelClick}
          articleStart={this.articleStart}
          loginShow={this.loginShow}
          registerShow={this.registerShow}
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

  // 搜索
  searchArticle() {
    React.Message.info('点击了搜索');
  }

  // 监听document点击，关闭写文章弹框
  setArticleShow() {
    this.setState({ articleStatus: false });
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
    React.Message.info('点击了写文章');
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
}
 
export default Header;