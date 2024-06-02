
// Importing the Axios library to make HTTP requests from browsers or Node.js environment
const axios = require('axios');

// Defining an asynchronous function named getContractData
const getContractData = async (contractAddress) => {
    try {
        // Sending an HTTP GET request to the specified URL using Axios
        const response = await axios.get(`https://api.solscan.io/account?address=${contractAddress}`);
        // If the request is successful, return the data from the response object
        return reponse.data; // Typo here: 'reponse' should be 'response'
    } catch (error) {
        // If an error occurs during the execution of the try block, log an error message to the console
        console.error('Error fetchinng contract data: ', Error); // Typo here: 'fetchinng' should be 'fetching'
        // Return null to indicate that no data could be fetched
        return null;
    }
};

// Exporting the getContractData function from the module
module.exports = { getContractData };
