/**
 * 将路由表转换成菜单List
 * @param {Array} routes
 * @return {Array}
 */

export const routesToMenu = routes => {
  const menu = []

  routes.forEach(route => {
    const tmp = {
      name: route.name,
      key: route.name,
      title: route.meta?.title,
      icon: route.meta?.icon
    }
    if (route.children) {
      tmp.children = routesToMenu(route.children)
    }

    menu.push(tmp)
  })

  return menu
}
