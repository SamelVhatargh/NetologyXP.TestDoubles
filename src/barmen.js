'use strict';

class Barmen {
    constructor(cupboard) {
        this._cupboard = cupboard;
    }

    pour(drinkName, volume, visitor, calendar) {
        if (!this._cupboard.hasDrink(drinkName, volume)) {
            throw new Error('Sorry. Not enough ' + drinkName);
        }

        if (visitor.birthday !== null) {
            if (visitor.birthday.getMonth() === calendar.today.getMonth()
                && visitor.birthday.getDay() === calendar.today.getDay()) {
                volume = 3 * volume;
            }
        }

        visitor.check = drinkName + ' - ' + volume;

        return this._cupboard.getDrink(drinkName, volume);
    }
}

module.exports = Barmen;