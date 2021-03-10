<template>
  <div class="search-bar">
    <i-form :model="searchForm" inline label-position="right" :label-width="100">
      <i-row>
        <i-col :span="5">
          <i-form-item label="楼栋号" prop="buildCode">
            <i-select v-model="searchForm.buildCode" style="width: 200px">
              <i-option label="蓝雾苑1栋" value="1" />
              <i-option label="蓝雾苑2栋" value="2" />
              <i-option label="蓝雾苑3栋" value="3" />
            </i-select>
          </i-form-item>
        </i-col>
        <i-col :span="5">
          <i-form-item label="负责人" prop="reponseName">
            <i-input v-model="searchForm.reponseName" placeholder="请输入负责人姓名" />
          </i-form-item>
        </i-col>
        <i-col>
          <i-button type="info" icon="md-search" @click="onSearch">查询</i-button>
          <i-button type="success" icon="md-add" style="margin-left: 10px;" @click="onAdd">新增</i-button>
        </i-col>
      </i-row>
    </i-form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',

  components: {},

  props: {},

  data() {
    return {
      searchForm: {
        buildCode: '',
        reponseName: ''
      }
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
    onSearch() {
      const params = Object.assign({}, this.searchForm)
      this.$emit('on-search', params)
    },

    onAdd() {
      this.$emit('on-add')
    }
  }
}
</script>
<style lang="less">
.search-bar {
  padding-top: 20px;
}
</style>
