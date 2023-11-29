// Import the Express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route that responds with "Hello, World!" for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Specify the port the server should listen on
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

