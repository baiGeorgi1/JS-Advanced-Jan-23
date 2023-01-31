function firstLast(aray) {
    if (aray.length < 2) {
        return Number(aray[0]) * 2;
    } else {
        return Number(aray.shift()) + Number(aray.pop());
    }
}

console.log(firstLast(['20', '30', '40'])); 
console.log(firstLast(['5'])); 