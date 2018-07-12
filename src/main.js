// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VModal from 'vue-js-modal'
import VeeValidate from 'vee-validate'
import VueGoodTablePlugin from 'vue-good-table';

// import the styles 
import 'vue-good-table/dist/vue-good-table.css'

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
Vue.use(VModal, { dialog: true })
Vue.use(VueChartkick, {adapter: Chart})
Vue.use(VeeValidate)
Vue.use(VueGoodTablePlugin)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
