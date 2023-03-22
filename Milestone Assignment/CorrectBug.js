function doubleCartQuantities(cart) {
  for (let i = 0; i < cart.length; i++) {
    cart[i] *= 2;
  }
  return cart;
}

let cart = [1, 2, 3, 4];
console.log("Original cart: ", cart);

// Simulate the bug by halving the quantity of each item
for (let i = 0; i < cart.length; i++) {
  cart[i] /= 2;
}

console.log("Cart after bug: ", cart);

// Double the quantity of each item to correct the bug
cart = doubleCartQuantities(cart);

console.log("Cart after correction: ", cart);

// Original cart:  [1, 2, 3, 4]
// Cart after bug:  [0.5, 1, 1.5, 2]
// Cart after correction:  [1, 2, 3, 4]
