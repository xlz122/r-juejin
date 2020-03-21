var express = require('express');
var router = express.Router();

/* 头部导航 */
router.get('/nav-list', function(req, res, next) {
  res.json({
    data: [
      { title: '首页', link: '/' },
      { title: '沸点', link: '/boiling-point' },
      { title: '话题', link: '/topic-of-conversation' },
      { title: '小册', link: '/brochure' },
      { title: '活动', link: '/activity' }
    ]
  });
});

module.exports = router;

// var express = require('express');
// var router = express.Router();
// var Mock = require('mockjs');

// /* GET users listing. */
// router.post('/', function(req, res, next) {
//   res.json(Mock.mock({
//     "status": 200,
//     "data|1-9": [{
//         "name|5-8": /[a-zA-Z]/,
//         "id|+1": 1,
//         "value|0-500": 20
//     }]
//   }));
// });

// module.exports = router;