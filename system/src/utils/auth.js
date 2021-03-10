import { getLocalStorage, setLocalStorage, removeLocalStorage } from './index'

/**
 * 获取token
 * @param {}
 * @return {}
 */
export const getToken = () => {
  return getLocalStorage('token')
}

/**
 * 设置token
 * @param { String } value
 * @return {}
 */
export const setToken = value => {
  return setLocalStorage('token', value)
}

/**
 * 清除token
 * @param {}
 * @return {}
 */
export const removeToken = () => {
  return removeLocalStorage('token')
}
