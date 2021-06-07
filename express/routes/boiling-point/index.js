var express = require('express');
var router = express.Router();

/* 沸点左侧导航 */
router.get('/pin-nav', function (req, res, next) {
  res.json({
    data: [
      {
        app_id: 1,
        title: '推荐',
        link: '/boiling-point'
      },
      {
        app_id: 2,
        title: '热门',
        link: '/boiling-point/hot'
      },
      {
        app_id: 3,
        title: '关注',
        link: '/boiling-point/following'
      },
      {
        app_id: 4,
        title: '开源推荐',
        link: '/boiling-point/open-source'
      },
      {
        app_id: 5,
        title: '内部招聘',
        link: '/boiling-point/recruit'
      },
      {
        app_id: 6,
        title: '掘金相亲',
        link: '/boiling-point/blind-date'
      },
      {
        app_id: 7,
        title: '上班摸鱼',
        link: '/boiling-point/idle'
      },
      {
        app_id: 8,
        title: '应用安利',
        link: '/boiling-point/amway'
      },
      {
        app_id: 9,
        title: 'New资讯',
        link: '/boiling-point/tool'
      }
    ]
  });
});

/* 小册书籍列表 */
router.get('/pin-list', function (req, res, next) {
  // 书籍数据数组
  let imageBaseUrl = 'http://localhost:9001/images/boiling-point';
  let itemArr = [
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image1.jpg`,
      username: 'web小学生',
      desc: 'web前端开发工程师 @ 金文科技',
      time: '6小时前',
      content: '周六了，出去踏踏青',
      contentImg: `${imageBaseUrl}/boiling-point-content-image1.jpg`,
      labelList: [
        { title: '上班摸鱼' }
      ],
      fabulousCount: 6,
      commentCount: 9
    },
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image2.jpg`,
      username: '重庆崽儿brand',
      desc: '公众号 @ 九零后重庆崽儿 @ 前端打字员',
      time: '7小时前',
      content: '早早早，起床准备摸鱼了',
      contentImg: '',
      labelList: [
        { title: '上班摸鱼' }
      ],
      fabulousCount: 2,
      commentCount: ''
    },
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image3.jpg`,
      username: 'VijayAdam',
      desc: '程序员 @ 福禄网络',
      time: '7小时前',
      content: '下雪了',
      contentImg: '',
      labelList: [],
      fabulousCount: 2,
      commentCount: 2
    },
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image4.jpg`,
      username: 'yoodu',
      desc: '交互设计  |  独立开发',
      time: '8小时前',
      content: '别人失眠是睡不着，我失眠是早醒，每天45点就醒，不知闹钟是何物。看了1个多小时的书，反而更精神了',
      contentImg: `${imageBaseUrl}/boiling-point-content-image2.jpg`,
      labelList: [],
      fabulousCount: 4,
      commentCount: 2
    },
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image5.jpg`,
      username: '树洞robot',
      desc: '自动匿名机器人 @ #树洞一下#',
      time: '14小时前',
      content: '下班了 ，我太难了，这加班还减薪',
      contentImg: '',
      labelList: [
        { title: '树洞一下' }
      ],
      fabulousCount: 4,
      commentCount: 11
    },
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image6.jpg`,
      username: '小智菌',
      desc: '喜欢写代码的摄影师 @ xx科技',
      time: '14小时前',
      content: '诸位 办公室里有人抽烟一般怎么解决？我公司以前还去楼道里抽，办公室还好，未到没那么大，但现在物业管，不让楼道里抽，于是很多人就跟公司办公室抽（不乏一些高管），提醒过很多次，依然我行我素，怎么办鸭？我自己不抽，而且闻到烟味还特难受。我现在真的希望物业允许楼道里抽烟。。。',
      contentImg: '',
      labelList: [
        { title: '上班摸鱼' }
      ],
      fabulousCount: 2,
      commentCount: 35
    },
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image7.jpg`,
      username: '敲代码的蔡徐圆',
      desc: '祖安前端工程师 @ 祖安',
      time: '14小时前',
      content: '公司前端妹子离职了，我接手项目两天实在改不动了，推翻重新写。',
      contentImg: `${imageBaseUrl}/boiling-point-content-image3.jpg`,
      labelList: [],
      fabulousCount: 5,
      commentCount: 16
    },
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image8.jpg`,
      username: 'ALLmama',
      desc: '',
      time: '14小时前',
      content: '很敬佩的学长大厂实习没有转正,在我眼里他很强的，可惜没有留下来，现在也没有工作。心情灰了一点,想收拾收拾去考研了',
      contentImg: '',
      labelList: [],
      fabulousCount: 1,
      commentCount: 8
    },
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image9.jpg`,
      username: '懒成铁',
      desc: 'Web前端开发工程师 @ 网龙',
      time: '14小时前',
      content: '今日份的快乐',
      contentImg: `${imageBaseUrl}/boiling-point-content-image4.jpg`,
      labelList: [
        { title: '今天学到了' }
      ],
      fabulousCount: 2,
      commentCount: 5
    },
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image10.jpg`,
      username: '嘟小乾',
      desc: 'web_cv',
      time: '15小时前',
      content: '那个注释比代码还多的项目搞到git上了',
      contentImg: `${imageBaseUrl}/boiling-point-content-image5.jpg`,
      labelList: [
        { title: '今天学到了' }
      ],
      fabulousCount: 19,
      commentCount: 4
    },
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image11.jpg`,
      username: 'z00keeper',
      desc: '',
      time: '16小时前',
      content: '武汉互联网公司，在家帮办公一个半月了，非要现在回武汉，园区还是管制状态。没有复工证明，回去要居家隔离14天，还是要远程办公，到底要我们回去干啥子！！！',
      contentImg: `${imageBaseUrl}/boiling-point-content-image5.jpg`,
      labelList: [],
      fabulousCount: 1,
      commentCount: 6
    },
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image12.jpg`,
      username: '不一样的科技宅',
      desc: 'JAVA搬砖 @ 口袋零钱',
      time: '16小时前',
      content: '本想记录下到10000阅读量的时刻，可惜超了',
      contentImg: `${imageBaseUrl}/boiling-point-content-image6.jpg`,
      labelList: [
        { title: '上班摸鱼' }
      ],
      fabulousCount: 6,
      commentCount: 6
    },
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image13.jpg`,
      username: 'wubaiqing',
      desc: '研发经理 @ 禧云信息',
      time: '16小时前',
      content: '【每日时报】2020.03.27, [文章] 这篇文章讲解了 Webpack5 的新特性，模块联邦，主要解决了微前端公共依赖抽取的问题，弄了一个新概念叫中心应用',
      contentImg: `${imageBaseUrl}/boiling-point-content-image7.jpg`,
      labelList: [],
      fabulousCount: 3,
      commentCount: ''
    },
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image14.jpg`,
      username: '小泡芙66',
      desc: '打杂 @ 。。',
      time: '17小时前',
      content: '我真的真的好羡慕那些名校毕业的人',
      contentImg: `${imageBaseUrl}/boiling-point-content-image8.jpg`,
      labelList: [],
      fabulousCount: 3,
      commentCount: 17
    },
    {
      userImg: `${imageBaseUrl}/boiling-point-user-image15.jpg`,
      username: '树洞robot',
      desc: '自动匿名机器人 @ #树洞一下#',
      time: '17小时前',
      content: '借着树洞缓解一下压力吧。19年二本本科毕业，校招进了小外包，累死累活，干了半年受不了就离职了，截止现在失业4个月，月底准备要离家去武汉找工作了，心里突然开始害怕，哎，从小到大经常害怕，一直缺乏安全感，未来会很难吧！技术一般，学历垫底，加油吧，一切随缘，至少有一身力气，总不至于饿死。',
      contentImg: '',
      labelList: [
        { title: '树洞一下' }
      ],
      fabulousCount: 3,
      commentCount: 24
    }
  ];
  // 数据处理
  let data = [];
  let page = req.query.page; // 页数
  let pageSize = req.query.pageSize; // 条数
  let len = (1000 - pageSize * (page - 1)) < pageSize ? (1000 - pageSize * (page - 1)) : pageSize; // 返回条数
  for (i = 0; i < len; i++) {
    // 随机返回数组一项
    let n = Math.floor(Math.random() * itemArr.length + 1) - 1;
    data.push(itemArr[n]);
  }
  // 模拟延迟返回数据
  setTimeout(() => {
    res.json({
      data
    });
  }, 500);
});

module.exports = router;
