// Define the marks of five students in an array
const marks = [85, 92, 78, 90, 88];

// find highmark of stundents.
let highestMarks = 0;
marks.forEach((mark) => {
  highestMarks = mark > highestMarks ? mark : highestMarks;
});

console.log(`The highest marks scored by any student is ${highestMarks}`);
