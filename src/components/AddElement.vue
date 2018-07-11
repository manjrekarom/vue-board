<template>
    <div class="add-element">
        <div class="buttons">
            <button @click="addDatasource">Add Datasource</button>
            <button @click="addWidget">Add Widget</button>
            <button @click="helloWorld">Hello World</button>
        </div>
        <div class="modals">
            <datasource-modal/>
            <modal name="hello-world">
                Hello world!
            </modal>
            <v-dialog name="add-datasource"/>
            <v-dialog name="add-widget"/>
        </div>
    </div>
</template>

<style scoped>
    .buttons {
        background-color: blueviolet; 
    }
</style>

<script>
import DatasourceModal from './modals/DatasourceModal'
import Events from '../services/Events'

export default {
    name: 'AddElement',
    
    components: {
        DatasourceModal
    },

    data () {
        return {

        }
    },

    methods: {
        addWidget () {
            this.$modal.show('dialog', {
                title: 'Add Widget',
                text: 'You are too awesome',
                name: 'add-widget',
                buttons: [
                    {
                        title: 'Deal with it',
                        handler: () => { alert('Woot!') }
                    },
                    {
                        title: '',       // Button title
                        default: true,    // Will be triggered by default if 'Enter' pressed.
                        handler: () => {} // Button click handler
                    },
                    {
                        title: 'Close'
                    }
                ]
            })
        },

        helloWorld () {
            this.$modal.show('hello-world')
        },

        addDatasource () {
            this.$modal.show('datasource-modal')

            this.$emit(Events.ADD_DATASOURCE, {'ds': this.i++})
        }
    }
}
</script>
