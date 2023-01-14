function squareStars(input) {
    if (input == undefined) {
        let line = '* * * * *';
        for (let index = 0; index < 5; index++) {
            console.log(line);
        }
    } else {
        let starsInLine = '';
        for (let i = 0; i < input; i++) {
            starsInLine += '* '
        }
        for (let row = 0; row < input; row++) {
            console.log(starsInLine);
        }
    }
}
squareStars(1);
squareStars();

