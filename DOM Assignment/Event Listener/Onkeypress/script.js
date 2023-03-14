let input = document.getElementById("input");
let display = document.getElementById("display");

input.addEventListener("keypress", function (e) {
  display.innerText = "You Pressed  " + e.key;
});
