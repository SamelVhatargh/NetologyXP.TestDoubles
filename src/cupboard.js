'use strict';

class Cupboard {
    isOpen() {
        // Database request
        //
        // return repository.hasAnyDrink();
        // ...
        //

        return true;
    };

    hasDrink(drinkName, volume) {
        // Database request
        //
        // repository.hasDrink(drinkName);
        // ...
        //

        return true;
    };

    getDrink(drinkName, volume) {
        // Database request
        //
        // repository.getDrinkBy(drinkName, volume);
        // ...
        //

        return volume;
    }
    getDrinkAmount(drinkName) {
        return 1000;
    }
}

module.exports = Cupboard;