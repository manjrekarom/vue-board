<style scoped>
    .vue-widget-container {
        background-color: darkgrey;
    }
</style>

<script>
import GridItem from './GridItem.vue'

import Layout from '../services/Layout'
import {Event, EventBus} from '../services/EventBus'

export default {
    name: 'VueWidgetContainer',
    
    extends: GridItem,
    
    created () {
        console.log('VWC created')
        let layout = new Layout(this.x, this.y, this.w, this.h, this.i) 
        EventBus.$emit(Event.VWC_ADDED, layout)
    },

    mounted () {
        console.log('VWC mounted')
    }
}
</script>
