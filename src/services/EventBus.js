import Vue from 'vue'

const EventBus = new Vue()

class Event {
    static get LAYOUT_ADD () {
        return 'LAYOUT_ADD'
    }

    static get GRID_ADD () {
        return 'GRID_ADD'
    }

    static get GRID_ITEM_ADD () {
        return 'GRID_ITEM_ADD'
    }
}
export {EventBus, Event}
