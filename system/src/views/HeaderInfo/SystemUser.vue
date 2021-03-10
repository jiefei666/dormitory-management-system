<template>
  <div class="system-user">
    <i-dropdown @on-click="onClick">
      <a href="javascript:void(0)">
        <i-avatar :size="30" style="background-color: #87d068" icon="ios-person" />
        {{ username }}
        <i-icon type="ios-arrow-down"></i-icon>
      </a>
      <i-dropdown-menu slot="list">
        <i-dropdown-item name="loginOut">退出登录</i-dropdown-item>
      </i-dropdown-menu>
    </i-dropdown>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SystemUser',

  components: {},

  props: {},

  data() {
    return {}
  },

  computed: {
    ...mapGetters(['username'])
  },

  watch: {},

  created() {},

  mounted() {},

  activated() {},

  deactivated() {},

  beforeDistory() {},

  methods: {
    ...mapActions('user', ['loginOut']),

    onClick(name) {
      if (name === 'loginOut') {
        console.log(name)
        this.loginOut()
          .then(res => {
            if (res.code === 200000) {
              this.$Message.success('退出成功！')
              setTimeout(() => {
                this.$router.push({ name: 'Login' })
              }, 300)
            } else {
              this.$Message.warning(`退出失败！${res.message}`)
            }
          })
          .catch(err => {
            this.$Message.error(`error:${err}`)
          })
      }
    }
  }
}
</script>
<style lang="less" scoped></style>
