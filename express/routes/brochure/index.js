var express = require('express');
var router = express.Router();
// 验证
var verifify = require('../verifify.js');
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
      data: [
        {
          ssid: 32,
          title: '全部',
          link: '/brochure'
        },
        {
          ssid: 97,
          title: '前端',
          link: '/brochure/frontend'
        },
        {
          ssid: 45,
          title: '后端',
          link: '/brochure/backend'
        },
        {
          ssid: 76,
          title: '移动开发',
          link: '/brochure/mobile'
        },
        {
          ssid: 53,
          title: '区块链',
          link: '/brochure/blockchain'
        },
        {
          ssid: 56,
          title: '通用',
          link: '/brochure/general'
        }
      ],
      msg: '成功'
    });
});

/* 小册书籍列表 */
router.get(
  '/books-list',
  verifify.auth,
  verifify.requiredParams(['ssid']),
  verifify.nonEmptyField(['ssid']),
  function (req, res, next) {
    // 数据处理
    let data = [];
    let page = req.query.page || 1; // 页数
    let pageSize = req.query.pageSize || 10; // 条数
    let len = (1000 - pageSize * (page - 1)) < pageSize ? (1000 - pageSize * (page - 1)) : pageSize; // 返回条数
    for (i = 0; i < len; i++) {
      // 随机返回数组一项
      let n = Math.floor(Math.random() * booksList.list.length + 1) - 1;
      data.push(booksList.list[n]);
    }
    
    if (page > 5) {
      data = data.splice(0, 3);
    }

    if (page > 6) {
      data = [];
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
