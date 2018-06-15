class Layout {
    _count = 0 
    constructor (x, y, w, h) {
        this._x = x
        this._y = y
        this._w = w
        this._h = h
        this._i = _count++
    }

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

    static get count () {
        return _count
    }
    
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
