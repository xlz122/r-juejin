import  Axios from '@axios';

/**
 * @desc 获取头部导航nav数据
*/
export const getHeaderNav = () => {
  return Axios.request({
    url:  '/header/nav-list',
    method: 'get'
  })
}

/**
 * @desc 账号登录
 * @params username - 用户名
 * @params password - 密码
*/
export const accountLogin = ({ username, password }) => {
  const data = { username, password };
  return Axios.request({
    url:  '/header/login',
    method: 'post',
    data
  })
}

/**
 * @desc 账号注册
 * @params username - 用户名
 * @params phone - 手机号
 * @params password - 密码
*/
export const accountRegister = ({ username, phone, password }) => {
  const data = { username, phone, password };
  return Axios.request({
    url:  '/header/register',
    method: 'post',
    data
  })
}