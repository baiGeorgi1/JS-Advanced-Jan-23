function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  const findItem = document.getElementById("searchField");
  const rows = document.querySelectorAll("tbody tr");
  function onClick() {
    for (const row of rows) {
      row.classList.remove("select");
      if (findItem.value !== "" && row.textContent.includes(findItem.value)) {
        row.className = "select";
      }
    }
    findItem.value = "";
  }
}
