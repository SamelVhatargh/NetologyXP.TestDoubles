'use strict';

class Barmen {
    constructor(cupboard) {
        this._cupboard = cupboard;
    }

    pour(drinkName, volume, visitor) {
        if (volume < 0) {
            throw new Error('Invalid volume of whisky');
        }

        if (!this._cupboard.hasDrink(drinkName, volume)) {
            throw new Error('Not enough ' + drinkName);
        }

        if (visitor.isDrunk()) {
            throw new Error('You are drunk. Come back later.');
        }

        return this._cupboard.getDrink(drinkName, volume);
    }
}

module.exports = Barmen;