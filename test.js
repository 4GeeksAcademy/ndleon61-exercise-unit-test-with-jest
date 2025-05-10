const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", () => {
    expect(fromEuroToDollar(3.5)).toBeCloseTo(3.745);
});

test("One dollar should be approximately 146.26 yen", () => {
    const expected = (1 / 1.07) * 156.5;
    expect(fromDollarToYen(1)).toBeCloseTo(expected);
});

test("One yen should be approximately 0.00556 pounds", () => {
    const expected = (1 / 156.5) * 0.87;
    expect(fromYenToPound(1)).toBeCloseTo(expected);
});