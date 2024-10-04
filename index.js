const express = require('express');
const fs = require('fs'); // Import the 'fs' module for file system operations

// Function calling
const app = express();

// Middleware
app.use(express.json());

// Handle GET requests
app.get("/", (req, res) => {
    // Read data from the file and send it as a response
    fs.readFile("body.txt", "utf8", (err, data) => {
        if (err) {
            console.error('Error reading file', err);
            return res.status(500).send('Internal Server Error'); // Send error response
        }
        res.send(data); // Send the file content as a response
    });
});

// Handle POST requests
app.post("/", (req, res) => {
    const body = req.body; // Get the request body
    const file = "body.txt"; // Corrected filename

    // Write the request body to a file
    fs.writeFile(file, JSON.stringify(body), (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).send('Internal Server Error'); // Send error response
        }
        console.log('Data written to file');
        res.status(200).send('Data saved successfully'); // Send success response
    });
});

// Start the server
const PORT = 3000; // Define the port number
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('Now you can test your API at http://127.0.0.1:3000');
});