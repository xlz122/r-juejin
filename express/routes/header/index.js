var express = require('express');
var router = express.Router();

/* 头部导航 */
router.get('/nav-list', function(req, res, next) {
  res.json({
    data: [
      { title: '首页', link: '/' },
      { title: '沸点', link: '/boiling-point' },
      { title: '话题', link: '/topic' },
      { title: '小册', link: '/brochure' },
      { title: '活动', link: '/activity' }
    ]
  });
});

/* 登录 */
router.post('/login', function(req, res, next) {
  res.cookie("username", req.body.username, { maxAge: 900000, httpOnly: true });
  res.json({
    data: req.body
  });
});

/* 注册 */
router.post('/register', function(req, res, next) {
  res.json({
    data: req.body
  });
});

module.exports = router;