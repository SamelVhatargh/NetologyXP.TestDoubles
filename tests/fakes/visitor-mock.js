'use strict';

class VisitorMock {
    set check(value) {
        this._check = value;
    }
    get check() {
        return this._check;
    }
    get birthday() {
        return null;
    }
}

module.exports = VisitorMock;