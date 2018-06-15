import Vue from 'vue'

const EventBus = new Vue()

class Event {
    static get LAYOUT_ADD () {
        return 'LAYOUT_ADD'
    }
}
export {EventBus, Event}
