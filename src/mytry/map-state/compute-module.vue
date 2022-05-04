<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Customers List</h4>
      <ul>
        <li>hello:{{hello}}</li>
        <li> number: {{number}}</li>
        <li>moduleVal:{{moduleVal}}</li>
        <li> moduleName: {{moduleName}}</li>
        <li>moduleNameOther:{{moduleNameOther}}</li>

      </ul>
    </div>
    <div class="col-md-6">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: 'hello',
      number: 1,
    }
  },
  computed: {
    moduleVal(){
      return this.$store.state.vuexTest.moduleVal
    },
    moduleName(){
      return this.$store.state.vuexTest.moduleName
    },
    moduleNameOther(){
      // 当组件中与vuex中的字符已经出现重复时，使用 moduleNameOther 来映射 store.state.vuexTest.moduleName
      return this.$store.state.vuexTest.moduleName
    },

  },
  watch: {
    helloName(newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
    }
  },
  mounted() {
    console.log(this.addNumber);
  }
}
</script>
