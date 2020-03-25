import React, { Component, Fragment } from 'react';
import { accountRegister } from '@api/header';
import { createDB, insertData, getAllData } from '@indexDB';
import SideBarUi from './sidebarUi';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerAccountValue: '', // 注册账号value
      registerPhoneValue: '', // 注册手机号value
      registerPasswordValue: '' // 注册密码value
    }
    // 注册部分
    this.registerAccountChange = this.registerAccountChange.bind(this);
    this.registerPhoneChange = this.registerPhoneChange.bind(this);
    this.registerPasswordChange = this.registerPasswordChange.bind(this);
    this.register = this.register.bind(this);
  }

  render() {
    return (
      <Fragment>
        <SideBarUi
          registerAccountValue={this.state.registerAccountValue}
          registerAccountChange={this.registerAccountChange}
          registerPhoneValue={this.state.registerPhoneValue}
          registerPhoneChange={this.registerPhoneChange}
          registerPasswordValue={this.registerPasswordValue}
          registerPasswordChange={this.registerPasswordChange}
          register={this.register}
        />
      </Fragment>
    );
  }

  // 注册账号
  registerAccountChange(e) {
    this.setState({ registerAccountValue: e.target.value });
  }

  // 注册手机号
  registerPhoneChange(e) {
    this.setState({ registerPhoneValue: e.target.value });
  }

  // 注册密码
  registerPasswordChange(e) {
    this.setState({ registerPasswordValue: e.target.value });
  }
  
  // 注册
  register() {
    let { registerAccountValue: username, registerPhoneValue: phone, registerPasswordValue: password } = this.state;
    // 数据校验
    let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    if (!username) {
      React.Message.info('请输入账号');
      return false;
    } else if (!phone) {
      React.Message.info('请输入手机号');
      return false;
    } else if (phone && !reg.test(phone)) {
      React.Message.error('请输入正确的手机号');
      return false;
    } else if (!password || password.length < 6) {
      React.Message.info('请输入密码');
      return false;
    }

    accountRegister({
      username,
      phone,
      password
    })
      .then(res => {
        let indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
        if( !indexedDB ){
          throw Error('当前浏览器不支持 indexed 数据库, 请更换高级浏览器！！！');
        } else {
          createDB('juejinDB', 'user' , 1);
          // 进行数据查询
          getAllData('juejinDB', 'user', (data) => {
            if (data.length === 0) {
              // 第一次注册直接添加
              insertData('juejinDB', 'user', { username, phone, password });
              alert('注册成功!');
            } else {
              // 后续添加进行对比
              let userResult = data.find(item => res.data.username === item.username);
              let phoneResult = data.find(item => res.data.phone === item.phone);
              console.log(userResult )
              console.log(phoneResult )
              if (userResult) {
                React.Message.error('账号已存在');
              } else if (phoneResult) {
                React.Message.error('手机号已被注册，请更换手机号');
              } else {
                insertData('juejinDB', 'user', { username, phone, password });
                alert('注册成功!');
              }
            }
          })
        }
      })
  }
}
 
export default SideBar;