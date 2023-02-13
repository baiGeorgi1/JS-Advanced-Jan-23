function printDeckOfCards(arr) {
    const result = [];
    const newCards = [];
    for (const card of arr) {
        if (card.length == 3) {
            let cardFace = card.substring(0, 2);
            let cardSuit = card[2];
            newCards.push([cardFace, cardSuit]);
        } else {
            let cardFace = card[0];
            let cardSuit = card[1];
            newCards.push([cardFace, cardSuit]);
        }
    }
    newCards.forEach(e => {
        createCard(e[0], e[1]);
    });
    function createCard(face, suits) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suitsType = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663',
        };

        if (!faces.includes(face) || !suitsType.hasOwnProperty(suits)) {
            console.log(`Invalid card: ${face}${suits}`);
            return;
        }
        let cardType = {
            face,
            suitsType,
            toString() {
                return this.face + this.suitsType[suits];
            }
        };
        result.push(cardType.toString());
    }
    console.log(result.join(' '));
}
(printDeckOfCards(['5S', '3D', 'QD', '1C']));
