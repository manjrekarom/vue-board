<template>
    <!-- <div class="vue-widget-container"> -->
        <div class="grid-stack-item"
            :data-gs-x="x"
            :data-gs-y="y"
            :data-gs-width="w"
            :data-gs-height="h"
            :i="i">
            <div class="grid-stack-item-content">
                {{i}}
                <slot></slot>
            </div>
        </div>
    <!-- </div> -->
</template>

<style scoped>
    .vue-widget-container {
        background-color: darkgrey;
    }
</style>

<script>
import {GridItem} from 'vue-grid-layout'
import $ from 'jquery'
import gridstack from 'gridstack'

import Layout from '../services/Layout'
import {Event, EventBus} from '../services/EventBus'

export default {
    name: 'VueWidgetContainer',

    components: {
        GridItem
    },

    props: ['x', 'y', 'w', 'h', 'i'],

    data () {
        return {
            count: 0
        }
    },

    created () {
        
    },

    mounted () {
        this.$nextTick(function () {
            // code that assumes this.$el is in-document 
            console.log(this.count++)           
            EventBus.$once(Event.GRID_ADD + this.i, (el) => {
                let grid = el.data('gridstack')
                console.log($('.grid-stack-item', this.$el)) 
                grid.makeWidget($('.grid-stack-item', this.$el))
            })
            EventBus.$emit(Event.GRID_ITEM_ADD, this.i)
        })

        console.log('Mounted', this.$options.name)
        let layout = new Layout(this.x, this.y, this.w, this.h, this.i)
        EventBus.$emit(Event.LAYOUT_ADD, layout)
    }
}
</script>
