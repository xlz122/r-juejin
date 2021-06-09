var express = require('express');
var router = express.Router();
// 验证文件
var verifify = require('../verifify.js');
// 列表数据文件
var booksList = require('./books-list.js');

/* 小册导航 */
router.get('/child-nav-bar', function (req, res, next) {
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
router.get('/books-list', function (req, res, next) {
  // 必需参数校验
  verifify.requiredParams(['ssid'], req, res);

  // 非空校验
  verifify.nonEmptyField(['ssid'], req, res);

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
