'use strict';

class Barmen {
    constructor(cupboard, smsService) {
        this._cupboard = cupboard;
        this._smsService = smsService;
    }

    pour(drinkName, volume, visitor, calendar) {
        if (!this._cupboard.isOpen()) {
            this._smsService.send('Cupboard is locked and I have no key');
            throw new Error("Sorry. I can't do anything");
        }

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