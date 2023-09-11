function showmessage() {
  input0C = prompt("nhập độ C (C): ");
  let C = parseFloat(input0C);
  let cv = (9 * C + 32 * 5) / 5;
  document.write("Độ F là: " + cv);
}
