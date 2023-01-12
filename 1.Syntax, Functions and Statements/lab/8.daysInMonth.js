function daysInMonth(month, year) {

    const years = new Date(year, month, 0);
    const day = years.getDate()

    console.log(day)
}
daysInMonth(1, 2012);
daysInMonth(2, 2021);