import axios from 'axios';

class HttpRequest {
  constructor(externalConfig) {
    // 外部配置
    this.externalConfig = externalConfig;
  }
  // 内部配置
  getInsideConfig() {
    let config = {
      // 基础路径
      baseURL: '',
      // 允许跨域带token
      withCredentials: true, 
      // 请求超时
      timeout: 5000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      }
    }
    config = { ...config, ...this.externalConfig };
    return config
  }

  // 调用方法
  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(options);
  }

  // 拦截器设置
  interceptors(instance) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      return Promise.resolve(config);
    }, error => {
      return Promise.reject(error);
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      const data = res.data;
      return Promise.resolve(data);
    }, error => {
      return Promise.reject(error);
    })
  }
}

// 设置代理（webpackDevServer.config.js）可启用
const Axios = new HttpRequest({
  baseURL: '/api'
});

export default Axios;