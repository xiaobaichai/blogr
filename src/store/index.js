import Vue from 'vue'
import Vuex from 'vuex'

// actions
import { getUserAcount } from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 状态管理
    userId: null,
    userInfo: {}
  },
  getters: { // 相当于组件中的computed，非必须

  },
  mutations: { // 同步修改state中的数据，必须的
    initUserAcount (state, response) {
      state.userId = response.data.data.user_id
      state.userInfo = response.data.data.user_info
    }
  },
  actions: { // 提交mutation，即异步修改state中的数据，有异步操作时必须的
    getUserAcountAsync (context) {
      getUserAcount()
        .then((response) => {
          context.commit('initUserAcount', response)
        })
        .catch((err) => {
          throw err
        })
    }
  },
  modules: { // 小项目一般不用，非必须
  }
})
