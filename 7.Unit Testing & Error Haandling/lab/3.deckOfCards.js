function printDeckOfCards(cards) {
    const newCards = [];
    function createCard(face, suits) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suitsType = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        }

        if (!faces.includes(face)) {
            try {
                throw new TypeError(`Invalid card: ${face}${suits}`);
            } catch (err) {
                return `Invalid card: ${face}${suits}`;
            }
        } else if (!suitsType[suits]) {
            try {
                throw new TypeError(`Invalid card: ${face}${suits}`);
            } catch (err) {
                return `Invalid card: ${face}${suits}`;
            }
        }

        let cardType = {
            face,
            suitsType,
            toString() {
                return this.face + this.suitsType[suits];
            }
        }
        newCards.push(cardType)
    }
    for (const card of cards) {
        let suit = card[card.length - 1];
        let face = card.substring(0, card.length - 1);

        createCard(face, suit);
    }
    return newCards.toString()
}
console.log(printDeckOfCards(['AS', '1D', 'KH', '2C']))
