function removeDuplicatesFun(arr) {
  return [...new Set(arr)];
}


const arr = ['A','A','A','B','C'];

const uniqueArr = removeDuplicatesFun(arr);

console.log(uniqueArr);
