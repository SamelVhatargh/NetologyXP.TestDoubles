'use strict';

class CupboardStub {
    constructor() {
        this._locked = false;
        this._whiskyAmount = 1000;
    }
    set locked(value) {
        this._locked = value;
    }
    setDrinkAmount(drinkName, volume) {
        this._whiskyAmount = volume;
    }
    getDrinkAmount(drinkName) {
        return this._whiskyAmount;
    }

    isOpen() {
        return !this._locked;
    };

    hasDrink(drinkName, volume) {
        if (this.getDrinkAmount(drinkName) === 0) {
            return false;
        }
        return true;
    };

    getDrink(drinkName, volume) {
        return volume;
    }
}

module.exports = CupboardStub;