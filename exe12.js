//Exercise 12
const express = require("express");

const app = express();
app.use(express.json());

const port = 3005;

function bmiCount(height, weight) {
  return weight / (Math.pow(height, 2));
}
function cal(bmiCount) {
  if (bmiCount < 18.5) return 'Underweight';
  else if (bmiCount > 18.5 && bmiCount < 24.9) return 'Normal Weight';
  else if (bmiCount > 24.9 && bmiCount < 29.9) return 'Over Weight';
  else return 'Obesity';
}

app.post("/bmi/bmi-check", (req, res) => {
  let name = req.body.name;
  let height = req.body.height;
  let weight = req.body.weight;
  let bmi = bmiCount(req.body.height, req.body.weight);

  res.json({
    name: name,
    height: height,
    weight: weight,
    bmi: bmi.toFixed(2),
    bmiCategory: cal(bmi)
  });
});
app.listen(port, () => {
  console.log(`Success!`)
});

module.exports = {
  bmiCount,
  cal,
}