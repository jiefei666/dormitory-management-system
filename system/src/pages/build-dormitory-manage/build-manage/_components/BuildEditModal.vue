<template>
  <i-modal
    class="build-edit-modal"
    :value="modalVisible"
    :title="editType === 'add' ? '新增楼栋' : '编辑楼栋信息'"
    :width="450"
    @on-cancel="onCancel"
  >
    <i-form ref="form" :model="form" label-position="right" :label-width="90">
      <i-form-item
        label="楼栋号"
        prop="buildCode"
        :rules="{ required: true, message: '请填写楼栋号', trigger: 'blur' }"
      >
        <i-input v-model="form.buildCode" placeholder="请填写楼栋号" />
      </i-form-item>
      <i-form-item
        label="负责人"
        prop="reponseName"
        :rules="{ required: true, message: '请填写负责人姓名', trigger: 'blur' }"
      >
        <i-input v-model="form.reponseName" placeholder="请填写负责人" />
      </i-form-item>
      <i-form-item
        label="联系电话"
        prop="phone"
        :rules="{ required: true, message: '请填写联系电话', trigger: 'blur' }"
      >
        <i-input v-model="form.phone" placeholder="请填写联系电话" />
      </i-form-item>
      <i-form-item label="性别" prop="sex">
        <i-radio-group v-model="form.sex">
          <i-radio :label="1">男</i-radio>
          <i-radio :label="0">女</i-radio>
        </i-radio-group>
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
  buildCode: '',
  reponseName: '',
  phone: '',
  sex: 1
}
export default {
  name: 'BuildEditModal',

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
