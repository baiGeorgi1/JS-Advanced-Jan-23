const mathEnforcer = require('../4.mathEnforcer.js');
const { assert } = require('chai');
const { expect } = require('chai');
// o	If both parameters are numbers, the function should return their sum. 
describe('mathEnforcer', () => {
    describe('Inner function (addFiveNum)', () => {
        it('If param is not a number', () => {
            assert(mathEnforcer.addFive('h') === undefined);
            assert(mathEnforcer.addFive([]) === undefined);
            assert(mathEnforcer.addFive({}) === undefined);
            assert(mathEnforcer.addFive(null) === undefined);
            assert(mathEnforcer.addFive(undefined) === undefined);
        });
        it('If the param is Number add 5', () => {
            assert(mathEnforcer.addFive(1) === 6);
            assert(mathEnforcer.addFive(-1) === 4);
            assert(mathEnforcer.addFive(1.5) === 6.50);
        });
    });
    describe('subtractTen(num) - Function that accepts a single parameter', () => {
        it('If param is not a number', () => {
            assert(mathEnforcer.subtractTen('h') === undefined);
            assert(mathEnforcer.subtractTen([]) === undefined);
            assert(mathEnforcer.subtractTen({}) === undefined);
            assert(mathEnforcer.subtractTen(null) === undefined);
        });
        it('If the param is Number subtract 10', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.50);
            assert(mathEnforcer.subtractTen(-10) === -20);
        });
    });
    describe('Inner function (sum(num1, num2))', () => {
        it('If first param is not a number', () => {
            assert(mathEnforcer.sum('', 1) === undefined);
            assert(mathEnforcer.sum([], 1) === undefined);
            assert(mathEnforcer.sum({}, 1) === undefined);
            assert(mathEnforcer.sum(null, 1) === undefined);
        });
        it('If second param is not a number', () => {
            assert(mathEnforcer.sum(1, '') === undefined);
            assert(mathEnforcer.sum(1, []) === undefined);
            assert(mathEnforcer.sum(1, {}) === undefined);
            assert(mathEnforcer.sum(1, null) === undefined);
        });
        it('Both are numbers => return the result', () => {
            expect(mathEnforcer.sum(0.1, 0.2)).to.closeTo(0.3, 0.0002);
            assert(mathEnforcer.sum(-1, 1.5) === 0.50);
            assert(mathEnforcer.sum(-1, -2) === -3);
        });

    });
});