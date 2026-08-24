const calculateTax = require("../taxCalculator");

describe("Tax Calculator", () => {
  it("returns zero tax for zero income", () => expect(calculateTax(0)).toBe(0));
  it("returns zero tax for negative income", () => expect(calculateTax(-100)).toBe(0));
  it("calculates 10 percent in first bracket", () => expect(calculateTax(5000)).toBe(500));
  it("calculates boundary at 10000", () => expect(calculateTax(10000)).toBe(1000));
  it("calculates second bracket", () => expect(calculateTax(30000)).toBe(5000));
  it("calculates boundary at 50000", () => expect(calculateTax(50000)).toBe(9000));
  it("calculates third bracket", () => expect(calculateTax(60000)).toBe(12000));
});
