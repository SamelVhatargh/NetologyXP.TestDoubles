"use strict";

var assert = require('chai').assert;
var Barmen = require('../src/barmen');
var Visitor = require('../src/visitor');
var Cupboard = require('../src/cupboard');
var CalendarStub = require('./fakes/calendar-stub');
var CupboardStub = require('./fakes/cupboard-stub');
var VisitorMock = require('./fakes/visitor-mock');
var SmsServiceMock = require('./fakes/sms-service-mock');

suite('When barmen pours drinks', function () {
    let visitor = {};
    let barmen = {};
    let calendar = {};
    let smsService = {};

    setup(function () {
        calendar = new CalendarStub();
        smsService = new SmsServiceMock();
        visitor = new Visitor();
        visitor.sober();
    });

    suite('cupboard is full', function () {
        let fullCupboard = {};

        setup(function () {
            fullCupboard = new CupboardStub();
        });

        test('barmen pours 200 milliliters of whisky in my glass', function () {

        });

        test('barmen pours x2 volume on a Thursday', function () {

        });

        test('barmen pours x3 volume on my birthday', function () {
            visitor.birthday = new Date(1757, 3, 3);
            calendar.today = visitor.birthday;
            let barmen = new Barmen(fullCupboard, smsService);

            let volumeInGlass = barmen.pour('whisky', 100, visitor, calendar);

            assert.equal(3 * 100, volumeInGlass);
        });

        test('I receive a check', function () {
            let barmen = new Barmen(fullCupboard, smsService);
            let visitor = new VisitorMock();

            barmen.pour('whisky', 100, visitor, calendar);

            assert.equal('whisky - 100', visitor.check);
        });
    });

    suite('cupboard is locked', function () {
        let lockedCupboard = {};
        setup(function () {
            lockedCupboard = new CupboardStub();
            lockedCupboard.locked = true;
        });

        test('sms that cupboard is locked is sent to boss', function () {
            let barmen = new Barmen(lockedCupboard, smsService);

            runSafely(() => {
                barmen.pour('whisky', 100, visitor, calendar);
            });

            assert.equal('Cupboard is locked and I have no key', smsService.lastMessage);
        });
    });

    suite('cupboard is out of whisky', function () {
        let cupboardWithoutWhisky = {};
        setup(function () {
            cupboardWithoutWhisky = new CupboardStub();
            cupboardWithoutWhisky.setDrinkAmount('whisky', 0);
        });

        test('sms that cupboard is locked is sent to boss', function () {
            let barmen = new Barmen(cupboardWithoutWhisky, smsService);

            runSafely(() => {
                barmen.pour('whisky', 100, visitor, calendar);
            });

            assert.equal('We need more whisky', smsService.lastMessage);
        });
    });


    suite('cupboard is empty', function () {
        test('barmen rejects for a drink', function () {

        });

        test('sms to buy drink is sent to boss', function () {

        });
    });

});

function runSafely(action) {
    try {
        action()
    } catch (e) {

    }
}