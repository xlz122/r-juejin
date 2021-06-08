var express = require('express');
var router = express.Router();

/* 头部导航 */
router.get('/nav-list', function (req, res, next) {
  res.json({
    code: 200,
    data: [
      { id: 16, title: '首页', link: '/' },
      { id: 21, title: '沸点', link: '/boiling-point' },
      { id: 25, title: '话题', link: '/topic' },
      { id: 59, title: '小册', link: '/brochure' },
      { id: 80, title: '活动', link: '/activity' }
    ],
    msg: '成功'
  });
});

module.exports = router;
