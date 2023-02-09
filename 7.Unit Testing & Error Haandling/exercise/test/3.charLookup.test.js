const lookupChar = require('../3.charLookup.js');
const { assert } = require('chai');

describe('Main testing on func charLooup func', () => {
    it('If first param is not a string', () => {
        assert(lookupChar('Something', 1) === 'o');
    });
    it('If the string is empty', () => {
        assert(lookupChar('s', 0) === 's');
    });
    it('If index is bigger than length', () => {
        assert(lookupChar('hi', 2) === 'Incorrect index')
    });
    it('If index is smaller than zerro', () => {
        assert(lookupChar('hi', -1) === 'Incorrect index')
    });
    it('If first param is not a string', () => {
        assert(lookupChar(1, 1) == undefined);
        assert(lookupChar([], 1) == undefined);
        assert(lookupChar({}, 1) == undefined);
        assert(lookupChar(undefined, 1) == undefined);
        assert(lookupChar(null, 1) == undefined);
    });
    it('if second param is not a number', () => {
        assert(lookupChar('hi', '1') == undefined);
        assert(lookupChar('hi', []) == undefined);
        assert(lookupChar('hi', {}) == undefined);
        assert(lookupChar('hi', true) == undefined);
        assert(lookupChar('hi', false) == undefined);
    });
    it('if second param is not a integer', () => {
        assert(lookupChar('hi', 1.5) == undefined);

    });
});
