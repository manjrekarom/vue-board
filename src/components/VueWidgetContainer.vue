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

import Layout from '../services/Layout'
import EventBus from '../services/EventBus'

export default {
    name: 'VueWidgetContainer',
    components: {
        GridItem
    },
    props: ['x', 'y', 'h', 'w', 'i'],
    data () {
        return {
            
        }
    },
    created () {
        this.x
    }
}
</script>
