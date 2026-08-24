function calculateTax(income) {
  if (income <= 0) return 0;
  if (income <= 10000) return income * 0.10;
  if (income <= 50000) return 1000 + (income - 10000) * 0.20;
  return 9000 + (income - 50000) * 0.30;
}

if (typeof module !== "undefined") {
  module.exports = calculateTax;
}
