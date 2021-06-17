import axios from '@axios';

/**
 * @description 账号登录
 * @param { String } username - 用户名
 * @param { String } password - 密码
 */
export const accountLogin = ({ username, password }) => {
  const data = { username, password };
  return axios.request({
    url: '/user/login',
    method: 'post',
    data
  });
};

/**
 * @description 账号注册
 * @param { String } username - 用户名
 * @param { String } phone - 手机号
 * @param { String } password - 密码
 */
export const accountRegister = ({ username, phone, password }) => {
  const data = { username, phone, password };
  return axios.request({
    url: '/user/register',
    method: 'post',
    data
  });
};

/**
 * @description 退出登录
 */
export const accountLogout = () => {
  return axios.request({
    url: '/user/logout',
    method: 'post'
  });
};
