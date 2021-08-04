//Exercise 10
const express = require("express");

const app = express();
const port = 3011;

app.get("/profile", (req, res) => {
  const profile = [
    { name: "Yolana", height: 1.55, weight: 47 }
  ];

  res.json(profile);
});

app.listen(port, () => {
  console.log(`Succes!`);
});
