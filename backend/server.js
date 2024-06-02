// Import the Express.js library
const express = require('express');

// Import the getContractData function from the solanaService module
const { getContractData } = require('./solanaService');

// Create an instance of the Express application
const app = express();

// Define the port number the server will listen on
const port = 3001;

// Set up a route to handle GET requests to '/analyze/:contractAddress'
app.get('/analyze/:contractAddress', async (req, res) => {
    // Extract the contractAddress parameter from the request URL
    const contractAddress = req.params.contractAddress;

    // Call the getContractData function to fetch data asynchronously
    const contractData = await getContractData(contractAddress);

    // If contractData exists, send a JSON response with success: true and the fetched data
    if (contractData) {
        res.json({ success: true, data: contractData });
    } else {
        // If contractData does not exist, send a JSON response with success: false and an error message
        res.status(500).json({ success: false, message: 'Error fetching contract data' });
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
