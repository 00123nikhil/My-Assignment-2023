const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  const discountAmount = originalPrice - discountedPrice;
  const discountPercentage = (discountAmount / originalPrice) * 100;
  return Math.round(discountPercentage * 100) / 100;
};

const originalPrice = 100;
const discountedPrice = 70;

const discountPercentage = calculateDiscountPercentage(
  originalPrice,
  discountedPrice
);
console.log(discountPercentage); // Output: 30
