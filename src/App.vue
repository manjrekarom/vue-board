<template>
  <div id="app">
    <vue-board 
      :editMode="true" 
      :datasources="datasources" 
      :layout="layout">
      <vue-widget-container 
        v-for="(item, index) in layout" 
        :key="index" 
        v-bind="item">
        <vue-widget 
          :type="'line'"
          :datasource="datasources[0]"
          :field="'device4.28'"/>
      </vue-widget-container>
    </vue-board>
  </div>
</template>

<script>
import VueBoard from './components/VueBoard'
import VueWidgetContainer from './components/VueWidgetContainer'
import VueWidget from './components/VueWidget'
import { Datasource, Format, Type } from './services/Data';

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
  },

  created () {
    let datasource = new Datasource('First',
                                    'http://iot.e-yantra.com/pubsub/shadow/4',
                                    Format.JSON,
                                    Type.INTERVAL,
                                    true)
    this.datasources.push(datasource)
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
