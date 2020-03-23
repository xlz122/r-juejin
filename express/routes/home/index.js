var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

/* 首页导航 */
router.get('/nav-list', function(req, res, next) {
  res.json({
    data: [
      {
        id: 11,
        title: '推荐',
        link: '/home'
      },
      {
        id: 12,
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
        id: 13,
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
        id: 14,
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
        id: 15,
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
        id: 16,
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
        id: 17,
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
        id: 18,
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
        id: 19,
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

/* 首页导航 */
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
  // 广告列表条目
  let adEntryList = [
    {
      username: '掘金酱',
      time: '1天前',
      imageUrl: 'http://localhost:9000/images/home/column-entry-list-ad.jpg',
      title: '面试不用愁，掘友能解忧，一批大厂面试经验新鲜出炉啦~',
      bstract: '有面试需求的小伙伴再也不用发愁找不到攻略啦。这一次面试，掘友帮你忙。'
    }
  ];
  // 专栏数据数组
  let usernameArr = ['冴羽', '承志', '元宵大师', '高德技术', 'Taoye', '美团技术团队', '拇指笔记', '老齐Py', '帅地', '晓飞的算法工程笔记"'];
  let timeArr = ['1分钟前', '8分钟前', '30分钟前', '56分钟前', '8小时前', '1天前', '2天前', '3天前'];
  let nameArr = ['前端', '后端', '面试/阿里巴巴', 'Java', 'Android', '阅读', 'iOS', '机器学习', '数据结构', 'Python'];
  let imageUrlArr = [
    'http://localhost:9000/images/home/column-entry-list-image1.jpg',
    'http://localhost:9000/images/home/column-entry-list-image2.jpg',
    'http://localhost:9000/images/home/column-entry-list-image3.jpg',
    'http://localhost:9000/images/home/column-entry-list-image4.jpg',
    'http://localhost:9000/images/home/column-entry-list-image5.jpg',
    '',
    '',
    '',
    '',
    ''
  ];
  let titleArr = [
    '阿里前端攻城狮们写了一份前端面试题答案，请查收',
    'Android 布 局 翻 译 器',
    'Java 14 发布了，不使用"class"也能定义类了？还顺手要干掉Lombok！',
    '一口气说出 6种，@Transactional注解的失效场景',
    '跨域总结:从CORS到Ngni',
    '把 GitHub 放入口袋，“开箱”官方客户端',
    '微信支付跨平台软件架构',
    '机器学习:决策树入门之泰坦尼克号案例',
    '硬核数据结构，让你从B树理解到B+树',
    'Python——五分钟带你弄懂迭代器与生成器，夯实代码能力'
  ];
  let likeCountArr = [37, 58, 63, 73, 97, 143, 386, 521, 538, 843 ];
  let commentsCountArr = [1, 9, 10, 13, 16, 24, 26, 37, 38, 76]
  // 数据处理
  let columnEntryList = [];
  let page = req.query.page; // 页数
  let pageSize = req.query.pageSize; // 条数
  let len = (1000 - pageSize * (page - 1)) < pageSize ? (1000 - pageSize * (page - 1)) : pageSize; // 返回条数
  for (i = 0; i < len; i++) {
    columnEntryList.push(
      Mock.mock({
        'id': (page - 1) * pageSize + (i + 1),
        'username|1': usernameArr,
        'time|1': timeArr,
        'name|1': nameArr,
        'imageUrl|1': imageUrlArr,
        'title|1': titleArr,
        'likeCount|1': likeCountArr,
        'commentsCount|1': commentsCountArr
      })
    )
  }
  res.json({
    data: {
      adEntryList,
      columnEntryList
    }
  });
});

module.exports = router;