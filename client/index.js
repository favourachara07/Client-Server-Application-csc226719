// Define the server URL to which the client will send a request
const serverUrl = 'http://localhost:3000';

// Asynchronous function to fetch a message from the server
async function fetchMessage() {
    try {
        // Send a GET request to the server URL
        const response = await fetch(serverUrl);
        // Parse the response text
        const data = await response.text();
        // Log the server response to the console
        console.log('Server response:', data);
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error('Error fetching message:', error);
    }
}

// Call the fetchMessage function to execute the fetch operation
fetchMessage();