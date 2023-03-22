const calculateTableBill = (dishCosts, numPeople) => {
  let totalBill = 0;
  for (let i = 0; i < dishCosts.length; i++) {
    totalBill += dishCosts[i];
  }
  const billPerPerson = totalBill / numPeople;
  return {
    totalBill: totalBill,
    billPerPerson: billPerPerson,
  };
};

const dishCosts = [12.99, 9.99, 7.5, 14.5];
const numPeople = 4;

const tableBill = calculateTableBill(dishCosts, numPeople);
console.log(tableBill); // Output: { totalBill: 44.98, billPerPerson: 11.245 }
