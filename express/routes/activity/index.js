var express = require('express');
var router = express.Router();
// 验证
var verifify = require('../verifify.js');
var activityList = require('./activity-list.js');

// 中间件设置
const app = express();
// 权限
app.use(verifify.auth);
// 必需参数
app.use(verifify.requiredParams);
// 非空
app.use(verifify.nonEmptyField);

/* 活动导航 */
router.get(
  '/child-nav-bar',
  verifify.auth,
  function (req, res, next) {
    res.json({
      code: 200,
      data: [
        {
          city_id: 26,
          title: '热门活动',
          link: '/activity'
        },
        {
          city_id: 56,
          title: '北京',
          link: '/activity/beijing'
        },
        {
          city_id: 23,
          title: '上海',
          link: '/activity/shanghai'
        },
        {
          city_id: 13,
          title: '广州',
          link: '/activity/guangzhou'
        },
        {
          city_id: 88,
          title: '深圳',
          link: '/activity/shenzhen'
        },
        {
          city_id: 18,
          title: '杭州',
          link: '/activity/hangzhou'
        }
      ],
      msg: '成功'
    });
  }
);

/* 活动列表 */
router.get(
  '/activity-list',
  verifify.auth,
  verifify.requiredParams(['city_id']),
  verifify.nonEmptyField(['city_id']),
  function (req, res, next) {
    // 数据处理
    let data = [];
    let page = req.query.page || 1; // 页数
    let pageSize = req.query.pageSize || 10; // 条数
    let len = (1000 - pageSize * (page - 1)) < pageSize ? (1000 - pageSize * (page - 1)) : pageSize; // 返回条数
    for (i = 0; i < len; i++) {
      // 随机返回数组一项
      let n = Math.floor(Math.random() * activityList.list.length + 1) - 1;
      data.push(activityList.list[n]);
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
