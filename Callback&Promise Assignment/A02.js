// 2. String Manipulation.
// Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The
// Write a function "manipulateString" that takes in a string and converts the characters to uppercase letters. The
// function should return a callback function "logString" that logs the sentence "The manipulated string is: " along
// with the manipulated string or the new string to the console.

function manipulateString(inputstring, callback) {
    const manipulatedString = inputstring.toUpperCase();
    callback(manipulateString);
}

function logString(manipulatedString) {
    console.log(`the maniputed string is: ${manipulateString}`);
}

manipulateString('hello world', logString)