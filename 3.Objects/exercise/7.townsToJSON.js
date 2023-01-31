function towns(arr) {
  const patern = /[A-Za-z]+/g;
  let [name, lat, long] = arr.shift().match(patern);
  const result = [];

  for (const line of arr) {
    const obj = {};
    let token = line.match(/[A-z]+ ?[A-z]+|[0-9]+.?[0-9]+/g);
    let city = token[0];
    let coord1 = Number(token[1]).toFixed(2);
    let coord2 = Number(token[2]).toFixed(2);
    obj[name] = city;
    obj[lat] = Number(coord1);
    obj[long] = Number(coord2);
    result.push(obj);
  }
  return JSON.stringify(result);
}
console.log(towns([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]));
// console.log(towns([
//   "| Town | Latitude | Longitude |",
//   "| Veliko Turnovo | 43.0757 | 25.6172 |",
//   "| Monatevideo | 34.50 | 56.11 |",
// ]))
