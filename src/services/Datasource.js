class Format {
    static get formats () {
        return ['JSON', 'XML', 'CSV', 'YAML']
    }

    static get JSON () {
        return 'JSON'
    }

    static get XML () {
        return 'XML'
    }

    static get CSV () {
        return 'CSV'
    }

    static get YAML () {
        return 'YAML'
    }
}

class Type {
    static get types () {
        return ['INTERVAL', 'WEBSOCKET']
    }

    static get INTERVAL () {
        return 'INTERVAL'
    }

    static get WEBSOCKET () {
        return 'WEBSOCKET'
    }
}

class InvalidFormatException extends Error {
    constructor() {
        super(`The message format specified is Invalid. 
        Please specify one amongst JSON, XML, YAML or CSV.`)
        this.name = 'InvalidFormatException'
    }
}

class InvalidIsDeviceShadowException extends Error {
    constructor() {
        super('isDeviceShadow should be boolean')
        this.name = 'InvalidIsDeviceShadowException'
    }
}

class InvalidTypeException extends Error {
    constructor() {
        super(`The type specified is Invalid.
        Should be one of INTERVAL or WEBSOCKET`)
        this.name = 'InvalidTypeException'
    }
}

class Datasource {
    constructor (name, url, format, type, isDeviceShadow) {
        this._name = name
        this._url = url
        this._format = format
        this._type = type
        this._isDeviceShadow = isDeviceShadow
    }

    // Getters
    get name () {
        return this._name
    }

    get url () {
        return this._url
    }

    get format () {
        return this._format
    }

    get type () {
        return this._type
    }

    get isDeviceShadow () {
        return this._isisDeviceShadow
    }

    // Setters
    set name (name) {
        this._name = name
    }

    set url (url) {
        // TODO: Probably add regex check
        this._url = url
    }

    set format (format) {
        if (Format.formats.includes(format)) { 
            this._format = format
        }
        else throw InvalidFormatException()
        
    }

    set type (type) {
        if (Type.types.includes(type)) {
            this._type = type
        }
        else throw InvalidTypeException()
    }

    set isDeviceShadow (isDeviceShadow) {
        if (typeof isDeviceShadow === 'boolean') {
            this._isDeviceShadow = this.isDeviceShadow
        }
        else throw InvalidIsDeviceShadowException()
    }
}

class DataFetcher {
    constructor (datasource) {
        this._datasource = datasource
    }

    fetch () {
        
    }
}

export {Datasource, DataFetcher, Format, Type}
