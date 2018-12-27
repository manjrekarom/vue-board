class Widget {
    static get TYPES () {
        return [this.LINE, this.GAUGE, this.SLIDER]
    }

    static get LINE () {
        return 'line'
    }

    static get GAUGE () {
        return 'gauge'
    }

    static get SLIDER () {
        return 'slider'
    }

    constructor (name, datasource, widgetType) {
        this.name = name
        this.datasource = datasource
        this.widgetType = widgetType
    }

    // Getters
    get name () {
        return this._name
    }

    get datasource () {
        return this._datasource
    }

    get widgetType () {
        return this._widgetType
    }

    set name (name) {
        this._name = name
    }

    set datasource (datasource) {
        // TODO: Probably add regex check
        this._datasource = datasource
    }

    set widgetType (widgetType) {
        this._widgetType = widgetType
    }

}

export default Widget
