var express = require('express');
var router = express.Router();
var verifify = require('../verifify.js');

// 中间件设置
const app = express();
// 必需参数
app.use(verifify.requiredParams);
// 非空
app.use(verifify.nonEmptyField);
// 手机号
app.use(verifify.phoneRegex);

// 生成随机token
function randomString(len) {
  len = len || 32;
  var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var maxPos = $chars.length;
  var pwd = '';
  for (i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * (maxPos + 1)));
  }
  return pwd;
}

/* 登录 */
router.post(
  '/login',
  verifify.requiredParams(['username', 'password']),
  verifify.nonEmptyField(['username', 'password']),
  function (req, res, next) {
    let imageBaseUrl = 'http://localhost:9001/images/avatar';
    let i = Math.floor(Math.random() * 3 + 1) - 1;

    res.json({
      code: 200,
      data: {
        token: randomString(32),
        username: req.body.username,
        avatarUrl: `${imageBaseUrl}/avatar${i}.jpg`
      },
      msg: '登录成功'
    });
  });

/* 注册 */
router.post(
  '/register',
  verifify.requiredParams(['username', 'phone', 'password']),
  verifify.nonEmptyField(['username', 'phone', 'password']),
  verifify.phoneRegex,
  function (req, res, next) {
    res.json({
      code: 200,
      msg: '注册成功'
    });
  });

/* 退出登录 */
router.post('/logout', function (req, res, next) {
  res.json({
    code: 200,
    msg: '成功'
  });
});

module.exports = router;
