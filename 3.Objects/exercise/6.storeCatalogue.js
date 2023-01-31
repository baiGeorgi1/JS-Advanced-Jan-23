function catalog(arr) {
  const sortedArr = arr.sort((a, b) => a.localeCompare(b));
  let firstLetter = "";
  for (const line of sortedArr) {
    let [product, price] = line.split(" : ");
    if (firstLetter !== product[0]) {
      console.log(product[0]);
      firstLetter = product[0];
    }
    console.log(`  ${product}: ${price}`);
  }
}
catalog([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
