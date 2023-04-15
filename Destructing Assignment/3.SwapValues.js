function SwapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
}

let x = 5;
let y = 10;

[x, y] = SwapValues(x, y);

// console.log(x); 
// console.log(y); 
console.log(`Before the values are x=5 and y=10`);
console.log(`After using swapValues are  ${x}, ${y}`);