function toggle() {
  const btn = document.querySelector(".button");
  const hiddenText = document.querySelector("#extra");
  if (btn.textContent === "More") {
    btn.textContent = "Less";
    hiddenText.style.display = "block";
  } else {
    btn.textContent = "More";
    hiddenText.style.display = "none";
  }
}
