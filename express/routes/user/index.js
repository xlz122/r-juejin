var express = require('express');
var router = express.Router();

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
  // res.writeHead(401, { "Content-Type": "text/plain" });
  // res.end("Welcome to the homepage!\n")
  res.json({
    code: 200,
    msg: '注册成功'
  });
});

module.exports = router;
