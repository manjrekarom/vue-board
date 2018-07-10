<template>
    <div class="add-element">
        <div class="buttons">
            <button @click="addDatasource">Add Datasource</button>
            <button @click="addWidget">Add Widget</button>
        </div>
        <div class="modals">
            <modal name="add-datasource">
                Add Datasource
            </modal>
        </div>
    </div>
</template>

<style scoped>
    .buttons {
        background-color: blueviolet; 
    }
</style>

<script>
import AddDatasource from './modals/AddDatasource'
import Events from '../services/Events'

export default {
    name: 'AddElement',
    
    components: {
        AddDatasource
    },

    data () {
        return {

        }
    },

    methods: {
        addWidget () {
            
        },

        addDatasource () {
            this.$modal.show('add-datasource')
            this.$emit('datasource-add', {'ds': this.i++})
        }
    }
}
</script>
