function showmessage() {
  inputMath = prompt("Enter math point: ");
  inputPhysic = prompt("Enter physic point: ");
  inputChemistry = prompt("Enter chemistry point: ");
  let math = parseFloat(inputMath);
  let physic = parseFloat(inputPhysic);
  let chemistry = parseFloat(inputChemistry);
  let average = (math + physic + chemistry) / 3;
  document.write("Your average point is: " + average);
}
