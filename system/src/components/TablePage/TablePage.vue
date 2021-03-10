<template>
  <div class="table-page" ref="tablePage">
    <i-table :data="data" :columns="columns" :loading="loading" stripe border :height="height" />
    <i-page
      :total="data.length"
      show-total
      show-elevator
      show-sizer
      @on-change="onPageChange"
      @on-page-size-change="onSizeChange"
    />
  </div>
</template>

<script>
export default {
  name: 'TablePage',

  components: {},

  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      height: ''
    }
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {
    this.height = this.$refs.tablePage.clientHeight - 33
  },

  activated() {},

  deactivated() {},

  beforeDistory() {},

  methods: {
    onPageChange(page) {
      this.$emit('on-page-change', page)
    },
    onSizeChange(size) {
      this.$emit('on-size-change', size)
    }
  }
}
</script>
<style lang="less">
.table-page {
  .ivu-page {
    text-align: center;
    margin-top: 20px;
  }
}
</style>
