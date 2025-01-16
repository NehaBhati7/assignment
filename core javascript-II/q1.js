<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Square Calculator</title>
</head>
<body>
  <h1>Square Calculator</h1>
  <p>Enter a number below to calculate its square:</p>
  <input type="number" id="numberInput" placeholder="Enter a number">
  <button id="calculateButton">Calculate Square</button>
  <p id="result"></p>

  <script>
    // Arrow function to calculate the square of a number
    const square = (number) => number * number;

    // Get references to the input, button, and result elements
    const inputField = document.getElementById('numberInput');
    const calculateButton = document.getElementById('calculateButton');
    const resultDisplay = document.getElementById('result');

    // Add an event listener to the button
    calculateButton.addEventListener('click', () => {
      const inputValue = parseFloat(inputField.value); // Get and parse the input value
      if (isNaN(inputValue)) {
        resultDisplay.textContent = 'Please enter a valid number.';
      } else {
        const result = square(inputValue); // Calculate the square
        resultDisplay.textContent = `The square of ${inputValue} is ${result}.`;
      }
    });
  </script>
</body>
</html>
