function up() {
  let element = document.getElementById("nobita");
  element.style.top = parseInt(element.style.top) - 5 + "px";
}
function down() {
  let element = document.getElementById("nobita");
  element.style.top = parseInt(element.style.top) + 5 + "px";
}
function left() {
  let element = document.getElementById("nobita");
  element.style.left = parseInt(element.style.left) - 5 + "px";
}
function right() {
  let element = document.getElementById("nobita");
  element.style.left = parseInt(element.style.left) + 5 + "px";
}
function moveselection(evt) {
  switch (evt.keyCode) {
    case 37:
      left();
      break;
    case 39:
      right();
      break;
    case 38:
      up();
      break;
    case 40:
      down();
      break;
  }
}
function docReady() {
  window.addEventListener("keydown", moveselection);
}
