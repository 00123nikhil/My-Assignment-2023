var heading = document.getElementById("heading");

var toggleButton = document.getElementById("toggle-button");

var headingText = "The most affordable learning platform";
heading.innerHTML = headingText;

// event listener for the toggle button
toggleButton.addEventListener("click", function () {
  if (heading.innerHTML === headingText) {
    heading.innerHTML = "PW Skills ";
  } else {
    heading.innerHTML = headingText;
  }
});
