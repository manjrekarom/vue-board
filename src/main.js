// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import App from './App'


Vue.config.productionTip = false

// Adding EventBus at $bus
// Adding axios at $http
// To all vue instances/ components
const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  },
  $http: {
    get: function () {
      return axios
    }
  }
})

// Using plugins 
// Vue.use(Vuetify)
Vue.use(VueMaterial)
Vue.use(VueChartkick, {adapter: Chart})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
