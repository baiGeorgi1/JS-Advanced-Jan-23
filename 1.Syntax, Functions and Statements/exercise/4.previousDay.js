function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day - 1);
    let curentYear = date.getFullYear();
    let curentMonth = date.getMonth() + 1;
    let prevDay = date.getDate();

    return (`${curentYear}-${curentMonth}-${prevDay}`);
}

console.log(previousDay(2016, 9, 1)); ;
//previousDay(2015, 5, 10);
