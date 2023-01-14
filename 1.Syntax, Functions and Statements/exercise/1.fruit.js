function marketPlace(type, grams, price) {
    const fruit = type;
    const weight = grams / 1000;
    let money = weight * price;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
marketPlace('orange', 2500, 1.80);
marketPlace('apple', 1563, 2.35);
