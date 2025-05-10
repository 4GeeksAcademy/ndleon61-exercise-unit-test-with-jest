let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs["USD"];
}

function fromDollarToYen(dollarAmount) {
    let euroAmount = dollarAmount / oneEuroIs["USD"];
    return euroAmount * oneEuroIs["JPY"];
}

function fromYenToPound(yenAmount) {
    let euroAmount = yenAmount / oneEuroIs["JPY"];
    return euroAmount * oneEuroIs["GBP"];
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
