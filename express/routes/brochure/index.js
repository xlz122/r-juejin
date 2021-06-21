var express = require('express');
var router = express.Router();
// 验证
var verifify = require('../verifify.js');
// 导航数据
var navList = require('./nav-list.js');
// 列表数据
var booksList = require('./books-list.js');

// 中间件设置
const app = express();
// 权限
app.use(verifify.auth);
// 必需参数
app.use(verifify.requiredParams);
// 非空
app.use(verifify.nonEmptyField);

/* 小册导航 */
router.get(
  '/child-nav-bar',
  verifify.auth,
  function (req, res, next) {
    res.json({
      code: 200,
      data: navList.list,
      msg: '成功'
    });
  }
);

/* 小册书籍列表 */
router.get(
  '/books-list',
  verifify.auth,
  verifify.requiredParams(['ssid']),
  verifify.nonEmptyField(['ssid']),
  function (req, res, next) {
    // 获取参数
    const ssid = req.query.ssid;

    // 传递的导航id匹配不到
    const navItem = navList.list.find(n => Number(n.ssid) === Number(ssid));
    if (!navItem) {
      setTimeout(() => {
        res.json({
          code: -3,
          data: [],
          msg: 'please pass correct ID'
        });
      }, 500);
      return false;
    }

    // 数据处理
    const data = [];
    // 页数
    const page = req.query.page || 1;
    // 条数
    const pageSize = req.query.pageSize || 5;
    // 返回条数
    const len = (1000 - pageSize * (page - 1)) < pageSize
      ? (1000 - pageSize * (page - 1))
      : pageSize;

    for (i = 0; i < len; i++) {
      // 随机返回数组一项
      const n = Math.floor(Math.random() * booksList.list.length + 1) - 1;
      data.push(booksList.list[n]);
    }

    // 模拟延迟返回数据
    setTimeout(() => {
      res.json({
        code: 200,
        data,
        msg: '成功'
      });
    }, 500);
  }
);

module.exports = router;
