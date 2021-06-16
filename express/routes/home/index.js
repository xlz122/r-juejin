var express = require('express');
var router = express.Router();
// 验证
var verifify = require('../verifify.js');
// 导航数据
var navList = require('./nav-list.js');
// 时间范围数据
var categoryList = require('./category-list.js');
// 列表数据
var entryList = require('./entry-list.js');

// 中间件设置
const app = express();
// 必需参数
app.use(verifify.requiredParams);
// 非空
app.use(verifify.nonEmptyField);

/* 首页子导航 */
router.get('/child-nav-bar', function (req, res, next) {
  res.json({
    code: 200,
    data: navList.list,
    msg: '成功'
  });
});

/* 首页分类导航 */
router.get('/category-nav-list', function (req, res, next) {
  res.json({
    code: 200,
    data: {
      list: categoryList.list,
      timeChoice: categoryList.timeChoice
    },
    msg: '成功'
  });
});

/* 首页 - 列表条目 */
router.get(
  '/entry-list',
  verifify.requiredParams(['web_id', 'web_c_id', 'entryType', 'entryTime']),
  verifify.nonEmptyField(['web_id', 'web_c_id', 'entryType']),
  function (req, res, next) {
    // 获取参数
    const web_id = req.query.web_id;
    const web_c_id = req.query.web_c_id;
    const entryType = req.query.entryType;

    // 传递的二级导航id匹配不到
    const navItem = navList.list.find(n => Number(n.web_id) === Number(web_id));
    if (!navItem) {
      setTimeout(() => {
        res.json({
          code: -1,
          data: [],
          msg: 'please pass correct ID, The parameter is web_id'
        });
      }, 500);
      return false;
    }

    // 三级导航存在，传递的三级导航id匹配不到
    if (navItem.children && web_c_id !== 'all') {
      const navDetailItem = navItem.children.find(n => Number(n.web_c_id) === Number(web_c_id));
      if (!navDetailItem) {
        setTimeout(() => {
          res.json({
            code: -1,
            data: [],
            msg: 'please pass correct ID, The parameter is web_c_id'
          });
        }, 500);
        return false;
      }
    }

    // 传递的时间范围id匹配不到
    const categoryItem = categoryList.list.find(c => Number(c.classifyId) === Number(entryType));
    if (!categoryItem) {
      setTimeout(() => {
        res.json({
          code: -1,
          data: [],
          msg: 'please pass correct ID, The parameter is entryType'
        });
      }, 500);
      return false;
    }

    // 数据处理
    const columnEntryList = [];
    // 页数
    const page = req.query.page || 1;
    // 条数
    const pageSize = req.query.pageSize || 10;
    // 返回条数
    const len = (1000 - pageSize * (page - 1)) < pageSize
      ? (1000 - pageSize * (page - 1))
      : pageSize;
    
    for (i = 0; i < len; i++) {
      // 随机返回数组一项
      const n = Math.floor(Math.random() * entryList.list.length + 1) - 1;
      columnEntryList.push(entryList.list[n]);
    }

    // 模拟延迟返回数据
    setTimeout(() => {
      // 推荐有广告列表
      if (Number(req.query.web_id) === 91) {
        res.json({
          code: 200,
          data: {
            adEntryList: entryList.adEntryList,
            columnEntryList
          },
          msg: '成功'
        });
      } else {
        res.json({
          code: 200,
          data: {
            columnEntryList
          },
          msg: '成功'
        });
      }
    }, 500);
  }
);

module.exports = router;
