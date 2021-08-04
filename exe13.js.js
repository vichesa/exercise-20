//Exercise 13
const express = require("express");

const app = express();
app.use(express.json());

const port = 3002;


var factor = {
    "IDR": 14430,
    "USD": 1,
    "SGD": 1.35,
    "MYR": 4.23,
    "JPY": 109.64
};

function convert(sourceCurrency, targetCurrency, sourceAmount) {
    var initial = factor[sourceCurrency];
    var final = factor[targetCurrency];

    var inUSD = sourceAmount / initial;
    var inTarget = inUSD * final;

    return inTarget; // I think this is the right algorithm :/
};

app.post("/exchange/axchange-rate", (req, res) => {
    let sourceCurrency = req.body.sourceCurrency;
    let sourceAmount = req.body.sourceAmount;
    let targetCurrency = req.body.targetCurrency;
    let converted = convert(req.body.sourceCurrency, req.body.targetCurrency, req.body.sourceAmount);

    res.json({
        sourceCurrency: sourceCurrency,
        sourceAmount: sourceAmount,
        targetCurrency: targetCurrency,
        targetAmount: converted
    });
});

app.listen(port, () => {
    console.log(`Success!`);
});
