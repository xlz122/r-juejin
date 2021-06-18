// 活动列表
var config = require('../config.js');
const imageBaseUrl = `${config.imageBaseUrl}/activity`;

// 热门
const unlimited = {
  city_id: 0,
  list: [
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image1.image`,
      title: 'GWB 腾讯独立游戏大奖赛',
      date: '2021-03-22 09:30:00',
      address: '不限',
      detailUrl: 'https://gwb.tencent.com/awards2021',
      endOrNot: false,
    },
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image2.image`,
      title: '【语音识别】算法常规赛',
      date: '2021-04-08 15:00:00',
      address: '不限',
      detailUrl: 'https://dev.ehualu.com/dev/home/homePage',
      endOrNot: false
    },
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image3.image`,
      title: 'CRMEB 首届 UI 设计大赛',
      date: '2021-05-12 09:30:00',
      address: '不限',
      detailUrl: 'http://s.crmeb.com/news/web/activity',
      endOrNot: false
    },
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image4.image`,
      title: '火山引擎 veMARS 体验有礼',
      date: '2021-06-01 14:30:00',
      address: '不限',
      detailUrl: 'https://mp.weixin.qq.com/s/qeVHcXe5P7lHzTaybTl7Yw',
      endOrNot: false
    },
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image5.image`,
      title: '技术直播课——架构篇：大数据平台架构分享',
      date: '2021-06-24 10:20:00',
      address: '不限',
      detailUrl: 'https://www.slidestalk.com/m/439?__fuid=11110012',
      endOrNot: false
    },
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image6.image`,
      title: '亿级 DAU 背后的音视频技术最佳实践',
      date: '2021-06-26 08:30:00',
      address: '不限',
      detailUrl: 'https://www.bagevent.com/event/7367775?bag_track=juejinbanner',
      endOrNot: false
    },
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image7.image`,
      title: 'Apache 亚洲大会 2021',
      date: '2021-08-06 09:00:00',
      address: '不限',
      detailUrl: 'https://www.huodongxing.com/event/3600137190322',
      endOrNot: false
    },
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image8.image`,
      title: '字节跳动 Byte Camp 夏令营',
      date: '2021-05-17 14:30:00',
      address: '不限',
      detailUrl: 'https://juejin.cn/post/6966483350009675783',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image9.image`,
      title: 'Java主题直播：揭秘JDK并行堆扫描算法',
      date: '2021-06-10 08:30:00',
      address: '不限',
      detailUrl: 'https://juejin.cn/post/6968417640394162212/',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image10.image`,
      title: '又拍云Open Talk：使用go-zero快速开发微服务',
      date: '2021-06-10 10:30:00',
      address: '不限',
      detailUrl: 'https://4531742596636.huodongxing.com/event/6600438421622',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image11.image`,
      title: 'AI 应用与异构内存编程挑战赛总动员',
      date: '2021-06-10 14:30:00',
      address: '不限',
      detailUrl: 'https://www.slidestalk.com/w/436',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image12.image`,
      title: '第二十七届前端早早聊大会',
      date: '2021-06-05 09:00:00',
      address: '不限',
      detailUrl: 'https://www.huodongxing.com/go/tl27?qd=juejin',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image13.image`,
      title: '在域外数据（out-of-domain data）上的3D人体重建',
      date: '2021-06-03 08:30:00',
      address: '不限',
      detailUrl: 'https://www.slidestalk.com/w/430',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image14.image`,
      title: '“王炸”阵容带你 5 天入门实时数仓，结营抢独家好礼',
      date: '2021-05-24 08:30:00',
      address: '不限',
      detailUrl: 'https://developer.aliyun.com/learning/trainingcamp/realtime/1',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/unlimited/unlimited-image15.image`,
      title: '长安行系列活动-长安链携联盟开发者走进北航',
      date: '2021-05-28 10:30:00',
      address: '不限',
      detailUrl: 'https://1823454418395.huodongxing.com/event/3598524316822',
      endOrNot: true
    }
  ]
};

// 北京
const beijing = {
  city_id: 56,
  list: [
    {
      imgUrl: `${imageBaseUrl}/beijing/beijing-image1.image`,
      title: '从数据库到架构，我们来聊透分布式',
      date: '2021-06-19 09:30:00',
      address: '北京',
      detailUrl: 'https://www.huodongxing.com/event/8601287564500',
      endOrNot: false
    },
    {
      imgUrl: `${imageBaseUrl}/beijing/beijing-image2.image`,
      title: '从数据库到架构，我们来聊透分布式',
      date: '2021-06-25 08:00:00',
      address: '北京',
      detailUrl: 'https://gmtc.infoq.cn/2021/beijing?utm_source=juejin&utm_medium=banner&utm_campaign=0429',
      endOrNot: false
    },
    {
      imgUrl: `${imageBaseUrl}/beijing/beijing-image3.image`,
      title: '从数据库到架构，我们来聊透分布式',
      date: '2021-06-05 15:30:00',
      address: '北京',
      detailUrl: 'https://mp.weixin.qq.com/s/EXjVwlGuE6L8d4-khBni_w',
      endOrNot: true,
    },
    {
      imgUrl: `${imageBaseUrl}/beijing/beijing-image4.image`,
      title: '泛娱乐社交音视频技术实践沙龙',
      date: '2021-06-05 09:00:00',
      address: '北京',
      detailUrl: 'https://www.huodongxing.com/event/7597671665100',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/beijing/beijing-image5.image`,
      title: 'QCon 北京 2021｜全球软件开发大会',
      date: '2021-05-29 09:30:00',
      address: '北京',
      detailUrl: 'https://qcon.infoq.cn/2021/beijing?utm_source=juejin&utm_medium=banner&utm_campaign=0411',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/beijing/beijing-image6.image`,
      title: '网易 MCtalk 泛娱乐科技峰会',
      date: '2021-05-29 14:30:00',
      address: '北京',
      detailUrl: 'http://yunxin.163.com/promotion/mctalk2021?t_rs=1&utm_source=juejin&utm_campaign=tuiguang&utm_medium=banner&promotional_id=24433',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/beijing/beijing-image7.image`,
      title: '有道技术沙龙 | JAVA下午茶',
      date: '2021-05-22 10:30:00',
      address: '北京',
      detailUrl: 'https://mp.weixin.qq.com/s/erQo44jCfJ-QooYFodpxXQ',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/beijing/beijing-image8.image`,
      title: 'WebAssembly Meetup',
      date: '2021-05-15 10:00:00',
      address: '北京',
      detailUrl: 'https://www.huodongxing.com/event/6596259780300',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/beijing/beijing-image9.image`,
      title: 'SOFA开源三周年，Lets have fun together！',
      date: '2021-04-24 09:30:00',
      address: '北京',
      detailUrl: 'https://www.huodongxing.com/event/6592667770300',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/beijing/beijing-image10.image`,
      title: '云原生技术及可观测实践闭门会',
      date: '2021-04-23 08:30:00',
      address: '北京',
      detailUrl: 'https://www.huodongxing.com/event/4593637203422',
      endOrNot: true
    }
  ]
};

// 上海
const shanghai = {
  city_id: 23,
  list: [
    {
      imgUrl: `${imageBaseUrl}/shanghai/shanghai-image1.image`,
      title: '抖音小程序技术沙龙',
      date: '2021-06-06 14:30:00',
      address: '上海',
      detailUrl: 'https://www.huodongxing.com/event/4593637203422',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/shanghai/shanghai-image2.image`,
      title: '抖音电商技术沙龙',
      date: '2021-05-30 09:30:00',
      address: '上海',
      detailUrl: 'https://www.huodongxing.com/event/4593637203422',
      endOrNot: true
    }
  ]
};

// 广州
const guangzhou = {
  city_id: 13,
  list: []
};

// 深圳
const shenzhen = {
  city_id: 88,
  list: [
    {
      imgUrl: `${imageBaseUrl}/shenzhen/shenzhen-image1.image`,
      title: '抖音小程序技术沙龙',
      date: '2021-06-20 14:30:00',
      address: '深圳',
      detailUrl: 'https://juejin.cn/post/6965759008451854343',
      endOrNot: false
    },
    {
      imgUrl: `${imageBaseUrl}/shenzhen/shenzhen-image2.image`,
      title: 'ArchSummit深圳2021｜全球架构师峰会',
      date: '2021-07-09 08:30:00',
      address: '深圳',
      detailUrl: 'https://archsummit.infoq.cn/2021/shenzhen/?utm_source=juejin&utm_medium=banner&utm_campaign=8&utm_term=0510',
      endOrNot: false
    },
    {
      imgUrl: `${imageBaseUrl}/shenzhen/shenzhen-image3.image`,
      title: 'GIAC 全球互联网架构大会',
      date: '2021-07-30 08:30:00',
      address: '深圳',
      detailUrl: 'https://giac.msup.com.cn/?qd=juejin',
      endOrNot: false
    },
    {
      imgUrl: `${imageBaseUrl}/shenzhen/shenzhen-image4.image`,
      title: 'CSDI summit中国软件研发管理行业技术峰会',
      date: '2021-09-10 14:30:00',
      address: '深圳',
      detailUrl: 'https://www.bagevent.com/event/csdisummit/p/449657',
      endOrNot: false
    },
    {
      imgUrl: `${imageBaseUrl}/shenzhen/shenzhen-image5.image`,
      title: '技术雷达峰会 - 数字时代平台解构 Tech Radar Summit',
      date: '2021-05-15 10:00:00',
      address: '深圳',
      detailUrl: 'https://www.bagevent.com/event/7243954',
      endOrNot: false
    }
  ]
};

// 杭州
const hangzhou = {
  city_id: 18,
  list: [
    {
      imgUrl: `${imageBaseUrl}/hangzhou/hangzhou-image1.image`,
      title: '兑吧集团技术沙龙',
      date: '2021-06-19 10:00:00',
      address: '杭州',
      detailUrl: 'https://www.bagevent.com/event/7486052',
      endOrNot: false
    },
    {
      imgUrl: `${imageBaseUrl}/hangzhou/hangzhou-image2.image`,
      title: 'ECUG Meetup 第 1 期丨2021 音视频技术最佳实践·杭州站',
      date: '2021-06-26 15:20:00',
      address: '杭州',
      detailUrl: 'https://7754169426883.huodongxing.com/event/4600691622000',
      endOrNot: false
    },
    {
      imgUrl: `${imageBaseUrl}/hangzhou/hangzhou-image3.image`,
      title: '阿里云开发者大会 体验实验室专场',
      date: '2021-05-22 15:20:00',
      address: '杭州',
      detailUrl: 'https://developer.aliyun.com/article/784245',
      endOrNot: true
    },
    {
      imgUrl: `${imageBaseUrl}/hangzhou/hangzhou-image4.image`,
      title: '哈啰技术沙龙：大前端技术探索与实践',
      date: '2021-05-22 08:20:00',
      address: '杭州',
      detailUrl: 'https://www.huodongxing.com/event/3593672468000',
      endOrNot: true
    }
  ]
};

// 混淆数组
function randomArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// 热门是全部数据
const hot = {
  city_id: 0,
  list: randomArray([
    ...unlimited.list,
    ...beijing.list,
    ...shanghai.list,
    ...guangzhou.list,
    ...shenzhen.list,
    ...hangzhou.list
  ])
}

exports.list = [
  hot,
  beijing,
  shanghai,
  guangzhou,
  shenzhen,
  hangzhou
];
