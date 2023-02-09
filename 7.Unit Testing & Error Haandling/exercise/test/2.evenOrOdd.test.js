const isOddOrEven = require('../2.evenOrOdd.js');
const { assert } = require('chai');

describe('isOddOrEven function main test', () => {
    it('return undefined if param is number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });
    // it('The string length = 0 ', () => {
    //     assert.equal(isOddOrEven(''), undefined)

    // });
    it('return even when length % 2 ==0', () => {
        assert.equal(isOddOrEven('Hi'), 'even');
    });
    it('return odd', () => {
        assert.equal(isOddOrEven('new'), 'odd');
    });

});

