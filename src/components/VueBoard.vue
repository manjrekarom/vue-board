<template>
    <div class="vue-board">
        <add-element v-if="editMode" @layout-add="addLayout" @datasource-add="addDatasource"/>
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
    .vue-board {
        background-color: burlywood;
    }
</style>

<script>
import VueWidgetGrid from './VueWidgetGrid'

import {Event, EventBus} from '../services/EventBus'
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
            required: true
        },
        datasources: {
            type: Array,
            required: true
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
            console.log(event);
            
            this.datasources.push(event)
            console.log(this.datasources);
            
        }
    },

    created () {
        console.log('Created', this.$options.name)
        let self = this

        EventBus.$emit('LAYOUT')
        // EventBus.$on(Event.VWC_ADDED, (layout) => {
        //     self.layout.push(layout)
        // })
    },

    mounted () {
        console.log('Mounted', this.$options.name)
    }
}
</script>
