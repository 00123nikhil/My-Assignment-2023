function countVowels(name) {
  const vowels = "aeiouAEIOU"; // Define vowels
  let count = 0; // Initialize the count to zero

  for (let letter of name) {
    if (vowels.includes(letter)) {
      count++; // Increment count if the character is a vowel
    }
  }

  return count;
}

// Example usage
const name = "John Doe";
const numOfVowels = countVowels(name); // Returns 3
console.log(`The name ${name} has ${numOfVowels} vowels.`);
