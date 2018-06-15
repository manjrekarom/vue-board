class Layout {
    constructor (x, y, w, h, i) {
        this._x = x
        this._y = y
        this._w = w
        this._h = h
        this._i = i
    }

    // getters
    get x () {
        return this._x
    }

    get y () {
        return this._y
    }

    get w () {
        return this._w
    }

    get h () {
        return this._h
    }

    get i () {
        return this._i
    }
    
    // setters
    set x (x) {
        this._x = x
    }

    set y (y) {
        this._y = y
    }

    set w (w) {
        this._w = w
    }

    set h (h) {
        this._h = h
    }

    set i (i) {
        this._i = i
    }
}

export default Layout