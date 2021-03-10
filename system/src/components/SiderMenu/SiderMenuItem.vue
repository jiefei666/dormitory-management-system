<template>
  <div class="sider-menu-item">
    <template v-if="item.children && item.children.length > 0">
      <i-submenu :name="item.name">
        <template slot="title">
          <i :class="['iconfont', item.icon || '']" />
          {{ item.title }}
        </template>
        <SiderMenuItem v-for="(m, i) in item.children" :key="i" :item="m" />
      </i-submenu>
    </template>
    <template v-else>
      <i-menu-item :name="item.name">
        <i :class="['iconfont', item.icon || '']" />
        {{ item.title }}
      </i-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SiderMenuItem',

  components: {},

  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {}
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  activated() {},

  deactivated() {},

  beforeDistory() {},

  methods: {},
}
</script>
<style lang="less" scoped></style>
