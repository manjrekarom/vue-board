<template>
    <div class="add-element">
        <button>Add Dataset</button>
        <button @click="addWidget">Add Widget</button>
    </div>
</template>
<style scoped>
    .add-element {
        background-color: blueviolet; 
    }
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
