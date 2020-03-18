import axios from 'axios';

class HttpRequest {
  // 请求配置
  getInsideConfig() {
    const config = {
      baseURL: 'http://192.168.27.1:3000',
      // 允许跨域带token
      withCredentials: true, 
      // 请求超时
      timeout: 5000
    }
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
      return config;
    }, error => {
      return Promise.reject(error);
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      const data = res.data;
      return data
    }, error => {
      return Promise.reject(error);
    })
  }
}

const Axios = new HttpRequest();

export default Axios;