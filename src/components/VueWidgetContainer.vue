<template>
    <div class="vue-widget-container">
        <grid-item :x="x" :y="y" :w="w" :h="h" :i="i"></grid-item>
    </div>
</template>
<style scoped>
    .vue-widget-container {
        background-color: darkgrey;
    }
</style>
<script>
import {GridItem} from 'vue-grid-layout';
import gridstack from 'gridstack'
import Layout from '../services/Layout'
import EventBus from '../services/EventBus'

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
        let layout = new Layout(this.x, this.y, this.w, this.h)
        GridStack
    }
}
</script>
