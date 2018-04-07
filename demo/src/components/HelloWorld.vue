<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" :value="msg" @input="onInput"/>
    <h1>slots</h1>
    <div>default: <slot></slot></div>
    <div>default: <slot name="abc"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  methods: {
    onInput (val) {
      this.msg = val.target.value
    }
  },
  watch: {
    msg (n, o) {
      console.log(n, o)
    }
  },
  mounted () {
    console.log('hellow mounted')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
