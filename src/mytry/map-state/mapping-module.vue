<!-- test.vue -->
<template>
  <div id="example">
    <li>{{moduleVal}}</li>
    <li>{{moduleName}}</li>
    <li>{{moduleNameOther}}</li>
  </div>
</template>



<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      hello: 'hello',
      number: 1,
    }
  },
  computed: {
    /**
     * 数组形式
     * 当映射的计算属性的名称与 与模块中vuexTest中state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组，
     * */
    ...mapState("vuexTest", ["moduleVal", "moduleName"]),
    // "vuexTest" 指向模块vuexTest，"moduleVal"表示store.vuexTest.moduleVal


    /**
     * 对象形式
     */
    // 第一种对象方式
    ...mapState({
      moduleVal: "vuexTest/moduleVal",
      moduleNameOther: "vuexTest/moduleName" // 表示 moduleNameOther 映射到vuexTest模块中moduleName
    }),

    ...mapState("vuexTest", {
      moduleVal: 'moduleVal', // 这种就是moduleVal:"moduleVal", 的简写
      moduleName: "moduleName",
      moduleNameOther: "moduleName", // 当组件中与vuex中的字符已经出现重复时，使用 moduleNameOther 来映射 store.state.vuexTest.moduleName
      moduleVal: (state) => { // 映射 moduleVal 为 store.state.vuexTest.moduleVal的值
        return state.moduleVal
      },
      helloName: function (state) { // 为了能够使用 `this` 获取局部状态，必须使用常规函数，不能使用箭头函数
        return this.hello + state.moduleName
      },
      addNumber(state) { // 为了能够使用 `this` 获取局部状态，必须使用常规函数，不能使用箭头函数
        return this.number + state.moduleVal
      }
    })
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
