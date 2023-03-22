// Get a reference to the paragraph element
var paragraph = document.getElementById("text");

// Split the text content of the paragraph into an array of words
var words = paragraph.textContent.split(" ");

// Loop through each word in the array
for (var i = 0; i < words.length; i++) {
  // Check if the length of the word is greater than 8
  if (words[i].length > 8) {
    // Wrap the word in a span element with a yellow background color
    words[i] = "<span style='background-color: yellow'>" + words[i] + "</span>";
  }
}

// Join the words back together into a string and set the HTML content of the paragraph
paragraph.innerHTML = words.join(" ");
