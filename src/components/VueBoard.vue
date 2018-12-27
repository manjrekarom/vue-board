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
import Widget from '../services/Widget';

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
        },
        widgets: {
            type: Array,
            required: true,
            default: () => []
        }
    },

    data () {
        return {
            grid: [],
            i: 0
        }
    },

    methods: {
        addLayout (layout) {
            console.log(layout)
            this.layout.push(layout)
            console.log(this.layout);
        },

        addDatasource (datasource) {
            console.log('Inside vueboard add Datasource')
            console.log(datasource);
            
            this.datasources.push(datasource)
            console.log(this.datasources);
        },

        addWidget (widget) {
            this.widgets.push(widget)
            this.layout.push({"x": 0, "y": 0, "h": 9, "w": 4, "i": this.i++})
        }
    },

    created () {
        console.log('Created', this.$options.name)
        let self = this

        this.$bus.$on(Events.ADD_DATASOURCE, this.addDatasource)
        this.$bus.$on(Events.ADD_WIDGET, this.addWidget)
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
