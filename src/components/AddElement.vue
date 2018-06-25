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
            i: 0
        }
    },

    methods: {
        addWidget () {
            this.$emit('layout-add', this.layout[this.i++])
        },

        addDatasource () {
            this.$emit('datasource-add', {'ds': i})
        }
    }
}
</script>
