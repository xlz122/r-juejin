import React, { useState } from 'react';
import { accountRegister } from '@api/user';
import { createDB, insertData, getAllData } from '@indexDB';
import SideBarUi from './sidebarUi';

function SideBar(props) {
  // 注册账号，手机号，密码
  const [formData, setFormData] = useState({
    account: '',
    phone: '',
    password: ''
  });

  // 注册账号
  const registerAccountChange = e => {
    setFormData({ ...formData, account: e.target.value });
  }

  // 注册手机号
  const registerPhoneChange = e => {
    setFormData({ ...formData, phone: e.target.value });
  }

  // 注册密码
  const registerPasswordChange = e => {
    setFormData({ ...formData, password: e.target.value });
  }

  // 注册
  const register = () => {
    const {
      account: username,
      phone,
      password
    } = formData;

    // 本地注册，注册成功进行请求
    localRegister({
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
              // 重置数据
              setFormData({
                account: '',
                phone: '',
                password: ''
              });
            }
          })
      })
      .catch(err => {
        React.Message.error(err);
      });
  }

  // 本地注册
  const localRegister = ({
    username,
    phone,
    password
  }) => {
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

  return (
    <SideBarUi
      registerAccountValue={formData.account}
      registerAccountChange={registerAccountChange}
      registerPhoneValue={formData.phone}
      registerPhoneChange={registerPhoneChange}
      registerPasswordValue={formData.password}
      registerPasswordChange={registerPasswordChange}
      register={register}
    />
  );
}

export default SideBar;
