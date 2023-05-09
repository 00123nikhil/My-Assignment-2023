function numberChecker(numbers) {
    return function (num) {
        return numbers.includes(num);
    };
}

// array as argument
const numbers = [1, 2, 3, 4, 5];
const checkNum = numberChecker(numbers);

console.log(checkNum(3));
console.log(checkNum(6)); 

