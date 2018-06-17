<template>
    <div class="vue-board">
        <add-element v-if="editMode" @add-widget="addWidget"/>
        <div class="grid-stack">
            <slot></slot>    
        </div>
        <!-- Include VueWidgetContainer to add if AddElement -->
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

    methods: {
        addWidget () {
            this.layout.push({"x":0,"y":0,"w":2,"h":2,"i":"0"})
        }
    },

    created () {
        console.log('Created', this.$options.name)
        
        EventBus.$on(Event.LAYOUT_ADD, (layout) => {
            this.layout.push(layout)
        })

        EventBus.$on(Event.GRID_ITEM_ADD, (index) => {
            console.log('Widget added ', index)
            // this.grid = $('.grid-stack', this.$el).data('gridstack')
            EventBus.$emit(Event.GRID_ADD + index, $('.grid-stack', this.$el))
        })
    },

    mounted () {
        this.$nextTick(function () {
            // code that assumes this.$el is in-document
            console.log($('.grid-stack', this.$el))
            $('.grid-stack', this.$el).gridstack({
                width: 12
            })

            this.grid = $('.grid-stack', this.$el).data('gridstack')
            console.log(this.grid)
            EventBus.$emit(Event.GRID_ADD, this.grid)
        })
    }
}
</script>
