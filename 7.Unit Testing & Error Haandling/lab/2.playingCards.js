function cards(face, suits) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suitsType = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    }

    if (!faces.includes(face)) {
        throw new TypeError('Wrong face');
    } else if (!suitsType[suits]) {
        throw new TypeError('Wrong suit');
    }
    let cardType = {
        face,
        suitsType,
        toString() {
            return this.face + this.suitsType[suits];
        }
    }
    return cardType.toString();
}
let card = cards('3', 'H')
console.log(card);