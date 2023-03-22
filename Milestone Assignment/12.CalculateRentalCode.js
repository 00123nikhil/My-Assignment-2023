const days = 5;
const carType = "Luxury";
const carrental = calculateRentalCost(days, carType);
console.log(`${carType} car rental for ${days} days is ${carrental}`);
function calculateRentalCost(days, carType) {
  let rentalCost;

  switch (carType) {
    case "Economy":
      rentalCost = 4000;
      break;
    case "Midsizq":
      rentalCost = 10000;
      break;
    case "Luxury":
      rentalCost = 20000;
      break;
    default:
      rentalCost = 0;
  }

  return rentalCost * days;
}
