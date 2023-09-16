const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Route to generate and send a random number
app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);
  res.json({ random: randomNumber });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
