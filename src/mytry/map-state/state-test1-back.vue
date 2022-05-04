<template>

  <div id="example">
    <h1>fuck!</h1>
    {{count}}
    {{name}}
    {{helloName}}
    {{addNumber}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      hello: 'hello',
      number: 1
    }
  },
  computed: {

    // 由于 Vuex 的状态存储是响应式的，所以可以使用计算属性来获得某个状态
    // 通过下面的计算属性，就可以在当前组件中访问到count,name，helloName，addNumber 在模板中我们通过大括号符号打印出来，当然这些可以在vue中使用，比如在watch中监听，在mounted中使用

    // 下面的计算属性涉及到了vuex管理的状态
    count () { // 这实际上是ES6中对象的简化写法 完整写法是 count: function { return this.$store.state.count }
      return this.$store.state.count
    },
    name () { // 这实际上是ES6中对象的简化写法 完整写法是 name: function { return this.$store.state.count }
      return this.$store.state.count
    },
    helloName: function (state) { // 为了能够使用 `this` 获取局部状态，必须使用常规函数，不能使用箭头函数
      return this.hello + this.$store.state.name
    },
    addNumber: function (state) { // 为了能够使用 `this` 获取局部状态，必须使用常规函数，不能使用箭头函数
      return this.number + this.$store.state.count
    }
    // 但有一个问题
    // 当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。比如上面的name(),count(),helloName(),显得重复，代码冗长
    // 为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键：
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
