var button = document.getElementById("color-changer");

var colors = ["red", "blue", "green", "yellow", "purple", "orange"];

button.addEventListener("click", function () {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = randomColor;
});
