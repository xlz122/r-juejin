var express = require('express');
var router = express.Router();
// 验证
var verifify = require('../verifify.js');

/* 话题列表 */
router.get('/topic-list', function (req, res, next) {
  // 权限校验
  verifify.auth(req, res, next);

  let imageBaseUrl = 'http://localhost:9001/images/topic';
  let itemArr = [
    {
      imgUrl: `${imageBaseUrl}/list-image1.jpg`,
      title: '上班摸鱼',
      tooltip: '来分享下你上班看到的好东西吧~',
      followCount: 3417,
      boilingPointCount: 8006
    },
    {
      imgUrl: `${imageBaseUrl}/list-image2.jpg`,
      title: '一图胜千言',
      tooltip: '能用图，就不要用字。',
      followCount: 5934,
      boilingPointCount: 4868
    },
    {
      imgUrl: `${imageBaseUrl}/list-image3.jpg`,
      title: '今天学到了',
      tooltip: '日拱一卒，功不唐捐。一起来分享下你今天听到的有意思的事情，或者学习的冷知识。',
      followCount: 6165,
      boilingPointCount: 4120
    },
    {
      imgUrl: `${imageBaseUrl}/list-image4.jpg`,
      title: '树洞一下',
      tooltip: '来分享下你的开心和不开心，此话题下内容统一由官方机器人账号「树洞robot」代发，本话题只讲故事~',
      followCount: 1481,
      boilingPointCount: 3365
    },
    {
      imgUrl: `${imageBaseUrl}/list-image5.jpg`,
      title: '今日最佳',
      tooltip: 'The best or nothing.',
      followCount: 2949,
      boilingPointCount: 1899
    },
    {
      imgUrl: `${imageBaseUrl}/list-image6.jpg`,
      title: '提问回答',
      tooltip: '#提问回答#，所提的问题要同技术、程序员有关，参考方向：技术前景、最优解、编程问题…，涉及编程开发的问题其描述需尽可能详细。一块通过#提问回答#茁壮成长吧~',
      followCount: 2110,
      boilingPointCount: 2185
    },
    {
      imgUrl: `${imageBaseUrl}/list-image7.jpg`,
      title: '掘金相亲',
      tooltip: '千里姻缘掘金牵，有情人终成眷属。必须的信息：- 个人信息：性别，坐标，工作；- 对另一半的期待：其他信息选填：年龄，身高体重，爱好，联系方式，照片【注意：话题下未按照格式或无关沸点会被移除话题】',
      followCount: 5898,
      boilingPointCount: 1123
    },
    {
      imgUrl: `${imageBaseUrl}/list-image8.jpg`,
      title: '优秀开源推荐',
      tooltip: '来推荐你觉得优秀的开源项目（项目介绍+项目地址），不限于开源框架、开发工具~',
      followCount: 4202,
      boilingPointCount: 1553
    },
    {
      imgUrl: `${imageBaseUrl}/list-image9.jpg`,
      title: '内推招聘',
      tooltip: 'job 三部曲「内推招聘」&「求职中」&「报 offer」之一，与大厂面对面，零距离。发布格式：办公坐标 + JD + 公司环境配图（话题下非相关性沸点会做折叠处理，比如只发一句话加链接，另外，请不要重复发布或多岗位单独发布）',
      followCount: 9091,
      boilingPointCount: 2371
    },
    {
      imgUrl: `${imageBaseUrl}/list-image10.jpg`,
      title: '应用安利',
      tooltip: '分享好玩、高颜值、实用的 APP、插件、扩展、小程序、H5…记得附上他们的介绍和下载地址哟',
      followCount: 3803,
      boilingPointCount: 1192
    }
  ];
  
  // 生成40组数据
  let data = [];
  for (i = 0; i < 4; i++) {
    // 混淆数组
    itemArr = itemArr.sort(() => Math.random() - 0.5);
    data = data.concat(itemArr);
  }

  // 模拟延迟返回数据
  setTimeout(() => {
    res.json({
      code: 200,
      data,
      msg: '消息'
    });
  }, 500);
});

module.exports = router;
