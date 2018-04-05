// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'

Vue.config.productionTip = false

window.Vue = Vue
/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  propsData: {
    aaa: false
  },
  // router,
  components: { App },
  template: '<App/>'
})
