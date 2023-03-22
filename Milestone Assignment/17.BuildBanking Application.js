// Define a customer object with name and balance properties
const customer = {
  name: "John Doe",
  balance: 1000,
};

// Function to deposit an amount to the customer's account
function deposit(amount) {
  customer.balance += amount;
  console.log(
    `Deposit of $${amount} successful. New balance is $${customer.balance}`
  );
}

// Function to withdraw an amount from the customer's account
function withdraw(amount) {
  if (amount > customer.balance) {
    console.log(`Insufficient funds. Current balance is $${customer.balance}`);
  } else {
    customer.balance -= amount;
    console.log(
      `Withdrawal of $${amount} successful. New balance is $${customer.balance}`
    );
  }
}
