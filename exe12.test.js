const exe12 = require("./exe12");

test('bmiCount', () => {
    expect(exe12.bmiCount(1, 45)).toEqual("45");
    expect(exe12.bmiCount(2, 90)).toEqual("22.5");
});