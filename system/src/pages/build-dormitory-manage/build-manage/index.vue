<template>
  <div class="build-manage">
    <SearchBar @on-add="showEditModal(null, 'add')" />
    <TablePage class="table-page" :data="data" :columns="columns" />
    <BuildEditModal
      :modalVisible.sync="buildAddVisible"
      :editType="editType"
      :confirmLoading="editLoading"
      @on-submit="onSubmit"
    />
  </div>
</template>

<script>
import SearchBar from './_components/SearchBar'
import TablePage from '@/components/TablePage'
import BuildEditModal from './_components/BuildEditModal'
import BuildManageApi from '@/api/build-dormitory-manage/build-manage'

export default {
  name: 'BuildMange',

  components: { SearchBar, TablePage, BuildEditModal },

  props: {},

  data() {
    return {
      data: [],
      columns: [
        {
          title: '#',
          key: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: '楼栋号',
          key: 'buildCode',
          align: 'center'
        },
        {
          title: '负责人',
          key: 'reponseName',
          align: 'center'
        },
        {
          title: '联系电话',
          key: 'phone',
          align: 'center'
        },
        {
          title: '操作',
          width: 140,
          align: 'center',
          render: (h, { row }) => {
            return h(
              'div',
              {
                class: 'opreat-btn-group'
              },
              [
                h(
                  'i-button',
                  {
                    props: {
                      type: 'warning',
                      ghost: true,
                      size: 'small'
                    },
                    on: {
                      click: () => this.showEditModal(row, 'update')
                    }
                  },
                  '编辑'
                ),
                h(
                  'i-button',
                  {
                    props: {
                      type: 'error',
                      ghost: true,
                      size: 'small'
                    },
                    on: {
                      click: () => this.handDelete(row)
                    }
                  },
                  '删除'
                )
              ]
            )
          }
        }
      ],
      buildAddVisible: false,
      editType: 'add',
      currentRowData: null,
      editLoading: false
    }
  },

  computed: {},

  watch: {},

  created() {
    this.getBuildList()
  },

  mounted() {},

  activated() {},

  deactivated() {},

  beforeDistory() {},

  methods: {
    getBuildList() {
      BuildManageApi.getData()
        .then(res => {
          this.data = res.data.records
          console.log(res)
        })
        .catch(err => {
          this.$Message.error(err)
        })
    },

    showEditModal(record, type) {
      this.editType = type
      this.currentRowData = record
      this.buildAddVisible = true
    },

    onSubmit(params) {
      this.editLoading = true
    },

    handDelete(record) {
      this.$Modal.confirm({
        title: `您是否想要删除该楼栋：${record.buildCode}`,
        onOk: () => {
          this.$Message.info('删除成功')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.build-manage {
  display: flex;
  flex-direction: column;
  height: 100%;
  .table-page {
    flex: 1;
  }
}
</style>
