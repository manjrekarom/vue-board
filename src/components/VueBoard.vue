<template>
    <div class="vue-board">
        <add-element v-if="editMode"  
            :datasources="datasources"
            @layout-add="addLayout" 
            @add-datasource="addDatasource"/>
        <vue-widget-grid
            :layout="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true">
            <slot></slot>
        </vue-widget-grid>
    </div>
</template>

<style scoped>

</style>

<script>
import VueWidgetGrid from './VueWidgetGrid'

import Events  from '../services/Events'
import AddElement from './AddElement'

export default {
    name: 'VueBoard',

    components: {
        AddElement,
        VueWidgetGrid
    },

    props: {
        editMode: {
            type: Boolean,
            default: false
        },
        layout: {
            type: Array,
            required: true,
            default: () => []
        },
        datasources: {
            type: Array,
            required: true,
            default: () => []
        }
    },

    data () {
        return {
            widgets: [],
            grid: []
        }
    },

    methods: {
        addLayout (event) {
            console.log(event)
            this.layout.push(event)
            console.log(this.layout);
        },

        addDatasource (event) {
            console.log('Inside vueboard add Datasource')
            console.log(event);
            
            this.datasources.push(event)
            console.log(this.datasources);
            
        }
    },

    created () {
        console.log('Created', this.$options.name)
        let self = this

        this.$bus.$on(Events.ADD_DATASOURCE, this.addDatasource)
        this.$bus.$emit('LAYOUT')
        // EventBus.$on(Event.VWC_ADDED, (layout) => {
        //     self.layout.push(layout)
        // })
    },

    mounted () {
        console.log('Mounted', this.$options.name)
    }
}
</script>
