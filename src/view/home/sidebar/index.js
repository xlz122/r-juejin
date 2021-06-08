import React, { Component, Fragment } from 'react';
import { accountRegister } from '@api/user';
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
    this.localRegister = this.localRegister.bind(this);
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
    const {
      registerAccountValue: username,
      registerPhoneValue: phone,
      registerPasswordValue: password
    } = this.state;

    // 本地注册，注册成功进行请求
    this.localRegister({
      username,
      phone,
      password
    })
      .then(() => {
        accountRegister({
          username,
          phone,
          password
        })
          .then(res => {
            if (res.code === 200) {
              React.Message.success(res.msg);
            }
          })
      })
      .catch(err => {
        console.log(err);
        React.Message.error(err);
      });
  }

  // 本地注册
  localRegister({
    username,
    phone,
    password
  }) {
    return new Promise((resolve, reject) => {
      // 数据校验
      let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if (!username) {
        reject('请输入账号！');
        return false;
      } else if (!phone) {
        reject('请输入手机号！');
        return false;
      } else if (phone && !reg.test(phone)) {
        reject('请输入正确的手机号！');
        return false;
      } else if (!password || password.length < 6) {
        reject('请输入密码');
        return false;
      }

      let indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
      if (!indexedDB) {
        throw new Error('当前浏览器不支持 indexed 数据库, 请更换高级浏览器！！！');
      } else {
        createDB('juejinDB', 'user', 1);
        // 进行数据查询
        getAllData('juejinDB', 'user', data => {
          if (data.length === 0) {
            // 第一次注册直接添加
            insertData('juejinDB', 'user', { username, phone, password });
            resolve();
          } else {
            // 后续添加进行对比
            let userResult = data.find(item => username === item.username);
            let phoneResult = data.find(item => phone === item.phone);
            if (userResult) {
              reject('账号已存在！');
            } else if (phoneResult) {
              reject('手机号已被注册，请更换手机号!');
            } else {
              insertData('juejinDB', 'user', { username, phone, password });
              resolve();
            }
          }
        })
      }
    })
  }
}

export default SideBar;
