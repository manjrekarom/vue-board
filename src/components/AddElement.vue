<template>
    <div>
        <button>Add Dataset</button>
        <button @click="addWidget">Add Widget</button>
    </div>
</template>
<style>

</style>
<script>
export default {
    name: 'AddElement',
    data () {
        return {

        }
    },
    methods: {
        addWidget () {
            this.$emit('add-widget')
        }
    }
}
</script>
