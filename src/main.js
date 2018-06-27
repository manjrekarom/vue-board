// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueChartKick from 'vue-chartkick'
import Chart from 'chart.js'
import App from './App'

Vue.config.productionTip = false

// Adding event bus to all vue instances/ components
const EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})

Vue.use(VueChartKick, {adapter: Chart})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
