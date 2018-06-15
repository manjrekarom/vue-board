import Vue from 'vue'

class EventBus extends Vue {
    constructor() {
        super() 
    }

    static get LAYOUT_ADD () {
        return 'layout_add'
    }
}

export default new EventBus
