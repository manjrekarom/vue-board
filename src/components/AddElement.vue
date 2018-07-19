<template>
    <div class="add-element">
        <div class="buttons">
            <button @click="addDatasource">Add Datasource</button>
            <button @click="addWidget">Add Widget</button>
        </div>
        <div class="modals">
            <datasource-modal/>
            <widget-modal :datasources="datasources"/>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
import DatasourceModal from './modals/DatasourceModal'
import WidgetModal from './modals/WidgetModal'
import Events from '../services/Events'
import { VueGoodTable } from 'vue-good-table';


export default {
    name: 'AddElement',
    
    components: {
        DatasourceModal,
        WidgetModal,
        VueGoodTable
    },

    props: {
        datasources: {
            type: Array,
            required: true,
            default: () => []
        }
    },

    data () {
        return {

        }
    },

    methods: {

        addWidget () {
            this.$modal.show('widget-modal')
        },

        addDatasource () {
            this.$modal.show('datasource-modal')
        }
    }
}
</script>
