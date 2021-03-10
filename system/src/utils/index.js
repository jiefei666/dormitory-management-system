import axios from 'axios'

/**
 * 常用工具类
 */
export default class CommonUtils {
  constructor() {}

  /**
   * 通过地址来请求文件数据
   * @param {String} url
   * @return {Object | null}
   */
  static async loadFileByUrl(url) {
    const response = await axios.get(url)
    if (response.status === 200) {
      return response.data
    } else {
      return null
    }
  }

  /**
   * 生成guid
   */
  static createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      let r = (Math.random() * 16) | 0
      let v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  /**
   * 判断三维模型是否重复加载
   * @param {Array} treeData 资源树数据
   * @param {String} url 模型地址
   */
  static getHaveUrl(treeData, url) {
    let isHaveUrl = false
    let fun = list => {
      for (let i = 0; i < list.length; i++) {
        let c = list[i]
        if (c.url == url) {
          isHaveUrl = true
          break
        }
        if (c.children && c.children.length) {
          fun(c.children)
        }
      }
    }
    fun(treeData)
    return isHaveUrl
  }

  /**
   * 获取当前时间戳后几位
   * @param {Number} n
   */
  static getDateNum(n) {
    return (Date.now() + '').slice(-(n || 2))
  }
}

/**
 * 获取localstorage
 * @param { String } key
 * @return { }
 */
export const getLocalStorage = key => {
  const storage = window.localStorage
  if (!storage) {
    window.alert('您的浏览器不支持localstorage')
    return false
  }
  const value = storage.getItem(key)
  return value ? JSON.parse(value) : false
}

/**
 * 设置localstorage
 * @param { String } key
 * @param { String } value
 * @return {}
 */
export const setLocalStorage = (key, value) => {
  const storage = window.localStorage
  if (!storage) {
    window.alert('您的浏览器不支持localstorage')
    return false
  }

  storage.setItem(key, JSON.stringify(value))
}

/**
 * 清除localstorage
 * @param { String } key
 * @return {}
 */
export const removeLocalStorage = key => {
  const storage = window.localStorage
  if (!storage) {
    window.alert('您的浏览器不支持localstorage')
    return false
  }

  storage.removeItem(key)
}

/**
 * formatDate 时间日期格式转换
 * @param {String} dateString  "1995-12-17T03:24:00"
 * @param {String} format  "yyyy-MM-dd hh:mm:ss"
 * @returns "2020-05-29 12:32:12"
 */
export const formatDate = (dateString = null, format = 'yyyy-MM-dd hh:mm:ss') => {
  const date = new Date(dateString)
  const o = {
    'M+': date.getMonth() + 1, //month
    'd+': date.getDate(), //day
    'h+': date.getHours(), //hour
    'm+': date.getMinutes(), //minute
    's+': date.getSeconds(), //second
    'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
    S: date.getMilliseconds() //millisecond
  }
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format))
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('' + o[k]).padStart(2, '0'))
  }
  return format
}
