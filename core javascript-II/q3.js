<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tax Calculator</title>
</head>
<body>
  <h1>Tax Calculator</h1>
  <div id="results"></div>

  <script>
    // Function to create a tax calculator using closures
    const calculateTax = () => {
      // Define tax brackets as closures
      return (income) => {
        if (income <= 10000) {
          return income * 0.1; // 10% tax for income <= 10,000
        } else if (income <= 50000) {
          return (10000 * 0.1) + ((income - 10000) * 0.2); // 20% tax for income between 10,001 and 50,000
        } else {
          return (10000 * 0.1) + (40000 * 0.2) + ((income - 50000) * 0.3); // 30% tax for income above 50,000
        }
      };
    };

    // Create an instance of the tax calculator
    const taxCalculator = calculateTax();

    // Test the tax calculator with various incomes
    const incomes = [8000, 20000, 60000, 100000];
    const resultsDiv = document.getElementById('results');

    incomes.forEach((income) => {
      const tax = taxCalculator(income); // Calculate tax for the income
      const result = document.createElement('p');
      result.textContent = `Income: $${income} - Tax: $${tax.toFixed(2)}`;
      resultsDiv.appendChild(result);
    });
  </script>
</body>
</html>
