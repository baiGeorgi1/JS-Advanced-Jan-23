function solve() {
  const inputedText = document.getElementById("text").value;
  const convertion = document.getElementById("naming-convention").value;
  let result = inputedText.toLowerCase().split(" ");
  console.log(convertion);
  let output = "";

  const pascal = result.map((w) => w[0].toUpperCase() + w.slice(1)).join("");
  console.log(pascal);

  if (convertion === "Pascal Case") {
    output = pascal;
  } else if (convertion === "Camel Case") {
    output = pascal[0].toLowerCase() + pascal.slice(1);
  } else {
    output = "Error!";
  }
  document.getElementById("result").textContent = output;
}
