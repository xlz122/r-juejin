var express = require('express');
var router = express.Router();

/* 首页子导航 */
router.get('/child-nav-bar', function(req, res, next) {
  res.json({
    data: [
      {
        web_id: 1,
        title: '推荐',
        link: '/home'
      },
      {
        web_id: 2,
        title: '后端',
        link: '/home/backend',
        children: [
          { title: '全部' },
          { title: 'Java' },
          { title: 'Spring Boot' },
          { title: 'Python' },
          { title: 'Go' },
          { title: 'MySQL' },
          { title: 'Kubernetes' },
          { title: 'Redis' },
          { title: 'Spring' },
          { title: '架构' },
          { title: 'Spring Cloud' },
          { title: 'JVM' },
          { title: '面试' },
          { title: '设计模式' },
          { title: 'Linux' },
          { title: '算法' }
        ]
      },
      {
        web_id: 3,
        title: '前端',
        link: '/home/frontend',
        children: [
          { title: '全部' },
          { title: 'JavaScript' },
          { title: 'Vue.js' },
          { title: 'React.js' },
          { title: 'Node.js' },
          { title: 'Webpack' },
          { title: 'CSS' },
          { title: '面试' },
          { title: 'TypeScript' },
          { title: 'Flutter' },
          { title: '微信小程序' },
          { title: '前端框架' },
          { title: 'ECMAScript 6' },
          { title: 'HTTP' },
          { title: '性能优化' },
          { title: 'HTML' }
        ]
      },
      {
        web_id: 4,
        title: 'Android',
        link: '/home/android',
        children: [
          { title: '全部' },
          { title: 'Flutter' },
          { title: 'Kotlin' },
          { title: '源码' },
          { title: 'Java' },
          { title: 'Android Jetpack' },
          { title: 'OpenGL' },
          { title: 'C++' },
          { title: '性能优化' },
          { title: 'gradle' },
          { title: '面试' },
          { title: 'OKHttp' },
          { title: 'FFmpeg' },
          { title: 'Android Studio' },
          { title: 'Retrofit' },
          { title: '测试' }
        ]
      },
      {
        web_id: 5,
        title: 'iOS',
        link: '/home/ios',
        children: [
          { title: '全部' },
          { title: 'Swift' },
          { title: 'Objective-C' },
          { title: 'Flutter' },
          { title: 'OpenGL' },
          { title: 'SwiftUI' },
          { title: '面试' },
          { title: '设计模式' },
          { title: '性能优化' },
          { title: '逆向' },
          { title: '增强现实' },
          { title: '源码' },
          { title: 'RxSwift' },
          { title: 'CocoaPods' },
          { title: 'macOS' },
          { title: '架构' }
        ]
      },
      {
        web_id: 6,
        title: '人工智能',
        link: '/home/ai',
        children: [
          { title: '全部' },
          { title: '深度学习' },
          { title: '机器学习' },
          { title: 'Python' },
          { title: '算法' },
          { title: '数据分析' },
          { title: 'NLP' },
          { title: '数学' },
          { title: 'Flink' },
          { title: '大数据' },
          { title: '神经网络' },
          { title: '计算机视觉' },
          { title: '图像识别' },
          { title: '数据可视化' },
          { title: '线下活动' },
          { title: '笔记' }
        ]
      },
      {
        web_id: 7,
        title: '开发工具',
        link: '/home/freebie',
        children: [
          { title: '全部' },
          { title: 'Linux' },
          { title: 'Git' },
          { title: '开源' },
          { title: 'GitHub' },
          { title: 'Visual Studio Code' },
          { title: 'IntelliJ IDEA' },
          { title: 'Kubernetes' },
          { title: 'Chrome' },
          { title: '编程语言' },
          { title: 'Java' },
          { title: 'VIM' },
          { title: 'Shell' },
          { title: 'Python' },
          { title: '命令行' },
          { title: 'Ubuntu' }
        ]
      },
      {
        web_id: 8,
        title: '代码人生',
        link: '/home/career',
        children: [
          { title: '全部' },
          { title: '程序员' },
          { title: '年终总结' },
          { title: 'Java' },
          { title: 'Python' },
          { title: '算法' },
          { title: '求职' },
          { title: '架构' },
          { title: '数据结构' },
          { title: 'Flutter' },
          { title: 'Unity3D' },
          { title: '编程语言' },
          { title: '设计模式' },
          { title: 'Serverless' },
          { title: '开源' },
          { title: 'Go' }
        ]
      },
      {
        web_id: 9,
        title: '阅读',
        link: '/home/article',
        children: [
          { title: '全部' },
          { title: '程序员' },
          { title: 'Java' },
          { title: 'JavaScript' },
          { title: '线下活动' },
          { title: '算法' },
          { title: '年终总结' },
          { title: '大数据' },
          { title: 'Python' },
          { title: 'Flutter' },
          { title: 'Kubernetes' },
          { title: '数据库' },
          { title: 'Docker' },
          { title: 'MySQL' },
          { title: 'Vue.js' },
          { title: 'Go' }
        ]
      }
    ]
  });
});

/* 首页分类导航 */
router.get('/category-nav-list', function(req, res, next) {
  res.json({
    data: {
      list: [
        { title: '热门' },
        { title: '最新' },
        { title: '热榜' }
      ],
      timeChoice: [
        { time: '3天内' },
        { time: '7天内' },
        { time: '30天内' },
        { time: '全部' }
      ]
    }
  });
});

/* 首页 - 列表条目 */
router.get('/entry-list', function(req, res, next) {
  // 广告列表条目数据
  let adEntryList = [
    {
      username: '掘金酱',
      time: '1天前',
      imgUrl: 'http://localhost:9000/images/home/column-entry-list-ad.jpg',
      title: '面试不用愁，掘友能解忧，一批大厂面试经验新鲜出炉啦~',
      bstract: '有面试需求的小伙伴再也不用发愁找不到攻略啦。这一次面试，掘友帮你忙。'
    }
  ];
  let imageBaseUrl = 'http://localhost:9000/images/home';
  let itemArr = [
    {
      username: 'Keely',
      time: '23小时前',
      name: 'JavaScript',
      imgUrl: '',
      title: '鼠标选中文本划词高亮、再次选中划词取消高亮效果',
      likeCount: 10,
      commentsCount: 3
    },
    {
      username: '敖丙',
      time: '44分钟前',
      name: '面试/Java',
      imgUrl: `${imageBaseUrl}/column-entry-list-image1.jpg`,
      title: '面试官：说一下公平锁和非公平锁的区别？',
      likeCount: 75,
      commentsCount: 7
    },
    {
      username: '晨曦时梦见兮',
      time: '12小时前',
      name: '面试/前端',
      imgUrl: '',
      title: '写给女朋友的中级前端面试秘籍（含详细答案，15k级别）',
      likeCount: 110,
      commentsCount: 27
    },
    {
      username: '神三元',
      time: '3天前',
      name: 'JavaScript/前端',
      imgUrl: `${imageBaseUrl}/column-entry-list-image3.jpg`,
      title: '（建议精读）HTTP灵魂之问，巩固你的 HTTP 知识体系',
      likeCount: 876,
      commentsCount: 36
    },
    {
      username: '冴羽',
      time: '15小时前',
      name: '面试',
      imgUrl: '',
      title: '面试被问项目经验不用慌，按这个步骤回答绝对惊艳',
      likeCount: 76,
      commentsCount: 8
    },
    {
      username: 'jsonchao',
      time: '2天前',
      name: 'Android',
      imgUrl: `${imageBaseUrl}/column-entry-list-image4.jpg`,
      title: '深入探索 Android 内存优化（炼狱级别）',
      likeCount: 199,
      commentsCount: 34
    },
    {
      username: '夜幕降临耶',
      time: '23小时前',
      name: 'iOS',
      imgUrl: '',
      title: 'iOS底层原理：weak的实现原理',
      likeCount: 10,
      commentsCount: 2
    },
    {
      username: '给我点阳光就灿烂',
      time: '1天前',
      name: '人工智能',
      imgUrl: `${imageBaseUrl}/column-entry-list-image2.jpg`,
      title: 'iOS底层原理：weak的实现原理',
      likeCount: 10,
      commentsCount: 2
    },
    {
      username: '沉默王二',
      time: '1天前',
      name: '程序员',
      imgUrl: '',
      title: '你也看不起做外包的程序员？',
      likeCount: 28,
      commentsCount: 4
    },
    {
      username: '_yuanhao',
      time: '10天前',
      name: 'GitHub',
      imgUrl: `${imageBaseUrl}/column-entry-list-image5.jpg`,
      title: '2020 还不会泡 Github 你就落伍了',
      likeCount: 127,
      commentsCount: 52
    },
    {
      username: '胡志武98',
      time: '11分钟前',
      name: '微信小程序',
      imgUrl: '',
      title: '使用发布订阅模式+globalData实现小程序全局实时状态管理',
      likeCount: 12,
      commentsCount: 2
    },
    {
      username: '芦半山',
      time: '2小时前',
      name: 'Android',
      imgUrl: '',
      title: 'Android消息机制的冷门知识点',
      likeCount: 6,
      commentsCount: 2
    },
    {
      username: '树酱',
      time: '21小时前',
      name: '前端',
      imgUrl: '',
      title: '前端Nginx那些事',
      likeCount: 144,
      commentsCount: 5
    },
    {
      username: '秋天不落叶',
      time: '1天前',
      name: 'TypeScript',
      imgUrl: '',
      title: '【开源】一个 React + TS 项目模板',
      likeCount: 79,
      commentsCount: 20
    },
    {
      username: 'felixa',
      time: '33分钟前',
      name: 'iOS',
      imgUrl: '',
      title: 'Runloop分享',
      likeCount: 4,
      commentsCount: 2
    },
    {
      username: 'NanBox',
      time: '20小时前',
      name: 'Android',
      imgUrl: '',
      title: '杀不掉的知乎 - 聊一聊 Android 的多任务',
      likeCount: 53,
      commentsCount: 18
    },
    {
      username: '敖丙',
      time: '1天前',
      name: '面试/程序员',
      imgUrl: '',
      title: '《我们一起进大厂》系列-大厂需求研发/开发流程',
      likeCount: 53,
      commentsCount: 18
    },
    {
      username: '风平浪静如码',
      time: '4小时前',
      name: 'Java',
      imgUrl: '',
      title: '知己知彼，百战不殆：“金三银四”横扫BAT面试之Spring108问！',
      likeCount: 332,
      commentsCount: 20
    },
    {
      username: 'M了个C',
      time: '2小时前',
      name: 'iOS',
      imgUrl: '',
      title: 'iOS探索--类的结构分析(二)',
      likeCount: 205,
      commentsCount: 35
    },
    {
      username: '好学习吧丶',
      time: '2天前',
      name: '前端',
      imgUrl: '',
      title: '面试官：你了解过移动端适配吗？',
      likeCount: 1067,
      commentsCount: 122
    }
  ];
  // 数据处理
  let columnEntryList = [];
  let page = req.query.page; // 页数
  let pageSize = req.query.pageSize; // 条数
  let len = (1000 - pageSize * (page - 1)) < pageSize ? (1000 - pageSize * (page - 1)) : pageSize; // 返回条数
  for (i = 0; i < len; i++) {
    // 随机返回数组一项
    let n = Math.floor(Math.random() * itemArr.length + 1) - 1;
    itemArr[n].id = (page - 1) * pageSize + (i + 1);
    columnEntryList.push(itemArr[n]);
  }
  // 模拟延迟返回数据
  setTimeout(() => {
    res.json({
      data: {
        adEntryList,
        columnEntryList
      }
    });
  }, 500);
});

module.exports = router;