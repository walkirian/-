function calc(op) {
  let result;
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  switch (op) {
    case "plus":
      result = num1 + num2;
      break;
    case "minus":
      result = num1 - num2;
      break;
    case "times":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
  }
  document.getElementById("result").textContent = result;
}
