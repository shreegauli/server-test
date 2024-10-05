const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("google.com.np"); 
});

const port = 3002;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});
