'use strict'

import axios from 'axios'

class Format {

    static get FORMATS () {
        return [Format.JSON, Format.XML, Format.CSV, Format.YAML];
    }

    static get JSON () {
        return 'JSON';
    }

    static get XML () {
        return 'XML';
    }

    static get CSV () {
        return 'CSV';
    }

    static get YAML () {
        return 'YAML';
    }
}

class Type {

    static get TYPES () {
        return [Type.ONCE, Type.INTERVAL, Type.WEBSOCKET];
    }

    static get ONCE () {
        return 'ONCE';
    }

    static get INTERVAL () {
        return 'INTERVAL';
    }

    static get WEBSOCKET () {
        return 'WEBSOCKET';
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
    
    constructor (
        name,
        uri,
        {
            options = {},
            format = Format.JSON,
            type = Type.INTERVAL,
            isDeviceShadow = true
        } = {}) {
        
        this.name = name
        this.uri = uri
        // console.log("options", options);
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
        return this._isDeviceShadow
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
        // console.log(format, Format.FORMATS.includes(format));
        if (Format.FORMATS.includes(format)) {
            this._format = format
        }
        else throw new InvalidFormatException();
    }

    set type (type) {
        if (Type.TYPES.includes(type)) {
            this._type = type
        }
        else throw new InvalidTypeException()
    }

    set isDeviceShadow (isDeviceShadow) {
        if (typeof isDeviceShadow === 'boolean') {
            this._isDeviceShadow = isDeviceShadow
        }
        else throw new TypeError('isDeviceShadow should be boolean')
    }
}



class DataFetcher {

    constructor (datasource) {
        this.datasource = datasource
    }

    get datasource () {
        return this._datasource
    }
    
    set datasource (datasource) {
        this._datasource = datasource
        
        if (this.datasource.options) {
            this._axios = axios.create({
                ... this.datasource.options,
                method: this.datasource.options.method || 'get',
                url: this.datasource.uri,
                headers: this.datasource.options.headers || {},
                timeout: this.datasource.options.timeout || 1000,
            })
        } else {
            this._axios = axios.create({
                url: this.datasource.uri
            })
        }
    }

    get httpClient () {
        return this._axios
    }

    fetch () {
        // TODO: Check for static values like arrays and return directly the array
        if (this.datasource.type === Type.ONCE) {
            // Configured axios object instead of default axios
            return this.httpClient(this.datasource.uri);
        }
        else if (this.datasource.type === Type.INTERVAL) {
            // Configured axios object instead of default axios
            return this.httpClient(this.datasource.uri);
        }
        return Promise.resolve(this.datasource);
    }
}

export {Datasource, DataFetcher, Format, Type, InvalidFormatException, 
    InvalidIsDeviceShadowException, InvalidTypeException}
