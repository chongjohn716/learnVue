<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view/> -->
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  props: {
    aaa: {
      type: [Boolean, String],
      default: true
    }
  },
  created () {
    // this.$on('hook:mounted', () => {
    //   console.log('123')
    // })
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
