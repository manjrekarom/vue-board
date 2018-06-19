import Vue from 'vue'

const EventBus = new Vue()

class Event {
    static get VWC_ADDED () {
        return 'vwc-added'
    }
}

export {EventBus, Event}
