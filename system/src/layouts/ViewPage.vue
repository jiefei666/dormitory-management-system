<template>
  <div class="view-page">
    <div class="view-page__title">
      <i :class="['iconfont', $route.meta.icon]"></i>
      <span>{{ $route.meta.title }}</span>
    </div>
    <div class="view-page__content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewPage',

  components: {},

  props: {},

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

  methods: {}
}
</script>
<style lang="less" scoped>
.view-page {
  height: 100%;
  &__title {
    i {
      font-size: 23px;
      color: @primary-color;
      vertical-align: middle;
      margin-right: 20px;
    }
    span {
      font-size: 16px;
      color: @primary-color;
      vertical-align: middle;
    }
  }

  &__content {
    height: calc(100% - 34px);
    > div {
      height: 100%;
    }
  }
}
</style>
