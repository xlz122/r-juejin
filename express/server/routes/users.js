var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.json(Mock.mock({
    "status": 200,
    "data|1-9": [{
        "name|5-8": /[a-zA-Z]/,
        "id|+1": 1,
        "value|0-500": 20
    }]
  }));
});

module.exports = router;
