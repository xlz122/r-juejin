import React, { Component, Fragment } from 'react';
import LoginUi from './loginUi.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInit: true,
      isLogin: true, // 是否登录
      panfishImgType: 1, // 顶部河豚显示状态
      accountValue: '', // 登录账号value
      passwordValue: '', // 登录密码value
      registerAccountValue: '', // 注册账号value
      registerPasswordValue: '' // 注册密码value
    }

    // 登录/注册切换
    this.logonHandover = this.logonHandover.bind(this);
    // 登录部分
    this.accountChange = this.accountChange.bind(this);
    this.accountFocus = this.accountFocus.bind(this);
    this.accountBlur = this.accountBlur.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.passwordFocus = this.passwordFocus.bind(this);
    this.passwordBlur = this.passwordBlur.bind(this);
    this.submit = this.submit.bind(this);
    // 注册部分
    this.registerAccountChange = this.registerAccountChange.bind(this);
    this.registerPasswordChange = this.registerPasswordChange.bind(this);
    this.register = this.register.bind(this);
  }

  // 可以监听到父组件props变化
  // 参数1 父组件props, 参数2 当前组件的state
  // 必须返回对象，或者返回一个null
  static getDerivedStateFromProps(props, curState) {
    // 解决父组件和子组件切换冲突问题
    if (props.loginType === 'login' && curState.isInit) {
      return {
        isLogin: true
      }
    } else if (props.loginType === 'register' && curState.isInit) {
      return {
        isLogin: false
      }
    } else if (props.loginType === 'register' && curState.isLogin) {
      return {
        isLogin: true
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <Fragment>
        <LoginUi
          isLogin={this.state.isLogin}
          panfishImgType={this.state.panfishImgType}
          close={this.props.close}
          logonHandover={this.logonHandover}
          accountValue={this.state.accountValue}
          accountChange={this.accountChange}
          accountFocus={this.accountFocus}
          accountBlur={this.accountBlur}
          passwordValue={this.state.passwordValue}
          passwordChange={this.passwordChange}
          passwordFocus={this.passwordFocus}
          passwordBlur={this.passwordBlur}
          submit={this.submit}
          registerAccountValue={this.state.registerAccountValue}
          registerAccountChange={this.registerAccountChange}
          registerPasswordValue={this.registerPasswordValue}
          registerPasswordChange={this.registerPasswordChange}
          register={this.register}
        />
      </Fragment>
    );
  }
  
  // 登录/注册切换
  logonHandover(type) {
    // 用于区分父组件点击还是子组件切换
    if (this.state.isInit) {
      this.setState({ isInit: false });
    }
    if (type === 'login') {
      this.setState({ isLogin: false });
    } else if(type === 'register') {
      this.setState({ isLogin: true });
    }
  }

  // 账号value
  accountChange(e) {
    this.setState({ accountValue: e.target.value });
  }

  // 账号获取焦点
  accountFocus() {
    this.setState({ panfishImgType: 2 });
  }

  // 账号失去焦点
  accountBlur() {
    this.setState({ panfishImgType: 1 });
  }

  // 密码value
  passwordChange(e) {
    this.setState({ passwordValue: e.target.value });
  }

  // 密码获取焦点
  passwordFocus() {
    this.setState({ panfishImgType: 3 });
  }

  // 密码失去焦点
  passwordBlur() {
    this.setState({ panfishImgType: 1 });
  }

  // 登录
  submit() {
    if (!this.state.accountValue) {
      this.setState({ panfishImgType: 2 });
      alert('请输入账号!');
    } else if (!this.state.accountValue) {
      this.setState({ panfishImgType: 2 });
      alert('请输入密码!');
    } else {
      if (this.state.accountValue === 'root' && this.state.passwordValue === 123456) {
        alert('密码正确');
      } else {
        alert('密码错误');
      }
    }
  }

  // 注册账号
  registerAccountChange(e) {
    this.setState({ registerAccountValue: e.target.value });
  }

  // 注册密码
  registerPasswordChange(e) {
    this.setState({ registerPasswordValue: e.target.value });
  }
  
  // 注册
  register() {
    alert('点击了注册');
  }
}
 
export default Login;