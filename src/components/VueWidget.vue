<template>
    <div class="vue-widget">
        <line-chart  v-if="type=='line'" :data="chartData" :options="chartOptions"></line-chart>
    </div>
</template>

<style scoped>
    main {
        background-color: slategrey;
    }
</style>

<script>
import LineChart from './chartjs/LineChart'

export default {
    name: 'VueWidget',
    components: {
        LineChart
    },
    props: [
        'chartData', 
        'chartOptions', 
        'type'
    ]
}
</script>
