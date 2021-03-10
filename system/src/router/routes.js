import BasicLayout from '@/layouts/BasicLayout'
import Login from '@/pages/user/login'

export const asyncRoutes = [
  {
    path: 'build-dormitory-manage',
    name: 'BuildDormitoryManage',
    meta: { title: '楼宇宿舍管理', icon: 'icon-louyu' },
    redirect: 'build-dormitory-manage/build-manage',
    component: () => import(/* WebpackChunkName: 'BuildDormitoryManage' */ '@/pages/build-dormitory-manage'),
    children: [
      {
        path: 'build-manage',
        name: 'BuildManage',
        meta: { title: '楼栋管理', icon: 'icon-loudong' },
        component: () => import(/* WebpackChunkName: 'BuildManage' */ '@/pages/build-dormitory-manage/build-manage')
      },
      {
        path: 'dormitory-manage',
        name: 'DormitoryManage',
        meta: { title: '宿舍管理', icon: 'icon-sushe' },
        component: () =>
          import(/* WebpackChunkName: 'DormitoryManage' */ '@/pages/build-dormitory-manage/dormitory-manage')
      }
    ]
  },
  {
    path: 'info-statistics-center',
    name: 'InfoStatisticsCenter',
    meta: { title: '信息统计中心', icon: 'icon-icon_function_tongji' },
    children: [
      { path: 'dormitory-rate', name: 'DormitoryRate', meta: { title: '宿舍评分', icon: 'icon-pingfen' } },
      { path: 'build-rate', name: 'BuildRate', meta: { title: '楼管评价', icon: 'icon-pingfen' } }
    ]
  },
  {
    path: 'user-permission-manage',
    name: 'UserPermissionManage',
    meta: { title: '用户权限管理', icon: 'icon-yonghuquanxian' },
    redirect: 'user-permission-manage/user-manage',
    component: () => import(/* WebpackChunkName: 'UserPermissionManage' */ '@/pages/user-permission-manage'),
    children: [
      {
        path: 'user-manage',
        name: 'UserManage',
        meta: { title: '用户管理', icon: 'icon-subscriber-fill' },
        component: () => import(/* WebpackChunkName: 'UserManage' */ '@/pages/user-permission-manage/user-manage')
      },
      {
        path: 'menu-function-manage',
        name: 'MenuFunctionManage',
        meta: { title: '菜单功能权限管理', icon: 'icon-ic_opt_feature' },
        component: () =>
          import(/* WebpackChunkName: 'MenuFunctionManage' */ '@/pages/user-permission-manage/menu-function-manage')
      },
      {
        path: 'roles-manage',
        name: 'RolesManage',
        meta: { title: '角色管理', icon: 'icon-jiaose1' },
        component: () => import(/* WebpackChunkName: 'RolesManage' */ '@/pages/user-permission-manage/roles-manage')
      }
    ]
  }
]

export const constantRoutes = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/user-permission-manage',
    children: asyncRoutes
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]
