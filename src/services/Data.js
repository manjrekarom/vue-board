'use strict'

import axios from 'axios'

class Format {

    static get FORMATS () {
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

    static get TYPES () {
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
    
    constructor (name, 
                uri, 
                options = {}, 
                format = Format.JSON, 
                type = Type.INTERVAL, 
                isDeviceShadow) {

        this.name = name
        this.uri = uri
        this.options = options
        this.format = format
        this.type = type
        this.isDeviceShadow = isDeviceShadow
    }

    // Getters
    get name () {
        return this._name
    }

    get uri () {
        return this._uri
    }

    get options () {
        return this._options
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

    set uri (uri) {
        // TODO: Probably add regex check
        this._uri = uri
    }

    set options (options) {
        this._options = options
    }

    set format (format) {
        if (Format.FORMATS.includes(format)) { 
            this._format = format
        }
        else throw InvalidFormatException()
        
    }

    set type (type) {
        if (Type.TYPES.includes(type)) {
            this._type = type
        }
        else throw InvalidTypeException()
    }

    set isDeviceShadow (isDeviceShadow) {
        if (typeof isDeviceShadow === 'boolean') {
            this._isDeviceShadow = isDeviceShadow
        }
        else throw InvalidIsDeviceShadowException()
    }
}

class DataFetcher {

    constructor (datasource) {
        this._datasource = datasource

        if (this.datasource.options) {
            this._axios = axios.create({
                baseURL: this.datasource.uri,
                headers: this.datasource.options.headers || {},
                timeout: this.datasource.options.timeout || 2000
            })
        } else {
            this._axios = axios.create({
                baseURL: this.datasource.uri
            })
        }
    }

    get datasource () {
        return this._datasource
    }
    
    set datasource (datasource) {
        this._datasource = datasource
        
        if (this.datasource.options) {
            this._axios = axios.create({
                baseURL: this.datasource.uri,
                headers: this.datasource.options.headers || {},
                timeout: this.datasource.options.timeout || 1000
            })
        } else {
            this._axios = axios.create({
                baseURL: this.datasource.uri
            })
        }
    }

    get axios () {
        return this._axios
    }

    fetch () {
        // TODO: Check for static values like arrays and return directly the array
        if (this.datasource.type === Type.INTERVAL) {
            // Configured axios object instead of default axios
            return this.axios.get(this.datasource.uri);
        }
        return Promise.resolve(this.datasource)
    }
}

export {Datasource, DataFetcher, Format, Type}
