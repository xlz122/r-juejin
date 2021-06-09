var express = require('express');
var router = express.Router();
var verifify = require('../verifify.js');

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
router.post('/login', function (req, res, next) {
  // 必需参数验证
  verifify.requiredParams(['username', 'password'], req, res);

  // 非空校验
  verifify.nonEmptyField(['username', 'password'], req, res);

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
router.post('/register', function (req, res, next) {
  // 必需参数验证
  verifify.requiredParams(['username', 'phone', 'password'], req, res);

  // 非空校验
  verifify.nonEmptyField(['username', 'phone', 'password'], req, res);

  // 手机号格式校验
  verifify.phoneRegex(req.body.phone, res);

  res.json({
    code: 200,
    msg: '注册成功'
  });
});

module.exports = router;
