function evenPos(aray) {
    const newArr = [];
    for (el = 0; el < aray.length; el++) {
        if (el % 2 == 0) {
            newArr.push(aray[el]);
        }
    }
    return (newArr.join(' '));
}
evenPos(['20', '30', '40', '50', '60']);
evenPos(['5', '10']);
