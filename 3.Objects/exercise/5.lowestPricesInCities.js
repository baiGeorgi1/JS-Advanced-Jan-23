function lowestPrice(arr) {
  const obj = {};
  for (const line of arr) {
    let [town, product, price] = line.split(" | ");
    if (!obj[product]) {
      obj[product] = {};
    }
    obj[product][town] = Number(price);
  }
  let result = [];
  for (const key in obj) {
    let sorted = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
    let [city, price] = sorted[0];
    result.push(`${key} -> ${price} (${city})`);
  }
  return result.join("\n");
}
console.log(
  lowestPrice([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
  ])
);
