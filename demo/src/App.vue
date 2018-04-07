<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view/> -->
    <div>{{compute}}</div>
    <HelloWorld @onHelloMounted="onHelloMounted">
      <div>slot default</div>
      <div slot="abc">slot abc</div>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  data: function () {
    return {
      bbb: 'bbb',
      ccc: 'ccc'
    }
  },
  components: {
    HelloWorld
  },
  computed: {
    compute () {
      return this.bbb + this.ccc
    }
  },
  props: {
    aaa: {
      type: [Boolean, String],
      default: true
    }
  },
  methods: {
    onHelloMounted () {
      console.log('onHelloMounted')
    }
  },
  created () {
    // this.$on('hook:mounted', () => {
    //   console.log('123')
    // })
  },
  mounted () {
    console.log('app mounted')
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
