const list = [
  {
    web_id: 91,
    title: '推荐',
    link: '/xlz/home'
  },
  {
    web_id: 25,
    title: '后端',
    link: '/xlz/home/backend',
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
    link: '/xlz/home/frontend',
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
    link: '/xlz/home/android',
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
    link: '/xlz/home/ios',
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
    link: '/xlz/home/ai',
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
    link: '/xlz/home/freebie',
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
    link: '/xlz/home/career',
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
    link: '/xlz/home/article',
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
]

exports.list = list;
