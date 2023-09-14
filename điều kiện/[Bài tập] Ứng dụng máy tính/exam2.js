let calculateString = document.getElementById("resultPrint");

function calculate(value) {
  calculateString.value += value;
}

function result() {
  calculateString.value = eval(calculateString.value);
}

function reset() {
  calculateString.value = "0";
  //   location.reload();
}
