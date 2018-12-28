<template>
    <div class="vue-widget">
        <component
            v-bind:is="componentType"
            :data="chartData" 
            :label="name"
            ytitle="Temperature"
            xtitle="Time">
            <!-- :messages="{empty: 'No data'}"> -->
            <!-- :options="chartOptions"> -->
        </component>
    </div>
</template>

<style>
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
            chartData: {},
            chartOptions: {},
            dataFetcher: {}
        }
    },

    created () {
        let that = this;
        
        that.dataFetcher = new DataFetcher(that.datasource)
        
        setInterval(() => {
            that.dataFetcher.fetch()
                .then(function(response) {
                    let data = response.data.state.reported;
                    console.log(data[that.field])
                    // that.chartData[new Date().toTimeString()] = data[that.field]
                    that.$set(that.chartData, new Date().toTimeString().split(' ')[0], data[that.field])
                })
        }, 10000)
    },

    computed: {
        componentType () {
            if (this.type === 'line') 
                return 'line-chart'
        }
    }
}
</script>
