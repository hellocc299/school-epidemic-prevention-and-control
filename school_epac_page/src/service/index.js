import CCRequest from "./request";
import localCache from "@/utils/cache"
import {
  BASE_URL,
  TIME_OUT
} from "./request/config"
import { message } from "antd";

const ccRequest = new CCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.get("token")
      if(token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log(err)
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      const errData = err.response.data
      message.error(errData)
      return err
    }
  }
})

export default ccRequest