function removeDuplicates(cart) {
  const uniqueCart = [];

  for (let item of cart) {
    if (!uniqueCart.includes(item)) {
      uniqueCart.push(item);
    }
  }

  return uniqueCart;
}

const shoppingCart = ["A", "B", "O", "A", "G", "B"];
const uniqueCart = removeDuplicates(shoppingCart);
console.log(uniqueCart);
