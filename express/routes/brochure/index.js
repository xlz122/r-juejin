var express = require('express');
var router = express.Router();

/* 小册导航 */
router.get('/child-nav-bar', function(req, res, next) {
  res.json({
    data: [
      {
        title: '全部',
        link: '/brochure'
      },
      {
        title: '前端',
        link: '/brochure/frontend'
      },
      {
        title: '后端',
        link: '/brochure/backend'
      },
      {
        title: '移动开发',
        link: '/brochure/mobile'
      },
      {
        title: '区块链',
        link: '/brochure/blockchain'
      },
      {
        title: '通用',
        link: '/brochure/general'
      }
    ]
  });
});

module.exports = router;