'use strict';

class Visitor {
    constructor() {
        this.totalDrinkVolume = 0;
        this._birthday = null;
    }

    set check(value) {
        this._check = value;
    }

    drink(volume) {
        this.totalDrinkVolume += volume;
        return volume;
    }

    sober() {
        this.totalDrinkVolume = 0;
    }

    isTotallyDrunk() {
        return this.totalDrinkVolume > 150;
    }

    getTotallyDrunk() {
        return this.totalDrinkVolume;
    }

    set birthday(value) {
        this._birthday = value;
    }
    get birthday() {
        return this._birthday;
    }
}

module.exports = Visitor;