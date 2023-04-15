function extractElements(arr) {
  const [first, second, ...rest] = arr;
  const last = rest.pop();
  return [first, second, last];
}


const arr = [1, 2, 3, 4, 5];

const extracted = extractElements(arr);

console.log(extracted); // 
