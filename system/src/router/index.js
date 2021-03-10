import Vue from 'vue'
import VueRouter from 'vue-router'
import { constantRoutes, asyncRoutes } from './routes'

const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location) {
  return originPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const router = new VueRouter({
  routes: constantRoutes
})

export default router
