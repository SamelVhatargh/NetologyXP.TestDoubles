'use strict';

class CalendarStub {
    constructor() {
        this._today = new Date();
    }
    set today(value) {
        this._today = value;
    }
    get today() {
        return this._today;
    }
}

module.exports = CalendarStub;