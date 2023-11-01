const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});
test("prime([15]) should be false", () => {
    expect(lib.prime([15])).toBe(false);
});
test("prime([23]) should be true", () => {
    expect(lib.prime([23])).toBe(true);
});
test("fact([10]) should be 3628800", () => {
    expect(lib.fact([10])).toBe(3628800);
});
test("fact([20]) should be -1", () => {
    expect(lib.fact([20])).toBe(-1);
});