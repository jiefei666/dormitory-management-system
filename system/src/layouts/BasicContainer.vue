<template>
  <div class="basic-container">
    <i-layout class="basic-layout">
      <i-header>
        <GloablHeader />
      </i-header>
      <i-layout>
        <i-sider :width="300" hide-trigger>
          <BasicSider />
        </i-sider>
        <i-content class="basic-container-content">
          <i-card :bordered="false" shadow>
            <slot />
          </i-card>
        </i-content>
      </i-layout>
      <i-footer>Footer</i-footer>
    </i-layout>
  </div>
</template>

<script>
import GloablHeader from './GlobalHeader'
import BasicSider from './BasicSider'

export default {
  name: 'BasicContainer',

  components: { GloablHeader, BasicSider },

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
<style lang="less">
.basic-container {
  height: 100%;
  .ivu-layout-has-sider {
    padding: 10px;
  }
  &-content {
    margin-left: 20px;
    height: calc(100vh - @system-header-height - @system-footer-height - 20px);
    overflow-y: hidden;
    > .ivu-card {
      padding: 24px;
      height: 100%;
      &-body {
        height: inherit !important;
      }
    }
    .ivu-card-body {
      height: inherit !important;
    }
  }
  .ivu-layout-footer {
    height: @system-footer-height;
  }
}
</style>
