import Vue from 'vue'
import App from './App.vue'
// import $ from 'jquery'
// window.$ = JQuery

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
