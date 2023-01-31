function extractText() {
  const item = Array.from(document.getElementById("items").children);
  const result = item.map((li) => li.textContent).join("\n");
  document.getElementById("result").value = result;
}
