var express = require('express');
var router = express.Router();
var config = require('../config.js');
var verifify = require('../verifify.js');
var utils = require('../utils.js');

// 中间件设置
const app = express();
// 必需参数
app.use(verifify.requiredParams);
// 非空
app.use(verifify.nonEmptyField);

/* 登录 */
router.post(
  '/login',
  verifify.requiredParams(['username', 'password']),
  verifify.nonEmptyField(['username', 'password']),
  function (req, res, next) {
    const imageBaseUrl = `${config.imageBaseUrl}/avatar`;
    const i = Math.floor(Math.random() * 10 + 1) - 1;

    res.json({
      code: 200,
      data: {
        token: utils.randomString(32),
        username: req.body.username,
        avatarUrl: `${imageBaseUrl}/avatar${i}.jpg`
      },
      msg: '登录成功'
    });
  }
);

/* 注册 */
router.post(
  '/register',
  verifify.requiredParams(['username', 'phone', 'password']),
  verifify.nonEmptyField(['username', 'phone', 'password']),
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
