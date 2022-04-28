import axios from 'axios'

class CCRequest {
  constructor(config) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 实例的interceptor
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch
    )

    // 全部的interceptor
    this.instance.interceptors.request.use((config => {
      return config
    }), (err) => {
      console.log(err);
      return err
    })
    this.instance.interceptors.response.use((res) => {
      const data = res.data ? res.data : ''
      if(data && data.code === 1001) {
        console.log("数据请求成功");
      } else {
        console.log("数据请求失败");
      }
      return data
    }, (err) => {
      return err
    })
  }
  // 封装request
  request(config) {
    return new Promise((resolve, reject) => {
      if(config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance.request(config)
          .then((res) => {
            if(config.interceptors?.responseInterceptor) {
              res = config.interceptors?.requestInterceptor(res)
            }
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
    })
  }

  get(config){
    return this.request({ ...config, method: "GET" })
  }
  post(config) {
    return this.request({ ...config, method: "POST" })
  }
  patch(config) {
    return this.request({ ...config, method: "PATCH" })
  }
  delete(config){
    return this.request({ ...config, method: "DELETE" })
  }
}

export default CCRequest