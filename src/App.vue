<!--<template>-->
<!--  <div id="app456">-->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App" jocker="hehe...bingo"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import HelloWorld from './components/HelloWorld.vue'-->

<!--export default {-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    HelloWorld-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--#app456 {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->

<template>
  <a-config-provider :locale="locale">
    <div id="app456">
      <router-view/>
    </div>
  </a-config-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import enquireScreen from 'wanxi-vue-fm/src/utils/device'

export default {
  data () {
    return {
      locale: zhCN,
    }
  },
  created () {
    let that = this
    enquireScreen(deviceType => {
      // tablet
      if (deviceType === 0) {
        that.$store.commit('TOGGLE_DEVICE', 'mobile')
        that.$store.dispatch('setSidebar', false)
      }
      // mobile
      else if (deviceType === 1) {
        that.$store.commit('TOGGLE_DEVICE', 'mobile')
        that.$store.dispatch('setSidebar', false)
      }
      else {
        that.$store.commit('TOGGLE_DEVICE', 'desktop')
        that.$store.dispatch('setSidebar', true)
      }

    })
  }
}
</script>
<style>
#app {
  height: 100%;
}
</style>
