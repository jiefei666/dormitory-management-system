<template>
  <i-modal
    class="dormitory-edit-modal"
    :value="modalVisible"
    :title="editType === 'add' ? '新增宿舍' : '编辑宿舍信息'"
    :width="450"
    @on-cancel="onCancel"
  >
    <i-form ref="form" :model="form" label-position="right" :label-width="90">
      <i-form-item
        label="宿舍号"
        prop="dormitoryCode"
        :rules="{ required: true, message: '请填写宿舍号', trigger: 'blur' }"
      >
        <i-input v-model="form.dormitoryCode" placeholder="请填写宿舍号" />
      </i-form-item>
      <i-form-item
        label="寝室长"
        prop="dormitoryLeader"
        :rules="{ required: true, message: '请填写寝室长姓名', trigger: 'blur' }"
      >
        <i-input v-model="form.dormitoryLeader" placeholder="请填写寝室长" />
      </i-form-item>
    </i-form>
    <template #footer>
      <i-button type="info" @click="onOk" :loading="confirmLoading">
        {{ confirmLoading ? '提交中...' : '确认' }}
      </i-button>
      <i-button @click="onCancel">关闭</i-button>
    </template>
  </i-modal>
</template>

<script>
const defaultForm = {
  dormitoryCode: '',
  dormitoryLeader: ''
}
export default {
  name: 'DormitoryEditModal',

  components: {},

  props: {
    modalVisible: {
      type: Boolean,
      default: false
    },
    editType: {
      type: String,
      default: 'add'
    },
    formData: {
      type: Object,
      default: () => {}
    },
    confirmLoading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      form: { ...defaultForm }
    }
  },

  computed: {},

  watch: {
    modalVisible(nV) {
      if (!nV) {
        this.$refs.form.resetFields()
        this.form = { ...defaultForm }
      } else {
        this.formData && (this.form = { ...this.formData })
      }
    }
  },

  created() {},

  mounted() {},

  activated() {},

  deactivated() {},

  beforeDistory() {},

  methods: {
    onCancel() {
      this.$emit('update:modalVisible', false)
    },

    onOk() {
      this.$refs.form.validate(valid => {
        if (valid) {
          const params = Object.assign({}, this.form)
          this.$emit('on-submit', params)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped></style>
