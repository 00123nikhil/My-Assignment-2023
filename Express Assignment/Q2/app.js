const express = require("express");
const app = express();

// Initialize the counter
let counter = 0;

// Middleware to parse JSON data
app.use(express.json());

// Route to get the current counter value
app.get("/", (req, res) => {
  res.json({ counter });
});

// Route to increment the counter by 1
app.post("/increment", (req, res) => {
  counter += 1;
  res.json({ counter });
});

// Route to decrement the counter by 1
app.post("/decrement", (req, res) => {
  counter -= 1;
  res.json({ counter });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
