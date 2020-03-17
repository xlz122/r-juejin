import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// 引入react-redux连接器
import { connect } from 'react-redux';
import HeaderUi from './headerUi.js';
import Login from '../login';
import { navListAction } from '@store/actionCreators';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navListData: [
        { id: 1, title: '首页', link: '/' },
        { id: 2, title: '沸点', link: '/boiling-point' },
        { id: 3, title: '话题', link: '/topic-of-conversation' },
        { id: 4, title: '小册', link: '/brochure' },
        { id: 5, title: '活动', link: '/activity' },
      ],
      articleStatus: false, // 写文章弹框
      loginType: 'login', // 登录/注册
      loginStatus: false // 登录弹框
    }
    this.getNavListDom = this.getNavListDom.bind(this);
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
  }

  componentWillUnmount() {
    // 组件销毁解绑监听事件
    document.removeEventListener('click', this.setArticleShow);
  }

  render() {
    return (
      <Fragment>
        <HeaderUi
          getNavListDom={this.getNavListDom}
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

  // 获取navListDom
  getNavListDom() {
    const { navListData } =  this.state;
    const { navListActiveIndex, navListChange } =  this.props;
    const navlistDom = navListData.map((item, index) => {
      return (
        <li
          className={`li-item ${index === parseInt(navListActiveIndex) ? 'li-active-item ' : ''}`}
          key={index + item}
          onClick={() => {navListChange(index)}}
        >
          <Link className="item-link" to={item.link}>{item.title}</Link>
          <span className="auxiliary"></span>
        </li>
      );
    })
    return navlistDom;
  }

  // 搜索
  searchArticle() {
    alert('点击了搜索');
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
    alert('点击了写文章');
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

const stateToProps = (state) => {
  return {
    navListActiveIndex: state.navListActiveIndex
  }
}

const dispatchToProps = (dispatch) => {
  return {
    navListChange(index) {
      sessionStorage.setItem('navListActiveIndex', index);
      const action = navListAction(index);
      dispatch(action);
    }
  }
}
 
export default connect(stateToProps, dispatchToProps)(Header);