function wordsUpper(string) {
    const patern = /[A-z0-9]+/g;
    let words = string.match(patern);
    const upperWords = [];
    for (const word of words) {
        let newWord = word.toUpperCase();
        upperWords.push(newWord)
    }
    console.log(upperWords.join(', '));
}
wordsUpper('hello');
wordsUpper('Hi, how are you?');