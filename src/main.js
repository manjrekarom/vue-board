// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Datasource} from './services/Datasource'
Vue.config.productionTip = false

let ds = new Datasource('Thing 4',
  'https://www.google.com',
  'JSON', 'INTERVAL', true)

console.log(ds)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
