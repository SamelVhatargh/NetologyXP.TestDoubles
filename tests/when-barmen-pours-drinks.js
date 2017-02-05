"use strict";

var assert = require('chai').assert;
var Barmen = require('../src/barmen');
var Visitor = require('../src/visitor');
var Cupboard = require('../src/cupboard');
var CalendarStub = require('./fakes/calendar-stub');
var VisitorMock = require('./fakes/visitor-mock');

suite('When barmen pours drinks', function () {
    let visitor = {};
    let barmen = {};
    let cupboard = {};
    let calendar = {};

    setup(function () {
        cupboard = new Cupboard();
        calendar = new CalendarStub();
        visitor = new Visitor();
        visitor.sober();
    });

    suite('cupboard is full', function () {
        test('barmen pours 200 milliliters of whisky in my glass', function () {

        });

        test('barmen pours x2 volume on a Thursday', function () {

        });

        test('barmen pours x3 volume on my birthday', function () {
            visitor.birthday = new Date(1757, 3, 3);
            calendar.today = visitor.birthday;
            let barmen = new Barmen(cupboard);

            let volumeInGlass = barmen.pour('whisky', 100, visitor, calendar);

            assert.equal(3 * 100, volumeInGlass);
        });

        test('I receive a check', function () {
            let barmen = new Barmen(cupboard);
            let visitor = new VisitorMock();

            barmen.pour('whisky', 100, visitor, calendar);

            assert.equal('whisky - 100', visitor.check);
        });
    });

    suite('cupboard is empty', function () {
        test('barmen rejects for a drink', function () {

        });

        test('sms to buy drink is sent to boss', function () {

        });
    });

});
