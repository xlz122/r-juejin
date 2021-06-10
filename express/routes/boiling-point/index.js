var express = require('express');
var router = express.Router();
// 验证
var verifify = require('../verifify.js');
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
    data: [
      {
        app_id: 5,
        title: '推荐',
        link: '/boiling-point'
      },
      {
        app_id: 31,
        title: '热门',
        link: '/boiling-point/hot'
      },
      {
        app_id: 34,
        title: '关注',
        link: '/boiling-point/following'
      },
      {
        app_id: 36,
        title: '开源推荐',
        link: '/boiling-point/open-source'
      },
      {
        app_id: 45,
        title: '内部招聘',
        link: '/boiling-point/recruit'
      },
      {
        app_id: 50,
        title: '掘金相亲',
        link: '/boiling-point/blind-date'
      },
      {
        app_id: 62,
        title: '上班摸鱼',
        link: '/boiling-point/idle'
      },
      {
        app_id: 68,
        title: '应用安利',
        link: '/boiling-point/amway'
      },
      {
        app_id: 79,
        title: 'New资讯',
        link: '/boiling-point/tool'
      }
    ],
    msg: '成功'
  });
});

/* 沸点列表 */
router.get(
  '/pin-list',
  verifify.requiredParams(['app_id']),
  verifify.nonEmptyField(['app_id']),
  function (req, res, next) {
    // 数据处理
    let data = [];
    let page = req.query.page || 1; // 页数
    let pageSize = req.query.pageSize || 10; // 条数
    let len = (1000 - pageSize * (page - 1)) < pageSize ? (1000 - pageSize * (page - 1)) : pageSize; // 返回条数
    for (i = 0; i < len; i++) {
      // 随机返回数组一项
      let n = Math.floor(Math.random() * pinList.list.length + 1) - 1;
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
  });

module.exports = router;
