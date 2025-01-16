<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Personalized Greeting</title>
</head>
<body>
  <h1>Personalized Greeting Messages</h1>
  <div id="greetings"></div>

  <script>
    // Function to generate a personalized greeting message
    const generateGreeting = (name) => `Hello, ${name}! Welcome to our website.`;

    // Names of three people
    const names = ["Alice", "Bob", "Charlie"];

    // Get the div to display greetings
    const greetingsDiv = document.getElementById('greetings');

    // Generate and display greetings for each person
    names.forEach(name => {
      const greetingMessage = generateGreeting(name);
      const paragraph = document.createElement('p');
      paragraph.textContent = greetingMessage;
      greetingsDiv.appendChild(paragraph);
    });
  </script>
</body>
</html>
