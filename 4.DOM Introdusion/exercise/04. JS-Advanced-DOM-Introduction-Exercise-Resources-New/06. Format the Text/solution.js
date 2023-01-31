function solve() {
  const textArr = document
    .getElementById("input")
    .value.split(".")
    .filter((s) => s !== "");
  let count = 0;
  const resultDiv = document.getElementById("output");
  const temp = [];
  while (textArr.length > 0) {
    let textP = textArr.splice(0, 3).join(". ") + ".";
    let p = document.createElement("p");
    p.textContent = textP;
    resultDiv.appendChild(p);
  }
  //console.log(textArr);
}
