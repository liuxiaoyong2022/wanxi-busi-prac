// store.js
/**
 vuex的核心管理对象模块:store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import vuexTest from './modules/vuexTest'

Vue.use(Vuex)
// 状态对象
const state = { // 初始化状态 这里放置的状态可以被多个组件共享
  count: 1,
  count1: 1,
  count2: 2,
  count3: 3,
  name: 'daming'
}
const mutations = {}
const actions = {}
const getters = {}

export default new Vuex.Store({
  state, // 状态
  mutations, // 包含多个更新state函数的对象
  actions, // 包含多个队形事件回调函数的对象
  getters, // 包含多个getter计算属性函数的对象
  modules: { // 模块化
    vuexTest
  }
})
