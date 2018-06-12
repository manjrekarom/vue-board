<template>
  <div id="app">
    <vue-board :editMode="true">
      <vue-widget-container :layout="layout" v-for="(item, index) in layout" :key="index">
        <vue-widget></vue-widget>
      </vue-widget-container>
    </vue-board>
  </div>
</template>

<script>
import VueBoard from './components/VueBoard'

export default {
  name: 'App',
  components: {
    VueBoard
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
  margin-top: 60px;
}
</style>
