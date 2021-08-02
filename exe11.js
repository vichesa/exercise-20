const express = require("express");

const app = express();
const port = 3001;

function bmiCount(height, weight) {
   return weight / (Math.pow(height, 2));
}
function cal(bmiCount) {
   if (bmiCount < 18.5) return 'Underweight';
   else if (bmiCount > 18.5 && bmiCount < 24.9) return 'Normal Weight';
   else if (bmiCount > 24.9 && bmiCount < 29.9) return 'Over Weight';
   else return 'Obesity';
}

app.get("/bmi", (req, res) => {
   let profile = { name: "Vichesa", height: 1.58, weight: 47, bmi: "", bmiCategory: "" };

   profile.bmi = bmiCount(profile.height, profile.weight).toFixed(2);
   profile.bmiCategory = cal(profile.bmi);

   res.json(profile);
});

app.listen(port, () => {
   console.log(`Succes!`);
});