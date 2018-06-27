<template>
  <div id="app">
    <vue-board :editMode="true" :datasources="datasources" :layout="layout">
      <vue-widget-container v-for="(item, index) in layout" :key="index" v-bind="item">
        <vue-widget :type="'line'" :chartData="{}" :chartOptions="{}"/>
      </vue-widget-container>
    </vue-board>
  </div>
</template>

<script>
import VueBoard from './components/VueBoard'
import VueWidgetContainer from './components/VueWidgetContainer'
import VueWidget from './components/VueWidget'

export default {
  name: 'App',

  components: {
    VueBoard,
    VueWidgetContainer,
    VueWidget
  },

  data () {
    return {
      layout: [],
      widget: [],
      datasources: []
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
