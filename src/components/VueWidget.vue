<template>
    <div class="vue-widget">
        <component
            v-bind:is="componentType"
            :data="chartData" 
            :label="name"
            ytitle="Temperature"
            xtitle="Time"
            :messages="{empty: 'No data'}">
            <!-- :options="chartOptions"> -->
        </component>
    </div>
</template>

<style scoped>
    main {
        background-color: slategrey;
    }
</style>

<script>
// Using VueChartKick for basic usage
// import {LineChart} from './visualization/LineChart'
import {DataFetcher} from '../services/Data.js' 

export default {
    name: 'VueWidget',
    
    // components: {
    //     LineChart
    // },

    props: {
        // Name of the widget to be used as label 
        'name': {
            type: String
        },
        // Type of widget: {line, bar, pie}
        'type': {
            type: String
        },
        // Source of data: {Datasource, Object, Array}
        'datasource': {
            type: Object,
            required: true
        },
        // Fields to use for displaying from the fetched data
        'field': {
            type: String
        }
    },

    data () {
        return {
            'chartData': {},
            'chartOptions': {}
        }
    },

    created () {
        let self = this;
        
        let dataFetcher = new DataFetcher(self.datasource)
        
        setInterval(() => {
            dataFetcher.fetch()
                .then(function(response) {
                    let data = response.data.state.reported;
                    console.log(data[self.field])
                    self.chartData[new Date().toTimeString()] = data[self.field]
                })
        }, 5000)
    },

    computed: {
        componentType () {
            if (this.type === 'line') 
                return 'line-chart'
        }
    }
}
</script>
