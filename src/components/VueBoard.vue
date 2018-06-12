<template>
    <grid-layout>

    </grid-layout>
</template>
<style>

</style>
<script>
import {GridLayout, GridItem} from 'vue-grid-layout'

export default {
    name: 'VueBoard',
    components: {
        GridLayout,
        GridItem
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
    }    
}
</script>

