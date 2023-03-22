/* Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
to perform the operation on the two numbers
*/

function calculate(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operator");
      return;
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);
}

calculate(10, 5, "+");
calculate(10, 5, "-");
calculate(10, 5, "*");
calculate(10, 5, "/");
calculate(10, 5, "%");
