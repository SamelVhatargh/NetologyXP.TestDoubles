'use strict';
class SmsServiceMock {
    constructor() {
        this._lastMessage = false;
    }
    get lastMessage() {
        return this._lastMessage;
    }
    send (message) {
        this._lastMessage = message;
    }
}

module.exports = SmsServiceMock;
