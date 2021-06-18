var config = require('../config.js');

// 广告列表条目数据
const adEntryList = [
  {
    username: '掘金酱',
    time: '1天前',
    imgUrl: `${config.imageBaseUrl}/home/column-entry-list-ad.jpg`,
    title: '面试不用愁，掘友能解忧，一批大厂面试经验新鲜出炉啦~',
    bstract: '有面试需求的小伙伴再也不用发愁找不到攻略啦。这一次面试，掘友帮你忙。'
  }
];

// 列表数据
const imageBaseUrl = `${config.imageBaseUrl}/home`;

const list = [
  {
    username: 'Keely',
    time: '23小时前',
    name: 'JavaScript',
    imgUrl: '',
    title: '鼠标选中文本划词高亮、再次选中划词取消高亮效果',
    like: true,
    likeCount: 10,
    commentsCount: 3
  },
  {
    username: '敖丙',
    time: '44分钟前',
    name: '面试/Java',
    imgUrl: `${imageBaseUrl}/column-entry-list-image1.jpg`,
    title: '面试官：说一下公平锁和非公平锁的区别？',
    like: false,
    likeCount: 75,
    commentsCount: 7
  },
  {
    username: '晨曦时梦见兮',
    time: '12小时前',
    name: '面试/前端',
    imgUrl: '',
    title: '写给女朋友的中级前端面试秘籍（含详细答案，15k级别）',
    like: false,
    likeCount: 110,
    commentsCount: 27
  },
  {
    username: '神三元',
    time: '3天前',
    name: 'JavaScript/前端',
    imgUrl: `${imageBaseUrl}/column-entry-list-image3.jpg`,
    title: '（建议精读）HTTP灵魂之问，巩固你的 HTTP 知识体系',
    like: false,
    likeCount: 876,
    commentsCount: 36
  },
  {
    username: '冴羽',
    time: '15小时前',
    name: '面试',
    imgUrl: '',
    title: '面试被问项目经验不用慌，按这个步骤回答绝对惊艳',
    like: false,
    likeCount: 76,
    commentsCount: 8
  },
  {
    username: 'jsonchao',
    time: '2天前',
    name: 'Android',
    imgUrl: `${imageBaseUrl}/column-entry-list-image4.jpg`,
    title: '深入探索 Android 内存优化（炼狱级别）',
    like: false,
    likeCount: 199,
    commentsCount: 34
  },
  {
    username: '夜幕降临耶',
    time: '23小时前',
    name: 'iOS',
    imgUrl: '',
    title: 'iOS底层原理：weak的实现原理',
    like: false,
    likeCount: 10,
    commentsCount: 2
  },
  {
    username: '给我点阳光就灿烂',
    time: '1天前',
    name: '人工智能',
    imgUrl: `${imageBaseUrl}/column-entry-list-image2.jpg`,
    title: 'iOS底层原理：weak的实现原理',
    like: false,
    likeCount: 10,
    commentsCount: 2
  },
  {
    username: '沉默王二',
    time: '1天前',
    name: '程序员',
    imgUrl: '',
    title: '你也看不起做外包的程序员？',
    like: false,
    likeCount: 28,
    commentsCount: 4
  },
  {
    username: '_yuanhao',
    time: '10天前',
    name: 'GitHub',
    imgUrl: `${imageBaseUrl}/column-entry-list-image5.jpg`,
    title: '2020 还不会泡 Github 你就落伍了',
    like: false,
    likeCount: 127,
    commentsCount: 52
  },
  {
    username: '胡志武98',
    time: '11分钟前',
    name: '微信小程序',
    imgUrl: '',
    title: '使用发布订阅模式+globalData实现小程序全局实时状态管理',
    like: false,
    likeCount: 12,
    commentsCount: 2
  },
  {
    username: '芦半山',
    time: '2小时前',
    name: 'Android',
    imgUrl: '',
    title: 'Android消息机制的冷门知识点',
    like: false,
    likeCount: 6,
    commentsCount: 2
  },
  {
    username: '树酱',
    time: '21小时前',
    name: '前端',
    imgUrl: '',
    title: '前端Nginx那些事',
    like: false,
    likeCount: 144,
    commentsCount: 5
  },
  {
    username: '秋天不落叶',
    time: '1天前',
    name: 'TypeScript',
    imgUrl: '',
    title: '【开源】一个 React + TS 项目模板',
    like: false,
    likeCount: 79,
    commentsCount: 20
  },
  {
    username: 'felixa',
    time: '33分钟前',
    name: 'iOS',
    imgUrl: '',
    title: 'Runloop分享',
    like: false,
    likeCount: 4,
    commentsCount: 2
  },
  {
    username: 'NanBox',
    time: '20小时前',
    name: 'Android',
    imgUrl: '',
    title: '杀不掉的知乎 - 聊一聊 Android 的多任务',
    like: false,
    likeCount: 53,
    commentsCount: 18
  },
  {
    username: '敖丙',
    time: '1天前',
    name: '面试/程序员',
    imgUrl: '',
    title: '《我们一起进大厂》系列-大厂需求研发/开发流程',
    like: false,
    likeCount: 53,
    commentsCount: 18
  },
  {
    username: '风平浪静如码',
    time: '4小时前',
    name: 'Java',
    imgUrl: '',
    title: '知己知彼，百战不殆：“金三银四”横扫BAT面试之Spring108问！',
    like: false,
    likeCount: 332,
    commentsCount: 20
  },
  {
    username: 'M了个C',
    time: '2小时前',
    name: 'iOS',
    imgUrl: '',
    title: 'iOS探索--类的结构分析(二)',
    like: false,
    likeCount: 205,
    commentsCount: 35
  },
  {
    username: '好学习吧丶',
    time: '2天前',
    name: '前端',
    imgUrl: '',
    title: '面试官：你了解过移动端适配吗？',
    like: false,
    likeCount: 1067,
    commentsCount: 122
  }
];

exports.adEntryList = adEntryList;
exports.list = list;
