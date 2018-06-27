<template>
    <div class="vue-widget">
        <!-- <line-chart  v-if="type=='line'" :data="chartData" :options="chartOptions"></line-chart> -->
        <line-chart :data='[["Jan", 4], ["Feb", 2], ["Mar", 10], ["Apr", 5], ["May", 3]]' width="800px" height="500px"/>
    </div>
</template>

<style scoped>
    main {
        background-color: slategrey;
    }
</style>

<script>
// import LineChart from './chartjs/LineChart'

export default {
    name: 'VueWidget',
    props: [
        'chartData', 
        'chartOptions', 
        'type'
    ]
}
</script>
