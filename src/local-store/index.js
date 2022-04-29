import Vue from 'vue'
import Vuex from 'vuex'

import app from 'wanxi-vue-fm/src/store/modules/app'
import user from 'wanxi-vue-fm/src/store/modules/user'
import permission from './permission'
import enhance from 'wanxi-vue-fm/src/store/modules/enhance'
import online from 'wanxi-vue-fm/src/store/modules/online'
import getters from 'wanxi-vue-fm/src/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    enhance,
    online,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters
})
