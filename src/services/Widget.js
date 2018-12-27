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

    constructor (name, datasource, type) {
        this.name = name
        this.datasource = datasource
        this.type = type
    }

    // Getters
    get name () {
        return this._name
    }

    get datasource () {
        return this._datasource
    }

    get type () {
        return this._type
    }

    set name (name) {
        this._name = name
    }

    set datasource (datasource) {
        // TODO: Probably add regex check
        this._datasource = datasource
    }

    set type (type) {
        this._type = type
    }

}

export default Widget
