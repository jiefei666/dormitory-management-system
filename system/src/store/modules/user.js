import { getToken, setToken, removeToken } from '@/utils/auth'
import { userLoginApi, getUserInfoApi, loginOutApi } from '@/api/user'

const defaultUser = { username: 'admin', password: '' }

const user = {
  namespaced: true,
  state: {
    user: defaultUser,
    token: getToken(),
    rights: []
  },
  getters: {},
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_RIGHTS: (state, rights) => {
      state.rights = rights
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    userLogin: async ({ commit }, { password, username }) => {
      try {
        const res = await userLoginApi({ password, username })
        // console.log(res)
        if (res.code === 200000) {
          setToken(res.data)
          commit('SET_TOKEN', res.data)
        }

        return res
      } catch (e) {
        console.log(e)
      }
    },

    getUserInfo: async ({ commit }) => {
      try {
        const res = await getUserInfoApi()
        const { user, rights } = res.data

        if (res.code === 200000) {
          commit('SET_USER', user)
          commit('SET_RIGHTS', rights)

          return res
        } else {
          Promise.reject(res)
        }
      } catch (e) {
        console.log(e)
        Promise.reject(e)
      }
    },

    loginOut: async ({ commit, dispatch }) => {
      try {
        const res = await loginOutApi()

        await dispatch('resetToken')

        return res
      } catch (e) {
        console.log(e)
      }
    },

    resetToken({ commit }) {
      commit('SET_TOKEN', '')
      commit('SET_USER', defaultUser)
      commit('SET_RIGHTS', [])

      removeToken()
    }
  }
}

export default user
