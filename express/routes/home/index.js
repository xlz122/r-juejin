var express = require('express');
var router = express.Router();
// var verifify = require('../verifify.js');

/* 首页子导航 */
router.get('/child-nav-bar', function (req, res, next) {
  res.json({
    code: 200,
    data: [
      {
        web_id: 91,
        title: '推荐',
        link: '/home'
      },
      {
        web_id: 25,
        title: '后端',
        link: '/home/backend',
        children: [
          { web_c_id: 185, title: '全部' },
          { web_c_id: 593, title: 'Java' },
          { web_c_id: 871, title: 'Spring Boot' },
          { web_c_id: 668, title: 'Python' },
          { web_c_id: 233, title: 'Go' },
          { web_c_id: 383, title: 'MySQL' },
          { web_c_id: 37, title: 'Kubernetes' },
          { web_c_id: 743, title: 'Redis' },
          { web_c_id: 594, title: 'Spring' },
          { web_c_id: 623, title: '架构' },
          { web_c_id: 116, title: 'Spring Cloud' },
          { web_c_id: 707, title: 'JVM' },
          { web_c_id: 154, title: '面试' },
          { web_c_id: 424, title: '设计模式' },
          { web_c_id: 741, title: 'Linux' },
          { web_c_id: 457, title: '算法' }
        ]
      },
      {
        web_id: 43,
        title: '前端',
        link: '/home/frontend',
        children: [
          { web_c_id: 471, title: '全部' },
          { web_c_id: 220, title: 'JavaScript' },
          { web_c_id: 181, title: 'Vue.js' },
          { web_c_id: 661, title: 'React.js' },
          { web_c_id: 823, title: 'Node.js' },
          { web_c_id: 909, title: 'Webpack' },
          { web_c_id: 334, title: 'CSS' },
          { web_c_id: 889, title: '面试' },
          { web_c_id: 315, title: 'TypeScript' },
          { web_c_id: 12, title: 'Flutter' },
          { web_c_id: 403, title: '微信小程序' },
          { web_c_id: 721, title: '前端框架' },
          { web_c_id: 117, title: 'ECMAScript 6' },
          { web_c_id: 48, title: 'HTTP' },
          { web_c_id: 720, title: '性能优化' },
          { web_c_id: 289, title: 'HTML' }
        ]
      },
      {
        web_id: 24,
        title: 'Android',
        link: '/home/android',
        children: [
          { web_c_id: 395, title: '全部' },
          { web_c_id: 772, title: 'Flutter' },
          { web_c_id: 689, title: 'Kotlin' },
          { web_c_id: 645, title: '源码' },
          { web_c_id: 793, title: 'Java' },
          { web_c_id: 103, title: 'Android Jetpack' },
          { web_c_id: 986, title: 'OpenGL' },
          { web_c_id: 63, title: 'C++' },
          { web_c_id: 888, title: '性能优化' },
          { web_c_id: 632, title: 'gradle' },
          { web_c_id: 686, title: '面试' },
          { web_c_id: 691, title: 'OKHttp' },
          { web_c_id: 13, title: 'FFmpeg' },
          { web_c_id: 935, title: 'Android Studio' },
          { web_c_id: 370, title: 'Retrofit' },
          { web_c_id: 23, title: '测试' }
        ]
      },
      {
        web_id: 85,
        title: 'iOS',
        link: '/home/ios',
        children: [
          { web_c_id: 974, title: '全部' },
          { web_c_id: 484, title: 'Swift' },
          { web_c_id: 832, title: 'Objective-C' },
          { web_c_id: 644, title: 'Flutter' },
          { web_c_id: 564, title: 'OpenGL' },
          { web_c_id: 607, title: 'SwiftUI' },
          { web_c_id: 830, title: '面试' },
          { web_c_id: 535, title: '设计模式' },
          { web_c_id: 996, title: '性能优化' },
          { web_c_id: 775, title: '逆向' },
          { web_c_id: 474, title: '增强现实' },
          { web_c_id: 144, title: '源码' },
          { web_c_id: 401, title: 'RxSwift' },
          { web_c_id: 819, title: 'CocoaPods' },
          { web_c_id: 452, title: 'macOS' },
          { web_c_id: 725, title: '架构' }
        ]
      },
      {
        web_id: 16,
        title: '人工智能',
        link: '/home/ai',
        children: [
          { web_c_id: 293, title: '全部' },
          { web_c_id: 685, title: '深度学习' },
          { web_c_id: 843, title: '机器学习' },
          { web_c_id: 514, title: 'Python' },
          { web_c_id: 696, title: '算法' },
          { web_c_id: 262, title: '数据分析' },
          { web_c_id: 162, title: 'NLP' },
          { web_c_id: 784, title: '数学' },
          { web_c_id: 99, title: 'Flink' },
          { web_c_id: 912, title: '大数据' },
          { web_c_id: 852, title: '神经网络' },
          { web_c_id: 372, title: '计算机视觉' },
          { web_c_id: 17, title: '图像识别' },
          { web_c_id: 191, title: '数据可视化' },
          { web_c_id: 500, title: '线下活动' },
          { web_c_id: 79, title: '笔记' }
        ]
      },
      {
        web_id: 70,
        title: '开发工具',
        link: '/home/freebie',
        children: [
          { web_c_id: 965, title: '全部' },
          { web_c_id: 319, title: 'Linux' },
          { web_c_id: 621, title: 'Git' },
          { web_c_id: 36, title: '开源' },
          { web_c_id: 767, title: 'GitHub' },
          { web_c_id: 212, title: 'Visual Studio Code' },
          { web_c_id: 588, title: 'IntelliJ IDEA' },
          { web_c_id: 267, title: 'Kubernetes' },
          { web_c_id: 802, title: 'Chrome' },
          { web_c_id: 991, title: '编程语言' },
          { web_c_id: 178, title: 'Java' },
          { web_c_id: 534, title: 'VIM' },
          { web_c_id: 86, title: 'Shell' },
          { web_c_id: 28, title: 'Python' },
          { web_c_id: 755, title: '命令行' },
          { web_c_id: 681, title: 'Ubuntu' }
        ]
      },
      {
        web_id: 48,
        title: '代码人生',
        link: '/home/career',
        children: [
          { web_c_id: 408, title: '全部' },
          { web_c_id: 397, title: '程序员' },
          { web_c_id: 760, title: '年终总结' },
          { web_c_id: 394, title: 'Java' },
          { web_c_id: 45, title: 'Python' },
          { web_c_id: 94, title: '算法' },
          { web_c_id: 128, title: '求职' },
          { web_c_id: 317, title: '架构' },
          { web_c_id: 939, title: '数据结构' },
          { web_c_id: 672, title: 'Flutter' },
          { web_c_id: 170, title: 'Unity3D' },
          { web_c_id: 222, title: '编程语言' },
          { web_c_id: 806, title: '设计模式' },
          { web_c_id: 310, title: 'Serverless' },
          { web_c_id: 207, title: '开源' },
          { web_c_id: 506, title: 'Go' }
        ]
      },
      {
        web_id: 73,
        title: '阅读',
        link: '/home/article',
        children: [
          { web_c_id: 603, title: '全部' },
          { web_c_id: 502, title: '程序员' },
          { web_c_id: 250, title: 'Java' },
          { web_c_id: 105, title: 'JavaScript' },
          { web_c_id: 111, title: '线下活动' },
          { web_c_id: 951, title: '算法' },
          { web_c_id: 121, title: '年终总结' },
          { web_c_id: 801, title: '大数据' },
          { web_c_id: 456, title: 'Python' },
          { web_c_id: 987, title: 'Flutter' },
          { web_c_id: 345, title: 'Kubernetes' },
          { web_c_id: 675, title: '数据库' },
          { web_c_id: 324, title: 'Docker' },
          { web_c_id: 142, title: 'MySQL' },
          { web_c_id: 156, title: 'Vue.js' },
          { web_c_id: 967, title: 'Go' }
        ]
      }
    ],
    msg: '成功'
  });
});

/* 首页分类导航 */
router.get('/category-nav-list', function (req, res, next) {
  res.json({
    code: 200,
    data: {
      list: [
        { classifyId: 73, title: '热门' },
        { classifyId: 8, title: '最新' },
        { classifyId: 92, title: '热榜' }
      ],
      timeChoice: [
        { timeId: 63, time: '3天内' },
        { timeId: 64, time: '7天内' },
        { timeId: 77, time: '30天内' },
        { timeId: 85, time: '全部' }
      ]
    },
    msg: '成功'
  });
});

/* 首页 - 列表条目 */
router.get('/entry-list', function (req, res, next) {
  // 广告列表条目数据
  let adEntryList = [
    {
      username: '掘金酱',
      time: '1天前',
      imgUrl: 'http://localhost:9001/images/home/column-entry-list-ad.jpg',
      title: '面试不用愁，掘友能解忧，一批大厂面试经验新鲜出炉啦~',
      bstract: '有面试需求的小伙伴再也不用发愁找不到攻略啦。这一次面试，掘友帮你忙。'
    }
  ];
  let imageBaseUrl = 'http://localhost:9001/images/home';
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
