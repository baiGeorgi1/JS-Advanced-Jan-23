function extract(content) {
  let infoText = document.getElementById("content").textContent;
  const patern = /\(([\w\s]+)\)/g;
  let matches = infoText.match(patern);
  let result = [];
  for (const line of matches) {
    let paternO = new RegExp(/([\w\s]+)/g);
    let find = line.match(paternO);
    result.push(find);
  }
  return result.join("; ");
}
extract(
  "The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill)."
);
