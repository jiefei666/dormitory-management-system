<template>
  <i-card class="basic-sider" :bordered="false">
    <SiderMenu :menu-list="menuList" :open-names="openNames" :default-active="defaultActive" />
  </i-card>
</template>

<script>
import SiderMenu from '@/components/SiderMenu'
import { asyncRoutes } from '@/router/routes'
import { routesToMenu } from '@/helpers/routes'

export default {
  name: 'BasicSider',

  components: { SiderMenu },

  props: {},

  data() {
    return {
      menuList: asyncRoutes,
      openNames: [],
      defaultActive: '',
    }
  },

  computed: {},

  watch: {
    $route: {
      handler(val) {
        this.defaultActive = val.name
      },
      immediate: true,
    },
  },

  created() {
    this.getMenuList()

    this.openNames = this.menuList.map(({ name }) => name)
  },

  mounted() {},

  activated() {},

  deactivated() {},

  beforeDistory() {},

  methods: {
    getMenuList() {
      this.menuList = routesToMenu(asyncRoutes)
    },
  },
}
</script>
<style lang="less">
.basic-sider {
  height: calc(100vh - @system-header-height - @system-footer-height - 20px);
  .ivu-menu {
    color: #386fff;
  }
  .ivu-menu-item {
    color: #386fff;
  }
  .ivu-menu-item-selected,
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #0046ff;
    font-weight: 600;
    background-color: #c3d4ff;
  }
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    width: 4px;
  }
}
</style>
