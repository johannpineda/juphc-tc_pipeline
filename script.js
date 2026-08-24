document.getElementById("calculate").addEventListener("click", () => {
  const income = Number(document.getElementById("income").value || 0);
  const tax = calculateTax(income);
  document.getElementById("result").textContent = `Tax: $${tax.toFixed(2)}`;
});
