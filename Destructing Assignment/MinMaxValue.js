function FunMinMax(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}


const arr = [2,5,1,1,2,4,10];

const { max, min } = FunMinMax(arr);

console.log("The max value is ",max); 
console.log("The min value is ",min); 
