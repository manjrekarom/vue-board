<template>
    <div>
        <add-element v-if="editMode" @add-widget="addWidget"/>
        <grid-layout :layout="layout">
            <slot></slot>
        </grid-layout>
    </div>
</template>
<style>

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
            layout: []
        }
    },
    methods: {
        addWidget () {
            this.layout.push({"x":0,"y":0,"w":2,"h":2,"i":"0"})
        }
    }
}
</script>
