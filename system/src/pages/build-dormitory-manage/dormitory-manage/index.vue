<template>
  <div class="dormitory-manage">
    <SearchBar @on-add="showEditModal(null, 'add')" />
    <TablePage class="table-page" :data="data" :columns="columns" />
    <DormitoryEditModal
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
import DormitoryEditModal from './_components/DormitoryEditModal'
import DormitoryManageApi from '@/api/build-dormitory-manage/dormitory-manage'
import { Tag } from 'view-design'

export default {
  name: 'DormitoryManage',

  components: { SearchBar, TablePage, DormitoryEditModal },

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
          title: '宿舍号',
          key: 'dormitoryCode',
          align: 'center'
        },
        {
          title: '寝室长',
          key: 'dormitoryLeader',
          align: 'center'
        },
        {
          title: '状态',
          key: 'status',
          align: 'center',
          width: 200,
          render: (h, { row }) => {
            return h(
              Tag,
              {
                props: {
                  color: row.status ? 'red' : 'green'
                }
              },
              row.status ? '已满' : '未满'
            )
          }
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
      DormitoryManageApi.getData()
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
        title: `您是否想要删除宿舍：${record.dormitoryCode}`,
        onOk: () => {
          this.$Message.info('删除成功')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.dormitory-manage {
  display: flex;
  flex-direction: column;
  height: 100%;
  .table-page {
    flex: 1;
  }
}
</style>
