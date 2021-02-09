import axios from 'axios'

import {BASE_URL,TIMEOUT} from './config'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  })
  //axios拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {})

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("未授权访问");
          break;
        default:
          console.log("其他错误信息");
      }
    }
    return err;
  })

  // 3.发送真正的网络请求
  return instance(config)
}