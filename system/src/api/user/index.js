import request from '@/utils/request'

const userApi = {
  login: 'user/login'
}

/**
 * 用户登录
 * @param {Object} params
 * @return {<Promise>}
 */
export const userLoginApi = params => {
  return Promise.resolve({
    code: 200000,
    data: 'token:xsdfax1231xdfasd'
  })
}

/**
 * 获取用户信息
 * @param {}
 * @return {<Promise>}
 */
export const getUserInfoApi = () => {
  return Promise.resolve({
    code: 200000,
    data: {
      user: {
        username: 'admin'
      },
      rights: []
    }
  })
}

/**
 * 退出登录
 * @param {}
 * @return {<Promise>}
 */
export const loginOutApi = () => {
  return Promise.resolve({
    code: 200001,
    data: {}
  })
}
