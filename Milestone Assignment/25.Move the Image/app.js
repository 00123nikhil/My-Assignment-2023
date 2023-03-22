
var image = document.getElementById("image");

var x = 0;
var y = 0;
image.style.left = x + "px";
image.style.top = y + "px";


document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    case 37: // Left arrow
      x -= 10;
      break;
    case 38: // Up arrow
      y -= 10;
      break;
    case 39: // Right arrow
      x += 10;
      break;
    case 40: // Down arrow
      y += 10;
      break;
  }

  image.style.left = x + "px";
  image.style.top = y + "px";
});
