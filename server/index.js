// Import the express module
const express = require('express');
// Create an instance of express
const app = express();
// Define the port number the server will listen on
const PORT = 3000;

// Define a route for the root URL ('/') that sends a response 'Hello from the server!'
app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});