function sortByTwoCrit(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    return arr.join('\n')
}
console.log(sortByTwoCrit(['alpha', 'beta', 'gamma']));
console.log(sortByTwoCrit(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));