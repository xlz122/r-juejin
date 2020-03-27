var express = require('express');
var router = express.Router();

/* 沸点左侧导航 */
router.get('/pin-nav', function(req, res, next) {
  res.json({
    data: [
      {
        title: '推荐',
        link: '/boiling-point'
      },
      {
        title: '热门',
        link: '/boiling-point/hot'
      },
      {
        title: '关注',
        link: '/boiling-point/following'
      },
      {
        title: '开源推荐',
        link: '/boiling-point/open-source'
      },
      {
        title: '内部招聘',
        link: '/boiling-point/recruit'
      },
      {
        title: '掘金相亲',
        link: '/boiling-point/blind-date'
      },
      {
        title: '上班摸鱼',
        link: '/boiling-point/idle'
      },
      {
        title: '应用安利',
        link: '/boiling-point/amway'
      },
      {
        title: 'New资讯',
        link: '/boiling-point/tool'
      }
    ]
  });
});

/* 小册书籍列表 */
router.get('/books-list', function(req, res, next) {
  // 书籍数据数组
  let imageBaseUrl = 'http://localhost:9000/images/brochure';
  let itemArr = [
    {
      imgUrl: `${imageBaseUrl}/book-image1.jpg`,
      title: '深入浅出 PWA',
      desc: '理论结合实践，帮助开发者全方位地掌握现代 Web 技术体系中的 PWA 架构。',
      authorUrl: `${imageBaseUrl}/author-image1.jpg`,
      username: '泪已无痕',
      gradeImgUrl: `${imageBaseUrl}/grade-image2.svg`,
      authorDesc: '启业云架构师，Taro 项目组成员',
      price: 19.9,
      chapter: 25,
      read: '207分',
      purchaseCount: 87
    },
    {
      imgUrl: `${imageBaseUrl}/book-image2.jpg`,
      title: 'Uniapp 从入门到进阶',
      desc: '从基础到实战，详细讲解跨平台应用开发的方方面面，包含 Uniapp 开发常用知识点，基础 api，前端交互、组件封装，后端 Nodejs 开发、前后端联调和调优部署，是一套非常全面的综合课程。',
      authorUrl: `${imageBaseUrl}/author-image2.jpg`,
      username: '阿面',
      gradeImgUrl: `${imageBaseUrl}/grade-image1.svg`,
      authorDesc: '广州某电商公司资深前端',
      price: 29.9,
      chapter: 30,
      read: '271分',
      purchaseCount: 617
    },
    {
      imgUrl: `${imageBaseUrl}/book-image3.jpg`,
      title: 'JavaScript 设计模式核⼼原理与应⽤实践',
      desc: '通俗易懂的编程“套路“学。带你深入看似高深实则接地气的设计模式原理，在实际场景中内化设计模式的”道“与”术“。学会驾驭代码，而非被其奴役。',
      authorUrl: `${imageBaseUrl}/author-image3.jpg`,
      username: '修言',
      gradeImgUrl: `${imageBaseUrl}/grade-image1.svg`,
      authorDesc: '《前端性能优化原理与实践》作者，某大型电商集团前端工程师',
      price: 19.9,
      chapter: 18,
      read: '137分30秒',
      purchaseCount: 4066
    },
    {
      imgUrl: `${imageBaseUrl}/book-image4.jpg`,
      title: 'MySQL 是怎样运行的：从根儿上理解 MySQL',
      desc: '授人以鱼不如授人以渔，从根儿上理解 MySQL，让 MySQL 不再是一个黑盒。',
      authorUrl: `${imageBaseUrl}/author-image4.jpg`,
      username: '小孩子4919',
      gradeImgUrl: `${imageBaseUrl}/grade-image3.svg`,
      authorDesc: '公众号「我们都是小青蛙」作者，专注将复杂概念简单化',
      price: 29.9,
      chapter: 29,
      read: '770分30秒',
      purchaseCount: 11563
    },
    {
      imgUrl: `${imageBaseUrl}/book-image5.jpg`,
      title: 'React SSR 服务端渲染原理解析与同构实践',
      desc: '全网最完整的 React SSR 同构技术原理解析与实践，从零开始手把手带你打造自己的同构应用开发骨架，帮助大家彻底深入理解服务端渲染及底层实现原理，学完本课程，你也可以打造自己的同构框架。',
      authorUrl: `${imageBaseUrl}/author-image5.jpg`,
      username: 'zz_jesse',
      gradeImgUrl: `${imageBaseUrl}/grade-image3.svg`,
      authorDesc: '全栈工程师、公众号「前端技术江湖」作者、react ssr 应用开发骨架「zz.js」作者。',
      price: 19.9,
      chapter: 20,
      read: '201分30秒',
      purchaseCount: 759
    },
    {
      imgUrl: `${imageBaseUrl}/book-image6.jpg`,
      title: 'React Hooks 与 Immutable 数据流实战',
      desc: '以实战为线索，逐步深入React开发各个环节，掌握前端常用性能体验优化思路，打造完整前端工作流，提升工程化编码能力和思维能力。',
      authorUrl: `${imageBaseUrl}/author-image6.jpg`,
      username: '神三元',
      gradeImgUrl: `${imageBaseUrl}/grade-image6.svg`,
      authorDesc: '掘金优秀作者，「前端三元同学」公众号主笔',
      price: 29.9,
      chapter: 36,
      read: '306分',
      purchaseCount: 2363
    },
    {
      imgUrl: `${imageBaseUrl}/book-image7.jpg`,
      title: '剖析 Vue.js 内部运行机制',
      desc: '把原理抽象为小 Demo，以一种对新手友好的方式带领读者漫游 Vue.js 的世界',
      authorUrl: `${imageBaseUrl}/author-image7.jpg`,
      username: '染陌同学',
      gradeImgUrl: `${imageBaseUrl}/grade-image3.svg`,
      authorDesc: 'BAT高级前端工程师，公众号「前端技术优选」。',
      price: 9.9,
      chapter: 9,
      read: '81分',
      purchaseCount: 9497
    },
    {
      imgUrl: `${imageBaseUrl}/book-image8.jpg`,
      title: 'JVM 字节码从入门到精通',
      desc: '深入剖析 JVM 字节码，带你分析字节码黑科技、破解软件、从零实现一个 APM',
      authorUrl: `${imageBaseUrl}/author-image8.jpg`,
      username: '挖坑的张师傅',
      gradeImgUrl: `${imageBaseUrl}/grade-image3.svg`,
      authorDesc: 'CVTE 技术经理',
      price: 19.9,
      chapter: 28,
      read: '298分',
      purchaseCount: 3107
    },
    {
      imgUrl: `${imageBaseUrl}/book-image9.jpg`,
      title: 'Kubernetes 从上手到实践',
      desc: '从上手实践到原理剖析，带你掌握 Kubernetes 必备技能。',
      authorUrl: `${imageBaseUrl}/author-image9.jpg`,
      username: '张晋涛',
      gradeImgUrl: `${imageBaseUrl}/grade-image4.svg`,
      authorDesc: '网易有道资深运维开发，骨灰级 Linux 程序员，PyCon China 和 GITC 讲师',
      price: 19.9,
      chapter: 24,
      read: '322分30秒',
      purchaseCount: 2543
    },
    {
      imgUrl: `${imageBaseUrl}/book-image10.jpg`,
      title: 'MySQL 是怎样使用的：从零蛋开始学习 MySQL',
      desc: '来来来，你什么都不用会，真正的从零蛋开始系统又轻松地学习MySQL。',
      authorUrl: `${imageBaseUrl}/author-image10.jpg`,
      username: '小孩子4919',
      gradeImgUrl: `${imageBaseUrl}/grade-image5.svg`,
      authorDesc: '公众号「我们都是小青蛙」作者，专注将复杂概念简单化。',
      price: 19.9,
      chapter: 22,
      read: '331分',
      purchaseCount: 1914
    },
    {
      imgUrl: `${imageBaseUrl}/book-image11.jpg`,
      title: '程序员职业小白书 —— 如何规划和经营你的职业',
      desc: '职业上的错误是不能回滚的，将陪伴你一生，帮助每一位程序员规划自己的职业生涯',
      authorUrl: `${imageBaseUrl}/author-image11.jpg`,
      username: 'Easy',
      gradeImgUrl: `${imageBaseUrl}/grade-image2.svg`,
      authorDesc: '方糖气球博主，曾创业帮上千名程序员找到知名公司工作',
      price: 29.9,
      chapter: 14,
      read: '83分30秒',
      purchaseCount: 2400
    },
    {
      imgUrl: `${imageBaseUrl}/book-image12.jpg`,
      title: '数字货币与区块链原理',
      desc: '深入了解区块链、挖矿、钱包、签名等技术原理，对未来的数字货币世界做好准备',
      authorUrl: `${imageBaseUrl}/author-image12.jpg`,
      username: '廖雪峰',
      gradeImgUrl: `${imageBaseUrl}/grade-image4.svg`,
      authorDesc: '软件架构师，精通数字货币和区块链',
      price: 29.9,
      chapter: 5,
      read: '37分30秒',
      purchaseCount: 1080
    },
    {
      imgUrl: `${imageBaseUrl}/book-image13.jpg`,
      title: '响应式编程 —— RxJava 高阶指南',
      desc: '研究响应式编程，探讨 ReactiveX 的底层概念和 RxJava 的高阶问题',
      authorUrl: `${imageBaseUrl}/author-image13.jpg`,
      username: '拉丁吴',
      gradeImgUrl: `${imageBaseUrl}/grade-image5.svg`,
      authorDesc: '糗事百科 Android工程师，喜欢研究问题',
      price: 9.9,
      chapter: 11,
      read: '91分30秒',
      purchaseCount: 1481
    },
    {
      imgUrl: `${imageBaseUrl}/book-image14.jpg`,
      title: '如何使用 Canvas 制作出炫酷的网页背景特效',
      desc: '从零开始学习 Canvas 相关知识，分析其特效，最终制作出炫酷的网页背景',
      authorUrl: `${imageBaseUrl}/author-image14.jpg`,
      username: 'sunshine小小倩',
      gradeImgUrl: `${imageBaseUrl}/grade-image6.svg`,
      authorDesc: '饿了么 RMB FE',
      price: 9.9,
      chapter: 9,
      read: '71分30秒',
      purchaseCount: 3808
    },
    {
      imgUrl: `${imageBaseUrl}/book-image15.jpg`,
      title: '用 npm script 打造超溜的前端工作流',
      desc: '抛弃笨重的构建工具，拥抱轻巧而不失强大的 npm script，随小册赠送视频版教程。',
      authorUrl: `${imageBaseUrl}/author-image15.jpg`,
      username: '王仕军',
      gradeImgUrl: `${imageBaseUrl}/grade-image5.svg`,
      authorDesc: 'ArcBlock 资深前端工程师',
      price: 19.9,
      chapter: 15,
      read: '83分30秒',
      purchaseCount: 2551
    },
  ];
  // 数据处理
  let data = [];
  let page = req.query.page; // 页数
  let pageSize = req.query.pageSize; // 条数
  let len = (1000 - pageSize * (page - 1)) < pageSize ? (1000 - pageSize * (page - 1)) : pageSize; // 返回条数
  for (i = 0; i < len; i++) {
    // 随机返回数组一项
    let n = Math.floor(Math.random() * itemArr.length + 1) - 1;
    itemArr[n].id = (page - 1) * pageSize + (i + 1);
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