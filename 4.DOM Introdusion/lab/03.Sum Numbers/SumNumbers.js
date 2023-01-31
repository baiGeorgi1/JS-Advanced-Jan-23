function calc() {
  // get first & second elem from browser console
  const firstNum = document.getElementById("num1").value;
  const secondNum = document.getElementById("num2").value;
  //   sum both
  const result = Number(firstNum) + Number(secondNum);
  //   return the result in "third window" - (it is only read)
  document.getElementById("sum").value = result;
}
