const sum = require('./4.sumOfNumbers');
const { expect } = require('chai');

describe('Main test => sumOfNumbers', () => {
    it('if the sum NAN', function () {
        expect(() => sum(1, 'a')).throw();
    });
    it('if the sum NAN', function () {
        expect(() => sum(1, undefined)).throw();
    });
    it('if the sum NAN', function () {
        expect(() => sum(1, null)).throw();
    });
    it('if the sum NAN', function () {
        expect(() => sum(1, [])).throw();
    });
    it('if the sum NAN', function () {
        expect(() => sum(1, {})).throw();
    });
    it('if the sum NAN', function () {
        expect(() => sum(null, 1)).throw();
    });


});

