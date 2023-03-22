function mixColors(color1, color2) {
  var resultingColor;

  switch (color1) {
    case "red":
      switch (color2) {
        case "blue":
          resultingColor = "purple";
          break;
        case "yellow":
          resultingColor = "orange";
          break;
        default:
          resultingColor = "Invalid color combination";
      }
      break;
    case "blue":
      switch (color2) {
        case "red":
          resultingColor = "purple";
          break;
        case "yellow":
          resultingColor = "green";
          break;
        default:
          resultingColor = "Invalid color combination";
      }
      break;
    case "yellow":
      switch (color2) {
        case "red":
          resultingColor = "orange";
          break;
        case "blue":
          resultingColor = "green";
          break;
        default:
          resultingColor = "Invalid color combination";
      }
      break;
    default:
      resultingColor = "Invalid color combination";
  }

  return resultingColor;
}

var color1 = "red";
var color2 = "blue";
var resultingColor = mixColors(color1, color2);
console.log(resultingColor); // "purple"

color1 = "red";
color2 = "yellow";
resultingColor = mixColors(color1, color2);
console.log(resultingColor); // "orange"

color1 = "blue";
color2 = "yellow";
resultingColor = mixColors(color1, color2);
console.log(resultingColor); // "green"

color1 = "orange";
color2 = "purple";
resultingColor = mixColors(color1, color2);
console.log(resultingColor); // "Invalid color combination"
