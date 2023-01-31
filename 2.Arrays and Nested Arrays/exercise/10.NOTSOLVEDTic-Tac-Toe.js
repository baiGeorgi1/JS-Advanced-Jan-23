function ticTacToe(moves) {
    let player = 0;

    const matrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let counter=1;


    for (const line of moves) {
        if(counter >9) {
            console.log("The game ended! Nobody wins :(");
            for (const line of matrix) {
                console.log(line.join(' '));
            }
            return;          
            }
        let [row, col] = line.split(' ');
        if (player % 2 == 0) {
            if (matrix[row][col] !== false) {
                console.log("This place is already taken. Please choose another!");
            } else {
                matrix[row][col] = 'x';
                counter++;
                player++;
            }
        } else {
            if (matrix[row][col] !== false) {
                console.log("This place is already taken. Please choose another!");
            } else {
                matrix[row][col] = 'o';
                counter++;
                player++;
            }

        }



    }


    
}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]

)