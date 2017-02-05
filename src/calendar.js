'use strict';

class Calendar {
    constructor() {
        this._today = new Date();
    }
    get today() {
        return this._today;
    }
}

module.exports = Calendar;