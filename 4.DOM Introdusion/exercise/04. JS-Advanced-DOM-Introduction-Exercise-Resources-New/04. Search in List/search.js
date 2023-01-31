function search() {
  const userSearch = document.getElementById("searchText").value;
  const listItems = Array.from(document.querySelectorAll("#towns li"));
  const foundItems = document.getElementById("result");
  let counter = 0;
  for (const town of listItems) {
    // Proverka dali ima syvpadenie i search-a ne e prazen
    if (town.textContent.includes(userSearch) && userSearch.length !== 0) {
      // add style on text
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      counter++;
    } else {
      //remove style
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
    }
  }
  foundItems.textContent = `${counter} matches found`;
}
