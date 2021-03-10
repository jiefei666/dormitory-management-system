import axios from 'axios'
import store from '@/store'
const repeatMsgs = 'REPEATREQUEST'

const tip = msgs => {
  // Message.error({
  //   content: msgs,
  //   duration: 10
  // })
}

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL + 'gydxps/',
  timeout: 6000 // 请求超时时间
})

// 异常拦截处理器
// const errorHandler = error => {
//   if (error.response) {
//   }
//   return Promise.reject(error)
// }

request.interceptors.request.use(
  config => {
    // if (!window._screenConfig.isBigScreen) {
    //   const { token } = store.getters
    //   token && (config.headers.Authorization = token)
    // } else {
    //   console.log('BigScreen')
    // }

    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200000) {
      const statusCodes = {
        400000: '系统异常',
        400001: '数据异常',
        400002: '参数错误',
        400003: '参数错误',
        400011: '无此功能访问权限',
        400012: '无此数据访问权限',
        100001: '用户名或密码错误',
        100002: '验证失败',
        100004: '该用户账号已禁用',
        100005: '用户未登录',
        100006: '用户已存在',
        400021: '数据更新异常',
        400022: '数据更新异常',
        400023: '数据更新异常',
        400024: '数据更新异常',
        400025: '数据更新异常'
      }
      //TODO: Token Out
      if (res.code === 100005) {
        return Promise.reject(new Error(res.message))
      } else if (res.code === 400004) {
        return Promise.reject(res)
      } else {
        Notification.warning({
          message: statusCodes[res.code],
          description: res.message
        })
        return Promise.reject(res)
      }
    } else {
      return res
    }
  },
  error => {
    console.log(`err:${error}`)
    const { response, message } = error
    if (response) {
      tip(`Status:${response.status},Message: ${response.data.message}`)
    } else if (message === repeatMsgs) {
      tip('repeat request')
    } else {
      tip(`请求超时或服务器异常，请检查网络或联系管理员！`)
    }
    return Promise.reject(error)
  }
)

export default request
