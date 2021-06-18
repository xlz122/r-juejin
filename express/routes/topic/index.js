var express = require('express');
var router = express.Router();
// 验证
var verifify = require('../verifify.js');
// 列表数据
var topicList = require('./topic-list.js');

// 中间件设置
const app = express();
// 权限
app.use(verifify.auth);

/* 话题列表 */
router.get('/topic-list', verifify.auth, function (req, res, next) {
  // 生成40组数据
  let data = [];
  for (i = 0; i < 4; i++) {
    // 混淆数组
    const item = topicList.list.sort(() => Math.random() - 0.5);
    data = data.concat(item);
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
