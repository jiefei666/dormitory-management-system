import { asyncRoutes, constantRoutes } from '@/router/routes.js'

/**
 *  生成 判断是否有权限函数，缓存rights变量
 * @param {Array} rights
 * @return {<Function>}
 */
function hasPermissionFn(rights) {
  return function(route) {
    if (route.moduleCode) {
      return rights.includes(route.moduleCode)
    } else {
      return true
    }
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param {}
 * @return {}
 */
function filterAsyncRoutes(routes, rights) {
  const hasPermission = hasPermissionFn(rights)
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(route)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, rights)
      }
      res.push(tmp)
    }
  })

  return res
}

const permission = {
  namespaced: true,
  state: {
    routes: constantRoutes,
    addRoutes: []
  },
  getters: {},
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
    }
  },
  actions: {
    generateRoutes({ commit }, rights) {
      const routes = filterAsyncRoutes(asyncRoutes, rights)
      commit('SET_ROUTES', routes)

      return routes
    }
  }
}

export default permission
