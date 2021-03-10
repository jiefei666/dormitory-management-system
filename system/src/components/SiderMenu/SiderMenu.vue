<template>
  <i-menu class="sider-menu" :active-name="defaultActive" :open-names="openNames" @on-select="onSelect">
    <SiderMenuItem v-for="(item, index) in menuList" :key="index" :item="item" />
  </i-menu>
</template>

<script>
import SiderMenuItem from './SiderMenuItem'
export default {
  name: 'SiderMenu',

  components: { SiderMenuItem },

  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
    openNames: {
      type: Array,
      default: () => [],
    },
    defaultActive: String
  },

  data() {
    return {
    }
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  activated() {},

  deactivated() {},

  beforeDistory() {},

  methods: {
    onSelect(name) {
      console.log(name)
      this.$router.push({ name })
    },
  },
}
</script>
<style lang="less" scoped>
.sider-menu {
  width: 100% !important;
}
</style>
