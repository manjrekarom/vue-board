<template>
    <div class="vue-board">
        <add-element v-if="editMode" @add-widget="addWidget"/>
        <grid-layout :layout="layout"
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
import {GridLayout, GridItem} from 'vue-grid-layout'
import AddElement from './AddElement'

export default {
    name: 'VueBoard',
    components: {
        GridLayout,
        GridItem,
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
            layout: [{"x":0,"y":0,"w":2,"h":2,"i":"0"},
	                {"x":2,"y":0,"w":2,"h":4,"i":"1"},
	                {"x":4,"y":0,"w":2,"h":5,"i":"2"}]
        }
    },
    methods: {
        addWidget () {
            this.layout.push({"x":0,"y":0,"w":2,"h":2,"i":"0"})
        }
    }
}
</script>
