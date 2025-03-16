// URL of the server to which the client will send a request
const serverUrl = 'http://localhost:3000';

// Function to asynchronously retrieve a message from the server
async function fetchMessage() {
    try {
        // Make a GET request to the server URL
        const response = await fetch(serverUrl);
        // Convert the response to text format
        const data = await response.text();
        // Output the server's response to the console
        console.log('Server response:', data);
    } catch (error) {
        // Handle and log any errors that occur during the request
        console.error('Error fetching message:', error);
    }
}

// Invoke the fetchMessage function to perform the request
fetchMessage();