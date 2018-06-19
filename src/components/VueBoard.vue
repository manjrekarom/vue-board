<template>
    <div class="vue-board">
        <add-element v-if="editMode"/>
        <grid-layout
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
        </grid-layout>
    </div>
</template>

<style scoped>
    .vue-board {
        background-color: burlywood;
    }
</style>

<script>
import GridLayout from './GridLayout'

import {Event, EventBus} from '../services/EventBus'
import AddElement from './AddElement'

export default {
    name: 'VueBoard',

    components: {
        AddElement,
        GridLayout
    },

    props: {
        editMode: {
            type: Boolean,
            default: false
        },
        layout: {
            type: Array,
            required: true
        }
    },

    data () {
        return {
            datasources: [],
            widgets: [],
            grid: {}
        }
    },

    methods: {

    },

    created () {
        console.log('Created', this.$options.name)
        let self = this

        // EventBus.$on(Event.VWC_ADDED, (layout) => {
        //     self.layout.push(layout)
        // })
    },

    mounted () {
        console.log('Mounted', this.$options.name)
    }
}
</script>
