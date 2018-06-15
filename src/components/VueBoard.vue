<template>
    <div class="vue-board">
        <add-element v-if="editMode" @add-widget="addWidget"/>
        <div class="grid-stack">
            <slot></slot>    
        </div>
    </div>
</template>

<style scoped>
    .vue-board {
        background-color: burlywood;
    }
</style>

<script>
import gridstack from 'gridstack'
import $ from 'jquery'

import {Event, EventBus} from '../services/EventBus'
import AddElement from './AddElement'

export default {
    name: 'VueBoard',

    components: {
        AddElement
    },

    props: {
        editMode: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            datasources: [],
            widgets: [],
            layout: [],
            grid: {}
        }
    },

    created () {
        console.log('Created', this.$options.name)
        EventBus.$on(Event.LAYOUT_ADD, (layout) => {
            this.layout.push(layout)
        })
    },

    mounted () {
        this.$nextTick(function () {
            // code that assumes this.$el is in-document
            $('.grid-stack').gridstack({
                width: 12
            })
        })
    },

    methods: {
        addWidget () {
            this.layout.push({"x":0,"y":0,"w":2,"h":2,"i":"0"})
        }
    }
}
</script>
