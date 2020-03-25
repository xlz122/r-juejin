var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

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
    }
  ];
  // 生成40组数据
  let data = [];
  for (i = 0; i < 4; i++) {
    // 混淆数组
    itemArr = itemArr.sort(() => Math.random() -0.5);
    data = data.concat(itemArr);
  }
  // 模拟延迟返回数据
  setTimeout(() => {
    res.json({
      data
    });
  }, 500);
});

module.exports = router;