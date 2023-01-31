function sumTable() {
  let sum = 0;
  const table = document.querySelectorAll("table tr");
  for (let i = 1; i < table.length; i++) {
    const coloumn = table[i].children;
    const price = coloumn[coloumn.length - 1].textContent;
    sum += Number(price);
  }
  document.getElementById("sum").textContent = sum;
}
