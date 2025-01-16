<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Management System</title>
  <link rel="stylesheet" href="q4.css">
</head>
<body>
  <h1>Student Management System</h1>
  <div class="form-container">
    <input type="text" id="studentName" placeholder="Enter Student Name" />
    <input type="text" id="studentID" placeholder="Enter Student ID" />
    <button id="addStudentButton">Add Student</button>
  </div>

  <h2>Student List</h2>
  <table id="studentTable">
    <thead>
      <tr>
        <th>Student ID</th>
        <th>Student Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <!-- Students will be added here dynamically -->
    </tbody>
  </table>

  <script src="script.js"></script>
</body>
</html>
