import axios from '@axios';

/**
 * @desc 账号登录
 * @params username - 用户名
 * @params password - 密码
 */
export const accountLogin = ({ username, password }) => {
  const data = { username, password };
  return axios.request({
    url: '/user/login',
    method: 'post',
    data
  });
}

/**
 * @desc 账号注册
 * @params username - 用户名
 * @params phone - 手机号
 * @params password - 密码
 */
export const accountRegister = ({ username, phone, password }) => {
  const data = { username, phone, password };
  return axios.request({
    url: '/user/register',
    method: 'post',
    data
  });
}