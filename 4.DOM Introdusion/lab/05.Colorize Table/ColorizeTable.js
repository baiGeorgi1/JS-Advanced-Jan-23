function colorize() {
  let info = document.querySelectorAll("table tr");
  let index = 0;
  for (const line of info) {
    index++;
    if (index % 2 == 0) {
      line.style.background = "teal";
    }
  }
}
