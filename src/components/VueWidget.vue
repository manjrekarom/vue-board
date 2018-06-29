<template>
    <div class="vue-widget">
        <line-chart  
            v-if="type=='line'" 
            :data="chartData" 
            :options="chartOptions">
        </line-chart>
    </div>
</template>

<style scoped>
    main {
        background-color: slategrey;
    }
</style>

<script>
import LineChart from './visualization/LineChart'
import {DataFetcher} from '../services/Data.js' 

export default {
    name: 'VueWidget',
    
    components: {
        LineChart
    },

    props: { 
        'type': {
            type: String
        },
        'datasource': {
            type: Object,
            required: true
        },
        'field': {
            type: String
        }
    },

    created () {
        let dataFetcher = new DataFetcher(this.datasource)
        setInterval(() => {
            dataFetcher
            .fetch()
            .then((result) => console.log)
        }, 5000)
    },

    data () {
        return {
            'chartData': [],
            'chartOptions': {}
        }
    }
}
</script>
