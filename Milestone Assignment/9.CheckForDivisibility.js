/* 
Writq a pro[ram that takqs an array of numbqrs and prints all thq numbqrs that arq divisiblq by 3, but not by 2.
Usq a for loop and continuq statqmqnt
*/

//take a number from array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  // if (number % 2 !== 0) {
  //   continue;
  // }

  if (number % 3 === 0) {
    console.log(number);
  }
}
