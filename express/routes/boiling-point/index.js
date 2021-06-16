var express = require('express');
var router = express.Router();
// 验证
var verifify = require('../verifify.js');
// 列表数据
var navList = require('./nav-list.js');
// 列表数据
var pinList = require('./pin-list.js');

// 中间件设置
const app = express();
// 必需参数
app.use(verifify.requiredParams);
// 非空
app.use(verifify.nonEmptyField);

/* 沸点左侧导航 */
router.get('/pin-nav', function (req, res, next) {
  res.json({
    code: 200,
    data: navList.list,
    msg: '成功'
  });
});

/* 沸点列表 */
router.get(
  '/pin-list',
  verifify.requiredParams(['app_id']),
  verifify.nonEmptyField(['app_id']),
  function (req, res, next) {
    // 获取参数
    const app_id = req.query.app_id;

    // 传递的导航id匹配不到
    const navItem = navList.list.find(n => Number(n.app_id) === Number(app_id));
    if (!navItem) {
      setTimeout(() => {
        res.json({
          code: -1,
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
      const n = Math.floor(Math.random() * pinList.list.length + 1) - 1;
      data.push(pinList.list[n]);
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
