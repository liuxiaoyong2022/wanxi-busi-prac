<!-- test.vue -->
<template>
  <div id="example">
    {{count}}
    {{count1}}
    {{repeatCount}}
    {{count3}}
    {{name}}
    {{helloName}}
    {{addNumber}}
  </div>
</template>



<script>
import {mapState } from 'vuex'
export default {
  data () {
    return {
      hello: 'hello',
      number: 1,
      count2: 2
    }
  },
  computed: {
    /**
     * 数组形式
     * 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
     * */
    ...mapState (['count', 'name']),


    /**
     * 对象形式
     */
    ...mapState ({
      count: 'count', // 这种就是count:"count", 的简写
      count1: 'count1',
      repeatCount: 'count2', // 当组件中与vuex中的字符已经出现重复时，使用 repeatCount 来映射 store.state.count2
      count3: (state) => { // 映射 count3 为 store.state.conut3的值
        return state.count3
      },
      helloName: function (state) { // 为了能够使用 `this` 获取局部状态，必须使用常规函数，不能使用箭头函数
        return this.hello + state.name
      },
      addNumber: function (state) { // 为了能够使用 `this` 获取局部状态，必须使用常规函数，不能使用箭头函数
        return this.number + state.count
      }
    })
  },
  watch: {
    helloName (newVal, oldVal) {
      console.log(newVal)
      console.log(oldVal)
    }
  },
  mounted () {
    console.log(this.helloName)
  }
}
</script>
