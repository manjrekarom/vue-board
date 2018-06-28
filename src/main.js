// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import App from './App'

Vue.config.productionTip = false

// Adding EventBus at $bus
// Adding axios at $http
// to all vue instances/ components
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

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
