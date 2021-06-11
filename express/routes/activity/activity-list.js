// 活动列表数组
let imageBaseUrl = 'http://localhost:9001/images/activity';
let itemArr = [
  {
    imgUrl: `${imageBaseUrl}/activity-image1.image`,
    title: '兑吧集团技术沙龙',
    date: '06-19',
    week: '周六',
    address: '杭州',
    endOrNot: false
  },
  {
    imgUrl: `${imageBaseUrl}/activity-image2.image`,
    title: 'ECUG Meetup 第 1 期丨2021 音视频技术最佳实践·杭州站',
    date: '06-26',
    week: '周六',
    address: '杭州',
    endOrNot: false
  },
  {
    imgUrl: `${imageBaseUrl}/activity-image3.image`,
    title: '阿里云开发者大会 体验实验室专场',
    date: '05-22',
    week: '周六',
    address: '杭州',
    endOrNot: true
  },
  {
    imgUrl: `${imageBaseUrl}/activity-image4.image`,
    title: '哈啰技术沙龙：大前端技术探索与实践',
    date: '05-22',
    week: '周六',
    address: '杭州',
    endOrNot: true
  },
  {
    imgUrl: `${imageBaseUrl}/activity-image5.image`,
    title: '抖音小程序技术沙龙',
    date: '06-20',
    week: '周日',
    address: '深圳',
    endOrNot: false
  },
  {
    imgUrl: `${imageBaseUrl}/activity-image6.image`,
    title: 'ArchSummit深圳2021｜全球架构师峰会',
    date: '07-09',
    week: '周五',
    address: '深圳',
    endOrNot: false
  },
  {
    imgUrl: `${imageBaseUrl}/activity-image7.image`,
    title: 'GIAC 全球互联网架构大会',
    date: '07-30',
    week: '周五',
    address: '深圳',
    endOrNot: false
  },
  {
    imgUrl: `${imageBaseUrl}/activity-image8.image`,
    title: 'CSDI summit中国软件研发管理行业技术峰会',
    date: '09-10',
    week: '周五',
    address: '深圳',
    endOrNot: false
  },
  {
    imgUrl: `${imageBaseUrl}/activity-image9.image`,
    title: '技术雷达峰会 - 数字时代平台解构 Tech Radar Summit',
    date: '05-15',
    week: '周六',
    address: '深圳',
    endOrNot: true
  }
];

exports.list = itemArr;
