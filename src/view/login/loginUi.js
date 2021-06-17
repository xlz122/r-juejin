import React, { Fragment } from 'react';
import './index.less';
// 顶部河豚
import panfishImg1 from '@images/login/panfish1.png';
import panfishImg2 from '@images/login/panfish2.png';
import panfishImg3 from '@images/login/panfish3.png';
// 第三方登录
import oauthBg1 from '@images/login/oauth-bg1.svg';
import oauthBg2 from '@images/login/oauth-bg2.svg';
import oauthBg3 from '@images/login/oauth-bg3.svg';

const setPanfishImgType = type => {
  if (type === 1) {
    return panfishImg1;
  } else if (type === 2) {
    return panfishImg2;
  } else if (type === 3) {
    return panfishImg3;
  }
};

function LoginUi(props) {
  return (
    <div className="login">
      <div className="login-container">
        <div className="panfish">
          {props.isLogin && (
            <img
              className="panfish-img"
              src={setPanfishImgType(props.panfishImgType)}
              alt="panfish"
            />
          )}
        </div>
        <div className="close-btn" title="关闭" onClick={props.close}>
          X
        </div>
        <div className="panel">
          {props.isLogin && (
            <>
              <p className="title">登录</p>
              <div className="input-group">
                <input
                  className="input-item"
                  type="text"
                  value={props.accountValue}
                  onChange={props.accountChange}
                  onFocus={props.accountFocus}
                  onBlur={props.accountBlur}
                  placeholder="请输入账号或手机号"
                />
                <input
                  className="input-item"
                  type="password"
                  value={props.passwordValue}
                  onChange={props.passwordChange}
                  onFocus={props.passwordFocus}
                  onBlur={props.passwordBlur}
                  placeholder="请输入密码"
                />
              </div>
              <button className="submit-btn" onClick={props.submit}>
                登录
              </button>
            </>
          )}
          {!props.isLogin && (
            <>
              <p className="title">注册</p>
              <div className="input-group">
                <input
                  className="input-item"
                  type="text"
                  value={props.registerAccountValue}
                  onChange={props.registerAccountChange}
                  placeholder="请输入账号"
                />
                <input
                  className="input-item"
                  type="text"
                  value={props.registerPhoneValue}
                  onChange={props.registerPhoneChange}
                  placeholder="请输入手机号"
                />
                <input
                  className="input-item"
                  type="text"
                  value={props.registerPasswordValue}
                  onChange={props.registerPasswordChange}
                  placeholder="请输入密码，不少于6位"
                />
              </div>
              <button className="submit-btn" onClick={props.register}>
                注册
              </button>
            </>
          )}
        </div>
        <div className="prompt-box">
          {props.isLogin && (
            <>
              <span>没有账号？</span>
              <span
                className="clickable"
                onClick={() => {
                  props.logonHandover('login');
                }}
              >
                注册
              </span>
              <span
                className="clickable forget-password"
                onClick={props.forgetPassword}
              >
                忘记密码
              </span>
            </>
          )}
          {!props.isLogin && (
            <div
              className="clickable register"
              onClick={() => {
                props.logonHandover('register');
              }}
            >
              已有账号登录
            </div>
          )}
        </div>
        <div className="oauth-box">
          <p>第三方账号登录：</p>
          <div className="oauth-img">
            <div className="item">
              <img className="img" src={oauthBg1} alt="oauth" />
            </div>
            <div className="item">
              <img className="img" src={oauthBg2} alt="oauth" />
            </div>
            <div className="item">
              <img className="img" src={oauthBg3} alt="oauth" />
            </div>
          </div>
        </div>
        <div className="agreement-box">
          <span>注册登录即表示同意</span>
          <span className="clickable">用户协议</span>
          <span>、</span>
          <span className="clickable">隐私政策</span>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;
