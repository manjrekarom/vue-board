<template>
    <div class="vue-widget-container">
        <div class="grid-stack-item"
            :data-gs-x="x"
            :data-gs-y="y"
            :data-gs-width="w"
            :data-gs-height="h"
            :i="i">
            <div class="grid-stack-item-content">
                <slot></slot>
            </div>
        </div>
    </div>
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
            
        }
    },

    mounted () {
        this.$nextTick(function () {
            // code that assumes this.$el is in-document
            EventBus.$emit('NEW_ITEM', this.i);
            EventBus.$on('NEW_ITEM_RES', (obj) => {
                if (obj.i == this.i) {
                    obj.grid.data('gridstack')
                }
            });
        })
        console.log('Mounted', this.$options.name)
        let layout = new Layout(this.x, this.y, this.w, this.h, this.i)
        EventBus.$emit(Event.LAYOUT_ADD, layout)
    }
}
</script>
