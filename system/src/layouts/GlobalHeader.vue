<template>
  <div class="global-header">
    <div class="global-header__system-name">
      <span>{{ systemName }}</span>
    </div>
    <HeaderInfo />
  </div>
</template>

<script>
import { SYSTEM_NAME } from '@/config/system.config.js'
import HeaderInfo from '@/views/HeaderInfo'

export default {
  name: 'GlobalHeader',

  components: { HeaderInfo },

  props: {},

  data() {
    return {
      systemName: SYSTEM_NAME
    }
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
.global-header {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background: url('~@/assets/images/head-bg.png') no-repeat left center / auto 100%, 100% 100%;
  &__system-name {
    display: flex;
    align-items: center;
    span {
      display: inline-block;
      margin-left: 50px;
      font-size: 30px;
      color: #fff;
      font-weight: 600;
      transform: scale(0.9, 1);
      letter-spacing: 2px;
      text-shadow: 2px 2px 5px #000;
    }
  }
}
</style>
