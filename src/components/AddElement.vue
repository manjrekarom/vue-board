<template>
    <div class="add-element">
        <button @click="addDatasource">Add Datasource</button>
        <button @click="addWidget">Add Widget</button>
    </div>
</template>

<style scoped>
    .add-element {
        background-color: blueviolet; 
    }
</style>

<script>
import {EventBus, Event} from '../services/EventBus'

export default {
    name: 'AddElement',
    
    data () {
        return {
            layout: {"x":0, "y":0, "w":2,"h":1,"i":11},
            i: 0
        }
    },

    methods: {
        addWidget () {
            this.$emit('layout-add', this.layout)
        },

        addDatasource () {
            this.$emit('datasource-add', {'ds': this.i++})
        }
    }
}
</script>
