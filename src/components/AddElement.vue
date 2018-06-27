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
import Events from '../services/Events'

export default {
    name: 'AddElement',
    
    data () {
        return {

        }
    },

    methods: {
        addWidget () {
            
        },

        addDatasource () {
            this.$emit('datasource-add', {'ds': this.i++})
        }
    }
}
</script>
