var express = require('express');
var router = express.Router();
// 验证
var verifify = require('../verifify.js');
var cityList = require('./city-list.js');
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
      data: cityList.list,
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
    // 获取参数
    const city_id = req.query.city_id;
    // 所有城市
    const cityLists = [...cityList.list.banner_citys, ...cityList.list.other_citys];

    const city = cityLists.find(c => Number(c.city_id) === Number(city_id));
    // 传递的城市id匹配不到
    if (!city) {
      setTimeout(() => {
        res.json({
          code: -1,
          data: [],
          msg: 'please pass correct ID'
        });
      }, 500);
      return false;
    }

    // 查找对应城市数据
    const activityData = activityList.list.find(a => Number(a.city_id) === Number(city_id));
    // 所在城市没有数据
    if (!activityData) {
      setTimeout(() => {
        res.json({
          code: 200,
          data: [],
          msg: '成功'
        });
      }, 500);
      return false;
    }

    // 数据处理
    let data = [];
    // 页数
    let page = req.query.page || 1;
    // 条数
    let pageSize = req.query.pageSize || 8;
    // 返回条数
    let len = (activityData.list.length - pageSize * (page - 1)) < pageSize
      ? (activityData.list.length - pageSize * (page - 1))
      : pageSize;

    for (let i = 0; i < len; i++) {
      data.push(activityData.list[(page - 1) * pageSize + (i + 1) - 1]);
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
