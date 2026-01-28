// Получаем элементы
const display = document.getElementById("num1");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = null;
let firstOperand = null;
let resetNext = false;

// Функция для обновления дисплея
function updateDisplay() {
  display.value = currentInput;
}

// Обработчик нажатия кнопки
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // Если нажата цифра или точка
    if (button.classList.contains("number")) {
      if (resetNext) {
        currentInput = "";
        resetNext = false;
      }

      // Только одна точка
      if (value === "." && currentInput.includes(".")) return;

      currentInput += value;
      updateDisplay();
    }

    // Если нажата операция
    if (
      button.classList.contains("operator") &&
      !button.classList.contains("equal")
    ) {
      if (currentInput === "" && firstOperand === null) return; // ничего не делаем

      if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
      } else if (operator) {
        firstOperand = calculate(
          firstOperand,
          parseFloat(currentInput),
          operator,
        );
        display.value = firstOperand;
      }

      operator = value;
      resetNext = true;
    }

    // Если нажата "="
    if (button.classList.contains("equal")) {
      if (!operator || currentInput === "") return;

      const result = calculate(
        firstOperand,
        parseFloat(currentInput),
        operator,
      );
      display.value = result;
      currentInput = result.toString();
      firstOperand = null;
      operator = null;
      resetNext = true;
    }
  });
});

// Функция вычислений
function calculate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Ошибка";
    default:
      return b;
  }
}
