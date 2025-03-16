// Load the Express framework
const express = require('express');
// Initialize an Express application
const app = express();
// Set the port number for the server
const PORT = 3000;

// Set up a route for the root URL ('/') that responds with a message
app.get('/', (req, res) => {
    res.send('Hello Favour Achara(CSC226719). Hello from the server!');
});

// Start the server and make it listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});